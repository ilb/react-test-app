import {useState, useEffect} from 'react'
import Head from 'next/head'
import TableStyles from '../components/table.module.css'
import Date from '../components/date'

const siteTitle = 'Table with documents'

export default function Docs({ docs }){
  const [docs, setDocs] = useState(initialState: [])
  
  useEffect( effect: () => {
    async function load() {
      const response = await fetch (input: 'http://localhost:4200/document') 
      const json = await response.json()
      setDocs(json)
    }
    
    load()
    
  }, inputs: [])
  
  return (
    <Head>
      <title>{siteTitle}</title> 
    </Head>
    <table className=TableStyles.table>
      <thead>
        <tr>
          <th className=TableStyles.th scope="col">#</th>
          <th className=TableStyles.th scope="col">Date</th>
          <th className=TableStyles.th scope="col">Name</th>
        <tr>
      </thead>
      <tbody>
        {docs.map( doc => (
          <tr>
            <th className=TableStyles.th scope="row">{doc.id}</th>
            <th className=TableStyles.th scope="col"><Date dateString={doc.date} /></th>
            <th className=TableStyles.th scope="col">{doc.displayName}</th>
          <tr>
        ))}
      </tbody>
    </table>
  )
}

Docs.getInitialProps = async() => {
  const response = await fetch (input: 'http://localhost:4200/document') 
  const docs = await response.json()
  
  return {
    docs
  }
}

