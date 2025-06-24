import React from 'react';
import { NavigationFooter } from '@/tina/__generated__/types';

interface FooterProps {
  data?: NavigationFooter | null;
}

export function Footer({ data }: FooterProps) {
  if (!data) return null;

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            {data.logo?.src && (
              <img 
                src={data.logo.src} 
                alt={data.logo.alt || 'Logo'} 
                className="h-12 w-auto mb-4"
              />
            )}
            <p className="text-gray-400 text-sm">{data.copyright}</p>
          </div>

          {/* Main Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {data.links?.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link?.href || '#'} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sub Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {data.subLinks?.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link?.href || '#'} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
