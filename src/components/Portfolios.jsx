export const Portfolios = () => {
  const data = [
    {
      id: 1,
      location: "Sunhaven City",
      projectName: "Solara Heights: A Sustainable residential Oasis",
      image: "https://framerusercontent.com/images/W4LbBj6VfyE1KhzgMWWHm3NQx0.png?scale-down-to=1024",
    },
    {
      id: 2,
      location: "Harbor Bay",
      projectName: "Maritime Center : Transforming Waterfront Connetcivity",
      image: "https://framerusercontent.com/images/pJEOjtdKBLIrk2vqdkeaPNbvjvw.png?scale-down-to=1024",
    },
    {
      id: 3,
      location: "Evergreen Valley",
      projectName: "Verdant View Estates : Luxuary Living Nature's Splendor",
      image: "https://framerusercontent.com/images/Sx7TW3xHnkg2ivy9hTWADZYzTI.png?scale-down-to=1024",
    },
  ];


  const videoSrc = "https://framerusercontent.com/assets/89t1yQcThZgs6dlZ0lIGBuJDBXI.mp4";
  
  return (
    <>
      <section className="portSection">
        <div className="portContainer">
          <div className="portHeaderContainer">
            <div className="portHeader">
              <p>PORTFOLIOS</p>
              <p>Exploring Our Showcase of Engineering Brilliance</p>
              <p>
                Discover the Diverse Range of Remarkable Projects That Define
                Our Unparalleled Expertise and Inspire Boundless Possibilities.
              </p>
              <button>see all</button>
            </div>

            <div className="portHeaderButton">
              <button>past</button>
              <button>ongoing</button>
            </div>
          </div>

          {/* MAP DATA INTO IT */}
          <div className="projectContainer">
            {data.map((data) => (
              <div
                key={data.id}
                className="projectBox"
                style={{ background: `url(${data.image})` , backgroundSize:"cover"}}
              >
                <p>
                  Location : <span>{data.location}</span>
                </p>
                <p>
                  Project Name : <span>{data.projectName}</span>
                </p>
              </div>
            ))}

          </div>
            <div className="projectBoxBotText">
              <p>
                From Foundations to Finishing Touches, Our Services Embrace
                Every Aspect of the Construction Process, Tailoring Solutions to
                Your Unique Requirements, and Delivering Unforgettable Results
                That Exceed Expectations.
              </p>
            </div>

          <div className="projectLastContainer">
            <div className="projectImgContainer">
              <video autoPlay="true">
                <source  src={videoSrc} type="video/mp4"/>
              </video>
              
            </div>

            <p>
              Crafting Architectural Marvels, Taming Complex Challenges, and
              Engineering the Extraordinary, Our Services Are a Symphony of
              Passion, Perseverance, and Precision, Enabling Your Dreams to Soar
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
