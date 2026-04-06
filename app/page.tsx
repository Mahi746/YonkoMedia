import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoMarquee from '@/components/LogoMarquee'
import ProblemChecklist from '@/components/ProblemChecklist'
import RevenueLevers from '@/components/RevenueLevers'
import BeforeAfter from '@/components/BeforeAfter'
import Process from '@/components/Process'
import CaseStudies from '@/components/CaseStudies'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import CalendlyFloat from '@/components/CalendlyFloat'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoMarquee />
      <ProblemChecklist />
      <RevenueLevers />
      <BeforeAfter />
      <Process />
      <CaseStudies />
      <FAQ />
      <Footer />
      <CalendlyFloat />
    </main>
  )
}
