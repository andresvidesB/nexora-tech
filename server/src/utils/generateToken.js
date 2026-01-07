import jwt from 'jsonwebtoken';

// En server/utils/generateToken.js (o donde crees la cookie)

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  // 👇 ESTA ES LA CONFIGURACIÓN MÁGICA PARA VERCEL + RENDER
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // ¡OBLIGATORIO en Render! (HTTPS)
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', // ¡OBLIGATORIO para Cross-Site!
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 días
  });
};

export default generateToken;