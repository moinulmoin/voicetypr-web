import Script from "next/script"

export const Analytics = () => {
  if (process.env.NODE_ENV !== "production") return null
  return <Script src="https://umami.moinulmoin.com/script.js" data-website-id="85a764bc-0f56-42b3-aaf5-c25e617a9a42" strategy="afterInteractive" />
}