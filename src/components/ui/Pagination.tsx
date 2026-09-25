import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

import { cn } from "@/lib/cn";

import Button from "./Button";

export interface PaginationProps {

  page: number;

  totalPages: number;

  onPageChange(page: number): void;

  siblingCount?: number;

  className?: string;

}

export default function Pagination({

  page,

  totalPages,

  onPageChange,

  siblingCount = 1,

  className,

}: PaginationProps) {

  if (totalPages <= 1) return null;

  function buildPages() {

    const pages: (number | "...")[] = [];

    const start = Math.max(
      2,
      page - siblingCount,
    );

    const end = Math.min(
      totalPages - 1,
      page + siblingCount,
    );

    pages.push(1);

    if (start > 2) {

      pages.push("...");

    }

    for (
      let i = start;
      i <= end;
      i++
    ) {

      pages.push(i);

    }

    if (end < totalPages - 1) {

      pages.push("...");

    }

    if (totalPages > 1) {

      pages.push(totalPages);

    }

    return pages;

  }

  return (

    <nav

      aria-label="Pagination"

      className={cn(

        "flex flex-wrap items-center justify-center gap-2",

        className,

      )}

    >

      <Button

        variant="outline"

        size="sm"

        leftIcon={<ChevronLeft size={16} />}

        disabled={page === 1}

        onClick={() =>
          onPageChange(page - 1)
        }

      >

        Previous

      </Button>

      {buildPages().map(
        (item, index) => {

          if (item === "...") {

            return (

              <div
                key={index}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                "
              >

                <MoreHorizontal
                  size={18}
                />

              </div>

            );

          }

          return (

            <Button

              key={item}

              size="sm"

              variant={
                item === page
                  ? "primary"
                  : "outline"
              }

              onClick={() =>
                onPageChange(item)
              }

            >

              {item}

            </Button>

          );

        },

      )}

      <Button

        variant="outline"

        size="sm"

        rightIcon={<ChevronRight size={16} />}

        disabled={
          page === totalPages
        }

        onClick={() =>
          onPageChange(page + 1)
        }

      >

        Next

      </Button>

    </nav>

  );

}










{/**
const [page, setPage] = useState(1);

<Pagination

  page={page}

  totalPages={12}

  onPageChange={setPage}

/>



*/}