import React from "react";
import {blogPop} from "../constants";

const BlogEntries = () => {

    const blogPopArray =
        blogPop.map(item => (
                <div className="w3-card-4 w3-margin w3-white">
                    <img src={item.img} alt="Nature" style={{width: '100%'}}/>
                    <div className="w3-container">
                        <h3><b>{item.title}</b></h3>
                        <h5>Title description, <span className="w3-opacity">{item.date}</span></h5>
                    </div>
                    <div className="w3-container">
                        <p>{item.p}</p>
                        <div className="w3-row">
                            <div className="w3-col m8 s12">
                                <p>
                                    <button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button>
                                </p>
                            </div>
                            <div className="w3-col m4 w3-hide-small">
                                <p><span className="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span
                                    className="w3-tag">{item.comment}</span></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        )

    return (
        <div className="w3-col l8 s12">
            {blogPopArray}
        </div>
    );
}
export default BlogEntries;