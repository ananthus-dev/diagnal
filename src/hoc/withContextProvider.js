const withContextProvider = (ctxProvider, component) => {
  const ContextProvider = ctxProvider;
  const Component = component;
  return function () {
    return (
      <ContextProvider>
        <Component />
      </ContextProvider>
    );
  };
};

export default withContextProvider;
