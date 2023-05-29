const ubications = [
  {
    id: "universe-113",
    characters: [
      {
        name: "Kratos",
        x: 0.459,
        y: 0.322,
      },
      {
        name: "Bart",
        x: 0.405,
        y: 0.629,
      },
      {
        name: "Groot",
        x: 0.589,
        y: 0.722,
      },
    ],
  },
  {
    id: "robot-city",
    characters: [
      {
        name: "Mojo Jojo",
        x: 0.233,
        y: 0.453,
      },
      {
        name: "Goku",
        x: 0.653,
        y: 0.641,
      },
      {
        name: "Pinhead",
        x: 0.49,
        y: 0.509,
      },
    ],
  },
  {
    id: "ciberpunk-city",
    characters: [
      {
        name: "Mikasa Ackerman",
        x: 0.109,
        y: 0.897,
      },
      {
        name: "Aang",
        x: 0.839,
        y: 0.308,
      },
      {
        name: "Pez de 3 Ojos",
        x: 0.05,
        y: 0.333,
      },
    ],
  },
];

export const isCharacterInUbication = (
  characterName,
  collageId,
  positionX,
  positionY
) => {
  const ubication = ubications.find((ubication) => ubication.id === collageId);
  const character = ubication.characters.find(
    (character) => character.name === characterName
  );
  if (!character) return false;
  const { x, y } = character;
  const deviation = 0.05;
  const isXInUbication =
    positionX >= x - deviation && positionX <= x + deviation;
  const isYInUbication =
    positionY >= y - deviation && positionY <= y + deviation;
  return isXInUbication && isYInUbication;
};
