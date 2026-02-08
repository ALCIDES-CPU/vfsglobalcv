"use client"

import React from "react"

import { useState } from "react"
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Lock, ArrowRight } from "lucide-react"

const visaTypes = [
  "Tourist Visa",
  "Business Visa",
  "Student Visa",
  "Work Visa",
  "Transit Visa",
  "Family / Dependent Visa",
  "Immigrant Visa",
]

const cities = [
  "New York",
  "London",
  "Paris",
  "Berlin",
  "Toronto",
  "Sydney",
  "Dubai",
  "Mumbai",
  "Tokyo",
  "Casablanca",
  "Istanbul",
  "Rome",
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

    if (!name || name.trim().length < 2) errs.fullName = "Full name is required"
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Valid email is required"
    if (!phone || phone.trim().length < 6) errs.phone = "Valid phone number is required"
    if (!passport || passport.trim().length < 5)
      errs.passport = "Valid passport number is required"
    if (!visaType) errs.visaType = "Please select a visa type"
    if (!city) errs.city = "Please select a city"

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
    <section id="book" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Get Started
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Book Your Visa Appointment
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Fill in the form below and proceed to payment to confirm your appointment request.
          </p>
        </div>

        <Card className="mx-auto mt-12 max-w-2xl border-border/60 shadow-lg">
          <CardHeader className="border-b border-border/60 bg-muted/30">
            <CardTitle className="text-xl text-card-foreground">Appointment Details</CardTitle>
            <CardDescription>
              All fields marked with <span className="text-destructive">*</span> are required.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="fullName">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="text-xs text-destructive" role="alert">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-destructive" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-xs text-destructive" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Passport Number */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="passport">
                  Passport Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="passport"
                  name="passport"
                  placeholder="AB1234567"
                  aria-invalid={!!errors.passport}
                  aria-describedby={errors.passport ? "passport-error" : undefined}
                />
                {errors.passport && (
                  <p id="passport-error" className="text-xs text-destructive" role="alert">
                    {errors.passport}
                  </p>
                )}
              </div>

              {/* Visa Type & City */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="visaType">
                    Visa Type <span className="text-destructive">*</span>
                  </Label>
                  <Select name="visaType">
                    <SelectTrigger id="visaType" aria-invalid={!!errors.visaType}>
                      <SelectValue placeholder="Select visa type" />
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
                    Preferred City <span className="text-destructive">*</span>
                  </Label>
                  <Select name="city">
                    <SelectTrigger id="city" aria-invalid={!!errors.city}>
                      <SelectValue placeholder="Select city" />
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

              {/* Message */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Additional Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Any special requirements or questions..."
                  rows={4}
                />
              </div>

              {/* Submit */}
              <div className="mt-2 flex flex-col gap-3">
                <Button type="submit" size="lg" className="w-full">
                  Proceed to Payment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <Lock className="h-3.5 w-3.5" />
                  Secure checkout powered by Stripe
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
