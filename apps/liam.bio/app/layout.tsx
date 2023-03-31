import React from 'react';
import "./../styles/dist.css";
import "./../styles/globals.css"
import { Analytics } from './components/Analytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>LMG</title>
      </head>
      <body className="overflow-y-scroll bg-offwhite">
       {children}
       <Analytics />

      </body>
    </html>
  );
}

