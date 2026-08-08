import jwt from 'jsonwebtoken'


const adminAuth = async(req, res, next) => {
    try {
        const token = req.cookies.token;

        if(!token) {
            return res.status(401).json({
                message:"Not Authorized Login Again"
            });
        }

        const verifyToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.adminEmail = process.env.ADMIN_EMAIL;

        next();

    } catch (error) {
        console.log("AdminAuth Error:", error.message);

        return res.status(401).json({
            message:"Invalid token"
        });
    }
}

export default adminAuth;