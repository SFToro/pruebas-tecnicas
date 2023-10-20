import { useSignal } from "@preact/signals";
import { format } from "$std/path/win32.ts";
import { useRef } from "preact/hooks";

export default function SearchForm() {
  const query = useSignal("");
  function handleSubmit(e: Event) {
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const search = formData.get("search");
    const limit = formData.get("limit");
    form.setAttribute("f-partial", `/?search=${search}&limit=${limit}`);
    // Push a new URL to the browser history
    history.pushState(null, "", document.location.href);
    // Replace the current URL in the browser history
    history.replaceState(null, "", `/?search=${search}&limit=${limit}`);
  }
  const btn = useRef(null);
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-4 lg:px-8">
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          class="space-y-6"
          id="search-form"
          action="/"
          method="GET"
          onSubmit={handleSubmit}
          aria-role="search-for-products"
        >
          <div>
            <label
              for="search"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Search for products
              </h2>
            </label>
            <div class="mt-2">
              <input
                id="search"
                name="search"
                type="text"
                class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <select
                name="limit"
                id="limit"
                class="my-4 w-full min-h-[2rem]"
                onChange={(event) => {
                  const button = btn.current as HTMLButtonElement;
                  const formData = new FormData(parentForm);
                  const search = formData.get("search");
                  const limit = formData.get("limit");
                  parentForm.setAttribute(
                    "f-partial",
                    `/?search=${search}&limit=${limit}`,
                  );

                  // Push a new URL to the browser history
                  history.pushState(null, "", document.location.href);
                  // Replace the current URL in the browser history
                  history.replaceState(
                    null,
                    "",
                    `/?search=${search}&limit=${limit}`,
                  );
                  button.setAttribute(
                    "f-partial",
                    `/?search=${search}&limit=${limit}`,
                  );
                  button.click();
                }}
              >
                <option value="">Items per page</option>

                <option default value="5">5 per page</option>
                <option value="10">10 per page</option>
              </select>
              <button
                type="button"
                ref={btn}
                hidden
              >
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
