import React from "react";

function ServiceItem(props) {
    return (
        <div>
            <li className="serviceItem">
                <a className="itemLink" href={props.path}>
                    <figure className="itemPicwrap" data-category={props.label}>
                        <img src={props.src} alt="Service Image" className="itemImg"></img>
                    </figure>
                    <div className="itemInfo">
                        <h5 className="itemText">{props.text}</h5>
                    </div>
                </a>
            </li>      
        </div>
    );
}

export default ServiceItem