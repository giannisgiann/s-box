import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';
import Progress from './Progress';
import {withPrefix, attribute} from '../utils';
import {Location} from '@reach/router' 
import '../sass/main.scss';
import Header from './Header';
import Footer from './Footer';
import HeaderAlt from './HeaderAlt';


export default class Body extends React.Component {
  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') {

    this.state = {
      
      locale: JSON.parse(localStorage.getItem('locale')) || 'el'
    }
  }
  else{
    this.state = {
      
      locale:  'el'
    }
  }
  }
 
 

    render() {
      return (
            <React.Fragment>
              
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.seo.title', null) ? (_.get(this.props, 'pageContext.frontmatter.seo.title', null)) : _.get(this.props, 'pageContext.frontmatter.title', null) + ' | ' + _.get(this.props, 'pageContext.site.siteMetadata.title', null)}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width" />
                    <meta name="google" content="notranslate" />
                    <meta name="description" content={_.get(this.props, 'pageContext.frontmatter.seo.description', null) || ''} />
                    {_.get(this.props, 'pageContext.frontmatter.seo.robots', null) && (
                    <meta name="robots" content={_.join(_.get(this.props, 'pageContext.frontmatter.seo.robots', null), ',')}/>
                    )}
                    {_.map(_.get(this.props, 'pageContext.frontmatter.seo.extra', null), (meta, meta_idx) => {
                        let key_name = _.get(meta, 'keyName', null) || 'name';
                        return (
                          _.get(meta, 'relativeUrl', null) ? (
                            _.get(this.props, 'pageContext.site.siteMetadata.domain', null) && ((() => {
                                let domain = _.trim(_.get(this.props, 'pageContext.site.siteMetadata.domain', null), '/');
                                let rel_url = withPrefix(_.get(meta, 'value', null));
                                let full_url = domain + rel_url;
                                return (
                                  <meta key={meta_idx} {...(attribute(key_name, _.get(meta, 'name', null)))} content={full_url}/>
                                );
                            })())
                          ) : 
                            <meta key={meta_idx + '.1'} {...(attribute(key_name, _.get(meta, 'name', null)))} content={_.get(meta, 'value', null)}/>
                        )
                    })}
                    {_.get(this.props, 'pageContext.site.siteMetadata.favicon', null) && (
                    <link rel="icon" href={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.favicon', null))}/>
                    )}
                </Helmet>
                <div id="site-wrap" className="site">
                  <Progress/>
                 
                  <Location> 
                    
                    {({ location }) => {
                      
                      if(location.pathname === '/')
                    return   <Header {...this.props} locale={this.state.locale} />  
                    else 
                    return <HeaderAlt {...this.props} locale={this.state.locale} />
                    }}
                     
                  </Location>
                  <main id="content" className = {"site-content " + _.get(this.props, 'pageContext.frontmatter.class', '') }>
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
