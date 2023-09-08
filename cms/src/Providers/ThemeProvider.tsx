import { ConfigProvider } from "antd";
import React, { ReactNode } from "react";
import { theme } from "src/Theme";

interface IProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: IProps) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default ThemeProvider;
