import { useState } from "react";
import { MessageCircle, Instagram, Facebook, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    {
      name: "WhatsApp Chat",
      href: "https://wa.me/254725782912",
      icon: MessageCircle,
      bgColor: "bg-green-500 hover:bg-green-600",
      ariaLabel: "IPMTTI WhatsApp Chat"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ipmtti/?hl=en",
      icon: Instagram,
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      ariaLabel: "IPMTTI Instagram"
    },
    {
      name: "Facebook",
      href: "https://web.facebook.com/p/International-Plant-Machinery-Training-Institute-100064092097753/?_rdc=1&_rdr",
      icon: Facebook,
      bgColor: "bg-blue-600 hover:bg-blue-700",
      ariaLabel: "IPMTTI Facebook"
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@ipmtti?_t=ZM-8zpKqX2kRP2&_r=1",
      icon: Music,
      bgColor: "bg-black hover:bg-gray-800",
      ariaLabel: "IPMTTI TikTok"
    }
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-3">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <Button
              key={link.name}
              asChild
              size="icon"
              className={`${link.bgColor} text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl rounded-full w-12 h-12`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: isExpanded ? 'translateX(0)' : 'translateX(40px)'
              }}
              onMouseEnter={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
            >
              <a 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                title={link.name}
                className="flex items-center justify-center w-full h-full"
              >
                {link.name === "TikTok" ? (
                  <i className="bi bi-tiktok text-[20px]"></i>
                ) : (
                  <Icon className="w-5 h-5" />
                )}
              </a>
            </Button>
          );
        })}
      </div>

    </div>
  );
};

export default SocialSidebar;