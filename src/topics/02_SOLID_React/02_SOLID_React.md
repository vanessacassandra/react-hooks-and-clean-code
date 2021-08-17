
SOLID is the acronym for five design principles intended to make software designs more understandable, flexible, and maintainable.

- [S: Single Responsibility Principle](#single-responsibility)
- [O: Open Closed Principle](#open-closed)
- [L: Liskov Substitution Principle](#liskov-substitution)
- [I: Interface Segregation Principle](#interface-segregation)
- [D: Dependency Inversion Principle](#dependency-inversion)

## Single Responsibility Principle {#single-responsibility}

Each module should only have one responsibility (only focus on one thing). If more than one responsibility is assumed, it means the code is highly coupled. This kind of code is difficult to understand, extend, and modify.

If a component takes on too many responsibilities, the general approach is to split it into different components.

```jsx
// Bad
const App = () => {
  const users = [
    { id: 1, name: "Leanne", surname: "Graham", age: 20 },
    { id: 2, name: "Erwin", surname: "Howell", age: 20 },
  ];

  return (
    <>
      <Header>Header</Header>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
```

```jsx
// Good
const UserList = () => {
  const users = [
    { id: 1, name: "Leanne", surname: "Graham", age: 20 },
    { id: 2, name: "Erwin", surname: "Howell", age: 20 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const NavBar = () => {
  return <Header>Header</Header>;
};

const App = () => {
  return (
    <>
      <NavBar />
      <UserList />
    </>
  );
};
```

## Open Closed Principle {#open-closed}

Module should be open for extensions and closed for modifications. If someone wants to extend your module, it should be possible without modifying the source code of the module itself.

### Higher Order Component

One way to extend existing component is by using Higher Order Component (HOC). HOC is a function that returns a component.

### Compound Component

Another way to make a component extendable is by using Compound Component pattern.

For example, if we have an Accordion component:

```jsx
const App = () => {
  const options = [
    {title: 'Item 1', details: 'This is the details of item 1'},
    {title: 'Item 2', details: 'This is the details of item 2'}
  ];

  return (<Accordion options={options}>)
}
```

The way Accordion component composed above is making it difficult to extend the component. If there is a requirement, for example, to render a custom component inside the Accordion details, the developer has to modify the Accordion component.

A better way is to use the compound component pattern:

```jsx
const App = () => {
  return (
    <Accordion>
      <AccordionItem value="item1">This is the details of Item 1</AccordionItem>
      <AccordionItem value="item2">This is the details of Item 2</AccordionItem>
    </Accordion>
  );
};
```

The Accordion component is passing the necessary internal value to all the children.

## Liskov Substitution Principle {#liskov-substitution}

Objects in the program should be able to be replaced by their own subclass instances without affecting the behavior of the program (design by contract).

In React, it means that components, hooks, or functions should follow some type of interface. This can be done easily in Typescript.

For example, in the below code, the component User takes anything in the `name` props, even though it is designed based on the assumption that the props type would be String.

```jsx
const App = () => {
  return (
    <div>
      <User name="John" address="11th Avenue" />
    </div>
  );
};
```

We can use Typescript or prop-types to make sure that the only String can be passed in the `name` props.

```tsx
interface IUser {
  name: string;
  address: string;
}

const User = ({ name, address }: IUser) => {
  return (
    <div>
      {name}'s address is at {address}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <User name="John" address="11th Avenue" />
    </div>
  );
};
```

## Interface Segregation Principle {#interface-segregation}

Many small, client-specific interfaces are better than one general purpose interface.

For example, consider a User component that takes in user details data.

```jsx
const App = () => {
  const userDetails = {
    name: "John",
    age: 20,
    address: "7th Meadow Street",
    companyName: "Good Inc",
    companyAddress: "11th Avenue",
  };

  return (
    <div>
      <User details={userDetails} />
    </div>
  );
};
```

Inside the the `User` component, it's tempting to just pass the whole data to the children, even though the children component may not need the whole data.

```jsx
// Bad
const PersonalDetails = ({ data }) => {
  return (
    <>
      <div>Name: {data.name}</div>
      <div>Age: {data.age}</div>
      <div>Addres: {data.address}</div>
    </>
  );
};

const CompanyDetails = ({ data }) => {
  return (
    <>
      <div>Company name: {data.name}</div>
      <div>Company address: {data.address}</div>
    </>
  );
};

const User = ({ details }) => {
  return (
    <div>
      <PersonalDetails data={details} />
      <CompanyDetails data={details} />
    </div>
  );
};
```

Interface Segregation Principle tells us not to depend on things we don't need. Instead of using the same user details interface, `PersonalDetails` and `CompanyDetails` should have their own dedicated interfaces.

Below is a better approach:

```jsx
// Good
const PersonalDetails = ({ name, age, address }) => {
  return (
    <>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Addres: {address}</div>
    </>
  );
};

const CompanyDetails = ({ name, address }) => {
  return (
    <>
      <div>Company name: {name}</div>
      <div>Company address: {address}</div>
    </>
  );
};

const User = ({ details }) => {
  return (
    <div>
      <PersonalDetails name={name} age={age} address={address} />
      <CompanyDetails name={companyName} address={companyAddress} />
    </div>
  );
};
```

## Dependency Inversion Principle {#dependency-inversion}

Rely on abstraction instad of relying on concrete implementation.

Consider the following component:

```jsx
// Bad
const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(REMOTE_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h1> Users List</h1>
      {users.map((user) => (
        <div key={user.name}>{user.name}</div>
      ))}
    </>
  );
};
```

The component is has the implementation of data fetching inside the component itself. If for example, there is a change in the implementation on how to fetch the user data, the change has to be made everywhere.

A better approach is to create an abstraction of the implementation, for example, by using hooks.

```jsx
// Good
const useFetch = (URL) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [URL]);

  return data;
};

const App = () => {
  const users = useFetch(REMOTE_URL);

  return (
    <>
      <h1> Users List</h1>
      {users.map((user) => (
        <div key={user.name}>{user.name}</div>
      ))}
    </>
  );
};
```

When there is a change in the fetch implementation (e.g. using GraphQL or other interface), we only need to make the changes in one place.

## Further Readings

- [Clean Code by Robert C. Martin](https://enos.itcollege.ee/~jpoial/oop/naited/Clean%20Code.pdf)
- [SOLID Principles](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)
- [Applying SOLID Principles in React](https://betterprogramming.pub/how-to-apply-solid-principles-to-clean-your-code-in-react-cdfd5e0a9cea)
