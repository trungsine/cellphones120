import "../styles/topbar.css";
function Topbar() {
  return (
    <div className="topbar-container flex justify-center">
      <div className="topbar-dot w-2.5 h-2.5 rounded-full my-auto mx-2.5 pr-2.5"></div>
      <div className="topbar-header no-underline cursor-pointer text-base font-semibold h-8 flex items-center">
        <a href="#">Trao Tết Ant Deal Ngập Tràn - Chọn quà ngay!</a>
      </div>
    </div>
  );
}

export default Topbar;
