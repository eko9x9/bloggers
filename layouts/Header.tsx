import React, { ReactElement } from 'react'

interface Props {
    
}

function Header({}: Props): ReactElement {
    return (
        <header className="header my-4">
            <div className="container text-center">
                <h2>Digi Blog</h2>
                <p>Smart Digital{"'"}s Blog</p>
            </div>
        </header>
    )
}

export default Header
