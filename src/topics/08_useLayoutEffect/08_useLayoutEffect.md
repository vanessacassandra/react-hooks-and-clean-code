### React Hooks Flow

![Hooks Flow](https://raw.githubusercontent.com/donavon/hook-flow/master/hook-flow.png)

[Source](https://raw.githubusercontent.com/donavon/hook-flow/master/hook-flow.png)

As seen in the diagram above, `useLayoutEffect` runs after DOM has been updated, but before the browser paints the changes. Thus, it's suitable for mutating the DOM. If we use `useEffect` instead of `useLayoutEffect`, there will be a split second when the screen shows the old value before the new value is rendered. This is because `useEffect` runs after the browser has painted the changes.


## Further Readings

- [useEffect vs useLayoutEffect](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect)
- [When to useLayoutEffect Instead of useEffect](https://daveceddia.com/useeffect-vs-uselayouteffect)
