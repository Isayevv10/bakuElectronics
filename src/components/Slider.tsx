import SliderClientSide from "./SliderClientSide";

export default async function BigSlider() {
  const res = await fetch("https://api.b-e.az/task/big-sliders", {
    cache: "no-store",
  });

  const sliders = await res.json();

  return <SliderClientSide sliders={sliders} />;
}
