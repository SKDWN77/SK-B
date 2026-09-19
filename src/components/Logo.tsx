import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  withGlow?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "w-10 h-10",
  size,
  withGlow = false,
}) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none flex-shrink-0 ${className}`}
      style={style}
    >
      {withGlow && (
        <div className="absolute inset-0 rounded-full bg-red-600/35 blur-md -z-10 animate-pulse pointer-events-none" />
      )}
      <img
        src="/logo.svg"
        alt="SK Live Journey Logo"
        className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(255,0,0,0.35)] transition-transform duration-300"
        loading="eager"
      />
    </div>
  );
};
