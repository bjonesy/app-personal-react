import PropTypes from "prop-types";

export const propTypes = {
  companyName: PropTypes.string,

  duration: PropTypes.string,

  summary: PropTypes.string,

  responsibilities: PropTypes.arrayOf(PropTypes.string),
};

export default propTypes;
