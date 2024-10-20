console.log(JSON.parse(""));

// var encodedString =
//   "eyJpdiI6InBKTlQ4REhIOFJOdktQLzhySktIeHc9PSIsInZhbHVlIjoiblZ4bVRMTmFSYWJCY2VGbkR5UWYxaVAza09nWUxZcm1oUm9OS3hyYkdVU0NTNXViN0NMeEJBdCsxbXBVN1dkL0tmSzREZExZRWxGdWsyd0wrVDBhNCtWb2V3STFQM0hDaU9zNEJDYVFJajc4eFE0TnBOYjlTSTl6cS91VlBYanEiLCJtYWMiOiIwMWJlODYyNmIzNzhiZmIzZDNlYjQzMTk1ZWRiMWY1M2Y5NGZjZTg2NjRlZGEwNDRmZGMyNzU5ODRlMjMyNTk4In0=";
// var decodedString = atob(encodedString);
// console.log(decodedString); // This will output the decoded string
//0PHz4VJV

// var encodedString =
//   "eyJ0aXRsZSI6Ik9wcGVuaGVpbWVyIDIwMjMiLCJzZXJ2ZXIiOiJ2aXBlciIsInJlZiI6Imh0dHBzOi8vZW1iZWQuc3UvIiwieGlkIjoiOFNkejVDWmxKV2JsOXlMNk1IYzBSSGEiLCJ1d3VJZCI6ImNtRnBhMmxxWVhWellTNXVaWFF2TlM4M056WXpOemN3IiwiZXBpc29kZUlkIjoibTo4NzI1ODU6MToxIiwiaGFzaCI6ImQxbklvdFdVanBXT0lwVk14c0dSNVJHU1NaMmFTeFVWNGwyUTRvbE1tQlZNblJXTWFCRFppaEhTQjlGY1JabUk2SUNhekZHYWl3aUlsZFdZekppT2lVV2JoNW1JN3hTZmljblF5UTNabTFHYVlGR05LVmxRMWczTUxOVFRCQjFWMHAyUTRvbE1tQlZNblJXTWFCRFppaEhTQjlGY1JabUk2SUNhekZHYWl3aUl5VkdjcFpuSTZJU1p0Rm1iaXMzVyIsInBvc3RlciI6IiJ9";
// var decodedString = atob(encodedString);
// console.log(decodedString); // This will output the decoded string
// //0PHz4VJV

// (function () {
//   var id = 385687;
//   var movieId = id.toString();

//   if (movieId) {
//     // Some encoded verification value calculation
//     var verificationValue = btoa(someEncodedValue(movieId));

//     // Set the encoded verification value in sessionStorage
//     console.log("vrf_" + movieId, verificationValue);
//     console.log(atob(verificationValue));
//   }

//   function someEncodedValue(id) {
//     // Placeholder for the actual encoding logic
//     const encoded = id
//       .split("")
//       .map((c) => String.fromCharCode(c.charCodeAt(0) + 1))
//       .join("");
//     return encoded;
//   }
// })();
