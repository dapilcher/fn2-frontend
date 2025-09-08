import { gql } from '@apollo/client';

const GET_ALL_POSTS = gql`
  query GET_ALL_POSTS($take: Int, $skip: Int) {
    posts(where: { status: { equals: "PUBLISHED"} }, orderBy: [{ publishedAt: desc}], take: $take, skip: $skip) {
      author {
        id
        name
      }
      title
      slug
      id
      publishedAt
      updatedAt
      headerImage {
        base64URL
        image {
          url
          height
          width
        }
      }
      headerAltText
      blurb
      tags {
        name
        slug
        id
      }
      popularScore
    }
  }
`;

const GET_POPULAR_POSTS = gql`
  query GET_POPULAR_POSTS($take: Int) {
    posts: getPopularPosts(take: $take) {
      author {
        id
        name
      }
      title
      slug
      id
      headerImage {
        base64URL
        image {
          url
          height
          width
        }
      }
      headerAltText
      blurb
      tags {
        name
        slug
        id
      }
    }
  }
`;

const GET_POSTS_WHERE = gql`
  query GET_POSTS_WHERE($where: PostWhereUniqueInput!, $take: Int, $skip: Int) {
    posts(where: { status: { equals: "PUBLISHED"} }, orderBy: [{ publishedAt: desc}], take: $take, skip: $skip) {
      author {
        id
        name
      }
      title
      slug
      id
      headerImage {
        base64URL
        image {
          url
          height
          width
        }
      }
      headerAltText
      blurb
      tags {
        name
        slug
        id
      }
    }
  }
`;

const GET_FEATURED_POSTS = gql`
  query GET_FEATURED_POSTS {
    posts(where: { status: { equals: "PUBLISHED"}, featured: { equals: true } }, orderBy: [{ publishedAt: desc}]) {
      author {
        id
        name
      }
      title
      slug
      id
      headerImage {
        base64URL
        image {
          url
          height
          width
        }
      }
      headerAltText
      blurb
      tags {
        name
        slug
        id
      }
    }
  }
`;

const GET_HEADERIMAGE_BY_SLUG = gql`
  query GET_HEADERIMAGE_BY_SLUG($slug: String!) {
    post(where: { slug: { equals: $slug} }) {
      headerImage {
        base64URL
        image {
          url
          height
          width
        }
      }
      headerAltText
    }
  }
`;

const GET_ALL_PUBLISHED_SLUGS_WITH_MODIFIED = gql`
  query GET_ALL_PUBLISHED_SLUGS_WITH_MODIFIED {
    posts(where: { status: { equals: "PUBLISHED"} }) {
      slug
      updatedAt
    }
  }
`;

const GET_RECENT_POST_TITLES = gql`
  query GET_RECENT_POST_TITLES($take: Int, $skip: Int) {
    posts(where: { status: { equals: "PUBLISHED"} }, orderBy: [{ publishedAt: desc}], take: $take, skip: $skip) {
      title
      id
      slug
      headerImage {
        base64URL
        image {
          url
          height
          width
        }
      }
      headerAltText
    }
  }
`;

const GET_AUTHOR = gql`
  query GET_AUTHOR($where: UserWhereUniqueInput!) {
    user(where: $where) {
      name
    }
  }
`;

const GET_AUTHOR_POSTS = gql`
  query GET_AUTHOR_POSTS($where: UserWhereUniqueInput!, $take: Int, $skip: Int) {
    user(where: $where) {
      id
      name
      posts(where: { status: { equals: "PUBLISHED"} }, orderBy: [{ publishedAt: desc }], take: $take, skip: $skip) {
        title
        slug
        tags {
          name
          slug
          id
        }
        author {
          id
          name
        }
        id
        headerImage {
          base64URL
          image {
            url
            height
            width
          }
        }
        blurb
        tags {
          name
          id
        }
      }
    }
  }
`;

const GET_TAG = gql`
  query GET_TAG($tagWhere: TagWhereUniqueInput!) {
  tag(where: $tagWhere) {
    name
  }
}
`;

const GET_ALL_TAGS = gql`
  query GET_ALL_TAG {
  tag {
    name
  }
}
`;

const GET_TAG_POSTS = gql`
  query GET_TAG_POSTS($tagWhere: TagWhereUniqueInput!, $take: Int, $skip: Int) {
  tag(where: $tagWhere) {
    id
    slug
    name
    posts(where: { status: { equals: "PUBLISHED"} }, orderBy: [{ publishedAt: desc }], take: $take, skip: $skip) {
      tags {
        id
        slug
        name
      }
      author {
        id
        name
      }
      title
      slug
      headerImage {
        base64URL
        image {
          url
          height
          width
        }
      }
      headerAltText
      blurb
      id
    }
  }
}
`;

const GET_POST_BY_ID = gql`
  query GET_POST_BY_ID($where: PostWhereUniqueInput!) {
    post(where: $where) {
      id
      views
      uniqueVisitors
      avgTimeOnPage
      slug
      author {
        id
        name
      }
      createdAt
      publishedAt
      updatedAt
      title
      tags {
        name
        id
      }
      status
      content {
        document(hydrateRelationships: true)
      }
      headerImage {
        base64URL
        image {
          url
          height
          width
        }
      }
      headerImageAttribution
      headerImageAttributionUrl
      # relatedPosts(take: 4) {
      #   title
      #   id
      #   slug
      #   headerAltText
      # }
    }
  }
`;

const GET_PAGE_BY_NAME = gql`
  query GET_PAGE_BY_NAME($where: PageWhereUniqueInput!) {
    page(where: $where) {
      content {
        document
      }
    }
  }
`;

export {
  GET_ALL_POSTS,
  GET_POPULAR_POSTS,
  GET_POSTS_WHERE,
  GET_FEATURED_POSTS,
  GET_HEADERIMAGE_BY_SLUG,
  GET_ALL_PUBLISHED_SLUGS_WITH_MODIFIED,
  GET_RECENT_POST_TITLES,
  GET_AUTHOR,
  GET_AUTHOR_POSTS,
  GET_POST_BY_ID,
  GET_TAG,
  GET_ALL_TAGS,
  GET_TAG_POSTS,
  GET_PAGE_BY_NAME
}