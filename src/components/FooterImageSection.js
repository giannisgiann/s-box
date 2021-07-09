import React from 'react';
import _ from 'lodash';

import {classNames,withPrefix} from '../utils';

export default class FooterImageSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--footer-image">
              <div className="section-wrap">
              <div className="container">
                {_.map(_.get(section, 'attributes', null), (attribute, attribute_idx) => (
                <div key={attribute_idx} className='flex flex--start flex--center'>
                   <div className="cell">
                <div className="img-wrap">
                {_.get(attribute, 'image', null) && (
                            <img className="b-icon" src={withPrefix(_.get(attribute, 'image', null))} alt={_.get(attribute, 'image_alt', null)} />
                            )}
                    </div>
                </div>
                </div>
                ))}
              </div>
              </div>
            </section>
        );
    }
}
