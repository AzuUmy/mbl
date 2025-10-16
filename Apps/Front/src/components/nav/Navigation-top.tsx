import { Menu, AccountCircleRounded } from "@mui/icons-material";
import MLBLogo from "../../assets/icon/mlb-logo";

export function NavigationTop({ openSideMenu }: { openSideMenu: boolean }) {
    return (
        <div className="flex justify-between align items-center">
            <Menu className="text-black !h-[30px] !w-[30px] " />
            <MLBLogo />
            <AccountCircleRounded className="text-black !h-[30px] !w-[30px] " />
        </div>
    )
}