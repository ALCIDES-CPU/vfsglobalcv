import {
  ClipboardList,
  CreditCard,
  CalendarCheck,
  CheckCircle,
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Preencha seus Dados",
    description:
      "Complete o formulario com suas informacoes pessoais, tipo de visto e cidade preferida.",
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Pagamento Seguro",
    description:
      "Siga para nossa pagina de pagamento segura via Stripe para confirmar a taxa do servico.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Agendamos para Voce",
    description:
      "Nossa equipe processa seu pedido e garante o horario mais proximo disponivel em seu nome.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Receba a Confirmacao",
    description:
      "Receba os detalhes do agendamento e o checklist de preparacao diretamente no seu e-mail.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Passo a Passo
            </span>
          </div>
          <h2 className="font-heading text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Como Funciona
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Seu agendamento de visto esta a apenas quatro passos simples.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+40px)] top-10 hidden h-[2px] w-[calc(100%-80px)] bg-border lg:block" />
              )}

              <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-accent/30 bg-card shadow-md">
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground shadow-sm">
                  {step.number}
                </span>
                <step.icon className="h-8 w-8 text-primary" />
              </div>

              <h3 className="font-heading text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[220px] text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
