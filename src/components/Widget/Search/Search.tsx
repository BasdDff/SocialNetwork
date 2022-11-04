import { FC, useEffect, useRef, useState } from 'react'
import { IUser } from '../../../types/IUser'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import styles from './Search.module.scss'

interface SearchProps {
    text: string
    setText: (text: string) => void
    users: IUser[]
    setUsers: (users: IUser[]) => void
}

const Search: FC<SearchProps> = ({text, setText, users, setUsers}) => {

    const ref = useRef();

    const [activeSearch, setActiveSearch] = useState(false)

    const activeSearchClick = () => {
        setActiveSearch(true)
    }

    useOnClickOutside(ref, () => setActiveSearch(false));

    const search = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    useEffect(() => {
        if (text) {
            //debouncedSearch(text)
        }
    }, [text])

    return (
        <div className={styles.search__wrapper}>
        <div className={activeSearch ? `${styles.search} ${styles.active} border padding` : `${styles.search} border padding`}>
            <SearchIcon className={styles.search__icon} />
            <input type="text" className={`${styles.search__input}`} placeholder="Search" onChange={search} onFocus={activeSearchClick} />
        </div>
        {activeSearch &&
            //@ts-ignore
            <div ref={ref}>
                {users.length === 0 ? "Try searching for people" :
                    users.map((user) =>
                        <div className={styles.result} key={user._id}>
                            <Link to={`/profile/${user._id}`} className={styles.result__link}>
                                User {user._id}
                            </Link>
                        </div>
                    )
                }
            </div>
        }
    </div>
    )
}

function useOnClickOutside(ref: any, handler: (event: any) => void) {

    useEffect(
        () => {
            const listener = (event: any) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    );
}

export default Search