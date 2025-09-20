import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { getUserFromToken } from "./auth";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://euvo-mauve.vercel.app"],
    credentials: true,
  })
);

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(
  "/graphql",
  graphqlHTTP(async (req) => ({
    schema,
    context: { user: await getUserFromToken(req as any) },
    graphiql: true, // Enable GraphiQL for testing
  }))
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}/graphql`);
});
