"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Event Coordinator at BrightMinds",
      avatar: "https://i.pravatar.cc/150?img=1",
      content:
        "Euvo has completely simplified how we organize conferences. Sending invites and managing RSVPs is now effortless, and our attendees love the smooth experience.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Community Manager at Scale Co",
      avatar: "https://i.pravatar.cc/150?img=3",
      content:
        "We host dozens of meetups every year, and Euvo’s calendar sync and email reminders keep everyone aligned. No more missed updates or last-minute confusion.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "University Events Lead at DataFlow",
      avatar: "https://i.pravatar.cc/150?img=5",
      content:
        "Managing student events used to be chaotic. With Euvo, scheduling, RSVPs, and notifications are all in one place. It’s made our workflows so much smoother.",
      rating: 5,
    },
    {
      name: "Robert Taylor",
      role: "Operations Head at FinanceFlow",
      avatar: "https://i.pravatar.cc/150?img=15",
      content:
        "For corporate events, reliability is key. Euvo has never let us down—attendees get timely updates, and our internal team saves hours of coordination work.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Director of Programs at StreamlineOps",
      avatar: "https://i.pravatar.cc/150?img=17",
      content:
        "The automated notifications are a game-changer. Whether it’s reminders or last-minute changes, Euvo ensures our guests always stay informed.",
      rating: 5,
    },
    {
      name: "Kevin Lee",
      role: "Founder at NextGen Solutions",
      avatar: "https://i.pravatar.cc/150?img=19",
      content:
        "We’ve hosted everything from small workshops to large summits using Euvo. It scales beautifully and keeps everything running smoothly.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Events Manager at TechBridge",
      avatar: "https://i.pravatar.cc/150?img=23",
      content:
        "Our transition to Euvo was seamless. The onboarding process was so easy that our team started planning events immediately without training hassles.",
      rating: 5,
    },
    {
      name: "Elena Petrov",
      role: "CEO at GrowthMetrics",
      avatar: "https://i.pravatar.cc/150?img=25",
      content:
        "From intimate networking dinners to full-scale conferences, Euvo adapts to our needs. It’s the only tool we trust for managing every type of event.",
      rating: 5,
    },
    {
      name: "Michael Chang",
      role: "Head of Events at DataDriven",
      avatar: "https://i.pravatar.cc/150?img=27",
      content:
        "Euvo has transformed how our distributed team collaborates. Real-time updates mean no more email chains—we’re always on the same page.",
      rating: 5,
    },
  ];

  const StarIcon = () => (
    <svg
      className="w-4 h-4 text-yellow-500"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20 flex flex-col gap-3"
        >
          <h2 className="text-xl font-semibold sm:text-2xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
            Loved by Event Teams Worldwide
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-center">
            Thousands of organizers trust Euvo to plan, manage, and deliver
            seamless events.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="break-inside-avoid mb-8"
            >
              <div className="p-6 rounded-xl bg-card border border-border transition-colors duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-linear-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center text-sm font-medium border border-primary/20">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
