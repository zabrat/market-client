import type { AppProps } from "next/app";
import LayoutWrapper from "shared/ui/LayoutWrapper";
import "../app/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}
