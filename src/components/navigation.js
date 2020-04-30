import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

export const NavigationBar = () => (
    <Layout>
    <Header className="header-color" scroll>
        <h1>MOVIE PARTY</h1>
    </Header>
    <Drawer>
        <Navigation className="navigation-color">
            <Link exact path to="/Upcoming"><h1>Upcoming Parties</h1></Link>
            <Link to="/Past"><h1>Past Parties</h1></Link>
            <Link to="/Friends"><h1>Friends</h1></Link>
            <Link to="/Films"><h1>Films</h1></Link>
            <Link to="/Watchlist"><h1>WatchList</h1></Link>
            <Link to="/NewParty"><h1>Create New Party</h1></Link>
        </Navigation>
    </Drawer>
</Layout>
)