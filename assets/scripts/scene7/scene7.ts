import BulletComponent from "./BulletComponent"
const { ccclass, property } = cc._decorator

@ccclass
export default class Scene7 extends cc.Component {
  @property(cc.Sprite)
  cannonSprite: cc.Sprite = null
  @property(cc.SpriteFrame)
  bulletIcon: cc.SpriteFrame = null
  @property(cc.SpriteFrame)
  explodeEffect: cc.SpriteFrame = null

  onLoad() {
    this.cannonSprite.node.on(cc.Node.EventType.TOUCH_START, this.fire, this)
  }

  fire() {
    if (!this.bulletIcon) {
      cc.log("请设置 bulletIcon 图片")
      return
    }

    // 动态创建一个 Node，添加 Sprite 组件
    let bulletNode: cc.Node = new cc.Node()
    let bulletSprite: cc.Sprite = bulletNode.addComponent(cc.Sprite)
    bulletSprite.spriteFrame = this.bulletIcon

    bulletNode.parent = this.cannonSprite.node // 作为子节点
    bulletNode.setPosition(cc.v3(0, 70, 0)) // 设置初始位置

    // 加持一个脚本组件
    let script: BulletComponent = bulletNode.addComponent(BulletComponent)
    script.explodeEffect = this.explodeEffect
  }

  onBtnClick(target: cc.Event.EventTouch, data: string) {
    if (data === "open-scene1") {
      cc.director.loadScene("scene1")
    }
  }
}
