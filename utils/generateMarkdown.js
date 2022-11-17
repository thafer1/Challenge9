// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(data) {
  if (data == 'Apache'){
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    //(https://opensource.org/licenses/Apache-2.0)
  } else if (data == 'GNU') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    //(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
  } else if (data == 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    //(https://opensource.org/licenses/MIT)
  } else if (data == 'BSD') {
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
    //(https://opensource.org/licenses/BSD-3-Clause)
  } else if (data == 'Boost') {
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
    //(https://www.boost.org/LICENSE_1_0.txt)
  } else {
    return '';
  }
}

// Function that returns the license link
function renderLicenseLink(data) {
    if (data == 'Apache'){
      return `License link: https://opensource.org/licenses/Apache-2.0`
    } else if (data == 'GNU') {
      return `License link: https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
    } else if (data == 'MIT') {
      return `License link: https://opensource.org/licenses/MIT`
    } else if (data == 'BSD') {
      return `License link: https://opensource.org/licenses/BSD-3-Clause`
    } else if (data == 'Boost') {
      return `License link: https://www.boost.org/LICENSE_1_0.txt`
    } else {
      return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License 
  This project uses the ${data.license} license.<br />
  ${renderLicenseLink(data.license)}
  
  ## Contributing 
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have questions about this application, please email ${data.email} for support.  
  Github profile: https://github.com/${data.github}`;
}

module.exports = generateMarkdown;
