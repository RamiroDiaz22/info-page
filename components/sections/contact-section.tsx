"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactMeProps } from "@/types/components";
import { SubTitleCustom } from "@/components/ui/title";
import { CONTACT_ICON } from "@/lib/const";
import { useData } from "@/context/DataContext";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { getAllCategories } from "@/lib/request";
import ReCAPTCHA from "react-google-recaptcha";

export function ContactSection({
  data: { title, why, description, location, timetables },
}: ContactMeProps) {
  const { phone, email } = useData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [categorieData, setCategorieData] = useState<any>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCategories = await getAllCategories();
        const attributesCategories = responseCategories?.data || null;

        if (attributesCategories) {
          const parsedProjectData = attributesCategories.map((item: any) => ({
            slug: item.slug,
            categorie: item.categorie,
          }));
          setCategorieData(parsedProjectData);
        }
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchData();
  }, []);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current || !recaptchaRef.current) return;

    try {
      setIsSubmitting(true);
      setSubmitError(null);

      // Ejecutar reCAPTCHA invisible
      const recaptchaToken = await recaptchaRef.current.executeAsync();

      // Si no se obtiene un token, mostrar error
      if (!recaptchaToken) {
        throw new Error(
          "No se pudo verificar que no eres un robot. Por favor, inténtalo de nuevo."
        );
      }

      // Crear un objeto con los datos del formulario
      const formData = new FormData(formRef.current);

      // Convertir FormData a un objeto para EmailJS
      const formJson: Record<string, string> = {};
      formData.forEach((value, key) => {
        formJson[key] = value.toString();
      });

      // Enviar el formulario usando EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "",
        {
          ...formJson,
          year: new Date().getFullYear(),
          "g-recaptcha-response": recaptchaToken,
        }
      );

      setSubmitSuccess(true);
      formRef.current.reset();

      // Resetear el reCAPTCHA
      recaptchaRef.current.reset();

      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    <p className="font-medium">+54 {phone}</p>
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

            {/* Mensaje de éxito */}
            {submitSuccess && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 text-green-700">
                <p className="font-medium">¡Mensaje enviado con éxito!</p>
                <p>Nos pondremos en contacto con usted lo antes posible.</p>
              </div>
            )}

            {/* Mensaje de error */}
            {submitError && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 text-red-700">
                <p className="font-medium">Error</p>
                <p>{submitError}</p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="user_name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Nombre
                  </label>
                  <Input
                    id="user_name"
                    name="user_name"
                    placeholder="Ingrese su nombre"
                    className="border-primary/20 focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="user_email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input
                    id="user_email"
                    name="user_email"
                    type="email"
                    placeholder="Ingrese su email"
                    className="border-primary/20 focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="user_phone"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Teléfono
                </label>
                <Input
                  id="user_phone"
                  name="user_phone"
                  placeholder="Ingrese su teléfono"
                  className="border-primary/20 focus:border-primary"
                  required
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
                  name="service"
                  className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Seleccione un servicio</option>

                  {categorieData?.length > 0 &&
                    categorieData.map((el: any) => (
                      <option key={el.slug} value={el.categorie}>
                        {el.categorie}
                      </option>
                    ))}

                  <option value="other">Otro</option>
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
                  name="message"
                  placeholder="Describa el trabajo que necesita"
                  className="min-h-[120px] border-primary/20 focus:border-primary"
                  required
                />
              </div>

              {/* reCAPTCHA invisible */}
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA || ""}
                size="invisible"
                badge="bottomright"
              />

              <Button
                type="submit"
                className="w-full text-lg py-6"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Le responderemos en menos de 24 horas con un presupuesto
                detallado.
              </p>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Este sitio está protegido por reCAPTCHA y aplican la{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Política de Privacidad
                </a>{" "}
                y los{" "}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Términos de Servicio
                </a>{" "}
                de Google.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
