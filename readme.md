# Hotels API

## Base URL

`https://api/v1/hotels`

## Config

--**To use this api, you need:**
You need to create config.env and fill up data to exapmle bellow.
PORT=
USER=
DATABASE=
DATABASE_PASSWORD=
JWT_SECRET=
JWT_EXPIRES_IN=


# Endpoints


## User Route

### 1. Create user

- **Endpoint:** `/api/v1/hotels/users/signup`
- **Method:** `POST`
- **Requirements for req body: name, email, password, passwordConfirm role(optional, default role user).
- **Roles: admin, user, manager
- **Example json body: 
{
    "name": "aaa",
    "email": "aaa@gmail.com",
    "role" : "admin",
    "password": "123456789",
    "passwordConfirm": "123456789"
}
- **Description:** register user.

### 2. Login user

- **Endpoint:** `/api/v1/hotels/users/login`
- **Method:** `POST`
- **Requirements for req body: email, password.
- **Roles: admin, user, manager
- **Example json body: 
{
    "email": "aaa@gmail.com",
    "password": "123456789"
}
- **Description:** login user.

### 3. Get all users

- **Endpoint:** `/api/v1/hotels/users`
- **Method:** `Get`
- **Description:** get all user, only admin can access.

### 4. Get user by id

- **Endpoint:** `/api/v1/hotels/users/:id`
- **Method:** `Get`
- **Description:** get all user, only admin can access.



## Hotel Route

### 1. Create Hotel

- **Endpoint:** `/api/v1/hotels/hotels`
- **Method:** `POST`
- **Requirements for req body: name, adress, rankingAverage, room_price, comfort, summary, image_cover
- **Example json body: 
{
    "name" : "kaunastic hotel",
    "address" : "laisves al. 32",
    "rankingAverage" : 4,
    "room_price" : 145,
    "comfort" : "6",
    "summary" : "hotel at the heart of city center",
    "image_cover" : "aaaa.jpg"
}
- **Description:** create hotel.

### 2. Update Hotel

- **Endpoint:** `/api/v1/hotels/hotels/:id`
- **Method:** `PATCH`
- **Requirements for req body: name, adress, rankingAverage, room_price, comfort, summary, image_cover
- **Example json body: 
{
    "name" : "kaunastic hotel",
    "address" : "laisves al. 32",
    "rankingAverage" : 4,
    "room_price" : 145,
    "comfort" : "6",
    "summary" : "hotel at the heart of city center",
    "image_cover" : "aaaa.jpg"
}
- **Description:** update hotel.

### 3. Delete Hotel

- **Endpoint:** `/api/v1/hotels/hotels/:id`
- **Method:** `DELETE`
- **Description:** deletes hotel.

### 4. Get Hotel by ID 

- **Endpoint:** `/api/v1/hotels/hotels/:id`
- **Method:** `GET`
- **Description:** gets hotel by id.

### 5. Get All Hotels 

- **Endpoint:** `/api/v1/hotels/hotels`
- **Method:** `GET`
- **Description:** gets all hotels.

### 6. Get top 5 bets Hotels 

- **Endpoint:** `/api/v1/hotels/hotels/top-5-best`
- **Method:** `GET`
- **Description:** gets all top 5 hotels.


## Review Route

### 1. Hotel review creation

- **Endpoint:** `/api/v1/hotels/room`
- **Method:** `POST`
- **Requirements for req body: review, rating, hotel, user
- **Example json body: 
{
  "review": "A wonderful experience at the hotel.",
  "rating": 4,
  "hotel": "hotel_id",
  "user": "user_id"
}

- **Description:** creates review.

### 2. Get hotel reviews 

- **Endpoint:** `/hotels/:hotelId/reviews`
- **Method:** `GET`
- **Description:** gets all hotel reviews.


## Room Route


### 1. Create room 

- **Endpoint:** `/api/v1/hotels/hotels/room`
- **Method:** `POST`
- **Requirements for req body: room, description, necessities, hotel, user
- **Example json body: 
{
  "room": 101,
  "description": "Cozy Single Room",
  "necessities": "WiFi, TV, Air Conditioning",
  "hotel": "hotel_id",
  "user": "user_id"
}

- **Description:** creates room.

### 2. Get all rooms 

- **Endpoint:** `/api/v1/hotels/hotels/rooms`
- **Method:** `GET`
- **Description:** gets all rooms.


## Reservation Route

### 1. Create reservation

- **Endpoint:** `/hotels/:hotelId/:roomId/reservations`
- **Method:** `POST`
- **Requirements for req body: from, to, hotel, room, user
- **Example json body: 
{
  "from": "2024-03-10T12:00:00Z",
  "to": "2024-03-15T12:00:00Z",
  "hotel": "your_hotel_id",
  "room": "your_room_id",
  "user": "your_user_id"
}
- **Description:** creates reservation.

### 2. Get reservations
- **Endpoint:** `/hotels/:hotelId/:roomId/reservations`
- **Method:** `GET`
- **Description:** Gets reservations.