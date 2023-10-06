import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator

@ccclass('Info')
export default class Info extends Component {
  label: Label | null = null
  text: string = null
  index: number = 0
  onLoad() {
        // this.label = this.getComponent(cc.Label)
        // this.text = this.label.string
        // this.label.string = ""
        // this.schedule(this.onTimer, 0.3)
  }
  onTimer = () => {
        // this.index++
        // let str = this.text.substr(0, this.index)
        // this.label.string = str
        // if (this.index >= this.text.length) {
        // this.unschedule(this.onTimer)
        // }
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class Info extends cc.Component {
//   label: cc.Label = null
//   text: string = null
//   index: number = 0
// 
//   onLoad() {
//     this.label = this.getComponent(cc.Label)
//     this.text = this.label.string
//     this.label.string = ""
//     this.schedule(this.onTimer, 0.3)
//   }
//   onTimer = () => {
//     this.index++
//     let str = this.text.substr(0, this.index)
//     this.label.string = str
//     if (this.index >= this.text.length) {
//       this.unschedule(this.onTimer)
//     }
//   }
// }
