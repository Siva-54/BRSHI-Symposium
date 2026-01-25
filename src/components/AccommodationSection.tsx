import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Hotel, Building2, MapPin, Info } from "lucide-react";

const AccommodationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="accommodation" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Accommodation</h2>
          <p className="section-subtitle mx-auto">
            Stay options near the symposium venue
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Guest House */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-base"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-2">Institute Guest House</h3>
                <p className="text-muted-foreground mb-4">
                  A limited number of rooms are available in the Institute Guest House on a sharing basis. Early booking is recommended.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <MapPin className="w-4 h-4" />
                  <span>NIT Rourkela Campus</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hotels */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-base"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Hotel className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-2">Nearby Hotels</h3>
                <p className="text-muted-foreground mb-4">
                  Several good hotels are available in Rourkela city. Participants can book in advance with prior confirmation.
                </p>
                <div className="flex items-center gap-2 text-sm text-accent">
                  <MapPin className="w-4 h-4" />
                  <span>Rourkela City</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
            <Info className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Accommodation is not included in the registration fee. Participants are requested to make their own arrangements. For assistance, contact the organizing committee.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccommodationSection;
