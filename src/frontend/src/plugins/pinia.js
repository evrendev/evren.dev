import { createPinia } from "pinia";

const Pinia = createPinia();

Pinia.use((context) => {
  const storeId = context.store.$id;
  const serializer = {
    serialize: JSON.stringify,
    deserialize: JSON.parse,
  };

  const fromStorage = serializer.deserialize(window.localStorage.getItem(storeId));

  if (fromStorage) context.store.$patch(fromStorage);

  context.store.$subscribe((mutation, state) => {
    window.localStorage.setItem(storeId, serializer.serialize(state));
  });
});

export default Pinia;
