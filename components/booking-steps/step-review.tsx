"use client"

import type { BookingFormData } from "@/components/booking-wizard"
import { User, FileText, Plane, ShieldCheck } from "lucide-react"

type Props = {
  data: BookingFormData
}

const visaTypeLabels: Record<string, string> = {
  turismo: "Visto de Turismo (Curta Duracao)",
  trabalho: "Visto de Trabalho",
  estudante: "Visto de Estudante",
  residencia: "Visto de Residencia",
  familiar: "Reagrupamento Familiar",
  transito: "Visto de Transito",
  medico: "Visto para Tratamento Medico",
  negocios: "Visto de Negocios",
}

const financialLabels: Record<string, string> = {
  "extrato-bancario": "Extrato Bancario",
  "carta-empregador": "Carta do Empregador",
  patrocinador: "Carta de Patrocinador",
  bolsa: "Bolsa de Estudos",
  outro: "Outro",
}

const insuranceLabels: Record<string, string> = {
  sim: "Sim, ja possuo",
  "vou-adquirir": "Vou adquirir",
  "preciso-ajuda": "Preciso de ajuda",
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground sm:w-48 sm:shrink-0">
        {label}
      </span>
      <span className="text-sm text-foreground">{value || "---"}</span>
    </div>
  )
}

export function StepReview({ data }: Props) {
  return (
    <div className="flex flex-col gap-6">
      {/* Personal */}
      <div>
        <div className="mb-3 flex items-center gap-2">
          <User className="h-4 w-4 text-accent" />
          <h3 className="font-heading text-sm font-semibold text-foreground">Dados Pessoais</h3>
        </div>
        <div className="flex flex-col gap-2 rounded-lg border border-border/50 bg-secondary/30 p-4">
          <ReviewRow label="Nome Completo" value={data.fullName} />
          <ReviewRow label="Data de Nascimento" value={data.dateOfBirth} />
          <ReviewRow label="Genero" value={data.gender} />
          <ReviewRow label="Nacionalidade" value={data.nationality} />
          <ReviewRow label="E-mail" value={data.email} />
          <ReviewRow label="Telefone" value={data.phone} />
          <ReviewRow label="Morada" value={data.address} />
          <ReviewRow label="Cidade" value={`${data.city}${data.postalCode ? `, ${data.postalCode}` : ""}`} />
        </div>
      </div>

      {/* Passport */}
      <div>
        <div className="mb-3 flex items-center gap-2">
          <FileText className="h-4 w-4 text-accent" />
          <h3 className="font-heading text-sm font-semibold text-foreground">Passaporte e Visto</h3>
        </div>
        <div className="flex flex-col gap-2 rounded-lg border border-border/50 bg-secondary/30 p-4">
          <ReviewRow label="Numero do Passaporte" value={data.passportNumber} />
          <ReviewRow label="Data de Emissao" value={data.passportIssueDate} />
          <ReviewRow label="Data de Validade" value={data.passportExpiryDate} />
          <ReviewRow label="Pais de Emissao" value={data.passportIssuingCountry} />
          <ReviewRow label="Tipo de Visto" value={visaTypeLabels[data.visaType] || data.visaType} />
          <ReviewRow label="Visto Schengen Anterior" value={data.previousVisa || "Nao indicado"} />
        </div>
      </div>

      {/* Travel */}
      <div>
        <div className="mb-3 flex items-center gap-2">
          <Plane className="h-4 w-4 text-accent" />
          <h3 className="font-heading text-sm font-semibold text-foreground">Detalhes da Viagem</h3>
        </div>
        <div className="flex flex-col gap-2 rounded-lg border border-border/50 bg-secondary/30 p-4">
          <ReviewRow label="Data da Viagem" value={data.travelDate} />
          <ReviewRow label="Data de Regresso" value={data.returnDate || "Nao indicada"} />
          <ReviewRow label="Motivo" value={data.travelPurpose} />
          <ReviewRow label="Alojamento" value={data.accommodationType || "Nao indicado"} />
          <ReviewRow label="Morada em Portugal" value={data.accommodationAddress || "Nao indicada"} />
          <ReviewRow label="Meios Financeiros" value={financialLabels[data.financialMeans] || data.financialMeans} />
          <ReviewRow label="Seguro de Viagem" value={insuranceLabels[data.hasInsurance] || data.hasInsurance} />
          {data.additionalInfo && (
            <ReviewRow label="Informacoes Adicionais" value={data.additionalInfo} />
          )}
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-lg border border-accent/20 bg-accent/5 p-4">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
        <div>
          <p className="text-sm font-medium text-foreground">
            Confirme os seus dados antes de prosseguir
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Ao clicar em &ldquo;Prosseguir para Pagamento&rdquo;, sera redirecionado para a nossa pagina de
            pagamento segura. Apos a confirmacao do pagamento, a nossa equipa ira processar o seu
            agendamento e contacta-lo por e-mail com a data e hora da entrevista.
          </p>
        </div>
      </div>
    </div>
  )
}
