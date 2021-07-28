import React from 'react';
import _ from 'lodash';
import SectionActions from './SectionActions';

import {classNames, markdownify, withPrefix} from '../utils';
// import SectionActions from './SectionActions';

export default class WhatMattersSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--what-matters">
              
              <div className="container container--lg">
                {_.map(_.get(section, 'features', null), (feature, feature_idx) => (
                <div key={feature_idx} className={classNames('wm-wrapper','flex', 'flex--col-2', {'align-center': _.get(feature, 'align', null) === 'center', 'align-right': _.get(feature, 'align', null) === 'right'})}>
                  <div className="title">
                   {_.get(feature, 'title', null) && (
                      _.get(section, 'title', null) ? (
                      <h3 className="section__title">{_.get(feature, 'title', null)}</h3>
                      ) : 
                      <h2 className="section__title">{_.get(feature, 'title', null)}</h2>
                    )}

                    </div>
                 
                      <div className="cell" data-aos="fade-right">
                
                    {_.get(feature, 'image', null) && (
                  <div className={classNames('section__media ms-wrap', {'section__media--right': _.get(feature, 'image_position', null) === 'right'})}>
                    <div className="logo-wrap">
                    <img src={withPrefix(_.get(feature, 'image', null))} alt={_.get(feature, 'image_alt', null)} />
                    </div>
                    <div className="logo-sub">
                        <h3>What matters most</h3>
                    </div>
                  </div>
                  )}
                    {_.get(feature, 'content', null) && (
                    <div className="section__copy">
                      {markdownify(_.get(feature, 'content', null))}
                    </div>
                    )}
                    {/* {_.get(feature, 'actions', null) && (
                    <div data-aos="fade-left" className="section__actions btn-group">
                      <SectionActions {...this.props} actions={_.get(feature, 'actions', null)} />
                    </div>
                    )} */}
                  </div>
                  <div className="cell"  data-aos="fade-left" >
                    <div className="ms-wrap-r">
                        <div className="r-1">
                        {_.get(feature, 'content', null) && (
                            <img className="r-icon" src={withPrefix(_.get(feature, 'second_column.icon1.image', null))} alt={_.get(feature, 'second_column.icon1.image_alt', null)} />
                            )}
                        {_.get(feature, 'content', null) && (
                            <img className="r-icon"src={withPrefix(_.get(feature, 'second_column.icon2.image', null))} alt={_.get(feature, 'second_column.icon2.image_alt', null)} />
                            )}
                        {_.get(feature, 'content', null) && (
                            <img src={withPrefix(_.get(feature, 'second_column.image', null))} alt={_.get(feature, 'second_column.image_alt', null)} />
                            )}
                        </div>
                        <div className="r-2">
                        {_.get(feature, 'content', null) && (
                            <img className="r-icon" src={withPrefix(_.get(feature, 'second_column.icon3.image', null))} alt={_.get(feature, 'second_column.icon3.image_alt', null)} />
                            )}
                        {_.get(feature, 'content', null) && (
                            <img className="r-icon" src={withPrefix(_.get(feature, 'second_column.icon4.image', null))} alt={_.get(feature, 'second_column.icon4.image_alt', null)} />
                            )}
                             {_.get(feature, 'content', null) && (
                            <img className="r-icon"src={withPrefix(_.get(feature, 'second_column.icon5.image', null))} alt={_.get(feature, 'second_column.icon5.image_alt', null)} />
                            )}
                        </div>
                    </div>
                  </div>
                 
                 </div>
                 
                ))}
               <div className="divider flex">
                     <hr></hr>
                 </div>
                 {_.map(_.get(section, 'features', null), (feature, feature_idx) => (
                <div key={feature_idx} className={classNames('ins-wrap','flex', 'flex--col-2', {'align-center': _.get(feature, 'align', null) === 'center', 'align-right': _.get(feature, 'align', null) === 'right'})}>
                  
                            <div className="cell">
                            {_.get(feature, 'content', null) && (
                            <img data-aos="fade-right" className="r-icon" src={withPrefix(_.get(feature, 'second_row.image', null))} alt={_.get(feature, 'second_row.image_alt', null)} />
                            )}
                            </div>
                            <div className="cell">
                                {_.get(feature, 'content', null) && (
                                <div className="text-big">
                                {markdownify(_.get(feature, 'second_row.content', null))}
                                </div>
                                )}
                                 {_.get(feature, 'content', null) && (
                                <div className="text-sub">
                                {markdownify(_.get(feature, 'second_row.subcontent', null))}
                                <SectionActions {...this.props} actions={_.get(feature, 'actions', null)} />

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
