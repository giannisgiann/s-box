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
                    <div className="icon_wrap">
                    <img className="login_icon" src={withPrefix(_.get(section, 'content.image_icon', null))} alt={_.get(section, 'content.image__icon_alt', null)} />
                    </div>
                  )}
                  </div>
                  {(_.get(section, 'has_second_content', null) && _.get(section, 'second_content', null)) && (
                  <div className="cell">
                   <img className="login_icon" src={withPrefix(_.get(section, 'second_content.image', null))} alt={_.get(section, 'second_content.image__icon_alt', null)} />
                 </div>
                    )}
                </div>
                )}
              </div>
            </section>
        );
    }
}
