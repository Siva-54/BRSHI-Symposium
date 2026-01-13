import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, CheckCircle } from "lucide-react";

const dates = [
  {
    date: "January 15, 2026",
    event: "Call for Abstract Submission",
    status: "open",
  },
  {
    date: "March 20, 2026",
    event: "Last Date of Abstract Submission",
    status: "upcoming",
  },
  {
    date: "March 31, 2026",
    event: "Notification of Acceptance",
    status: "upcoming",
  },
  {
    date: "April 15, 2026",
    event: "Call for Abstract from Industry",
    status: "upcoming",
  },
  {
    date: "April 20, 2026",
    event: "Online Registration Deadline",
    status: "upcoming",
  },
  {
    date: "June 26-28, 2026",
    event: "Symposium Days",
    status: "upcoming",
  },
];

const ImportantDatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dates" className="section-padding bg-secondary" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Important Dates</h2>
          <p className="section-subtitle mx-auto">
            Mark your calendar with these key deadlines
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-6">
              {dates.map((item, index) => (
                <motion.div
                  key={item.event}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center w-16 flex-shrink-0">
                    <div
                      className={`w-4 h-4 rounded-full border-4 ${
                        item.status === "open"
                          ? "bg-accent border-accent/30 animate-pulse-glow"
                          : "bg-primary border-primary/30"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div className="flex-1 card-base flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 md:hidden">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-1">
                          {item.event}
                        </h3>
                        {item.status === "open" && (
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                            <CheckCircle className="w-3 h-3" />
                            Now Open
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="font-heading font-bold text-primary text-lg">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDatesSection;
