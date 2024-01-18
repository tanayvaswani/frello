import { OrganizationSwitcher } from "@clerk/nextjs";
import Logo from "@frello/components/logo";
import { Button } from "@frello/components/ui/button";
import { Plus } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
      {/* Mobile Sidebar */}
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>

        <Button
          className="rounded-sm hidden md:block h-auto py-1.5 px-2"
          size={"sm"}
        >
          Create
        </Button>

        <Button className="rounded-sm block md:hidden">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={"/organization/:id"}
          afterLeaveOrganizationUrl={"/select-org"}
          afterSelectOrganizationUrl={"/organization/:id"}
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;