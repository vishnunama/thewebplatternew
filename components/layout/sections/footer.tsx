import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#161412] border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img className="h-auto w-24" src="/assets/veltrix-dark.png" alt="" />
              {/* <ChevronsDownIcon className=" text-blue-600" /> */}
              {/* <span className="text-xl font-bold text-gray-900 dark:text-white">
                Veltrix
              </span> */}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Building amazing digital experiences with modern technology.
            </p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contactus" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          {/* Platforms Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Platforms
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  iOS
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  Android
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  Web
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/privacypolicy" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/return-policy" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/refund-policy" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Social
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="https://twitter.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link 
                  href="https://instagram.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link 
                  href="https://discord.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 Veltrix. All rights reserved.
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Designed and developed by{" "}
            <Link 
              href="#" 
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Leo Miranda
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};