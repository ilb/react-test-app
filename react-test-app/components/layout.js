export function Layout({ children }) {
  return (
    <>
      <nav>
        <h1>Documents</h1>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}
