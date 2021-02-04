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


const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
  };
  console.log(generatePage(username, github));