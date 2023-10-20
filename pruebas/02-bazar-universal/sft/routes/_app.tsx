import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html class="h-full bg-slate-700">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../styles/tailwind.css" />

        <title>sft</title>
      </head>
      <body f-client-nav>
        <Component />
      </body>
    </html>
  );
}
