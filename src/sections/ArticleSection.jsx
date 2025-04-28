import { SectionHeader } from "../components/Typography";
import { Sidebar } from "../components/Sidebar";
import { Accordion } from "../components/Accordion";

export const ArticleSection = () => {
  return (
    <>
      <SectionHeader>My thoughts</SectionHeader>
      <Sidebar>My thoughts</Sidebar>
      <Accordion
        items={[
          {
            title: "My first article....",
            content: "Blaa blaaa blaaa",
          },
        ]}
      />
    </>
  );
};
