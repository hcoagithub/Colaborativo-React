import React from 'react';
import PropTypes from "prop-types";
function Card ({title, imgenUrl, imgenAlt, cardBody, btnLabel, btnUrl}){
    const cardstyle = {
        "width": "100%",
    }
    return (
    <div className="card">
        <div className="card" style={cardstyle} >
            <img src={imgenUrl} className="card-img-top" alt={imgenAlt} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{cardBody}</p>
                <a href={btnUrl} className="btn btn-primary">{btnLabel}</a>
            </div>
        </div>
    </div>
);
}


Card.propTypes = {
    imgenUrl: PropTypes.string,
    imgenAlt: PropTypes.string,
    title: PropTypes.string,
    cadBody: PropTypes.string,
    btnUrl: PropTypes.string,
    btnLabel: PropTypes.string,


};

export default Card; 
