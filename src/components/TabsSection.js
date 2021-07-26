import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import _ from 'lodash';
import SectionActions from './SectionActions';
import {markdownify} from '../utils';

export default class TabsSection extends React.Component {
  render() {
      let section = _.get(this.props, 'section', null);
      return (
          <section className="section section--tabs">
             <Tabs>
                <TabList>
                  <Tab>{_.get(section, 'tab1_label', null)}</Tab>
                  <Tab>{_.get(section, 'tab2_label', null)}</Tab>
                  <Tab>{_.get(section, 'tab3_label', null)}</Tab>
                  <Tab>{_.get(section, 'tab4_label', null)}</Tab>

                </TabList>
                {/* tab1 */}
                <TabPanel>
                <h3 className="title">{_.get(section, 'size_label', null)}</h3>
                <p className="content">{markdownify(_.get(section, 'tab1.text2', null))}</p>
                <p className="content">{markdownify(_.get(section, 'tab1.text', null))}</p>
                <h3 className="title">{_.get(section, 'period_label', null)}</h3>
                   <div className="section__actions btn-group">
                            <SectionActions {...this.props} actions={_.get(section, 'tab1.actions', null)} />
                  </div>
                </TabPanel>
                {/* end tab1 */}
                {/* tab2 */}
                <TabPanel>
                <h3 className="title">{_.get(section, 'size_label', null)}</h3>
                <p className="content">{markdownify(_.get(section, 'tab2.text2', null))}</p>
                <p className="content">{markdownify(_.get(section, 'tab2.text', null))}</p>
                <h3 className="title">{_.get(section, 'period_label', null)}</h3>
                  <div className="section__actions btn-group">
                            <SectionActions {...this.props} actions={_.get(section, 'tab2.actions', null)} />
                  </div>
                </TabPanel>
                {/* end tab2 */}
                  {/* tab3 */}
                  <TabPanel>
                  <h3 className="title">{_.get(section, 'size_label', null)}</h3>
                  <p className="content">{markdownify(_.get(section, 'tab3.text2', null))}</p>
                <p className="content">{markdownify(_.get(section, 'tab3.text', null))}</p>
                <h3 className="title">{_.get(section, 'period_label', null)}</h3>
                  <div className="section__actions btn-group">
                            <SectionActions {...this.props} actions={_.get(section, 'tab3.actions', null)} />
                  </div>
                   </TabPanel>
                {/* end tab3 */}
                  {/* tab4 */}
                  <TabPanel>
                  <h3 className="title">{_.get(section, 'size_label', null)}</h3>
                  <p className="content">{markdownify(_.get(section, 'tab4.text2', null))}</p>
                <p className="content">{markdownify(_.get(section, 'tab4.text', null))}</p>
                <h3 className="title">{_.get(section, 'period_label', null)}</h3>
                  <div className="section__actions btn-group">
                            <SectionActions {...this.props} actions={_.get(section, 'tab4.actions', null)} />
                  </div>
                </TabPanel>
                {/* end tab5 */}
          </Tabs>
          </section>
      );
  }
}
