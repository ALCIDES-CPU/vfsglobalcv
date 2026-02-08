import Link from "next/link"
import { Shield, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#services", label: "Our Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#book", label: "Book Appointment" },
  { href: "#contact", label: "Contact Us" },
]

const visaTypes = [
  "Tourist Visa",
  "Business Visa",
  "Student Visa",
  "Work Visa",
  "Family Visa",
]

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2" aria-label="VisaAssist Pro Home">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">
                VisaAssist <span className="text-accent">Pro</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Professional visa appointment assistance you can trust. We simplify the process so you can focus on your travels.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visa Types */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Visa Types
            </h3>
            <ul className="flex flex-col gap-2.5">
              {visaTypes.map((type) => (
                <li key={type}>
                  <span className="text-sm text-primary-foreground/70">{type}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  support@visaassistpro.com
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  +1 (800) 555-0199
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  123 International Blvd,
                  <br />
                  Suite 400, New York, NY
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-primary-foreground/50">
              &copy; {new Date().getFullYear()} VisaAssist Pro. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
