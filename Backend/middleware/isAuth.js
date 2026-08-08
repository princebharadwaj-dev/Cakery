import jwt from 'jsonwebtoken'

const isAuth = async(req, res, next) => {
    try {
        const { token } = req.cookies

        if(!token) {
            return res.status(400).json({message:"User Token not Found"})
        }

        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)

        if(!verifyToken) {
            return res.status(400).json({message:"User not have a valid token"})
        }
        req.userId = verifyToken.userId
        next()
    } catch (error) {
        console.log("isAuth error:", error.message)
        return res.status(500).json({message:`isAuth error ${error}`})
        
    }
}

export default isAuth