import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/hero/Hero'
import { Projects } from '@/components/projects/Projects'
import { Experience } from '@/components/experience/Experience'
import { TechStack } from '@/components/tech-stack/TechStack'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <TechStack />
      </main>
      <Footer />
    </>
  )
}
