import { DocumentRenderer, DocumentRendererProps } from "@keystone-6/document-renderer";
import DropCap from "./DropCap";

const defaultElementRenderers = {
  block: {
    paragraph: ({children, textAlign}) => {
      return <p className="mb-8 font-body text-lg" style={{ textAlign }}>{children}</p>
    },
    heading: ({ level, children, textAlign }) => {
      const Comp = `h${level}`;
      return <Comp className="font-display text-xl md:text-2xl mb-3 md:mb-2" style={{ textAlign }}>{children}</Comp>;
    },
    list: ({ type, children }) => {
      return <ul className="mb-8 list-inside md:list-outside" style={{
        listStyleType: "circle"
      }}>{children.map((x, i) => (
            <li key={i} className="mb-2">{x}</li>
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