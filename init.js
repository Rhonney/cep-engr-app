$(document).ready(() => {
  const $firstName = $('.First-Name-button');
$firstName.on('click', () => {
$firstNamenavDropdown.toggle();
})
  const $firstNamenavDropdown = $('#firstNamenav-dropdown');
})

$(document).ready(() => {
  const $lastName = $('.Last-Name-button');
$lastName.on('click', () => {
$lastNamenavDropdown.toggle();
})
  const $lastNamenavDropdown = $('#lastNamenav-dropdown');
})

$(document).ready(() => {
  const $jobTitle = $('.Job-Title-button');
$jobTitle.on('click', () => {
$jobTitlenavDropdown.toggle();
})
  const $jobTitlenavDropdown = $('#jobTitlenav-dropdown');
})

$(document).ready(() => {
  const $homeOffice = $('.Home-Office-button');
$homeOffice.on('click', () => {
$homeOfficenavDropdown.toggle();
})
  const $homeOfficenavDropdown = $('#homeOfficenav-dropdown');
})

$(document).ready(() => {
  const $tellMeMore = $('.Tell-Me-More-button');
$tellMeMore.on('click', () => {
$tellMeMorenavDropdown.toggle();
})
  const $tellMeMorenavDropdown = $('#tellMeMorenav-dropdown');
})
