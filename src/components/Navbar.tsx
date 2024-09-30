
export function Navbar() {
  const numberOfSlats = 20

  return (
    <div class="py-2">
      <nav class="text-blue-200 w-full bg-slate-900 grid place-items-center [grid-template-areas:'stack'] overflow-hidden">
        <div class="w-full h-full flex justify-around [grid-area:stack] animate-slide-slow-reverse">
          {Array.from(Array(numberOfSlats).entries()).map(x => (
            <div class={`w-10 bg-blue-500 opacity-30 shadow-wide shadow-blue-500/50 skew-x-12`}></div>
          ))}
        </div>
        <div class="w-full h-full flex justify-around [grid-area:stack] animate-slide-slow">
          {Array.from(Array(numberOfSlats).entries()).map(x => (
            <div class={`w-10 bg-blue-500 opacity-30 shadow-wide shadow-blue-500/50 skew-x-12`}></div>
          ))}
        </div>
        <div class="flex justify-around w-full [grid-area:stack] z-10">
            <div class="relative p-1 before:bg-blue-500 before:skew-x-12 before:absolute before:block before:-inset-0 before:-z-10">
              <a class="font-black" href="/">JOE CARDENAS</a>
            </div>
            <div class="relative p-1 before:bg-blue-500 before:skew-x-12 before:absolute before:block before:-inset-0 before:-z-10">
              <a class="font-black" href="/">HOME</a>
            </div>
            <div class="relative p-1 before:bg-blue-500 before:skew-x-12 before:absolute before:block before:-inset-0 before:-z-10">
              <a class="font-black" href="/">PROJECTS</a>
            </div>
            <div class="relative p-1 before:bg-blue-500 before:skew-x-12 before:absolute before:block before:-inset-0 before:-z-10">
              <a class="font-black" href="/">SKILLS</a>
            </div>
            <div class="relative p-1 before:bg-blue-500 before:skew-x-12 before:absolute before:block before:-inset-0 before:-z-10">
              <a class="font-black" href="/">LINKS</a>
            </div>
        </div>
      </nav>
    </div>
  );
}
