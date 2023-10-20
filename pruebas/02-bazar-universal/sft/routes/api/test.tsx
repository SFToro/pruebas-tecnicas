import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    const res = ctx.render();
    return res;
  },
};

export default function Page() {
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}
