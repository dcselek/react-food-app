import * as React from "react";

function SvgVector2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 17" fill="none" {...props}>
      <path
        d="M1 8.333h11.901M1 1h22M1 15.667h22"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgVector2;
