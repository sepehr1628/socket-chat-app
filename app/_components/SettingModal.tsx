// app/_components/SettingModal.tsx
"use client";
import { useRef } from "react";
import { useAppContext } from "./UIcontext";
import { BiDoorOpen } from "react-icons/bi";

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
        className={`w-[500px] h-[500px]  absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] ${
          isModalOpen ? "block" : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default SettingModal;
