import React from 'react'
import data from '../data.json'
import TableBody from './table/TableBody'
import DocTetails from './table/DocDetails'

class App extends React.Component
{
    state = {
        documents: null,
        docDetails: null,
    }

    constructor() {
        super()
        let documents = data.document.map( doc => 
        {
          doc.docDate = doc.docDate.split("-").reverse().join('.');
          return doc;
        })
        this.state.documents = documents;
    }

    openDoc = (doc) => 
    {
        this.setState({ docDetails: doc});
    }

    closeDoc = () =>
    {
        this.setState({ docDetails: null});
    }

    render() {
        const { documents, docDetails } = this.state;
        return(
            <div>
                <table className="table fixed">
                    <thead>
                        <tr>
                            <th> 
                                Дата 
                            </th>
                            <th> 
                                Наименование
                            </th>
                        </tr>
                    </thead>
                    <TableBody documents={documents} openDoc={this.openDoc}/>
                </table>
                <DocTetails closeDoc={this.closeDoc} doc={docDetails}/>
            </div>
        );
    }
}
export default App;