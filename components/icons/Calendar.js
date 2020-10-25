import * as React from "react";

function SvgCalendar(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 107 119" fill="none" {...props}>
      <path
        d="M94.667 11.833H88.75V0H76.917v11.833H29.583V0H17.75v11.833h-5.917C5.325 11.833 0 17.158 0 23.667V106.5c0 6.508 5.325 11.833 11.833 11.833h82.834c6.508 0 11.833-5.325 11.833-11.833V23.667c0-6.509-5.325-11.834-11.833-11.834zm0 94.667H11.833V47.333h82.834V106.5zm-82.834-71V23.667h82.834V35.5H11.833zm11.834 23.667h59.166V71H23.667V59.167zm0 23.666h41.416v11.834H23.667V82.833z"
        fill="#C7C7C7"
      />
    </svg>
  );
}

export default SvgCalendar;
