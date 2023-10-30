const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    mongoose.connect(
      'mongodb+srv://komalshivhare485:Komal@123@cluster0.g2cfna1.mongodb.net/',
      {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
      },
      () => {
        console.log('DB connected');
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
