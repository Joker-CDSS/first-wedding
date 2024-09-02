import coupleImage from "../assets/images/couple.jpeg";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Wedding</h1>
      <p>We are so excited to share our special day with you!</p>
      <img className="couple__img" src={coupleImage} alt="Couple" />
    </div>
  );
};

export default Home;
