import React from "react";
import Quality from "./quality";
import Bookmark from "./bookmark";


const User = ({users, ...rest}) => {

    return (

        users.map((user) => (
            <tr key={user._id}>
                <td><span>{user.name}</span></td>
                <td>
                    {user.qualities.map(qualities => {
                        return (
                            <Quality
                                // передавал _id={qualities._id} в quality, задавал key={_id} - выдавало ошибку (связанную с key), в документации прочитал что правильно задавать в этом случае key так:
                                key={qualities._id}
                                name={qualities.name}
                                color={qualities.color}
                            />
                        )
                    })}
                </td>
                <td><span>{user.profession.name}</span></td>
                <td><span>{user.completedMeetings}</span></td>
                <td><span>{user.rate}</span></td>
                <td>
                    <button className="btn"
                            onClick={() => rest.onChangeBookmark(user._id)}>
                        <Bookmark
                            status={user.bookmark}
                        />
                    </button>
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => rest.onDelete(user._id)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        ))

    );
}

export default User;