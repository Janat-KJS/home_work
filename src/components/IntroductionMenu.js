import React from "react";
import AboutCard from "./AboutCard";
import PopularPosts from "./PopularPosts";
import Tags from "./Tags";

const IntroductionMenu = () => {
    return (
            <div className="w3-col l4">
                <AboutCard/>
                <PopularPosts/>
                <Tags/>

                {/* Labels / tags */}
                <div className="w3-card w3-margin">

                </div>
                {/* END Introduction Menu */}
            </div>

    )
}

export default  IntroductionMenu;