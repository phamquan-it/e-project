
import React from 'react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';

import theme from '../theme/themeConfig';
import { useRouter } from "next/router";
import DashBoardLayout from "@/layout/DashBoard";
import CommonLayout from "@/layout/Common";
import "@/styles/globals.css";
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const Layout = (router.pathname.includes('/dash'))?DashBoardLayout:CommonLayout

  return (
    <ConfigProvider theme={theme}>
      <Layout>
      <Provider store={store}>
      <Component {...pageProps} />
        </Provider>
      
      </Layout>
      
    </ConfigProvider>
  );
}

export default App;
