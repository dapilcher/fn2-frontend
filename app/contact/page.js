import { getClient } from '../../apollo/client';
import { GET_PAGE_BY_NAME } from '../../apollo/queries';
import BodyContainer from '../../components/BodyContainer';
import CustomRenderer from '../../components/CustomRenderer';
import defaultMetadata from '../../lib/metadata';

export const metadata = {
  title: 'Contact | Flightless Nerd',
  description: defaultMetadata.description,
}

const ContactPage = async () => {
  const {data, loading} = await getClient().query({
    query: GET_PAGE_BY_NAME,
    variables: { where: { slug: "contact" } },
    context: {
      fetchOptions: {
        next: { revalidate: 10 },
      },
    },
  });

  if (loading) return <p>Loading...</p>
  return (
    <article className="w-full">
      <h1 className="font-display text-3xl mb-8">Contact</h1>
      {data.page?.content?.document ?
            <>
              <CustomRenderer document={data.page?.content?.document} />
              {/* <PrettyJSON data={data.post.content.document} /> */}
            </> : <p>No content</p>
          }
    </article>
  );
};

export default ContactPage;