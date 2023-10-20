import { useRef } from "preact/hooks";
import { Product } from "@src/db/product.d.ts";

import { useSignal } from "@preact/signals";

export default function Aside({ product }: { product: Product }) {
  const heroImage = useRef<HTMLImageElement>(null);
  const heroIdx = useSignal(
    product.images.findIndex((img) => img === product.thumbnail) !== -1
      ? product.images.findIndex((img) => img === product.thumbnail)
      : 0,
  );
  return (
    <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
      <div class="sticky top-0 z-50 overflow-hidden ">
        <div class="relative mb-6 lg:mb-10 ">
          <button
            class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
            onClick={() => {
              if (heroImage.current === null || heroIdx.value === 0) {
                return;
              }
              heroIdx.value = heroIdx.value - 1;
              heroImage.current.src = product.images[heroIdx.value];
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="w-5 h-5 text-pink-500 bi bi-chevron-left dark:text-pink-500"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              >
              </path>
            </svg>
          </button>
          <img
            class="object-cover w-full lg:h-96  "
            ref={heroImage}
            src={product.thumbnail}
            alt=""
          />
          <button
            class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
            onClick={() => {
              if (
                heroImage.current === null ||
                heroIdx.value === product.images.length - 1
              ) {
                return;
              }
              heroIdx.value = heroIdx.value + 1;
              heroImage.current.src = product.images[heroIdx.value];
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-pink-500"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              >
              </path>
            </svg>
          </button>
        </div>
        <div class="flex-wrap hidden -mx-2 md:flex">
          {product.images.map((img) => (
            <div class="w-1/2 p-2 sm:w-1/4">
              <button
                class="block border border-transparent hover:border-blue-400"
                onClick={() => {
                  if (heroImage.current === null) {
                    return;
                  }
                  heroImage.current.src = img;
                  heroIdx.value = product.images.findIndex(
                    (image) => image === img,
                  );
                }}
              >
                <img
                  class="object-cover w-full lg:h-32"
                  src={img}
                  alt=""
                />
              </button>
            </div>
          ))}
        </div>
        <div class="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400 ">
          <div class="flex items-center justify-center mt-6">
            <span class="mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="w-5 h-5 text-blue-700 dark:text-gray-400 bi bi-chat-left-dots-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z">
                </path>
              </svg>
            </span>
            <div>
              <h2 class="text-sm font-bold text-gray-700 lg:text-lg dark:text-gray-400">
                Have question about buying {["a", "e", "i", "o", "u"].includes(
                    product.title[0].toLowerCase(),
                  )
                  ? "an"
                  : "a"} {product.title}
              </h2>
              <a
                class="text-xs text-blue-400 lg:text-sm dark:text-blue-200"
                href="#"
              >
                Chat with an specialist
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
