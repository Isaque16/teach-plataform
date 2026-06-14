import { ReactNode } from "react";

interface FooterNavItemProps {
  href: string;
  children: ReactNode;
  badge?: string;
}

export default function FooterNavItem({
  href,
  children,
  badge,
}: FooterNavItemProps) {
  return (
    <li className="flex gap-2">
      <a href={href} className="link-hover font-light">
        {children}
      </a>
      {badge && (
        <span className="px-2 bg-white text-purple-500 rounded-sm">
          {badge}
        </span>
      )}
    </li>
  );
}
