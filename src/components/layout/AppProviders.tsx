import type { ReactNode } from "react";

import { ThemeProvider } from "@/context/ThemeContext";
import { GetStartedProvider } from "@/widgets/get-started";
import ToastProvider from "@/components/ui/ToastProvider";

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({
  children,
}: AppProvidersProps) {
  return (
    <ThemeProvider>
      <GetStartedProvider>
        {children}
        <ToastProvider />
      </GetStartedProvider>
    </ThemeProvider>
  );
}