function generateMarkdown(data) {
  console.log(data)
  return `
  ${ generateTitle( data.title )}

  ${ generateDescription( data.description )}

  ${ generateToC( data.ToC ) }
  `; 
}

function generateTitle( title ){
  console.log( title )
  return `
   # ${title}
`
}

function generateDescription( description ){
  return `
  <a name="desc"></a>
  ## ${description}`
}

function generateToC( ToC ){
 
    return`
    #Table of Contents
   1. [ Description ] (#desc)
   2. [ Installation ] (#install)
   3. [Usage] (#usage)
   4. [Licence] (#licence)
   5. [Contributing] (#contributing)
   6. [Tests] (#tests)
   7. [GitHub Profile Picture] (#profilePic)
   8. [GitHub Email] (#email)
  `
  
}
module.exports = generateMarkdown;
