import React from 'react';
import _ from 'lodash';

import {classNames,withPrefix} from '../utils';

export default class FooterBanner extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--footer-banner">
              <div className="section-wrap">
              <div className="container container--lg">
                {_.map(_.get(section, 'features', null), (feature, feature_idx) => (
                <div key={feature_idx} className={classNames('flex', 'flex--start', 'flex--center', 'flex--col-2', {'align-center': _.get(feature, 'align', null) === 'center', 'align-right': _.get(feature, 'align', null) === 'right'})}>
                  
                  <div className="cell">
                <div className="img-wrap">
                {_.get(feature, 'content', null) && (
                            <img className="b-icon" src={withPrefix(_.get(feature, 'image', null))} alt={_.get(feature, 'image_alt', null)} />
                            )}
                    </div>
                </div>
                <div className="cell">
                {_.get(feature, 'content', null) && (
                    <div className="title">
                     <h1> {_.get(feature, 'title', null)}</h1>
                     <p> {_.get(feature, 'content', null)}</p>
                    </div>
                    )}
                </div>
                </div>
                ))}
              </div>
              </div>
            </section>
        );
    }
}
