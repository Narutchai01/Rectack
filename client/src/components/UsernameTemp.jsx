import { useState, useEffect } from "react";

const UsernameTemp = (props) => {
    const [selectedUser, setSelectedUser] = useState('username1');

    const handleUsernameChange = (event) => {
        setSelectedUser(event.target.value);
    }

    useEffect(() => {
        console.log(selectedUser);
        props.changeUser(selectedUser);
    }, [selectedUser]);
    return (
        <select className="fixed right-0 bottom-0" onChange={handleUsernameChange}>
            <option value="username1">username1</option>
            <option value="username2">username2</option>
        </select>
    )
}
export default UsernameTemp;
