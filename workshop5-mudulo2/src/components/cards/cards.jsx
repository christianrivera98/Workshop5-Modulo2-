import React, { useEffect, useState } from "react";
import { GetCards } from "../../services/cards";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat, BsSend, BsBookmarkFill } from "react-icons/bs";
import "./cards.scss";
import { IconContext } from "react-icons";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fecthCards = async () => {
      const data = await GetCards();
      console.log(data);
      setCards(data);
    };
    fecthCards();
  }, []);

  return (
    <div>
      {cards.map((card) => (
        <section className="card flex flex-col relative w-[396px] h-[558px] top-[40px] left-4 bg-white rounded-md my-4">
          <figure className="bg-gradient-to-tr from-[#ff7674] from-25% via-[#ff74fc] via-50% to-[#ffbc74] to-100% rounded-[45px] border-2 w-6 h-6 relative left-1 top-1 mx-[0px] ">
            <img
              className="bg-transparent rounded-[45px] w-[22px] h-[22px] self-center left-[0px] top-[-1px] absolute"
              src={card.avatar}
            />
          </figure>
          <div className="relative left-[20px] top-[-15px] text-center">
            <strong className="absolute w-[62px] text-[12px] left-[10px] ">
              {card.name}
            </strong>
          </div>
          <section className="relative w-[380px] h-[380px] bg-amber-100 top-[10px] left-2 rounded-[10px]">
            <img
              src={card.publication}
              className="object-fill  flex w-[380px] h-[380px] rounded-[10px]"
            />
          </section>
          <section className="tags">
            <div>
              <AiOutlineHeart className="absolute w-[27.12px] h-6 top-[418px] left-[16px]" />
              <p className="absolute w-[27.12px] h-6  left-[18px] top-[440px] text-sm text-justify">
                {card.liked}
              </p>
            </div>
            <div>
              <BsChat className="absolute w-[28px] h-[22px] top-[418px] left-[68px]" />
              <p className="absolute w-[18px] h-3 left-[73px] top-[440px] text-sm text-justify">
                {card.messages}
              </p>
            </div>
            <div>
              <BsSend className="absolute w-[22.36px] h-[22px] top-[418px] left-[120px]" />
              <p className="absolute w-[17px] h-3 left-[123px] top-[440px] text-sm text-justify">
                {card.send}
              </p>
            </div>
            <div>
              <IconContext.Provider
                value={{ color: "#ff7674", className: "global-class-name" }}
              >
                <BsBookmarkFill className="absolute w-[17px] h-6 top-[418px] left-[362px]" />
              </IconContext.Provider>

              <p className="absolute w-[17px] h-3 left-[362px] top-[440px] text-sm text-justify">
                {card.saved}
              </p>
            </div>
          </section>
          <div className="relative w-[365px] h-[54px] top-[55px] left-[8px] text-base flex">
            <p>
              <strong>{card.name}</strong>
            </p>
            <span className="text">{card.textPublication}</span>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Cards;
