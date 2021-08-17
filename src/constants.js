export const SLUGS = {
  cleanCode: "/clean-code",
  solid: "/solid-in-react",
  solidSingleResponsibility: "/solid-single-responsibility",
  solidOpenClosed: "/solid-open-closed",
  solidLiskovSubstitution: "/solid-liskov-substitution",
  solidInterfaceSegregation: "/solid-interface-segregation",
  solidDependencyInversion: "/solid-dependency-inversion",
  useState: "/use-state",
  useEffect: "/use-effect",
  useRef: "/use-ref",
  useMemo: "/use-memo",
  useCallback: "/use-callback",
  useReducer: "/use-reducer",
  useContext: "/use-context",
  useLayoutEffect: "/use-layout-effect",
  customHooks: "/custom-hooks",
};

export const routes = [
  { title: "React Clean Code", href: SLUGS.cleanCode },
  {
    title: "Applying SOLID Principles in React",
    subLinks: [
      { title: "Single Responsibility Principle", href: SLUGS.solidSingleResponsibility },
      { title: "Open Closed Principle", href: SLUGS.solidOpenClosed },
      { title: "Liskov Substitution Principle", href: SLUGS.solidLiskovSubstitution },
      { title: "Interface Segregation Principle", href: SLUGS.solidInterfaceSegregation },
      { title: "Dependency Inversion Principle", href: SLUGS.solidDependencyInversion },
    ],
  },
  {
    title: "Overview of useState, useEffect, and useRef",
    subLinks: [
      { title: "useState", href: SLUGS.useState },
      { title: "useEffect", href: SLUGS.useEffect },
      { title: "useRef", href: SLUGS.useRef },
    ],
  },
  { title: "useMemo", href: SLUGS.useMemo },
  { title: "useCallback", href: SLUGS.useCallback },
  { title: "useReducer", href: SLUGS.useReducer },
  { title: "useContext", href: SLUGS.useContext },
  { title: "useLayoutEffect", href: SLUGS.useLayoutEffect },
  { title: "Custom Hooks", href: SLUGS.customHooks },
];
