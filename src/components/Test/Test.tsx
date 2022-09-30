import styles from './Test.module.scss'
import { useDarkMode } from '../../useDarkMode'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Brightness3OutlinedIcon from '@mui/icons-material/Brightness3Outlined';

const Test = () => {

    const [theme, setLightTheme, setDarkTheme] = useDarkMode()

    return (
        <div>
            {/*@ts-ignore*/}
            <LightModeOutlinedIcon className={theme === "light" ? "" : "light display-none"} onClick={setDarkTheme} />
            {/*@ts-ignore*/}
            <Brightness3OutlinedIcon className={theme === "dark" ? "" : "dark display-none"} onClick={setLightTheme} />
            {/* animate-pulse animate-bounce */}
            вйцвйцвцйв
            йвцвцй
            вйцвйцвцйввц
            вйцвйцвцйввц
            йвцвцййв

            цвй
        </div>

    )
}

export default Test