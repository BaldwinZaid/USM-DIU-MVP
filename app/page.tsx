import { FeaturedContent } from "@/components/site/featured-content"
import { Hero } from "@/components/site/hero"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeaturedContent />
      </main>
      <SiteFooter />
    </>
  )
}
