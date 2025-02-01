import React from "react";
import PropTypes from "prop-types";

const Section = ({ title, className, backgroundImage }) => (
  <section
    className={`section ${className}`}
    style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <h3>{title}</h3>
    <p>Latest updates and information about {title.toLowerCase()}.</p>
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
};

Section.defaultProps = {
  className: "",
};

export default Section;
