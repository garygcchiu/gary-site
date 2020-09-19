import React from 'react';
import Switch from "react-switch";
import { useDarkMode } from 'next-dark-mode'

const Header = () => {
    const { darkModeActive, switchToLightMode, switchToDarkMode } = useDarkMode()

    return <div className={'header'}>
        <div className={'header__theme'}>
            <div>
                Light
            </div>
            <Switch
                onChange={() => darkModeActive ? switchToLightMode() : switchToDarkMode()}
                checked={darkModeActive}
                checkedIcon={false}
                uncheckedIcon={false}
            />
            <div>
                Dark
            </div>
        </div>
    </div>
};

export default Header;