import { DocumentRenderer, DocumentRendererProps } from "@keystone-6/document-renderer";
import DropCap from "./DropCap";

const defaultElementRenderers = {
  block: {
    paragraph: ({children, textAlign}) => {
      return <p className="mb-8 font-body text-lg font-light" style={{ textAlign }}>{children}</p>
    },
    heading: ({ level, children, textAlign }) => {
      const Comp = `h${level}`;
      switch (level) {
        case 1:
          return <h1 className="font-display text-2xl md:text-3xl mb-3" style={{ textAlign }}>{children}</h1>;
        case 2:
          return <h2 className="font-display text-xl md:text-2xl font-bold mb-3" style={{ textAlign }}>{children}</h2>;
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
    }
  }
}

const customComponentRenderers = {
  dropCap: props => (
    <DropCap {...props} />
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