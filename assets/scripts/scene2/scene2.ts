const { ccclass, property } = cc._decorator

@ccclass
export default class Scene2 extends cc.Component {
  @property(cc.ToggleContainer)
  toggleContainer: cc.ToggleContainer

  @property(cc.EditBox)
  usernameEb: cc.EditBox
  @property(cc.EditBox)
  passwordEb: cc.EditBox

  onBtnClick(target: cc.Event.EventTouch, data: string) {
    if (data === "login") {
      cc.log(
        `用户名：${this.usernameEb.string} 密码：${this.passwordEb.string}`
      )
    }
  }
  onClickToggleContainer(target: cc.Toggle, data: string) {
    cc.log(target)
    if (data === "men") {
      cc.log("选择：男")
    } else if (data === "women") {
      cc.log("选择：女")
    }
    // this.toggleContainer.toggleItems
    // Toggle.isChecked 如果这个设置为 true，则 check mark 组件会处于 enabled 状态，否则处于 disabled 状态
    // Toggle.toggleGroup 这个属性是可选的。如果这个属性为 null，则 Toggle 是一个 CheckBox，否则，Toggle 是一个 RadioButton
  }

  onClickFruits(target: cc.Toggle, data: string) {
    if (target.isChecked) {
      cc.log(`选择：${target.node.name} ${data}`)
    } else {
      cc.log(`取消选择：${target.node.name} ${data}`)
    }
  }

  editingDidBegan(target: cc.EditBox, data: string) {
    cc.log("editingDidBegan", target, data)
  }

  textChanged(text: string, target: cc.EditBox, data: string) {
    cc.log("textChanged", text, target, data)
  }

  editingDidEnded(target: cc.EditBox, data: string) {
    cc.log("editingDidEnded", target, data)
  }

  editingReturn(target: cc.EditBox, data: string) {
    cc.log("editingReturn", target, data)
  }
}
