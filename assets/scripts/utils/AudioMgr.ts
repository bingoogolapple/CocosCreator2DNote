import { Node, AudioSource, AudioClip, resources, director } from "cc";

/**
 * 这是一个用于播放音频的单例类，可以很方便地在项目的任何地方调用
 */
export class AudioMgr {
  private static _instance: AudioMgr;
  public static get instance(): AudioMgr {
    if (this._instance == null) {
      this._instance = new AudioMgr();
    }
    return this._instance;
  }

  private _audioSource: AudioSource;
  constructor() {
    // 创建一个节点作为 audioMgr
    let audioMgr = new Node();
    audioMgr.name = "__audioMgr__";

    // 添加节点到场景
    director.getScene().addChild(audioMgr);

    // 标记为常驻节点，这样场景切换的时候就不会被销毁了
    director.addPersistRootNode(audioMgr);

    // 添加 AudioSource 组件，用于播放音频。
    this._audioSource = audioMgr.addComponent(AudioSource);
  }

  public get audioSource() {
    return this._audioSource;
  }

  /**
   * 播放短音频,比如 打击音效，爆炸音效等。playOneShot 是一次性播放操作，播放后的音效无法暂停或停止播放，也无法监听播放结束的事件回调
   * @param sound clip or url for the audio
   * @param volumeScale 音量倍数
   */
  playOneShot(sound: AudioClip | string, volumeScale: number = 1.0) {
    if (sound instanceof AudioClip) {
      this._audioSource.playOneShot(sound, volumeScale);
    } else {
      resources.load(sound, (err, clip: AudioClip) => {
        if (err) {
          console.log(err);
        } else {
          this._audioSource.playOneShot(clip, volumeScale);
        }
      });
    }
  }

  /**
   * 播放长音频，比如 背景音乐
   * @param sound clip or url for the sound
   * @param volume
   */
  play(sound: AudioClip | string, volume: number = 1.0) {
    if (sound instanceof AudioClip) {
      this._audioSource.clip = sound;
      this._audioSource.play();
      this.audioSource.volume = volume;
    } else {
      resources.load(sound, (err, clip: AudioClip) => {
        if (err) {
          console.log(err);
        } else {
          this._audioSource.clip = clip;
          this._audioSource.play();
          this.audioSource.volume = volume;
        }
      });
    }
  }

  /**
   * stop the audio play
   */
  stop() {
    this._audioSource.stop();
  }

  /**
   * pause the audio play
   */
  pause() {
    this._audioSource.pause();
  }

  /**
   * resume the audio play
   */
  resume() {
    this._audioSource.play();
  }
}
