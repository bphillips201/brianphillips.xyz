import React, { ReactNode } from "react"
import Markdown from "markdown-to-jsx"
import { Link } from "gatsby"

const CustomMarkdown = ({ children }: any) => {
  return (
    <Markdown
        options={{
          namedCodesToUnicode: {
            separator: "|",
            openbracket: "[",
            closebracket: "]",
          },
          overrides: {
            RenderOnly: props => props.children,
            pre: props => <div {...props} />,
            a: props => {
              const text = props.children[0]
              const linkTo = props.href
              if (linkTo.includes("http") || linkTo.includes("mailto")) {
                return (
                  <a
                    href={linkTo}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {text}
                  </a>
                )
              }

              return <Link to={linkTo}>{text}</Link>
            },
          },
        }}
      >
        {children}
      </Markdown>
  )
}

export default CustomMarkdown
