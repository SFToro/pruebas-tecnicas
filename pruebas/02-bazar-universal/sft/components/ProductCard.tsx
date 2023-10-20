import { Product } from "@src/db/product.d.ts";

export default function ProductDetail({ product }: { product: Product }) {
  const { title, thumbnail, description, rating } = product;
  return (
    <>
      <div class="relative grid h-full max-h-full overflow-hidden w-full max-w-[26rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg ">
        <div class="relative mx-4 mt-4 h-[190px] max-h-[190px] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            class=" object-cover w-full h-full"
            src={thumbnail}
            alt={description}
          />
          <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60">
          </div>
        </div>
        <div class="px-6 py-3">
          <div class="mb-3 flex items-center justify-between">
            <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title}
            </h5>
            <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="-mt-0.5 h-5 w-5 text-yellow-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                >
                </path>
              </svg>
              {Math.round(rating * 10) / 10}
            </p>
          </div>
          <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased text-ellipsis max-h-20">
            {(description.split(" ").length <= 15) && description}
            {description.split(" ").length > 15 &&
              description.split(" ").slice(0, 15).join(" ") + "..."}
          </p>
        </div>
        <div class="px-6 py-3 grid">
          <button
            class="block self-end flex-grow-0  w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Reserve
          </button>
        </div>
      </div>
    </>
  );
}
