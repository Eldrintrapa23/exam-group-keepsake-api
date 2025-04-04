const express = require('express')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/exam-group', (req, res) => {
    res.json({
        message: 'Group KEEPSAKE API'
    })
})


// Ari add sa app.get()
app.get('/exams', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe', subject: 'Math' },
        { id: 2, name: 'Jane Smith', subject: 'Science' },
        { id: 3, name: 'Alice Johnson', subject: 'History' }
    ])
})

// Add POST /exams endpoint
app.post('/exams', (req, res) => {
    const newExam = req.body;
    res.status(201).json({
        message: 'Exam added successfully',
        exam: newExam
    });
});

// Add PUT /exams/:id endpoint
app.put('/exams/:id', (req, res) => {
    const examId = parseInt(req.params.id, 10);
    const updatedExam = req.body;
    res.json({
        message: `Exam with ID ${examId} updated successfully`,
        exam: { id: examId, ...updatedExam }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

