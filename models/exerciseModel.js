const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  dayOfWorkout: {
    type: Date,
    default: Date.now(),
    required: "Date is Required"
  },
  exercises: [{
      nameOfWorkout: {
        type: Number,
        trim: true,
        required: "Name of Workout is required"
      },
      typeOfWorkout: {
        type: String,
        trim: true,
        required: "Type of Workout is required"
      },
      distance: {
        type: Number
      },
      durationOfWorkout: {
        type: String,
        required: "Duration of Workout is required"
      },
      weightUsed: {
        type: Number,
      },
      
      numOfSets: {
        type: Number,
      },
      numOfReps: {
        type: Number,
      }
    }]
  });
  
const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;