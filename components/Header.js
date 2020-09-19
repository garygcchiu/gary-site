import React from 'react';
import Switch from "react-switch";
import { useDarkMode } from 'next-dark-mode'

const Header = () => {
    const { darkModeActive, switchToLightMode, switchToDarkMode } = useDarkMode();

    return <div className={'header'}>
        <div className={`header__theme`}>
            <div className={'header__theme__icon sun'}/>
            <Switch
                onChange={() => darkModeActive ? switchToLightMode() : switchToDarkMode()}
                checked={darkModeActive}
                checkedIcon={false}
                uncheckedIcon={false}
                height={24}
                width={50}
                handleDiameter={18}
            />
            <div className={'header__theme__icon moon'}/>
        </div>
    </div>
};

export default Header;