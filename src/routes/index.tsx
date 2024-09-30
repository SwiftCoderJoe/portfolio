import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import { NeonLights, NeonBorder } from "~/components/NeonLights";

export default function Home() {
  return (
    <main>
      <NeonBorder>
        <h1>
          your
          <NeonLights>truly full-stack</NeonLights>
          developer
        </h1>
      </NeonBorder>
      <Counter />
    </main>
  );
}
