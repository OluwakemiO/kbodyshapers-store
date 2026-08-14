import Image from "next/image";

const products = [
  {
    name: "3004 Post-Op Bra",
    folder: "3004-post-op-bra",
    image: "/products/3004-post-op-bra/3004-post-op-bra-2.png",
    description: "Post-surgical support and comfort.",
    icon: "♡",
  },
  {
    name: "Ab board abdominal frontal board post surgery for women",
    folder: "ab-board",
    image: "/products/ab-board/ab-board-abdominal-frontal-board-post-surgery-for-women-1.png",
    description: "Abdominal support for post-surgical recovery.",
    icon: "✦",
  },
  {
    name: "Faja shapewear luxury Aide for women",
    folder: "aide",
    image: "/products/aide/faja-shapewear-luxury-aide-for-women-front.png",
    description: "Full-body shaping with comfortable support.",
    icon: "◊",
  },
  {
    name: "Strapless faja shapewear knee length powernet Alexa for women",
    folder: "alexa",
    image: "/products/alexa/strapless-faja-shapewear-knee-length-powernet-alexa-for-women.png",
    description: "Strapless shaping with knee-length coverage.",
    icon: "♡",
  },
  {
    name: "Short Amalia",
    folder: "amalia",
    image: "/products/amalia/short-amalia-front.png",
    description: "Comfortable shaping shorts for everyday wear.",
    icon: "✦",
  },
  {
    name: "Post surgical full body faja shapewear comfort Angelique for women",
    folder: "angelique",
    image: "/products/angelique/post-surgical-full-body-faja-shapewear-comfort-angelique-for-women-front.png",
    description: "Full-body post-surgical support and shaping.",
    icon: "◊",
  },
  {
    name: "Arm compression sleeves post surgery for  women",
    folder: "arm-compression-sleeves",
    image: "/products/arm-compression-sleeves/arm-compression-sleeves-post-surgery-for-women-front.png",
    description: "Compression support for the arms.",
    icon: "♡",
  },
  {
    name: "Back Board",
    folder: "back-board",
    image: "/products/back-board/back-board.png",
    description: "Support designed for post-surgical care.",
    icon: "✦",
  },
  {
    name: "Benjabelle Brush Tree",
    folder: "benjabelle-brush-tree",
    image: "/products/benjabelle-brush-tree/benjabelle-brush-tree.png",
    description: "Keep your beauty brushes organised and accessible.",
    icon: "◊",
  },
  {
    name: "Breast Band",
    folder: "breast-band",
    image: "/products/breast-band/breast-band.png",
    description: "Supportive band designed for post-surgical care.",
    icon: "♡",
  },
  {
    name: "Butt Lifter Shorts",
    folder: "butt-lifter-shorts",
    image: "/products/butt-lifter-shorts/butt-lifter-shorts-front.png",
    description: "Shape and enhance your curves comfortably.",
    icon: "✦",
  },
  {
    name: "Short sleeve shapewear short clara",
    folder: "clara",
    image: "/products/clara/short-sleeve-shapewear-short-clara-front.png",
    description: "Short-sleeve shaping with comfortable coverage.",
    icon: "◊",
  },
  {
    name: "Compression Camisole",
    folder: "compression-camisole",
    image: "/products/compression-camisole/compression-camisole.png",
    description: "Comfortable upper-body compression and shaping.",
    icon: "♡",
  },
  {
    name: "Compression Leggings",
    folder: "compression-leggings",
    image: "/products/compression-leggings/compression-leggings-2.png",
    description: "Full-leg compression and everyday support.",
    icon: "✦",
  },
  {
    name: "Corset Liner",
    folder: "corset-liner",
    image: "/products/corset-liner/corset-liner.png",
    description: "Comfortable protection and support under your corset.",
    icon: "◊",
  },
  {
    name: "Eye Makeup Remover",
    folder: "eye-makeup-remover",
    image: "/products/eye-makeup-remover/eye-makeup-remover.png",
    description: "Gentle care for removing eye makeup.",
    icon: "♡",
  },
  {
    name: "Face Faja",
    folder: "face-faja",
    image: "/products/face-faja/face-faja.png",
    description: "Targeted compression and support for the face.",
    icon: "✦",
  },
  {
    name: "Faja shapewear panty luxury for women",
    folder: "faja-panty-luxury",
    image: "/products/faja-panty-luxury/faja-shapewear-panty-luxury-for-women.png",
    description: "Smooth shaping and comfortable support.",
    icon: "◊",
  },
  {
    name: "Faja shapewear thong luxury for women",
    folder: "faja-thong-luxury",
    image: "/products/faja-thong-luxury/faja-shapewear-thong-luxury-for-women-front.png",
    description: "Discreet shaping with a thong design.",
    icon: "♡",
  },
  {
    name: "Bodysuit faja shapewear panty powernet fiorella for women",
    folder: "fiorella",
    image: "/products/fiorella/bodysuit-faja-shapewear-panty-powernet-fiorella-for-women-front-black.png",
    description: "Full-body shaping for a smooth, defined silhouette.",
    icon: "✦",
  },
  {
    name: "Giovanni hourglass full body faja shapewear for women",
    folder: "giovanni",
    image: "/products/giovanni/giovanni-hourglass-full-body-faja-shapewear-for-women-front.png",
    description: "Hourglass-inspired full-body shaping and support.",
    icon: "◊",
  },
  {
    name: "Hair Bonnets",
    folder: "hair-bonnets",
    image: "/products/hair-bonnets/hair-bonnets.png",
    description: "Help protect and maintain your hairstyle.",
    icon: "♡",
  },
  {
    name: "High Waist Shorts With Snaps",
    folder: "high-waist-shorts-with-snaps",
    image: "/products/high-waist-shorts-with-snaps/high-waist-shorts-with-snaps.png",
    description: "High-waist shaping with convenient snap closure.",
    icon: "✦",
  },
  {
    name: "High Waist Tummy Control Butt Lifter Shorts",
    folder: "high-waist-tummy-control-butt-lifter-shorts",
    image: "/products/high-waist-tummy-control-butt-lifter-shorts/high-waist-tummy-control-butt-lifter-shorts-beige-front.png",
    description: "Tummy control with curve-enhancing support.",
    icon: "◊",
  },
  {
    name: "Hot Cream",
    folder: "hot-cream",
    image: "/products/hot-cream/hot-cream.png",
    description: "A warming addition to your body-care routine.",
    icon: "♡",
  },
  {
    name: "Hourglass high waist short butt lifter for women",
    folder: "hourglass-high-waist-short-butt-lifter",
    image: "/products/hourglass-high-waist-short-butt-lifter/hourglass-high-waist-short-butt-lifter-for-women-front.png",
    description: "High-waist shaping designed to enhance your curves.",
    icon: "✦",
  },
  {
    name: "Strapless hourglass faja shapewear for women",
    folder: "hourglass",
    image: "/products/hourglass/strapless-hourglass-faja-shapewear-for-women-front-2.png",
    description: "Shaping support for a smooth hourglass silhouette.",
    icon: "◊",
  },
  {
    name: "Post surgical faja shapewear knee length comfort Ingrid for women",
    folder: "ingrid",
    image: "/products/ingrid/post-surgical-faja-shapewear-knee-lenght-comfort-ingrid-for-women-front.png",
    description: "Knee-length post-surgical shaping and support.",
    icon: "♡",
  },
  {
    name: "Jade Roller",
    folder: "jade-roller",
    image: "/products/jade-roller/jade-roller.png",
    description: "A simple addition to your skincare routine.",
    icon: "✦",
  },
  {
    name: "Jump Rope",
    folder: "jump-rope",
    image: "/products/jump-rope/jump-rope.png",
    description: "A simple tool for active movement and workouts.",
    icon: "◊",
  },
  {
    name: "Post surgical kalu bra front closure powernet for women",
    folder: "kalu-bra",
    image: "/products/kalu-bra/post-surgical-kalu-bra-front-closure-powernet-for-women-back.png",
    description: "Front-closure support designed for post-surgical comfort.",
    icon: "♡",
  },
  {
    name: "Latex fit waist trainer belt for men and women",
    folder: "latex-fit-waist-trainer-belt",
    image: "/products/latex-fit-waist-trainer-belt/latex-fit-waist-trainer-belt-for-women-front.png",
    description: "Firm latex support for waist training.",
    icon: "✦",
  },
  {
    name: "Latex waist cincher 3 hooks for women",
    folder: "latex-waist-cincher-3-hooks",
    image: "/products/latex-waist-cincher-3-hooks/latex-waist-cincher-3-hooks-for-women-2.png",
    description: "Firm waist compression with three-hook adjustment.",
    icon: "◊",
  },
  {
    name: "Loofah Disc Big",
    folder: "loofah-disc-big",
    image: "/products/loofah-disc-big/loofah-disc-big.png",
    description: "A practical addition to your body-care routine.",
    icon: "♡",
  },
  {
    name: "Loofah Disc Small",
    folder: "loofah-disc-small",
    image: "/products/loofah-disc-small/loofah-disc-small.png",
    description: "Compact exfoliation for everyday body care.",
    icon: "✦",
  },
  {
    name: "Faja shapewear comfort mara for women",
    folder: "mara",
    image: "/products/mara/faja-shapewear-comfort-mara-for-women-beige-front.png",
    description: "Comfortable full-body shaping and support.",
    icon: "◊",
  },
  {
    name: "Mary Kay Men",
    folder: "mary-kay-men",
    image: "/products/mary-kay-men/mary-kay-men.png",
    description: "A practical addition to your men's care routine.",
    icon: "♡",
  },
  {
    name: "Faja shapewear strapless comfort Melanie for women",
    folder: "melanie",
    image: "/products/melanie/faja-shapewear-strapless-comfort-melanie-for-women-beige-front.png",
    description: "Strapless shaping with comfortable support.",
    icon: "✦",
  },
  {
    name: "Post surgical faja shapewear comfort Melissa for women",
    folder: "melissa",
    image: "/products/melissa/post-surgical-faja-shapewear-comfort-melissa-for-women-2-beige.png",
    description: "Post-surgical shaping with comfortable support.",
    icon: "◊",
  },
  {
    name: "Latex waist trainer men cincher",
    folder: "men-s-cincher",
    image: "/products/men-s-cincher/latex-waist-trainer-men-cincher-front.png",
    description: "Waist compression designed for men.",
    icon: "♡",
  },
  {
    name: "Waist trainer vest zipper powernet for men",
    folder: "men-s-vest",
    image: "/products/men-s-vest/waist-trainer-vest-zipper-powernet-for-men-front.png",
    description: "Upper-body shaping and supportive compression.",
    icon: "✦",
  },
  {
    name: "Metallic Latex Waist Trainer",
    folder: "metallic-latex-waist-trainer",
    image: "/products/metallic-latex-waist-trainer/metallic-waist-trainer-3-hooks-for-women-2.png",
    description: "Firm latex compression for waist training.",
    icon: "◊",
  },
  {
    name: "Natural Bristle Body Brush",
    folder: "natural-bristle-brush",
    image: "/products/natural-bristle-brush/natural-bristle-brush.png",
    description: "A useful tool for your personal-care routine.",
    icon: "♡",
  },
  {
    name: "Nicole longline post surgical comfort bra for women",
    folder: "nicole-bra",
    image: "/products/nicole-bra/nicole-longline-post-surgical-comfort-bra-for-women-front.png",
    description: "Longline post-surgical comfort and support.",
    icon: "✦",
  },
  {
    name: "Post Surgical Butt Lift Pillow",
    folder: "post-surgical-butt-lift-pillow",
    image: "/products/post-surgical-butt-lift-pillow/post-surgical-butt-lift-pillow-1.png",
    description: "Designed to provide comfortable post-surgical support.",
    icon: "◊",
  },
  {
    name: "Post surgical faja shapewear comfort scarlet for women",
    folder: "scarlet",
    image: "/products/scarlet/post-surgical-faja-shapewear-comfort-scarlet-for-women-front.png",
    description: "Comfortable post-surgical shaping and support.",
    icon: "♡",
  },
  {
    name: "Short Torso Latex Waist Trainer",
    folder: "short-torso-latex-waist-trainer",
    image: "/products/short-torso-latex-waist-trainer/short-torso-latex-waist-trainer-2-hooks-for-women-2.png",
    description: "Latex waist training designed for shorter torsos.",
    icon: "✦",
  },
  {
    name: "Sports Bra Black",
    folder: "sports-bra-black",
    image: "/products/sports-bra-black/sports-bra-black-front.png",
    description: "Supportive sports bra for active movement.",
    icon: "◊",
  },
  {
    name: "Sports Bra Multi",
    folder: "sports-bra-multi",
    image: "/products/sports-bra-multi/sports-bra-multi-front.png",
    description: "Supportive sports bra for comfortable everyday movement.",
    icon: "♡",
  },
  {
    name: "Strapless faja shapewear zipper powernet titi for women",
    folder: "titi-strapless",
    image: "/products/titi-strapless/strapless-faja-shapewear-zipper-powernet-titi-for-women-front.png",
    description: "Strapless full-body shaping and support.",
    icon: "✦",
  },
  {
    name: "Faja shapewear zipper powernet Titi for women",
    folder: "titi",
    image: "/products/titi/faja-shapewear-zipper-powernet-titi-for-women-front.png",
    description: "Full-body shaping with comfortable support.",
    icon: "◊",
  },
  {
    name: "Travel Rollup Bag",
    folder: "travel-rollup-bag",
    image: "/products/travel-rollup-bag/travel-rollup-bag.png",
    description: "Convenient storage for your shapewear and essentials.",
    icon: "♡",
  },
  {
    name: "Cinturilla comfort waist cincher for women",
    folder: "waist-cincher",
    image: "/products/waist-cincher/cinturilla-comfort-waist-cincher-for-women-front.png",
    description: "Comfortable waist shaping for everyday wear.",
    icon: "✦",
  },
  {
    name: "Waist Training Corset",
    folder: "waist-training-corset",
    image: "/products/waist-training-corset/women-waist-training-corset-front.png",
    description: "Structured support for waist training.",
    icon: "◊",
  },
];

const benefits = [
  {
    title: "Quality you can trust",
    text: "We choose quality shapers designed to give you lasting value.",
  },
  {
    title: "Helpful, honest advice",
    text: "We help you choose the right shaper for your needs — without simply selling you anything.",
  },
  {
    title: "Great value",
    text: "Get quality shapewear at a fair price without compromising what matters.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf9] text-[#33252a]">

      {/* Announcement Bar */}
      <div className="bg-[#901a8c] px-4 py-2 text-center text-sm font-medium text-white">
        Quality shapewear • Helpful advice • Nationwide delivery
      </div>

      {/* Navigation */}
      <header className="border-b border-[#eadde0] bg-white/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          <a href="#" className="flex items-center">
            <Image
              src="/images/kbodyshapers-logo.png"
              alt="KBodyShapers"
              width={220}
              height={80}
              priority
              className="h-auto w-[180px]"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#shop"
              className="text-sm font-medium hover:text-[#901a8c]"
            >
              Shop
            </a>

            <a
              href="#why-us"
              className="text-sm font-medium hover:text-[#901a8c]"
            >
              Why KBodyShapers
            </a>

            <a
              href="#about"
              className="text-sm font-medium hover:text-[#901a8c]"
            >
              About Us
            </a>

            <a
              href="#contact"
              className="text-sm font-medium hover:text-[#901a8c]"
            >
              Contact
            </a>
          </nav>

          <a
            href="#shop"
            className="rounded-full bg-[#901a8c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#741570]"
          >
            Shop Shapewear
          </a>

        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">

          <div className="max-w-xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#901a8c]">
              Shapewear that works for you
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-[#33252a] sm:text-6xl">
              Feel confident in your own skin.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#6d5b61]">
              Find quality shapewear that addresses your concerns, fits your
              needs, and gives you the support you are looking for.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#shop"
                className="rounded-full bg-[#901a8c] px-7 py-4 text-center font-semibold text-white transition hover:bg-[#741570]"
              >
                Find Your Shaper
              </a>

              <a
                href="#why-us"
                className="rounded-full border border-[#d9c4ca] bg-white px-7 py-4 text-center font-semibold text-[#33252a] transition hover:border-[#901a8c] hover:text-[#901a8c]"
              >
                Why Choose Us?
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-[#6d5b61]">
              <span>✓ Quality products</span>
              <span>✓ Honest advice</span>
              <span>✓ Customer care</span>
            </div>
          </div>

          {/* Hero Lifestyle Image */}
          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src="/images/lifestyle-027.jpg"
              alt="Woman wearing KBodyShapers shapewear"
              width={900}
              height={1100}
              priority
              className="h-[500px] w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#901a8c]">
              Shop
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Find the right shaper for you.
            </h2>

            <p className="mt-4 leading-7 text-[#6d5b61]">
              Not sure what you need? That&apos;s exactly what we&apos;re here
              for. We can help you choose based on your needs and preferences.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {products.map((product) => (
              <div
                key={product.name}
                className="group rounded-3xl border border-[#eadde0] bg-[#fffaf9] p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="h-64 w-full object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {product.name}
                </h3>

                <p className="mt-3 leading-7 text-[#6d5b61]">
                  {product.description}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-block font-semibold text-[#901a8c] hover:underline"
                >
                  Explore →
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="bg-[#f8eeee] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#901a8c]">
                Why KBodyShapers
              </p>

              <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                We don&apos;t just sell shapers.
              </h2>

              <p className="mt-5 leading-8 text-[#6d5b61]">
                We care about helping women find shapewear that actually
                addresses their concerns — while giving them quality,
                value and honest advice.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">

              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-3xl bg-white p-6 shadow-sm"
                >
                  <div className="text-2xl text-[#901a8c]">✦</div>

                  <h3 className="mt-5 font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#6d5b61]">
                    {benefit.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#901a8c]">
            Our Promise
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            The right shaper. The right advice. No pressure.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6d5b61]">
            We believe customers should be able to trust the person helping
            them choose their shapewear. That means giving honest advice,
            recommending what is genuinely suitable, and never pretending a
            product is right for you when it isn&apos;t.
          </p>

          <div className="mt-8 inline-flex rounded-full bg-[#f4d6db] px-6 py-3 text-sm font-semibold text-[#901a8c]">
            Quality that stands the test of time.
          </div>

        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-[#901a8c] px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f4d6db]">
            Need help choosing?
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s find your right shaper.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/80">
            Tell us what you&apos;re looking for and we&apos;ll help you
            choose a shaper that suits your needs.
          </p>

          <a
            href="https://wa.me/2340000000000"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#901a8c] transition hover:bg-[#f4d6db]"
          >
            Chat With Us on WhatsApp
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#33252a] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-xl font-bold">
              KBodyShapers
            </p>

            <p className="mt-2 text-sm text-white/60">
              Quality shapewear. Honest advice. Better confidence.
            </p>
          </div>

          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} KBodyShapers. All rights reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}