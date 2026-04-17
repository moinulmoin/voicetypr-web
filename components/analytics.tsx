// Umami analytics disabled in favor of OpenPanel. Keeping the component as a
// no-op so any stray imports don't error; remove entirely on a follow-up pass.
// import Script from "next/script"

export const Analytics = () => {
  return null
  // if (process.env.NODE_ENV !== "production") return null
  // return <Script src="https://umami.moinulmoin.com/script.js" data-website-id="85a764bc-0f56-42b3-aaf5-c25e617a9a42" strategy="afterInteractive" />
}
