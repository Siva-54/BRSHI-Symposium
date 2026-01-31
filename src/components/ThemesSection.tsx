import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layers,
  Ruler,
  Mountain,
  Construction,
  Cpu,
  MapPin,
} from "lucide-react";

const themes = [
  {
    icon: Layers,
    title: "Advanced Pavement Materials and Sustainable Technologies",
    points: [
      "Pavement materials and characterization",
      "Concrete technology",
      "Sustainable and recycled materials",
      "Low-carbon and eco-friendly material innovations",
    ],
  },
  {
    icon: Ruler,
    title: "Resilient Pavement Design, Analysis, and Performance",
    points: [
      "Pavement structural design and analysis",
      "Mechanistic–empirical approaches",
      "Climate-resilient pavement systems",
      "Performance-based design methodologies",
    ],
  },
  {
    icon: Mountain,
    title: "Ground Improvement and Pavement Geotechnics",
    points: [
      "Soil stabilization and ground improvement techniques",
      "Innovative and bio-based stabilizers",
      "Subgrade performance and durability",
      "Geotechnical aspects in pavement",
      "Utilization of marginal/weak soils",
    ],
  },
  {
    icon: Construction,
    title: "Pavement Distress, Maintenance, and Asset Management",
    points: [
      "Pavement failure mechanisms",
      "Maintenance and rehabilitation strategies",
      "Pavement management systems",
      "Lifecycle cost and performance assessment",
    ],
  },
  {
    icon: Cpu,
    title: "Smart, Digital, and Emerging Highway Technologies",
    points: [
      "Smart pavements and sensing technologies",
      "AI, machine learning, and digital twins",
      "Intelligent transport systems (ITS)",
      "Automation in construction and monitoring",
    ],
  },
  {
    icon: MapPin,
    title: "Highway Geometry, Traffic Operations, and Safety",
    points: [
      "Geometric design of highways",
      "Traffic flow and operations",
      "Road safety analysis and audits",
      "Sustainable and safe mobility solutions",
      "Highway infrastructure planning",
    ],
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
          className="text-center mb-6"
        >
          <h2 className="section-title">Symposium Themes</h2>

          {/* Statement Added */}
          <p className="section-subtitle mx-auto">
            The themes of the symposium focus on resilient and sustainable road
            infrastructure and include, but are not limited to the following below.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-base group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <theme.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              <h3 className="font-heading font-semibold text-lg mb-3 leading-tight">
                {theme.title}
              </h3>

              {/* Render Points */}
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {theme.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
