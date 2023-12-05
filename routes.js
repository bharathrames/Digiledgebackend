const express = require('express');
const Student = require('./studentModel'); 

const router = express.Router();

router.post('/addStudent', async (req, res) => {
    const { name, age, Education } = req.body;
    const newStudent = new Student({ name, age, Education });
  
    try {
      await newStudent.save();
      res.status(201).send(newStudent);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  
  router.get('/getStudents', async (req, res) => {
    try {
      const students = await Student.find();
      res.status(200).send(students);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  
  router.delete('/deleteStudent/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedStudent = await Student.findByIdAndDelete(id);
      res.status(200).send(deletedStudent);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  
  router.put('/updateStudent/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, Education } = req.body;
  
    try {
      const updatedStudent = await Student.findByIdAndUpdate(id, { name, age, Education }, { new: true });
      res.status(200).send(updatedStudent);
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = router;
