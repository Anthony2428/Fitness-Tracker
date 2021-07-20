const router = require("express").Router();
const Exercise = require("../models/exerciseModel.js");

router.post("/workouts", ({ body }, res) => {
  Exercise.create({ body })
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
router.put("/workouts/:id", ({ body, params }, res) => {
	Exercise.findByIdAndUpdate(params.id, { 
    $push: { 
      exercises: body 
    } 
  }).then((exerciseData) => {
			res.json(exerciseData);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.get("/workouts/range", (req, res) => {
  Exercise.aggregate([
    {
        $addFields: {
            totalDuration: { $sum: "$exercises.duration" }
        }
    }]).sort({ day: -1 })
    .limit(7)
    .sort({ day: 1 })
  .then(data => res.json(data))
  .catch(err => {
      res.json(err);
    });
});   

router.get("/workouts", (req, res) => {
  Exercise.aggregate( [
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" } ,
      }
    }])
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
