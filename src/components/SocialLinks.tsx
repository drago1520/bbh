import { SocialIcon } from "@/components/Icons";
import Link from "next/link";
import * as React from "react";
import { Button } from "./ui/button";

// Example usage component for displaying social media links with icons
interface SocialLink {
  platform: string;
  url: string;
}

interface SocialLinksProps {
  socials: SocialLink[];
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  socials,
  className,
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
          aria-label={`Visit our ${social.platform} page`}
        >
          <SocialIcon platform={social.platform} size={20} />
          <span className="sr-only">{social.platform}</span>
        </Link>
      ))}
    </div>
  );
};

// Alternative version that shows just icons without text
export const SocialIconsOnly: React.FC<SocialLinksProps> = ({
  socials,
  className,
}) => {
  return (
    <div className={`flex gap-3 ${className}`}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${social.platform} page`}
        >
          <SocialIcon platform={social.platform} size={20} />
        </Link>
      ))}
    </div>
  );
};

// Version with labels
export const SocialLinksWithLabels: React.FC<SocialLinksProps> = ({
  socials,
  className,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
          aria-label={`Visit our ${social.platform} page`}
        >
          <SocialIcon platform={social.platform} size={20} />
          <span className="capitalize">{social.platform}</span>
        </a>
      ))}
    </div>
  );
};
