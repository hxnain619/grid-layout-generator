import clsx from "clsx";
import React from "react";

type InputProps = {
  label?: string;
  id: string;
  className?: string;
  containerClass?: string;
  variant?: 'default' | 'glass';
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  label,
  id,
  className = "",
  containerClass = "",
  variant = 'default',
  ...props
}) => {
  const baseStyles = "w-full px-4 py-3 rounded-lg transition-all duration-200";
  const variantStyles = {
    default: "bg-brand-contrast/10 backdrop-blur-sm border border-brand-contrast/20 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20",
    glass: "bg-brand-contrast/5 backdrop-blur-md border border-brand-contrast/10 focus:border-brand-primary/50 focus:ring-2 focus:ring-brand-primary/10"
  };

  return (
    <div className={clsx("mb-4", containerClass)}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-brand-contrast mb-2"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`${baseStyles} ${variantStyles[variant]} text-brand-contrast placeholder-brand-contrast/50 focus:outline-none ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
