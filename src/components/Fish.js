import { Texture, Sprite } from 'pixi.js';
import gsap from 'gsap';

export default class Fish extends Sprite {
    constructor() {
        super(Texture.from('smallFish'));

        this.name = 'fish';
        this.interactive = true;
        this.buttonMode = true;
        this.anchor.set(0.5);

        this.on('click', this._onClick);
    }

    _onClick() {
        this.expand();
        setTimeout(() => {
            this.contract();
        }, 5000);
    }

    expand() {
        this.texture = Texture.from('bigFish');
        gsap.to(this.scale, { x: 1.5, y: 1.5, duration: 0.6 });
    }

    contract() {
        this.texture = Texture.from('smallFish');
        gsap.to(this.scale, { x: 1, y: 1, duration: 0.6 });
    }
}