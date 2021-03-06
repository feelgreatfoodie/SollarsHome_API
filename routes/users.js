const express = require('express')
const {
  // checkForExisitingEmail,
  checkForUser,
  postUser,
  getUsers,
  updateUser,
  deleteUser
} = require('../services/userService')

const router = express.Router()

router.get('/', getUsers)
router.get('/:id', checkForUser, getUsers)
router.post('/', postUser)
router.patch('/:id', checkForUser, updateUser)
router.delete('/:id', checkForUser, deleteUser)


module.exports = router
