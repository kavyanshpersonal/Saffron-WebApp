module.exports = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/saffronwebapp',
  JWT_SECRET: process.env.JWT_SECRET || 'yoursecretkey'
};