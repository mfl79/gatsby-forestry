import React from 'react';
import _ from 'lodash';

import safePrefix from '../utils/safePrefix';
import markdownify from '../utils/markdownify';

export default class HeroBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="hero">
                {_.get(this.props, 'section.image') && <img src={safePrefix(_.get(this.props, 'section.image'))}/>}
                <div className="copy">
                    <h1>{_.get(this.props, 'section.title')}</h1>
                    {markdownify(_.get(this.props, 'section.subtitle'))}
                </div>
            </section>
        );
    }
}
