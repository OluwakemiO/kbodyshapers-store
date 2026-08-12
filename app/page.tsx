import Image from "next/image";

const products = [
  {
    name: "3004 Post-Op Bra",
    folder: "3004-post-op-bra",
    description: "Post-surgical support and comfort.",
    icon: "♡",
  },
  {
    name: "AB Board",
    folder: "ab-board",
    description: "Abdominal support for post-surgical recovery.",
    icon: "✦",
  },
  {
    name: "Aide",
    folder: "aide",
    description: "Full-body shaping with comfortable support.",
    icon: "◊",
  },
  {
    name: "Alexa",
    folder: "alexa",
    description: "Strapless shaping with knee-length coverage.",
    icon: "♡",
  },
  {
    name: "Amalia",
    folder: "amalia",
    description: "Comfortable shaping shorts for everyday wear.",
    icon: "✦",
  },
  {
    name: "Angelique",
    folder: "angelique",
    description: "Full-body post-surgical support and shaping.",
    icon: "◊",
  },
  {
    name: "Arm Compression Sleeves",
    folder: "arm-compression-sleeves",
    description: "Compression support for the arms.",
    icon: "♡",
  },
  {
    name: "Back Board",
    folder: "back-board",
    description: "Support designed for post-surgical care.",
    icon: "✦",
  },
  {
    name: "Benjabelle Brush Tree",
    folder: "benjabelle-brush-tree",
    description: "Keep your beauty brushes organised and accessible.",
    icon: "◊",
  },
  {
    name: "Breast Band",
    folder: "breast-band",
    description: "Supportive band designed for post-surgical care.",
    icon: "♡",
  },
  {
    name: "Butt Lifter Shorts",
    folder: "butt-lifter-shorts",
    description: "Shape and enhance your curves comfortably.",
    icon: "✦",
  },
  {
    name: "Clara",
    folder: "clara",
    description: "Short-sleeve shaping with comfortable coverage.",
    icon: "◊",
  },
  {
    name: "Compression Camisole",
    folder: "compression-camisole",
    description: "Comfortable upper-body compression and shaping.",
    icon: "♡",
  },
  {
    name: "Compression Leggings",
    folder: "compression-leggings",
    description: "Full-leg compression and everyday support.",
    icon: "✦",
  },
  {
    name: "Corset Liner",
    folder: "corset-liner",
    description: "Comfortable protection and support under your corset.",
    icon: "◊",
  },
  {
    name: "Eye Makeup Remover",
    folder: "eye-makeup-remover",
    description: "Gentle care for removing eye makeup.",
    icon: "♡",
  },
  {
    name: "Face Faja",
    folder: "face-faja",
    description: "Targeted compression and support for the face.",
    icon: "✦",
  },
  {
    name: "Faja Panty Luxury",
    folder: "faja-panty-luxury",
    description: "Smooth shaping and comfortable support.",
    icon: "◊",
  },
  {
    name: "Faja Thong Luxury",
    folder: "faja-thong-luxury",
    description: "Discreet shaping with a thong design.",
    icon: "♡",
  },
  {
    name: "Fiorella",
    folder: "fiorella",
    description: "Full-body shaping for a smooth, defined silhouette.",
    icon: "✦",
  },
  {
    name: "Giovanni",
    folder: "giovanni",
    description: "Hourglass-inspired full-body shaping and support.",
    icon: "◊",
  },
  {
    name: "Hair Bonnets",
    folder: "hair-bonnets",
    description: "Help protect and maintain your hairstyle.",
    icon: "♡",
  },
  {
    name: "High Waist Shorts with Snaps",
    folder: "high-waist-shorts-with-snaps",
    description: "High-waist shaping with convenient snap closure.",
    icon: "✦",
  },
  {
    name: "High Waist Tummy Control Butt Lifter Shorts",
    folder: "high-waist-tummy-control-butt-lifter-shorts",
    description: "Tummy control with curve-enhancing support.",
    icon: "◊",
  },
  {
    name: "Hot Cream",
    folder: "hot-cream",
    description: "A warming addition to your body-care routine.",
    icon: "♡",
  },
  {
    name: "Hourglass High Waist Short Butt Lifter",
    folder: "hourglass-high-waist-short-butt-lifter",
    description: "High-waist shaping designed to enhance your curves.",
    icon: "✦",
  },
  {
    name: "Hourglass",
    folder: "hourglass",
    description: "Shaping support for a smooth hourglass silhouette.",
    icon: "◊",
  },
  {
    name: "Ingrid",
    folder: "ingrid",
    description: "Knee-length post-surgical shaping and support.",
    icon: "♡",
  },
  {
    name: "Jade Roller",
    folder: "jade-roller",
    description: "A simple addition to your skincare routine.",
    icon: "✦",
  },
  {
    name: "Jump Rope",
    folder: "jump-rope",
    description: "A simple tool for active movement and workouts.",
    icon: "◊",
  },
  {
    name: "Kalu Bra",
    folder: "kalu-bra",
    description: "Front-closure support designed for post-surgical comfort.",
    icon: "♡",
  },
  {
    name: "Latex Fit Waist Trainer Belt",
    folder: "latex-fit-waist-trainer-belt",
    description: "Firm latex support for waist training.",
    icon: "✦",
  },
  {
    name: "Latex Waist Cincher 3 Hooks",
    folder: "latex-waist-cincher-3-hooks",
    description: "Firm waist compression with three-hook adjustment.",
    icon: "◊",
  },
  {
    name: "Loofah Disc Big",
    folder: "loofah-disc-big",
    description: "A practical addition to your body-care routine.",
    icon: "♡",
  },
  {
    name: "Loofah Disc Small",
    folder: "loofah-disc-small",
    description: "Compact exfoliation for everyday body care.",
    icon: "✦",
  },
  {
    name: "Mara",
    folder: "mara",
    description: "Comfortable full-body shaping and support.",
    icon: "◊",
  },
  {
    name: "Mary Kay Men",
    folder: "mary-kay-men",
    description: "A practical addition to your men's care routine.",
    icon: "♡",
  },
  {
    name: "Melanie",
    folder: "melanie",
    description: "Strapless shaping with comfortable support.",
    icon: "✦",
  },
  {
    name: "Melissa",
    folder: "melissa",
    description: "Post-surgical shaping with comfortable support.",
    icon: "◊",
  },
  {
    name: "Men's Cincher",
    folder: "men-s-cincher",
    description: "Waist compression designed for men.",
    icon: "♡",
  },
  {
    name: "Men's Vest",
    folder: "men-s-vest",
    description: "Upper-body shaping and supportive compression.",
    icon: "✦",
  },
  {
    name: "Metallic Latex Waist Trainer",
    folder: "metallic-latex-waist-trainer",
    description: "Firm latex compression for waist training.",
    icon: "◊",
  },
  {
    name: "Natural Bristle Brush",
    folder: "natural-bristle-brush",
    description: "A useful tool for your personal-care routine.",
    icon: "♡",
  },
  {
    name: "Nicole Bra",
    folder: "nicole-bra",
    description: "Longline post-surgical comfort and support.",
    icon: "✦",
  },
  {
    name: "Post-Surgical Butt Lift Pillow",
    folder: "post-surgical-butt-lift-pillow",
    description: "Designed to provide comfortable post-surgical support.",
    icon: "◊",
  },
  {
    name: "Scarlet",
    folder: "scarlet",
    description: "Comfortable post-surgical shaping and support.",
    icon: "♡",
  },
  {
    name: "Short Torso Latex Waist Trainer",
    folder: "short-torso-latex-waist-trainer",
    description: "Latex waist training designed for shorter torsos.",
    icon: "✦",
  },
  {
    name: "Sports Bra Black",
    folder: "sports-bra-black",
    description: "Supportive sports bra for active movement.",
    icon: "◊",
  },
  {
    name: "Sports Bra Multi",
    folder: "sports-bra-multi",
    description: "Supportive sports bra for comfortable everyday movement.",
    icon: "♡",
  },
  {
    name: "Titi Strapless",
    folder: "titi-strapless",
    description: "Strapless full-body shaping and support.",
    icon: "✦",
  },
  {
    name: "Titi",
    folder: "titi",
    description: "Full-body shaping with comfortable support.",
    icon: "◊",
  },
  {
    name: "Travel Rollup Bag",
    folder: "travel-rollup-bag",
    description: "Convenient storage for your shapewear and essentials.",
    icon: "♡",
  },
  {
    name: "Waist Cincher",
    folder: "waist-cincher",
    description: "Comfortable waist shaping for everyday wear.",
    icon: "✦",
  },
  {
    name: "Waist Training Corset",
    folder: "waist-training-corset",
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
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f4d6db] text-2xl text-[#901a8c]">
                  {product.icon}
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