import React from "react";
import {postsPop} from "../constants";

const PopularPosts = () => {

    const postsPopArray = postsPop.map(item => (
                <li className="w3-padding-16">
                    <img src={item.img} alt="Image" className="w3-left w3-margin-right"
                         style={{width: 50}}/>
                    <span className="w3-large">{item.name}</span><br/>
                    <span>{item.description}</span>
                </li>
            )
        )

    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {postsPopArray}
                </ul>
            </div>
            <hr/>

        </>
    );
}

export default PopularPosts;