import React from "react";
import Image from "next/image";
import "../styles/infoCard.scss";

interface InfoCard {
  title: string;
  description: string;
  icon: string;
}

const InfoCards = async () => {
  const res = await fetch("https://api.b-e.az/task/features", {
    cache: "no-store",
  });
  const data: InfoCard[] = await res.json();
  console.log(data);

  return (
    <div className="info-cards">
      {data.map((item, index) => (
        <div key={index} className="info-cards__item">
          <div className="info-cards__icon">
            <Image src={item.icon} alt={item.title} width={29} height={29} />
          </div>
          <div className="info-cards__content">
            <p className="info-cards__title">{item.title}</p>
            <span className="info-cards__description">{item.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
