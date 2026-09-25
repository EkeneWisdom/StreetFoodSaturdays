import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {

    const {toggleTheme,resolvedTheme}=useTheme();

    return(

        <button
            onClick={toggleTheme}
            className="btn-outline rounded-full p-2"
        >

            {
                resolvedTheme==="dark"
                ? <Sun size={18}/>
                : <Moon size={18}/>
            }

        </button>

    );

}