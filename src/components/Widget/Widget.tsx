import React, { useEffect, useRef, useState } from 'react'
import styles from './Widget.module.scss'
import { IUser } from '../../types/IUser';
import Search from './Search/Search';

const Widget = () => {

    const [text, setText] = useState("")

    const [users, setUsers] = useState<IUser[]>([
        // {
        //     _id: "d2f3g5h9f8h7f79v"
        // }
    ])

    const searchUsers = async () => {
        // await UserService.searchUsers(text)
        //     .then(response => {
        //         setUsers(response.data)
        //     })
    }

    //const debouncedSearch = useDebounce(searchUsers, 500)

    useEffect(() => {
        if (text) {
            //debouncedSearch(text)
        }
    }, [text])

    return (
        <div>
            <Search text={text} setText={setText} users={users} setUsers={setUsers}/>
        </div>
    )
}

export default Widget