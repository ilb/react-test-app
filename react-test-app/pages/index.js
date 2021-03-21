import {useState, useEffect} from 'react'
import Head from 'next/head'
import TableStyles from '../components/table.module.css'
import Date from '../components/date'
import {Layout} from '../components/layout'

const siteTitle = 'Table with documents'

export default function Docs({ docs }){  
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title> 
      </Head>
      <section>
        <table className={TableStyles.table}>
          <thead>
            <tr>
              <th className={TableStyles.th} scope="col">#</th>
              <th className={TableStyles.th} scope="col">Date</th>
              <th className={TableStyles.th} scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {docs.map( doc => (
              <tr>
                <th className={TableStyles.th} scope="row">{doc.id}</th>
                <th className={TableStyles.th} scope="col"><Date dateString={doc.docDate} /></th>
                <th className={TableStyles.th} scope="col">{doc.displayName}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  )
}

Docs.getInitialProps = async () => {
  const response = await fetch ('http://localhost:4200/document' ) 
  const docs = await response.json()
  
  return {
    docs
  }
}
