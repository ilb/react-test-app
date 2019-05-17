import React from 'react';
import PropTypes from 'prop-types';


const getPointer = (column, sortColumn, sortDirection) => {

	if ( column === sortColumn ) {
		if ( sortDirection > 0 ) {
			return "(по возрастанию)";
		} else {
			return "(по убыванию)";
		}
	}

	return ""
}

function TableHead( {sortColumn, sortDirection, changeSort} ) {

	const handleClick = (column) => () => {
		if ( column === sortColumn ) {
			changeSort( column, 0 - sortDirection );
		} else {
			changeSort( column, 1 );
		}		
	}

	return (
		<thead>
			<tr>
				<th> 
					<div 
						className={sortColumn === "docDateObj" ? "orange-text clickable" : "clickable"}
						onClick={handleClick("docDateObj")}
					>
					Дата {getPointer("docDateObj", sortColumn, sortDirection)}
					</div>
				</th>
				<th> 
					<div 
						className={sortColumn === "displayName" ? "orange-text clickable" : "clickable"}
						onClick={handleClick("displayName")}
					>
					Наименование {getPointer("displayName", sortColumn, sortDirection)}
					</div>
				</th>
			</tr>
		</thead>
		)
}

TableHead.propTypes = {
	sortDirection: PropTypes.number.isRequired,
	sortColumn: PropTypes.string.isRequired,
	changeSort: PropTypes.func.isRequired,
};

export default TableHead;