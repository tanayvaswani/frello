import { Button } from "@frello/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@frello/lib/utils";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function MarketingPage() {
  return (
    <main className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          #1 Task Management
        </div>

        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Frello helps team move
        </h1>

        <div className="text-3xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 pb-4 w-fit">
          work forward.
        </div>

        <div
          className={cn(
            "text-sm md:text-xl text-neutral-400 mt-4 max-w-sm md:max-w-2xl text-center mx-auto",
            textFont.className
          )}
        >
          Collaborate, manage projects and reach new productivity peaks. From
          high rises to the home office, the way you team works is uniques -
          accomplish it all with Frello.
        </div>
      </div>

      <Button className="mt-6" size={"lg"} asChild>
        <Link href={"/sign-up"}>Get frello for free</Link>
      </Button>
    </main>
  );
}
