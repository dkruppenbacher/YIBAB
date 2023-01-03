import { memo, SVGProps } from 'react';

const Rectangle19Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 482 100' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 22C0 9.84974 9.84974 0 22 0H460C472.15 0 482 9.84974 482 22V78C482 90.1503 472.15 100 460 100H22C9.84973 100 0 90.1503 0 78V22Z'
      fill='#36353A'
      stroke='white'
      strokeWidth={2}
    />
  </svg>
);

const Memo = memo(Rectangle19Icon);
export { Memo as Rectangle19Icon };
