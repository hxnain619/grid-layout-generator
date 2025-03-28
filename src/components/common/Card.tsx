import React from "react";

type CardProps = {
  children: React.ReactNode;
  title?: string;
  className?: string;
  variant?: 'default' | 'glass';
} & React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<CardProps> = ({
  children,
  title,
  className = "",
  variant = 'default',
  ...props
}) => {
  const baseStyles = "rounded-xl overflow-hidden p-6";
  const variantStyles = {
    default: "bg-brand-contrast/10 backdrop-blur-sm border border-brand-contrast/20",
    glass: "bg-brand-contrast/5 backdrop-blur-md border border-brand-contrast/10"
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-brand-contrast">
          {title}
        </h3>
      )}
      <div className="text-brand-contrast/70">{children}</div>
    </div>
  );
};

export default Card;
