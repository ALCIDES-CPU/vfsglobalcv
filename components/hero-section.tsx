import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const badges = [
  "Processo Seguro",
  "Atendimento Especializado",
  "Resposta em 24h",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="/hero-visa.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">
              Servico de Agendamento de Visto
            </span>
          </div>

          <h1 className="font-heading text-balance text-4xl font-bold leading-[1.1] tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Seu Agendamento de Visto,{" "}
            <span className="text-accent">Simplificado</span>
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-primary-foreground/75">
            Assistencia profissional para agendar seu visto. Guiamos voce em
            cada etapa do processo com seguranca e expertise.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent px-8 text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90"
            >
              <Link href="#agendar">
                Agendar Agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="#como-funciona">Saiba Mais</Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
            {badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-sm text-primary-foreground/65"
              >
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
