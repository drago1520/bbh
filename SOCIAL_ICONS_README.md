# Social Media Icons Implementation

This implementation adds exact brand social media icons to your Payload CMS contacts configuration using the `react-icons` library.

## What was added:

### 1. Social Icons Component (`src/components/Icons.tsx`)
- `SocialIcon` component that maps social media platforms to their exact brand icons
- Uses `react-icons/fa` and `react-icons/fa6` for authentic social media icons
- Supports all the social media platforms in your configuration
- Customizable size and className props

### 2. Frontend Helper (`src/payload/globals/contacts/front-end.ts`)
- `socialOptions` array with all social media platforms
- Clean configuration matching your original setup

### 3. Social Links Components (`src/components/SocialLinks.tsx`)
- `SocialLinks` - Shows exact brand icons with hover effects
- `SocialIconsOnly` - Shows only brand icons in circular buttons
- `SocialLinksWithLabels` - Shows brand icons with platform labels

## Exact Brand Icons Used:

- **Facebook** - `FaFacebookF` (official Facebook icon)
- **Instagram** - `FaInstagram` (official Instagram icon)
- **Twitter** - `FaXTwitter` (official X/Twitter icon)
- **LinkedIn** - `FaLinkedinIn` (official LinkedIn icon)
- **YouTube** - `FaYoutube` (official YouTube icon)
- **TikTok** - `FaTiktok` (official TikTok icon)
- **WhatsApp** - `FaWhatsapp` (official WhatsApp icon)
- **Telegram** - `FaTelegramPlane` (official Telegram icon)
- **Viber** - `FaViber` (official Viber icon)
- **Discord** - `FaDiscord` (official Discord icon)
- **Snapchat** - `FaSnapchatGhost` (official Snapchat icon)
- **Pinterest** - `FaPinterestP` (official Pinterest icon)
- **Reddit** - `FaRedditAlien` (official Reddit icon)
- **Twitch** - `FaTwitch` (official Twitch icon)
- **Medium** - `FaMediumM` (official Medium icon)
- **Slack** - `FaSlack` (official Slack icon)
- **Skype** - `FaSkype` (official Skype icon)
- **Threads** - `FaThreads` (official Threads icon)
- **Yelp** - `FaYelp` (official Yelp icon)

## Admin Interface:

Your marketers can now:
1. Select from 40+ pre-defined social media platforms
2. Add the corresponding URL for each platform
3. Each selection will have its appropriate icon displayed in the frontend

The icons will automatically match the selected platform and provide a consistent visual experience across your website.
