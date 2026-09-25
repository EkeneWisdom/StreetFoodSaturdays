
// src/components/icons/GetStartedIcon.tsx
// src/components/icons/GetStartedIcon.tsx
import React from 'react';
import { 
  Wand2, 
  Sparkles, 
  Send, 
  FileSignature, 
  HardHat, 
  ChevronRight 
} from 'lucide-react';

interface GetStartedIconProps {
  className?: string;
  type?: 'wand' | 'sparkles' | 'send' | 'quote' | 'helmet';
  showSparkleBadge?: boolean;
}

export const GetStartedIcon = ({ 
  className = "w-4 h-4", 
  type = "quote",
  showSparkleBadge = false 
}: GetStartedIconProps) => {
  const renderIcon = () => {
    switch (type) {
      case 'wand':
        return <Wand2 className={className} />;
      case 'sparkles':
        return <Sparkles className={className} />;
      case 'send':
        return <Send className={className} />;
      case 'quote':
        return <FileSignature className={className} />;
      case 'helmet':
        return <HardHat className={className} />;
      default:
        return <Wand2 className={className} />;
    }
  };

  if (!showSparkleBadge) {
    return renderIcon();
  }

  // Optional combined wrapper with a small floating sparkle overlay
  return (
    <div className="relative inline-flex items-center justify-center">
      {renderIcon()}
      <Sparkles className="absolute -top-1 -right-1.5 w-2.5 h-2.5 text-yellow-400 animate-pulse" />
    </div>
  );
};

/* import React from 'react';

export const GetStartedIcon = ({ className = "w-4 h-4" }: { className?: string }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      width="24" 
      height="24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 2.137.67 4.116 1.821 5.74L2 22l4.48-1.22A9.959 9.959 0 0 0 12 22z" />
        <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="7" y1="10" x2="11" y2="10" />
          <line x1="7" y1="14" x2="17" y2="14" />
        </g>
    </svg>
  );
};*/