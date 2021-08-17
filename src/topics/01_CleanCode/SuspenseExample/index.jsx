import React, { Suspense } from "react";

const Dog = React.lazy(() => import("./Dog"));

const SuspenseExample = () => {
  return (
    <>
      <small>src/topics/01_CleanCode/SuspenseExample/index.jsx</small>
      <p>Code splitting with Suspense and React.lazy</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Dog />
      </Suspense>
    </>
  );
};

export default SuspenseExample;
