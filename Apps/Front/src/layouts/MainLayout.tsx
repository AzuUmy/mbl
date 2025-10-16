
import BottomBar from "../components/nav/Navigation";
import { NavigationTop } from "../components/nav/Navigation-top";

type MainLayoutProps = {
    children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen w-screen p-4 bg-white">
            <NavigationTop openSideMenu={false} />
            <main className="flex-1">
                {children}
            </main>
            <BottomBar />
        </div>
    );
}