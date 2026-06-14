import { memo } from "react";

interface TestimonialCardProps {
  text: string;
  avatar: string;
  name: string;
  role: string;
}

const TestimonialCard = memo(
  ({ text, avatar, name, role }: TestimonialCardProps) => {
    return (
      <article className="w-[309px] lg:w-[412px] h-[323px] lg:h-[305px] flex flex-col justify-center gap-8 rounded-lg p-3 lg:p-8 shadow-lg">
        <blockquote className="font-text text-lg">{text}</blockquote>
        <footer className="flex items-center justify-start gap-4 w-full">
          <img
            src={avatar}
            alt={`Picture of ${name}`}
            className="h-16 w-16 rounded-full object-cover"
            width="64"
            height="64"
            loading="lazy"
          />
          <div className="flex flex-col">
            <p className="text-sm">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </footer>
      </article>
    );
  },
);

export default TestimonialCard;
