import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";
type ButtonSize = "sm" | "md" | "lg";
type ButtonRounded = "none" | "sm" | "md" | "lg" | "full";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  hoverEffect?: "scale" | "glow" | "slide" | "pulse";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      rounded = "md",
      icon,
      iconPosition = "left",
      fullWidth = false,
      hoverEffect = "scale",
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseClasses = clsx(
      "inline-flex items-center justify-center font-sans font-medium",
      "focus:outline-none transition-all duration-200 ease-out",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "relative overflow-hidden active:transition-none",
      {
        "w-full": fullWidth,
        "px-4 py-2 text-sm": size === "sm",
        "px-5 py-2.5 text-base": size === "md",
        "px-7 py-3 text-lg": size === "lg",
        "rounded-none": rounded === "none",
        "rounded-sm": rounded === "sm",
        "rounded-md": rounded === "md",
        "rounded-lg": rounded === "lg",
        "rounded-full": rounded === "full",
      }
    );

    const variantClasses = clsx({
      "bg-brand-primary text-brand-contrast shadow-md hover:bg-brand-primary/80":
        variant === "primary",

      "bg-brand-secondary text-brand-contrast border border-brand-secondary shadow-sm hover:bg-brand-secondary/80 active:bg-brand-secondary ":
        variant === "secondary",

      "bg-brand-accent text-brand-contrast shadow-md hover:bg-brand-accent/80 active:bg-brand-accent/90  ":
        variant === "accent",

      "text-brand-contrast bg-transparent hover:bg-brand-contrast/5 active:bg-brand-contrast/10":
        variant === "ghost",
    });

    const effectClasses = clsx({
      "hover:scale-[1.02] active:scale-[0.99]": hoverEffect === "scale",
      "hover:shadow-lg transition-shadow": hoverEffect === "glow",
      'before:content-[""] before:absolute before:inset-0 before:bg-brand-contrast before:opacity-0 before:transition-opacity before:duration-300':
        hoverEffect === "slide",
      "hover:before:opacity-[0.08] active:before:opacity-[0.15]":
        hoverEffect === "slide",
      "hover:animate-[pulse_1.5s_ease-in-out_infinite]":
        hoverEffect === "pulse",
    });

    return (
      <button
        ref={ref}
        className={clsx(
          baseClasses,
          variantClasses,
          effectClasses,
          "group",
          className
        )}
        onClick={onClick}
        {...props}
      >
        <span className="absolute inset-0 overflow-hidden pointer-events-none">
          <span className="absolute inset-0 bg-current opacity-0 group-hover:opacity-[0.05] group-active:opacity-[0.1] transition-opacity duration-300" />
        </span>

        <span className="relative z-10 flex items-center gap-2">
          {icon && iconPosition === "left" && <span>{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === "right" && <span>{icon}</span>}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
