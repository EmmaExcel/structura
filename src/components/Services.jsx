import { motion } from "framer-motion";

export const Services = () => {
  return (
    <>
      <section className="servicesSection">
        <div className="servicesContainer">
          <div className="servicesInfo">
            <div className="servicesHeader">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                OUR SERVICES
              </motion.p>
            </div>

            <div className="servicesText">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -50 },
                }}
              >
                From Conceptualization to Construction, Our Services Ignite
                Possibilities and Bring Your Vision to Life with Unmatched
                Expertise, Impeccable Precision, and Unforgettable Craftsmanship
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 30 },
                }}
              >
                Building Bridges, Skyscrapers, and Communities, Our
                Comprehensive Services Combine Creativity, Technical Mastery,
                and Collaborative Partnerships to Deliver Remarkable Projects
                that Inspire and Stand the Test of Time.
              </motion.p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 20 },
              }}
              className="servicesBoxContainer"
            >
              <div className="servicesBox">
                <p>7+</p>
                <p>Years Experience</p>
              </div>
              <div className="servicesBox">
                <p>10+</p>
                <p>Years Experience</p>
              </div>
              <div className="servicesBox">
                <p>10+</p>
                <p>Satisfied Customer</p>
              </div>
              <div className="servicesBox">
                <p>15+</p>
                <p>Remarkable Projects</p>
              </div>
            </motion.div>
          </div>

          <div className="sevicesDisplayContainer">
            <div className="servicesBar">
              <p>Structural engineering</p>
              <p>Architectural design</p>
              <p>Structural design</p>
              <p>Project management</p>
              <p>Environmental consulting</p>
            </div>
            <div className="sevicesDisplay">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -20 },
                }}
              >
                Architectural design
              </motion.p>
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 1.2 },
                }}
                src="https://plus.unsplash.com/premium_photo-1680553491336-644d5955ea50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
                alt="picture"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
