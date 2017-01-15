import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import './Document.css';

class Document extends Component {
  static propTypes = {
    doc: PropTypes.object,
    updateDocument: PropTypes.func
  }

  constructor (props) {
    super(props);

    this.state = {
      isExpanded: false,
      displayName: this.props.doc.displayName,
      description: this.props.doc.description,
      docDate: this.prepareDate(this.props.doc.docDate)
    }
  }

  prepareDate = dateStr => {
    if (/\./.test(dateStr)) {
      return dateStr;
    }
    const dateComponents = dateStr.split('-')
    const year = dateComponents[0];
    const month = dateComponents[1]
    const day = dateComponents[2];

    return `${day}.${month}.${year}`
  }

  handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this);

    if ((!domNode || !domNode.contains(event.target))) {
      this.setState({ isExpanded: false });

      this.props.updateDocument({
        ...this.props.doc,
        displayName: this.state.displayName,
        description: this.state.description,
        docDate: this.state.docDate
      })

      document.removeEventListener('click', this.handleClickOutside, true);
    }
  }

  openEditForm = () => {
    this.setState({ isExpanded: true });
    document.addEventListener('click', this.handleClickOutside, true);
  };

  handleChange = (field, event) => {
    this.setState({[field]: event.target.value});
  }

  renderRow = () => (
    <tr onClick={this.openEditForm}>
      <td>
        {this.state.docDate}
      </td>
      <td>
        {this.state.displayName}
      </td>
    </tr>
  )


  renderForm = () => (
    <tr>
      <td colSpan="2">
        <div className="form">
          <div className="row">
            <label htmlFor="displayName">Наименование документа</label>
            <input
              name="displayName"
              type="text"
              value={this.state.displayName}
              onChange={event => this.handleChange('displayName', event)}
            />
          </div>

          {
            this.state.description && (
              <div className="row">
                <label htmlFor="description">Описание документа</label>
                <input
                  name="description"
                  type="text"
                  value={this.state.description}
                  onChange={event => this.handleChange('description', event)}
                />
              </div>
            )
          }

          <div className="row">
            <label htmlFor="docDate">Дата документа</label>
            <input
              name="docDate"
              type="text"
              value={this.state.docDate}
              onChange={event => this.handleChange('docDate', event)}
            />
          </div>
        </div>
      </td>
    </tr>
  )

  render () {
    return this.state.isExpanded ? this.renderForm() : this.renderRow();
  }
}

export default Document
