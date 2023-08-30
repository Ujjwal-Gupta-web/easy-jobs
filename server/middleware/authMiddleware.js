const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?req.header('Authorization'):'';
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized',tag:false });
  }

  try {
    const decoded = jwt.verify(token, 'easy_jobs_proj');
    req.user = { userId: decoded.userId };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized',tag:false });
  }
};

module.exports = authMiddleware;