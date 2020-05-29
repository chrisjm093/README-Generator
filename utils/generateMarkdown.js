function generateMarkdown(data) {
  console.log(data)
  return `
  ${ generateTitle( data.title )}

  ${ generateDescription( data.description )}

  ${ generateToC() }

  ${ generateInstall( data.install )}
  
  ${ generateUsage( data.usage )}
  
  ${ generateLicence( data.licence )}
  
  ${ generateContributers( data.contributers )}
  
  ${ generateTests( data.tests )}
  
  ${ generateProfilePic( data.picLink )}
  
  ${ generateEmail( data.email )}
  `; 
};

function generateTitle( title ){
  console.log( title )
  return `
   # ${title}
`
};

function generateDescription( description ){
  return `
  <a name="desc"></a>
  ## ${description}`
};

function generateToC(){
 
    return`
    #Table of Contents
   1. [ Description ](#desc)
   2. [ Installation ](#install)
   3. [Usage](#usage)
   4. [Licence](#licence)
   5. [Contributers](#contributers)
   6. [Tests](#tests)
   7. [GitHub Profile Picture](#profilePic)
   8. [GitHub Email](#email)
  `
  
};

function generateInstall( install ){
  return `
  <a name="install"></a>
  ## Install: ${install}`

};

function generateUsage( usage ){
  return `
  <a name="usage"></a>
  ## Usage: ${usage}`

};

function generateLicence( licence ){
  return `
  <a name="licence"></a>
  ## Licence: ${licence}`

};

function generateContributers( contributers ){
  return `
  <a name="contributers"></a>
  ## Contributers: ${contributers}`

};

function generateTests( tests ){
  return `
  <a name="tests"></a>
  ## Tests: ${tests}`

};

function generateProfilePic( picLink ) {
  return `
  <a name="picLink"></a>
  ## Developer: [GitHub Profile Photo](https://github.com/${picLink}.png)`

};

function generateEmail( email ) {
  return `
  <a name="email"></a>
  ## Developer Contact: ${email}`

}

module.exports = generateMarkdown;
