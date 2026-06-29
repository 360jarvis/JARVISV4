import './globals.css';

export const metadata = {
  title: 'Jarvixx',
  description: 'Luxury AI command center for cleaning businesses'
};

export default function RootLayout(props: { children: any }) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
