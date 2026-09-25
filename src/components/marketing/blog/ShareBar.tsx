import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  Copy,
  Share2,
  Mail,
} from "lucide-react";

import { toast } from "sonner";

interface ShareBarProps {

  title: string;

  url?: string;

}

export default function ShareBar({

  title,

  url = window.location.href,

}: ShareBarProps) {

  async function copyLink() {

    await navigator.clipboard.writeText(url);

    toast.success("Link copied");
  }

  async function nativeShare() {

    if (!navigator.share) return;

    try {

      await navigator.share({

        title,

        url,

      });

    } catch {}

  }

  function open(link: string) {

    window.open(
      link,
      "_blank",
      "noopener,noreferrer",
    );

  }

  const encodedUrl =
    encodeURIComponent(url);

  const encodedTitle =
    encodeURIComponent(title);

  return (

    <>
      {/* Desktop */}

      <aside
        className="
          sticky
          top-28
          hidden
          lg:flex
          flex-col
          gap-3
        "
      >

        <ShareButton
          icon={<Copy size={18} />}
          label="Copy"
          onClick={copyLink}
        />

        <ShareButton
          icon={<FaXTwitter size={18} />}
          label="X"
          onClick={() =>
            open(
              `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            )
          }
        />

        <ShareButton
          icon={<FaLinkedinIn size={18} />}
          label="LinkedIn"
          onClick={() =>
            open(
              `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            )
          }
        />

        <ShareButton
          icon={<FaFacebookF size={18} />}
          label="Facebook"
          onClick={() =>
            open(
              `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            )
          }
        />

        <ShareButton
          icon={<FaWhatsapp size={18} />}
          label="WhatsApp"
          onClick={() =>
            open(
              `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
            )
          }
        />

        <ShareButton
          icon={<Mail size={18} />}
          label="Email"
          onClick={() =>
            window.open(
              `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
            )
          }
        />

        {"share" in navigator && (

          <ShareButton
            icon={<Share2 size={18} />}
            label="Share"
            onClick={nativeShare}
          />

        )}

      </aside>

      {/* Mobile */}

      <div
        className="
          fixed
          inset-x-4
          bottom-4
          z-50
          flex
          justify-around
          rounded-full
          border
          border-border
          bg-background/90
          p-2
          shadow-xl
          backdrop-blur
          lg:hidden
        "
      >

        <ShareButton
          compact
          icon={<Copy size={18} />}
          label="Copy"
          onClick={copyLink}
        />

        <ShareButton
          compact
          icon={<FaXTwitter size={18} />}
          label="X"
          onClick={() =>
            open(
              `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            )
          }
        />

        <ShareButton
          compact
          icon={<FaLinkedinIn size={18} />}
          label="LinkedIn"
          onClick={() =>
            open(
              `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            )
          }
        />

        <ShareButton
          compact
          icon={<FaFacebookF size={18} />}
          label="Facebook"
          onClick={() =>
            open(
              `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            )
          }
        />

        <ShareButton
          compact
          icon={<FaWhatsapp size={18} />}
          label="WhatsApp"
          onClick={() =>
            open(
              `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
            )
          }
        />

        <ShareButton
          compact
          icon={<Mail size={18} />}
          label="Email"
          onClick={() =>
            window.open(
              `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
            )
          }
        />

      </div>
    </>

  );

}

interface ShareButtonProps {

  icon: React.ReactNode;

  label: string;

  compact?: boolean;

  onClick(): void;

}

function ShareButton({

  icon,

  label,

  compact,

  onClick,

}: ShareButtonProps) {

  return (

    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="
        flex
        items-center
        justify-center
        rounded-full
        border
        border-border
        bg-background
        transition-all
        hover:border-primary
        hover:bg-primary/5
        hover:text-primary
      "
    >

      <div
        className={
          compact
            ? "p-3"
            : "flex h-11 w-11 items-center justify-center"
        }
      >

        {icon}

      </div>

    </button>

  );

}