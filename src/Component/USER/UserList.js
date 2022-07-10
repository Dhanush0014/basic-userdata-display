import React from 'react'
import Card from '../UI/Card'
import style from '../UI/UserList.module.css'

function UserList(props) {

    if (props.users.length === 0) {
        return
    }

    return (

        <Card className={style.users}>
            <ul>
                {props.users.map((user, index) => (
                    <li key={index}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default UserList