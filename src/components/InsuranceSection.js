import React from 'react';
import _ from 'lodash';

import {markdownify,withPrefix} from '../utils';

export default class Insurance extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section content">
              <div className="container container--lg">
              
                {_.get(section, 'content', null) && (
                <div className="section__copy flex mt-12">
                  <div className="cell">
                  {_.get(section, 'content', null) && (
                    <img src={withPrefix(_.get(section, 'content.image', null))} alt={_.get(section, 'content.image_alt', null)} />
                  )}
                  <h1 data-aos="fade-right" data-aos-speed="1000"  className="title">{_.get(section,'title',null)}</h1>
                  
                  </div>
                  
                  {(_.get(section, 'has_second_content', null) && _.get(section, 'second_content.content_second', null)) && (
                  <div className="cell s">
                      <div data-aos="fade-up" className="s-text" >
                  {markdownify(_.get(section, 'second_content.content_second', null))}
                  </div>
                 
                  </div>
                    )}
                    
                </div>
                )}
                
              </div>
              <div className="w-sec">
              {(_.get(section, 'has_second_section', null)  &&  _.get(section, 'second_section', null)) && (
                <div className="container container--lg mt-5">
                    <div className="flex flex--col-2 sec mt-5">
                        <div className="cell">
                        <img className="sec_img" src={withPrefix(_.get(section, 'second_section.image', null))} alt={_.get(section, 'second_section.image_alt', null)} />
                        </div>
                        <div className="cell sec_text">
                            <h3 data-aos="fade-left" data-aos-duration="1200">{_.get(section,'second_section.text',null)}</h3>
                            <p data-aos="fade-left"  data-aos-duration="1200" data-aos-delay="500">{_.get(section,'second_section.subtext',null)}</p>
                        </div>
                    </div>
                    </div>
                    
                     )}
              
                     
              </div>
              {(_.get(section, 'has_second_section', null)  &&  _.get(section, 'second_section', null)) && (
                  <div className="container container--lg mt-10">
                    <div className="flex ft">
                        <h3>{_.get(section,'second_section.subtitle',null)}</h3>
                        <span><span className="primary">-</span> {_.get(section,'second_section.title',null)} <span className="primary">-</span></span>
                    </div>
                  
                  </div>
                    )}
                       
            </section>
        );
    }
}
