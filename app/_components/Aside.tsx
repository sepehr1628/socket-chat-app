import SettingButton from "./SettingButton";

const Aside: React.FC = function () {
  return (
    <aside className="group bg-slate-800 relative">
      <div className="absolute bottom-2 -translate-x-full group-hover:translate-x-3 transition-transform duration-500">
        <SettingButton />
      </div>

      <div>Aside Content</div>
    </aside>
  );
};

export default Aside;
