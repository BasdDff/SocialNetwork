import React, {FC} from 'react';
import Select from "../UI/Select/Select";
import styles from './UsersFilter.module.scss'

interface UsersFilterProps {
    filter: {sort: string, query: string}
    search: (event: React.ChangeEvent<HTMLInputElement>) => void
    sort: (event: string) => void
}

const UsersFilter: FC<UsersFilterProps> = ({filter, search, sort}) => {
    return (
        <div className={styles.wrapper}>
            {/*<Input onChange={search} value={filter.query} error={''} placeholder="search" label="search"/>*/}
            <input type="text" className={`hover border padding`} placeholder='search by email' value={filter.query} onChange={search}/>
            <Select value={filter.sort} onChange={sort} defaultValue={"Sort"} options={[
                {value: "username", name: "By username"},
                {value: "email", name: "By email"}
            ]}/>
        </div>
    );
};

export default UsersFilter;