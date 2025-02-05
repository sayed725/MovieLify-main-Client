# MovieLify

Welcome to this project.This is a user-friendly Movie Portal to simplify the process of exploring movies, viewing movie details, adding movies, and deleting movies while managing user favorites. This project includes a dynamic user interface, robust functionality, and seamless user experience.

---

### Live link to the deployed project



- live link:   [https://assignment-10-b0e3a.web.app/) 

- Required PDF Link:   [https://drive.google.com/file/d/1tI39KHXOwlPW3xc6Thyp-i2FSIlSTxMI/view?usp=sharing) 




### 5 features of this website/project

- There is a beautiful slides showcasing images of top movies on Banner.
- User Login / Register Authentication. 
- On clicking the Explore Details Button navigated the logged-in user to the Movie Detail page where they can explore more about their Movie Details.
- On Movie Details section there is a Add to Favorite Button where user can add their favorite movies to favorite routes also a remove button to remove from favorite.
- On Add Movie section user can add their favorite movies details.
- My Favorite section user can see all the movies which an individual user added as their favorite.



---

## Tech Stack  
### Frontend:  
- React.js with React Router  
- Tailwind CSS  
- React-hook-form   
- React-share 
- Npm React-Icons. 
- Npm Axios
- Npm React Tostify 
- Npm Dot Env  

### Backend:  
- Node.js with Express.js  
- MongoDB 
- JWT for authentication  

### Deployment:  
- Frontend: Firebase  
- Backend: Vercel 

---

## NPM Packages Used  
1. **Frontend**:  
   - `react-router-dom`  
   - `@tanstack/react-query`  
   - `react-hook-form`  
   - `react-icons`     
   - `react-hot-toast`  
   - `sweetAleart2`  
   - `react-stripejs`  
   - `react-helmet`  
   - `axios`  
   - `axios`  

2. **Backend**:  
   - `express`    
   - `dotenv`  
   - `jsonwebtoken`  
   - `bcryptjs`  
   - `cors`  

---



---

## 📷 Project Images Highlights

### 📷 Home Page `"/"` Image

![Home Page](https://i.ibb.co.com/gLKQQ15f/Movilify-home.png)

### 📷 All Movies Page `"/allmovies"` Image

![all movies](https://i.ibb.co.com/V0mHvpQN/Movielify-allmovies.png)

### 📷 Add Movies `"/add-movies"` Image

![add movies](https://i.ibb.co.com/9HTqRDWD/Movielify-addmovies.png)

### 📷 Movie Details `"/moviedetails"` Image

![movie details](https://i.ibb.co.com/ksK4T7fT/Movielify-moviedetails.png)

---

## ⚙️ Installation & Setup

### Client Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/sayed725/MovieLify-main-Client.git
   cd MovieLify-main-Client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables in a `.env.local` file:

   ```env
   VITE_apiKey=your_firebase_apiKey
   VITE_authDomain=your_firebase_authDomain
   VITE_projectId=your_firebase_projectId
   VITE_storageBucket=your_firebase_storageBucket
   VITE_messagingSenderId=your_firebase_messagingSenderId
   VITE_appId=your_firebase_appId

   VITE_API_URL=your_server_api_link
   VITE_STRIPE_PUBLIC_KEY=your_stripe_Publishable_Key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Server Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/sayed725/MovieLify-Server.git
   cd MovieLify-Server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables in a `.env` file:
   ```env
   DB_USER=your_db_user_name
   DB_PASS=your_db_user_password
   JWT_SECRET=jwt_secret_code
   STRIPE_SECRET_KEY=your_stripe_Secret _Key
   ```
4. Run the development server:
   ```bash
   npm start
   ```

---












