"use client";
import Image from "next/image";
import { useAppContext } from "./UIcontext";

const SettinButton: React.FC = function () {
  const { openModal } = useAppContext();
  return (
    <button
      className="flex items-center justify-center rounded-full"
      onClick={openModal}
    >
      <Image src="/setting-icon.png" width="45" height="45" alt="setting" />
    </button>
  );
};
export default SettinButton;
