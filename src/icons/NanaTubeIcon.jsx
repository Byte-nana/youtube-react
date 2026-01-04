import React from 'react';

export default function NanaTubeIcon({
  width = 32,
  height,
  bgColor = 'white',
  strokeColor = '#2B2B33',
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 260 180'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      aria-label='NanaTube logo'
      preserveAspectRatio='xMidYMid meet'
      shapeRendering='geometricPrecision'
    >
      <rect
        x='10'
        y='10'
        width='240'
        height='160'
        rx='44'
        fill={bgColor}
        stroke={bgColor}
        strokeWidth='8'
      />
      <g transform='translate(130 105) scale(1.5)'>
        {/* Left ear */}
        <path
          d='
            M-36 -28
            Q-26 -56 -10 -36
            Q-22 -30 -36 -28
            Z
          '
          fill={strokeColor}
        />

        {/* Right ear */}
        <path
          d='
            M36 -28
            Q26 -56 10 -36
            Q22 -30 36 -28
            Z
          '
          fill={strokeColor}
        />

        {/* Play button (slightly right-shifted for optical centering) */}
        <path
          d='
            M-14 -22
            Q-14 -26 -6 -22
            L34 0
            L-6 22
            Q-14 26 -14 22
            Z
          '
          fill={strokeColor}
        />
      </g>
    </svg>
  );
}
