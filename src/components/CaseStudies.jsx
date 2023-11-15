export const CaseStudies = () => {
  const data = [
    {
      id: 1,
      location: "Metropolis Central",
      projectName:
        "Revitalizing Urban Connectivity: The Greenway Express Project",
      desc: "Discover how Structura's innovative engineering solutions transformed a bustling cityscape by designing and implementing an eco-friendly and efficient urban transportation network, seamlessly connecting neighborhoods, reducing congestion, and enhancing the quality of urban life.",
      image:
        "https://framerusercontent.com/images/5iqlpieudlpDpjZotivJT33Iw8.png?scale-down-to=1024",
      date: "2022",
    },
    {
      id: 2,
      location: "Historic Townscape",
      projectName:
        "Preserving Heritage, Creating Modern Spaces: The Renaissance Restoration Initiative",
      desc: " Explore how Structura successfully restored a historic landmark, striking the perfect balance between preserving architectural heritage and integrating modern functionalities. Witness the seamless blend of timeless elegance and contemporary design, breathing new life into a cherished cultural gem.",
      image:
        "https://framerusercontent.com/images/D945jfelQnfAcHcnCgGxpBJT0I.png?scale-down-to=1024",
      date: "2019",
    },
    {
      id: 3,
      location: "Vertropolis City",
      projectName:
        "Innovating Sustainability in High-Rise Design: The Sky Gardens Tower",
      desc: "Delve into the visionary engineering behind the Sky Gardens Tower, an iconic high-rise that harmoniously integrates lush green spaces, renewable energy systems, and sustainable features. Witness how Structura's design revolutionized urban living, promoting a greener, healthier, and more sustainable future",
      image:
        "https://framerusercontent.com/images/ElxW5iOjt4AmdFuvAJWEXyk4fF0.png?scale-down-to=1024",
      date: "2021",
    },
  ];

  return (
    <>
      <section className="caseSection">
        <div className="caseContainer">
          <div className="caseHeader">
            <div className="caseHeaderOneContainer">
              <div className="caseHeaderOne">
                <p>OUR CASE STUDIES</p>
                <p>
                  Unveiling the Blueprint to Success: Dive into Our Compelling
                  Case Studies, Revealing the Ingenious Strategies,
                  Collaborative Partnerships, and Exceptional Results That
                  Define Our Approach to Engineering Excellence.
                </p>
                <button>see all</button>
              </div>
            </div>
            <div className="caseHeaderTwoContainer">
              <div className="caseHeaderTwo">
                <p>Unlocking Possibilities, Shaping Landscapes</p>
                <p>
                  With our expertise in land development and environmental
                  engineering, we unlock the hidden potential of spaces,
                  transforming landscapes into vibrant, functional habitats.
                </p>
              </div>
            </div>
          </div>

          <div className="caseStudiesContainer">
            {data.map((data) => (
              <div key={data.id} className="caseStudiesBox">
                <div className="caseStudiesBoxText">
                  <p>{data.projectName}</p>
                  <p>{data.desc}</p>

                  <div className="caseStudiesInfo">
                    <button>{data.date}</button>
                    <button>{data.location}</button>
                  </div>
                </div>

                <div className="caseStudiesBoxImg">
                  <img src={data.image} alt={data.location}></img>
                  <button>View</button>
                </div>
              </div>
            ))}
          </div>

          <div className="caseFooter">
              <p>At Structura, we recognize the importance of sustainable practices. We integrate environmentally conscious design principles and materials to develop resilient and eco-friendly solutions for a greener future.</p>
          </div>
        </div>
      </section>
    </>
  );
};
