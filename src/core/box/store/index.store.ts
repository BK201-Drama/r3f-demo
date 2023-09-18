class BoxStore {
  constructor() {
    makeAutoObservable(this)
  }
}

export const boxStore = new BoxStore()
