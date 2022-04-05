import React, {useState} from "react";
import Users from "./components/users";
import SearchStatus from "./components/serchStatus";
import api from "./api";

function App() {

    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(users => users._id !== userId));
    };

    const handleToggleBookMark = (id) => {

        let newDataUsers = [];

        users.forEach(item => {

            if (item.bookmark !== true && item._id === id) {
                item.bookmark = true;
            }
            else if(item.bookmark === true && item._id === id) {
                item.bookmark = false;
            }

            newDataUsers.push(item);

        });

        setUsers(newDataUsers);

    };


    return (
        <>
            <h2>
                <SearchStatus
                    length={users.length}
                />
            </h2>
            <Users
                users={users}
                onDelete={handleDelete}
                onChangeBookmark={handleToggleBookMark}
            />
        </>
    );

}

export default App;