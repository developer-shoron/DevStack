import React from 'react';
import logo from '../assets/logo-text.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          
        
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="Dev Stack Logo" className="h-8 object-contain" />
            </div>
            
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

           
            <div className="flex items-center gap-6 pt-2 text-sm font-medium text-gray-700">
              <span className="cursor-pointer hover:text-pink-600 transition-colors">  GitHub</span>
              <span className="cursor-pointer hover:text-pink-600 transition-colors">Twitter</span>
              <span className="cursor-pointer hover:text-pink-600 transition-colors">LinkedIn</span>
            </div>
          </div>

         
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase">Product</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li className="cursor-pointer hover:text-pink-600 transition-colors">Home</li>
              <li className="cursor-pointer hover:text-pink-600 transition-colors">Technologies</li>
              <li className="cursor-pointer hover:text-pink-600 transition-colors">Projects</li>
            </ul>
          </div>

        
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li className="cursor-pointer hover:text-pink-600 transition-colors">About</li>
              <li className="cursor-pointer hover:text-pink-600 transition-colors">Contact</li>
              <li className="cursor-pointer hover:text-pink-600 transition-colors">Careers</li>
            </ul>
          </div>

     
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase">Legal</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li className="cursor-pointer hover:text-pink-600 transition-colors">Privacy Policy</li>
              <li className="cursor-pointer hover:text-pink-600 transition-colors">Terms of Service</li>
            </ul>
          </div>

        </div>

       
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-pink-600 transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-pink-600 transition-colors">Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}