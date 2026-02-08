import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowLeft, Mail } from "lucide-react"

export const metadata = {
  title: "Agendamento Confirmado | VFS Visa",
  description:
    "Sua solicitacao de agendamento de visto foi recebida com sucesso.",
}

export default function ConfirmationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border/40 bg-card">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label="VFS Visa - Pagina Inicial"
          >
            <Image
              src="/logo.png"
              alt="VFS Visa"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="font-heading text-xl font-bold tracking-tight text-foreground">
              VFS <span className="text-accent">Visa</span>
            </span>
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-20">
        <Card className="mx-auto max-w-lg border-border/40 shadow-xl shadow-primary/5">
          <CardContent className="flex flex-col items-center p-8 text-center md:p-12">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle2 className="h-10 w-10 text-accent" />
            </div>

            <h1 className="font-heading text-balance text-2xl font-bold tracking-tight text-card-foreground md:text-3xl">
              Agendamento Confirmado
            </h1>

            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Obrigado pela sua solicitacao. Seu pedido de agendamento de visto
              foi recebido e esta sendo processado pela nossa equipe.
            </p>

            <div className="mt-8 w-full rounded-xl border border-border bg-secondary/30 p-5">
              <h2 className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground">
                <Mail className="h-4 w-4 text-accent" />
                Proximos Passos
              </h2>
              <ul className="mt-3 flex flex-col gap-2 text-left text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Voce recebera um e-mail de confirmacao com os detalhes do
                  agendamento.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Nossa equipe entrara em contato em ate 24 horas para finalizar
                  sua reserva.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Prepare os documentos necessarios listados no checklist de
                  preparacao.
                </li>
              </ul>
            </div>

            <Button asChild className="mt-8 rounded-full px-8" size="lg">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Inicio
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
