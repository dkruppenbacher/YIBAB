import { memo, SVGProps } from 'react';

const HomepageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1920 4611' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1920V4611H0V0Z' fill='#4A4C55' />
  </svg>
);

const Memo = memo(HomepageIcon);
export { Memo as HomepageIcon };
