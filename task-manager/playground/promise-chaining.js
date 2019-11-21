require ('../src/db/mongoose')
const User = require('../src/models/user')

//5dca199f38daf30550c4ea99

// User.findByIdAndUpdate('5dca199f38daf30550c4ea99',{  age:1  }).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount = async(id,age)=>{
    const user = await User.findByIdAndUpdate(id,{ age })
    const count = await User.countDocuments({ age })
    return {count}
}

updateAgeAndCount('5dca199f38daf30550c4ea99',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})