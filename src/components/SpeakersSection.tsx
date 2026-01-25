import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, ExternalLink } from "lucide-react";

const speakers = [
  {
    name: "Distinguished Speaker",
    role: "Keynote Speaker",
    affiliation: "IISc Bangalore",
    placeholder: true,
  },
  {
    name: "Eminent Professor",
    role: "Keynote Speaker",
    affiliation: "IIT Delhi",
    placeholder: true,
  },
  {
    name: "Industry Expert",
    role: "Invited Speaker",
    affiliation: "NHAI",
    placeholder: true,
  },
  {
    name: "Research Scholar",
    role: "Invited Speaker",
    affiliation: "NIT Rourkela",
    placeholder: true,
  },
];

const SpeakersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="speakers" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Keynote Speakers</h2>
          <p className="section-subtitle mx-auto">
            Learn from leading experts in highway engineering and infrastructure
          </p>
        </motion.div>

        {/* Announcement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="card-base border-primary/20 bg-primary/5 text-center">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Coming Soon!</strong> Eminent academicians from IISc/IITs/NITs/foreign Universities and professionals from reputed organizations will deliver keynote and invited lectures.
            </p>
          </div>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="card-base text-center group"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                <User className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* <h3 className="font-heading font-semibold text-lg mb-1">{speaker.name}</h3> */}
              <p className="text-sm text-primary font-medium mb-1">{speaker.role}</p>
              {/* <p className="text-xs text-muted-foreground">{speaker.affiliation}</p> */}

              {speaker.placeholder && (
                <span className="inline-block mt-3 text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                  To be announced
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
