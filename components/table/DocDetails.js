import PropTypes from 'prop-types';


export default function DocDetails({closeDoc, doc})
{
    if (!doc) return null
    return(
        <div>
            <h4> {doc.displayName} </h4>
            <h5> Описание </h5>
            <p> {doc.description} </p>
            <h5> Дата: {doc.docDate} </h5>
            <button onClick={closeDoc}>CloseDoc</button>
        </div>
    );
}

DocDetails.propTypes = {
    doc: PropTypes.object,
    closeDoc: PropTypes.func.isRequired,
}