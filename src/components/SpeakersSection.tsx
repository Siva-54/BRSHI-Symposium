import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, ExternalLink } from "lucide-react";
import paridaImg from '@/assets/speakers/parida.jpg'
import animeshImg from '@/assets/speakers/animesh.jpeg'
import dharamveerImg from '@/assets/speakers/dharamveer.jpeg'
import prapoornaImg from '@/assets/speakers/krishna.jpeg'

const speakers = [
  {
    name: "Prof. Manoranjan Parida",
    role: "Keynote Speaker",
    affiliation: "(Former Director, CSIR-CRRI), IIT Roorkee",
    image: paridaImg,
  },
  {
    name: "Prof. Animesh Das",
    role: "Keynote Speaker",
    affiliation: "Professor, IIT Kanpur",
    image: animeshImg,
  },
  {
    name: "Prof. Dharamveer Singh",
    role: "Keynote Speaker",
    affiliation: "Professor, IIT Bombay",
    image: dharamveerImg,
  },
  {
    name: "Prof. B. Krishna Prapoorna",
    role: "Keynote Speaker",
    affiliation: "Professor, IIT Tirupati",
    image: prapoornaImg,
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
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-primary/20 group-hover:scale-105 transition"
              />

              <h3 className="font-heading font-semibold text-lg mb-1">{speaker.name}</h3>
              <p className="text-sm text-primary font-medium mb-1">{speaker.role}</p>
              <p className="text-xs text-muted-foreground">{speaker.affiliation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
