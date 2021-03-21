import styles from './layout.module.css'
import Link from 'next/link'

export function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <nav>
        <h1 className={styles.header}>Documents</h1>
      </nav>
      <main>
        {children}
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
