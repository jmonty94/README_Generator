// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    const reqLicense = license;
    console.log(reqLicense);
    const badgeURL = "https://img.shields.io/badge/License-";
    switch (reqLicense) {
      case 'MIT':
        const mitURL = "MIT-yellow.svg";
        finishedURL = (badgeURL+mitURL);
        break;
      case 'APACHE 2.0':
        const apacheURL = "Apache_2.0-blue.svg";
        finishedURL = (badgeURL+apacheURL);
        break;
      case 'GPL 3.0':
        const gplURL = "GPLv3-blue.svg";
        finishedURL = (badgeURL+gplURL);
        break;
      case 'BDS 3':
        const bdsURL = "BSD_3--Clause-blue.svg";
        finishedURL = (badgeURL+bdsURL);
        break;
      };
      console.log(finishedURL);
      const badge = (`![GitHub license](${finishedURL})`);
      console.log(badge);
    return badge;
  };
  return "";
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#License)\n`
  }
  return '';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return`## License
    This project is licensed under ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projName}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.motivation}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#Usage)

  ${renderLicenseLink(data.license)}
  
  * [Contributing](#Contributing)

  * [Tests](#Tests)

  * [Questions](#Questions)

  ## Installation

  To install any necessary dependencies please run the following into your terminal:

  \`\`\`
  ${data.install}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contribution}

  ## Tests

  If you would like to run tests plese enter the following:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  If you have any questions or concerns please open an issue or contact me directly at ${data.email}.
  For more of my work please visit my github [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
