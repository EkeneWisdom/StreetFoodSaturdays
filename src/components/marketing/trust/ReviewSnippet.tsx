import {
  Star,
} from "lucide-react";
import type { ReactNode } from "react";

import Card from "@/components/ui/Card";

interface ReviewSnippetProps {
  quote: string;
  author: string;
  company?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  avatar?: ReactNode;
}

export default function ReviewSnippet({
  quote,
  author,
  company,
  rating = 5,
  avatar,
}: ReviewSnippetProps) {
  return (
    <Card className="space-y-5 p-6">

      <div className="flex gap-1 text-secondary">
        {Array.from({
          length: rating,
        }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill="currentColor"
          />
        ))}
      </div>

      <p className="italic">
        "{quote}"
      </p>

      <div className="flex items-center gap-3">

        {avatar && (
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
            {avatar}
          </div>
        )}

        <div>
          <div className="font-semibold">
            {author}
          </div>

          {company && (
            <div className="text-sm text-text-muted">
              {company}
            </div>
          )}
        </div>

      </div>

    </Card>
  );
}