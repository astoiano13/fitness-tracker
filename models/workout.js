var mongoose = require("mongoose")
var Schema = mongoose.Schema
var workoutArray = new Schema({
    
    exercises:[{

        name: {
            type: String,
            trim: true,
            required: "Name is required"
        },
    
        type: {
            type: String,
            trim: true,
            required: "Workout type is required"
        },
    
        weight: {
            type: Number
        },
    
        sets: {
            type: Number
        },
    
        reps: {
            type: Number
        },
    
        duration: {
            type: Number,
            required: "Workout duration is required"
        },
    
        day: {
            type: Date,
            default:() => new Date()
        },

        distance: {
            type: Number
        }
    }]
    
    
}, {
    toJSON: {
        virtuals: true
    }
});

workoutSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
    },0)
})

var workout = mongoose.model("Workout", workoutArray);

module.exports = Workout;
