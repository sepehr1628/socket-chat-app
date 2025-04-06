"use client";

type SettingOptionProp = {
  children: React.ReactNode;
};

const SettingOption: React.FC<SettingOptionProp> = function ({ children }) {
  return (
    <li
      onClick={() =>
        confirm("Are you sure you want to sign out from this account?")
      }
    >
      {children}
    </li>
  );
};

export default SettingOption;
