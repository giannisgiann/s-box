import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl"

const languageName = {
  el: "EL",
  en: "EN"
}
// added this block here
 
const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => {
            if (language !== currentLocale) {
              return (
                <a key={language} onClick={() => changeLocale(language)}>
                  {languageName[language]}
                </a>
              )
            }
          })
        }
      </IntlContextConsumer>
    </div>
  )
}



export default Language