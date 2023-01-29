import React, {useEffect, useState} from 'react';
import {useActions, useAppSelector} from "../../hooks/useRedux";
import Paginator from "../../components/Paginator/Paginator";
import UsersList from "../../components/UsersList/UsersList";
import UsersFilter from "../../components/UsersFilter/UsersFilter";
import {useSort} from "../../hooks/useSort";
import {useInclude} from "../../hooks/useInclude";

const Users = () => {

    const {getAllUsers, setCurrentPage, follow, unfollow} = useActions()

    //это перенести в Wrapper PaginationUsers
    const {totalCount, currentPage, pageSize, users, user} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        getAllUsers(currentPage, pageSize)
    }, [currentPage])

    const onPageChanged = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    const [filter, setFilter] = useState<{ sort: string, query: string }>({sort: "", query: ""})

    const search = async (event: any) => {
        setFilter({...filter, query: event.target.value})
    }

    const sortUsers = (sort: any) => {
        setFilter({...filter, sort: sort.toString()})
    }

    const sortedUsers = useSort(users, filter.sort)

    const searchUsers = useInclude(sortedUsers, filter.query)

    return (
        <div>
            <div className="margin-bottom-1">
                {totalCount >= 1 &&
                <Paginator pageSize={pageSize} totalItems={totalCount} currentPage={currentPage}
                           onPageChanged={onPageChanged}/>
                }
            </div>
            <div className="margin-bottom-1">
                <UsersFilter filter={filter} search={search} sort={sortUsers}/>
            </div>
            <UsersList _id={user._id} users={searchUsers} follow={follow} unfollow={unfollow}/>
        </div>
    );
};

export default Users;