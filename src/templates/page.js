import React from 'react';
import _ from 'lodash';
import ReactHtmlParser from 'react-html-parser';

import {Layout} from '../components/index';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <section className="page">
                    <header className="hero">
                        <div className="copy">
                            <h1>{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                            {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                            <h2>{ReactHtmlParser(_.get(this.props, 'pageContext.frontmatter.subtitle'))}</h2>
                            }
                        </div>
                    </header>
                    {ReactHtmlParser(_.get(this.props, 'pageContext.html'))}
                </section>
            </Layout>
        );
    }
}
