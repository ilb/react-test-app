import React from 'react';
import PropTypes from 'prop-types';


function TableRow({ doc, showDocument }) {

	const docClick = () => {
		showDocument(doc);
	}

	return (
		<tr>
			<td> {doc.docDate} </td>
			<td> 
				<a href="#" onClick={docClick}>	{doc.displayName} </a> 
			</td>
		</tr>
		)
}

TableRow.propTypes = {
	doc: PropTypes.object.isRequired,
	showDocument: PropTypes.func.isRequired,
}

export default TableRow;