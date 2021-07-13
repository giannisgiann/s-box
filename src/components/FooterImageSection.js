import React from 'react';
import _ from 'lodash';

import {toStyleObj} from '../utils';

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
                   {_.get(attribute, 'image', null) && (
                <div className="img-wrap" style={toStyleObj('background: url(' + _.get(attribute, 'image', null) + ')')}>

                           
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
