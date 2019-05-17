import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import { getSortFunction } from './../sys/utils.js';

function TableBody({ documents, searchString, sortDirection, sortColumn, showDocument}) {

	let docs = documents;

	if (searchString) {
		docs = docs.filter( doc => doc.displayName.toUpperCase().includes( searchString.toUpperCase() ) );
		if ( docs.length === 0 ) return (
			<tbody>
				<tr><td colSpan="2"> <div className="no-docs"> Документы не найдены </div> </td></tr>
			</tbody>
			)
	}


	docs.sort( getSortFunction( sortColumn, sortDirection ) );


	return (
		<tbody>
			{docs.map( doc => <TableRow showDocument={showDocument} key={doc.id} doc={doc} /> )}
		</tbody>
	);
}

TableBody.propTypes = {
	documents: PropTypes.array.isRequired,
    searchString: PropTypes.string.isRequired,
    sortDirection: PropTypes.number.isRequired,
    sortColumn: PropTypes.string.isRequired,
    showDocument: PropTypes.func.isRequired,
}

export default TableBody;