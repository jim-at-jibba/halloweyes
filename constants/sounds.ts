export interface SoundEffect {
  id: string;
  name: string;
  file: any;
}

export interface AmbientSound {
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

export const ambientSounds: AmbientSound[] = [
  {
    id: "cemetery-v2",
    name: "Cemetery v2",
    file: require("@/assets/sounds/ambient/Cemetery Amb v2.mp3"),
  },
  {
    id: "cemetery",
    name: "Cemetery",
    file: require("@/assets/sounds/ambient/Cemetery Amb.mp3"),
  },
  {
    id: "cemetery-instrumental",
    name: "Cemetery Instrumental",
    file: require("@/assets/sounds/ambient/Cemetery Instrumental Amb.mp3"),
  },
  {
    id: "dark-castle-v2",
    name: "Dark Castle v2",
    file: require("@/assets/sounds/ambient/Dark Castle Amb v2.mp3"),
  },
  {
    id: "dark-castle",
    name: "Dark Castle",
    file: require("@/assets/sounds/ambient/Dark Castle Amb.mp3"),
  },
  {
    id: "dark-castle-instrumental",
    name: "Dark Castle Instrumental",
    file: require("@/assets/sounds/ambient/Dark Castle Instrumental Amb.mp3"),
  },
  {
    id: "fireplace",
    name: "Fireplace",
    file: require("@/assets/sounds/ambient/Fireplace.mp3"),
  },
  {
    id: "forest",
    name: "Forest",
    file: require("@/assets/sounds/ambient/Forest.mp3"),
  },
  {
    id: "haunted-hospital",
    name: "Haunted Hospital",
    file: require("@/assets/sounds/ambient/Haunted Hospital.mp3"),
  },
  {
    id: "mansion-v2",
    name: "Mansion v2",
    file: require("@/assets/sounds/ambient/Mansion Amb v2.mp3"),
  },
  {
    id: "mansion",
    name: "Mansion",
    file: require("@/assets/sounds/ambient/Mansion Amb.mp3"),
  },
  {
    id: "mansion-instrumental",
    name: "Mansion Instrumental",
    file: require("@/assets/sounds/ambient/Mansion Instrumental Amb.mp3"),
  },
  {
    id: "rain",
    name: "Rain",
    file: require("@/assets/sounds/ambient/Rain.mp3"),
  },
  {
    id: "wind",
    name: "Wind",
    file: require("@/assets/sounds/ambient/Wind.mp3"),
  },
];
