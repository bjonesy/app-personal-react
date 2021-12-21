import PropTypes from "prop-types";

export const propTypes = {
  color: PropTypes.string,

  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  thickness: PropTypes.number,

  value: PropTypes.number,

  variant: PropTypes.string,
};

export default propTypes;
