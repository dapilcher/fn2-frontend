import './index.css';
import Header from '../components/Header';
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";

import { Red_Hat_Display, Manrope } from "next/font/google";
import Footer from '../components/Footer';
import BodyContainer from '../components/BodyContainer';

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
})


const Layout = ({children}) => {
  if (process.env.NODE_ENV !== "production") {
    loadDevMessages();
    loadErrorMessages();
  }

  return (
    <html lang="eng" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="bg-secondary-50 font-body min-h-screen w-screen flex justify-center">
        <BodyContainer>
          <Header />
          <div className="flex flex-col items-center justify-start flex-1">
            {children}
          </div>
          <Footer />
        </BodyContainer>
      </body>
    </html>
  )
}

export default Layout;