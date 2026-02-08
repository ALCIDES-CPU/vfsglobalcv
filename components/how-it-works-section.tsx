import { ClipboardList, CreditCard, CalendarCheck, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Fill in Your Details",
    description:
      "Complete the appointment form with your personal information, visa type, and preferred city.",
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Secure Payment",
    description:
      "Proceed to our secure Stripe-powered payment page to confirm your service fee.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "We Book Your Slot",
    description:
      "Our team processes your request and secures the earliest available appointment on your behalf.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Receive Confirmation",
    description:
      "Get your appointment details and preparation checklist delivered straight to your inbox.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Simple Process
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Getting your visa appointment is just four simple steps away.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-10 hidden h-0.5 w-full bg-border lg:block" />
              )}

              <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary bg-card shadow-sm">
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {step.number}
                </span>
                <step.icon className="h-8 w-8 text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
