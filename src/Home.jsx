import React from "react";
import styled from "styled-components";
import { routes } from "./constants";

const Container = styled.div`
  display: flex;
  padding: 20px;
  max-width: 700px;
  margin: 0 auto;
  flex-direction: column;
`;

const Link = styled.a`
  margin-bottom: 10px;
`;

const List = styled.ul`
  margin-top: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Home = () => {
  return (
    <Container>
      <h1>React Hooks and Clean Code</h1>
      {routes.map((route, key) => (
        <React.Fragment key={route.title}>
          <Link href={route.href}>
            {key + 1}. {route.title}
          </Link>
          {route.subLinks && (
            <List>
              {route.subLinks.map((subroute) => (
                <ListItem key={subroute.href}>
                  <Link href={subroute.href}>{subroute.title}</Link>
                </ListItem>
              ))}
            </List>
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Home;
