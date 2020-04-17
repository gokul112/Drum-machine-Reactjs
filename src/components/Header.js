import React from 'react';

const Header = (props) => {
    return(
        <div>
            <div className="App-header">
                <h2>{props.title}</h2>
            </div>
            <h2>Click on drums to play sounds</h2>
        </div>
    )

}

export default Header;