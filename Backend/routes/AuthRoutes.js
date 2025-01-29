import express from 'express'
import { register } from '../controllers/auth.controller.js'

const AuthRoutes=express.Router()

AuthRoutes.post('/register',register)
export default AuthRoutes