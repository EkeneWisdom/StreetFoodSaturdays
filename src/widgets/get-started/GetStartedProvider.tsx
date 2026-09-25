import GetStartedModal from "./GetStartedModal";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type {
  GetStartedService,
} from "./getStartedConfig";

interface GetStartedContextValue {
  openGetStarted: (
    service?: GetStartedService,
  ) => void;

  closeGetStarted: () => void;
}

const GetStartedContext =
  createContext<GetStartedContextValue | null>(
    null,
  );

export function GetStartedProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] =
    useState(false);

  const [selectedService, setSelectedService] =
    useState<GetStartedService | undefined>();

  function openGetStarted(
    service?: GetStartedService,
  ) {
    setSelectedService(service);

    if (
      window.location.hash ===
      "#get-started"
    ) {
      setOpen(true);
      return;
    }

    window.history.pushState(
      null,
      "",
      `${window.location.pathname}${window.location.search}#get-started`,
    );

    setOpen(true);
  }

  function closeGetStarted() {
    if (
      window.location.hash ===
      "#get-started"
    ) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }

    setOpen(false);
    setSelectedService(undefined);
  }

  useEffect(() => {
    function syncFromUrl() {
      setOpen(
        window.location.hash ===
          "#get-started",
      );
    }

    syncFromUrl();

    window.addEventListener(
      "hashchange",
      syncFromUrl,
    );

    window.addEventListener(
      "popstate",
      syncFromUrl,
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        syncFromUrl,
      );

      window.removeEventListener(
        "popstate",
        syncFromUrl,
      );
    };
  }, []);

  return (
    <GetStartedContext.Provider
      value={{
        openGetStarted,
        closeGetStarted,
      }}
    >
      {children}

      <GetStartedModal
        open={open}
        onClose={closeGetStarted}
        initialService={selectedService}
      />
    </GetStartedContext.Provider>
  );
}

export function useGetStarted() {
  const context =
    useContext(GetStartedContext);

  if (!context) {
    throw new Error(
      "useGetStarted must be used inside GetStartedProvider",
    );
  }

  return context;
}