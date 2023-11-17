import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

export const Responses = () => {
  const swiper = useSwiper();

  const data = [
    {
      id: 1,
      name: "Sarah Thompson",
      position: "CEO of Thompson Properties",
      role: "Residential Property Developer",
      desc: "Working with Structura has been a game-changer for our residential development projects. Their expertise in engineering and construction has consistently exceeded our expectations. From concept to completion, Structura's attention to detail, innovative solutions, and commitment to quality have ensured the success of our projects. Their collaborative approach and seamless execution have made them an invaluable partner in bringing our vision to life.",
      img: "https://framerusercontent.com/images/mjT4qeIkbM5oBfj12qKn9VQRt0.jpg?scale-down-to=512",
    },
    {
      id: 2,
      name: "John Rodriguez",
      position: "Consultant at Rodriguez Infrastructure",
      role: "Infrastructure Consultant",
      desc: "I have had the pleasure of collaborating with Structura on various infrastructure projects, and their professionalism and technical proficiency have always impressed me. Their team's deep understanding of complex engineering challenges and their ability to deliver creative and sustainable solutions sets them apart. Structura's commitment to excellence and their focus on client satisfaction make them a trusted partner in the industry. I highly recommend their services for any engineering or construction project.",
      img: "https://framerusercontent.com/images/hAPd2b7s33DxOYXaOIVlPJ41I.jpg?scale-down-to=512",
    },
    {
      id: 3,
      name: "John Rodriguez",
      position: "Consultant at Rodriguez Infrastructure",
      role: "Infrastructure Consultant",
      desc: "I have had the pleasure of collaborating with Structura on various infrastructure projects, and their professionalism and technical proficiency have always impressed me. Their team's deep understanding of complex engineering challenges and their ability to deliver creative and sustainable solutions sets them apart. Structura's commitment to excellence and their focus on client satisfaction make them a trusted partner in the industry. I highly recommend their services for any engineering or construction project.",
      img: "https://framerusercontent.com/images/hAPd2b7s33DxOYXaOIVlPJ41I.jpg?scale-down-to=512",
    },
    {
        id: 4,
        name: "Sarah Thompson",
        position: "CEO of Thompson Properties",
        role: "Residential Property Developer",
        desc: "Working with Structura has been a game-changer for our residential development projects. Their expertise in engineering and construction has consistently exceeded our expectations. From concept to completion, Structura's attention to detail, innovative solutions, and commitment to quality have ensured the success of our projects. Their collaborative approach and seamless execution have made them an invaluable partner in bringing our vision to life.",
        img: "https://framerusercontent.com/images/mjT4qeIkbM5oBfj12qKn9VQRt0.jpg?scale-down-to=512",
      },
  ];
  return (
    <>
      <section className="responsesSection">
        <div className="responsesContainer">
          <div className="responsesHeader">
            <div className="responHeaderOneContainer">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -50 },
                }}
                className="reponHeaderOne"
              >
                <p>CLIENTS RESPONSES</p>
                <p>
                  Hear from Our Valued Partners as They Share Their Experiences,
                  Testimonials, and the Remarkable Results Achieved Through
                  Collaborative Relationships, Trust, and Engineering
                  Excellence.
                </p>
              </motion.div>
            </div>
            <div className="responHeaderTwoContainer">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 50 },
                }}
                className="responHeaderTwo"
              >
                <p>Elevating Client Satisfaction</p>
                <p>
                  Discover the Resounding Praise and Appreciation Shared by Our
                  Valued Clients. From Their Firsthand Experiences and
                  Unfiltered Feedback, Witness the Trust, Reliability, and
                  Outstanding Results that Have Made Structura the Preferred
                  Choice in the Civil Engineering and Construction Industry.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="responSliderContainer">
            <div className="sliderboxList">
              <Swiper
                spaceBetween={20}
                slidesPerView={2}
                className="sliderboxList"
              >
                {data.map((data) => (
                  <SwiperSlide key={data.id}>
                    <SliderBox  img={data.img} desc={data.desc} name={data.name} position={data.position} role={data.role}/>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="responSliderNav">
              <button onClick={() => swiper.slidePrev()}>Previous</button>
              <button onClick={() => swiper.slideNext()}>Next</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const SliderBox = ({img, position, role,name,desc}) => {
  return (
    <>
      <div className="responSliderBox">
        <div className="responBoxHeaderContainer">
          <div className="repsonBoxImg">
            <img src={img} alt="" />
          </div>
          <div className="responBoxHeaderText">
            <p>{name}</p>
            <p>{position}</p>
            <p>{role}</p>
          </div>
        </div>

        <div className="responBoxText">
          <p>
           {desc}
          </p>
        </div>
      </div>
    </>
  );
};
