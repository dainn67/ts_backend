import { Request, Response } from "express"
import User from "../models/user.model"

export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = new User(req.body)
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(400).json({ error: err })
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}