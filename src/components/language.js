import { navigate } from "gatsby"
import React from "react"

import { Link } from "../utils"
// added this block here

class Language extends React.Component{
    handler(lang,path) {
     
        localStorage.setItem('locale', JSON.stringify(lang))
        navigate(path)
      }
    render() {

    return (
       <>
                            {this.props.locale === 'el' && 
                             <button onClick={  () =>  {this.handler('en', '/en')}}>EN</button>}
                             {this.props.locale === 'en' && 
                            <button onClick={ ()  => {this.handler('el', '/')}} >EL</button>}
                 </>
  )
    }
}



export default Language