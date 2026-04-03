import Link from "next/link";

interface CTAButtonProps {
  href: string;
  variant?: "filled" | "outline";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function CTAButton({
  href,
  variant = "filled",
  children,
  className = "",
  external = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2";
  const variants = {
    filled:
      "bg-gold text-black hover:bg-gold-deep active:scale-[0.98]",
    outline:
      "border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold active:scale-[0.98]",
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
