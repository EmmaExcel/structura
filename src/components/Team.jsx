
import Logo from "../assets/logo.png";
import SOOFT from "../assets/sOOFTCARD.png";
import ABCARD from "../assets/ABCARD.png";
import IYOCARD from "../assets/IYOCARD.png";
import STCARD from "../assets/STCARD.png";
import { motion } from "framer-motion";
export const Team = () => {
  const data = [
    {
      id: 1,
      name: "Engr. FUNMILUYI",
      position: "Architectural Designer",
      role: "Civil Engineer",
      img:SOOFT ,
    },
    {
      id: 2,
      name: "Engr. FATUSIN",
      position: "Structural Designer",
      role: "Civil Engineer",
      img: IYOCARD,
    },
    {
      id: 3,
      name: "Engr. OGUNDALU",
      position: "Structural Designer",
      role: "Civil Engineer",
      img: ABCARD,
    },
    {
      id: 4,
      name: "Engr. OGUNMADE",
      position: "Structural Designer",
      role: "Civil Engineer",
      img: STCARD,
    },
    
  ];
  return (
    <>
      <section className="teamSection">
        <div className="teamContainer">
          <div className="teamHeader">
            <marquee behavior="scroll" direction="left" scrollamount="10">
              <div className="scrollheader">
                <img src={Logo} className="scrollImg" alt="" />
                <p>MEET THE TEAM</p>
                <img src={Logo}  className="scrollImg"alt="" />
                <p>MEET THE TEAM</p>
                <img src={Logo} className="scrollImg" alt="" />
                <p>MEET THE TEAM</p>
                <img src={Logo} className="scrollImg" alt="" />
              </div>
            </marquee>
          </div>

          <div className="teamListContainer">
            {data.map((data) => (
              <>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  variants={{
                    visible: { opacity: 1, scale:1},
                    hidden: { opacity: 0, scale: 0.6},
                  }}
                className="teamBox">
                  <div className="teamBoxImg">
                    <img src={data.img} alt="" />
                  </div>

                  <div className="teamName">
                    <p>{data.name}</p>
                  </div>

                  <div className="TeamRoles">
                    <p>{data.position}</p>
                    <p>{data.role}</p>
                  </div>
                </motion.div>
              </>
            ))}
          </div>

          <div className="TeamInfo">
            
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -50 },
                }}
              className="teamInfoOne">
                <p>
                  At Structura, we believe that behind every successful project
                  lies a dedicated and talented team. Our "Meet the Team"
                  section is where you get to know the extraordinary individuals
                  who bring their passion, skills, and unwavering commitment to
                  engineering excellence.
                </p>
              </motion.div>
           
            
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 50 },
                }}
              className="teamInfoTwo">
                <p>
                  Each member of our team is handpicked for their expertise,
                  experience, and innovative mindset. From civil engineers and
                  architects to project managers and design specialists, our
                  diverse and multidisciplinary team is united by a shared
                  vision of transforming ideas into reality.
                </p>
              </motion.div>
            
          </div>
        </div>
      </section>
    </>
  );
};
