import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Lightbulb, Globe } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Strategic Focus",
    description: "Addressing challenges in climate-resilient road infrastructure development",
  },
  {
    icon: Users,
    title: "Expert Network",
    description: "Connecting policymakers, engineers, researchers, and industry leaders",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Showcasing cutting-edge technologies and sustainable practices",
  },
  {
    icon: Globe,
    title: "National Impact",
    description: "Aligning infrastructure with sustainability and development goals",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About the Symposium</h2>
          <p className="section-subtitle mx-auto">
            A premier national-level technical forum for highway infrastructure excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                The <strong className="text-foreground">National Symposium on Building Resilient and Sustainable Highway Infrastructure</strong> is a national-level technical forum that brings together policymakers, highway engineers, planners, researchers, academicians, and industry professionals to deliberate on strategies for developing road infrastructure that is robust, climate-resilient, and environmentally sustainable.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The symposium addresses emerging challenges posed by climate change, increasing traffic demand, extreme weather events, and resource constraints, while emphasizing sustainable planning, design, construction, and maintenance practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Key focus areas include resilient pavement and bridge design, use of innovative and recycled materials, low-carbon construction technologies, disaster risk reduction, digital tools for asset management, and lifecycle cost analysis.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="card-base"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
