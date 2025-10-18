export interface SoundEffect {
  id: string;
  name: string;
  file: any;
}

export const soundEffects: SoundEffect[] = [
  {
    id: "bats",
    name: "Bats",
    file: require("@/assets/sounds/effects/Bats.mp3"),
  },
  {
    id: "creepy-door",
    name: "Creepy Door",
    file: require("@/assets/sounds/effects/Creepy Door 2.mp3"),
  },
  {
    id: "evil-laughter",
    name: "Evil Laughter",
    file: require("@/assets/sounds/effects/Evil Laughter 1.mp3"),
  },
  {
    id: "ghost",
    name: "Ghost",
    file: require("@/assets/sounds/effects/Ghost 1.mp3"),
  },
  {
    id: "horror-piano",
    name: "Horror Piano",
    file: require("@/assets/sounds/effects/Horror Piano.mp3"),
  },
  {
    id: "iron-gate",
    name: "Iron Gate",
    file: require("@/assets/sounds/effects/Iron Gate.mp3"),
  },
  {
    id: "nearly-die",
    name: "Nearly Die",
    file: require("@/assets/sounds/effects/Nearly Die 1.mp3"),
  },
  {
    id: "owl",
    name: "Owl",
    file: require("@/assets/sounds/effects/Owl.mp3"),
  },
  {
    id: "ravens",
    name: "Ravens",
    file: require("@/assets/sounds/effects/Ravens.mp3"),
  },
  {
    id: "scream",
    name: "Scream",
    file: require("@/assets/sounds/effects/Scream 3.mp3"),
  },
  {
    id: "thunder",
    name: "Thunder",
    file: require("@/assets/sounds/effects/Thunder 1.mp3"),
  },
  {
    id: "witch-laughter",
    name: "Witch Laughter",
    file: require("@/assets/sounds/effects/Wicht Laughter 1.mp3"),
  },
  {
    id: "wolf",
    name: "Wolf",
    file: require("@/assets/sounds/effects/Wolf 1.mp3"),
  },
];
