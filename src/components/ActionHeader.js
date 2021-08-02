import React from 'react';
import _ from 'lodash';

import { Link ,withPrefix, classNames} from '../utils';

export default class ActionHeader extends React.Component {
    render() {
        let action = _.get(this.props, 'action', null);
        if (typeof window !== 'undefined') {
            var local = JSON.parse(localStorage.getItem('locale')) ; 
            }
            else{
                  local = 'el';
            }
            if (local==='el' && _.get(action, 'label-en', null) !== null){
                var label =  _.get(action, 'label', null)
            }
            else{
                  label =  _.get(action, 'label-en', null)

            }
        return (
            <Link to={withPrefix(_.get(action, 'url', null))}
              {...(_.get(action, 'new_window', null) ? ({target: '_blank'}) : null)}
              {...((_.get(action, 'new_window', null) || _.get(action, 'no_follow', null)) ? ({rel: (_.get(action, 'new_window', null) ? ('noopener ') : '') + (_.get(action, 'no_follow', null) ? ('nofollow') : '')}) : null)}
              className={classNames({'btn': _.get(action, 'style', null) !== 'link', 'btn--secondary': _.get(action, 'style', null) === 'secondary'})}>
                
                  {
                  label
                  }
                  </Link>
        );
    }
}
