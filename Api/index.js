const express = require('express');
const app = express();
const cors = require('cors')
// const port = 3000;

app.use(cors({
  origin: 'https://meal-match-eight.vercel.app', // Your frontend URL
  methods: 'GET',
  allowedHeaders: 'Content-Type, Authorization',
}));

const cityData = {
    Bangalore: [
      {
        id: 1,
        name: 'The Veggie Delight',
        streetAddress: '123 Green Street',
        city: 'Bangalore',
        state: 'Karnataka',
        contact: '9876543210',
        workingDays: 'Monday to Saturday',
        mealTimings: 'Breakfast, Lunch, Dinner',
        mealType: 'Veg',
        charges: '₹2000',
        images: ['img1.jpg', 'img2.jpg'],
        terms_condition: 'No cancellations within 24 hours. Minimum order of 5 meals required.'
      },
      {
        id: 2,
        name: 'Spicy Bites',
        streetAddress: '456 Spice Lane',
        city: 'Bangalore',
        state: 'Karnataka',
        contact: '9123456789',
        workingDays: 'Tuesday to Sunday',
        mealTimings: 'Lunch, Dinner',
        mealType: 'Both (Veg & Non-Veg)',
        charges: '₹2500',
        images: ['img3.jpg', 'img4.jpg'],
        terms_condition: 'Orders can be customized. No refunds after meal delivery.'
      },
      {
        id: 3,
        name: 'Healthy Eats',
        streetAddress: '789 Wellness Avenue',
        city: 'Bangalore',
        state: 'Karnataka',
        contact: '9654321098',
        workingDays: 'Monday to Friday',
        mealTimings: 'Breakfast, Lunch, Dinner',
        mealType: 'Veg',
        charges: '₹1800',
        images: ['img5.jpg', 'img6.jpg'],
        terms_condition: 'Discounts available for weekly orders. No cancellations after 6 PM.'
      },
    ],
    Delhi: [
      {
        id: 1,
        name: 'Delhi Delights',
        streetAddress: '101 Mughal Road',
        city: 'Delhi',
        state: 'Delhi',
        contact: '9988776655',
        workingDays: 'Monday to Sunday',
        mealTimings: 'Breakfast, Lunch, Dinner',
        mealType: 'Both (Veg & Non-Veg)',
        charges: '₹2200',
        images: ['img7.jpg', 'img8.jpg'],
        terms_condition: 'Meals can be adjusted as per taste. 50% refund for cancellations 2 hours before delivery.'
      },
      {
        id: 2,
        name: 'Tasty Treats',
        streetAddress: '202 Flavor Street',
        city: 'Delhi',
        state: 'Delhi',
        contact: '9777888999',
        workingDays: 'Wednesday to Monday',
        mealTimings: 'Breakfast, Lunch, Dinner',
        mealType: 'Veg',
        charges: '₹2100',
        images: ['img9.jpg', 'img10.jpg'],
        terms_condition: 'No refunds for missed orders. Minimum order of 3 meals required.'
      },
      {
        id: 3,
        name: 'North Indian Flavors',
        streetAddress: '303 Spice Market',
        city: 'Delhi',
        state: 'Delhi',
        contact: '9666554433',
        workingDays: 'Monday to Saturday',
        mealTimings: 'Breakfast, Lunch, Dinner',
        mealType: 'Both (Veg & Non-Veg)',
        charges: '₹2300',
        images: ['img11.jpg', 'img12.jpg'],
        terms_condition: 'Special discounts for bulk orders. No cancellations after 12 PM.'
      },
    ],
  };
  
  app.get('/api/providers/:city', (req, res) => {
    const city = req.params.city;
    if (cityData[city]) {
      res.json(cityData[city]);
    } else {
      res.status(404).json({ message: 'City not found' });
    }
  });
  
  // // Endpoint to fetch data for all cities
  // app.get('/api/providers', (req, res) => {
  //   res.json(cityData);
  // });

  // app.listen(port, () => {
  //   console.log(`Server running at http://localhost:${port}`);
  // });
  
 module.exports = app;