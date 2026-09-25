import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import Accordion,{
  type AccordionItem,
} from "./Accordion";

interface FAQSectionProps {

  badge?: string;

  title: string;

  description?: string;

  items: AccordionItem[];

}

export default function FAQSection({

  badge = "FAQ",

  title,

  description,

  items,

}: FAQSectionProps) {

  return (

    <Section>

      <Container>

        <SectionTitle
          centered
          badge={badge}
          title={title}
          description={description}
        />

        <div className="mx-auto mt-16 max-w-4xl">

          <Accordion
            items={items}
          />

        </div>

      </Container>

    </Section>

  );

}