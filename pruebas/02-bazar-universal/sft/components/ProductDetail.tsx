import { Product } from "@src/db/product.d.ts";
import Countdown from "@src/islands/Countdown.tsx";
import Deciding from "@src/islands/Deciding.tsx";
import Carousel from "@src/islands/Carousel.tsx";

export default function productpage({ product }: { product: Product }) {
  return (
    <section class="py-20 font-poppins dark:bg-gray-800">
      <div class="max-w-6xl px-4 mx-auto">
        <div class="flex flex-wrap mb-24 -mx-4">
          <Carousel product={product} />

          <div class="w-full px-4 md:w-1/2">
            <div class="lg:pl-20">
              <div class="mb-6 ">
                <span class="text-red-500 dark:text-red-200">New</span>
                <h2 class="max-w-xl mt-2 mb-4 text-5xl font-bold md:text-6xl font-heading dark:text-gray-300">
                  {product.title}
                </h2>
                <p class="max-w-md mb-4 text-gray-500 dark:text-gray-400">
                  Get{" "}
                  {product.discountPercentage}% off if you buy it before
                  midnight <Countdown />
                </p>

                <a
                  href="#"
                  class="text-blue-500 hover:underline dark:text-gray-400"
                >
                  See how trade-in works
                </a>
              </div>

              {product.category === "smartphones" && (
                <>
                  <div class="">
                    <p class="mb-4 text-lg font-semibold dark:text-gray-400">
                      Choose your finish
                    </p>
                    <div class="grid grid-cols-2 gap-4 pb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                      <div>
                        <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                          <div>
                            <div class="bg-emerald-400 w-8 h-8 mx-auto mb-2 rounded-full ">
                            </div>
                            <p class="text-xs text-center text-gray-700 dark:text-gray-400">
                              Pearl Green
                            </p>
                          </div>
                        </button>
                      </div>
                      <div>
                        <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                          <div>
                            <div class="w-8 h-8 mx-auto mb-2 bg-gray-700 rounded-full dark:bg-gray-600">
                            </div>
                            <p class="text-xs text-center text-gray-700 dark:text-gray-400">
                              Mattee Black
                            </p>
                          </div>
                        </button>
                      </div>
                      <div>
                        <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                          <div>
                            <div class="w-8 h-8 mx-auto mb-2 bg-red-500 rounded-full">
                            </div>
                            <p class="text-xs text-center text-gray-700 dark:text-gray-400">
                              Red
                            </p>
                          </div>
                        </button>
                      </div>
                      <div>
                        <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                          <div>
                            <div class="w-8 h-8 mx-auto mb-2 rounded-full bg-slate-400">
                            </div>
                            <p class="text-xs text-center text-gray-700 dark:text-gray-400">
                              Silver
                            </p>
                          </div>
                        </button>
                      </div>
                      <div>
                        <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                          <div>
                            <div class="w-8 h-8 mx-auto mb-2 bg-blue-200 rounded-full">
                            </div>
                            <p class="text-xs text-center text-gray-700 dark:text-gray-400">
                              Sierra Blue
                            </p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="mt-6">
                    <p class="mb-2 text-lg font-semibold dark:text-gray-400">
                      Choose your Capacity
                    </p>
                    <a
                      href="#"
                      class="text-blue-500 hover:underline dark:text-gray-400"
                    >
                      How much capacity is right for you?
                    </a>
                    <div class="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                      <div>
                        <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                          <div>
                            <div class="mb-2 font-semibold dark:text-gray-400">
                              128 <span class="text-xs">GB</span>
                            </div>
                            <p class="px-2 text-xs font-medium text-center text-gray-700 dark:text-gray-400">
                              From $99 0r $41.62/mo. for 24 mo.
                            </p>
                          </div>
                        </button>
                      </div>
                      <div>
                        <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                          <div>
                            <div class="mb-2 font-semibold dark:text-gray-400">
                              256 <span class="text-xs">GB</span>
                            </div>
                            <p class="px-2 text-xs font-medium text-center text-gray-700 dark:text-gray-400">
                              From $99 0r $41.62/mo. for 24 mo.
                            </p>
                          </div>
                        </button>
                      </div>
                      <div>
                        <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                          <div>
                            <div class="mb-2 font-semibold dark:text-gray-400">
                              512 <span class="text-xs">GB</span>
                            </div>
                            <p class="px-2 text-xs font-medium text-center text-gray-700 dark:text-gray-400">
                              From $99 0r $41.62/mo. for 24 mo.
                            </p>
                          </div>
                        </button>
                      </div>
                      <div>
                        <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                          <div>
                            <div class="mb-2 font-semibold dark:text-gray-400">
                              1 <span class="text-xs">GB</span>
                            </div>
                            <p class="px-2 text-xs font-medium text-center text-gray-700 dark:text-gray-400">
                              From $99 0r $41.62/mo. for 24 mo.
                            </p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div class="mt-6">
                <p class="mb-4 text-lg font-semibold dark:text-gray-400">
                  Choose a payment option
                </p>
                <div class="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                  <div>
                    <button class="flex items-center justify-center w-full h-full px-2 py-6 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                      <div>
                        <p class="px-2 text-base font-semibold text-center text-gray-700 dark:text-gray-400">
                          Pay in full
                        </p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button class="flex items-center justify-center w-full h-full px-2 py-6 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                      <div>
                        <p class="px-2 text-base font-semibold text-center text-gray-700 dark:text-gray-400">
                          Pay monthly
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div class="mt-6 ">
                <div class="flex flex-wrap items-center">
                  <span class="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-4 h-4 text-gray-700 dark:text-gray-400 bi bi-truck"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
                      </path>
                    </svg>
                  </span>
                  <h2 class="text-lg font-bold text-gray-700 dark:text-gray-400">
                    Delivery
                  </h2>
                </div>
                <div class="px-7">
                  <p class="mb-2 text-sm dark:text-gray-400">In Stock</p>
                  <p class="mb-2 text-sm dark:text-gray-400">Free Shipping</p>
                  <a
                    class="mb-2 text-sm text-blue-400 dark:text-blue-200"
                    href="#"
                  >
                    Get delivery dates
                  </a>
                </div>
              </div>
              <div class="mt-6 ">
                <div class="flex flex-wrap items-center">
                  <span class="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-4 h-4 text-gray-700 dark:text-gray-400 bi bi-bag"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z">
                      </path>
                    </svg>
                  </span>
                  <h2 class="text-lg font-bold text-gray-700 dark:text-gray-400">
                    Pickup
                  </h2>
                </div>
                <div class="px-7">
                  <a
                    class="mb-2 text-sm text-blue-400 dark:text-blue-200"
                    href="#"
                  >
                    Check availability
                  </a>
                </div>
              </div>
              <div class="mt-6 ">
                <button class="w-full px-4 py-2 font-bold text-white bg-blue-400 lg:w-96 hover:bg-blue-500">
                  Continue
                </button>
              </div>
              <Deciding id={product.id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
