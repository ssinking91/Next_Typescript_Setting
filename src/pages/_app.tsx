import { useRef } from "react";
//
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
//
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
//
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import createEmotionCache from "@/utility/createEmotionCache";
import lightThemeOptions from "@/styles/theme/lightThemeOptions";
import "@/styles/globals.css";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  // @emotion
  const emotionCache: EmotionCache = createEmotionCache();
  // @mui
  const lightTheme = createTheme(lightThemeOptions);
  // @react-query
  const clientRef = useRef<QueryClient>();

  if (!clientRef.current) {
    clientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    });
  }

  return (
    <>
      <QueryClientProvider client={clientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={lightTheme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </CacheProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

App.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps?.(ctx);
  }

  return { pageProps };
};

export default App;

// const [queryClient] = useState(() => new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// }))
