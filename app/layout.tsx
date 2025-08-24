import './globals.css';

export const metadata = {
  title: 'Harbory — Analytics, apps & automation',
  description: 'We build data foundations, decision tools, and AI workflows to move the needle.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-slate-900">{children}</body>
    </html>
  );
}
