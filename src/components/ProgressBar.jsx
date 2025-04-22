import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const percentage =
        (scrollPosition / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="progress-container"
      style={{
        height: "4px",
        width: "100%",
        backgroundColor: "#f0c7c8",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "1000",
      }}
    >
      <div
        className="progress-fill"
        style={{
          height: "100%",
          backgroundColor: "#BC4749",
          width: `${scrollPercentage}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
