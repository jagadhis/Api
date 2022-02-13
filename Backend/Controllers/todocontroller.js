//@desc get todo
//@route GET/api/greeting/
//@access Private
const gettodo = (req,res) => {
    res.status(200).json({message:"hey Codie"})
}
//@desc Set todo
//@route GET/api/greeting/
//@access Private
const Settodo = (req,res) => {
    res.status(200).json({message:"hello there"})
}
//@desc Update todo
//@route GET/api/greeting/
//@access Private
const Updatetodo = (req,res) => {
    res.status(200).json({message:`Update message ${req.params.id}`})
}
//@desc Delete todo
//@route GET/api/greeting/
//@access Private
const Deletetodo = (req,res) => {
    res.status(200).json({message:`Delete message ${req.params.id}`})
}

module.exports ={
    gettodo,Settodo,Updatetodo,Deletetodo,
}