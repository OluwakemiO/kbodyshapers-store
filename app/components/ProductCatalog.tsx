"use client";

import { useState } from "react";
import Image from "next/image";

type Product = {
  name: string;
  folder: string;
  image: string;
  description: string;
  icon?: string;
};

type Props = {
  products: Product[];
};

const categories = [
  "All",
  "Shapewear",
  "Post-Surgery",
  "Accessories",
  "Beauty & Care",
] as const;

type Category = (typeof categories)[number];

const beautyAndCareFolders = new Set([
  "benjabelle-brush-tree",
  "eye-makeup-remover",
  "hair-bonnets",
  "hot-cream",
  "jade-roller",
  "jump-rope",
  "loofah-disc-big",
  "loofah-disc-small",
  "mary-kay-men",
  "natural-bristle-brush",
  "travel-rollup-bag",
]);

const accessoryFolders = new Set([
  "compression-camisole",
  "corset-liner",
  "high-waist-shorts-with-snaps",
  "sports-bra-black",
  "sports-bra-multi",
]);

const postSurgeryAccessoryFolders = new Set([
  "ab-board",
  "back-board",
  "face-faja",
  "post-surgical-butt-lift-pillow",
]);

const shapewearOnlyFolders = new Set([
  "aide",
  "amalia",
  "butt-lifter-shorts",
  "faja-panty-luxury",
  "faja-thong-luxury",
  "high-waist-tummy-control-butt-lifter-shorts",
]);

function getCategories(product: Product): Category[] {
  if (beautyAndCareFolders.has(product.folder)) {
    return ["Beauty & Care"];
  }

  if (postSurgeryAccessoryFolders.has(product.folder)) {
    return ["Accessories", "Post-Surgery"];
  }

  if (accessoryFolders.has(product.folder)) {
    return ["Accessories"];
  }

  if (shapewearOnlyFolders.has(product.folder)) {
    return ["Shapewear"];
  }

  return ["Shapewear", "Post-Surgery"];
}

export default function ProductCatalog({ products }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || getCategories(product).includes(category);

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="w-full">
      <div className="mb-8 space-y-4">
        <div className="relative">
          <input
            type="search"
            placeholder="Search shapewear, waist trainers, bras..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-gray-200 bg-white px-5 py-4 pr-12 text-sm outline-none transition focus:border-[#901a8c] focus:ring-2 focus:ring-[#901a8c]/10"
          />

          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                category === item
                  ? "bg-[#901a8c] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-800">
            {filteredProducts.length}
          </span>{" "}
          products
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="rounded-2xl bg-gray-50 px-6 py-16 text-center">
          <div className="mb-3 text-4xl">🔎</div>
          <h3 className="text-lg font-semibold text-gray-900">
            No products found
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Try another search or category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <article
              key={product.folder}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              <div className="p-4">
                <h3 className="line-clamp-2 min-h-[2.75rem] text-sm font-semibold text-gray-900">
                  {product.name}
                </h3>

                <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500">
                  {product.description}
                </p>

                <a
                  href={`https://wa.me/message/BRHVUDBCN5YBF1?text=${encodeURIComponent(
                    `Hi KBodyShapers, I'm interested in the ${product.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block rounded-full bg-[#901a8c] px-4 py-2.5 text-center text-xs font-semibold text-white transition hover:opacity-90"
                >
                  💬 Order on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
