import { ShieldCheck, Globe, Clock, Headphones } from "lucide-react"

const stats = [
  { icon: ShieldCheck, value: "100%", label: "Processo Seguro" },
  { icon: Globe, value: "50+", label: "Paises Atendidos" },
  { icon: Clock, value: "24h", label: "Tempo de Resposta" },
  { icon: Headphones, value: "24/7", label: "Suporte Disponivel" },
]

export function TrustBanner() {
  return (
    <section className="border-y border-border/40 bg-card py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <stat.icon className="h-5 w-5 text-accent" />
              </div>
              <p className="font-heading text-2xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
