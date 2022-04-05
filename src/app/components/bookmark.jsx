import React from "react";

const Bookmark = ({status}) => {
    return (
        status === false
        ? <i className="bi bi-suit-heart" />
        : <i className="bi bi-suit-heart-fill text-info" />
    );
}

export default Bookmark;