import ProgressBar from "../components/ProgressBar";

const HeroSectionMain = () => {
  return (
    <main>
      <ProgressBar />
      <p> {"<"} Hello, my name is</p>
      <h1>
        Linda Larsson. <br />
        <br />I build nice things.
      </h1>
      <p>
        Get in touch 👉{" "}
        <a href="larsson.ll@hotmail.com">larsson.ll@hotmail.com</a> {"/>"}
      </p>
    </main>
  );
};

export default HeroSectionMain;
