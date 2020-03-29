import React from 'react';


import DirectoryMenu from '../../components/directory/directory.component';

import "./homepage.styles.scss";

const HomePage = props => {
    return (
        <div className="home-page">
            <DirectoryMenu />
        </div>
    )
}

export default HomePage;