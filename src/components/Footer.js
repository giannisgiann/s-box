import React from 'react';
import _ from 'lodash';
import NewsletterSection from './NewsletterSection'
import Action from './Action';
import {htmlToReact, Link, withPrefix} from '../utils';

export default class Footer extends React.Component {

       
    render() {
        return (
            <footer className="site-footer">
              <div className="container container--lg">
              <div className="container container--lg footer-content flex--col-5">
                <div className="cell">
              {_.get(this.props, 'pageContext.site.siteMetadata.header.logo', null) ? (
                  <Link className="footer__logo" to={withPrefix('/')}>
                    <img className="logo"
                      src={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo', null))} alt={_.get(this.props, 'pageContext.site.siteMetadata.header.logo_alt', null)} />
                    </Link>
                  ) : 
                  <Link className="h4 navbar__title" to={withPrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title', null)}</Link>
                  }
                  </div>

                  {/* Footer nav menu */}

                {(_.get(this.props, 'pageContext.site.siteMetadata.footer.has_nav', null) || _.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null)) && (
                <div className="cell" >
                <div className="site-footer__nav">
                  {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_nav', null) && (
                  <ul className="site-footer__menu menu">
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.nav_links', null), (action, action_idx) => (
                    <li key={action_idx}>
                      <Action {...this.props} action={action} />
                    </li>
                    ))}
                  </ul>
                  )}
                  {/* {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null) && (
                  <ul className="site-footer__social menu">
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null), (action, action_idx) => (
                    <li key={action_idx}>
                      <Action {...this.props} action={action} />
                    </li>
                    ))}
                  </ul>
                  )} */}
                </div>
                </div>
                )}

                {/* Footer nav menu policies */}
                {(_.get(this.props, 'pageContext.site.siteMetadata.footer.has_nav', null) || _.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null)) && (
                <div className="cell" >
                <div className="site-footer__nav">
                  <div className="menu-title">Policies</div>
                  {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_nav', null) && (
                  <ul className="site-footer__menu menu">
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.nav_links_policy', null), (action, action_idx) => (
                    <li key={action_idx}>
                      <Action {...this.props} action={action} />
                    </li>
                    ))}
                  </ul>
                  )}
                 
                </div>
                </div>
                )}
              {/* Contact menu */}
                <div className="cell">
                  <div >
                  <div className="menu-title">Contact us</div>
                  {_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null) && (
                    <span>{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.address', null))}</span>
                     
                  )}
                  {_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null) && (
                    <span>{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.telephone', null))}</span>
                     
                  )}
                  {_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null) && (
                    <span>{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.email', null))}</span>
                     
                  )}
                  </div>
                  </div>

                  {/* Newsletter */}

                  <div className="cell">
                    <div>
                    <div className="menu-title">Newsletter</div>
                    {_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null) && (
                    <span>{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.newsletter', null))}</span>
                     
                  )}
                  <NewsletterSection />
                    </div>
                  </div>
                 </div>

                  {/* Footer Copyrights */}

                <div className="container container--lg footer-copyrights">
                <div className="site-footer__copyright">
                  {_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null) && (
                    <span>{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null))}</span>
                     
                  )}
                   {new Date().getFullYear()}.
                   {_.get(this.props, 'pageContext.site.siteMetadata.footer.developed_by', null) && (
                    <span>{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.developed_by', null))}</span>
                     
                  )}
                 
                  {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links', null), (action, action_idx) => (
                    <Action key={action_idx} {...this.props} action={action} />
                  ))}
                </div>
                </div>
             
              </div>
            </footer>
        );
    }
}
