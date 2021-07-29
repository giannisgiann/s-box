import React from 'react';
import _ from 'lodash';

import {markdownify,withPrefix} from '../utils';
import SectionActions from './SectionActions';

export default class ApplySection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section content">
                {_.get(section, 'has_divider', null) && (
                  <div className="section_divider">
                   <hr data-aos="fade-right" data-aos-duration="1000"></hr><h3  data-aos="fade-up" data-aos-duration="1000">{_.get(section, 'divider.title', null)}</h3><hr data-aos="fade-left" data-aos-speed="1000"></hr>
                  </div>
                )}
              <div className="container container--lg">
                {_.get(section, 'content', null) && (
                <div className="section__copy flex flex--col-2 mt-15">
                  <div className="cell">
                  {_.get(section, 'title', null) && (
                <h3 className="section__title">{_.get(section, 'title', null)}</h3>
                )}
                  {markdownify(_.get(section, 'content.content_first', null))}
                  {_.get(section, 'actions', null) && (
                    <div className="section__actions btn-group">
                      <SectionActions {...this.props} actions={_.get(section, 'actions', null)} />
                    </div>
                    )}
                  {_.get(section, 'content', null) && (
                    <div  className="icon_wrap">
                    <img data-aos="fade-up" className="login_icon" src={withPrefix(_.get(section, 'content.image_icon', null))} alt={_.get(section, 'content.image__icon_alt', null)} />
                    </div>
                  )}
                  </div>
                  {(_.get(section, 'has_second_content', null) && _.get(section, 'second_content', null)) && (
                  <div className="cell">
                   <img data-aos="fade-up" className="login_icon" src={withPrefix(_.get(section, 'second_content.image', null))} alt={_.get(section, 'second_content.image__icon_alt', null)} />
                 </div>
                
                    )}
                    
                </div>
                )}
                 {(_.get(section, 'has_second_content', null) && _.get(section, 'second_content', null))  && (
                   <div className="container container--lg mt-5">
                       <h3>{_.get(section, 'second_content.list.title', null)}</h3>
                       <div className="flex flex--col-2 mt-4 list">
                         <div className="cell col-1">
                           <ul>
                         {markdownify(_.get(section, 'second_content.list.column1', null))}
                         </ul>
                         </div>
                         <div className="cell col-2">
                         <ul>
                         {markdownify(_.get(section, 'second_content.list.column2', null))}
                         </ul>
                         </div>
                       </div>
                       </div>
                     )}
              </div>
            </section>
        );
    }
}
