import Hero from "../components/sections/Hero";
import { heroData } from "../data/heroData";

export default function Home() {
  return (
    <>
      <Hero {...heroData} />
    </>
  );
}
