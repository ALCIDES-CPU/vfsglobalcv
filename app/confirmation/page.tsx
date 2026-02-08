import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowLeft, Mail, Shield } from "lucide-react"

export const metadata = {
  title: "Appointment Confirmed | VisaAssist Pro",
  description: "Your visa appointment request has been received successfully.",
}

export default function ConfirmationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border/60 bg-card">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2" aria-label="VisaAssist Pro Home">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              VisaAssist <span className="text-accent">Pro</span>
            </span>
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-20">
        <Card className="mx-auto max-w-lg border-border/60 shadow-lg">
          <CardContent className="flex flex-col items-center p-8 text-center md:p-12">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>

            <h1 className="text-balance text-2xl font-bold tracking-tight text-card-foreground md:text-3xl">
              Appointment Request Confirmed
            </h1>

            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Thank you for your submission. Your visa appointment request has been received and is now being processed by our team.
            </p>

            <div className="mt-8 w-full rounded-lg border border-border bg-muted/30 p-5">
              <h2 className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground">
                <Mail className="h-4 w-4 text-accent" />
                What Happens Next
              </h2>
              <ul className="mt-3 flex flex-col gap-2 text-left text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  You will receive a confirmation email with your appointment details.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Our team will contact you within 24 hours to finalize your booking.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Prepare the required documents listed in the preparation checklist.
                </li>
              </ul>
            </div>

            <Button asChild className="mt-8" size="lg">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
