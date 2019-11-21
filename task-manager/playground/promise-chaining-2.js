require('../src/db/mongoose')
const Task = require('../src/models/tasks')


// Task.findByIdAndDelete('5dca5d87b544fc14cc14cbf9').then((task)=>{
//     console.log(task)

//     return Task.find({isDone:false})
// }).then((tasks)=>{
//     console.log(tasks)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id,isDone)=>{
    const deleteTask = await Task.findByIdAndDelete(id) 
    const count = await Task.countDocuments({isDone})
    return {count,deleteTask}
}

deleteTaskAndCount('5dca5dbc603e1825dcd6fea1',false).then((res)=>{
    console.log(res)
}).catch((e)=>{
    console.log(e)
})