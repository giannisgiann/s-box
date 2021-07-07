import React from 'react';
import _ from 'lodash';

import {classNames, markdownify} from '../utils';
import SectionActions from './SectionActions';

export default class HowWorksSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--how-works">
              
              <div className="container container--lg">
                {_.map(_.get(section, 'features', null), (feature, feature_idx) => (
                <div key={feature_idx} className={classNames('flex', 'flex--start', 'flex--center', 'flex--col-2', {'align-center': _.get(feature, 'align', null) === 'center', 'align-right': _.get(feature, 'align', null) === 'right'})}>
                  
                  <div className="section__body cell">
                <div className="title">
                   <img data-aos-duration="1500" data-aos-delay="200" data-aos-easing="ease-out" data-aos="fade-right" className="title_logo" src="/images/how_works.svg" alt="icon" />{_.get(feature, 'title', null) && (
                      _.get(section, 'title', null) ? (
                      <h3 className="section__title">{_.get(feature, 'title', null)}</h3>
                      ) : 
                      <h2 className="section__title">{_.get(feature, 'title', null)}</h2>
                    )}

                    </div>
                    {_.get(feature, 'content', null) && (
                    <div className="section__copy">
                      {markdownify(_.get(feature, 'content', null))}
                    </div>
                    )}
                    {_.get(feature, 'actions', null) && (
                    <div data-aos="fade-left" className="section__actions btn-group">
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
