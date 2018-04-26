'use strict'
const store = require('./store')

// Auth Ui below
const signUpSuccess = function () {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
  $('#sign-up').trigger('reset')
}
const signUpFailure = function () {
  $('#message').text('Failure signing up')
  $('#message').css('background-color', 'red')
  $('#sign-up').trigger('reset')
}
const signInSuccess = function (data) {
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
  $('#change-password').css('display', 'block')
  $('#sign-out').css('display', 'block')
  $('#create-teams').css('display', 'block')
  $('#update-teams').css('display', 'block')
  $('#get-teams').css('display', 'block')
  $('#destroy-team').css('display', 'block')
  $('#team-forms').css('display', 'block')
  $('#sign-up').css('display', 'none')
  $('#sign-up').trigger('reset')
  $('#sign-in').css('display', 'none')
  $('#sign-in').trigger('reset')

  store.user = data.user
}
const signInFailure = function () {
  $('#message').text('Failure signing in')
  $('#message').css('background-color', 'red')
  $('#sign-in').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
  $('#change-password').trigger('reset')
}
const changePasswordFailure = function () {
  $('#message').text('Failure to change password')
  $('#message').css('background-color', 'red')
  $('#change-password').trigger('reset')
}
const signOutSuccess = function (data) {
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', 'green')
  $('#sign-up').css('display', 'block')
  $('#sign-in').css('display', 'block')
  $('#change-password').css('display', 'none')
  $('#sign-out').css('display', 'none')
  $('#create-teams').css('display', 'none')
  $('#update-teams').css('display', 'none')
  $('#get-teams').css('display', 'none')
  $('#destroy-team').css('display', 'none')
  $('#team-forms').css('display', 'none')
  store.user = null
}
const signOutFailure = function () {
  $('#message').text('Failure to sign out')
  $('#message').css('background-color', 'red')
}

// Teams ui below
const createTeamsSuccess = (data) => {
  $('#message').text('Successfully created team')
  $('#message').css('background-color', 'green')
  $('#create-teams').trigger('reset')
}
const createTeamsFailure = () => {
  $('#message').text('Failure to create team')
  $('#message').css('background-color', 'red')
  $('#create-teams').trigger('reset')
}

const updateTeamsSuccess = (data) => {
  $('#message').text('Successfully updated team')
  $('#message').css('background-color', 'green')
  $('#update-teams').trigger('reset')
}
const updateTeamsFailure = () => {
  $('#message').text('Failure to update team')
  $('#message').css('background-color', 'red')
  $('#update-teams').trigger('reset')
}
const getTeamsSuccess = (data) => {
  console.log(data)
  $('#message').text('Successfully got teams')
  $('#message').css('background-color', 'green')
}
const getTeamsFailure = () => {
  $('#message').text('Failure to get teams')
  $('#message').css('background-color', 'red')
}
const destroyTeamSuccess = (data) => {
  $('#message').text('Successfully deleted team')
  $('#message').css('background-color', 'green')
  $('#delete-teams').trigger('reset')
}
const destroyTeamFailure = () => {
  $('#message').text('Failure to delete team')
  $('#message').css('background-color', 'red')
  $('#delete-teams').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createTeamsSuccess,
  createTeamsFailure,
  updateTeamsSuccess,
  updateTeamsFailure,
  getTeamsSuccess,
  getTeamsFailure,
  destroyTeamSuccess,
  destroyTeamFailure
}
