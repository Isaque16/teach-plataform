import { ReactNode } from "react";

interface FooterNavProps {
  title: string;
  children: ReactNode;
}

export default function FooterNav({ title, children }: FooterNavProps) {
  return (
    <nav className="flex flex-col gap-5">
      <h6 className="footer-title">{title}</h6>
      <ul className="flex flex-col gap-5">{children}</ul>
    </nav>
  );
}
