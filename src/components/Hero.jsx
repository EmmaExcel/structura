import HeroImg from "../assets/hero.png";
import { motion ,useScroll,useTransform} from "framer-motion"
import { useRef } from "react"

export const Hero = () => {
  const ref = useRef();
  const {scrollYProgress}= useScroll({
    target:ref,
    offset:["start start", "end start"]
  })

  const yImgDown = useTransform(scrollYProgress, [0,1], ["-0%", "20%"])
  const yTextDown = useTransform(scrollYProgress, [0,1], ["0%", "500%"])
  const yTextup = useTransform(scrollYProgress, [0,1], ["0%", "-600%"])
  const yTextRight = useTransform(scrollYProgress, [0,1], ["0%", "200%"])
  const yTextLeft = useTransform(scrollYProgress, [0,1], ["0%", "-200%"])


  return (
    <>
      <section ref={ref} className="heroSection">
        <div className="heroContainer">
          <div className="heroTextContainer">
            <div className="heroTextOne">
              <motion.p style={{y: yTextDown }}  initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 20 },
      }}>
                Building a Future of Excellence in Civil Engineering and
                Construction
              </motion.p>
            </div>

            <div className="heroTextTwo">
              <motion.p style={{y: yTextup }}  initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -20 },
      }}>
                Building a Legacy of Innovation and Excellence: With a rich
                history of delivering exceptional projects, Structura is a
                trusted name in the civil engineering and construction industry,
                known for our unwavering commitment to excellence.
              </motion.p>
            </div>
          </div>

          <div className="heroBigText">
            
            <motion.div  initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }} className="textTesting">
              <motion.p style={{x: yTextLeft }}>STR</motion.p>
              <p>UCT</p>
              <motion.p style={{x: yTextRight }}>URA</motion.p>
            </motion.div>
            <div className="heroImgContainer">
              <motion.img style={{y: yImgDown }} src={HeroImg} alt="" />
              <button>Contact us</button>
            </div>
            <p className="herosmallText">
              Driving Sustainable Development: At Structura, we recognize the
              importance of sustainable practices. We integrate environmentally
              conscious design principles and materials to develop resilient and
              eco-friendly solutions for a greener future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
