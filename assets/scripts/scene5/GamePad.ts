import CarComponent from "./CarComponent"
const { ccclass, property } = cc._decorator

@ccclass
export default class Scene5 extends cc.Component {
  carNode: cc.Node = null
  carComponent: CarComponent = null

  onLoad() {
    this.carNode = cc.find("Canvas/游戏主画面/小车")
    this.carComponent = this.carNode.getComponent("CarComponent")
  }

  start() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this)
  }

  onTouchStart(e: cc.Event.EventTouch) {}
  onTouchMove(e: cc.Event.EventTouch) {
    // e.getLocation() 为点击的位置，是世界坐标，需要使用父节点来把世界坐标转换为本地坐标
    let pos: cc.Vec2 = this.node.parent.convertToNodeSpaceAR(e.getLocation())
    this.node.setPosition(pos)

    // 该点所在的方位 (cos, sin)
    let direction: cc.Vec2 = pos.normalize()
    cc.log(
      `世界坐标：(${e.getLocationX()}, ${e.getLocationY()})
本地坐标：(${pos.x}, ${pos.y})
方位：(cos ${direction.x}, sin ${direction.y})`
    )

    // 限制在边界之内
    let maxR = 100 * 0.8 // 最大距离
    let r: number = cc.Vec2.distance(pos, cc.v2(0, 0)) // 实际距离
    if (r > maxR) {
      pos.x = maxR * direction.x // r * cos
      pos.y = maxR * direction.y // r * sin
    }
    this.node.setPosition(pos)

    // 操作纵目标小车
    /**
     * 求两个向量的夹角，其中 cc.v2(1,0) 表示X轴方向的单位向量
     * 1、不区分正负
     * let radian = aPos.angle(bPos)
     * 2、区分正负
     * let radian = aPos.signAngle(bPos)
     * aPos 位于 bPos 的顺时针方向：角度为正
     * aPos 位于 bPos 的逆时针方向：角度为负
     */
    let radian = pos.signAngle(cc.v2(1, 0)) // 弧度值
    cc.log(`radian: ${radian}`)
    let angle = (radian / Math.PI) * 180

    /**
     * cc.Node.angle 属性：逆时针为正，顺时针为负
     * cc.Node.rotation 属性（官方不推荐使用）：顺时针为正，逆时针为负
     */
    // this.carNode.rotation = angle
    this.carNode.angle = -angle
    this.carComponent.direction = direction
  }
  onTouchEnd(e: cc.Event.EventTouch) {
    this.reset()
  }
  onTouchCancel(e: cc.Event.EventTouch) {
    this.reset()
  }
  reset() {
    this.node.setPosition(cc.v3(0, 0, 0))
    this.carComponent.direction = null
  }
}
