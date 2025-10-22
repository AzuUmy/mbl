import { Menu, AccountCircleRounded } from "@mui/icons-material";
import MLBLogo from "../../assets/icon/mlb-logo";

type NavigationTopProps = {
  setOpenSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavigationTop({ setOpenSideMenu }: NavigationTopProps) {
  function toggleSideMenu() {
    setOpenSideMenu((prev) => !prev);
  }

  return (
    <div
      onClick={toggleSideMenu}
      className="flex justify-between align items-center"
    >
      <Menu className="text-black !h-[30px] !w-[30px] " />
      <MLBLogo />
      <AccountCircleRounded className="text-black !h-[30px] !w-[30px] " />
    </div>
  );
}
