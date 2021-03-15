import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow'

function TableBody({documents, openDoc}) {

	let docs = documents;

	return (
		<tbody>
			{docs.map(doc => <TableRow key={doc.id} doc={doc} openDoc={openDoc}/>)}
		</tbody>
    );
}

TableBody.propTypes = {
	documents: PropTypes.array.isRequired,
	openDoc: PropTypes.func.isRequired,
}

export default TableBody;