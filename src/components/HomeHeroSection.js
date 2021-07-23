import React from 'react';
import _ from 'lodash';
import AOS from 'aos';
import "aos/dist/aos.css";

import {classNames, toStyleObj, withPrefix,markdownify} from '../utils';
// import SectionActions from './SectionActions';

export default class HomeHeroSection extends React.Component {
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration : 2000,
      disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced),
    });
  }
  
    render() {
        let section = _.get(this.props, 'section', null);
        let background = _.get(section, 'background', null);
        let background_color = _.get(background, 'background_color', null) || 'white';
        let background_opacity_pct = _.get(background, 'background_image_opacity', null) || 100;
        let background_opacity = background_opacity_pct * 0.01;
        let background_size = _.get(background, 'background_image_size', null) || 'cover';
        let background_repeat = _.get(background, 'background_image_repeat', null) || 'no-repeat';

        return (
            <section className={classNames('section', 'hero', {'bg-image': _.get(section, 'has_background', null) && _.get(background, 'background_image', null), 'inverse bg-white': _.get(section, 'has_background', null) && (background_color === 'blue'), 'bg-gray': _.get(section, 'has_background', null) && (background_color === 'gray'), 'section--padding': _.get(section, 'has_background', null) || _.get(section, 'image', null)})}>
              <div className="bg-gradient"></div>
              {(_.get(section, 'has_background', null) && _.get(background, 'background_image', null)) && (
              <div className="bg-image__image" style={toStyleObj(' opacity: ' + background_opacity + '; background-size: ' + background_size + '; background-repeat: ' + background_repeat)}/>
              )}
              <div className="container container--lg">
                <div className={classNames('flex', 'flex--middle', 'flex--center', 'flex--col-2', {'align-center': _.get(section, 'align', null) === 'center', 'align-right': _.get(section, 'align', null) === 'right'})}>
                  {_.get(section, 'image', null) && (
                  <div  className={classNames('cell', 'section__media','hero-images', {'section__media--right': _.get(section, 'image_position', null) === 'right'})}>
                    <img  data-aos-once="false" data-aos-easing="ease-out" data-aos-duration="1000" data-aos="fade-left" data-aos-anchor-placement="top-center" className="phone-img" src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} />
                    <div className="flex key-wrap">
                      <div className="wrap-cont" data-aos-delay="800" data-aos-once="false"  data-aos-duration="1700" data-aos="fade-left" >
                    <img  className="key-img" src="/images/key.svg" alt={_.get(section, 'image_alt', null)} />
                    </div>
                    </div>
                  </div>
                  )}
                   
                  <div className="cell text section__body" data-aos-once="false" data-aos-easing="ease-out" data-aos-duration="1000" data-aos="fade-right" data-aos-anchor-placement="top-center">
                    {_.get(section, 'title', null) && (
                    <div>{markdownify(_.get(section, 'title', null))} </div>
                    
                    )}
                    
                    {_.get(section, 'subtitle', null) && (
                    <div className="section__copy">
                      <p>{_.get(section, 'subtitle', null)}</p>
                    </div>
                    )}
                    {/* {_.get(section, 'actions', null) && (
                    <div className="section__actions btn-group">
                      <SectionActions {...this.props} actions={_.get(section, 'actions', null)} />
                    </div>
                    )} */}
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
