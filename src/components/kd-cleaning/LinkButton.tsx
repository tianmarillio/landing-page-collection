import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface LinkButtonProps {
  text: string;
  className?: string;
}

const LinkButton: FC<LinkButtonProps> = ({ text, className = '' }) => {
  return (
    <a
      href="#"
      className={twMerge(
        'block w-fit rounded bg-teal-600 px-4 py-2 text-xs text-white',
        className,
      )}
    >
      {text}
    </a>
  );
};

export default LinkButton;
