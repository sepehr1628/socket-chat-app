"use client";
import { useRef } from "react";
import { useAppContext } from "./UIcontext";
import SettingOption from "./SettingOption";

const SettingModal: React.FC = function () {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isModalOpen, closeModal } = useAppContext();

  function handleClick(e: React.MouseEvent) {
    if (e.target !== ref.current) closeModal();
  }

  return (
    <div
      className={`absolute inset-0 backdrop-blur-[3px] ${
        isModalOpen ? "block" : "hidden"
      }`}
      onClick={handleClick}
    >
      <div
        ref={ref}
        className={`w-[500px] h-[500px] bg-zinc-700 absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] ${
          isModalOpen ? "block" : "hidden"
        }`}
      >
        <ul className="[&>li]:p-5 [&>li]:border-b [&>li]:border-solid [&>li]:border-gray-600 [&>li]:font-bold [&>li]:text-white">
          <SettingOption>My ID</SettingOption>
          <SettingOption>Languages</SettingOption>
          <SettingOption>Theme</SettingOption>
          <SettingOption>Sign Out</SettingOption>
        </ul>
      </div>
    </div>
  );
};

export default SettingModal;
