import React from 'react';
import AppBar from './AppBar';
import Menu from './Menu';
import { lightTheme } from './themes';

const { Layout, Sidebar } = require('react-admin');

const CustomSidebar = (props: any) => <Sidebar {...props} size={200} />;

export default (props: any) => {
    const theme = lightTheme;
    return (
        <Layout
            {...props}
            appBar={AppBar}
            sidebar={CustomSidebar}
            menu={Menu}
            theme={theme}
        />
    );
};
