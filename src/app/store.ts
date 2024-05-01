type Store<T> = Array<T>;

export const store: Store<any> = [];

export const addItem = <T>(item: T) => {
  store.push(item);
};

export const removeItem = <T>(item: T) => {
  store.filter((value: T) => value);
};
