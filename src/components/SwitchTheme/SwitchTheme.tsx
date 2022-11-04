import { useDarkMode } from '../../hooks/useDarkMode'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Brightness3OutlinedIcon from '@mui/icons-material/Brightness3Outlined';

const SwitchTheme = () => {

    const [theme, setLightTheme, setDarkTheme] = useDarkMode()

    return (
        <div>
            {/*@ts-ignore*/}
            <LightModeOutlinedIcon className={theme === "light" ? "" : "light display-none"} onClick={setDarkTheme} />
            {/*@ts-ignore*/}
            <Brightness3OutlinedIcon className={theme === "dark" ? "" : "dark display-none"} onClick={setLightTheme} />
            {/* animate-pulse animate-bounce */}
        </div>
    )
}

export default SwitchTheme