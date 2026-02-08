import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import {
  CalendarCheck,
  FileText,
  Globe,
  Users,
  Clock,
  ShieldCheck,
} from "lucide-react"

const services = [
  {
    icon: CalendarCheck,
    title: "Agendamento de Entrevista",
    description:
      "Ajudamos voce a garantir os horarios mais proximos disponiveis no consulado ou embaixada de sua preferencia.",
  },
  {
    icon: FileText,
    title: "Preparacao de Documentos",
    description:
      "Orientacao especializada para reunir, organizar e preparar toda a documentacao exigida para o seu visto.",
  },
  {
    icon: Globe,
    title: "Suporte Multi-Paises",
    description:
      "Atendemos vistos para EUA, Reino Unido, Espaco Schengen, Canada, Australia e muitos outros destinos.",
  },
  {
    icon: Users,
    title: "Agendamento em Grupo",
    description:
      "Viajando com familia ou colegas? Coordenamos agendamentos em grupo para que todos sejam atendidos juntos.",
  },
  {
    icon: Clock,
    title: "Processamento Prioritario",
    description:
      "Precisa de urgencia? Nosso servico prioritario ajuda voce a conseguir o horario mais rapido disponivel.",
  },
  {
    icon: ShieldCheck,
    title: "Seguro e Confidencial",
    description:
      "Seus dados pessoais sao tratados com os mais altos padroes de seguranca. Nunca compartilhamos suas informacoes.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Nossos Servicos
            </span>
          </div>
          <h2 className="font-heading text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Servicos Completos de Agendamento de Visto
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Da preparacao de documentos ao agendamento da sua entrevista,
            cuidamos de cada detalhe para que voce foque na sua viagem.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border/40 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <CardHeader className="pb-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/15">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-heading text-lg text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
