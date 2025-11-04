import { Hero } from "@/components/home/Hero"
import { ServicesGrid } from "@/components/home/ServicesGrid"
import { AboutPreview } from "@/components/home/AboutPreview"
import { CTASection } from "@/components/shared/CTASection"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <AboutPreview />
      <CTASection />
    </>
  )
}
