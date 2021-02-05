const fs = require("fs");
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2, process.argv.length);
// const username = profileDataArgs[0];
// const github = profileDataArgs[1];

const [username, github] = profileDataArgs; // ES6 feature assignemnt destructuring

// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

//const generatePage = () => 'name: Jane, Github: janehub';


// const generatePage = (userName, githubName) => {
//     return`
//     Name: ${userName} 
//     Github: ${githubName}
//     `;
// };




  fs.writeFile('index.html', generatePage(username, github), err => 
  {
    if (err) throw err;
    console.log("Portfolio complete! Check out index.html to see the output!'");
  })

