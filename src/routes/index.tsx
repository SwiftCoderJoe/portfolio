import { Title } from "@solidjs/meta";
import { Banner } from "~/components/Banner";
import { VStack } from "~/components/Foundation/VStack";
import { Hero } from "~/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <VStack class="items-center">
        <h2 class="text-5xl">Featured Projects</h2>

      </VStack>
      <Banner class="text-center p-10 text-5xl">
        <span class="border-black border-2 rounded-md py-2 pl-2 text-black bg-transparent hover:text-white hover:bg-black">Enter the 
          <span class="p-2 bg-black text-white">Rabbit Hole</span>
        </span>
      </Banner>
      <div class="h-screen"></div>
      <div class="h-screen"></div>
    </main>
  );
}
