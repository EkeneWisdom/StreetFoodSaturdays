import type { ReactNode } from "react";

interface Certification {
  icon: ReactNode;
  title: string;
}

interface CertificationsRowProps {
  items: Certification[];
}

export default function CertificationsRow({
  items,
}: CertificationsRowProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {items.map((item) => (
        <div
          key={item.title}
          className="flex items-center gap-3"
        >
          <div className="text-secondary">
            {item.icon}
          </div>

          <span className="font-medium">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
}