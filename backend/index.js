import express from 'express'
import cors from 'cors'

// Import soldierData
import soldierData from './soldierData.js'
import multiplayerData from './multiplayerData.js'

const app = express()
app.use(cors())

// API endpoint to get soldier data
app.get('/', (req, res) => {
   res.json({ message: 'Hello World!' })
})

app.get('/api/soldier', (req, res) => {
   try {
      if (!soldierData) {
         throw new Error('Soldier data not found')
      }

      res.json({
         success: true,
         data: soldierData,
         message: 'Soldier data retrieved successfully.',
      })
   } catch (error) {
      console.error('Error retrieving soldier data:', error.message)
      res.status(500).json({
         success: false,
         message: 'Internal server error',
      })
   }
})

app.get('/api/multiplayer', (req, res) => {
   try {
      if (!multiplayerData) {
         throw new Error('Multiplayer data not found')
      }

      res.json({
         success: true,
         data: multiplayerData,
         message: 'Multiplayer data received successfully.',
      })
   } catch (error) {
      console.error('Error handling multiplayer data:', error.message)
      res.status(500).json({
         success: false,
         message: 'Internal server error',
      })
   }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`)
})
