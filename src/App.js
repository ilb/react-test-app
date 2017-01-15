import React, { Component } from 'react';
import data from '../data.json';
import './App.css';

import Document from './Document';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      documents: data.document
    }
  }

  updateDocument = updatedDoc => {
    const docs = this.state.documents.map(doc => {
      if (doc.id === updatedDoc.id) {
        return updatedDoc;
      }
      return doc;
    });

    this.setState({
      documents: docs
    })
  }

  renderRows = () => (
    this.state.documents.map(doc => (
      <Document key={doc.id} doc={doc} updateDocument={this.updateDocument} />
    ))
  )

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Дата документа</th>
              <th>Наименование документа</th>
            </tr>
          </thead>

          <tbody>
            { this.renderRows() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
