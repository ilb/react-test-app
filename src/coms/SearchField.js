import React from 'react';
import PropTypes from 'prop-types';

function SearchField(props) {
	const { searchString, changeSearch } = props;

	function handleSearch(event) {
		changeSearch(event.target.value);
	}

	return (
		<div>
			<input type="text" placeholder="Давай найдем пару документов..." value={searchString || ""} onChange={handleSearch} />
		</div>
		)
}

SearchField.propTypes = {
    searchString: PropTypes.string.isRequired,
    changeSearch: PropTypes.func.isRequired,
}

export default SearchField;