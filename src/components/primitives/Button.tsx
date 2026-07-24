import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "text";

const base =
  "inline-flex items-center justify-center gap-2 font-body font-medium transition-all duration-200 whitespace-nowrap";

const variants: Record<ButtonVariant, string> = {
  primary:
    "rounded-full bg-teal text-black px-6 py-3 text-sm hover:shadow-[0_0_30px_var(--teal-glow)] hover:-translate-y-0.5",
  secondary:
    "rounded-full border border-border text-white px-6 py-3 text-sm hover:bg-teal/10 hover:border-teal",
  text: "text-teal text-sm underline-offset-4 hover:underline",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
