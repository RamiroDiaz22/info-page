import React from "react";
import { cn } from "../../lib/utils";

interface TitleCustomProps {
  title: string;
  className?: string;
}

const wrapTextInSpan = (text: string) => {
  const regex = /{{(.*?)}}/g;
  const parts = text.split(regex);
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="text-primary">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const TitleCustom: React.FC<TitleCustomProps> = ({ title, className }) => {
  return (
    <h1
      className={cn(
        "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl",
        className
      )}
    >
      {wrapTextInSpan(title)}
    </h1>
  );
};

const SubTitleCustom: React.FC<TitleCustomProps> = ({ title, className }) => {
  return (
    <h2
      className={cn(
        "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl",
        className
      )}
    >
      {wrapTextInSpan(title)}
    </h2>
  );
};

export { TitleCustom, SubTitleCustom };
