import React from "react";
import User from "./user";


const Users = (users) => {

    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
                <th scope="col"/>
            </tr>
            </thead>
            <tbody>
                {User(users)}
            </tbody>
        </table>
    );


}

export default Users;