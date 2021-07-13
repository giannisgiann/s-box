import React from 'react';
import _ from 'lodash';

import {markdownify,withPrefix} from '../utils';
import SectionActions from './SectionActions';

export default class PricingSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let content =  _.get(this.props, 'section.content', null);
        return (
            <section className="section pricing">
              <div className="container container--lg">
                {_.get(section, 'title', null) && (
                <h3 className="section__title align-left">{_.get(section, 'title', null)}</h3>
                )}
            
             <div className="flex w-100 flex--middle justify-content-center">
                
                    <div className="flex w-100  pricing-grid mb-5">
                {/* Row 1 Layout----------- */}
                {_.get(content, 'column1', null) && _.get(content, 'column2', null) &&  _.get(content, 'column3', null)  && _.get(content, 'column4', null)  && _.get(content, 'column5', null) && (
                        <div className="row w-100 flex ">
                        <div className="cell">
                            {/* <img src={_.get(content, 'column1.image', null)}  alt={_.get(content, 'column1.image_alt',null)}/> */}
                            <div className="sh"></div>
                            </div>
                            <div className="cell">
                            <img src={_.get(content, 'column2.image', null)}  alt={_.get(content, 'column2.image_alt',null)}/>
                            </div>
                            <div className="cell">
                            <img src={_.get(content, 'column3.image', null)}  alt={_.get(content, 'column3.image_alt',null)}/>
                            </div>
                            <div className="cell">
                            <img src={_.get(content, 'column4.image', null)}  alt={_.get(content, 'column4.image_alt',null)}/>
                            </div>
                            <div className="cell">
                            <img src={_.get(content, 'column5.image', null)}  alt={_.get(content, 'column5.image_alt',null)}/>
                            </div>
                         
                              </div>
                              )}
                {/* End of row 1  */}
                {/* Row 2 Layout----------- */}
                {_.get(content, 'column1', null) && _.get(content, 'column2', null) &&  _.get(content, 'column3', null)  && _.get(content, 'column4', null)  && _.get(content, 'column5', null) && (
                        <div className="row w-100 flex ">
                        <div className="cell">
                          <p>{_.get(content, 'column1.row2', null)}</p>
                          <p>{_.get(content, 'column1.row3', null)}</p>

                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column2.row2', null)}</p>
                            <span>{_.get(content, 'column2.row3', null)}</span>

                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column3.row2', null)}</p>
                            <span>{_.get(content, 'column3.row3', null)}</span>

                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column4.row2', null)}</p>
                            <span>{_.get(content, 'column4.row3', null)}</span>

                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column5.row2', null)}</p>
                            <span>{_.get(content, 'column5.row3', null)}</span>

                            </div>
                         
                              </div>
                              )}
                {/* End of row 2  */}
              {/* Row 3 Layout----------- */}
              {_.get(content, 'column1', null) && _.get(content, 'column2', null) &&  _.get(content, 'column3', null)  && _.get(content, 'column4', null)  && _.get(content, 'column5', null) && (
                        <div className="row w-100 flex ">
                        <div className="cell">
                             <p>{_.get(content, 'column1.row4', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column2.row4', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column3.row4', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column4.row4', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column5.row4', null)}</p>
                            </div>
                         
                              </div>
                              )}
                {/* End of row 3  */}
              {/* Row 4 Layout----------- */}
              {_.get(content, 'column1', null) && _.get(content, 'column2', null) &&  _.get(content, 'column3', null)  && _.get(content, 'column4', null)  && _.get(content, 'column5', null) && (
                        <div className="row w-100 flex ">
                        <div className="cell">
                        <p>{_.get(content, 'column1.row5', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column2.row5', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column3.row5', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column4.row5', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column5.row5', null)}</p>
                            </div>
                         
                              </div>
                              )}
                {/* End of row 4  */}
               {/* Row 5 Layout----------- */}
               {_.get(content, 'column1', null) && _.get(content, 'column2', null) &&  _.get(content, 'column3', null)  && _.get(content, 'column4', null)  && _.get(content, 'column5', null) && (
                        <div className="row w-100 flex ">
                        <div className="cell">
                        <p>{_.get(content, 'column1.row6', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column2.row6', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column3.row6', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column4.row6', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column5.row6', null)}</p>
                            </div>
                             </div>
                              )}
                        {/* End of row 5  */}
                        
                        {/* Row 6 Layout----------- */}
                        {_.get(content, 'column1', null) && _.get(content, 'column2', null) &&  _.get(content, 'column3', null)  && _.get(content, 'column4', null)  && _.get(content, 'column5', null) && (
                        <div className="row w-100 flex ">
                        <div className="cell">
                        <p>{_.get(content, 'column1.row7', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column2.row7', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column3.row7', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column4.row7', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column5.row7', null)}</p>
                            </div>
                         
                              </div>
                              )}
                {/* End of row 6  */}
                {/* Row 7 Layout----------- */}
                {_.get(content, 'column1', null) && _.get(content, 'column2', null) &&  _.get(content, 'column3', null)  && _.get(content, 'column4', null)  && _.get(content, 'column5', null) && (
                        <div className="row w-100 flex ">
                        <div className="cell">
                        <p>{_.get(content, 'column1.row8', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column2.row8', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column3.row8', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column4.row8', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{_.get(content, 'column5.row8', null)}</p>
                            </div>
                         
                              </div>
                              )}
                {/* End of row 7  */}
                {/* Row 8 Layout----------- */}
                {_.get(content, 'column1', null) && _.get(content, 'column2', null) &&  _.get(content, 'column3', null)  && _.get(content, 'column4', null)  && _.get(content, 'column5', null) && (
                        <div className="row w-100 flex ds">
                        <div className="cell">
                        <p>{_.get(content, 'column1.row9', null)}</p>
                            </div>
                            <div className="cell">
                            <p>{markdownify(_.get(content, 'column1.row9b', null))}</p>
                            </div>
                           
                         
                              </div>
                              )}
                {/* End of row 8  */}
                {/* Row 9 Layout----------- */}
                {_.get(content, 'column1', null) && _.get(content, 'column2', null) &&  _.get(content, 'column3', null)  && _.get(content, 'column4', null)  && _.get(content, 'column5', null) && (
                        <div className="row w-100 flex ">
                        <div className="cell">
                            <div className="sh"></div>
                            </div>
                            <div className="cell">
                            <div className="section__actions btn-group">
                            <SectionActions {...this.props} actions={_.get(content, 'column2.actions', null)} />
                            </div> 
                            </div>
                            <div className="cell">
                            <div className="section__actions btn-group">
                            <SectionActions {...this.props} actions={_.get(content, 'column3.actions', null)} />
                            </div>
                            </div>
                            <div className="cell">
                            <div className="section__actions btn-group">
                            <SectionActions {...this.props} actions={_.get(content, 'column4.actions', null)} />
                            </div> 
                            </div>
                            <div className="cell">
                            <div className="section__actions btn-group">
                            <SectionActions {...this.props} actions={_.get(content, 'column5.actions', null)} />
                            </div>
                            </div>
                         
                              </div>
                              )}
                {/* End of row 9  */}
                    </div>
                  
                </div>
                {_.get(content, 'text', null) && (
                <div className="flex flex--col-2 mt-5 text">
                        <div className="cell">
                            <hr className="prs"/>
                            </div>
                         <div className="cell">
                              <h3>{_.get(content, 'text.title', null)}</h3>
                         </div>
                    </div>
                )}
                {_.get(content,'text', null) && (
                        <div className="flex mt-3">
                            <div className="cell">
                                <p>
                                    {_.get(content, 'text.subtitle', null)}
                                </p>
                            </div>
                        </div>
                )}
              </div>
            </section>
        );
    }
}
