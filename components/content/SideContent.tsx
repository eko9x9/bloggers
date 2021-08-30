import React, { ReactElement } from 'react'
import AboutMe from '../about/AboutMe'
import Sosmed from '../about/Sosmed'
import SidePost from '../posts/SidePost'

interface Props {
    
}

function SideContent({}: Props): ReactElement {
    return (
        <React.Fragment>
            <AboutMe />
            <Sosmed />
            <SidePost />
        </React.Fragment>
    )
}

export default SideContent
