import React, {useEffect, useState} from "react";
import Star from "./Star";

function StarWrap({rate}) {
    const [star, setStar] = useState([0,0,0,0,0]);

    useEffect(() => {
        let tmp = [0,0,0,0,0];
        let rating = rate

        for (let i=0; rating > 0; i++) {
            tmp[i] = (rating >= 1 ? 1 : rating);
            rating -= 1;
        }

        setStar(tmp);
    }, []);

    return (
        <>
            <Star rate={star[0]}/><Star rate={star[1]}/><Star rate={star[2]}/><Star rate={star[3]}/><Star rate={star[4]}/>
        </>
    );
}

export default StarWrap;
