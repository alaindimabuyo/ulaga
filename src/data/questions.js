import imageone from "../assets/image1.png";
import imagetwo from "../assets/image2.png";
import imagethree from "../assets/image3.png";
import imagefour from "../assets/image4.png";
import imagefive from "../assets/image5.png";

import ones from "../assets/ones.png";
import numbers from "../assets/numbers.png";
import greaterless from "../assets/greaterless.png";
import numbersforkids from "../assets/numberskids.png";
import groupofstudents from "../assets/groupofstudents.png";
import mangoes from "../assets/mangoes.png";
import schoolsupplies from "../assets/schoolsupplies.png";
import markets from "../assets/markets.png";
import operations from "../assets/operations.png";

export const mainMenu = [
  {
    id: 0,
    category: "Visualize Numbers",
    questions: [
      {
        id: 0,
        image: imageone,
        question: "Pilan la? Pilinan lareng numerung katumbas. Mumunang imahi",
        answers: [
          { answer: "532", correct: true },
          { answer: "531", correct: false },
          { answer: "533", correct: false },
          { answer: "534", correct: false },
        ],
      },
      {
        id: 1,
        question: "Pangadwang imahi",
        image: imagetwo,
        answers: [
          { answer: "531", correct: false },
          { answer: "552", correct: true },
          { answer: "567", correct: false },
          { answer: "652", correct: false },
        ],
      },
      {
        id: 2,
        question: "Pangatlung imahi",
        image: imagethree,
        answers: [
          { answer: "531", correct: false },
          { answer: "552", correct: false },
          { answer: "567", correct: false },
          { answer: "523", correct: true },
        ],
      },
      {
        id: 3,
        question: "Pangapat a imahi",
        image: imagefour,
        answers: [
          { answer: "531", correct: false },
          { answer: "514", correct: true },
          { answer: "553", correct: false },
          { answer: "515", correct: false },
        ],
      },
      {
        id: 4,
        question: "Panglimang imahi",
        image: imagefive,
        answers: [
          { answer: "555", correct: false },
          { answer: "531", correct: false },
          { answer: "565", correct: true },
          { answer: "556", correct: false },
        ],
      },
    ],
  },
  {
    id: 1,
    category: "Give the place value of a digit",
    image: ones,
    questions: [
      {
        id: 0,
        question: "Nanu ya ing place value na ning 1 keng217",
        image: ones,
        answers: [
          { answer: "ones", correct: false },
          { answer: "tens", correct: true },
          { answer: "hundreds", correct: false },
          { answer: "thousands", correct: false },
        ],
      },
      {
        id: 1,
        question: "Nanu ya ing place value na ning 6 keng 346",
        image: ones,
        answers: [
          { answer: "ones", correct: true },
          { answer: "tens", correct: false },
          { answer: "hundreds", correct: false },
          { answer: "thousands", correct: false },
        ],
      },
      {
        id: 2,
        question: "Nanu ya ing place value na ning 7 keng 789",
        image: ones,
        answers: [
          { answer: "ones", correct: false },
          { answer: "tens", correct: false },
          { answer: "hundreds", correct: true },
          { answer: "thousands", correct: false },
        ],
      },
      { id: 3, question: "Question 4", answers: [] },
      { id: 4, question: "Question 5", answers: [] },
    ],
  },
  {
    id: 2,
    category: "Orders number in increasing order and decreasing order ",
    questions: [
      {
        id: 0,
        image: numbers,
        question: "Kumpletwan la reng bilang. Mumuna ___, 125",
        answers: [
          { answer: "123", correct: false },
          { answer: "122", correct: false },
          { answer: "124", correct: true },
          { answer: "126", correct: false },
        ],
      },
      {
        id: 1,
        question: "Pangadwa ___, 146",
        image: numbers,
        answers: [
          { answer: "145", correct: true },
          { answer: "147", correct: false },
          { answer: "148", correct: false },
          { answer: "149", correct: false },
        ],
      },

      {
        id: 2,
        question: "Pangatlu 133, ___, 135",
        image: numbers,
        answers: [
          { answer: "136", correct: false },
          { answer: "132", correct: false },
          { answer: "131", correct: false },
          { answer: "134", correct: true },
        ],
      },
      {
        id: 3,
        question: "Pangapat 151, ___, 153",
        image: numbers,
        answers: [
          { answer: "155", correct: false },
          { answer: "152", correct: true },
          { answer: "154", correct: false },
          { answer: "156", correct: false },
        ],
      },
      {
        id: 4,
        question: "Panglima 164, ___",
        image: numbers,
        answers: [
          { answer: "163", correct: false },
          { answer: "166", correct: false },
          { answer: "165", correct: true },
          { answer: "161", correct: false },
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Compare numbers using relation symbols",
    questions: [
      {
        id: 0,

        question:
          "Basan at ukumpara la ring mitutuki. Isulat ing <,> o kaya = kareng pipag pilinan. Mumuna, Ing bulsa king istanti mikakaalaga yang P350.00 kabang itang pantalun P425.00. Ikumpara ing presyu ning bulsa king pantalun. P350.00 ___ P425.00",
        image: greaterless,
        answers: [
          { answer: "<", correct: true },
          { answer: ">", correct: false },
          { answer: "=", correct: false },
        ],
      },
      {
        id: 1,
        question:
          "Pangadwa, Magobra la ri arnold at Leny king pabrika. Tatanggap yang P380.00 balang aldo i Arnold. Tatatnggap neng manng P P365.00 balang aldo i Leny. Ikumapara la ring sweldu ra ring adwang magobra. P380 ___ P365",
        image: greaterless,
        answers: [
          { answer: "<", correct: false },
          { answer: ">", correct: true },
          { answer: "=", correct: false },
        ],
      },
      {
        id: 2,
        question:
          "Pangatlu, Pinupul yang 215 kaban a pale i Tang Ado. Pinupul ya namang 215 kaban a pale i Tang Kiku. Ikumpara la ding bilang ding pupul dang kaban a pupul. 215 ___ 215",
        image: greaterless,
        answers: [
          { answer: "<", correct: false },
          { answer: ">", correct: false },
          { answer: "=", correct: true },
        ],
      },
    ],
  },
  {
    id: 4,
    category: "Properties of addition",
    questions: [
      {
        id: 0,
        question:
          "Kilalanan la ring NUMBER OF SENTENCES, pilinan ya ing (z) nung Zero Property ya ampong (c) nung Commulative Property ya. Mumuna, 23 + 54 = 54 + 23",
        image: numbersforkids,
        answers: [
          { answer: "Z", correct: false },
          { answer: "C", correct: true },
        ],
      },
      {
        id: 1,
        question: "120 + 0",
        image: numbersforkids,
        answers: [
          { answer: "Z", correct: false },
          { answer: "C", correct: true },
        ],
      },
      {
        id: 2,
        question: "0z + 57",
        image: numbersforkids,
        answers: [
          { answer: "Z", correct: false },
          { answer: "C", correct: true },
        ],
      },
      {
        id: 3,
        question: "20 + 6 = 6 + 20",
        image: numbersforkids,
        answers: [
          { answer: "Z", correct: false },
          { answer: "C", correct: true },
        ],
      },
      {
        id: 4,
        question: "15 + 3 = 18 18 = 3 + 15",
        image: numbersforkids,
        answers: [
          { answer: "Z", correct: false },
          { answer: "C", correct: true },
        ],
      },
    ],
  },
  {
    id: 5,
    category: "Solve non-routine word problem invaluing subtraction",
    questions: [
      {
        id: 0,
        question:
          "Addition sentences. Basan at pakibatan ing kutang. Ating 18 lalaki ampong 21 a babai king klasi ng Mrs. Ruiz, pilan la ngan deng istudyanti ng Mrs. Ruiz?",
        image: groupofstudents,
        answers: [
          { answer: "38", correct: false },
          { answer: "39", correct: true },
          { answer: "36", correct: false },
          { answer: "37", correct: false },
        ],
      },
      {
        id: 1,
        question:
          "Memupul yang mangga i Mang Erning king kayang mulahan, 44 lang ikwa na king metung mangga ampong 52 ketang metung. Pilan la eganagana ring mangga?",
        image: mangoes,
        answers: [
          { answer: "92", correct: false },
          { answer: "93", correct: false },
          { answer: "96", correct: true },
          { answer: "90", correct: false },
        ],
      },
      { id: 2, question: "Question 3", answers: [] },
      { id: 3, question: "Question 4", answers: [] },
      { id: 4, question: "Question 5", answers: [] },
    ],
  },
  {
    id: 6,
    category: "Solve routine word problem invaluing addition",

    questions: [
      {
        id: 0,
        question:
          "Basan yula at pakibatan ding kutang, tukyan yula ding steps king pamag analyze. Mumuna, Minta ya bookstore i Aling Joane banalang isaling gamit iskwela ring anak na, memayad yang P240.50 para karing notebooks, P125.50 para karing krayola at ballpen da, ampong P750.00 para karing diksyunaryu. Magkanu ngan ing beyaran ng Aling Joane? NANU YA ING KUTANG keng mebanggit a senaryu",
        image: schoolsupplies,
        answers: [
          {
            answer: "Pilan lang krayola deng seli nang Aling Joane?",
            correct: false,
          },
          { answer: "Magkanu ngan ing beyaran ng Aling Joane?", correct: true },
          {
            answer: "Magkanu ing krayolang seli nang Aling Joane?",
            correct: false,
          },
          {
            answer: "Pilan la reng seli nang notebooks aling Joane?",
            correct: false,
          },
        ],
      },
      {
        id: 1,
        question:
          "Basan yula at pakibatan ding kutang, tukyan yula ding steps king pamag analyze. Mumuna, Minta ya bookstore i Aling Joane banalang isaling gamit iskwela ring anak na, memayad yang P240.50 para karing notebooks, P125.50 para karing krayola at ballpen da, ampong P750.00 para karing diksyunaryu. Magkanu ngan ing beyaran ng Aling Joane? NANU YA ING GIVEN",
        image: schoolsupplies,
        answers: [
          {
            answer: "240 notebooks, 125 ballpen ampo krayola, 750 diksyunaryu",
            correct: true,
          },
          {
            answer: "250 notebooks, 126 ballpen ampo krayola, 670 diksyunaruyu",
            correct: false,
          },
          {
            answer: "235 notebooks, 126 ballpen ampo krayola, 660 diksyunaryu",
            correct: false,
          },
          {
            answer: "365 notebooks, 123 ballpen a mpo krayola, 530 diksyunaryu",
            correct: false,
          },
        ],
      },
      {
        id: 2,
        question:
          "Basan yula at pakibatan ding kutang, tukyan yula ding steps king pamag analyze. Mumuna, Minta ya bookstore i Aling Joane banalang isaling gamit iskwela ring anak na, memayad yang P240.50 para karing notebooks, P125.50 para karing krayola at ballpen da, ampong P750.00 para karing diksyunaryu. Magkanu ngan ing beyaran ng Aling Joane? NANU YA ING OPERATION MEGAMIT?",
        image: schoolsupplies,
        answers: [
          {
            answer: "Addition Multiplication",
            correct: false,
          },
          {
            answer: "Division Subtraction",
            correct: false,
          },
          { answer: "Addition Subtraction", correct: true },
          { answer: "Multiplication Division", correct: false },
        ],
      },
      {
        id: 3,
        question:
          "Menyali ya i Aling Luning para king kayang tindaan, mekasali yang ulagang P425.00 a gule ampong P750.25 ulagang delata. Magkanu ing beyaran eganagana? NANU YA ING GIVEN.",
        image: markets,
        answers: [
          {
            answer: "P425 Gule, P750.25 Delata",
            correct: true,
          },
          {
            answer: "P64 Gule, P120 Delata?",
            correct: false,
          },
          { answer: "P420 Gule, P750.25 Delata", correct: false },
          { answer: "P435.00, P760.25", correct: false },
        ],
      },
      {
        id: 4,
        question:
          "Menyali ya i Aling Luning para king kayang tindaan, mekasali yang ulagang P425.00 a gule ampong P750.25 ulagang delata. Magkanu ing beyaran eganagana? NANU YA ING OPERATION",
        image: markets,
        answers: [
          {
            answer: "Addition Multiplication",
            correct: false,
          },
          {
            answer: "Division Subtraction",
            correct: false,
          },
          { answer: "Addition Subtraction", correct: true },
          { answer: "Multiplication Division", correct: false },
        ],
      },
    ],
  },
  {
    id: 7,
    category: "Subtract 2 to 3 digit numbers",
    questions: [
      {
        id: 0,
        question:
          "Panintunan ya ing mawawalaang difference. Mumuna, 278 - 23 = ___",
        image: operations,
        answers: [
          { answer: "256", correct: false },
          { answer: "265", correct: false },
          { answer: "255", correct: true },
          { answer: "253", correct: false },
        ],
      },
      {
        id: 1,
        question: "386 - 75 = ___",
        image: operations,
        answers: [
          { answer: "311", correct: true },
          { answer: "310", correct: false },
          { answer: "322", correct: false },
          { answer: "309", correct: false },
        ],
      },
      {
        id: 2,

        question: "894 - 52 = ___",
        image: operations,
        answers: [
          { answer: "841", correct: false },
          { answer: "833", correct: false },
          { answer: "831", correct: false },
          { answer: "842", correct: true },
        ],
      },
      {
        id: 3,
        question: "159 - ___ = 45",
        image: operations,
        answers: [
          { answer: "114", correct: true },
          { answer: "354", correct: false },
          { answer: "115", correct: false },
          { answer: "113", correct: false },
        ],
      },
      {
        id: 4,
        question: "376 - ___ = 24",
        image: operations,
        answers: [
          { answer: "352", correct: true },
          { answer: "333", correct: false },
          { answer: "321", correct: false },
          { answer: "341", correct: false },
        ],
      },
    ],
  },
  {
    id: 8,
    category: "Solve routine word problem invaluing subtraction",
    questions: [
      {
        id: 0,
        question:
          "Ating 312 tanamang kamatis king mula ng Tang Rally. Mesira la ring 109 pauli na ning bagyung Igme. Pilan la pa ring mitragan karing tanaman? Nanu ya ing kutang keng abanggit a senaryu?",
        answers: [
          {
            answer:
              "Ating 312 tanamang kamatis king mula ng Tang Rally. Mesira la ring 109 pauli na ning bagyung Igme.",
            correct: false,
          },
          {
            answer: "Mesira la ring 109 pauli na ning bagyung Igme",
            correct: false,
          },
          {
            answer: "Pilan la pa ring mitragan karing tanaman??",
            correct: true,
          },
          { answer: "Addition, Subtraction", correct: false },
        ],
      },
      {
        id: 1,
        question:
          "Ating 312 tanamang kamatis king mula ng Tang Rally. Mesira la ring 109 pauli na ning bagyung Igme. Pilan la pa ring mitragan karing tanaman? Nanu ya ing kutang keng abanggit a senaryu? Nanu ya ing Given keng milabas a senaryu?",
        answers: [
          {
            answer:
              "Ating 312 tanamang kamatis king mula ng Tang Rally. Mesira la ring 109 pauli na ning bagyung Igme.",
            correct: true,
          },
          {
            answer: "Mesira la ring 109 pauli na ning bagyung Igme",
            correct: false,
          },
          {
            answer: "Pilan la pa ring mitragan karing tanaman?",
            correct: false,
          },
          { answer: "Addition, Subtraction", correct: false },
        ],
      },
      {
        id: 2,
        question:
          "Sinali yang bola i Joel a P345.00. Memye yang P500.00 king magtinda. Magkanu ing  mibye sukli kaya? Nanu ing kutang keng senaryu.",
        answers: [
          {
            answer:
              "Sinali yang bola i Joel a P345.00. Memye yang P500.00 king magtinda",
            correct: false,
          },
          {
            answer: "Magkanu ing  mibye sukli kaya?",
            correct: true,
          },
          {
            answer: " Memye yang P500.00 king magtinda",
            correct: false,
          },
          { answer: "Addition, Subtraction", correct: false },
        ],
      },
      {
        id: 3,
        question:
          "Sinali yang bola i Joel a P345.00. Memye yang P500.00 king magtinda. Magkanu ing  mibye sukli kaya? Nanu ing kutang keng senaryu. Nanu ya ing Given keng senaryu",
        answers: [
          {
            answer:
              "Sinali yang bola i Joel a P345.00. Memye yang P500.00 king magtinda",
            correct: false,
          },
          {
            answer: "Magkanu ing  mibye sukli kaya?",
            correct: true,
          },
          {
            answer: " Memye yang P500.00 king magtinda",
            correct: false,
          },
          { answer: "Addition, Subtraction", correct: false },
        ],
      },
      { id: 4, question: "Question 5", answers: [] },
    ],
  },
  {
    id: 9,
    category: "Solve non-routine word problem invaluing subtraction",
    questions: [
      {
        id: 0,
        question:
          "Question 1: Atin yang P129.00 i Randy king pitaka na. Sinali yang lapis a P7.00. Magkanu la pa ring mitagan karing pera na?",
        answers: [
          { answer: "P122.00", correct: true },
          { answer: "P127.00", correct: false },
          { answer: "P126.00", correct: false },
          { answer: "P64.00", correct: false },
          ,
        ],
      },
      {
        id: 1,
        question:
          "Question 2: Mekatipun yang 236 a straw i Adela a gamitan na king pamangawa king proyektu na. Kareti, ating 4 a straw a kule gintu. Pilan la ring straw a e kule gintu",
        answers: [
          { answer: "P233.00", correct: false },
          { answer: "P232.00", correct: true },
          { answer: "P234.00 ", correct: false },
          { answer: "P235.00", correct: false },
          ,
        ],
      },
      {
        id: 2,
        question:
          "Question 3: Atin yang P255.00 i Mrs. Cadiang king pitaka na sinali yang manuk a P145.00. Magkanu po ing mitagan karing pera na?",
        answers: [
          { answer: "P115.00", correct: false },
          { answer: "P116.00", correct: false },
          { answer: "P125.00", correct: false },
          { answer: "P110.00", correct: true },
          ,
        ],
      },
      {
        id: 3,
        question:
          "Question 4: Karing  456 ng magaral ning San Vicene Elementary School. ding 205 lalaki la. Pilan la renng babai karing mag aral?",
        answers: [
          { answer: "P255.00", correct: false },
          { answer: "P253.00", correct: false },
          { answer: "P256.00", correct: false },
          { answer: "P251.00", correct: true },
          ,
        ],
      },
      {
        id: 4,
        question:
          "Question 5: Mekapamulut yang 218 maputing batu i angel. Kareti, ding 126 mangalati lang mabayat at ding aliwa mangayan no ngan. Pilan la karing batung ikwa na ring mayan? Nanu ya ing sagut?",
        answers: [
          { answer: "P90.00", correct: false },
          { answer: "P92.00", correct: true },
          { answer: "P64.00", correct: false },
          { answer: "P91.00", correct: false },
          ,
        ],
      },
    ],
  },
  {
    id: 10,
    category: "Solve routine word problem",
    questions: [
      {
        id: 0,
        question:
          "Memayad yang P256.00 i Dang Gloria para king kuryenti ampong P170.00 para king danum. nung atin ya mung P500.00. Magkanu pa ing mitagan karing pera na?",
        type: "Nanu ya ing Given",
        answers: [
          {
            answer:
              "Memayad yang P256.00 i Dang Gloria para king kuryenti ampong P170.00 para king danum",
            correct: true,
          },
          { answer: "nung atin ya mung P500.00", correct: false },
          { answer: "Magkanu pa ing mitagan karing pera na?", correct: false },
          { answer: "Addition, Subtraction", correct: false },
        ],
      },
      {
        id: 1,
        question:
          "Memayad yang P256.00 i Dang Gloria para king kuryenti ampong P170.00 para king danum. nung atin ya mung P500.00. Magkanu pa ing mitagan karing pera na?",
        type: "Nanu ya ing kutang",
        answers: [
          {
            answer:
              "Memayad yang P256.00 i Dang Gloria para king kuryenti ampong P170.00 para king danum",
            correct: false,
          },
          { answer: "nung atin ya mung P500.00", correct: false },
          { answer: "Magkanu pa ing mitagan karing pera na?", correct: true },
          { answer: "Addition, Subtraction", correct: false },
        ],
      },
      {
        id: 2,
        question: "Question 3",
        type: "Operation a ginamit",
        answers: [
          {
            answer:
              "Memayad yang P256.00 i Dang Gloria para king kuryenti ampong P170.00 para king danum",
            correct: false,
          },
          { answer: "nung atin ya mung P500.00", correct: false },
          { answer: "Magkanu pa ing mitagan karing pera na?", correct: false },
          { answer: "Addition, Subtraction", correct: true },
        ],
      },
      {
        id: 3,
        question:
          "Mekatipun yang 615 a gamit a papil i Mrs. Medina. Ding 200 kareti kule lang brown, ding 62 dilo la, at ding aliwa maputi la. Pilan la ngan ding maputi karing eganaganang papil?",
        type: "GIVEN",
        answers: [
          {
            answer:
              "Mekatipun yang 615 a gamit a papil i Mrs. Medina. Ding 200 kareti kule lang brown, ding 62 dilo la, at ding aliwa maputi la",
            correct: true,
          },
          {
            answer: "Pilan la ngan ding maputi karing eganaganang papil?",
            correct: false,
          },
          {
            answer:
              "Ding 200 kareti kule lang brown, ding 62 dilo la, at ding aliwa maputi la",
            correct: false,
          },
          { answer: "Addition, Subtraction", correct: false },
        ],
      },
      {
        id: 4,
        question:
          "Mekatipun yang 615 a gamit a papil i Mrs. Medina. Ding 200 kareti kule lang brown, ding 62 dilo la, at ding aliwa maputi la. Pilan la ngan ding maputi karing eganaganang papil?",
        type: "KUTANG",
        answers: [
          {
            answer:
              "Mekatipun yang 615 a gamit a papil i Mrs. Medina. Ding 200 kareti kule lang brown, ding 62 dilo la, at ding aliwa maputi la",
            correct: false,
          },
          {
            answer: "Pilan la ngan ding maputi karing eganaganang papil?",
            correct: true,
          },
          {
            answer:
              "Ding 200 kareti kule lang brown, ding 62 dilo la, at ding aliwa maputi la",
            correct: false,
          },
          { answer: "Addition, Subtraction", correct: false },
        ],
      },
    ],
  },
  {
    id: 11,
    category: "Solve routine word problem invaluing addition and subtraction",
    questions: [
      { id: 0, question: "Question 1", answers: [] },
      { id: 1, question: "Question 2", answers: [] },
      { id: 2, question: "Question 3", answers: [] },
      { id: 3, question: "Question 4", answers: [] },
      { id: 4, question: "Question 5", answers: [] },
    ],
  },
  {
    id: 12,
    category: "Solve non-routine problem invaluing multiplication",
    questions: [
      { id: 0, question: "Question 1", answers: [] },
      { id: 1, question: "Question 2", answers: [] },
      { id: 2, question: "Question 3", answers: [] },
      { id: 3, question: "Question 4", answers: [] },
      { id: 4, question: "Question 5", answers: [] },
    ],
  },
  {
    id: 13,
    category: "Solve routine word problem invaluing multiplication",
    questions: [
      { id: 0, question: "Question 1", answers: [] },
      { id: 1, question: "Question 2", answers: [] },
      { id: 2, question: "Question 3", answers: [] },
      { id: 3, question: "Question 4", answers: [] },
      { id: 4, question: "Question 5", answers: [] },
    ],
  },
  {
    id: 14,
    category: "Solve non-routine word problem invaluing division",
    questions: [
      { id: 0, question: "Question 1", answers: [] },
      { id: 1, question: "Question 2", answers: [] },
      { id: 2, question: "Question 3", answers: [] },
      { id: 3, question: "Question 4", answers: [] },
      { id: 4, question: "Question 5", answers: [] },
    ],
  },
  {
    id: 15,
    category: "Solve routine word problem",
    questions: [
      { id: 0, question: "Question 1", answers: [] },
      { id: 1, question: "Question 2", answers: [] },
      { id: 2, question: "Question 3", answers: [] },
      { id: 3, question: "Question 4", answers: [] },
      { id: 4, question: "Question 5", answers: [] },
    ],
  },
  {
    id: 16,
    category: "Solve non-routine word problem",
  },
  {
    id: 17,
    category: "Solve non-routine word problem invaluing fraction",
  },
  {
    id: 18,
    category: "Compare using relation symbol of fraction",
  },
  {
    id: 19,
    category: "Arange similar fraction in increasing and decreasing order",
  },
  {
    id: 20,
    category: "Arrange decimilar fraction in increasing and decreasing order",
  },
  {
    id: 21,
    category: "Solve non-routine problem invaluing square tiles",
  },
  {
    id: 22,
    category: "Refer data presented in a photograph",
  },
];
