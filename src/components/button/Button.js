import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";
import { Link } from "react-router-dom";

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
  let defaulClassName =
    "flex items-center justify-center p-4 min-h-[56px] text-base font-semibold rounded-xl";
  switch (rest.kind) {
    case "primary":
      defaulClassName = defaulClassName + " bg-primary text-white";
      break;
    case "secondary":
      defaulClassName = defaulClassName + " bg-secondary text-white";
      break;
    case "ghost":
      defaulClassName =
        defaulClassName + " bg-secondary bg-opacity-10 text-secondary";
      break;

    default:
      break;
  }
  if (rest.href)
    return (
      <Link className={classNames(defaulClassName, className)} to={rest.href}>
        {child}
      </Link>
    );
  return (
    <button
      type={type}
      className={classNames(
        defaulClassName,
        !!isLoading ? "opacity-50 pointer-events-none" : "",
        className
      )}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default Button;
