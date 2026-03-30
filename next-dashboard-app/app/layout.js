export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1>Main Layout</h1>
        {children}
      </body>
    </html>
  );
}