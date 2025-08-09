import React from 'react';
import { getClient } from '../../apollo/client';
import { GET_PAGE_BY_NAME } from '../../apollo/queries';
import BodyContainer from '../../components/BodyContainer';
import CustomRenderer from '../../components/CustomRenderer';

const AboutPage = async () => {
    const {data, loading} = await getClient().query({
    query: GET_PAGE_BY_NAME,
    variables: { where: { slug: "about-us" } },
    context: {
      fetchOptions: {
        next: { revalidate: 10 },
      },
    },
  });

  if (loading) return <p>Loading...</p>
  return (
    <article>
      <h1 className="font-display text-3xl mb-8">About Us</h1>
      {data.page.content?.document ?
            <>
              <CustomRenderer document={data.page.content.document} />
              {/* <PrettyJSON data={data.post.content.document} /> */}
            </> : <p>No content</p>
          }
    </article>
  );
};

export default AboutPage;