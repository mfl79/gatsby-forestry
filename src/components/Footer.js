import React from 'react';
import _ from 'lodash';

import markdownify from '../utils/markdownify';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer container">
                <div className="copyright">{markdownify(_.get(this.props, 'pageContext.site.siteMetadata.footer.content'))}</div>
                <nav>
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links'), (link_item, link_item_idx) => (
                        <a key={link_item_idx} className="subtle-link" href={_.get(link_item, 'url')} {...(_.get(link_item, 'new_window') ? {target: '_blank'} : null)}>{_.get(link_item, 'text')}</a>
                    ))}
                </nav>
            </footer>
        );
    }
}
