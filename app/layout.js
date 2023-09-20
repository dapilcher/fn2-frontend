import Image from "next/image";

const Layout = ({children}) => {
  return (
    <html lang="eng">
      <body>
        <header>
          <h1 style={{display: "flex", justifyContent: "start", alignItems: "center"}}>
            <Image src="/Austrich_circle_cropped.png" width="48" height="48" /> Flightless Nerd
          </h1>
        </header>
      
        {children}
      </body>
    </html>
  )
}

export default Layout;