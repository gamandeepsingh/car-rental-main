import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Navbar from "../components/Navbar";
import Person1 from "../images/team/1.jpg";
import Person2 from "../images/team/1.jpg";
import Person3 from "../images/team/1.jpg";
import Person4 from "../images/team/1.jpg";
import Person5 from "../images/team/1.jpg";


function Team() {
  
  const teamPpl = [
    { img: Person1, name: "GAMANDEEP SINGH", job: "Innogeek" },
    { img: Person2, name: "Gamandeep", job: "Innogeek" },
    { img: Person3, name: "Gamandeep", job: "Innogeek" },
    { img: Person4, name: "Gamandeep", job: "Innogeek" },
    { img: Person5, name: "Gamandeep", job: "Innogeek" },
    
  ];
  return (
    <>
      <Navbar />
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(+91) 65XXXXXXXX</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Team;
