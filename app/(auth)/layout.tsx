import Image from "next/image";
import { ReactNode } from "react";
import bgImage from "../../public/login_background.jpg";
import Logo from "../../public/netflix_logo.svg"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-transparent">
      <Image
        src={bgImage}
        alt="background image"
        className="flex object-cover -z-10 brightness-50"
        priority
        fill
      />
      <Image src={Logo} alt="logo"
      width={200}
      className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
      priority
      />
      {children}
    </div>
  );
}