const createStores = () => {
  return {
    boxStore,
    lineStore,
  }
}

export const stores = createStores()

export const storesContext = createContext(stores)

export const useStores = () => useContext(storesContext)