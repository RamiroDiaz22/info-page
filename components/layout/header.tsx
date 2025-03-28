"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wrench, X } from "lucide-react";
import { HeaderProps } from "../../types/components";
import Link from "next/link";

export function Header({ name }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Wrench className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">{name}</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/#servicios"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="/#sobre-mi"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Sobre Mí
          </Link>
          <Link
            href="/#testimonios"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Testimonios
          </Link>
          <Link
            href="/proyectos"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Proyectos
          </Link>
          <Link
            href="/#contacto"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contacto
          </Link>
        </nav>
        <Button asChild className="hidden md:flex">
          <Link href="/#contacto">Solicitar Presupuesto</Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle Menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b shadow-lg">
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              href="/#servicios"
              className="text-lg font-medium hover:text-primary px-2 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/#sobre-mi"
              className="text-lg font-medium hover:text-primary px-2 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Mí
            </Link>
            <Link
              href="/#testimonios"
              className="text-lg font-medium hover:text-primary px-2 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonios
            </Link>
            <Link
              href="/#contacto"
              className="text-lg font-medium hover:text-primary px-2 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link
              href="/proyectos"
              className="text-lg font-medium hover:text-primary px-2 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Button asChild className="w-full mt-2">
              <Link href="/#contacto" onClick={() => setMobileMenuOpen(false)}>
                Solicitar Presupuesto
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
