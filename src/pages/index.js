import React from 'react';

import Layout from '../components/layout';
import Title from '../components/title';
import ArticleList from '../components/article-list';

export default ({ data }) => (
  <Layout>
    <Title text={data.site.siteMetadata.title} />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, magna vitae pharetra sagittis, libero orci vehicula nulla, nec laoreet diam massa et tortor. Sed tincidunt est sit amet velit varius mollis. Curabitur dapibus et nibh a fringilla. Morbi nec neque viverra, feugiat nunc sed, facilisis est. In at congue arcu. Donec congue ullamcorper dapibus. Morbi at mauris pretium, posuere urna ac, consequat quam. Nullam feugiat sem dolor. Proin fermentum rhoncus purus, ut lobortis ante tristique sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce imperdiet diam ante, id malesuada ipsum commodo id. Pellentesque molestie tempus mollis. Proin ex quam, convallis posuere tortor vitae, euismod lobortis elit. Mauris eget sapien sit amet diam ullamcorper sodales eu eu ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    </p>
    <ArticleList />
  </Layout>
);

export const query = graphql `query {
  site {
    siteMetadata {
      title
    }
  }
}`;
