  const express = require('express');
  const cors = require('cors');
  const mongoose = require('mongoose');
  const bcrypt = require('bcrypt');
  const bodyParser = require('body-parser');
  const nodemailer = require('nodemailer');
  const app = express();
  const PORT = 5000;

  app.use(cors({
    origin: 'http://localhost:3000', // Adjust the port to match your client app
  }));
  app.use(bodyParser.json());

  mongoose.connect('mongodb://localhost:27017', {
    useUnifiedTopology: true 
    
  });
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fooddelivery7876@gmail.com',
      pass: 'teaq sulb iprj siri',
    }
  });


  const userSchema = new mongoose.Schema({
    Username: { type: String, unique: true, required: true },
    Password: { type: String, required: true },
    Email: { type: String, unique: true, required: true },
  });

  const orderSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    itemPrice: { type: Number,  },
    quantity: { type: Number,  required: true },
    totalPrice: { type: Number, },
    email:{type:String,},
    location:{type:String},
    phone:{type:Number},
    // rating: { type: Number },
    orderId:{type:String}
  });
  const Order=mongoose.model('order',orderSchema);
  const User = mongoose.model('users', userSchema);

  // Signup Endpoint
  app.post('/signup', async (req, res) => {
    const { Username, Email, Password, Confirmpassword } = req.body;

    try {
      // Check if the username or email already exists
      const existingUser = await User.findOne({ $or: [{ Username }, { Email }] });
      if (existingUser) {
        return res.status(400).json({ error: 'Username or email already exists' });
      }

      // Check if passwords match
      if (Password !== Confirmpassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(Password, 10);

      // Create a new user
      const newUser = new User({ Username, Password: hashedPassword, Email });

      // Save the user to the database
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error during signup:', error);

      if (error.code === 11000 && error.keyPattern) {
        if (error.keyPattern.Username === 1) {
          return res.status(400).json({ error: 'Username already exists' });
        } else if (error.keyPattern.Email === 1) {
          return res.status(400).json({ error: 'Email already exists' });
        }
      }

      res.status(500).json({ error: 'Internal Server Error during signup' });
    }
  });

  // Login Endpoint
  app.post('/login', async (req, res) => {
    const { Email, Password } = req.body;

    try {
      const user = await User.findOne({ Email });

      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const passwordMatch = await bcrypt.compare(Password, user.Password);

      if (passwordMatch) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal Server Error during login' });
    }
  });
  
  
  
  
  app.post('/submit-order', async (req, res) => {
    const { itemName, itemPrice, quantity, totalPrice, email, location, phone } = req.body;
    console.log('Received order:', itemName, itemPrice, quantity, totalPrice, email, location, phone);
  
    try {

      const newOrder = new Order({ itemName, itemPrice, quantity,totalPrice, email, location, phone });
      await newOrder.save();
      const orderId = newOrder._id;

      // Update newOrder with orderId
      newOrder.orderId = orderId;
      await newOrder.save();

      res.status(201).json({ orderId });
    
      const mailOptions = {
        from: 'fooddelivery7876@gmail.com',
        to: email,
        subject: 'Please Rate Your Recent Order',
        html: `<p>Dear Customer,</p>
         <p>Thank you for placing your order (${quantity} x ${itemName}). We hope you enjoyed your meal!</p>
         <p>Please take a moment to rate your experience with this item:</p>
         <p>
           <span style="color: gold;">★</span>
           <span style="color: gold;">★</span>
           <span style="color: gold;">★</span>
           <span style="color: gold;">★</span>
           <span style="color: gold;">★</span>
         </p>
         <p>Please click <a href="https://forms.gle/LTDrNFwwjtXwQ6Yi9">here</a> to rate your order.</p>

         <p>Best regards,<br>Your Restaurant Team</p>`
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).json({ error: 'Error sending email' });
        } else {
          console.log('Rating email sent:', info.response);
          return res.status(200).json({ message: 'Order submitted successfully' });
        }
      });
    } catch (error) {
      console.error('Error submitting order:', error);
      return res.status(500).json({ error: 'Failed to submit order' });
    }
  });
  

  app.get('/order', async (req, res) => {
    try {
      const orders = await Order.find(); // Fetch all orders from the database
      res.json(orders); // Send the orders data as JSON response
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  });
  // Add this route after the '/orders' route
  app.delete('/orders/:id', async (req, res) => {
    const orderId = req.params.id;
  
    try {
      const deletedOrder = await Order.findByIdAndDelete(orderId);
  
      if (!deletedOrder) {
        return res.status(404).json({ error: 'Order not found' });
      }
  
      return res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
      console.error('Error deleting order:', error);
      return res.status(500).json({ error: 'Internal Server Error during order deletion' });
    }
  });
  


// Endpoint to update order
app.put('/update-order/:orderId', async (req, res) => {
  const { itemName, itemPrice, quantity, totalPrice, email, location, phone } = req.body;
  const { orderId } = req.params;

  try {
    const updatedOrder = await Order.findOneAndUpdate(
      { orderId: orderId },
      { itemName, itemPrice, quantity, totalPrice, email, location, phone },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json({ message: 'Order updated successfully', order: updatedOrder });
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ error: 'Failed to update order' });
  }
});




  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });


  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
