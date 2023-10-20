import SearchForm from "@src/islands/SearchForm.tsx";

import { Partial } from "$fresh/runtime.ts";
import { LayoutProps } from "$fresh/server.ts";
export default function RootLayout({ Component }: LayoutProps) {
  return (
    <>
      <header class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <a href="/">
            <img
              class="mt-4"
              src="/logo.svg"
              width="64"
              height="64"
              alt="the Fresh logo: a sliced lemon dripping with juice"
            />
          </a>
          <SearchForm></SearchForm>
        </div>
      </header>
      <main>
        <Partial name="main">
          <Component />
        </Partial>
      </main>
    </>
  );
}
