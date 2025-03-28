import { Star } from "lucide-react";
import { TestimonialsProps } from "../../types/components";
import { SubTitleCustom } from "../ui/title";

export function TestimonialsSection({
  data: { comments, description, title },
}: TestimonialsProps) {
  const getInitials = (name: string): string => {
    const words = name.split(" ");
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    return words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase();
  };

  return (
    <section
      id="testimonios"
      className="w-full py-12 md:py-24 lg:py-32 scroll-mt-16"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Testimonios
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <SubTitleCustom title={title} />

            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              {description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 rounded-lg border p-6 shadow-md hover:shadow-lg transition-shadow bg-white"
            >
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-yellow-500 h-5 w-5" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "{comment.comment}"
              </p>
              <div className="flex items-center gap-2 mt-auto pt-4 border-t">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-medium text-primary">
                    {getInitials(comment.name)}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{comment.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {comment.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
