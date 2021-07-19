import React from 'react';
import _ from 'lodash';

import {markdownify,withPrefix} from '../utils';
import AccordionFaq from './Accordion';
export default class FaqSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section content">
              <div className="wrap">
                
                {_.get(section, 'content', null) && (
                <div className="container container--lg">
                <div className="section__copy flex mt-3">
                  <div className="cell">
                    <p className="sub">{_.get(section, 'content.subtitle', null)}</p>
                    <h3 className="title">{_.get(section, 'content.title', null)}</h3>
                  {_.get(section, 'content', null) && (
                    <img class="s-icon" src={withPrefix(_.get(section, 'content.image', null))} alt={_.get(section, 'content.image_alt', null)} />
                  )}
                 </div>
                </div>
                </div>
                
                )}
              </div>
              {_.get(section, 'content', null) && (
                 <div className="container container--lg">
                     <div class="faq_wrap flex flex--col-1">
                     <div className="cell">
                     <AccordionFaq {...this.props} items={_.get(section, 'items', null)}></AccordionFaq>
                     </div>
                     </div>
                     </div>
                  )}
            </section>
        );
    }
}
