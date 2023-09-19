import { useTheme } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import Header from "src/components/layout/mainLayout/header/Header";
import NavigationList from "src/components/layout/mainLayout/navigationList/NavigationList";
import type { FC, ReactNode } from "react";
import Main from "src/components/layout/mainLayout/main/Main";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <NavigationList />
      <Header />
      <Main theme={theme}>{children}</Main>
    </Box>
  );
};

export default MainLayout;
