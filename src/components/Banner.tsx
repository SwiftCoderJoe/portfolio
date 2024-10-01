import { A } from "@solidjs/router";
import { ParentComponent } from "solid-js";
import { HStack } from "~/components/Foundation/HStack"
import { Spacer } from "~/components/Foundation/Spacer"
import { VStack } from "./Foundation/VStack";

export const Banner: ParentComponent<{class: string}> = ({children, class: className}) => {
  return (
    <div class="relative">
      <HStack class="relative gap-0 z-10">
        {/* <div class="flex-shrink w-24 bg-gray-300 origin-top-right skew-y-30"></div> */}
        <div class="relative flex-shrink w-24 before:absolute before:inset-0 before:bg-gray-300 before:origin-top-right before:skew-y-12 after:absolute after:inset-0 after:bg-gray-300  after:origin-top-right after:-skew-y-12"></div>
        <div class={"bg-gray-300 p-2 flex-1 " + className}>
          {children}
        </div>
        {/* <div class="flex-shrink w-24 bg-gray-300 origin-top-left skew-y-30"></div> */}
        <div class="relative flex-shrink w-24 before:absolute before:inset-0 before:bg-gray-300 before:origin-top-left before:skew-y-12 after:absolute after:inset-0 after:bg-gray-300  after:origin-top-left after:-skew-y-12"></div>
      </HStack>
    </div>
  );
}

const RainbowBorder: ParentComponent = ({children}) => {
  return (
    <span class="border-2 border-pink-600 p-1">
      {children}
    </span>
  )
}

