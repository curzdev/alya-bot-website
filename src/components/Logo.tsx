import Image from "next/image";

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/alya.jpg"
      alt="Alya"
      width={size}
      height={size}
      className="alya-mark"
      priority
    />
  );
}
