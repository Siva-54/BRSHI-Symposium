import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  BookOpen,
  ArrowRight,
  ExternalLink,
  FolderDown,
  Info
} from "lucide-react";

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

        {/* Section Title */}
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

        {/* GRID LAYOUT */}
        <div className="grid gap-8 max-w-6xl mx-auto lg:grid-cols-2 lg:items-stretch">

          {/* LEFT LARGE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:row-span-2"
          >
            <div className="card-base h-full flex flex-col">

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl">
                  Submission Guidelines
                </h3>
              </div>

              <p className="text-muted-foreground mb-8">
                Academicians, researchers, and practicing professionals are
                invited to submit abstracts on the symposium themes and related
                topics. Upon the acceptance of abstracts, authors should submit
                full papers.
              </p>

              <ul className="space-y-3 mb-10">
                {guidelines.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Buttons section pushed to bottom */}
              <div className="mt-auto space-y-4">

                <a
                  href="https://drive.google.com/drive/folders/1L6k1GY1i4x_ofB2fRUT6X6hMbyUHLucJ?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary group flex items-center justify-center"
                >
                  <FolderDown className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Download Abstract Guidelines and Templates
                </a>

                {/* SMALL CMT NOTE */}
                <div className="border-l-4 border-accent bg-accent/5 text-sm text-muted-foreground p-3 rounded-md flex gap-2 items-start">
                  <Info className="w-4 h-4 text-accent flex-shrink-0 mt-[2px]" />
                  <span>
                    The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                  </span>
                </div>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSenm0EL5oJ8MK93B5qJ4GwO4Bd9-ha9fS9v1FvkN8qoJBW6RA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group w-full flex items-center justify-center"
                >
                  Submit Your Abstract
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

              </div>
            </div>
          </motion.div>

          {/* THEMES CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="card-base p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-7 h-7 text-primary" />
                <h3 className="font-heading font-bold text-lg">
                  Symposium Themes
                </h3>
              </div>

              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Advanced Pavement Materials and Sustainable Technologies</li>
                <li>Resilient Pavement Design, Analysis, and Performance</li>
                <li>Ground Improvement and Pavement Geotechnics</li>
                <li>Pavement Distress, Maintenance, and Asset Management</li>
                <li>Smart, Digital, and Emerging Highway Technologies</li>
                <li>Highway Geometry, Traffic Operations, and Safety</li>
                <li>Resilient and Performance-Based Design of Highway Structures</li>
                <li>Sustainable Materials, Rehabilitation and Structural Health Monitoring</li>
                <li>Climate-Resilient Water Resources and Drainage Systems for Highway Infrastructure</li>
                <li>Environmental Sustainability and Impact Mitigation in Highway Development</li>
              </ul>

              <Link
                to="/themes"
                className="btn-primary w-full mt-6 flex items-center justify-center group"
              >
                View All Themes
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* PUBLICATIONS CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div
              className="card-base border border-accent/40 
              bg-gradient-to-br from-accent/10 via-accent/5 to-background
              shadow-[0_0_30px_rgba(99,102,241,0.25)]
              hover:shadow-[0_0_45px_rgba(99,102,241,0.4)]
              transition-all duration-300 p-6 h-full"
            >

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/30 ring-2 ring-accent/50 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl">
                  Publications
                </h3>
              </div>

              <p className="text-muted-foreground">
                The Organizing Committee is in contact with possible publishers
                for book chapters or indexed conference proceedings. Updates
                will be shared soon.
              </p>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AbstractSection;