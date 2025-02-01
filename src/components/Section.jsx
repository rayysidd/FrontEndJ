import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Section = ({ title, className, backgroundImage, linkTo }) => (
  <Link to={linkTo}>
    <section
      className={`section ${className} cursor-pointer transition-transform transform hover:scale-105`}
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <h3>{title}</h3>
      <p>Latest updates and information about {title.toLowerCase()}.</p>
    </section>
  </Link>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired, // New prop for the link
};

Section.defaultProps = {
  className: "",
};

export default Section;
