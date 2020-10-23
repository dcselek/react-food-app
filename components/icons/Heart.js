import * as React from "react";

function SvgHeart(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M17.367 3.842a4.583 4.583 0 00-6.484 0L10 4.725l-.883-.883a4.584 4.584 0 00-6.484 6.483l.884.883L10 17.692l6.483-6.484.884-.883a4.581 4.581 0 000-6.483v0z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgHeart;
