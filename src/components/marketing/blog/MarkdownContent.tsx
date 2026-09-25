//import ReactMarkdown from "react-markdown";

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({
  content,
}: MarkdownContentProps) {
  return (
    <article
      className="
        prose
        prose-slate
        max-w-none
        dark:prose-invert

        prose-headings:font-semibold
        prose-headings:tracking-tight

        prose-p:leading-8
        prose-p:text-text-muted

        prose-a:text-primary
        prose-a:no-underline
        hover:prose-a:underline

        prose-strong:text-text

        prose-blockquote:border-l-primary
        prose-blockquote:text-text-muted

        prose-img:rounded-2xl
      "
    >
      {/*<ReactMarkdown>
        {content}
      </ReactMarkdown>*/}
    </article>
  );
}