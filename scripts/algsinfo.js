var selCases = [];

var algsGroups = {
    "All Edges Oriented Correctly" : [26, 27, 21, 22, 24, 25, 23],
    "T-Shapes" : [33, 45],
    "Squares" : [5, 6],
    "C-Shapes" : [34, 46],
    "W-Shapes" : [36, 38],
    "Corners Correct, Edges Flipped" : [28, 57],
    "P-Shapes" : [31, 32, 43, 44],
    "I-Shapes" : [51, 56, 52, 55],
    "Fish-Shapes" : [9, 10, 35, 37],
    "Knight Move Shapes" : [13, 14, 15, 16],
    "Akward Shapes" : [29, 30, 41, 42],
    "L-Shapes" : [48, 47, 49, 50, 53, 54],
    "Lightning Bolts" : [7, 8, 11, 12, 39, 40],
    "No Edges Flipped Correctly" : [1,2,3,4,18,19,17,20],
};

var algsInfo = {
    1: {
        "name": "Runway",
        "a": "(R U2') (R2' F R F') U2' (R' F R F')",
        "a2": "",
    },
    2: {
        "name": "Zamboni",
        "a": "F (R U R' U') F' f (R U R' U') f'",
        "a2": "y (r U r') U2 R U2' R' U2 (r U' r')",
    },
    3: {
        "name": "Anti-Mouse",
        "a": "f (R U R' U') f' U' F (R U R' U') F'",
        "a2": "",
    },
    4: {
        "name": "Mouse",
        "a": "f (R U R' U') f' U F (R U R' U') F'",
        "a2": "",
    },
    5: {
        "name": "Lefty Square",
        "a": "(r' U2' R U R' U r)",
        "a2": "",
    },
    6: {
        "name": "Righty Square",
        "a": "(r U2 R' U' R U' r')",
        "a2": "",
    },
    7: {
        "name": "Fat Sune",
        "a": "(r U R' U R U2' r')",
        "a2": "",
    },
    8: {
        "name": "Fat Antisune",
        "a": "(r' U' R U' R' U2 r)",
        "a2": "y2 l' U' L U' L' U2 l",
    },
    9: {
        "name": "Kite",
        "a": "(R U R' U') R' F (R2 U R' U') F'",
        "a2": "(R' U' R) y r U' r' U r U r'",
    },
    10: {
        "name": "Anti-Kite",
        "a": "(R U R' U) (R' F R F') (R U2' R')",
        "a2": "(R U R') y (R' F R U') (R' F' R)",
    },
    11: {
        "name": "Downstairs",
        "a": "r' (R2 U R' U R U2 R') U M'",
        "a2": "",
    },
    12: {
        "name": "Upstairs",
        "a": "M' (R' U' R U' R' U2 R) U' M",
        "a2": "y F (R U R' U') F' U F (R U R' U') F'",
    },
    13: {
        "name": "Gun",
        "a": "(r U' r') (U' r U r') y' (R' U R)",
        "a2": "F U R U' R2' F' R U (R U' R')",
    },
    14: {
        "name": "Anti-Gun",
        "a": "(R' F R) (U R' F' R) (F U' F')",
        "a2": "",
    },
    15: {
        "name": "Squeegee",
        "a": "(r' U' r) (R' U' R U) (r' U r)",
        "a2": "",
    },
    16: {
        "name": "Anti-Squeegee",
        "a": "(r U r') (R U R' U') (r U' r')",
        "a2": "",
    },
    17: {
        "name": "Slash",
        "a": "(R U R' U) (R' F R F') U2' (R' F R F')",
        "a2": "",
    },
    18: {
        "name": "Crown",
        "a": "y R U2' (R2' F R F') U2' M' (U R U' r')",
        "a2": "(r U R' U R U2 r') (r' U' R U' R' U2 r)",
    },
    19: {
        "name": "Bunny",
        "a": "M U (R U R' U') M' (R' F R F')",
        "a2": "",
    },
    20: {
        "name": "Checkers",
        "a": "M U (R U R' U') M2' (U R U' r')",
        "a2": "(r U R' U') M2' (U R U' R') U' M'",
    },
    21: {
        "name": "Double Headlights",
        "a": "(R U2 R') (U' R U R') (U' R U' R')",
        "a2": "y (R U R' U) (R U' R' U) (R U2' R')",
    },
    22: {
        "name": "Pi-Shape",
        "a": "R U2' R2' U' R2 U' R2' U2' R",
        "a2": "",
    },
    23: {
        "name": "U-Shape",
        "a": "R2 D (R' U2 R) D' (R' U2 R')",
        "a2": "y2 R2' D' (R U2 R') D (R U2 R)",
    },
    24: {
        "name": "Hammerhead",
        "a": "(r U R' U') (r' F R F')",
        "a2": "y (R U R D) (R' U' R D') R2'",
    },
    25: {
        "name": "L-Shape",
        "a": "y F' (r U R' U') r' F R",
        "a2": "x (R' U R) D' (R' U' R) D x'",
    },
    26: {
        "name": "Antisune",
        "a": "R U2 R' U' R U' R'",
        "a2": "y' R' U' R U' R' U2 R",
    },
    27: {
        "name": "Sune",
        "a": "R U R' U R U2' R'",
        "a2": "y' R' U2' R U R' U R",
    },
    28: {
        "name": "Sleath",
        "a": "(r U R' U') M (U R U' R')",
        "a2": "",
    },
    29: {
        "name": "Spotted Chameleon",
        "a": "y (R U R' U') (R U' R') (F' U' F) (R U R')",
        "a2": "M U (R U R' U')(R' F R F') M'",
    },
    30: {
        "name": "Anti-Spotted Chameleon",
        "a": "y' F U (R U2 R' U') (R U2 R' U') F'",
        "a2": "y' (F R' F) (R2 U' R' U') (R U R') F2",
    },
    31: {
        "name": "Couch",
        "a": "(R' U' F) (U R U' R') F' R",
        "a2": "",
    },
    32: {
        "name": "Anti-Couch",
        "a": "R U B' (U' R' U) (R B R')",
        "a2": "S (R U R' U') (R' F R f')",
    },
    33: {
        "name": "Key",
        "a": "(R U R' U') (R' F R F')",
        "a2": "",
    },
    34: {
        "name": "City",
        "a": "(R U R2' U') (R' F R U) R U' F'",
        "a2": "",
    },
    35: {
        "name": "Fish Salad",
        "a": "(R U2') (R2' F R F') (R U2' R')",
        "a2": "",
    },
    36: {
        "name": "Sea Mew",
        "a": "(R' U' R U') (R' U R U) l U' R' U x",
        "a2": "y2 (R U R' F') (R U R' U') (R' F R U') (R' F R F')",
    },
    37: {
        "name": "Mounted Fish",
        "a": "F (R U' R' U') (R U R' F')",
        "a2": "",
    },
    38: {
        "name": "Mario",
        "a": "(R U R' U) (R U' R' U') (R' F R F')",
        "a2": "",
    },
    39: {
        "name": "Fung",
        "a": "(L F') (L' U' L U) F U' L'",
        "a2": "F (R U R' U') F' (R' U' R U' R' U2 R)",
    },
    40: {
        "name": "Anti-Fung",
        "a": "(R' F) (R U R' U') F' U R",
        "a2": "",
    },
    41: {
        "name": "Awkward Fish",
        "a": "(R U R' U R U2' R') F (R U R' U') F'",
        "a2": "",
    },
    42: {
        "name": "Anti-Awkward Fish",
        "a": "(R' U' R U' R' U2 R) F (R U R' U') F'",
        "a2": "y (R' F R F') (R' F R F') (R U R' U') (R U R')",
    },
    43: {
        "name": "Anti-P",
        "a": "y R' U' F' U F R",
        "a2": "f' (L' U' L U) f",
    },
    44: {
        "name": "P-Shape",
        "a": "f (R U R' U') f'",
        "a2": "y2 F (U R U' R') F'",
    },
    45: {
        "name": "T-Shape",
        "a": "F (R U R' U') F'",
        "a2": "",
    },
    46: {
        "name": "Seein' Headlights",
        "a": "R' U' (R' F R F') U R",
        "a2": "",
    },
    47: {
        "name": "Anti-Breakneck",
        "a": "F' (L' U' L U) (L' U' L U) F",
        "a2": "R' U' (R' F R F') (R' F R F') U R",
    },
    48: {
        "name": "Breakneck",
        "a": "F (R U R' U') (R U R' U') F'",
        "a2": "",
    },
    49: {
        "name": "Right back squeezy",
        "a": "r U' r2' U r2 U r2' U' r",
        "a2": "",
    },
    50: {
        "name": "Right front squeezy",
        "a": "r' U r2 U' r2' U' r2 U r'",
        "a2": "y' (R U2 R' U' R U' R') F (R U R' U') F'",
    },
    51: {
        "name": "Bottlecap",
        "a": "f (R U R' U') (R U R' U') f'",
        "a2": "y2 F (U R U' R') (U R U' R') F'",
    },
    52: {
        "name": "Rice Cooker",
        "a": "(R' U' R U' R' U) y' (R' U R) B",
        "a2": "(R U R' U R U') y (R U' R') F'",
    },
    53: {
        "name": "Frying Pan",
        "a": "(r' U' R U') (R' U R U') R' U2 r",
        "a2": "y r' U2' R (U R' U' R) (U R' U r)",
    },
    54: {
        "name": "Anti-Frying Pan",
        "a": "(r U R' U) (R U' R' U) R U2' r'",
        "a2": "y' (r U2 R' U') (R U R' U') R U' r'",
    },
    55: {
        "name": "Highway",
        "a": "y (R' F R U) (R U' R2' F') R2 U' R' (U R U R')",
        "a2": "",
    },
    56: {
        "name": "Streetlights",
        "a": "r' U' r (U' R' U R) (U' R' U R) r' U r",
        "a2": "",
    },
    57: {
        "name": "H-Shape",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
};
