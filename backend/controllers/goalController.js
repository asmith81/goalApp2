//@desc Get Goals
//@rout GET /api/goals
//@access Private after authentication
const getGoals = (req, res) => {
    res.status(200).json({message: `Get Goals`})
}

//@desc Set Goal
//@route POST /api/goals
//@access Private after authentication
const setGoal =(req, res) => {
    res.status(200).json({message: 'Post Goals'})
}

//@desc Update Goal
//@route PUT /api/goals/:id
//@access Private after authentication
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

//@desc Delete Goal
//@rout GET /api/goals/:id
//@access Private after authentication
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Detete goal ${req.params.id}`})
}


module.exports = {
    getGoals, 
    setGoal,
    updateGoal,
    deleteGoal,
}
