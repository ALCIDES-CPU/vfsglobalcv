import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Globe, Clock } from "lucide-react"

const features = [
  { icon: ShieldCheck, text: "Processo 100% Seguro" },
  { icon: Globe, text: "Visto para Portugal" },
  { icon: Clock, text: "Resposta em 24h" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="/hero-visa.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Cabo Verde &rarr; Portugal
              </span>
            </div>

            <h1 className="font-heading text-balance text-4xl font-bold leading-[1.1] tracking-tight text-primary-foreground md:text-5xl lg:text-[3.5rem]">
              Agende o Seu Visto para{" "}
              <span className="text-accent">Portugal</span>
            </h1>

            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-primary-foreground/70">
              Plataforma oficial de agendamento de visto. Simplificamos todo o
              processo para que obtenha o seu visto de forma rapida e segura.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="bg-accent px-8 text-base text-accent-foreground shadow-lg shadow-accent/30 hover:bg-accent/90"
              >
                <Link href="/agendamento">
                  Iniciar Agendamento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="#como-funciona">Como Funciona</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {features.map((f) => (
                <div
                  key={f.text}
                  className="flex items-center gap-2 text-sm text-primary-foreground/60"
                >
                  <f.icon className="h-4 w-4 text-accent" />
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Stats card */}
          <div className="hidden lg:flex lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm">
              <h3 className="font-heading text-lg font-semibold text-primary-foreground">
                Porque Escolher-nos
              </h3>
              <div className="mt-6 flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-xl font-bold text-accent">
                    50+
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary-foreground">Paises Atendidos</p>
                    <p className="text-xs text-primary-foreground/50">Em todo o mundo</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-xl font-bold text-accent">
                    98%
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary-foreground">Taxa de Aprovacao</p>
                    <p className="text-xs text-primary-foreground/50">Dos nossos clientes</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-xl font-bold text-accent">
                    24h
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary-foreground">Tempo de Resposta</p>
                    <p className="text-xs text-primary-foreground/50">Garantido</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
