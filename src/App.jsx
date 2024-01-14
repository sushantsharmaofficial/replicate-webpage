import { useEffect, useState } from "react";
import { Background } from "./Components/Background/Background.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { HeroSection } from "./Components/HeroSection/HeroSection.jsx";

function App() {
  const heroData = [
    {
      title1: "초중등 영어는",
      title2: "THE CLIP",
      body1: "초중등한 가지 기준으로 보면 여러 곳이 보이지만",
      body2: "열 가지 기준으로 보면 THE CLIP만 보입니다",
      body3: " 초중등 영어는 THE CLIP이 정답입니다",
    },
    {
      title1: "전국 1타 ",
      title2: "학원들의 선택",
      body1: " 학원 강사들이 추천하는 영어 학습 콘텐츠",
      body2: "THE CLIP이 학생들의",
      body3: "영어 실력을 바꿔 드립니다",
    },
  ];

  const [heroCount, setHeroCount] = useState(0);

  const reload = useEffect(() => {
    const timer = setTimeout(() => {
      {
        heroCount === 0 ? setHeroCount(1) : setHeroCount(0);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [heroCount]);

  return (
    <>
      <Background onLoad={reload} heroCount={heroCount} />
      <Navbar />
      <HeroSection
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
    </>
  );
}

export default App;
