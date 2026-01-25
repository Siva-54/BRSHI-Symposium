import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Send, BookOpen, ArrowRight, ExternalLink } from "lucide-react";

const guidelines = [
  "Abstract should be relevant to the symposium themes",
  "Maximum word limit: 500 words",
  "Include title, author details, and affiliations",
  "Submitted abstracts will be reviewed by the technical committee",
  "Full papers may be invited based on abstract acceptance",
];

const AbstractSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="abstract" className="section-padding bg-secondary" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Call for Abstract</h2>
          <p className="section-subtitle mx-auto">
            Share your research and contribute to the symposium
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-base">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl">Submission Guidelines</h3>
              </div>

              <p className="text-muted-foreground mb-6">
                Academicians, researchers, and practicing professionals are invited to submit abstracts on the symposium themes and related topics. Upon the acceptance of abstracts, authors should submit full papers.
              </p>

              <ul className="space-y-3 mb-8">
                {guidelines.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://tinyurl.com/2hsu6wde"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group w-full justify-center"
              >
                Submit Your Abstract
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-base text-center">
                <Send className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-heading font-bold text-foreground">500</p>
                <p className="text-sm text-muted-foreground">Max Words</p>
              </div>
              <div className="card-base text-center">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-heading font-bold text-foreground">10</p>
                <p className="text-sm text-muted-foreground">Theme Areas</p>
              </div>
            </div>

            {/* Publications Info */}
            <div className="relative card-base border border-accent/40 
                  bg-gradient-to-br from-accent/10 via-accent/5 to-background
                  shadow-[0_0_30px_rgba(99,102,241,0.25)]
                  hover:shadow-[0_0_45px_rgba(99,102,241,0.4)]
                  transition-all duration-300">

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg 
                              bg-accent/30 
                              ring-2 ring-accent/50
                              flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2 text-accent">
                    Publications
                  </h4>
                  <p className="text-sm font-semibold text-muted-foreground">
                    The Organizing Committee is in contact with possible publishers for book chapters or indexed conference proceedings. Updates will be shared soon.
                  </p>
                </div>
              </div>
            </div>

            {/* Submission Link */}
            <div className="card-base text-center">
              <p className="text-sm text-muted-foreground mb-3">Abstract Submission Link</p>
              <a
                href="https://tinyurl.com/2hsu6wde"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-mono text-sm hover:underline break-all"
              >
                https://tinyurl.com/2hsu6wde
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AbstractSection;
