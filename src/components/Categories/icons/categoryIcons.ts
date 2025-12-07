const CATEGORY_ICONS: Record<number, string> = {
  0: '🧾',
  9: '🧠',
  10: '📚',
  11: '🎬',
  12: '🎵',
  13: '🎭',
  14: '📺',
  15: '🎮',
  16: '🧩',
  17: '🔬',
  18: '💻',
  19: '➗',
  20: '🏛️',
  21: '🏅',
  22: '🌍',
  23: '📜',
  24: '🗳️',
  25: '🎨',
  26: '⭐',
  27: '🦁',
  28: '🚗',
  29: '🗯️',
  30: '📱',
  31: '🇯🇵',
  32: '🧸',
};

const CATEGORY_NAME_TO_ID: Record<string, number> = {
  'General Knowledge': 9,
  'Entertainment: Books': 10,
  'Entertainment: Film': 11,
  'Entertainment: Music': 12,
  'Entertainment: Musicals & Theatres': 13,
  'Entertainment: Television': 14,
  'Entertainment: Video Games': 15,
  'Entertainment: Board Games': 16,
  'Science & Nature': 17,
  'Science: Computers': 18,
  'Science: Mathematics': 19,
  Mythology: 20,
  Sports: 21,
  Geography: 22,
  History: 23,
  Politics: 24,
  Art: 25,
  Celebrities: 26,
  Animals: 27,
  Vehicles: 28,
  'Entertainment: Comics': 29,
  'Science: Gadgets': 30,
  'Entertainment: Japanese Anime & Manga': 31,
  'Entertainment: Cartoon & Animations': 32,
};

function getCategoryIconByName(name: string) {
  const id = CATEGORY_NAME_TO_ID[name];
  return id !== undefined ? CATEGORY_ICONS[id] : undefined;
}

export { CATEGORY_ICONS, getCategoryIconByName };
