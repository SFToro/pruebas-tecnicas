export default function Pagination(
  { total, offset, limit }: { total: number; offset: number; limit: number },
) {
  const pages = Array.from(
    { length: Math.ceil(total / limit) },
    (_, i) => i + 1,
  );

  return (
    <div class="mx-auto text-xl w-fit">
      {pages.map((page) => (
        <a href={`/?offset=${(page - 1) * limit}&limit=${limit}`}>
          {page}
        </a>
      ))}
    </div>
  );
}
