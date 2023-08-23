import React, { useEffect, useState } from "react";
import avatar from "../../assets/rudolf.jpg";
import plus from "../../assets/plusIcon.png";
import "./stories.scss";
import { GetStories } from "../../services/stories";

const Stories = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    const fecthStories = async () => {
      const data = await GetStories();
      console.log(data);
      setStories(data);
    };
    fecthStories();
  }, []);

  return (
    <div className="top-[47px] relative flex h-[90px]">
      <section className="tuPerfil absolute flex flex-col">
        <figure className="bg-gradient-to-tr from-[#ff7674] from-25% via-[#ff74fc] via-50% to-[#ffbc74] to-100% rounded-[45px] border-2 w-16 h-16 left-4 relative">
          <img
            className="bg-white rounded-[45px] w-14 h-14 self-center left-[2px] top-[2px] absolute"
            src={avatar}
          ></img>
          <img
            src={plus}
            alt="agregar historias"
            className="absolute w-[18px] h-[18px] top-[20px] left-5 cursor-pointer hover:scale-105"
          />
        </figure>
        <p className="absolute w-14 top-[72px] text-[12px] leading-[14.4px] left-[21px]">
          Tu historia
        </p>
      </section>
      {stories.map((story) => (
        <section className="story">
          <figure className="bg-gradient-to-tr from-[#ff7674] from-25% via-[#ff74fc] via-50% to-[#ffbc74] to-100% rounded-[45px] border-2 w-16 h-16 left-[104px] relative p-3 mx-[2px]">
            <img
              className="bg-white rounded-[45px] w-14 h-14 self-center left-[2px] top-[2px] absolute"
              src={story.avatar}
            />
          </figure>
          <div className="relative left-[110px] top-[7px] text-center">
            <p className="absolute w-[62px] text-[12px] leading-[14.4px] ">
              {story.name}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Stories;
