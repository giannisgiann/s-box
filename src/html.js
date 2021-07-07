import React from "react"
import PropTypes from "prop-types"
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>

{/* 
  _______ _     _       _      _____  _                   
 |__   __| |   (_)     | |    |  __ \| |              _   
    | |  | |__  _ _ __ | | __ | |__) | |_   _ ___   _| |_ 
    | |  | '_ \| | '_ \| |/ / |  ___/| | | | / __| |_   _|
    | |  | | | | | | | |   <  | |    | | |_| \__ \   |_|  
    |_|  |_| |_|_|_| |_|_|\_\ |_|    |_|\__,_|___/        
                                                          


  We Build. We Create. We Share.
  https://think-plus.gr/      
                                        */}

      <head>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
