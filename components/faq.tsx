"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
      title: "Is Euvo free to use?",
      content: (
        <div className="text-muted-foreground">
          Yes! Euvo offers a free plan that lets you create events, manage
          RSVPs, and use basic calendar features. Paid plans unlock advanced
          collaboration and analytics.
        </div>
      ),
    },
    {
      title: "Can I manage multiple events at once?",
      content: (
        <div className="text-muted-foreground">
          Absolutely. Euvo allows you to organize and track multiple events
          simultaneously, with real-time RSVP updates and notifications for each
          event.
        </div>
      ),
    },
    {
      title: "Can I notify attendees automatically?",
      content: (
        <div className="text-muted-foreground">
          Yes, Euvo includes automated email and notification tools to keep your
          attendees informed about updates, reminders, and last-minute changes.
        </div>
      ),
    },
    {
      title: "How can I get support or contribute?",
      content: (
        <div className="text-muted-foreground">
          You can reach out to our support team directly through the app. If
          you&apos;d like to contribute to Euvo&apos;s development, check our{" "}
          <a
            href="https://github.com/gonzalochale/nextui-saas-landing-template"
            className="text-primary underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub repository
          </a>{" "}
          for issues, features, or pull requests.
        </div>
      ),
    },
  ];

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="relative w-full max-w-(--breakpoint-xl) mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <h4 className="text-2xl font-bold sm:text-3xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          FAQ
        </h4>
        <p className="max-w-xl text-muted-foreground text-center">
          Frequently asked questions about organizing events with Euvo.
        </p>
      </div>
      <div className="flex w-full max-w-lg">
        <Accordion type="multiple" className="w-full">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="text-muted-foreground"
            >
              <AccordionTrigger className="text-left">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
