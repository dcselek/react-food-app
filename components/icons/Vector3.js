import * as React from "react";

function SvgVector3(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 18" fill="none" {...props}>
      <path
        d="M1 4.2h1.556m0 0H15m-12.444 0v11.2c0 .424.163.831.455 1.131.292.3.688.469 1.1.469h7.778c.412 0 .808-.169 1.1-.469.292-.3.455-.707.455-1.131V4.2H2.556zm2.333 0V2.6c0-.424.164-.831.455-1.131.292-.3.688-.469 1.1-.469h3.112c.412 0 .808.169 1.1.469.291.3.455.707.455 1.131v1.6m-4.667 4V13m3.112-4.8V13"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgVector3;
