import React from 'react';
import _ from 'lodash';

import {markdownify,withPrefix} from '../utils';

export default class ContentSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section content">
              <div className="container container--lg">
                {_.get(section, 'title', null) && (
                <h2 className="section__title align-center">{_.get(section, 'title', null)}</h2>
                )}

                {_.get(section, 'content', null) && (
                <div className="section__copy flex flex--col-2">
                  <div className="cell">
                  {markdownify(_.get(section, 'content.content_first', null))}
                  {_.get(section, 'content', null) && (
                    <img src={withPrefix(_.get(section, 'content.image', null))} alt={_.get(section, 'content.image_alt', null)} />
                  )}
                  {_.get(section, 'content', null) && (
                    <div className="icon_wrap">
                    <img className="login_icon" src={withPrefix(_.get(section, 'content.image_icon', null))} alt={_.get(section, 'content.image__icon_alt', null)} />
                    </div>
                  )}
                  </div>
                  
                  {(_.get(section, 'has_second_content', null) && _.get(section, 'second_content.content_second', null)) && (
                  <div className="cell">
                  {markdownify(_.get(section, 'second_content.content_second', null))}
                  {_.get(section, 'second_content.subtext', null) && (
                <div className="sub">
                {markdownify(_.get(section, 'second_content.subtext', null))}
                </div>
                    )}
                  </div>
                    )}
                </div>
                )}
              </div>
            </section>
        );
    }
}
