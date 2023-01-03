import React, {FC} from 'react';

interface ShowAuthProps {
    isAuth: boolean
    children: JSX.Element
}

const ShowAuth: FC<ShowAuthProps> = ({isAuth, children}) => {
        if (isAuth) {
            return children
        } else {
            return null
        }
};

export default ShowAuth;