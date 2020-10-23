import * as React from "react";

function SvgGroup(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 12" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm2.5 1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-2zm0 3a.5.5 0 100 1h5a.5.5 0 100-1h-5zm0 2a.5.5 0 100 1h1a.5.5 0 100-1h-1zm3 0a.5.5 0 100 1h1a.5.5 0 100-1h-1zm3 0a.5.5 0 100 1h1a.5.5 0 100-1h-1zm3 0a.5.5 0 000 1h1a.5.5 0 000-1h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGroup;
