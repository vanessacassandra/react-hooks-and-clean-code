import raw from "raw.macro";
import Route from "./components/Route";
import { NavigationProvider } from "./NavigationContext";
import Home from "./Home";
import { routes, SLUGS } from "./constants";
import UseMemoExample from "./topics/04_useMemo/UseMemoExample";
import UseCallbackExample from "./topics/05_useCallback/UseCallbackExample";
import OpenClosedPrinciple from "./topics/02_SOLID_React/OpenClosedPrinciple";
import UseReducerExample from "./topics/06_useReducer/UseReducerExample";
import SuspenseExample from "./topics/01_CleanCode/SuspenseExample";
import SingleResponsibility from "./topics/02_SOLID_React/SingleResponsibility";
import LiskovSubstitution from "./topics/02_SOLID_React/LiskovSubstitution";
import InterfaceSegregation from "./topics/02_SOLID_React/InterfaceSegregation";
import DependencyInversion from "./topics/02_SOLID_React/DependencyInversion";
import UseStateExample from "./topics/03_BasicHooks/UseStateExample";
import UseRefExample from "./topics/03_BasicHooks/UseRefExample";
import UseEffectExample from "./topics/03_BasicHooks/UseEffectExample";
import UseContextExample from "./topics/07_useContext/UseContextExample";
import UseLayoutEffectExample from "./topics/08_useLayoutEffect/UseLayoutEffectExample";
import CustomHooks from "./topics/09_CustomHooks";
import styled from "styled-components";
import Layout from "./components/Layout";

const Md_CleanCode = raw("./topics/01_CleanCode/01_CleanCode.md");
const Md_SOLID_React = raw("./topics/02_SOLID_React/02_SOLID_React.md");
const Md_BasicHooks = raw("./topics/03_BasicHooks/03_BasicHooks.md");
const Md_useMemo = raw("./topics/04_useMemo/04_useMemo.md");
const Md_useCallback = raw("./topics/05_useCallback/05_useCallback.md");
const Md_useReducer = raw("./topics/06_useReducer/06_useReducer.md");
const Md_useContext = raw("./topics/07_useContext/07_useContext.md");
const Md_useLayoutEffect = raw("./topics/08_useLayoutEffect/08_useLayoutEffect.md");
const Md_CustomHooks = raw("./topics/09_CustomHooks/09_CustomHooks.md");

const Container = styled.div`
  margin: 0 auto;
`;

const findTitle = (routes, href) => {
  const currentRoute = routes.find((route) => {
    if (route.subLinks) {
      return route.subLinks.find((x) => x.href === href);
    }

    return route.href === href;
  });

  return currentRoute?.title;
};

function App() {
  const routeContent = {
    [SLUGS.cleanCode]: { content: Md_CleanCode, example: SuspenseExample },
    [SLUGS.solidSingleResponsibility]: { content: Md_SOLID_React, example: SingleResponsibility },
    [SLUGS.solidOpenClosed]: { content: Md_SOLID_React, example: OpenClosedPrinciple },
    [SLUGS.solidLiskovSubstitution]: { content: Md_SOLID_React, example: LiskovSubstitution },
    [SLUGS.solidInterfaceSegregation]: { content: Md_SOLID_React, example: InterfaceSegregation },
    [SLUGS.solidDependencyInversion]: { content: Md_SOLID_React, example: DependencyInversion },
    [SLUGS.useState]: { content: Md_BasicHooks, example: UseStateExample },
    [SLUGS.useEffect]: { content: Md_BasicHooks, example: UseEffectExample },
    [SLUGS.useRef]: { content: Md_BasicHooks, example: UseRefExample },
    [SLUGS.useMemo]: { content: Md_useMemo, example: UseMemoExample },
    [SLUGS.useCallback]: { content: Md_useCallback, example: UseCallbackExample },
    [SLUGS.useReducer]: { content: Md_useReducer, example: UseReducerExample },
    [SLUGS.useContext]: { content: Md_useContext, example: UseContextExample },
    [SLUGS.useLayoutEffect]: { content: Md_useLayoutEffect, example: UseLayoutEffectExample },
    [SLUGS.customHooks]: { content: Md_CustomHooks, example: CustomHooks },
  };

  return (
    <Container>
      <NavigationProvider>
        <Route href="/" render={() => <Home />} />
        {Object.entries(routeContent).map(([key, value]) => {
          const title = findTitle(routes, key);

          return (
            <Route
              key={key}
              href={key}
              render={() => (
                <Layout title={title} Content={value.content} Component={value.example} />
              )}
            />
          );
        })}
      </NavigationProvider>
    </Container>
  );
}

export default App;
