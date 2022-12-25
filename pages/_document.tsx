import { Html, Head, Main, NextScript } from "next/document";
import TheNav from "../components/TheNav";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <TheNav />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
