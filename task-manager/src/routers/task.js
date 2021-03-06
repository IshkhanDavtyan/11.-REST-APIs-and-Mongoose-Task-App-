const express = require('express')
const router =new express.Router()
const Tasks = require('../models/tasks')

router.patch('/tasks/:id',async (req,res)=>{

    const updates = Object.keys(req.body)
    const ObjectKeys = ['isDone','description']
    const isValid = updates.every((update)=>{
        return ObjectKeys.includes(update)
    })

    if(!isValid){
        res.status(400).send({error:'Invalid update'})
    }

    try{    
        const task =await Tasks.findById(req.params.id);
        updates.forEach((update)=>task[update]=req.body[update])
        await task.save()


        if(!task){
            res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(400).send()
    }


})


router.get('/tasks', async (req, res) => {

    try {
        const tasks = await Tasks.find({})
        res.status(201).send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Tasks.findById(_id)
        if (!task) {
            res.status(404).send()
        }

        res.status(201).send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/tasks', async (req, res) => {
    const tasks = new Tasks(req.body)

    try {
        const task = await tasks.save()
        res.status(200).send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/tasks/:id1',async (req,res)=>{
    try{
        const task = await Tasks.findByIdAndDelete(req.params.id1)
        if(!task){
            res.status(404).send()
        }

        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router