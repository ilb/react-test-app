import React from 'react';
import PropTypes from 'prop-types';

function DocumentDetail({ open, doc, closeDocument }) {

	if ( !doc ) return null;

	return (
		<div 
			className={open? "lightbox open" : "lightbox"}
			onClick={closeDocument}
		>
		
			<div className="document-info">
				<h4> {doc.displayName} </h4>
				<div className="divider"></div>
				<h5> Cодержание </h5>
				<p> {doc.description} </p>
				<div className="divider"></div>
				<h5> Дата: {doc.docDate} </h5>
				<button className="btn document-close">Закрыть</button>
			</div>
		</div>
	);
}

DocumentDetail.propTypes = {
	open: PropTypes.bool.isRequired,
    doc: PropTypes.object,
    closeDocument: PropTypes.func.isRequired,
}

export default DocumentDetail;