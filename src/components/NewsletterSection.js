import React from 'react';

export default class NewsletterSection extends React.Component {
    render() {
        return (
            <section className="section">
              <div className="container-newsletter">
                <form name="contactForm" id="contactForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="sr-only">
                    <label id="honeypot-label" htmlFor="honeypot">Don't fill this out if you're human:</label>
                    <input aria-labelledby="honeypot-label" id="honeypot" name="bot-field" />
                  </div>
                  <input aria-labelledby="honeypot-label" type="hidden" name="form-name" value="contactForm" />
                  <div className="form-group">
                    <label id="email-label" htmlFor="email"></label>
                    <input aria-labelledby="email-label" type="text" name="email" id="email" placeholder="*Email" required />
                  </div>
                
                  <div className="form-submit">
                    <button type="submit" className="button">Εγγραφή</button>
                  </div>
                </form>
              </div>
            </section>
        );
    }
}
