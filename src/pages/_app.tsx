import { useState } from "react";
//
import { AppProps, AppContext, AppInitialProps } from "next/app";
//
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
//
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "@/utility/createEmotionCache";
import "@/styles/globals.css";
import muiTheme from "@/styles/theme/muiTheme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

function App(props: MyAppProps) {
    //
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    // react-query
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <CacheProvider value={emotionCache}>
                    <ThemeProvider theme={muiTheme}>
                        <CssBaseline />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </CacheProvider>
            </Hydrate>
        </QueryClientProvider>
    );
}

App.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
    let pageProps = {};

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps?.(ctx);
    }

    return { pageProps };
};

export default App;
