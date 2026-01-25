import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layers,
  Ruler,
  Building2,
  Mountain,
  Construction,
  Leaf,
  Cpu,
  MapPin,
  Car,
  Settings,
} from "lucide-react";

const themes = [
  {
    icon: Layers,
    title: "Pavement Material & Characterization",
    description: "Advanced materials testing, characterization techniques, and performance evaluation",
  },
  {
    icon: Ruler,
    title: "Analysis & Design of Pavement",
    description: "Structural design methods, stress analysis, and load transfer mechanisms",
  },
  {
    icon: Building2,
    title: "Concrete Technology",
    description: "Innovative concrete mixtures, durability enhancement, and sustainability",
  },
  {
    icon: Mountain,
    title: "Soil Stabilization",
    description: "Ground improvement techniques and foundation engineering for highways",
  },
  {
    icon: Construction,
    title: "Failure & Rehabilitation of Pavement",
    description: "Distress identification, maintenance strategies, and rehabilitation methods",
  },
  {
    icon: Leaf,
    title: "Sustainable Materials",
    description: "Recycled materials, green technologies, and eco-friendly alternatives",
  },
  {
    icon: Cpu,
    title: "Emerging Technologies",
    description: "Smart pavements, IoT applications, and digital transformation",
  },
  {
    icon: MapPin,
    title: "Geometric Design of Highways",
    description: "Alignment design, sight distance, and safety considerations",
  },
  {
    icon: Car,
    title: "Traffic Engineering Aspects",
    description: "Traffic flow analysis, capacity studies, and congestion management",
  },
  {
    icon: Settings,
    title: "Pavement Management Systems",
    description: "Asset management, lifecycle analysis, and decision support tools",
  },
];

const ThemesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="themes" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Symposium Themes</h2>
          <p className="section-subtitle mx-auto">
            Explore the key focus areas driving innovation in highway infrastructure
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-base group text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <theme.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-base mb-2 leading-tight">
                {theme.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {theme.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
