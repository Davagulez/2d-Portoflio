import { k } from "./kaboomCtx";

k.loadSprite('spriteSheet', "./spritesheet.png", {
    sliceX: 39,
    sliceY: 31,
    anims: {
        "idle-down": 936,
        "walk-down": {from:936, to:939, loop: true, speed:8},
        "idle-side": 936,
        "walk-side": {from:975, to:978, loop: true, speed:8},
        "idle-down": 1014,
        "walk-down": {from:1014, to:1017, loop: true, speed:8},
    }
})