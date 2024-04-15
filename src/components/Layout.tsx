// src/components/Layout.tsx
import React from "react";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>3-Tier Architecture Diagram</title>
        {/* Add any meta tags or links to external stylesheets here */}
      </Head>
      <main>{children}</main>
      <style jsx global>{`
        /* Add global styles here */
      `}</style>
    </>
  );
};

export default Layout;
