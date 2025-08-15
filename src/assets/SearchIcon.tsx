import { type SVGProps } from "react";

const SearchIcon = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 26"
    {...props} // this includes className, style, etc.
  >
    <g
      transform="translate(0.000000,26.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    ></g>
  </svg>
);

SearchIcon.displayName = "SearchIcon";

export default SearchIcon;
