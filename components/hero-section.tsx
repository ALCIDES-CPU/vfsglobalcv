import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const trustBadges = [
  "Secure & Confidential",
  "Expert Guidance",
  "Fast Processing",
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
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Trusted Visa Appointment Services
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Your Visa Appointment, Simplified
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Professional assistance for scheduling your visa appointment.
            We guide you through every step of the process with care and expertise.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="#book">
                Book Your Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-sm text-primary-foreground/70"
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
