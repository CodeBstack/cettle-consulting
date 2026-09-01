import Image from "next/image";

export function AboutIntro() {
  return (
    <section className="relative">
      <div className="absolute inset-x-0 top-0 z-0 h-[560px] overflow-hidden">
        <Image
          src="/images/hero-waves.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_38%]"
        />
      </div>
      <div className="absolute inset-x-0 top-[560px] bottom-0 z-0 navy-mesh" />

      <div className="relative z-10">
        <div className="site-pad flex h-[300px] items-end pb-8 sm:h-[340px] md:h-[380px]">
          <h1 className="text-[32px] font-bold text-navy md:text-[36px]">About us</h1>
        </div>

        <div className="site-pad pb-4 md:pb-8">
          <div className="bg-white">
            <div className="px-6 pt-12 sm:px-12 md:px-16 md:pt-16 lg:px-[80px]">
              <h2 className="max-w-[940px] text-[32px] leading-[1.16] font-semibold tracking-[-0.025em] text-navy sm:text-[48px] md:text-[72px] md:leading-[1.1]">
                Good work keeps losing to better communication. We started Cettle to
                change that.
              </h2>
              <p className="mt-6 max-w-[780px] pb-10 text-[16px] leading-7 text-muted md:text-[18px] md:leading-8">
                Cettle Consulting Limited is a communication, leadership, and convening
                consultancy based in Victoria Island, Lagos, working with clients across
                Nigeria and beyond.
              </p>
            </div>
            <div className="relative h-[220px] sm:h-[300px] md:h-[380px]">
              <Image
                src="/images/office.png"
                alt="Two colleagues reviewing analytics together in an office"
                fill
                sizes="(min-width: 1440px) 1280px, 90vw"
                className="object-cover object-center"
              />
            </div>
            <div className="grid items-start gap-8 px-6 py-12 sm:px-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-12 md:px-16 md:py-[72px] lg:px-[80px]">
              <h3 className="text-[32px] leading-tight font-semibold tracking-tight text-heading md:text-[46px]">
                Why we exist.
              </h3>
              <div className="space-y-5 text-[15px] leading-[1.75] text-body md:text-[16px] md:leading-[1.8]">
                <p>
                  Across Nigerian business we kept seeing the same pattern. Capable
                  organisations with real products losing ground to competitors who were
                  simply better at explaining themselves. Leaders with twenty years of
                  expertise going quiet the moment a microphone appeared. Institutions
                  handling their first public crisis with no plan and no agreed
                  spokesperson.
                </p>
                <p>
                  The gap was never talent. It was communication, and almost nobody was
                  treating it as infrastructure. It was being treated as something the
                  marketing team would handle later. Cettle Consulting was built to close
                  that gap with practical work. Not theory, not a certificate, and not a
                  strategy document that nobody opens after the invoice is paid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
