import Logo from "@frello/components/logo";
import { Button } from "@frello/components/ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 border-t w-full p-4 bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        <Logo />

        <div className="flex items-center justify-between md:w-auto md:block w-full space-x-4">
          <Button size={"sm"} variant={"ghost"}>
            Privacy Policy
          </Button>
          <Button size={"sm"} variant={"ghost"}>
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
