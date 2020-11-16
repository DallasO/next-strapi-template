import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import Head from "next/head";
import "../styles/globals.css";
import "../assets/css/style.css";
import withData from "../utils/apollo";

/* eslint-disable react/jsx-filename-extension */
function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>Strapi blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
/* eslint-enable react/jsx-filename-extension */

export default withData(MyApp);
