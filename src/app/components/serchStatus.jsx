import React from "react";

const SearchStatus = ({length}) => {

    const countUsers = () => {
        return length >= 5
        || length === 1
            ? length + " человек"
            : length + " человекa";
    };

    return length === 0
        ? <span className="badge bg-danger">Никто с тобой не тусанёт</span>
        : <span className="badge bg-primary">{countUsers()} тусанёт с тобой сегодня</span>;

}

export default SearchStatus;