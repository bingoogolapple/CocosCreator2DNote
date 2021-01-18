const { ccclass, property } = cc._decorator

@ccclass
export default class Scene14Game extends cc.Component {
  @property(cc.Node)
  spikeTopNode: cc.Node = null
  @property(cc.Node)
  enemyNode: cc.Node = null
  @property(cc.Node)
  playerNode: cc.Node = null
  @property(cc.Node)
  boomNode: cc.Node = null
  @property(cc.Label)
  scoreLabel: cc.Label = null

  isFire: boolean = false
  fireAction: cc.Action = null
  playerAction: cc.Action = null
  enemyAction: cc.Action = null
  score: number = 0

  onLoad() {
    this.placePlayer()
    this.placeEnemy()
    this.playerNode.on(cc.Node.EventType.TOUCH_START, this.fire, this)

    // 2.2.1 版本重新加载场景后粒子不会消失，加上下面两句停止粒子发射即可
    // let particle = this.boomNode.getComponent(cc.ParticleSystem)
    // particle.stopSystem()
  }

  onDestroy() {
    this.playerNode.off(cc.Node.EventType.TOUCH_START, this.fire, this)
  }

  update(dt: number) {
    let distance = this.playerNode.position.sub(this.enemyNode.position).mag()
    let totalWidth = this.playerNode.width / 2 + this.enemyNode.width / 2
    if (this.isFire && distance < totalWidth) {
      this.win()
    }
  }

  private placePlayer() {
    this.playerNode.active = true

    this.isFire = false
    this.playerNode.y = -cc.winSize.height / 4

    let destY =
      -cc.winSize.height / 2 +
      this.spikeTopNode.height +
      this.playerNode.height / 2
    let seq = cc.sequence(
      cc.moveTo(10, cc.v2(this.playerNode.x, destY)),
      cc.callFunc(() => {
        cc.log("触碰底部长钉，游戏结束")
        this.die()
      })
    )
    this.playerAction = this.playerNode.runAction(seq)
  }

  private placeEnemy() {
    this.enemyNode.active = true

    this.enemyNode.x = 0
    this.enemyNode.y = cc.winSize.height / 3 - this.enemyNode.height / 2

    let maxX = cc.winSize.width / 2 - this.enemyNode.width / 2
    let destY = (Math.random() * cc.winSize.height) / 4

    let duration = 0.5 + Math.random() * 0.5
    let seq = cc.repeatForever(
      cc.sequence(
        cc.moveTo(duration, -maxX, destY),
        cc.moveTo(duration, maxX, destY)
      )
    )
    this.enemyAction = this.enemyNode.runAction(seq)
  }

  private fire() {
    if (this.isFire) {
      return
    }
    this.isFire = true
    this.playerNode.stopAction(this.playerAction)

    let destY =
      cc.winSize.height / 2 -
      this.spikeTopNode.height -
      this.playerNode.height / 2
    let seq = cc.sequence(
      cc.moveTo(0.5, cc.v2(0, destY)),
      cc.callFunc(() => {
        cc.log("触碰顶部长钉，游戏结束")
        this.die()
      })
    )
    this.fireAction = this.playerNode.runAction(seq)
  }

  private die() {
    this.playerNode.active = false
    this.boom(this.playerNode.position, this.playerNode.color)

    this.scheduleOnce(() => {
      cc.director.loadScene("scene14")
    }, 1)
  }

  private win() {
    this.isFire = false

    // 停止发射动画，否则 0.5s 后重置玩家位置后还会继续发射动画
    this.playerNode.stopAction(this.fireAction)
    this.enemyNode.stopAction(this.enemyAction)

    this.playerNode.active = false
    this.enemyNode.active = false

    this.boom(this.enemyNode.position, this.enemyNode.color)

    this.incrementScore()

    this.scheduleOnce(() => {
      this.placePlayer()
      this.placeEnemy()
    }, 0.5)
  }

  private incrementScore() {
    this.score++
    cc.tween(this.scoreLabel.node)
      .to(0.3, { scale: 1.3 })
      .call(() => {
        this.scoreLabel.string = `${this.score}`
      })
      .to(0.2, { scale: 1 })
      .start()
  }

  private boom(position: cc.Vec3, color: cc.Color) {
    this.boomNode.setPosition(position)
    let particle = this.boomNode.getComponent(cc.ParticleSystem)
    if (color) {
      particle.startColor = particle.endColor = color
    }
    particle.resetSystem()
  }
}
