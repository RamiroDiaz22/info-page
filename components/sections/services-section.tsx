import { ServicesProps } from "../../types/components";
import { SubTitleCustom } from "../ui/title";
import { PROFESSIONS_ICON } from "../../lib/const";

export function ServicesSection({
  data: { description, title, professions },
}: ServicesProps) {
  return (
    <section
      id="servicios"
      className="w-full py-12 md:py-24 lg:py-32 scroll-mt-16"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Nuestros Servicios
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <SubTitleCustom title={title} />
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              {description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {professions?.map((profession, index) => {
            if (profession.isActive) {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow bg-white"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    {PROFESSIONS_ICON[profession.slug]?.({
                      className: "h-8 w-8",
                    })}
                  </div>
                  <h3 className="text-xl font-bold">{profession.categorie}</h3>
                  <p className="text-center text-muted-foreground">
                    {profession.description}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
