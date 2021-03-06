const findAction = (store, type) => store.getActions().find(action => action.type === type);

export const getAction = (store, type) => {
  const action = findAction(store, type);
  if (action) return Promise.resolve(action);

  return new Promise(resolve => {
    store.subscribe(() => {
      const storeAction = findAction(store, type);
      if (storeAction) resolve(storeAction);
    });
  });
};

export const getActionsLength = store => store.getActions().length;
