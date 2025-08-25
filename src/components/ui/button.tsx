import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta-primary';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 
      "inline-flex items-center justify-center font-medium text-sm transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
    
    const variants = {
      primary: 
        "bg-mebee-yellow text-mebee-dark-navy hover:bg-mebee-yellow/90 border-2 border-mebee-dark-navy shadow-sm hover:shadow-md",
      secondary: 
        "bg-mebee-navy text-white hover:bg-mebee-navy/90 border-2 border-mebee-navy shadow-sm hover:shadow-md",
      outline: 
        "border-2 border-mebee-navy text-mebee-navy bg-transparent hover:bg-mebee-navy hover:text-white",
      ghost: 
        "text-mebee-navy hover:bg-mebee-sage/20 hover:text-mebee-dark-navy",
      'cta-primary': 
        "bg-mebee-yellow text-mebee-dark-navy hover:bg-mebee-yellow/90 hover:shadow-lg hover:-translate-y-1 font-semibold min-h-[44px] shadow-md border-2 border-mebee-yellow",
    };

    const sizes = {
      sm: "h-9 px-3 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-12 px-8 text-lg font-semibold",
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };