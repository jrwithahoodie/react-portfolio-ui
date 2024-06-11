import React from 'react'

import "./HomeSectionDividerStyles.css"

const HomeSectionDivider = ({ SectionTitle }) => {
    return (
        <div className='sectionDivider'>
            <h1>
                {SectionTitle}
            </h1>
            <div class="newtons-cradle">
                <div class="newtons-cradle__dot"></div>
                <div class="newtons-cradle__dot"></div>
                <div class="newtons-cradle__dot"></div>
                <div class="newtons-cradle__dot"></div>
            </div>
        </div>
    )
}

export default HomeSectionDivider