import React from "react";
import footer from "../../assets/rectangle_footer.png";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { IconContext } from "react-icons";
import plusEllipse from "../../assets/Ellipse.png";
import plus from "../../assets/plusIcon.png";

const Footer = () => {
  return (
    <div className="w-[428px] h-[57px] top-[869px] absolute flex">
      <img src={footer} className="rounded-br-[35px] rounded-bl-[35px]" />
      <section className="absolute flex">
        <IconContext.Provider value={{ color: "white" }}>
          <AiFillHome className="w-6 h-6 absolute top-[17px] left-8" />
          <AiOutlineSearch className="w-6 h-6 absolute top-[17px] left-[98px]" />
          <FaBell className="w-6 h-6 absolute top-[17px] left-[301px]" />
        </IconContext.Provider>
      </section>
      <img
        src={plusEllipse}
        className="relative w-16 h-16 top-[-22px] left-[-246px]"
      />
      <img src={plus} className="relative w-6 h-6 top-[-3px] left-[-290px]" />
      {
        <figure className="bg-gradient-to-tr from-[#ff7674] from-25% via-[#ff74fc] via-50% to-[#ffbc74] to-100% rounded-[45px] border-2 w-6 h-6 relative left-1 top-1 mx-[0px] ">
          <img
            className="bg-transparent rounded-[45px] w-[22px] h-[22px] self-center left-[0px] top-[-1px] absolute"
            // src={card.avatar}
          />
        </figure>
      }
    </div>
  );
};

export default Footer;
