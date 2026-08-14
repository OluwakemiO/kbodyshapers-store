from pathlib import Path
import re

ROOT = Path.cwd()
PAGE = ROOT / "app" / "page.tsx"
PRODUCTS = ROOT / "public" / "products"

if not PAGE.exists():
    raise SystemExit("ERROR: Run this from the kbodyshapers-store project folder.")

text = PAGE.read_text(encoding="utf-8")

# Only change the product list, not the benefits/footer objects.
products_section, rest = text.split("const benefits =", 1)


def choose_image(folder: Path):
    files = [
        p for p in folder.iterdir()
        if p.is_file() and p.suffix.lower() in {".png", ".jpg", ".jpeg", ".webp"}
    ]
    if not files:
        return None

    # Prefer a front/product view when available.
    front = sorted(p for p in files if "front" in p.stem.lower())
    if front:
        return front[0]

    # Otherwise avoid a back view when another image exists.
    non_back = sorted(p for p in files if "back" not in p.stem.lower())
    return non_back[0] if non_back else sorted(files)[0]


def add_image_property(match):
    block = match.group(0)
    if "image:" in block:
        return block

    folder_match = re.search(r'folder:\s*"([^"]+)"', block)
    if not folder_match:
        return block

    folder = folder_match.group(1)
    folder_path = PRODUCTS / folder
    if not folder_path.is_dir():
        print(f"WARNING: product folder not found: {folder}")
        return block

    image = choose_image(folder_path)
    if not image:
        print(f"WARNING: no image found in: {folder}")
        return block

    image_path = f"/products/{folder}/{image.name}"
    return re.sub(
        r'(\n\s*folder:\s*"[^"]+",)',
        r'\1\n    image: "' + image_path + '",',
        block,
        count=1,
    )

# Match each product object in the products array.
products_section = re.sub(
    r'\{\n(?:\s+[^\n]+\n)+?\s*\},',
    add_image_property,
    products_section,
)

old_card = '''                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f4d6db] text-2xl text-[#901a8c]">
                  {product.icon}
                </div>'''

new_card = '''                <div className="relative mb-6 overflow-hidden rounded-2xl bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="h-64 w-full object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>'''

full_text = products_section + "const benefits =" + rest

if old_card not in full_text:
    raise SystemExit("ERROR: Could not find the existing product icon block in app/page.tsx.")

full_text = full_text.replace(old_card, new_card, 1)
PAGE.write_text(full_text, encoding="utf-8")

print("SUCCESS: connected product images to the product cards.")
print("Next: run npm run build")
