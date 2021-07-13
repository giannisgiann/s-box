import React from 'react';
import _ from 'lodash';

import {classNames, markdownify, withPrefix} from '../utils';
import SectionActions from './SectionActions';

export default class BoxesSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--boxes">
              
              <div className="container container--lg">
                {_.map(_.get(section, 'boxes', null), (boxes, boxes_idx) => (
                <div key={boxes_idx} className={classNames('bx-wrap','flex', 'flex--center', {'align-center': _.get(boxes, 'align', null) === 'center', 'align-right': _.get(boxes, 'align', null) === 'right'})}>
                  <div className="title">
                   {_.get(boxes, 'title', null) && (
                      _.get(section, 'title', null) ? (
                      <h3 className="section__title">{_.get(boxes, 'title', null)}</h3>
                      ) : 
                      <h2 className="section__title">{_.get(boxes, 'title', null)}</h2>
                    )}
                    </div>
                    {_.get(boxes, 'content', null) && (
                      <div className="b-i-wrap">
                        <img className="b-icon" src={withPrefix(_.get(boxes, 'image', null))} alt={_.get(boxes, 'image_alt', null)} />
                            </div>
                            )}

                                {_.get(boxes, 'boxes_content', null) && (
                                <div className="text-sub">
                                {markdownify(_.get(boxes, 'text_sub', null))}
                                </div>
                                )}
                        <div className="boxes flex flex--col-4">
                          <div className="cell" data-aos="fade-up" data-aos-duration="1000">
                          {_.get(boxes, 'boxes_content', null) && (
                            <img className="b-icon" src={withPrefix(_.get(boxes, 'boxes_content.small', null))} alt={_.get(boxes, 'boxes_content.small_alt', null)} />
                            )}
                           <div className="bx-text">
                           <hr className="bx-divider" /> 
                             <span>Μικρό<br></br>8x50x30</span>
                             </div>
                          </div>
                          <div className="cell" data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">
                          {_.get(boxes, 'boxes_content', null) && (
                            <img className="b-icon" src={withPrefix(_.get(boxes, 'boxes_content.medium', null))} alt={_.get(boxes, 'boxes_content.medium_alt', null)} />
                            )}
                           <div className="bx-text">
                           <hr className="bx-divider" /> 
                             <span>Μεσσαίο<br></br>10x50x30</span>
                             </div>
                          </div>
                          <div className="cell" data-aos="fade-up"   data-aos-delay="800" data-aos-duration="1000"> 
                          {_.get(boxes, 'boxes_content', null) && (
                            <img className="b-icon" src={withPrefix(_.get(boxes, 'boxes_content.large', null))} alt={_.get(boxes, 'boxes_content.large_alt', null)} />
                            )}
                           <div className="bx-text">
                           <hr className="bx-divider" /> 
                             <span>Μεγάλο<br></br>20x50x30</span>
                             </div>
                          </div>
                          <div className="cell" data-aos="fade-up" data-aos="fade-up"  data-aos-delay="1100" data-aos-duration="1000">
                          {_.get(boxes, 'boxes_content', null) && (
                            <img className="b-icon" src={withPrefix(_.get(boxes, 'boxes_content.xlarge', null))} alt={_.get(boxes, 'boxes_content.xlarge_alt', null)} />
                            )}
                           <div className="bx-text">
                           <hr className="bx-divider" /> 
                             <span>Πολύ Μεγάλο<br></br>30x50x30</span>
                             </div>
                          </div>
                          {_.get(boxes, 'actions', null) && (
                    <div className="section__actions btn-group">
                      <SectionActions {...this.props} actions={_.get(boxes, 'actions', null)} />
                    </div>
                    )}
                     </div>
                  </div>
                ))}
              </div>
            </section>
        );
    }
}
