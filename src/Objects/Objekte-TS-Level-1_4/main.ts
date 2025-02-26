type Pet = {
  tiertyp: string;
  namen: string[];
};

const unsereHaustiere: Pet[] = [
  {
    tiertyp: "Katze",
    namen: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    namen: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

// 1. Greife auf die Werte "Nala" und "Droopy" zu und gebe sie auf der Konsole aus
console.log(unsereHaustiere[0].namen[1]);
console.log(unsereHaustiere[1].namen[2]);

// 2. Lasse dir alle Hundenamen anzeigen
for (let i = 0; i < unsereHaustiere.length; i++) {
  console.log(unsereHaustiere[i].namen);
}

// 3. Ändere folgende Werte:
//    - Droopy in Snoppy
//    - Dinky in Pinky
unsereHaustiere[0].namen[2] = "Pinky";
unsereHaustiere[1].namen[2] = "Snoppy";

const hamster: Pet = {
  tiertyp: "Hamster",
  namen: ["Hannibal", "Peanut"],
};

unsereHaustiere.push(hamster);
console.log(unsereHaustiere);
