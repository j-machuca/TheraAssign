const getRandomBoolean = () => Math.random() >= 0.5;
const getRandomChair = () => {
  const chairs = [
    "SD.18.29.20",
    "SD.18.29.21",
    "SD.18.29.22",
    "SD.18.29.23",
    "SD.18.29.24",
  ];
  return chairs[Math.floor(Math.random() * chairs.length)];
};

export const eastSide2 = [
  {
    id: "213",
    fullName: "John Doe",
    "Room Number": "213",
    occupied: true,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "214",
    fullName: "Jane Smith",
    "Room Number": "215",
    occupied: true,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "215",
    fullName: "Alice Johnson",
    "Room Number": "215",
    occupied: false,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "216",
    fullName: "Robert Brown",
    "Room Number": "216",
    occupied: false,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "217",
    fullName: "Emily Davis",
    "Room Number": "217",
    occupied: false,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "218",
    fullName: "Michael Wilson",
    "Room Number": "218",
    occupied: false,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "219",
    fullName: "Jessica Garcia",
    "Room Number": "219",
    occupied: true,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "220",
    fullName: "Daniel Martinez",
    "Room Number": "220",
    occupied: true,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "221",
    fullName: "Laura Rodriguez",
    "Room Number": "221",
    occupied: true,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "222",
    fullName: "James Hernandez",
    "Room Number": "222",
    occupied: true,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "223",
    fullName: "Sarah Moore",
    "Room Number": "223",
    occupied: true,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "224",
    fullName: "David Taylor",
    "Room Number": "224",
    occupied: true,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
];

export const westSide2 = [
  {
    id: "201",
    fullName: "Thomas Anderson",
    "Room Number": "201",
    occupied: false,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "202",
    fullName: "Nancy Thomas",
    "Room Number": "202",
    occupied: false,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "203",
    fullName: "Christopher Jackson",
    "Room Number": "203",
    occupied: true,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "204",
    fullName: "Karen White",
    "Room Number": "204",
    occupied: false,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "205",
    fullName: "Steven Harris",
    "Room Number": "205",
    occupied: true,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "206",
    fullName: "Michelle Lewis",
    "Room Number": "206",
    occupied: true,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "207",
    fullName: "Brian Clark",
    "Room Number": "207",
    occupied: true,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "208",
    fullName: "Barbara Walker",
    "Room Number": "208",
    occupied: true,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "209",
    fullName: "Kevin Robinson",
    "Room Number": "209",
    occupied: true,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "210",
    fullName: "Patricia Hall",
    "Room Number": "210",
    occupied: true,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "211",
    fullName: "Edward Young",
    "Room Number": "211",
    occupied: true,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
  {
    id: "212",
    fullName: "Linda Allen",
    "Room Number": "212",
    occupied: true,
    chair: getRandomChair(),
    "P.W.C": getRandomBoolean(),
  },
];
