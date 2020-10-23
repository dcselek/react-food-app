import * as React from "react";

function SvgVector(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M19 19l-4.35-4.35M17 9A8 8 0 111 9a8 8 0 0116 0z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgVector;
