# SR Enterprises E-Commerce Platform

A modern online store with WhatsApp order notifications built with React, Node.js, Express, and MongoDB.

## Features


- **Login Page**
  - Users log in using username and mobile number
  - Redirects to Home page after successful login

- **Home Page**
  - Displays all available products for sale
  - Users can browse and add items to cart
  - Navigation options:
    - Home
    - My Cart
    - My Orders 
    - My Profile
    - Logout

- **My Cart**
  - Shows current order summary
  - Option to place order

- **My Orders**
  - Displays history of all previous orders
  - owner receives WhatsApp notification with order details
  - Customer receives WhatsApp confirmation with order summary
  - will use mongoDb to store order info and user info

- **My Profile**
  - Shows logged-in user's name and mobile number

- **Logout**
  - Logs user out and redirects to login page


## Technology Stack
- **Frontend**: React, Vite, Material-UI
- **Backend**: Node.js, Express
- **Database**: MongoDB (stores users, orders, and products)
- **Notifications**: WhatsApp API integration