import React from "react";
import logoInicio from "../../assets/inicioLogo.png";
import { AiOutlineHeart, AiFillWechat, AiFillHeart } from "react-icons/ai";
import "./header.scss";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <div className="flex space-x-3 h-[40px] top-[47px] relative">
      <img
        src={logoInicio}
        alt="Findy Logo"
        className="w-[190px] h-[36px] absolute top-[3px]"
      />
      <section className="flex">
        <IconContext.Provider
          value={{ color: "red", className: "global-class-name " }}
        >
          <div>
            <AiFillHeart className="absolute like w-[27.12px] h-[24px] top-[9px] left-[352px] rounded-[2px] cursor-pointer " />
          </div>
        </IconContext.Provider>
        ;
        <div className="inline-block relative">
          <AiOutlineHeart
            alt="Me gusta"
            className="absolute like w-[27.12px] h-[24px] top-[9px] left-[337px] rounded-[2px] cursor-pointer"
          />
          {/* <AiFillHeart
            alt="Me gusta"
            className="absolute liked w-[27.12px] h-[24px] top-[6px] left-[335px] rounded-[2px] opacity-0 z-{-1} cursor-pointer"
          /> */}
        </div>
        <AiFillWechat
          alt="Chats icono"
          className="absolute w-[24px] h-[24px] top-[9px] left-[388px]"
        />
      </section>
    </div>
  );
};

export default Header;
