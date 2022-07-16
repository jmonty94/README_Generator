// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    const reqLicense = license
    console.log(reqLicense);

  }
  return null
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license)
  return `# ${data.projName}

  ## Description

  ${data.motivation}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#Usage)

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

  ${data.contributing}

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
