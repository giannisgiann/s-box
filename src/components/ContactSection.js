import React from 'react';
import _ from 'lodash';

export default class ContactSection extends React.Component {
    render() {
      let section = _.get(this.props, 'section', null);

        return (
            <section className="section contact">
              <div className="container container--lg mt-5">
                <div className="flex flex--col-2">
                  <div className="cell">
                  {_.get(section, 'title_first', null) && (
                <h3 className="section__title align-left">{_.get(section, 'title_first', null)}</h3>
                )}
                {_.get(section, 'sub_first', null) && (
                <span className="sub align-left">{_.get(section, 'sub_first', null)}</span>
                )}
                 {_.get(section, 'title_second', null) && (
                <h3 className="section__title align-left mt-3">{_.get(section, 'title_second', null)}</h3>
                )}
                <ul className="info-list mt-3">
                {_.get(section, 'address', null) && (
                  
                <li className="adress"> <a href="https://goo.gl/maps/C7NDbGrJY6yqRAwp7" target="_blank" rel="noreferrer">{_.get(section, 'address', null)}</a></li>
                )}
                  {_.get(section, 'phone', null) && (
                <li className="phone">
                   <a href={"tel:" + (_.get(section, 'phone', null))} target="_blank" rel="noreferrer">{_.get(section, 'phone', null)}
                   </a>
                  </li>
                )}
                  {_.get(section, 'email', null) && (
                <li className="email">
                <a href={"mailto:" + (_.get(section, 'email', null))} target="_blank" rel="noreferrer">{_.get(section, 'email', null)}</a>
                  </li>
                )}

                </ul>
                  </div>
                  <div className="cell">
                <form name="contactForm" id="contactForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="sr-only">
                    <label id="honeypot-label" htmlFor="honeypot">Don't fill this out if you're human:</label>
                    <input aria-labelledby="honeypot-label" id="honeypot" name="bot-field" />
                  </div>
                  <input aria-labelledby="honeypot-label" type="hidden" name="form-name" value="contactForm" />
                  <div className="form-group">
                    {/* <label id="name-label" htmlFor="name"></label> */}
                    <input aria-labelledby="name-label" type="text" name="name" id="name" placeholder={_.get(section, 'name_label', null)} required />
                  </div>
                  <div className="form-group">
                    {/* <label id="email-label" htmlFor="email"></label> */}
                    <input aria-labelledby="email-label" type="email" name="email" id="email" placeholder={_.get(section, 'email_label', null)} required />
                  </div>
                  <div className="form-group">
                    {/* <label htmlFor="subject"></label> */}
                    <input aria-labelledby="subject-label" type="text" name="subject" id="subject" placeholder={_.get(section, 'subject_label', null)} required />
                  </div>
                  <div className="form-group">
                    {/* <label id="message-label" htmlFor="message"></label> */}
                    <textarea aria-labelledby="message-label" name="message" id="message" rows="5" placeholder={_.get(section, 'message_label', null)} />
                  </div>
                  {/* <div className="form-group form-checkbox">
                    <input aria-labelledby="consent-label" type="checkbox" name="consent" id="consent" />
                    <label id="consent-label" htmlFor="consent">I understand that this form is storing my submitted information so I can be
                      contacted.</label>
                  </div> */}
                  <div className="form-submit">
                    <button type="submit" className="button">{_.get(section, 'submit_text', null)}</button>
                  </div>
                </form>
                </div>
                </div>
              </div>
            </section>
        );
    }
}
