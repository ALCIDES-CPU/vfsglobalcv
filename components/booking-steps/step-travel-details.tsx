"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { BookingFormData } from "@/components/booking-wizard"

type Props = {
  data: BookingFormData
  errors: Record<string, string>
  updateField: (field: keyof BookingFormData, value: string) => void
}

export function StepTravelDetails({ data, errors, updateField }: Props) {
  return (
    <div className="flex flex-col gap-5">
      {/* Travel dates */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="travelDate">
            Data Prevista de Viagem <span className="text-destructive">*</span>
          </Label>
          <Input
            id="travelDate"
            type="date"
            value={data.travelDate}
            onChange={(e) => updateField("travelDate", e.target.value)}
            className="h-11"
            aria-invalid={!!errors.travelDate}
          />
          {errors.travelDate && (
            <p className="text-xs text-destructive" role="alert">{errors.travelDate}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="returnDate">Data Prevista de Regresso</Label>
          <Input
            id="returnDate"
            type="date"
            value={data.returnDate}
            onChange={(e) => updateField("returnDate", e.target.value)}
            className="h-11"
          />
        </div>
      </div>

      {/* Purpose of travel */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="travelPurpose">
          Motivo da Viagem <span className="text-destructive">*</span>
        </Label>
        <Input
          id="travelPurpose"
          value={data.travelPurpose}
          onChange={(e) => updateField("travelPurpose", e.target.value)}
          placeholder="Ex: Turismo, visita familiar, estudos, trabalho..."
          className="h-11"
          aria-invalid={!!errors.travelPurpose}
        />
        {errors.travelPurpose && (
          <p className="text-xs text-destructive" role="alert">{errors.travelPurpose}</p>
        )}
      </div>

      {/* Accommodation */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="accommodationType">Tipo de Alojamento</Label>
          <Select
            value={data.accommodationType}
            onValueChange={(v) => updateField("accommodationType", v)}
          >
            <SelectTrigger id="accommodationType" className="h-11">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hotel">Hotel</SelectItem>
              <SelectItem value="familiar">Casa de Familiar/Amigo</SelectItem>
              <SelectItem value="aluguel">Alojamento Alugado</SelectItem>
              <SelectItem value="residencia">Residencia Estudantil</SelectItem>
              <SelectItem value="outro">Outro</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="accommodationAddress">Morada do Alojamento em Portugal</Label>
          <Input
            id="accommodationAddress"
            value={data.accommodationAddress}
            onChange={(e) => updateField("accommodationAddress", e.target.value)}
            placeholder="Morada completa"
            className="h-11"
          />
        </div>
      </div>

      {/* Financial means */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="financialMeans">
          Meios Financeiros <span className="text-destructive">*</span>
        </Label>
        <Select
          value={data.financialMeans}
          onValueChange={(v) => updateField("financialMeans", v)}
        >
          <SelectTrigger id="financialMeans" className="h-11" aria-invalid={!!errors.financialMeans}>
            <SelectValue placeholder="Como comprova meios financeiros?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="extrato-bancario">Extrato Bancario</SelectItem>
            <SelectItem value="carta-empregador">Carta do Empregador</SelectItem>
            <SelectItem value="patrocinador">Carta de Patrocinador</SelectItem>
            <SelectItem value="bolsa">Bolsa de Estudos</SelectItem>
            <SelectItem value="outro">Outro</SelectItem>
          </SelectContent>
        </Select>
        {errors.financialMeans && (
          <p className="text-xs text-destructive" role="alert">{errors.financialMeans}</p>
        )}
      </div>

      {/* Insurance */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="hasInsurance">
          Seguro de Viagem <span className="text-destructive">*</span>
        </Label>
        <Select
          value={data.hasInsurance}
          onValueChange={(v) => updateField("hasInsurance", v)}
        >
          <SelectTrigger id="hasInsurance" className="h-11" aria-invalid={!!errors.hasInsurance}>
            <SelectValue placeholder="Possui seguro de viagem?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sim">Sim, ja possuo seguro</SelectItem>
            <SelectItem value="vou-adquirir">Vou adquirir antes da entrevista</SelectItem>
            <SelectItem value="preciso-ajuda">Preciso de ajuda para contratar</SelectItem>
          </SelectContent>
        </Select>
        {errors.hasInsurance && (
          <p className="text-xs text-destructive" role="alert">{errors.hasInsurance}</p>
        )}
        <p className="text-xs text-muted-foreground">
          O seguro de viagem deve cobrir um minimo de 30.000 EUR e ser valido em todo o espaco Schengen.
        </p>
      </div>

      {/* Additional info */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="additionalInfo">Informacoes Adicionais</Label>
        <Textarea
          id="additionalInfo"
          value={data.additionalInfo}
          onChange={(e) => updateField("additionalInfo", e.target.value)}
          placeholder="Informacoes adicionais relevantes para o seu pedido de visto..."
          rows={3}
        />
      </div>

      <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
        <p className="text-xs leading-relaxed text-foreground/70">
          <strong className="text-foreground">Checklist de documentos para a entrevista:</strong>{" "}
          Passaporte original, 2 fotos tipo passe, formulario preenchido, comprovativo de alojamento,
          seguro de viagem (min. 30.000 EUR), comprovativo de meios financeiros, bilhete de aviao (ida e volta),
          e carta convite (se aplicavel).
        </p>
      </div>
    </div>
  )
}
