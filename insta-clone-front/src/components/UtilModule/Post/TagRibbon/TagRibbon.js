import React from 'react'
import "./TagRibbon.css"

const TagRibbon = ({ tags }) => {


    const processedTags = tags?.map(t => '#' + t.replace("_", "&"))

    const tagClick = (tag) => {
        alert(`Mozda napraviti pretragu objava po ${tag} ?`)
    } 

    return (
        !!tags && tags[0] ?
        <div className='tag-container'>
            {processedTags.map(t => <span className='tag' onClick={() => tagClick(t)}>{t}</span>)}
        </div>
        : <></>
    )
}

export default TagRibbon