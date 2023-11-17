import { motion } from "framer-motion";


export const Portfolios = () => {
  const data = [
    {
      id: 1,
      location: "Sunhaven City",
      projectName: "Solara Heights: A Sustainable residential Oasis",
      image:
        "https://framerusercontent.com/images/W4LbBj6VfyE1KhzgMWWHm3NQx0.png?scale-down-to=1024",
    },
    {
      id: 2,
      location: "Harbor Bay",
      projectName: "Maritime Center : Transforming Waterfront Connetcivity",
      image:
        "https://framerusercontent.com/images/pJEOjtdKBLIrk2vqdkeaPNbvjvw.png?scale-down-to=1024",
    },
    {
      id: 3,
      location: "Evergreen Valley",
      projectName: "Verdant View Estates : Luxuary Living Nature's Splendor",
      image:
        "https://framerusercontent.com/images/Sx7TW3xHnkg2ivy9hTWADZYzTI.png?scale-down-to=1024",
    },
  ];

  const videoSrc = "https://media.giphy.com/media/ru7IH0oTmfIK6tRTId/giphy.gif";

  return (
    <>
      <section className="portSection">
        <div className="portContainer">
          <div className="portHeaderContainer">
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               transition={{ duration: 0.3 }}
               variants={{
                 visible: { opacity: 1, x: 0 },
                 hidden: { opacity: 0, x: -50 },
               }}
            className="portHeader">
              <p>PORTFOLIOS</p>
              <p>Exploring Our Showcase of Engineering Brilliance</p>
              <p>
                Discover the Diverse Range of Remarkable Projects That Define
                Our Unparalleled Expertise and Inspire Boundless Possibilities.
              </p>
              <button>see all</button>
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
             className="portHeaderButton">
              <button>past</button>
              <button>ongoing</button>
            </motion.div>
          </div>

          {/* MAP DATA INTO IT */}
          <div className="projectContainer">
            {data.map((data) => (
              <div
                key={data.id}
                className="projectBox"
                style={{
                  background: `url(${data.image})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="projectBoxText">
                  <p>
                    Location : <span>{data.location}</span>
                  </p>
                  <p>
                    Project Name : <span>{data.projectName}</span>
                  </p>
                </div>

                <button className="test">View</button>
              </div>
            ))}
          </div>
          <div className="projectBoxBotText">
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
              From Foundations to Finishing Touches, Our Services Embrace Every
              Aspect of the Construction Process, Tailoring Solutions to Your
              Unique Requirements, and Delivering Unforgettable Results That
              Exceed Expectations.
            </motion.p>
          </div>

          <div className="projectLastContainer">
            <div className="projectImgContainer">
              <img src={videoSrc} alt="" />
            </div>

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
              Crafting Architectural Marvels, Taming Complex Challenges, and
              Engineering the Extraordinary, Our Services Are a Symphony of
              Passion, Perseverance, and Precision, Enabling Your Dreams to Soar
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};
