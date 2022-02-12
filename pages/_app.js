import { useEffect } from "react";
import { useRouter } from "next/router";
import "nextra-theme-docs/style.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    router.push("https://cad-docs.caspertheghost.me/docs/intro/")
  }, [router])
  
  return <Component {...pageProps} />;
}
