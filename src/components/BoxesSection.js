import React from 'react';
import _ from 'lodash';

import {classNames, markdownify, withPrefix} from '../utils';
// import SectionActions from './SectionActions';

export default class BoxesSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--boxes">
              
              <div className="container container--lg">
                {_.map(_.get(section, 'features', null), (feature, feature_idx) => (
                <div key={feature_idx} className={classNames('bx-wrap','flex', 'flex--center', {'align-center': _.get(feature, 'align', null) === 'center', 'align-right': _.get(feature, 'align', null) === 'right'})}>
                  <div className="title">
                   {_.get(feature, 'title', null) && (
                      _.get(section, 'title', null) ? (
                      <h3 className="section__title">{_.get(feature, 'title', null)}</h3>
                      ) : 
                      <h2 className="section__title">{_.get(feature, 'title', null)}</h2>
                    )}
                    </div>
                    {_.get(feature, 'content', null) && (
                      <div className="b-i-wrap">
                        <img className="b-icon" src={withPrefix(_.get(feature, 'image', null))} alt={_.get(feature, 'image_alt', null)} />
                            </div>
                            )}

                                {_.get(feature, 'content', null) && (
                                <div className="text-sub">
                                {markdownify(_.get(feature, 'text_sub', null))}
                                </div>
                                )}
                        <div className="boxes flex flex--col-4">
                          <div className="cell">
                          {_.get(feature, 'content', null) && (
                            <img data-aos="fade-up" className="b-icon"src={withPrefix(_.get(feature, 'boxes.small', null))} alt={_.get(feature, 'boxes.small_alt', null)} />
                            )}
                          </div>
                          <div className="cell">
                          {_.get(feature, 'content', null) && (
                            <img data-aos="fade-up" data-aos-delay="500" className="b-icon"src={withPrefix(_.get(feature, 'boxes.medium', null))} alt={_.get(feature, 'boxes.medium_alt', null)} />
                            )}
                          </div>
                          <div className="cell">
                          {_.get(feature, 'content', null) && (
                            <img data-aos="fade-up"  data-aos-delay="800" className="b-icon"src={withPrefix(_.get(feature, 'boxes.large', null))} alt={_.get(feature, 'boxes.large_alt', null)} />
                            )}
                          </div>
                          <div className="cell">
                          {_.get(feature, 'content', null) && (
                            <img data-aos="fade-up"  data-aos-delay="1100" className="b-icon"src={withPrefix(_.get(feature, 'boxes.xlarge', null))} alt={_.get(feature, 'boxes.xlarge_alt', null)} />
                            )}
                          </div>
                     </div>
                  </div>
                ))}
             
              </div>
            </section>
        );
    }
}
