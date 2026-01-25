import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Building, ArrowRight, Info } from "lucide-react";

const registrationTypes = [
  {
    icon: GraduationCap,
    type: "Student Delegates",
    price: "₹4,000",
    description: "For research scholars and students pursuing higher studies",
  },
  {
    icon: Briefcase,
    type: "Faculty Delegates",
    price: "₹7,500",
    description: "For academicians and faculty members from institutions",
  },
  {
    icon: Building,
    type: "Industry Delegates",
    price: "₹10,000",
    description: "For professionals from industry and organizations",
  },
];

const notes = [
  "Mode of Participation: Offline only",
  "Registration fees include registration kit and working lunch",
  "Registration fees are inclusive of GST",
  "Lodging and boarding are not included in the registration fee",
  "After payment, complete registration via Google Form",
];

const RegistrationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="registration" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Registration</h2>
          <p className="section-subtitle mx-auto">
            Join us at NIT Rourkela for this premier symposium
          </p>
        </motion.div>

        {/* Registration Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {registrationTypes.map((item, index) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-base text-center group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">{item.type}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
              <p className="text-3xl font-heading font-bold text-primary">{item.price}</p>
            </motion.div>
          ))}
        </div>

        {/* Notes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card-base bg-muted/50 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-lg mb-3">Important Notes</h4>
                <ul className="space-y-2">
                  {notes.map((note, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_F1xdBDn-7uf66Wgpc3EMQ7T2oO35eAHNccXysooMpt2zZg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group text-lg px-8 py-4"
          >
            Register Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Bank Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="card-base">
            <h4 className="font-heading font-semibold text-lg mb-4 text-center">Bank Account Details</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-2 font-medium text-muted-foreground">Account Name</td>
                    <td className="py-2 text-right">Continuing Education NIT, Rourkela</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-muted-foreground">Account No.</td>
                    <td className="py-2 text-right font-mono">10138951784</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-muted-foreground">Bank</td>
                    <td className="py-2 text-right">State Bank of India</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-muted-foreground">Branch</td>
                    <td className="py-2 text-right">NIT Campus Rourkela (02109)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-muted-foreground">IFSC Code</td>
                    <td className="py-2 text-right font-mono">SBIN0002109</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-muted-foreground">UPI ID</td>
                    <td className="py-2 text-right font-mono">01389517841@sbi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationSection;
