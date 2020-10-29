import * as React from "react";

function SvgBigorder(props) {
  return (
    <svg width={134} height={128} fill="none" {...props}>
      <path
        d="M51.137 123c5.602 0 10.143-4.541 10.143-10.142 0-5.602-4.541-10.142-10.143-10.142-5.601 0-10.142 4.54-10.142 10.142 0 5.601 4.541 10.142 10.142 10.142zM107.702 123c5.601 0 10.142-4.541 10.142-10.142 0-5.602-4.541-10.142-10.142-10.142-5.602 0-10.143 4.54-10.143 10.142 0 5.601 4.541 10.142 10.143 10.142z"
        stroke="#C7C7C7"
        strokeWidth={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <mask
        id="bigorder_svg__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0.014}
        width={134}
        height={98}
        fill="#000"
      >
        <path fill="#fff" d="M0 .014h134v98H0z" />
        <path d="M10 10.014h20.569l13.78 68.854a10.284 10.284 0 0010.285 8.279h49.982a10.284 10.284 0 0010.285-8.28l8.227-43.142H35.711" />
      </mask>
      <path
        d="M10 .014c-5.523 0-10 4.477-10 10s4.477 10 10 10v-20zm20.569 10l9.805-1.963A10 10 0 0030.57.014v10zm13.78 68.854l9.81-1.948-.004-.015-9.805 1.963zm10.285 8.279v-10c-.064 0-.128 0-.191.002l.191 9.998zm49.982 0l.192-9.998a9.454 9.454 0 00-.192-.002v10zm10.285-8.28l9.808 1.95.015-.076-9.823-1.873zm8.227-43.142l9.823 1.873a10 10 0 00-9.823-11.873v10zm-87.417-10c-5.523 0-10 4.477-10 10s4.477 10 10 10v-20zM10 20.014H30.568v-10-10h-.006-.005H30.548 10v20zm10.763-8.037L34.544 80.83l19.611-3.925-13.78-68.854-19.612 3.926zm13.778 68.84a20.285 20.285 0 007.176 11.848l12.542-15.58a.284.284 0 01-.1-.165L34.54 80.816zm7.176 11.848a20.285 20.285 0 0013.109 4.48l-.383-19.996a.285.285 0 01-.184-.063l-12.542 15.58zm12.917 4.482h49.982v-20H54.634v20zm49.791-.002c4.759.091 9.4-1.495 13.108-4.48l-12.541-15.58a.285.285 0 01-.184.064l-.383 19.996zm13.108-4.48a20.29 20.29 0 007.176-11.849l-19.617-3.896a.283.283 0 01-.1.166l12.541 15.58zm7.191-11.924l8.227-43.143-19.646-3.746-8.227 43.143 19.646 3.746zm-1.596-45.016l-.001-10H35.711v20H123.127l.001-10z"
        fill="#C7C7C7"
        mask="url(#bigorder_svg__a)"
      />
    </svg>
  );
}

export default SvgBigorder;
