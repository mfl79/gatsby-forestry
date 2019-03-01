import React from 'react';
import _ from 'lodash';

import safePrefix from '../utils/safePrefix';

export default class Header extends React.Component {
    render() {
        return (
            <header id='header' className='header container'>
                <a href={safePrefix(_.get(this.props, 'pageContext.site.pathPrefix') || '/')} className='logo'>{_.get(this.props, 'pageContext.site.siteMetadata.header.content')}</a>
                {(_.get(this.props, 'pageContext.menus.main') && _.get(this.props, 'pageContext.site.siteMetadata.header.has_nav')) && 
                <nav>
                    {_.map(_.get(this.props, 'pageContext.menus.main'), (item, item_idx) => (
                    <a key={item_idx} className={'nav-link' + ((_.get(this.props, 'pageContext.url') === _.get(item, 'url')) ? ' active' : '')} href={(_.get(item, 'url').startsWith('#') ? _.get(item, 'url') : safePrefix(_.get(item, 'url')))}>{_.get(item, 'title')}</a>
                    ))}
                </nav>
                }
            </header>
        );
    }
}
