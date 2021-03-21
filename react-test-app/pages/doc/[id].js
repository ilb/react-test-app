import {Layout} from '../../components/layout'
import Date from '../../components/date'

export default function Doc( {doc} ) {
  return( 
    <Layout>
      <h1><Date dateString={doc.docDate} /></h1>
      <h1>{doc.displayName}</h1>
      <h1>{doc.description}</h1>
    </Layout>
  )
}

Doc.getInitialProps = async (ctx) => {
  
  const response = await fetch (`http://localhost:4200/document/${ctx.query.id}` ) 
  const doc = await response.json()
  
  return {
    doc
  }
}
