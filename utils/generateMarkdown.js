function generateMarkdown(data) {
return `
${ generateTitle( data.title )}
${ generateToC() }
${ generateDescription( data.description )}
${ generateInstall( data.install )}
${ generateUsage( data.usage )}
${ generateLicense( data.license )}
${ generateContributors( data.contributors )}
${ generateTests( data.tests )}
${ generateEmail( data.email )}
`; 
};

function generateTitle( title ){
console.log( title )
return `
# ${title}

---

`
};

function generateDescription( description ){
return `
#Description:  
---
${description}

`
};

function generateToC(){

return`
## Table of Contents  
--
1. [Description](#description)
2. [Installation](#install)
3. [Usage](#usage)
4. [License](#license)
5. [Contributors](#contributors)
6. [Tests](#tests)
7. [GitHub Email](#contact)

---
`

};

function generateInstall( install ){
return `
## Install: 
---  
${install}

`

};

function generateUsage( usage ){
return `
## Usage: 
--- 
${usage}

`

};

function generateLicense( license ){

if( license === "MIT"){
return `
## License: 
--- 
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

`

}else if( license === "GPLv3"){
return`
## License:  
---
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

`

}else if( license === "GPL"){
return`
## License:
---  
[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

`

}else if( license === "Creative Commons"){
return`
## License:
---   
[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)

`

}else{
return`
## License:  
---
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

`
}
};


function generateContributors( contributors ){
return `
## Contributors: 
--- 
${contributors}

`

};

function generateTests( tests ){
return `
## Tests:   
---
${tests}

`

};

// function generateProfilePic( picLink ) {
// return `
// #Developer:  
// --
// ## ${picLink}  

// ![GitHub Profile Photo](https://github.com/${picLink}.png)

// `

// };

function generateEmail( email ) {
return `
## Contact: 
--- 
${email}

`

}

module.exports = generateMarkdown;
