const Layout = ({children}) => {
  return (
    <html lang="eng">
      <body>
        <header>
          <h1>Hello World</h1>
        </header>
      
        {children}
      </body>
    </html>
  )
}

export default Layout;