import {Master, MasterI} from "../Master";

export interface CustomerI extends MasterI{
  receiveMsg: (msg: string) => void
}


export class Customer extends Master implements CustomerI {
  public receiveMsg(msg) {
    console.log(`
      ${this.getName()} have received the msg:
        ${msg}
    `)
  }
}
