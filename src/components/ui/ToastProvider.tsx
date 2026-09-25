import { Toaster } from "sonner";

export default function ToastProvider() {
  return (
    <Toaster
      richColors
      closeButton
      expand={false}
      position="top-right"
      visibleToasts={5}
      duration={4000}
      toastOptions={{
        classNames: {
          toast: "rounded-xl",
        },
      }}
    />
  );
}