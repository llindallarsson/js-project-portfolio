import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [barHeight, setBarHeight] = useState("4px");

  useEffect(() => {
    const handleResize = () => {
      setBarHeight(window.innerWidth >= 667 ? "8px" : "4px");
    };

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const percentage =
        (scrollPosition / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    };

    handleResize(); // set initial height
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        height: barHeight,
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
