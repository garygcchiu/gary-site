import React from 'react';
import Switch from 'react-switch';
import { useDarkMode } from 'next-dark-mode'
import * as ReactGA from '../utils/react-ga';

const Header = () => {
    const { darkModeActive, switchToLightMode, switchToDarkMode } = useDarkMode();

    return <div className={'header'}>
        <div className={'header__theme'}>
            <div className={'header__theme__icon sun'}/>
            <Switch
                onChange={() => {
                    ReactGA.sendEvent('Interaction', `Toggled Theme to ${darkModeActive ? 'Light' : 'Dark'}`);
                    if (darkModeActive) {
                        switchToLightMode();
                    } else {
                        switchToDarkMode();
                    }
                }}
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