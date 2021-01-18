const { ccclass, property } = cc._decorator

enum GameState {
  IDLE,
  GROW,
  ROTATE
}

@ccclass
export default class Scene13Game extends cc.Component {
  @property(cc.Node)
  bgNode: cc.Node = null
  @property(cc.Label)
  scoreLabel: cc.Label = null
  @property(cc.Node)
  blockNode: cc.Node = null
  @property([cc.Node])
  baseNodeArr: cc.Node[] = []
  @property([cc.Node])
  wallNodeArr: cc.Node[] = []

  blockOriginPosition: cc.Vec2 = null
  growAction: cc.Action = null
  gameState: GameState = GameState.IDLE
  score: number = 0
  level: number = 0

  onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.grow, this)
    this.node.on(cc.Node.EventType.TOUCH_END, this.stop, this)
    this.blockOriginPosition = this.blockNode.getPosition()
    this.updateScore()
    this.randomBgColor()
  }

  updateScore() {
    this.scoreLabel.string = `score:${this.score}    level:${this.level}`
  }

  randomBgColor() {
    let colors = ["#4cb4e7", "#ffc09f", "#c7b3e5", "#588c7e", "#a3a380"]
    // Math.ceil 对一个数进行上取整；如果是正数则把小数「入」 1.1 => 2；如果是负数则把小数「舍」 -1.1 => -1
    // Math.floor 对一个数进行下取整；如果是正数则把小数「舍」 1.1 => 1；如果是负数则把小数「入」 -1.1 => -2
    // Math.round 四舍五入取整；1.2 => 1; 1.8 => 2; -1.2 => -1; -1.8 => -2
    let index = Math.floor(Math.random() * colors.length)
    this.bgNode.color = new cc.Color().fromHEX(colors[index])
  }

  onDestroy() {
    this.node.off(cc.Node.EventType.TOUCH_START, this.grow, this)
    this.node.off(cc.Node.EventType.TOUCH_END, this.stop, this)
  }

  grow() {
    if (this.gameState != GameState.IDLE) {
      return
    }
    this.gameState = GameState.GROW

    let seq = cc.sequence(
      cc.scaleTo(1, 4),
      cc.callFunc(() => {
        cc.log("放大动画结束")
      })
    )
    this.growAction = this.blockNode.runAction(seq)
  }

  /**
   * 旋转到 0 度，然后再下降
   */
  stop() {
    if (this.gameState != GameState.GROW) {
      return
    }
    this.gameState = GameState.ROTATE

    this.blockNode.stopAction(this.growAction)

    let seq = cc.sequence(
      cc.rotateTo(0.15, 0),
      cc.callFunc(() => {
        let baseNodeGap = this.baseNodeArr[1].x - this.baseNodeArr[0].x
        let newBlockNodeWidth = this.blockNode.width * this.blockNode.scaleX
        if (newBlockNodeWidth <= baseNodeGap) {
          this.dropOut(newBlockNodeWidth)
        } else {
          this.bounce(newBlockNodeWidth)
        }
      })
    )
    this.blockNode.runAction(seq)
  }

  dropOut(newBlockNodeWidth: number) {
    let seq = cc.sequence(
      cc.moveTo(0.7, 0, -cc.winSize.height / 2 - newBlockNodeWidth / 2),
      cc.callFunc(() => {
        this.gameOver()
      })
    )
    this.blockNode.runAction(seq)
  }

  bounce(newBlockNodeWidth: number) {
    // 场景编辑器中 left 节点的锚点在右下角，right 节点的锚点在左下角，所以直接用 right 的锚点 x 减 left 的锚点 x
    let wallNodeGap = this.wallNodeArr[1].x - this.wallNodeArr[0].x
    let success = newBlockNodeWidth <= wallNodeGap
    let destY =
      -cc.winSize.height / 2 +
      this.baseNodeArr[0].height +
      newBlockNodeWidth / 2
    if (!success) {
      destY += this.wallNodeArr[0].height
    }

    let seq = cc.sequence(
      cc.moveTo(0.7, cc.v2(0, destY)).easing(cc.easeBounceOut()),
      cc.callFunc(() => {
        if (success) {
          this.nextRound()
        } else {
          this.gameOver()
        }
      })
    )
    this.blockNode.runAction(seq)
  }

  nextRound = () => {
    this.incrementScore(1)
    this.resetBlock()
    this.resetBaseAndWall()
  }

  incrementScore(incr: number) {
    this.score += incr
    cc.tween(this.scoreLabel.node)
      .to(0.3, { scale: 1.2 })
      .call(() => {
        this.updateScore()
      })
      .to(0.2, { scale: 1 })
      .start()
  }

  resetBlock() {
    this.blockNode.runAction(
      cc.sequence(
        cc.spawn(
          cc.rotateTo(0.5, -45),
          cc.moveTo(0.5, this.blockOriginPosition),
          cc.scaleTo(0.5, 1)
        ),
        cc.callFunc(() => {
          this.gameState = GameState.IDLE
        })
      )
    )
  }

  resetBaseAndWall() {
    let baseNodeGap = 100 + Math.random() * 100
    let wallNodeGap = baseNodeGap + 30 + Math.random() * 30
    this.placeWall(this.baseNodeArr[0], -baseNodeGap / 2)
    this.placeWall(this.baseNodeArr[1], baseNodeGap / 2)
    this.placeWall(this.wallNodeArr[0], -wallNodeGap / 2)
    this.placeWall(this.wallNodeArr[1], wallNodeGap / 2)
  }

  placeWall(node: cc.Node, destX: number) {
    node.runAction(
      cc.moveTo(0.5, cc.v2(destX, node.y)).easing(cc.easeQuarticActionIn())
    )
  }

  gameOver() {
    cc.director.loadScene("scene13")
  }
}
