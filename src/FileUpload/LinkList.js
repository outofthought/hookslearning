import React from 'react'

export default function LinkList(props) {
    
    return (
        <div>
            <ul>{props.links.map(link=>{
                return(
                    <li key={link.key}><a href={link.link}>{link.link}</a></li>
                    
                )
            })}</ul>
            
        </div>
    )
}
