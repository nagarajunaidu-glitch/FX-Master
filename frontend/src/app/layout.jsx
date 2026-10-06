import './globals.css';

export const metadata = {
  title: 'FX MASTER | Seamless Cross-Border Payments Made Easy',
  description: 'Move your money effortlessly across 40+ currencies with real-time rates and institutional-grade security, wherever you are.',
  keywords: 'FX Master, seamless cross-border payments, multi-currency accounts, virtual cards, global send, instant FX'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
