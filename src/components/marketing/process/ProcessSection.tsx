import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import ProcessTimeline, {
  type ProcessItem,
} from "./ProcessTimeline";

interface ProcessSectionProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  items: ProcessItem[];
  orientation?: "horizontal" | "vertical";
}

export default function ProcessSection({
  badge,
  title,
  description,
  items,
  orientation = "horizontal",
}: ProcessSectionProps) {
  return (
    <Section>

      <Container>

        <SectionTitle
          badge={badge}
          title={title}
          description={description}
          centered
        />

        <ProcessTimeline
          items={items}
          orientation={orientation}
        />

      </Container>

    </Section>
  );
}