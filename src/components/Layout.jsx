import Markdown from "react-markdown";
import headingId from "remark-heading-id";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Article = styled.article`
  grid-row: auto;
  height: calc(100vh - 92px);
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fafafa;
`;

const Example = styled.div`
  padding: 20px;
  max-height: calc(100vh - 92px);
`;

const Header = styled.header`
  padding: 0 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 0.9px 1.5px -18px rgb(0 0 0 / 2%), 0 2.4px 4.1px -18px rgb(0 0 0 / 4%),
    0 5.7px 9.9px -18px rgb(0 0 0 / 5%), 0 19px 33px -18px rgb(0 0 0 / 7%);
  top: 0;
  background-color: white;
`;

const BackButton = styled.button`
  border: none;
  background: transparent;
  font-size: 24px;
  margin-right: 10px;
  cursor: pointer;
`;

const components = {
  code({ node, inline, className, children, ...props }) {
    return !inline ? (
      <SyntaxHighlighter
        language="jsx"
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  img({ alt, ...props }) {
    return <img alt={alt} style={{ maxWidth: "500px" }} {...props} />;
  },
};

const Layout = ({ title, Content, Component }) => {
  return (
    <>
      <Header>
        <BackButton
          type="button"
          onClick={() => {
            window.history.back();
          }}
        >
          ⬅
        </BackButton>
        <h1>{title}</h1>
      </Header>
      <Container>
        <Article>
          <Markdown remarkPlugins={[headingId]} components={components} children={Content} />
        </Article>
        <Example>
          <h2>Code Preview</h2>
          <hr />
          <Component />
        </Example>
      </Container>
    </>
  );
};

export default Layout;
