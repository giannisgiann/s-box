import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class AboutSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--about">
              <div className="container container--lg">
                {_.get(section, 'title', null) && (
                <h2 className="section__title align-center">{_.get(section, 'title', null)}</h2>
                )}
                {_.get(section, 'content', null) && (
                <div className="section__copy flex flex--col-2">
                  <div className="cell">
                  {markdownify(_.get(section, 'content.content_first', null))}
                  </div>
                  {(_.get(section, 'has_second_content', null) && _.get(section, 'second_content.content_second', null)) && (
                  <div data-aos="fade-left" className="cell">
                  {markdownify(_.get(section, 'second_content.content_second', null))}
                    </div>
                    )}
                </div>
                )}
              </div>
              <div className="w1 ms">
                <div className="container container--lg">
                    <div className="flex">
                        <div className="t1">
                        {_.get(section, 'section_1.title', null) && (
                        <h3 className="section__title align-center">{_.get(section, 'section_1.title', null)}</h3>
                        )}
                        </div>
                        {_.get(section, 'section_1', null) && (
                        <div className="ts1">
                        {markdownify(_.get(section, 'section_1.list', null))}
                        </div>
                        )}
                      </div>
                </div>
                </div>
            </section>
        );
    }
}
