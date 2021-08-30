import React, { ReactElement } from 'react'
import MainContent from './MainContent'
import SideContent from "./SideContent";

interface Props {
    
}

function index({}: Props): ReactElement {
    return (
        <div className="content py-2">
            <div className="container">
                <div className="row">
                    <main className="main-content col-8">
                        <MainContent />
                    </main>
                    <aside className="side-content col-4">
                        <SideContent />
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default index
