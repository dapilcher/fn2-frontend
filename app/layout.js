import './index.css';
import Header from '../components/Header';
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";

import { Red_Hat_Display, Manrope } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from '../components/Footer';
import BodyContainer from '../components/BodyContainer';
import Sidebar from '../components/Sidebar';
import ReportWebVitals from '../components/ReportWebVitals';

export const displayFont = Red_Hat_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['300', '400', '500', '700', '900'],
  adjustFontFallback: false
})
export const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '700'],
  adjustFontFallback: false
});


// Metadata
export const metadata = {
  title: "Flightless Nerd"
}


const Layout = ({children}) => {
  if (process.env.NODE_ENV !== "production") {
    loadDevMessages();
    loadErrorMessages();
  }

  return (
    <html lang="eng" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="bg-grey-0 font-body min-h-screen w-screen flex justify-center">
        <ReportWebVitals />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
        <BodyContainer>
          <Header />
          {/* <div className="flex flex-col gap-4 xl:grid xl:grid-cols-12 flex-1">
            <section className="flex flex-col items-center justify-start col-span-9">
              {children}
            </section>
            <Sidebar />
          </div> */}
          <div className="flex-1">
              {children}
          </div>
          <Footer />
        </BodyContainer>
      </body>
    </html>
  )
}

export default Layout;