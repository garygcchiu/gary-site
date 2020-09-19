import React from 'react';
import Switch from "react-switch";

const Header = ({ theme, onSwitchChange }) => {
    return <div className={'header'}>
        <div className={'header__theme'}>
            <div>
                Light
            </div>
            <Switch
                onChange={onSwitchChange}
                checked={theme}
                checkedIcon={false}
                uncheckedIcon={false}
            />
            <div>
                Dark
            </div>
            theme = { theme ? 'DARK' : 'LIGHT' }
        </div>
    </div>
};

export default Header;