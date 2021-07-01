import React from 'react'

const Header = (props) => {
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={props.onDarkModeClick}>
            {props.onDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}

export default Header
