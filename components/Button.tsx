import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

<<<<<<< HEAD
// A plain presentational component — no "use client" needed here.
// It can be rendered from a Server Component (static button) or from
// a Client Component (with an onClick handler attached), since Next.js
// bundles it appropriately depending on where it's used.
=======
>>>>>>> 641aad2650ce991ae14c58f433dc2a40c0546a92
export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
<<<<<<< HEAD
  const base = "px-4 py-2 rounded-md text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-pink-600 hover:bg-pink-700 text-white"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
=======
    const base = "px-4 py-2 rounded-md text-sm font-medium transition-colors";
    const styles = 
        variant === "primary"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300";

    return (
        <button className={`${base} ${styles} ${className}`} {...props} />
    );
}
>>>>>>> 641aad2650ce991ae14c58f433dc2a40c0546a92
