import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  // className?: string;
  // titleClassName?: string;
  // subtitleClassName?: string;
  className?: {
    root?: string;
    title?: string;
    subtitle?: string;
  };
}

const SectionTitle: FC<SectionTitleProps> = ({
  title,
  subtitle,
  className = {
    root: '',
    title: '',
    subtitle: '',
  },
}) => {
  return (
    <h2 className={twMerge('font-bold', className?.root)}>
      <span className={twMerge('text-xs text-teal-600', className?.title)}>
        {title}
      </span>
      <br />
      <span className={twMerge('text-xl', className?.subtitle)}>
        {subtitle}
      </span>
    </h2>
  );
};

export default SectionTitle;
