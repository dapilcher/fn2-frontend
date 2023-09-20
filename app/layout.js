const Layout = ({children}) => {
  return (
    <html lang="eng">
      <body>
        <header>
          <h1>Flightless Nerd</h1>
        </header>
      
        {children}
      </body>
    </html>
  )
}

export default Layout;