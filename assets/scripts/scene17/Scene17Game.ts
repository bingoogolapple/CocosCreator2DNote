const { ccclass, property } = cc._decorator

@ccclass
export default class Scene17Game extends cc.Component {
  @property(cc.Node)
  circleNode: cc.Node = null
  @property(cc.Node)
  rectNode: cc.Node = null

  @property(cc.Node)
  turntableNode: cc.Node = null

  circleProbabilityArr: number[] = [
    30,
    40,
    50,
    60,
    65,
    75,
    76,
    81,
    91,
    96,
    98,
    100
  ]
  circlePrizeArr: string[] = [
    "谢谢参与",
    "10元话费",
    "雨伞",
    "富光水杯",
    "小爱同学",
    "旅游背包",
    "oppo手机",
    "体重秤",
    "现金红包",
    "房卡",
    "手机支架",
    "充电宝"
  ]

  playing: boolean = false

  onLoad() {}

  changeToCircle() {
    this.circleNode.active = true
    this.rectNode.active = false
  }

  changeToRect() {
    this.rectNode.active = true
    this.circleNode.active = false
  }

  circleStart() {
    if (this.playing) {
      return
    }

    this.playing = true
    let circleProbability = this.getCircleProbability()
    console.log(
      `抽中的是：${circleProbability} 奖品是：${this.circlePrizeArr[circleProbability]}`
    )

    // 1、将上一轮最终 angle 重置到 [-360, 0] 区域，上一轮旋转「circleProbability * 30」度后 angle 变为了「-circleProbability * 30」
    this.resetRangeAngle()
    // 2、这一轮再次旋转「-circleProbability * 30 + 360」度后相当于刚好转了一整圈，又指向了起点，此时 angle 变为了 -360
    let rotation = this.turntableNode.angle + 360
    // 3、在新起点的基础上再次旋转「circleProbability * 30」度进行抽奖
    rotation += circleProbability * 30
    if (rotation < 360) {
      // 避免真正抽时奖旋转未满一圈，加上 360
      rotation += 360
    }

    // 避免旋转时间太短，提前旋转两圈
    let act_1 = cc.rotateBy(2, 360 * 4).easing(cc.easeCubicActionIn()) // 由慢到快
    // 真正的抽奖旋转
    let act_2 = cc
      .rotateBy(rotation / 200.0, rotation)
      .easing(cc.easeCubicActionOut()) // 由快到慢
    let seq = cc.sequence(
      act_1,
      act_2,
      cc.callFunc(() => {
        this.playing = false
      })
    )
    this.turntableNode.runAction(seq)
  }

  // 将上一轮最终 angle 重置到 [-360, 0] 区域，上一轮旋转「circleProbability * 30」度后 angle 变为了「-circleProbability * 30」
  private resetRangeAngle() {
    let angle = this.turntableNode.angle
    while (true) {
      if (angle < -360) {
        angle = angle + 360
      } else if (angle >= 0) {
        angle = angle - 360
      } else {
        break
      }
    }
    this.turntableNode.angle = angle
  }

  // 根据概率 返回抽奖的角标
  getCircleProbability() {
    let circleProbability = Math.random() * 100

    let length = this.circleProbabilityArr.length
    for (let i = 0; i < length; i++) {
      if (circleProbability < this.circleProbabilityArr[i]) {
        return i
      }
    }
    return 0
  }

  rectStart() {
    cc.log("rectStart")
  }
}
