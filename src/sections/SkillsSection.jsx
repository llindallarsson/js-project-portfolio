import { SkillSeparater, SkillComponent } from "../components/SkillComponent";

const SkillsSection = () => {
  return (
    <>
      <h2>Skills</h2>
      <SkillComponent
        titel="Tjoo"
        skill={["hej", "då", "kul ju"]}
      ></SkillComponent>
      <SkillSeparater />
      <SkillComponent
        titel="Tjoo"
        skill={["hej", "då", "kul ju"]}
      ></SkillComponent>
      <SkillSeparater />
      <SkillComponent
        titel="Tjoo"
        skill={["hej", "då", "kul ju"]}
      ></SkillComponent>
    </>
  );
};

export default SkillsSection;
