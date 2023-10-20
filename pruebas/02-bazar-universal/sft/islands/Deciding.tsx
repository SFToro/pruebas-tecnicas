import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function Deciding({ id }: { id: number }) {
  const saved = useSignal(false);
  useEffect(() => {
    const status = JSON.parse(localStorage.getItem(`product_${id}`) ?? "{}");
    if (!status?.saved && status?.saved !== saved.value) {
      saved.value = status.saved;
    }
  });
  function handleClick() {
    saved.value = !saved.value;
    localStorage.setItem(
      `product_${id}`,
      JSON.stringify({ saved: saved.value }),
    );
  }
  return (
    <div class="flex items-center mt-6 ">
      <div>
        <h2 class="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
          Still deciding?
        </h2>
        <p class="mb-2 text-sm dark:text-gray-400">
          Add this item to a list and easily come back to it later
        </p>
      </div>
      <div class="px-8 py-32">
        <div class="grid gap-8 items-start justify-center">
          <div class="relative group">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
            </div>
            <button
              class="relative px-2 py-2  rounded-lg leading-none flex items-center divide-x bg-gray-800 divide-gray-600"
              onClick={handleClick}
            >
              <span class="flex items-center space-x-5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class={`w-6 h-6 ${
                    saved ? "text-pink-500" : "text-gray-300"
                  }   hover:text-pink-600  bi bi-bookmark`}
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z">
                  </path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
