import "./globals.css";
import { StoreProvider } from "../configs/store/StoreProvider";
import ThemeRegistry from "@/configs/mui/MuiThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
