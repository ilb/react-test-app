import React from 'react';
import PropTypes from 'prop-types';

function TableRow({doc, openDoc}) {

	const click = () =>
	{
		openDoc(doc);
	}

	return (
		<tr>
			<td>
                {doc.docDate}
            </td>
			<td>
                <a className ="App-link clickable" onClick={click}>{doc.displayName}</a>
			</td>
		</tr>
    )
}

TableRow.propTypes = {
	doc: PropTypes.object,
	openDoc: PropTypes.func.isRequired,
}

export default TableRow;