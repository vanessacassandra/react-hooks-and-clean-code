## React Best Practices

### Passing props

```jsx
//Bad
export default function App() {
  return <Navigation showTitle={true} title={"Title"} />;
}
```

```jsx
//Good
export default function App() {
  return <Navigation showTitle title="Title" />;
}
```

### Create separate files for each component

This helps us separate concerns in our application. This means that each file is responsible for just one component and there's no confusion where a component comes from if we want to reuse it across our app.

### Conditional Rendering

```jsx
//Bad
export default function App() {
  return <div>{showNavigation ? <Navigation /> : null}</div>;
}
```

```jsx
//Good
export default function App() {
  return <div>{showNavigation && <Navigation />}</div>;
}
```

```jsx
//Bad
export default function App() {
  return (
    <div>
      {showNavigation && <Navigation />}
      {!showNavigation && <Posts />}
    </div>
  );
}
```

```jsx
//Good
export default function App() {
  return <div>{showNavigation ? <Navigation /> : <Posts />}</div>;
}
```

### Don't Repeat Yourself (DRY)

```jsx
// Bad
const MyComponent = () => (
  <div>
    <OtherComponent type="a" className="colorful" foo={123} bar={456} />
    <OtherComponent type="b" className="colorful" foo={123} bar={456} />
  </div>
);
```

```jsx
const MyOtherComponent = ({ type }) => (
  <OtherComponent type={type} className="colorful" foo={123} bar={456} />
);

const MyComponent = () => (
  <div>
    <MyOtherComponent type="a" />
    <MyOtherComponent type="b" />
  </div>
);
```

### Naming Things

- Boolean variables, or functions that return a boolean value, should start with “is,” “has” or “should.”

```jsx
//Bad
const done = currentValue >= finalValue;
```

```jsx
//Good
const isComplete = currentValue >= finalValue;
```

- Functions should be named for what they do, not how they do it.

```jsx
//Bad
const loadConfigFromServer = () => {};
```

```jsx
//Good
const loadConfig = () => {};
```

### Default Values

```jsx
//Bad
const Icon = ({ className, onClick }) => {
  const additionalClasses = className || "icon-large";
  return <span className={`icon-hover ${additionalClasses}`} onClick={onClick} />;
};
```

```jsx
// Good
const Icon = ({ className = "icon-large", onClick }) => (
  <span className={`icon-hover ${className}`} onClick={onClick} />
);
```

### Object Destructuring

```jsx
//Bad
const Person = (props) => {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Profession: {props.profession} </p>
      <p>Hobby: {props.hobby}</p>
    </>
  );
};
```

```jsx
// Good
const Person = (props) => {
  const { name, age, profession, hobby } = props;
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Profession: {profession} </p>
      <p>Hobby: {hobby}</p>
    </>
  );
};
```

```jsx
// Good
const Person = ({ name, age, profession, hobby }) => {
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Profession: {profession} </p>
      <p>Hobby: {hobby}</p>
    </>
  );
};
```

```jsx
// Good
const Person = ({ name, age, ...others }) => {
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <Details {...others} />
    </>
  );
};
```

### React.Fragment

Use Fragment when grouping a list of children without adding extra nodes.

```jsx
// Bad
const Columns = () => {
  return (
    <div>
      <td>Name</td>
      <td>Age</td>
    </div>
  );
};

const App = () => {
  return (
    <table>
      <tr>
        <Columns />
      </tr>
    </table>
  );
};
```

The above will result in:

```html
<table>
  <tr>
    <div>
      <td>Name</td>
      <td>Age</td>
    </div>
  </tr>
</table>
```

To solve this problem, we use Fragment instead. We can use `<React.Fragment>` or `<>` for the shorthand.

```jsx
// Good
const Columns = () => {
  return (
    <>
      <td>Name</td>
      <td>Age</td>
    </>
  );
};

const App = () => {
  return (
    <table>
      <tr>
        <Columns />
      </tr>
    </table>
  );
};
```

Below is the examples when Fragment is not needed and can be removed instead.

```jsx
// Bad: fragment is redundant
const App = () => {
  return (
    <div>
      <>
        <NavBar />
        <UserList />
      </>
    </div>
  );
};
```

```jsx
// Bad: fragment is redundant
const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <UserList />
      </div>
    </>
  );
};
```

### Suspense and lazy loading

When using `<Suspense>` for lazy loading, we need to use `React.lazy` for the children components so that they will only be fetched when it's needed.

```jsx
import React, { Suspense } from "react";

const Dog = React.lazy(() => import("./Dog"));

const SuspenseExample = () => {
  return (
    <>
      <h1>Code splitting with Suspense and React.lazy</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Dog />
      </Suspense>
    </>
  );
};

export default SuspenseExample;
```

In the above example, `Suspense` takes in `fallback` props to be shown when the `Dog` component is loading.

The most obvious place to use `Suspense` is when doing routing of different pages. If we have `Home`, `About`, and `Contact` pages, we don't need to fetch everything when the user comes to the landing page. We use `Suspense` and `React.lazy` for code-splitting and only fetch the codes that we need on that page.
