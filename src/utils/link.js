import React from 'react';
import { Link as GatsbyLink } from "gatsby"

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
export default function Link({ children, to, activeClassName, partiallyActive, ...other }) {
    // Tailor the following test to your environment.
    // This example assumes that any internal link (intended for Gatsby)
    // will start with exactly one slash, and that anything else is external.
    const internal = /^\/(?!\/)/.test(to); 
   
 
    const langTo = () => {
        
        const local = JSON.parse(localStorage.getItem('locale')) ; 
        if(local && local === 'en'){
           
                return '/en' + to
            
        } else{
             return to 
        }
    }
    // Use Gatsby Link for internal links, and <a> for others
    if (internal) {
        return (
            <GatsbyLink
                to={langTo()}
                activeClassName={activeClassName}
                partiallyActive={partiallyActive}
                {...other}
            >
                {children}
            </GatsbyLink>
        )
    }
    return (
        <a href={to} {...other}>
            {children}
        </a>
    )
}
