import React, { FC, useState } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import ReviewIcon from '@material-ui/icons/Comment';
import { useMediaQuery, Theme } from '@material-ui/core';
const { useTranslate, DashboardMenuItem, MenuItemLink } = require('react-admin');

type MenuName = 'menuCatalog' | 'menuSales' | 'menuCustomers';

interface Props {
    dense: boolean;
    logout: () => void;
    onMenuClick: () => void;
}

const Menu: FC<Props> = ({ onMenuClick, dense, logout }) => {
    const [state, setState] = useState({
        menuCatalog: false,
        menuSales: false,
        menuCustomers: false,
    });
    const translate = useTranslate();
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('xs')
    );

    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <div>
            {' '}
            <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={true} />
            <MenuItemLink
                to={`/reviews`}
                primaryText={translate(`resources.reviews.name`, {
                    smart_count: 2,
                })}
                leftIcon={ReviewIcon}
                onClick={onMenuClick}
                sidebarIsOpen={false}
                dense={dense}
            />
            {isXSmall && (
                <MenuItemLink
                    to="/configuration"
                    primaryText={translate('pos.configuration')}
                    leftIcon={<SettingsIcon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={false}
                    dense={dense}
                />
            )}
            {isXSmall && logout}
        </div>
    );
};

export default Menu;
