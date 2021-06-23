/* This Mongoose Model represents 'vehicles' collection in MongoDB database. */
module.exports = mongoose => {
  const Vehicle = mongoose.model(
    "vehicle",
    mongoose.Schema(
      {
        id: Number,
        year: Number,
        make: String,
        model: String
      },
      { timestamps: true }
    )
  );

  return Vehicle;
};
