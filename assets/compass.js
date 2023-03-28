// function getCardinalDirection(degrees) {
//   const degreeRanges = [ 
//     { direction: "N", range: [0, 11.25] },
//     { direction: "NNE", range: [11.25, 33.75] },
//     { direction: "NE", range: [33.75, 56.25] },
//     { direction: "ENE", range: [56.25, 78.75] },
//     { direction: "E", range: [78.75, 101.25] },
//     { direction: "ESE", range: [101.25, 123.75] },
//     { direction: "SE", range: [123.75, 146.25] },
//     { direction: "SSE", range: [146.25, 168.75] },
//     { direction: "S", range: [168.75, 191.25] },
//     { direction: "SSW", range: [191.25, 213.75] },
//     { direction: "SW", range: [213.75, 236.25] },
//     { direction: "WSW", range: [236.25, 258.75] },
//     { direction: "W", range: [258.75, 281.25] },
//     { direction: "WNW", range: [281.25, 303.75] },
//     { direction: "NW", range: [303.75, 326.25] },
//     { direction: "NNW", range: [326.25, 348.75] },
//     { direction: "N", range: [348.75, 360] },
//   ];

//   for (let i = 0; i < degreeRanges.length; i++) {
//     if (degrees >= degreeRanges[i].range[0] && degrees < degreeRanges[i].range[1]) {
//       return degreeRanges[i].direction;
//     }
//   }
//   return "N"; // default direction if degrees is not within any of the defined ranges
// }

//   // module.exports = { getCardinalDirection };

// //Deprecated approach below.  The above defined ranges is more compatible with the swich / case I want to implement to handle wind direction.  Note...did not use switch case after all as it's much easier just to call the function and pass the numerical wind dir.

 // switch (currentWindDir) {
    //     case "N":
    //         currentWindDir = "N":
    //         break;
    //     case "NNE":
    //         currentWindDir = "NNE"
    //         break;
    //     case "NE":
    //         currentWindDir = "NE"
    //         break;
    //     case "ENE":
    //         currentWindDir = "ENE"
    //         break;
    //     case "E":
    //         currentWindDir = "E"
    //         break;
    //     case "ESE":
    //         currentWindDir = "ESE"
    //         break;
    //     case "SE":
    //         currentWindDir = "SE"
    //         break;
    //     case "SSE":
    //         currentWindDir = "SSE"
    //         break;
    //     case "S":
    //         currentWindDir = "S"
    //         break;
    //     case "SSW":
    //         currentWindDir = "SSW"
    //         break;
    //     case "WSW":
    //         currentWindDir = "WSW"
    //         break;
    //     case "W":
    //         currentWindDir = "W"
    //         break;
    //     case "WNW":
    //         currentWindDir = "WNW"
    //         break;
    //     case "NNW":
    //         currentWindDir = "NNW"
    //         break;
    // };

// // const compassDeg = [...new Array(360).keys()]
// // const compassDirectionsArr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  