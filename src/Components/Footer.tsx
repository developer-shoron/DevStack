import logo from '../assets/logo-text.png';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white pt-12 pb-8 sm:pt-16 sm:pb-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 container">

        {/* Top Grid Sections */}
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 md:mb-16 md:grid-cols-12">

          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 md:col-span-5">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Dev Stack Logo"
                className="h-8 w-auto object-contain"
              />
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm font-medium text-gray-700">
              <a
                href="https://github.com/developer-shoron/DevStack"
                className="transition-colors hover:text-pink-600"
              >
                GitHub
              </a>

              <span className="cursor-pointer transition-colors hover:text-pink-600">
                Twitter
              </span>

              <span className="cursor-pointer transition-colors hover:text-pink-600">
                LinkedIn
              </span>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-3 md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Product
            </h4>

            <ul className="space-y-2.5 text-sm text-gray-500">
              <li className="cursor-pointer transition-colors hover:text-pink-600">
                Home
              </li>
              <li className="cursor-pointer transition-colors hover:text-pink-600">
                Technologies
              </li>
              <li className="cursor-pointer transition-colors hover:text-pink-600">
                Projects
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3 md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Company
            </h4>

            <ul className="space-y-2.5 text-sm text-gray-500">
              <li className="cursor-pointer transition-colors hover:text-pink-600">
                About
              </li>
              <li className="cursor-pointer transition-colors hover:text-pink-600">
                Contact
              </li>
              <li className="cursor-pointer transition-colors hover:text-pink-600">
                Careers
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3 md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Legal
            </h4>

            <ul className="space-y-2.5 text-sm text-gray-500">
              <li className="cursor-pointer transition-colors hover:text-pink-600">
                Privacy Policy
              </li>
              <li className="cursor-pointer transition-colors hover:text-pink-600">
                Terms of Service
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-gray-100 pt-6 text-center text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:pt-8 sm:text-left">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center justify-center gap-5 sm:justify-end sm:gap-6">
            <span className="cursor-pointer transition-colors hover:text-pink-600">
              Privacy
            </span>

            <span className="cursor-pointer transition-colors hover:text-pink-600">
              Terms
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
