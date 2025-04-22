import ProgressBar from "../components/ProgressBar";
import Title from "../components/Title";
import Link from "../components/Links";

const HeroSectionMain = () => {
  return (
    <main>
      <ProgressBar />
      <p> {"<"} Hello, my name is</p>
      <Title>
        Linda Larsson.
        <br />
        <div>I build nice things.</div>
      </Title>

      <p>
        Get in touch 👉 <Link>larsson.ll@hotmail.com</Link>
        {" />"}
      </p>
    </main>
  );
};

export default HeroSectionMain;
