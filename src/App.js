import React, { Component } from 'react';
import Header from "./coms/Header";
import TableHead from "./coms/TableHead";
import TableBody from "./coms/TableBody";
import SearchField from "./coms/SearchField";
import DocumentDetail from "./coms/DocumentDetail";
import data from "./sys/data.json"
import { stringToDate } from "./sys/utils.js";

class App extends Component {

  state = {
    documents: null,
    searchString: "",
    sortColumn: "docDateObj",
    sortDirection: 1,
    showDetail: false,
    docDetail: null,
  }

  constructor(props) {
    super(props);
    let documents = data.document.map( doc => {
      doc.docDateObj = stringToDate(doc.docDate);
      doc.docDate = doc.docDate.split("-").reverse().join('.');
      return doc;
    })
    this.state.documents = documents;
  }

  changeSearch = (searchString) => {
    this.setState({ searchString });
  }

  changeSort = (sortColumn, sortDirection) => {
    this.setState({sortColumn, sortDirection});
  }

  showDocument = (doc) => {
    this.setState({ docDetail: doc, showDetail: true });
  }

  closeDocument = () => {
    this.setState({ docDetail: null, showDetail: false });
  }

  render () {
    const { searchString, sortColumn, sortDirection, documents, showDetail, docDetail } = this.state;
    return (
      <div className="container">
        <Header />
        <SearchField searchString={searchString} changeSearch={this.changeSearch} />
        <table className="table fixed">
          <TableHead 
            sortDirection={sortDirection}
            sortColumn={sortColumn}
            changeSort={this.changeSort}
          />
          <TableBody
            documents={documents}
            searchString={searchString}
            sortDirection={sortDirection}
            sortColumn={sortColumn}
            showDocument={this.showDocument}
          />
        </table>
        <DocumentDetail open={showDetail} doc={docDetail} closeDocument={this.closeDocument}/>
      </div>
    );
  }

}

export default App;
