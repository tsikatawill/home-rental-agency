import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="w-auto h-auto"
        src="/icons/logo.svg"
        width={148}
        height={50}
        alt="logo.svg"
        priority
      />
    </Link>
  );
};
