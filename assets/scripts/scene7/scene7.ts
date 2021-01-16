import BulletComponent from "./BulletComp"
const { ccclass, property } = cc._decorator

@ccclass
export default class Scene7 extends cc.Component {
  static bulletPool: cc.NodePool = new cc.NodePool()
  @property(cc.Prefab)
  bulletPrefab: cc.Prefab = null

  @property(cc.Sprite)
  cannonSprite: cc.Sprite = null
  @property(cc.SpriteFrame)
  bulletFrame: cc.SpriteFrame = null
  @property(cc.SpriteFrame)
  explodeEffectFrame: cc.SpriteFrame = null

  onLoad() {
    // for (let i = 0; i < 100; i++) {
    //   let node = cc.instantiate(this.bulletPrefab)
    //   Scene7.bulletPool.put(node)
    // }

    this.cannonSprite.node.on(cc.Node.EventType.TOUCH_START, this.fire, this)
  }

  fire() {
    if (!this.bulletFrame) {
      cc.log("请设置 bulletIcon 图片")
      return
    }

    // // 从池子里取得现成的节点
    // let bulletNode = Scene7.bulletPool.get()
    // // 池子里的节点如果不够多，就创建一个
    // if (bulletNode == null) {
    //   bulletNode = cc.instantiate(this.bulletPrefab)
    // }

    // 动态创建一个 Node，添加 Sprite 组件
    let bulletNode: cc.Node = new cc.Node()
    let bulletSprite: cc.Sprite = bulletNode.addComponent(cc.Sprite)
    bulletSprite.spriteFrame = this.bulletFrame

    bulletNode.parent = this.cannonSprite.node // 作为子节点
    bulletNode.setPosition(cc.v3(0, 70, 0)) // 设置初始位置

    // 加持一个脚本组件
    let script: BulletComponent = bulletNode.addComponent(BulletComponent)
    script.explodeEffect = this.explodeEffectFrame
  }

  onBtnClick(target: cc.Event.EventTouch, data: string) {
    if (data === "open-scene1") {
      cc.director.loadScene("scene1")
    }
  }
}
