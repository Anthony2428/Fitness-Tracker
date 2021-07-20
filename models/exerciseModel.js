const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
    required: "Date is Required"
  },
  exercises: [{
      name: {
        type: String,
        trim: true,
        required: "Name of Workout is required"
      },
      type: {
        type: String,
        trim: true,
        required: "Type of Workout is required"
      },
      distance: {
        type: Number
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      }
    }]
  });
  
const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;