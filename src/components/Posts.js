import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import safePrefix from '../utils/safePrefix';

export default class Posts extends React.Component {
    render() {
        let display_posts = _.get(this.props, 'pageContext.pages').filter(page => page.relativeDir === 'posts').slice(0, _.get(this.props, 'section.num_posts_displayed'));
        return (
            <section id={_.get(this.props, 'section.section_id')} className="posts">
                {_.map(_.orderBy(display_posts, 'frontmatter.date', 'desc'), (post, post_idx) => (
                <a key={post_idx} href={safePrefix(_.get(post, 'url'))} className="article-teaser">
                    {_.get(post, 'frontmatter.thumb_img_path') && <img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))}
                                                   alt={_.get(post, 'frontmatter.title')}/>}
                    <div className="copy">
                        <h2>{_.get(post, 'frontmatter.title')}</h2>
                        <h3 className="publish-date">Published on {moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</h3>
                        <p className="summary">{_.get(post, 'frontmatter.excerpt')}</p>
                        <div className="text-link">Read more</div>
                    </div>
                </a>
                ))}
            </section>
        );
    }
}
