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
    title: "Appointment Scheduling",
    description:
      "We help you secure the earliest available visa appointment slots at your preferred consulate or embassy.",
  },
  {
    icon: FileText,
    title: "Document Preparation",
    description:
      "Get expert guidance on gathering, organizing, and preparing all required documentation for your visa application.",
  },
  {
    icon: Globe,
    title: "Multi-Country Support",
    description:
      "We provide appointment assistance for visas to the USA, UK, Schengen Area, Canada, Australia, and more.",
  },
  {
    icon: Users,
    title: "Family & Group Bookings",
    description:
      "Traveling with family or colleagues? We coordinate group appointments so everyone is scheduled together.",
  },
  {
    icon: Clock,
    title: "Expedited Processing",
    description:
      "Need your appointment fast? Our priority service helps you get the quickest available slot.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Confidential",
    description:
      "Your personal data is handled with the highest security standards. We never share your information.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            What We Offer
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Comprehensive Visa Appointment Services
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            From document preparation to securing your appointment date, we handle every detail so you can focus on your journey.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border/60 bg-card transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-card-foreground">
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
