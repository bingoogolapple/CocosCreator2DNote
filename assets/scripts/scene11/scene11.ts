const { ccclass, property } = cc._decorator

@ccclass
export default class Scene11 extends cc.Component {
  @property(cc.Graphics)
  systemGraphic: cc.Graphics = null

  onLoad() {
    // 开启物理系统
    cc.director.getPhysicsManager().enabled = true
    // cc.director.getPhysicsManager().debugDrawFlags =
    //   cc.PhysicsManager.DrawBits.e_aabbBit |
    //   cc.PhysicsManager.DrawBits.e_jointBit |
    //   cc.PhysicsManager.DrawBits.e_shapeBit

    this.drawToSystemGraphics()
  }

  /**
   * 绘制到系统 Graphics 组件上，不能在场景编辑器中预览
   */
  drawToSystemGraphics() {
    this.systemGraphic.moveTo(0, 0)
    this.systemGraphic.lineTo(100, 0)
    this.systemGraphic.lineTo(100, 100)
    this.systemGraphic.close()
    this.systemGraphic.fillColor = new cc.Color().fromHEX("#ff0000")
    this.systemGraphic.fill()

    this.systemGraphic.moveTo(0, 0)
    this.systemGraphic.lineTo(-100, 0)
    this.systemGraphic.lineTo(-100, -100)
    this.systemGraphic.close()
    this.systemGraphic.lineWidth = 5
    this.systemGraphic.strokeColor = new cc.Color().fromHEX("#00ff00")
    this.systemGraphic.stroke()

    this.systemGraphic.rect(0, 0, 25, 25)
    this.systemGraphic.stroke()
    this.systemGraphic.fillRect(-25, -25, 25, 25)
  }
}
