import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const styles = {
    primary:
      "bg-white text-black hover:scale-105 hover:bg-zinc-200",
    secondary:
      "border border-zinc-700 text-zinc-200 hover:border-white hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`inline-flex rounded-full px-6 py-3 text-sm font-medium transition ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}