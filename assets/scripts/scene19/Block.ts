const { ccclass, property } = cc._decorator

@ccclass
export default class Block extends cc.Component {

  onLoad() {

  }

  init() {
    let blockWidth = 60 + Math.random() * 80

    this.node.width = blockWidth

    let physicsBoxCollider = this.node.getComponent(cc.PhysicsBoxCollider)
    physicsBoxCollider.size.width = blockWidth
  }
}
