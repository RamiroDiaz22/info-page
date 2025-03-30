"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Wrench,
} from "lucide-react";
import { FooterProps } from "../../types/components";
import { SOCIAL_MEDIA_ICON } from "../../lib/const";
import { useData } from "../../context/DataContext";

export function Footer({ socialMedia }: FooterProps) {
  const { phone, email } = useData();

  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primera columna: Secciones de la página */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Wrench className="h-6 w-6 text-primary" />
              <Link href={"/"} className="font-bold">
                MarcoSoluciones
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Servicios profesionales de mantenimiento y construcción para
              hogares y empresas con la máxima calidad y garantía en Buenos
              Aires, Argentina. {/* TODO: locations */}
            </p>
            <div className="space-y-4">
              <h3 className="font-medium">Secciones</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#servicios"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#nosotros"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#testimonios"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/proyectos"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contacto"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Segunda columna: Contacto y redes sociales */}
          <div className="space-y-6">
            <h3 className="font-medium">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>+54 {phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{email}</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Buenos Aires, Argentina</span> {/* TODO: locations */}
              </li>
            </ul>

            <div className="space-y-4">
              <h3 className="font-medium">Redes Sociales</h3>
              <div className="flex gap-4">
                {socialMedia?.length &&
                  socialMedia.map((social) => (
                    <Link
                      href={social.url}
                      className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary/20 transition-colors"
                      key={social.type}
                    >
                      {/* <Twitter className="h-5 w-5" /> */}
                      {SOCIAL_MEDIA_ICON[social.type]}
                      <span className="sr-only">{social.type}</span>
                    </Link>
                  ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Síguenos en redes sociales para ver nuestros últimos proyectos y
                novedades.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MarcoSoluciones. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
