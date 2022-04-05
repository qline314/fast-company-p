import React from "react";

const Quality = ({name, color}) => {

    return (
        <span
            className={`m-1 badge bg-${color}`}>
            {name}
        </span>
    );

};

export default Quality;