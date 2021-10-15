import React from 'react';
import PropTypes from "prop-types";
function Card (){
    const cardstyle = {
        "width": "100%",
    }
    return (
    <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card" style={cardstyle} >
            <img src={props.imgenUrl} className="card-img-top" alt={props.imgenAlt} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.cardBody}</p>
                <a href={props.btnUrl} className="btn btn-primary">{props.btnLabel}</a>
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
