const { ccclass, property } = cc._decorator

enum GameMode {
  WATERMELON,
  SESAME
}

enum GameState {
  PLAYING,
  GAME_OVER
}

@ccclass
export default class FruitsComponent extends cc.Component {
  onLoad() {
    cc.log(this.name)
  }
}
