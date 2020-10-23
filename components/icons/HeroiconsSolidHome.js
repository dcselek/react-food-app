import * as React from "react";

function SvgHeroiconsSolidHome(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 65 65" fill="none" {...props}>
      <g filter="url(#heroicons-solid_home_svg__filter0_d)">
        <path
          d="M33.596 14.554a1.55 1.55 0 00-2.192 0l-10.85 10.85a1.55 1.55 0 002.192 2.192l.454-.454V37.35a1.55 1.55 0 001.55 1.55h3.1a1.55 1.55 0 001.55-1.55v-3.1a1.55 1.55 0 011.55-1.55h3.1a1.55 1.55 0 011.55 1.55v3.1a1.55 1.55 0 001.55 1.55h3.1a1.55 1.55 0 001.55-1.55V27.142l.454.454a1.55 1.55 0 002.192-2.192l-10.85-10.85z"
          fill="#FA4A0C"
        />
      </g>
      <defs>
        <filter
          id="heroicons-solid_home_svg__filter0_d"
          x={-3}
          y={-3}
          width={71}
          height={71}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={6} />
          <feGaussianBlur stdDeviation={10} />
          <feColorMatrix values="0 0 0 0 0.841667 0 0 0 0 0.219258 0 0 0 0 0 0 0 0 0.4 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgHeroiconsSolidHome;
