import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About US</Link>
          </li>
          <li>
            <Link to="/wedding-details">Wedding Details</Link>
          </li>
          <li>
            <Link to="/rsvp">RSVP</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
