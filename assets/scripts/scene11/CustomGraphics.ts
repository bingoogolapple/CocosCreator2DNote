const { ccclass, property } = cc._decorator

@ccclass
export default class CustomGraphics extends cc.Graphics {
  start() {
    this.drawToCustomGraphics()
  }

  /**
   * 绘制到自定义 Graphics 组件上，能在场景编辑器中预览
   */
  drawToCustomGraphics() {
    // 场景编辑器中预览时就会打印该日志
    cc.log("CustomGraphics 开始绘制")
    this.moveTo(0, 0)
    this.lineTo(100, 0)
    this.lineTo(100, 100)
    this.close()
    this.fillColor = new cc.Color().fromHEX("#ffff00")
    this.fill()

    this.moveTo(0, 0)
    this.lineTo(-100, 0)
    this.lineTo(-100, -100)
    this.close()
    this.lineWidth = 5
    this.strokeColor = new cc.Color().fromHEX("#00ffff")
    this.stroke()

    this.rect(0, 0, 25, 25)
    this.stroke()
    this.fillRect(-25, -25, 25, 25)
  }
}
