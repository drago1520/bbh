import { SocialIcon } from "@/components/Icons";
import * as React from "react";

// Helper function to render social media icons in the admin interface
export const renderSocialIcon = (platform: string) => {
  return React.createElement(SocialIcon, {
    platform,
    className: "inline mr-2",
  });
};

// Social media platform options with icons
export const socialOptions = [
  {
    label: "Facebook",
    value: "facebook",
  },
  {
    label: "Instagram",
    value: "instagram",
  },
  {
    label: "Twitter",
    value: "twitter",
  },
  {
    label: "LinkedIn",
    value: "linkedin",
  },
  {
    label: "YouTube",
    value: "youtube",
  },
  {
    label: "TikTok",
    value: "tiktok",
  },
  {
    label: "WhatsApp",
    value: "whatsapp",
  },
  {
    label: "Telegram",
    value: "telegram",
  },
  {
    label: "Viber",
    value: "viber",
  },
  {
    label: "Discord",
    value: "discord",
  },
  {
    label: "Snapchat",
    value: "snapchat",
  },
  {
    label: "Pinterest",
    value: "pinterest",
  },
  {
    label: "Reddit",
    value: "reddit",
  },
  {
    label: "Twitch",
    value: "twitch",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "Slack",
    value: "slack",
  },
  {
    label: "Skype",
    value: "skype",
  },
  {
    label: "Threads",
    value: "threads",
  },
  {
    label: "Yelp",
    value: "yelp",
  },
];
