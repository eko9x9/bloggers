import React, { ReactElement } from 'react'
import Swiper from '../swiper/Swiper'
import ArticleList from './ArticleList'

interface Props {
    
}

function MainContent({}: Props): ReactElement {
    return (
        <React.Fragment>
            <section className="swiper">
                <Swiper />
            </section>
            <section className="article-list pt-4">
                <ArticleList />
            </section>
        </React.Fragment>
    )
}

export default MainContent
