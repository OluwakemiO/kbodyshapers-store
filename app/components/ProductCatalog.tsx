"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Product = {
  name: string;
  folder: string;
  image: string;
  description: string;
  icon: string;
};

const getCategory = (product: Product) => {
  const value = `${product.name} ${product.folder}`.toLowerCase();

  if (/post.?surg|post.?op|compression|faja|bra|board|pillow|face.?faja|breast.?band|arm.?compression|corset.?liner/.test(value)) {
    return "Shapewear & Support";
  }
  if (/waist|cincher|corset|butt.?lifter|high.?waist|hourglass/.test(value)) {
    return "Waist & Curves";
  }
  if (/men|mary.?kay/.test(value)) {
    return "Men";
  }
  if (/brush|bonnet|makeup|jade|loofah|hot.?cream|body.?brush/.test(value)) {
    return "Beauty & Care";
  }
  if (/sports|jump.?rope/.test(value)) {
    return "Activewear";
  }
  return "Accessories";
};

export default function ProductCatalog({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map(getCategory))).sort()],
    [products],
  );

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const result = products.filter((product) => {
      const matchesCategory = category === "All" || getCategory(product) === category;
      const haystack = `${product.name} ${product.description}`.toLowerCase();
      return matchesCategory && (!normalizedQuery || haystack.includes(normalizedQuery));
    });

    if (sort === "name") {
      return [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [products, query, category, sort]);

  return (
    <div className="mt-10">
      <div className="rounded-3xl border border-[#eadde0] bg-[#fffaf9] p-4 sm:p-5">
        <div className="flex flex-col gap-3 lg:flex-row">
          <label className="relative flex-1">
            <span className="sr-only">Search products</span>
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[#8d777e]">⌕</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search shapewear, waist trainers, bras..."
              className="h-12 w-full rounded-2xl border border-[#eadde0] bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-[#a18f95] focus:border-[#901a8c] focus:ring-2 focus:ring-[#901a8c]/10"
            />
          </label>

          <label className="lg:w-56">
            <span className="sr-only">Filter by category</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="h-12 w-full rounded-2xl border border-[#eadde0] bg-white px-4 text-sm font-medium text-[#33252a] outline-none focus:border-[#901a8c]"
            >
              {categories.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="lg:w-44">
            <span className="sr-only">Sort products</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="h-12 w-full rounded-2xl border border-[#eadde0] bg-white px-4 text-sm font-medium text-[#33252a] outline-none focus:border-[#901a8c]"
            >
              <option value="featured">Featured</option>
              <option value="name">Name A–Z</option>
            </select>
          </label>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 text-sm">
          <p className="text-[#6d5b61]">
            Showing <span className="font-semibold text-[#33252a]">{filteredProducts.length}</span> of {products.length} products
          </p>

          {(query || category !== "All") && (
            <button
              type="button"
              onClick={() => { setQuery(""); setCategory("All"); }}
              className="font-semibold text-[#901a8c] hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <article
              key={product.name}
              className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-[#eadde0] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-[#fffaf9]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-4 transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#901a8c] shadow-sm backdrop-blur">
                  {getCategory(product)}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="line-clamp-2 text-base font-semibold leading-6 text-[#33252a]">
                    {product.name}
                  </h3>
                  <span className="shrink-0 text-lg text-[#901a8c]">{product.icon}</span>
                </div>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#6d5b61]">
                  {product.description}
                </p>

                <a
                  href="#contact"
                  className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-[#901a8c] px-5 text-sm font-semibold text-white transition hover:bg-[#74156f]"
                >
                  Explore product
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-[#d9c5ca] bg-[#fffaf9] px-6 py-14 text-center">
          <p className="text-lg font-semibold text-[#33252a]">No products found.</p>
          <p className="mt-2 text-sm text-[#6d5b61]">Try a different search or clear the filters.</p>
        </div>
      )}
    </div>
  );
}
