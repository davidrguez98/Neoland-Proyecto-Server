import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

async function checkToken(req, res, next) {
    const token = req.cookies?.my_secret_token

    if (!token) return res.status(401).json({ message: 'Acceso denegado. Inicia sesión para continuar'})
    
    try {    
        //payload: info del user
        const check = jwt.verify(token, process.env.CLAVE_SECRETA_COOKIE)
        req.user = check
        next()
    } catch (error) {
        console.log(error)
    }
}

export { checkToken }