const { ccclass, property } = cc._decorator

@ccclass
export default class Scene18Game extends cc.Component {
  onLoad() {
    cc.log(this.name)
  }
}
