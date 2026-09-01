import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero
        label="Page not found"
        image="/images/hero-1.jpg"
      />
      <section className="site-pad py-20 text-center">
        <p className="text-[16px] leading-7 text-muted">
          That page is not on this site. Let’s get you back to the work.
        </p>
        <Button href="/" className="mt-8">
          Back home
        </Button>
      </section>
    </>
  );
}
