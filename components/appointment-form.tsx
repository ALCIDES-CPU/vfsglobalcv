"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Lock, ArrowRight, ShieldCheck } from "lucide-react"

const visaTypes = [
  "Visto de Turismo",
  "Visto de Negocios",
  "Visto de Estudante",
  "Visto de Trabalho",
  "Visto de Transito",
  "Visto Familiar / Dependente",
  "Visto de Imigrante",
]

const cities = [
  "Sao Paulo",
  "Rio de Janeiro",
  "Brasilia",
  "Recife",
  "Porto Alegre",
  "Belo Horizonte",
  "Lisboa",
  "Porto",
  "Nova York",
  "Miami",
  "Londres",
  "Paris",
]

const STRIPE_LINK = "https://buy.stripe.com/00w8wR3Qy1cg89K2x4enS04"

export function AppointmentForm() {
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(form: FormData): Record<string, string> {
    const errs: Record<string, string> = {}
    const name = form.get("fullName") as string
    const email = form.get("email") as string
    const phone = form.get("phone") as string
    const passport = form.get("passport") as string
    const visaType = form.get("visaType") as string
    const city = form.get("city") as string

    if (!name || name.trim().length < 2)
      errs.fullName = "Nome completo e obrigatorio"
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "E-mail valido e obrigatorio"
    if (!phone || phone.trim().length < 6)
      errs.phone = "Telefone valido e obrigatorio"
    if (!passport || passport.trim().length < 5)
      errs.passport = "Numero do passaporte valido e obrigatorio"
    if (!visaType) errs.visaType = "Selecione um tipo de visto"
    if (!city) errs.city = "Selecione uma cidade"

    return errs
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const validationErrors = validate(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    window.location.href = STRIPE_LINK
  }

  return (
    <section id="agendar" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Comece Agora
            </span>
          </div>
          <h2 className="font-heading text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Agende seu Visto
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Preencha o formulario abaixo e siga para o pagamento para confirmar
            sua solicitacao de agendamento.
          </p>
        </div>

        <Card className="mx-auto mt-12 max-w-2xl overflow-hidden border-border/40 shadow-xl shadow-primary/5">
          <CardHeader className="border-b border-border/40 bg-secondary/30 px-6 py-5 lg:px-8">
            <CardTitle className="font-heading text-xl text-card-foreground">
              Detalhes do Agendamento
            </CardTitle>
            <CardDescription>
              Todos os campos marcados com{" "}
              <span className="text-destructive">*</span> sao obrigatorios.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 pt-6 pb-8 lg:px-8">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5"
            >
              {/* Nome Completo */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="fullName">
                  Nome Completo <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Maria da Silva"
                  className="h-11"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={
                    errors.fullName ? "fullName-error" : undefined
                  }
                />
                {errors.fullName && (
                  <p
                    id="fullName-error"
                    className="text-xs text-destructive"
                    role="alert"
                  >
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* E-mail & Telefone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">
                    E-mail <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="maria@exemplo.com"
                    className="h-11"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="text-xs text-destructive"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">
                    Telefone <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+55 (11) 99999-0000"
                    className="h-11"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p
                      id="phone-error"
                      className="text-xs text-destructive"
                      role="alert"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Passaporte */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="passport">
                  Numero do Passaporte{" "}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="passport"
                  name="passport"
                  placeholder="AB1234567"
                  className="h-11"
                  aria-invalid={!!errors.passport}
                  aria-describedby={
                    errors.passport ? "passport-error" : undefined
                  }
                />
                {errors.passport && (
                  <p
                    id="passport-error"
                    className="text-xs text-destructive"
                    role="alert"
                  >
                    {errors.passport}
                  </p>
                )}
              </div>

              {/* Tipo de Visto & Cidade */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="visaType">
                    Tipo de Visto <span className="text-destructive">*</span>
                  </Label>
                  <Select name="visaType">
                    <SelectTrigger
                      id="visaType"
                      className="h-11"
                      aria-invalid={!!errors.visaType}
                    >
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      {visaTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.visaType && (
                    <p className="text-xs text-destructive" role="alert">
                      {errors.visaType}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="city">
                    Cidade Preferida{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Select name="city">
                    <SelectTrigger
                      id="city"
                      className="h-11"
                      aria-invalid={!!errors.city}
                    >
                      <SelectValue placeholder="Selecione a cidade" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.city && (
                    <p className="text-xs text-destructive" role="alert">
                      {errors.city}
                    </p>
                  )}
                </div>
              </div>

              {/* Mensagem */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Mensagem Adicional</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Requisitos especiais ou duvidas..."
                  rows={4}
                />
              </div>

              {/* Submit */}
              <div className="mt-2 flex flex-col gap-3">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full text-base"
                >
                  Prosseguir para Pagamento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5" />
                    Checkout seguro via Stripe
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Dados protegidos
                  </span>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
