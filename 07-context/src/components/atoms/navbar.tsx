import { ThemeContext } from "@/utilities/context/my_context";
import { themes } from "@/utilities/themes/my_themes";
import Link from "next/link";
import { useContext } from "react";

export default function Navbar() {
    const { toggleTheme, theme } = useContext(ThemeContext);
    const newThemeName = theme === themes.dark ? 'light' : 'dark';

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 25,
                }}>
            </div>
            <div>My Website</div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contacts">Contacts</Link>
                <Link href="/profile">Profile</Link>
                <button onClick={toggleTheme}>Set {newThemeName} theme</button>
            </div>
        </div>
    );
}   