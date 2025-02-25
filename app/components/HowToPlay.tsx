export default function HowToPlay({
  closeHowToPlay,
}: {
  closeHowToPlay: () => void;
}) {
  return (
    <div className="flex flex-col gap-8 items-center ">
      <p className="text-neutral-700 fade-in break-words text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div
        className="button-prm bg-gray-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-gray-light w-48 text-center shadow-lg shadow-zinc-400"
        onClick={closeHowToPlay}
      >
        Geri Dön
      </div>
    </div>
  );
}
