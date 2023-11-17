import { motion } from "framer-motion"




export const Contact = () => {
  return (
    <>
    <section className="contactSection">
        <div className="contactCon">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -10 },
                }}
            className="contactBoxOneCon">
                <div className="contactBoxOneInfo">
                    <p>{"LET'S TALK"}</p>
                    <form className="contactForm">
                        <label htmlFor="email">
                            Email
                            <input className="formInput" name="email" type="text" />
                        </label>


                        <label htmlFor="">
                            message
                            <input className="formInput" type="text" />
                        </label>

                        <div className="formSubmit">
                            <button>send</button>
                        </div>
                    </form>
                </div>
                <div className="contactBoxOneImg">
                    <img src="https://framerusercontent.com/images/uCNKh3g7TCXZrWODEjJx8oJY.jpg?scale-down-to=512" alt="" />
                </div>
            </motion.div>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 10 },
                }}
            className="contactBoxTwoCon">
                <div className="contactBoxTwoHeader">
                    <p>GET IN TOUCH</p>
                    <img src="https://framerusercontent.com/images/W8ysDjCB3fm6jwqxem13Vo1Oo.jpg?scale-down-to=512" alt="" />
                </div>

                <div className="contactBoxTwoText">
                    <p>Connect with Us: {"Let's"} Start a Conversation and Explore the Possibilities Together. Reach out to Structura Today and Experience Exceptional Service, Unparalleled Expertise, and a Collaborative Partnership That Drives Success in Every Project</p>
                </div>

                <div className="contactLink">
                    <p>INSTAGRAM</p>
                    <p>LINKEDIN</p>
                    <p>TWITTER</p>
                </div>
            </motion.div>
        </div>
    </section>
    
    </>
  )
}
