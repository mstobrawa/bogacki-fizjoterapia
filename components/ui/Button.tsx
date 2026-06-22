import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] !text-[var(--color-on-primary)] shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-premium)]",
  secondary:
    "border border-[var(--color-primary)] bg-white text-[var(--color-primary)] shadow-sm hover:-translate-y-0.5 hover:border-[var(--color-primary-hover)] hover:bg-[var(--color-surface)]",
  ghost:
    "text-[var(--color-primary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary-hover)]",
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = "primary",
    className = "",
    ...elementProps
  } = props;
  const styles = `inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 ease-[var(--ease-premium)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] ${variants[variant]} ${className}`;

  if ("href" in props && typeof props.href === "string") {
    return (
      <Link
        className={styles}
        {...(elementProps as AnchorHTMLAttributes<HTMLAnchorElement> & {
          href: string;
        })}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={styles}
      {...(elementProps as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
