// const APIURL = 'http://127.0.0.1:5000';

// // LOGIN -> performs the login
// async function getScraper(input) {
//     try {
//         const response = await fetch(APIURL + "/run-script", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             params: JSON.stringify({ input: inputValue }),
//         });
      
//         if (response.ok) {
//             const pippo = await response.json();
//             console.log("success");
//             return pippo;
//         } else {
//             throw new Error();
//         }
//     } catch(e) {
//         throw new Error(e) ;
//     }
// }

// const API = { getScraper };
// export default API;