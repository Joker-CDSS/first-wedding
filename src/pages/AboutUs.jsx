import couplePhoto from "../assets/images/love-story.jpeg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>[Couple&apos;s Story]</p>
      <img className="couple__img" src={couplePhoto} alt="Love Story" />
    </div>
  );
};

export default AboutUs;
