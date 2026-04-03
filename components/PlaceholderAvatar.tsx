export default function PlaceholderAvatar({
  size = "md",
  name,
}: {
  size?: "sm" | "md" | "lg";
  name?: string;
}) {
  const sizes = {
    sm: "w-12 h-12 text-xs",
    md: "w-20 h-20 text-sm",
    lg: "w-28 h-28 text-base",
  };
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "?";
  return (
    <div
      className={`${sizes[size]} rounded-full bg-[#1E1E1E] border border-[#2A2A2A] flex items-center justify-center flex-shrink-0`}
      aria-hidden="true"
    >
      <span className="text-[#6B7280] font-semibold">{initials}</span>
    </div>
  );
}
