const User= require("./../model/userModel")

const getData=async(req,res)=>{
    const allData= await User.find({})
console.log(allData)

 res.send(allData)
}

const deleteData= async(req,res)=>{
    const deleted= await User.findByIdAndDelete({_id:req.params._id})
}

const postData = async (req,res)=>{
    const newData = await User(req.body)
    newData.save()
}

module.exports={getData,deleteData,postData}