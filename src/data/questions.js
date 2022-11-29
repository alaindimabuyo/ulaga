import imagetwooneone from "../assets/image21_1.png";
import imagetwoonetwo from "../assets/image21_2.png";
import imagetwoonethree from "../assets/image21_3.png";
import imagetwoonefour from "../assets/image21_4.png";
import imagetwoonefive from "../assets/image21_5.png";
import imageoneeightone from "../assets/image18_1.png";
import imageoneeighttwo from "../assets/image18_2.png";
import imageoneeightthree from "../assets/image18_3.png";
import imageoneeightfour from "../assets/image18_4.png";
import imageoneeightfive from "../assets/image18_5.png";
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
      {
        id: 0,
        question:
          "Sinali yang Php 287.00 libru ampong Php 58.00 a ballpen i Sherly. Nung memye yang Php 400.00 king magtinda, magkanu pa ing meging sukli na? Nanu ya ing KUTANG?",
        answers: [
          { answer: "Ing taung sinali.", correct: false },
          { answer: "Bilang da reng seli ng bage.", correct: false },
          { answer: "Ulaga ning perang nang Sherly.", correct: false },
          { answer: "Ulaga ning sukli nang Sherly.", correct: true },
        ],
      },
      {
        id: 1,
        question:
          "Sinali yang Php 287.00 libru ampong Php 58.00 a ballpen i Sherly. Nung memye yang Php 400.00 king magtinda, magkanu pa ing meging sukli na? Nanu la reng GIVEN ning problem?",
        answers: [
          {
            answer:
              "Php50 a libru, Php300 a ballpen, Php500 a pera nang Sherly",
            correct: false,
          },
          {
            answer:
              "Php100 a libru, Php20 a ballpen, Php155 a pera nang Sherly",
            correct: false,
          },
          {
            answer:
              "Php287 a libru, Php58 a ballpen, Php400 a pera nang Sherly",
            correct: true,
          },
          {
            answer:
              "Php215 a libru, Php64 a ballpen, Php400 a pera nang Sherly",
            correct: false,
          },
        ],
      },
      {
        id: 2,
        question:
          "Mekarakap yang 132 asan i Mang Nardo. Ding 56 hitu la, ding 48 bulig la, at ding mitagan bangus la. Pilan la ngan ding bangus a arakap na? Nanung la reng OPERATION a ginamit?",
        answers: [
          { answer: "ADDITION ampo SUBTRACTION", correct: true },
          { answer: "MULTIPLICATION ampo DIVISION", correct: false },
          { answer: "SUBTRACTION ampo MULTIPLICATION", correct: false },
          { answer: "DIVISION ampo ADDITION", correct: false },
        ],
      },
      {
        id: 3,
        question:
          "Ing Masamat Elementary School atin yang magaral a 32 kindergarten, 145 a magaral magumpisang Grade I hanggang Grade III. Nung ing eskwela atin yang 262 eganaganang magaral, pilan la ngan ding atsu king Grade IV hanggang Grade VI? Nanu ya ing NUMBER SENTENCE?",
        answers: [
          {
            answer: "262-(32+145) = N",
            correct: true,
          },
          {
            answer: "(262-145)/32 = N",
            correct: false,
          },
          {
            answer: "32+145+262 = N",
            correct: false,
          },
          {
            answer: "262-145-32 = N",
            correct: false,
          },
        ],
      },
      {
        id: 4,
        question:
          "Ing Masamat Elementary School atin yang magaral a 32 kindergarten, 145 a magaral magumpisang Grade I hanggang Grade III. Nung ing eskwela atin yang 262 eganaganang magaral, pilan la ngan ding atsu king Grade IV hanggang Grade VI? Nanu ya ing SAGUT?",
        answers: [
          {
            answer: "64 a magaral magumpisang Grade IV to Grade VI",
            correct: false,
          },
          {
            answer: "85 a magaral magumpisang Grade IV to Grade VI",
            correct: true,
          },
          {
            answer: "32 a magaral magumpisang Grade IV to Grade VI",
            correct: false,
          },
          {
            answer: "262 a magaral magumpisang Grade IV to Grade VI",
            correct: false,
          },
        ],
      },
    ],
  },
  {
    id: 12,
    category: "Solve non-routine problem invaluing multiplication",
    questions: [
      {
        id: 0,
        questions: [
          {
            id: 0,
            question:
              "Sosopan neng Caloy I tatang manaling petsay. Balang tali atin yang 4 a tanamang petsay. Pilan lang petsay ding 9 a tali? Nanu ya ing NUMBER SENTENCE?",
            answers: [
              {
                answer: "4 x 9 = N",
                correct: true,
              },
              {
                answer: "9 / 4 = N",
                correct: false,
              },
              {
                answer: "9 x 9 = N",
                correct: false,
              },
              {
                answer: "4 x 4 = N",
                correct: false,
              },
            ],
          },
          {
            id: 1,
            question:
              "King metung a klasi ating 8 row a maki 5 magaral Pilan la ngan ding magaral king klasi. Nanu ya ing KUTANG?",
            answers: [
              { answer: "Bilang da reng row ampo magaral.", correct: false },
              { answer: "Bilang da reng row keng klasi.", correct: false },
              { answer: "Bilang da reng magaral bawal row.", correct: false },
              {
                answer: "Bilang da ngan ding magaral king klasi.",
                correct: true,
              },
            ],
          },
          {
            id: 2,
            question:
              "Gagamit yang 12 ebun I Mang Rosa king balang leche flan a gagawan na. Nung mekagawa yang 6 a leche flan, pilan lang ebun ding ginamit na? Nanu ya ing KUTANG?",
            answers: [
              {
                answer: "Bilang da reng ebun keng metung a leche flan.",
                correct: false,
              },
              {
                answer: "Bilang da reng eganaganang ebun a ginamit na.",
                correct: true,
              },
              { answer: "Bilang da reng leche flan.", correct: false },
              { answer: "Ing taung gagawang leche flan.", correct: false },
            ],
          },
          {
            id: 3,
            question:
              "Atin yang 7 kapaya ing metung a basket. Lima la ring basket. Pilan la ngan ding kapaya? Nanu ya ing NUMBER SENTENCE?",
            answers: [
              {
                answer: "7 + 5 = N",
                correct: false,
              },
              {
                answer: "7 x 5 = N",
                correct: true,
              },
              {
                answer: "5 x 5 = N",
                correct: false,
              },
              {
                answer: "7 - 5 = N",
                correct: false,
              },
            ],
          },
          {
            id: 4,
            question:
              "Balang metung karing 4 a mikakaluguran magdala yang 5 a libru king kayang bag. Pilan la ngan ding libru? Nanu ya ing NUMBER SENTENCE?",
            answers: [
              {
                answer: "5 x 4 = N",
                correct: true,
              },
              { answer: "5 - 4 = N", correct: false },
              {
                answer: "4 + 5 = N",
                correct: false,
              },
              { answer: "Alang sagut", correct: false },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 13,
    category:
      "Solve routine word problem invaluing multiplication and subtraction",
    questions: [
      {
        id: 0,
        question:
          "Ating 4 a kaung pizza. Ing balang kaun atin yang 8 pirasu. Nung 20 pirasu la ring mepangan, pilan lang pirasu ring e mepangan? Nanu ya ing KUTANG?",
        answers: [
          { answer: "Bilang da reng pizza.", correct: false },
          { answer: "Bilang da reng pirasu e mepangan.", correct: true },
          { answer: "Bilang da reng pirasu ning pizza.", correct: false },
          { answer: "Bilang da reng pizzang mepangan.", correct: false },
        ],
      },
      {
        id: 1,
        question:
          "Ating 4 a kaung pizza. Ing balang kaun atin yang 8 pirasu. Nung 20 pirasu la ring mepangan, pilan lang pirasu ring e mepangan? Nanu ya ing NUMBER SENTENCE?",
        type: "NUMBER SENTENCE",
        answers: [
          {
            answer: "(8 x 4) - 20 = N",
            correct: true,
          },
          {
            answer: "(8 - 4) x 20 = N",
            correct: false,
          },
          {
            answer: "20 + 4 + 8 = N",
            correct: false,
          },
          {
            answer: "4 x 8 x 20 = N",
            correct: false,
          },
        ],
      },
      {
        id: 2,
        question:
          "Ating 4 a kaung pizza. Ing balang kaun atin yang 8 pirasu. Nung 20 pirasu la ring mepangan, pilan lang pirasu ring e mepangan? Nanu ya ing SAGUT?",
        answers: [
          { answer: "20 la reng pizza emepangan.", correct: false },
          { answer: "10 lareng pizza emepangan.", correct: false },
          { answer: "12 la reng pizza mepangan", correct: true },
          { answer: "5 la reng metagan.", correct: false },
        ],
      },
      {
        id: 3,
        question:
          "Atin yang 5 taling libru ing librarian ning metung a eskwela. Ating yang 10 libru ing balang tali. Nung ding 36 a libru meandam la, pilan lang libru ring e meandam? Nanu ya ing NUMBER SENTENCE?",
        answers: [
          {
            answer: "5 + 10 = N",
            correct: false,
          },
          {
            answer: "(5 x 10) - 36 = N",
            correct: true,
          },
          {
            answer: "(5 - 19) x 36 = N",
            correct: false,
          },
          { answer: "N - 36", correct: false },
        ],
      },
      {
        id: 4,
        question:
          "Atin yang 5 taling libru ing librarian ning metung a eskwela. Ating yang 10 libru ing balang tali. Nung ding 36 a libru meandam la, pilan lang libru ring e meandam? Nanu ya ing SAGUT?",
        answers: [
          { answer: "14 la reng librung emeandam.", correct: true },
          { answer: "Ala nang e meandam.", correct: false },
          { answer: "10 la reng emeandam", correct: false },
          { answer: "5 la reng librung emeandam.", correct: false },
        ],
      },
    ],
  },
  {
    id: 14,
    category: "Solve non-routine word problem invaluing division",
    questions: [
      {
        id: 0,
        question:
          "Atin yang 15 olen I Tang Noel. Pinitna nalang pare pareu karing 3 nang paunakan. Pilang olen ing tinggap ning balang paunakan na? Nanu ya ing KUTANG?",
        answers: [
          {
            answer: "Bilang da reng olen na tinggap nang Tang Noel.",
            correct: false,
          },
          { answer: "Bilang da reng olen.", correct: false },
          {
            answer:
              "Bilang da reng olen na tinggap ning balang paunakan nang Tang Olen.",
            correct: true,
          },
          { answer: "Bilang da reng paunakan.", correct: false },
        ],
      },
      {
        id: 1,
        question:
          "Bisa yang saling kending tsokolati i Jhon Bernel a tsa Php 4.00 balang kendi. Nung atin yang Php 32.00 pilan ing asali na? Nanu ya ing GIVEN?",
        answers: [
          { answer: "4 a kendi ampo 32 a tsokolati", correct: false },
          { answer: "32 a kendi ampo Php 4.00 bawat kendi", correct: false },
          {
            answer: "Php 32.00 bawat kendi ampo 4 a tsokolati",
            correct: false,
          },
          {
            answer:
              "Php 32.00 a total a pera nang Jhon Bernel ampo Php 4.00 presyu ning bawat kendi.",
            correct: true,
          },
        ],
      },
      {
        id: 2,
        question:
          "Atin yang 45 sampagang papil I Lizette Nelle a ginrupu na king 5 klasi. Pilang samagang papil ing laman ning balang klasi? Nanu ya ing KUTANG?",
        answers: [
          {
            answer: "Bilang da reng sampangan papil nang Lizette Nelle.",
            correct: false,
          },
          {
            answer: "bilang da reng samagang papil na laman ning balang klasi.",
            correct: true,
          },
          { answer: "Ing taung memyeng sampagang papil.", correct: false },
          { answer: "Bilang da reng klasi.", correct: false },
        ],
      },
      {
        id: 3,
        question:
          "Labing adwang bangus la ring 6 a kilu. Pilan lang bangus ding metung a kilu? Nanu ya ing GIVEN?",
        answers: [
          { answer: "Labing adwang bangus ampo 6 a kilu", correct: true },
          { answer: "Anam a bangus ampo 12 a kilu", correct: false },
          { answer: "Anam a kilu ampo 12 a kilu", correct: false },
          { answer: "12 a bangus ampo 6 a bangus.", correct: false },
        ],
      },
      {
        id: 4,
        question:
          "Ating yang 6 a notebooks I JB. Binalut nala. Ginamit yang 3 kule. Pilang notebooks ing binalut na karing balang kule? Nanu ya ing GIVEN?",
        answers: [
          { answer: "9 la reng binalut", correct: false },
          { answer: "3 notebooks ampo 6 a kule", correct: false },
          { answer: "6 a notebooks ampo 3 a kule", correct: true },
          { answer: "Alang given", correct: false },
        ],
      },
    ],
  },
  {
    id: 15,
    category: "Solve routine word problem",
    questions: [
      {
        id: 0,
        question:
          "Tinanggap yang Php 32.00 I Lito parang karing 8 kilung dyaryung pisali na. Magkanu ya ing balang kilung dyaryu? Nanu ya ing KUTANG?",
        answers: [
          { answer: "Ulaga ning balang kilung dyaryu.", correct: true },
          { answer: "Ulaga ning 8 a kilung dyaryu.", correct: false },
          { answer: "Bilang na pera nang Lito.", correct: false },
          { answer: "Bilang da reng dyaryu.", correct: false },
        ],
      },
      {
        id: 1,
        question:
          "Minta ya tindahan I Jhon ban saling 8 biskwit. Memayad yang Php 56.00 Magkanu ya ing metung a biskwit? Nanu ya ing KUTANG?",
        answers: [
          { answer: "Lugar a pintalan ng Jhon.", correct: false },
          { answer: "Ulaga ning metung a biscuit.", correct: true },
          { answer: "Bage a seli nang Jhon.", correct: false },
          { answer: "Ulaga ning binayad nang Jhon.", correct: false },
        ],
      },
      {
        id: 2,
        question:
          "Mekatipun yang Php 72.00 I Eman kilub ning 8 aldo. Magkanu ing atitipun na king balang aldo? Nanu ya ing KUTANG?",
        answers: [
          { answer: "Ing taung menipun Php 72.00.", correct: false },
          { answer: "Bilang ning aldo menipun I Eman.", correct: false },
          { answer: "Bilang ning atipun nang Eman.", correct: false },
          {
            answer: "Ulaga ning atitipun nang Eman king balang aldo.",
            correct: true,
          },
        ],
      },
      {
        id: 3,
        question:
          "Binalut nalang Eunice ding 72 pirasung manggang tarts king 9 na paketi. Pilang pirasu ing laman ning metung a pekti? Nanu ya ing NUMBER SENTENCE?",
        answers: [
          {
            answer: "72 / 9 = N",
            correct: true,
          },
          {
            answer: "72 x 9 = N",
            correct: false,
          },
          {
            answer: "72 + 9 = N",
            correct: false,
          },
          {
            answer: "72 - 9 = N",
            correct: false,
          },
        ],
      },
      {
        id: 4,
        question:
          "Atin yang 3 anak I Riza. Sinali yang 6 a mansanas at ipitna nala karing anak na. Pilang mansanas ing tanggapan ning baling anak na? Nanu ya ing NUMBER SENTENCE?",
        answers: [
          { answer: "3 / 6 = N", correct: false },
          {
            answer: "3 - 6 = N",
            correct: false,
          },
          {
            answer: "6 / 3 = N",
            correct: true,
          },
          {
            answer: "6 x 3 = N",
            correct: false,
          },
        ],
      },
    ],
  },
  {
    id: 16,
    category:
      "Solve non-routine word problem involving division of whole numbers",
    questions: [
      {
        id: 0,
        question:
          "Sinali yang 0 a paketing sabun ing makibandi keng metung a tindahan. Nung ing balang paketi atin yang 3 pirasung sabun, pilan pirasung sabun in asali na? Nanu ya ing KUTANG?",
        answers: [
          { answer: "Bilang ning paketi ing asali na.", correct: false },
          { answer: "Bilang ning sabun ing seli da.", correct: false },
          {
            answer: "Bilang da reng pirasung sabun na asali na.",
            correct: true,
          },
          { answer: "Ing taung mikibandi keng tindahan.", correct: false },
        ],
      },
      {
        id: 1,
        question:
          "Mekaiskor yang 18 puntus I Alvin king karelang pyalung a basketball. Nung ing buslu na king bola 9 a besis, pilan lang puntus ring katumbas da ding balang buslu na? Nanu ya ing KUTANG?",
        answers: [
          {
            answer: "Bilang da reng puntus a katumbas da ding balang buslu na.",
            correct: true,
          },
          { answer: "Bilang da reng bola ginamit na.", correct: false },
          { answer: "Bilang da reng puntus a ikwa na.", correct: false },
          { answer: "Ing taung memyalung basketball.", correct: false },
        ],
      },
      {
        id: 2,
        question:
          "Sinali yang 18 kortina I Mang Aning para karing 6 nang awang. Pilang kortina ing ikabit na king balang awang? Nanu ya ing NUMBER SENTENCE?",
        answers: [
          {
            answer: "18 x 6 = N",
            correct: false,
          },
          {
            answer: "18 / 6 = N",
            correct: true,
          },
          {
            answer: "6 / 18 = N",
            correct: false,
          },
          {
            answer: "18 + 6 = N",
            correct: false,
          },
        ],
      },
      {
        id: 3,
        question:
          "Ing 80ml. a pabanglu mibulus ya king 10ml. a boti. Pilang boti ing megamit? Nanu ya ing NUMBER SENTENCE?",
        answers: [
          {
            answer: "80 / 10 = N",
            correct: true,
          },
          {
            answer: "10 - 80 = N",
            correct: false,
          },
          {
            answer: "10 / 80 = N",
            correct: false,
          },
          {
            answer: "10 / N = 0",
            correct: false,
          },
        ],
      },
      {
        id: 4,
        question:
          "Atin yang 30 minutu I annie ban pakibatan ing tes na. Nung ing tes atin yang 10 kutang, pilan minutu ing dapat nang gamitan king balang kutang? Nanu ya ing NUMBER SENTENCE?",
        answers: [
          {
            answer: "30 / 10 = N",
            correct: true,
          },
          {
            answer: "10 / 30 = N",
            correct: false,
          },
          {
            answer: "10 - 30 = N",
            correct: false,
          },
          {
            answer:
              "10 x 30 = N.                                                                                                   ",
            correct: false,
          },
        ],
      },
    ],
  },
  {
    id: 17,
    category: "Solve non-routine word problem invaluing fraction",
    questions: [
      {
        id: 0,
        question:
          "Migdrawing yang mabilug I Teacher Ann king pisara. Pinitna ne iti king apat a pare parewu. Kinule ne ing metung a parti. Nanung parti ing kinule nang Teacher Ann?",
        answers: [
          { answer: "1/4", correct: true },
          { answer: "1/5", correct: false },
          { answer: "1/7", correct: false },
          { answer: "3/4", correct: false },
        ],
      },
      {
        id: 1,
        question:
          "Mepitna ya king limang parti ing eggpie. Mengan yang metung a parti I Tatang. Nanung parti ning egg pie ing pengan nang Tatang?",
        answers: [
          { answer: "1/4", correct: false },
          { answer: "1/5", correct: true },
          { answer: "1/6", correct: false },
          { answer: "1/7", correct: false },
        ],
      },
      {
        id: 2,
        question:
          "Migdala yang metung kawung bibingka I Darang Mina. Pinarti neng Ima iti king anam. Mengan yang metung a parti I Koyang Ariel. Nanung parti ning bibingka ing pengan nang Koyang Ariel?",
        answers: [
          { answer: "1/7", correct: false },
          { answer: "1/6", correct: true },
          { answer: "1/5", correct: false },
          { answer: "1/4", correct: false },
        ],
      },
      {
        id: 3,
        question:
          "Pinutut neng Tatang ing metung a dutung at gewa neng limang pirasung pare parewu. Ginamit yang metung a pirasu I Koyang Jhon. Nanung parti ning dutung ing ginamit nang Koyang Jhon?",
        answers: [
          { answer: "1/7", correct: false },
          { answer: "1/6", correct: false },
          { answer: "1/5", correct: true },
          { answer: "1/4", correct: false },
        ],
      },
      {
        id: 4,
        question:
          "Mepirasu ya ing metung a tali king anam a pare parewung pirasu. Menyad yang metung a pirasu I Lizette para king project na. Nanung parti ning tali ing inyad nang Lizette?",
        answers: [
          { answer: "1/6", correct: true },
          { answer: "2/6", correct: false },
          { answer: "3/6", correct: false },
          { answer: "5/6", correct: false },
        ],
      },
    ],
  },
  {
    id: 18,
    category: "Compare using relation symbol of fraction",
    questions: [
      {
        id: 0,
        question:
          "Lawen yu la ding fractions ampong pipagkumparan la gamit ding simbulung: >, <, =.",
        image: imageoneeightone,
        answers: [
          { answer: ">", correct: true },
          { answer: "<", correct: false },
          { answer: "=", correct: false },
          { answer: "alang sagut", correct: false },
        ],
      },
      {
        id: 1,
        question:
          "Lawen yu la ding fractions ampong pipagkumparan la gamit ding simbulung: >, <, =.",
        image: imageoneeighttwo,
        answers: [
          { answer: ">", correct: false },
          { answer: "<", correct: true },
          { answer: "=", correct: false },
          { answer: "alang sagut", correct: false },
        ],
      },
      {
        id: 2,
        question:
          "Pilinan ing sagut ding fractions da ring drawing ampong pipagkumparan gamit ding >, <, =.",
        image: imageoneeightthree,
        answers: [
          { answer: ">", correct: false },
          { answer: "<", correct: true },
          { answer: "=", correct: false },
          { answer: "alang sagut", correct: false },
        ],
      },
      {
        id: 3,
        question:
          "Pilinan ing sagut ding fractions da ring drawing ampong pipagkumparan gamit ding >, <, =.",
        image: imageoneeightfour,
        answers: [
          { answer: ">", correct: true },
          { answer: "<", correct: false },
          { answer: "=", correct: false },
          { answer: "alang sagut", correct: false },
        ],
      },
      {
        id: 4,
        question:
          "Pilinan ing sagut ding fractions da ring drawing ampong pipagkumparan gamit ding >, <, =.",
        image: imageoneeightfive,
        answers: [
          { answer: ">", correct: false },
          { answer: "<", correct: true },
          { answer: "=", correct: false },
          { answer: "alang sagut", correct: false },
        ],
      },
    ],
  },
  {
    id: 19,
    category: "Arange similar fraction in increasing and decreasing order",
    questions: [
      {
        id: 0,
        question:
          "Lawen la ding equation, pilinan ing ustu a pamitukituki kareng fractions.",
        answers: [
          { answer: "1/6, 5/6, 1/6, 4/6", correct: false },
          { answer: "5/6, 1/6, 1/6, 4/6", correct: false },
          { answer: "1/6, 1/6, 4/6, 5/6", correct: true },
          { answer: "1/6, 5/6, 4/6, 1/6", correct: false },
        ],
      },
      {
        id: 1,
        question:
          "Lawen la ding equation, pilinan ing ustu a pamitukituki kareng fractions.",
        answers: [
          { answer: "2/5, 3/5, 4/5, 5/5", correct: true },
          { answer: "3/5, 2/5, 5/5, 4/5", correct: false },
          { answer: "4/5, 2/5, 3/5, 5/5", correct: false },
          { answer: "5/5, 3/5, 4/5, 2/5", correct: false },
        ],
      },
      {
        id: 2,
        question:
          "Lawen la ding equation, pilinan ing ustu a pamitukituki kareng fractions.",
        answers: [
          { answer: "2/4, 3/4, 4/4, 1/4", correct: false },
          { answer: "1/4, 2/4, 3/4, 4/4", correct: true },
          { answer: "3/4, 2/4, 4/4, 1/4", correct: false },
          { answer: "3/4, 4/4, 1/4, 2/4", correct: false },
        ],
      },
      {
        id: 3,
        question:
          "Lawen la ding equation, pilinan ing ustu a pamitukituki kareng fractions.",
        answers: [
          { answer: "2/7, 5/7, 4/7, 7/7", correct: false },
          { answer: "2/7, 4/7, 5/7, 7/7", correct: true },
          { answer: "4/7, 5/7, 2/7, 7/7", correct: false },
          { answer: "4/7, 2/7, 7/7, 5/7", correct: false },
        ],
      },
      {
        id: 4,
        question:
          "Lawen la ding equation, pilinan ing ustu a pamitukituki kareng fractions.",
        answers: [
          { answer: "2/8, 4/8, 5/8, 7/8", correct: true },
          { answer: "4/8, 5/8, 2/8, 7/8", correct: false },
          { answer: "5/8, 4/8, 7/8, 2/8", correct: false },
          { answer: "7/8, 4/8, 2/8, 5/8", correct: false },
        ],
      },
    ],
  },
  {
    id: 20,
    category: "Arrange decimilar fraction in increasing and decreasing order",
    questions: [
      {
        id: 0,
        question:
          "Nanu yang parti ing kabuuan ing ating kule. Pilinan yu ing sagut ing istung pakibat.",
        image: imagetwooneone,
        answers: [
          { answer: "1/2", correct: false },
          { answer: "1/3", correct: false },
          { answer: "1/4", correct: true },
          { answer: "1/5", correct: false },
        ],
      },
      {
        id: 1,
        question:
          "Nanu yang parti ing kabuuan ing ating kule. Pilinan yu ing sagut ing istung pakibat.",
        image: imagetwoonetwo,
        answers: [
          { answer: "1/2", correct: false },
          { answer: "1/3", correct: false },
          { answer: "1/4", correct: false },
          { answer: "1/5", correct: true },
        ],
      },
      {
        id: 2,
        question:
          "Nanu yang parti ing kabuuan ing ating kule. Pilinan yu ing sagut ing istung pakibat.",
        image: imagetwoonethree,
        answers: [
          { answer: "1/2", correct: false },
          { answer: "1/3", correct: true },
          { answer: "1/4", correct: false },
          { answer: "1/5", correct: false },
        ],
      },
      {
        id: 3,
        question:
          "Nanu yang parti ing kabuuan ing ating kule. Pilinan yu ing sagut ing istung pakibat.",
        image: imagetwoonefour,
        answers: [
          { answer: "1/2", correct: false },
          { answer: "1/3", correct: false },
          { answer: "1/4", correct: false },
          { answer: "1/5", correct: true },
        ],
      },
      {
        id: 4,
        question:
          "Nanu yang parti ing kabuuan ing ating kule. Pilinan yu ing sagut ing istung pakibat.",
        image: imagetwoonefive,
        answers: [
          { answer: "1/2", correct: true },
          { answer: "1/3", correct: false },
          { answer: "1/4", correct: false },
          { answer: "1/5", correct: false },
        ],
      },
    ],
  },
  {
    id: 21,
    category: "Solve non-routine problem invaluing square tiles",
    questions: [
      {
        id: 0,
        question:
          "Atin yang rektanggulung gid paper I Chona. Ing lapad na 8 square units ya, at ing kaba na 23 square units ya. Pilan la ngan ding square units na ning grid paper na?",
        answers: [
          { answer: "8 square units", correct: false },
          { answer: "23 square units", correct: false },
          { answer: "184 square units", correct: true },
          { answer: "204 square units", correct: false },
        ],
      },
      {
        id: 1,
        question:
          "Ing takap ng lamesang Aling Flor ating yang 4 square units king metung a gilid ampong 4 mu rin king metung pang gilid. Pilan la ngan ding square units ning takap lamesa?",
        answers: [
          { answer: "16 square units", correct: true },
          { answer: "20 square units", correct: false },
          { answer: "40 square units", correct: false },
          { answer: "8 square units", correct: false },
        ],
      },
    ],
  },
  {
    id: 22,
    category: "Refer data presented in a photograph",
    questions: [
      {
        id: 0,
        question: "Nanu ya pamagat ing graph?",
        //image: graphtwotwo,
        answers: [
          { answer: "Tau king iskwela", correct: false },
          { answer: "Tanaman king iskwela", correct: true },
          { answer: "Klasi da reng tanaman", correct: false },
          { answer: "Klasi da reng iskwela", correct: false },
        ],
      },
      {
        id: 1,
        question:
          "Pilan tanaman ing katumbas ning balang metung litratung tanaman?",
        //image: graphtwotwo,
        answers: [
          { answer: "Apat", correct: false },
          { answer: "Lima", correct: true },
          { answer: "Anam", correct: false },
          { answer: "Adwa", correct: false },
        ],
      },
      {
        id: 2,
        question: "Atin pilan king balang klasing tanaman?",
        //image: graphtwotwo,
        answers: [
          {
            answer:
              "20 Santan, 30 San Francisco, 10 Rose, 15 Sampaguita, 60 White Angel",
            correct: true,
          },
          {
            answer:
              "30 Santan, 20 San Francisco, 10 Rose, 60 Sampaguita, 15 White Angel",
            correct: false,
          },
          {
            answer:
              "20 Santan, 20 San Francisco, 15 Rose, 10 Sampaguita, 60 White Angel",
            correct: false,
          },
          {
            answer:
              "10 Santan, 10 San Francisco, 40 Rose, 15 Sampaguita, 50 White Angel",
            correct: false,
          },
        ],
      },
      {
        id: 3,
        question: "Pilan lang klasing tanaman ding pisasabyan king graph?",
        //image: graphtwotwo,
        answers: [
          { answer: "Adwa lang klasing tanaman", correct: false },
          { answer: "Atlu lang klasing tanaman", correct: false },
          { answer: "Apat lang klasing tanaman", correct: false },
          { answer: "Lima lang klasing tanaman", correct: true },
        ],
      },
    ],
  },
];
