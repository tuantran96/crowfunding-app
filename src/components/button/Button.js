import React from "react";
import PropTypes from "prop-types";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent animate-spin border-b-transparent"></div>
  ) : (
    children
  );
  return (
    <button
      type={type}
      className={`flex items-center justify-center p-4 min-h-[56px] text-white text-base font-semibold rounded-xl ${
        !!isLoading ? "opacity-50 pointer-events-none" : ""
      } ${className}`}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};

export default Button;
