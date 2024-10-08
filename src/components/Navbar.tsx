import { A } from "@solidjs/router";
import { ParentComponent } from "solid-js";
import { HStack } from "~/components/Foundation/HStack"
import { Spacer } from "~/components/Foundation/Spacer"


export function Navbar() {
  return (
    <HStack class="sticky top-0 ml-12 gap-0 pt-4 z-30">
      <div class="flex-1 bg-gray-300 border-y-2 border-l-2 border-black">
        <HStack class="font-mono text-nav">
          <NavLink href=".">JC</NavLink>
          <Spacer></Spacer>
          <NavLink href=".">Home</NavLink>
          <NavLink href=".">Projects</NavLink>
          <NavLink href=".">Skills</NavLink>
          <NavLink href=".">Links</NavLink>
        </HStack>
      </div>
      <div class="border-y-2 border-black flex-shrink w-12 bg-gray-300 origin-top-left skew-y-30"></div>
    </HStack>
  );
}

const NavLink: ParentComponent<{href: string}> = ({ href, children }) => {
  return (
    <A href={href} class="hover:bg-cyan-600 mx-3 hover:text-white transition-all duration-200">{children}</A>
  )
}