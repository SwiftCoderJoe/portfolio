import { A } from "@solidjs/router";
import { ParentComponent } from "solid-js";
import { HStack } from "~/components/Foundation/HStack"
import { Spacer } from "~/components/Foundation/Spacer"
import { VStack } from "./Foundation/VStack";

export function Hero() {
  let skills = [
    "iOS Developer", 
    "Web Designer", 
    "Enthusiast",
    "Frontend Engineer", 
    "JavaScript Programmer", 
    "Computer Technician", 
    "Backend Engineer", 
    "Web Developer", 
    "SysAdmin", 
    "Swift Programmer", 
    "Content Creator", 
    "Pretty Cool Guy", 
    "Computer Architect", 
    "Student"
    ]

  return (
    <div class="relative pt-24">
      <HStack class="relative py-10 gap-0">
        <div class="flex-shrink w-24 bg-gray-300 origin-top-right -skew-y-30"></div>
        <VStack class="bg-gray-300 text-9xl p-14">
          <div>Joe Cardenas</div>
          <div class="text-5xl">I'm your <span class="p-2 bg-black text-white">full</span> full-stack developer</div>
        </VStack>
      </HStack>

      <div class="w-full overflow-x-clip overflow-y-visible py-2 z-10">
        <HStack class="w-max origin-bottom-left gap-0 -skew-y-6 bg-fuchsia-200 p-1 text-2xl">
          <HStack class="animate-slide-slow-reverse pl-4 gap-4 w-max items-center ">
            {skills.map(skill => (<>
              <RainbowBorder>{skill}</RainbowBorder>
            </>))}
          </HStack>
          <HStack class="animate-slide-slow-reverse pl-4 gap-4 w-max items-center">
            {skills.map(skill => (<>
              <RainbowBorder>{skill}</RainbowBorder>
            </>))}
          </HStack>
        </HStack>
      </div>
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

