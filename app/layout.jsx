export const metadata = {
  title: 'Viviendas Virtuo',
  description: 'Gestión profesional de alquiler'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
