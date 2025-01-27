import express from 'express'
import { Register} from '../controllers/auth.controller.js'

const AuthRoutes=express.Router()

AuthRoutes.post('/register',Register)
export default AuthRoutes