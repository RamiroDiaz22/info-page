import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactMeProps } from "../../types/components";
import { SubTitleCustom } from "../ui/title";
import { CONTACT_ICON } from "../../lib/const";

export function ContactSection({
  data: { title, why, description, email, location, phone, timetables },
}: ContactMeProps) {
  return (
    <section
      id="contacto"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/10 scroll-mt-16"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Contacto
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <SubTitleCustom title={title} />
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              {description}
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {phone && (
                <div className="flex items-center gap-3 rounded-lg border bg-background p-4 shadow-sm">
                  {CONTACT_ICON.phone}
                  <div>
                    <p className="text-sm text-muted-foreground">Teléfono</p>
                    <p className="font-medium">{phone}</p>
                  </div>
                </div>
              )}
              {email && (
                <div className="flex items-center gap-3 rounded-lg border bg-background p-4 shadow-sm">
                  {CONTACT_ICON.email}
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{email}</p>
                  </div>
                </div>
              )}
              {location && (
                <div className="flex items-center gap-3 rounded-lg border bg-background p-4 shadow-sm">
                  {CONTACT_ICON.location}
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="font-medium">{location}</p>
                  </div>
                </div>
              )}
              {timetables && (
                <div className="flex items-center gap-3 rounded-lg border bg-background p-4 shadow-sm">
                  {CONTACT_ICON.timetables}
                  <div>
                    <p className="text-sm text-muted-foreground">Horario</p>
                    <p className="font-medium">{timetables}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-lg border bg-background p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">¿Por qué elegirme?</h3>
              <ul className="space-y-3">
                {why.map(({ reasons }, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>{reasons}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-4 rounded-lg border bg-background p-6 shadow-lg">
            <h3 className="text-xl font-bold">Solicitar Presupuesto Gratis</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Nombre
                  </label>
                  <Input
                    id="name"
                    placeholder="Ingrese su nombre"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Ingrese su email"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Teléfono
                </label>
                <Input
                  id="phone"
                  placeholder="Ingrese su teléfono"
                  className="border-primary/20 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="service"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Servicio que necesita
                </label>
                <select
                  id="service"
                  className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Seleccione un servicio</option>
                  <option value="electricidad">Electricidad</option>
                  <option value="carpinteria">Carpintería</option>
                  <option value="albañileria">Albañilería</option>
                  <option value="placas-yeso">Placas de Yeso</option>
                  <option value="plomeria">Plomería</option>
                  <option value="mantenimiento">Mantenimiento General</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Describa el trabajo que necesita"
                  className="min-h-[120px] border-primary/20 focus:border-primary"
                />
              </div>
              <Button type="submit" className="w-full text-lg py-6" size="lg">
                Enviar Solicitud
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Le responderemos en menos de 24 horas con un presupuesto
                detallado.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
