import React from 'react';

interface BoxProps {
  children: React.ReactNode;
  link?: string;
  hoverEffect?: boolean;
  className?: string;
}

export const Box: React.FC<BoxProps> = ({ children, link, hoverEffect, className }) => {
  const boxClasses = `bg-white rounded-xl shadow-2xl p-6 ${hoverEffect ? 'box-hover' : ''} ${className}`;

  const boxContent = (
    <div className={boxClasses}>
      {children}
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {boxContent}
      </a>
    );
  }

  return boxContent;
};

export default Box;
