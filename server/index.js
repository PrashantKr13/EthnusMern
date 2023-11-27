const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const credentialModel = require('./models/credential')
const freeTrialModel = require("./models/freeTrial")
const commentModel = require("./models/comment")
const subscriberModel = require("./models/subscriber")
const exerciseModel = require("./models/exercise")

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://localhost:27017/userData")

app.post('/login', (req, res) => {
    const { email, password } = req.body
    credentialModel.findOne({ email: email }).then(user => {
        if (user) {
            if (user.password === password) {
                res.json("Success")
            }
            else {
                res.json("Password was incorrect")
            }
        }
        else {
            res.json("No record existed")
        }
    })
})

app.post('/register', (req, res) => {
    credentialModel.create(req.body).then(credentials => res.json(credentials)).catch(err => res.json(err))
})
app.post('/freeTrial', (req, res) => {
    console.log("hello my world")
    freeTrialModel.create(req.body).then(freeTrial => res.json(freeTrial)).catch(err => res.json(err))
})
app.post('/comment', (req, res) => {
    commentModel.create(req.body).then(comment => res.json(comment)).catch(err => res.json(err))
})
app.post('/subscriber', (req, res) => {
    subscriberModel.create(req.body).then(subscriber => res.json(subscriber)).catch(err => res.json(err))
})
app.post('/arena', async (req, res) => {
    try {
        const { day, exerciseName } = req.body;
        const exercise = new exerciseModel({ day, exerciseName });
        await exercise.save();
        res.json(exercise);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/arena', async (req, res) => {
    try {
        const exercises = await exerciseModel.find();
        res.json(exercises);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.put('/arena/:id', async (req, res) => {
    try {
      const { day, exerciseName } = req.body;
      const updatedExercise = await exerciseModel.findByIdAndUpdate(req.params.id, { day, exerciseName }, { new: true });
      res.json(updatedExercise);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.delete('/arena/:id', async (req, res) => {
    try {
      await exerciseModel.findByIdAndDelete(req.params.id);
      res.json({ message: 'Entry deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


app.listen(3001, () => {
    console.log("server is running")
})