import { motion } from "framer-motion";
import { useState } from "react";

export const Services = () => {
  const [selectedBranch, setSelectedBranch] = useState('Architectural Design');

  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch);
  };

  const branchImages = {
    'Structural Engineering': 'https://unsplash.com/photos/black-metal-frame-under-blue-sky-during-daytime-BGlWmZRXwOk',
    'Architectural Design': 'https://images.unsplash.com/photo-1495306765622-7639a965c271?',
    'Structural Design': 'https://images.unsplash.com/photo-1698978195855-461a7811b1ec?',
    'Project Management': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?',
    'Environmental Consulting': 'https://images.unsplash.com/photo-1680458841796-360a4cf4b3b1?'
  };


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

            <Sidebar onBranchSelect={handleBranchSelect}/>

            <div className="servicesDisplay">
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
                {selectedBranch}
              </motion.p>
              <div className="servicesImg">
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 1.2 },
                }}
                src={branchImages[selectedBranch]}
                alt={selectedBranch}
              />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


const Sidebar=({onBranchSelect})=>{
  const branches = [
    'Structural Engineering',
    'Architectural Design',
    'Structural Design',
    'Project Management',
    'Environmental Consulting'
  ];
  return(
    <>
      <div className="servicesBar">
      {branches.map((branch) => (
          <p key={branch} onClick={() => onBranchSelect(branch)}>
            {branch}
          </p>
        ))}
            </div>
    </>
  )
}