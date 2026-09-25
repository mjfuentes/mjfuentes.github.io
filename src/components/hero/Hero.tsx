import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { contact } from '@/data/contact'
import { stats } from '@/data/stats'

const linkClass =
  'text-sm font-semibold text-text-primary underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-200 hover:text-accent'

export function Hero() {
  return (
    <section className="pt-28 md:pt-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-8 md:gap-20 lg:px-12">
        <div className="grid gap-8">
          <ScrollReveal>
            <p className="text-label text-text-secondary">Patagonia, Argentina</p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-name">
              Matias
              <br />
              Fuentes
            </h1>
          </ScrollReveal>

          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
            <ScrollReveal delay={200} className="lg:col-span-7">
              <p className="text-lede">
                Staff backend engineer.{' '}
                <span className="text-accent">Distributed systems, search, payments.</span>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300} className="lg:col-span-4 lg:col-start-9">
              <p className="text-[0.9375rem] leading-relaxed text-text-secondary">
                14 years building and leading backend systems, most of it in
                Berlin: Engineering Manager at Delivery Hero, Staff Engineer at
                Gorillas, Head of Backend at Atem, Senior Engineer at Staffbase.
                Now running Kerplunk Studio, an independent software
                consultancy, and building open source tooling for AI coding
                agents.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={350}>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <a href="#work" className={linkClass}>
                See my work ↓
              </a>
              <a href={`mailto:${contact.email}`} className={linkClass}>
                {contact.email}
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                GitHub
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                LinkedIn
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <dl className="grid grid-cols-2 border-t-2 border-rule md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col-reverse gap-1 pt-4 pr-4 ${
                  index % 2 === 0 ? '' : 'pl-4'
                } ${index < stats.length - 1 ? 'md:border-r md:border-border' : ''} ${
                  index % 2 === 0 ? 'border-r border-border' : ''
                } md:pl-4 md:first:pl-0`}
              >
                <dt className="text-label text-text-secondary">{stat.label}</dt>
                <dd className="text-stat">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </div>
    </section>
  )
}
