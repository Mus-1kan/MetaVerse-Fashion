import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#0e0e0e] text-white py-10 px-6 md:px-12 border-t border-[#ffffff1a]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row md:justify-between">

        {/* Logo + Brand Name Row */}
        <div className="flex items-center justify-center md:justify-start gap-4">
          <img
            src="img/logo.png"
            alt="MetaSilque Logo"
            className="w-24 md:w-28 h-auto shimmer-effect"
          />
          <div>
            <h2 className="text-2xl font-bold tracking-wide">MetaSilque</h2>
            <p className="text-sm text-gray-400">
              Designed for Dimensions Beyond Reality.
            </p>
          </div>
        </div>

        {/* Social Icons in Center */}
        <div className="flex justify-center items-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:drop-shadow-glow transition duration-300 text-xl"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Legal Info */}
        <div className="text-center md:text-right text-sm text-gray-400">
          <a
            href="#privacy-policy"
            className="block hover:underline hover:text-white transition"
          >
            Privacy Policy
          </a>
          <p className="mt-2">
            © 2025 <span className="font-medium">MetaSilque</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
