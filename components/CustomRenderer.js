import { DocumentRenderer, DocumentRendererProps } from "@keystone-6/document-renderer";
import slugify from "slugify";
import DropCap from "./DropCap";
import DocumentImage from "./DocumentImage";
import Quote from "./Quote";

const defaultElementRenderers = {
  inline: {
    relationship({ relationship, data }) {
      if (relationship === 'mention') {
        if (data === null || data.data === undefined) {
          return <span>[unknown author]</span>
        } else {
          return <Link href={`/a/${data.data.id}`}>{data.data.name}</Link>;
        }
      }
      if (relationship === 'postMention') {
        if (data === null || data.data === undefined) {
          return <span>[unknown post]</span>
        } else {
          return <Link href={`/p/${data.data.id}`}>{data.data.title}</Link>;
        }
      }
      return null;
    },
  },
  block: {
    paragraph: ({children, textAlign}) => {
      return <p className="mb-12 font-body text-xl leading-relaxed md:text-lg md:font-light md:leading-loose" style={{ textAlign }}>{children}</p>
    },
    heading: ({ level, children, textAlign }) => {
      const Comp = `h${level}`;
      switch (level) {
        case 1:
          return <h1 className="font-display text-2xl md:text-3xl mb-3" style={{ textAlign }}>{children}</h1>;
        case 2:
          return (
            <div className="mt-16 mb-8">
              <h2 className="font-display text-2xl" style={{ textAlign }}>{children}</h2>
              <span className="h-3 w-6 bg-yellow-500 block" />
            </div>
        );
        case 3:
          return <h3 className="font-display text-lg md:text-xl font-medium mb-3" style={{ textAlign }}>{children}</h3>;
        case 4:
          return <h4 className="font-display text-md md:text-lg mb-3" style={{ textAlign }}>{children}</h4>;
        case 5:
          return <h5 className="font-display text-sm md:text-md mb-3" style={{ textAlign }}>{children}</h5>;
        case 6:
          return <h6 className="font-display text-sm md:text-sm mb-3" style={{ textAlign }}>{children}</h6>;
        default:
          return <Comp className="font-display text-xl md:text-2xl mb-3" style={{ textAlign }}>{children}</Comp>;
      }
    },
    list: ({ type, children }) => {
      return <ul className="mb-8 list-inside md:list-outside" style={{
        listStyleType: "circle"
      }}>{children.map((x, i) => (
            <li key={i} className="mb-2 font-body text-lg font-light">{x}</li>
          ))}</ul>
    },
  }
}

const customComponentRenderers = {
  dropCap: props => (
    <DropCap {...props} />
  ),
  documentImage: props => (
    <DocumentImage {...props} />
  ),
  quote: props => (
    <Quote {...props} />
  )
}

const CustomRenderer = ({document}) => {
  return <DocumentRenderer
    document={document}
    renderers={defaultElementRenderers}
    componentBlocks={customComponentRenderers}
    />
}

export default CustomRenderer;