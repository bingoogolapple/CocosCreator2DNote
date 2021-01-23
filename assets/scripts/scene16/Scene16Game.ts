const { ccclass, property } = cc._decorator
import Scene16Block from "./Scene16Block"

@ccclass
export default class Scene16Game extends cc.Component {
  private static readonly MAX_LEVEL: number = 4
  @property(cc.Label)
  hintLabel: cc.Label = null

  @property([cc.Node])
  baseNodeArr: cc.Node[] = []

  @property(cc.Prefab)
  blockPrefab: cc.Prefab = null
  @property(cc.Node)
  blockLayerNode: cc.Node = null

  blockArr: Scene16Block[][] = [[], [], []]
  now: number = 0
  level: number = 1
  blockCount: number

  onLoad() {
    this.initBlock()
  }

  update(dt: number) {
    this.now += dt
    this.hintLabel.string = `level:${this.level}, time: ${Math.floor(
      this.now
    )}s`
  }

  initBlock() {
    for (let i = 0; i < this.blockArr.length; i++) {
      let layerBlockArr = this.blockArr[i]
      for (let j = 0; j < layerBlockArr.length; j++) {
        layerBlockArr[j].node.destroy()
      }
    }

    this.blockArr = [[], [], []]

    this.blockCount = this.level + 2
    for (let i = 0; i < this.blockCount; i++) {
      let blockNode = cc.instantiate(this.blockPrefab)
      this.blockLayerNode.addChild(blockNode)
      let block: Scene16Block = blockNode.getComponent("Scene16Block")
      block.baseIndex = 0

      let blockIndex = this.blockCount - i - 1
      block.init(blockIndex)
      block.updatePosition(this.baseNodeArr[0].x, i)

      this.blockArr[0].push(block)
    }
  }

  canMove(block: Scene16Block): boolean {
    let layerBlockArr = this.blockArr[block.baseIndex]
    return layerBlockArr[layerBlockArr.length - 1] == block
  }

  private baseIndexCheck(pos: cc.Vec2) {
    for (let i = 0; i < this.baseNodeArr.length; i++) {
      let baseNode = this.baseNodeArr[i]
      if (
        pos.x >= baseNode.x - baseNode.width / 2 &&
        pos.x <= baseNode.x + baseNode.width / 2
      ) {
        return i
      }
    }
    return -1
  }

  placeBlock(block: Scene16Block): boolean {
    let baseIndex = this.baseIndexCheck(block.node.getPosition())
    if (baseIndex == -1) {
      return false
    }

    let toPlaceLayerBlockArr = this.blockArr[baseIndex]
    if (
      toPlaceLayerBlockArr.length &&
      toPlaceLayerBlockArr[toPlaceLayerBlockArr.length - 1].blockIndex <
        block.blockIndex
    ) {
      return false
    }

    let baseNode = this.baseNodeArr[baseIndex]

    this.blockArr[block.baseIndex].pop()

    block.baseIndex = baseIndex
    toPlaceLayerBlockArr.push(block)

    let length = toPlaceLayerBlockArr.length

    block.updatePosition(baseNode.x, length - 1)

    if (
      this.blockArr[1].length == this.blockCount ||
      this.blockArr[2].length == this.blockCount
    ) {
      this.now = 0
      this.level++
      this.level = Math.min(this.level, Scene16Game.MAX_LEVEL)
      this.initBlock()
    }

    return true
  }
}
