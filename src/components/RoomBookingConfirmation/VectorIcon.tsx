import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1920 323' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1920V230H0V0Z' fill='#36353A' />
    <path
      d='M1339 138H747V323H1190.74C1207.04 270.176 1266.03 231.047 1336.3 231.047C1337.2 231.047 1338.1 231.054 1339 231.067V138Z'
      fill='#36353A'
    />
    <path
      d='M583 138H1175V323H731.261C714.962 270.176 655.974 231.047 585.703 231.047C584.8 231.047 583.899 231.054 583 231.067V138Z'
      fill='#36353A'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
