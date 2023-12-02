import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import googleIcon from "../../../public/google.svg";
import Image from "next/image";

export default function Signup() {
  return (
    <div className="rounded bg-black/80 py-10 px-6 md:max-w-sm md:px-14">
      <form action="">
        <h1 className="text-3xl font-semibold text-white">Sign Up</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 inline-block"
          ></Input>
          <Button
            type="submit"
            variant={"destructive"}
            className="w-full bg-red-600"
          >
            Sign Up
          </Button>
        </div>
      </form>
      <div className="text-gray-400 text-sm mt-4">
        Already have an account?{" "}
        <Link className="text-white hover:underline ml-2" href={"/login"}>
          Login
        </Link>
      </div>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <Button variant={"outline"} size={"icon"}>
          <GithubIcon className="w-4 h-4" />
        </Button>
        <Button variant={"outline"} size={"icon"}>
          <Image src={googleIcon} alt="google icon" className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}