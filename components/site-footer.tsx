import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#servicos", label: "Nossos Servicos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#agendar", label: "Agendar Visto" },
  { href: "#contato", label: "Fale Conosco" },
]

const visaTypes = [
  "Visto de Turismo",
  "Visto de Negocios",
  "Visto de Estudante",
  "Visto de Trabalho",
  "Visto Familiar",
]

export function SiteFooter() {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5"
              aria-label="VFS Visa - Pagina Inicial"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 p-1">
                <Image
                  src="/logo.png"
                  alt="VFS Visa"
                  width={32}
                  height={32}
                  className="h-8 w-8 brightness-0 invert"
                />
              </div>
              <span className="font-heading text-lg font-bold">
                VFS <span className="text-accent">Visa</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
              Assistencia profissional para agendamento de visto em que voce pode
              confiar. Simplificamos o processo para que voce foque na sua
              viagem.
            </p>
          </div>

          {/* Links Rapidos */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground/40">
              Links Rapidos
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tipos de Visto */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground/40">
              Tipos de Visto
            </h3>
            <ul className="flex flex-col gap-2.5">
              {visaTypes.map((type) => (
                <li key={type}>
                  <span className="text-sm text-primary-foreground/60">
                    {type}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground/40">
              Fale Conosco
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/60">
                  contato@vfsvisa.com.br
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/60">
                  +55 (11) 4000-0000
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/60">
                  Av. Paulista, 1000
                  <br />
                  Sala 400, Sao Paulo - SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-primary-foreground/40">
              &copy; 2026 VFS Visa. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60"
              >
                Politica de Privacidade
              </Link>
              <Link
                href="#"
                className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60"
              >
                Termos de Uso
              </Link>
              <Link
                href="#"
                className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
