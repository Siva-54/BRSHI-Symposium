import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, UserCog } from "lucide-react";
import Image from "./Image";
import chair2 from "../assets/chair2.jpg"
import chair1 from "../assets/chair1.jpg"
import convenor1 from "../assets/conenor1.jpg"
import convenor2 from "../assets/convenor2.jpg"
import director from "../assets/director.jpg"

const committee = {
  patron: 
    {
      name: "Prof. K. Umamaheshwar Rao",
      role: "Director, NIT Rourkela",
      image: director,
    },
  chairs: [
    {
      name: "Prof. Suresh Prasad Singh",
      role: "HOD, Civil Engineering",
      image: chair1,
    },
    {
      name: "Prof. Mahabir Panda",
      role: "Symposium Chair",
      image: chair2,
    },
  ],
  convenors: [
    {
      name: "Dr. Aditya Kumar Das",
      role: "Convenor",
      image: convenor1,
    },
    {
      name: "Dr. Gourab Saha",
      role: "Convenor",
      image: convenor2,
    },
  ],
};

const CommitteeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="committee" className="section-padding bg-secondary" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Organizing Committee</h2>
          <p className="section-subtitle mx-auto">
            Meet the distinguished committee members organizing this symposium
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-10">
          {/* Patron */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm">
                <Award className="w-4 h-4" />
                Patron
              </span>
            </div>
            <div className="card-base text-center max-w-md mx-auto border-accent/20">
              <div className="w-32 h-32 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Image src={director} size={128} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-1">{committee.patron.name}</h3>
              <p className="text-primary font-medium">{committee.patron.role}</p>
            </div>
          </motion.div>

          {/* Symposium Chairs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                <Users className="w-4 h-4" />
                Symposium Chairs
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {committee.chairs.map((chair, index) => (
                <div key={index} className="card-base text-center">
                  <div className="w-32 h-32 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Image src={chair.image} size={128} />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-1">
                    {chair.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {chair.role}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Convenors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground font-semibold text-sm">
                <UserCog className="w-4 h-4" />
                Convenors
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {committee.convenors.map((convenor, index) => (
                <div key={index} className="card-base text-center">
                  <div className="w-32 h-32 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                    <Image src={convenor.image} size={128} />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-1">
                    {convenor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {convenor.role}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;
