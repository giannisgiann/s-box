import React from 'react';
import _ from 'lodash';

import {classNames,markdownify,withPrefix} from '../utils';
import SectionActions from './SectionActions';

export default class CtaSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--cta">
              <div className="container container--lg">
                <div className={classNames('section__body', 'align-center', {'inverse bg-blue': _.get(section, 'has_background', null) && (_.get(section, 'background_color', null) === 'blue'), 'bg-gray': _.get(section, 'has_background', null) && (_.get(section, 'background_color', null) === 'gray')})} >
                  <div className="container container--lg">
                    {_.get(section,'has_markdown',null) && (
                      <div className="section__title">
                        {markdownify(_.get(section, 'markdown', null))}
                      </div>
                    )}
                    {_.get(section, 'title', null) && (
                    <h2 className="section__title">{_.get(section, 'title', null)}</h2>
                    )}
                    {_.get(section, 'subtitle', null) && (
                    <div className="section__copy">
                      <p>{_.get(section, 'subtitle', null)}</p>
                    </div>
                    )}
                      {_.get(section, 'image', null) && (
                        <img className="mt-4" src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} />
                      )}
                      {_.get(section,'has_double_divider',null) && (
                     <hr></hr>
                    )}
                       <div className="section__text mt-3">
                        {markdownify(_.get(section, 'text', null))}
                      </div>
                      {_.get(section,'has_divider',null) && (
                     <hr></hr>
                    )}
                   
                  </div>
                </div>
                {_.get(section, 'actions', null) && (
                  <div className="container container--lg">
                    <div className="section__actions btn-group">
                      <SectionActions {...this.props} actions={_.get(section, 'actions', null)} />
                    </div>
                    </div>
                    )}
              </div>
            </section>
        );
    }
}
