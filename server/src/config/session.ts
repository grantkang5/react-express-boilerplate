import 'dotenv/config'

const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    secure: process.env.NODE_ENV === 'production' ? true : false
  },
  resave: false,
  saveUninitialized: true
};

export default sessionConfig