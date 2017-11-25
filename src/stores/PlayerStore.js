import { observable } from "mobx"

export default class PlayerStore {
  // Player の状態と同期させるために必ず action 経由で変更すること
  @observable loopBegin = null
  @observable loopEnd = null
}