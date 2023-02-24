import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
//
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../utility/createEmotionCache";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="author" content="project" />
                    <meta name="description" content="my_project" />
                    <meta name="emotion-insertion-point" content="" />
                    {(this.props as any).emotionStyleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    const originalRenderPage = ctx.renderPage;

    // 캐치된 객체를 정의
    const cache = createEmotionCache();
    // 서버사이드 랜더링 시 할당된 스타일 객체를 스타일 오브젝트 객체에 입혀줄 것
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App: any) => (props) => <App emotionCache={cache} {...props} />,
        });
    /* eslint-enable */

    const initialProps = await Document.getInitialProps(ctx);
    //
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    //
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(" ")}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        emotionStyleTags,
    };
};
