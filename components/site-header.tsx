"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "#servicos", label: "Servicos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#agendar", label: "Agendar" },
  { href: "#contato", label: "Contato" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/80 backdrop-blur-lg supports-[backdrop-filter]:bg-card/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-[72px] lg:px-8">
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

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navegacao principal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-4 rounded-full px-5">
            <Link href="#agendar">Agendar Agora</Link>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-card p-0">
            <SheetTitle className="sr-only">Menu de navegacao</SheetTitle>
            <div className="flex flex-col gap-1 px-6 pt-10">
              <Link
                href="/"
                className="mb-6 flex items-center gap-2.5"
                onClick={() => setOpen(false)}
              >
                <Image
                  src="/logo.png"
                  alt="VFS Visa"
                  width={36}
                  height={36}
                  className="h-9 w-9"
                />
                <span className="font-heading text-lg font-bold text-foreground">
                  VFS <span className="text-accent">Visa</span>
                </span>
              </Link>
              <nav
                className="flex flex-col gap-0.5"
                aria-label="Navegacao mobile"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button asChild className="mt-4 rounded-full">
                <Link href="#agendar" onClick={() => setOpen(false)}>
                  Agendar Agora
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
