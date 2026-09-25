import { ThemeProvider } from "@/context/ThemeContext";
import { GetStartedProvider } from "@/widgets/get-started";

import Navbar from "./Navbar";

interface NavbarShellProps {
  pathname?: string;
}

export default function NavbarShell({ pathname = "" }: NavbarShellProps) {
  return (
    <ThemeProvider>
      <GetStartedProvider>
        <Navbar pathname={pathname} />
      </GetStartedProvider>
    </ThemeProvider>
  );
}