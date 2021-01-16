const { ccclass, property } = cc._decorator

@ccclass
export default class Info extends cc.Component {
  label: cc.Label = null
  text: string = null
  index: number = 0

  onLoad() {
    this.label = this.getComponent(cc.Label)
    this.text = this.label.string
    this.label.string = ""
    this.schedule(this.onTimer, 0.3)
  }
  onTimer = () => {
    this.index++
    let str = this.text.substr(0, this.index)
    this.label.string = str
    if (this.index >= this.text.length) {
      this.unschedule(this.onTimer)
    }
  }
}
