# Documentation of Employee_CRUD API

## Setup The Project

- Clone the repository on your local
- Execute `npm install` on the same path as root directory of your project
- Create a `.env` file in the root directory of your project and add the following environment variables
  - `PORT=3001`
  - `SYNC_DB=true`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_LOGIN_PASS>,
    "database": "Flight_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`

## Employee API

### Employee Model

- model example:

```json
{
  "name": "your name",
  "email": "user@gmail.com",
  "phoneNumber": "1234567890",
  "jobTitle": "developer",
  "address": "sample address",
  "state": "my state",
  "city": "my city"
}
```

### Emergency_contacts Model

- model example:

```json
{
  "name": "your name",
  "level" : "primary" ,
  "phoneNumber": "1234567890",
  "relationship": "guardian",
  "employeeId": 100
}
```

### Routes

**Desc:** Create Employee

**Route:** `/employees`

**Method:** `POST`

**Body:**

```json

{
            "name" : "Sizuka",
            "jobTitle" : "Developer" , 
            "email" : "Sizuka0@gmail.com",
            "phoneNumber" : 9972140000,
            "address" : "ABC Complex",
            "city" : "Jodhpur" , 
            "state" : "Rajasthan" ,  
            "emergencyContacts" : [
                {
                    "name" : "RamJi",
                    "level" : "primary",
                    "phoneNumber" : 12345 ,
                    "relationship" : "brother"
                },
                {
                    "name" : "HanumanJi",
                    "level" : "secondary",
                    "phoneNumber" : 12345 ,
                    "relationship" : "brother"
                }
            ]

        }
```

**Response:**

Employee will be created with employee data in employee table and emergency contact data in emergency table and both the tables are linked via a foreignkey EmployeeId

```json
{
    "success": true,
    "response": {
        "id": 4,
        "name": "Sizuka",
        "email": "Sizuka0@gmail.com",
        "phoneNumber": 9972140000,
        "jobTitle": "Developer",
        "address": "ABC Complex",
        "city": "Jodhpur",
        "state": "Rajasthan",
        "updatedAt": "2023-05-22T16:47:10.471Z",
        "createdAt": "2023-05-22T16:47:10.471Z",
        "emergencycontacts": [
            {
                "id": 5,
                "name": "RamJi",
                "level": "primary",
                "phoneNumber": 12345,
                "relationship": "brother",
                "employeeId": 4,
                "createdAt": "2023-05-22T16:47:10.505Z",
                "updatedAt": "2023-05-22T16:47:10.505Z"
            },
            {
                "id": 6,
                "name": "HanumanJi",
                "level": "secondary",
                "phoneNumber": 12345,
                "relationship": "brother",
                "employeeId": 4,
                "createdAt": "2023-05-22T16:47:10.505Z",
                "updatedAt": "2023-05-22T16:47:10.505Z"
            }
        ]
    },
    "err": {},
    "message": "Employee created successfully"
}
```

---

**Desc:** List Employees

**Route:** `/employees?offset=2&limit=2`

**Method:** `GET`

**Response:**
array of employees according to limit specified

```json
{
    "success": true,
    "err": {},
    "response": [
        {
            "id": 1,
            "name": "Sunio",
            "jobTitle": "Developer",
            "email": "ayushplays010",
            "phoneNumber": 997214,
            "address": "ABC Complex",
            "city": "Jodhpur",
            "state": "Rajasthan",
            "createdAt": "2023-05-22T16:44:32.000Z",
            "updatedAt": "2023-05-22T16:44:32.000Z"
        },
        {
            "id": 3,
            "name": "Gian",
            "jobTitle": "Developer",
            "email": "Gian0@gmail.com",
            "phoneNumber": 997214,
            "address": "ABC Complex",
            "city": "Jodhpur",
            "state": "Rajasthan",
            "createdAt": "2023-05-22T16:46:37.000Z",
            "updatedAt": "2023-05-22T16:46:37.000Z"
        }
    ],
    "message": "Employees with given limit and offset are fetched successfully"
}
```

---

**Desc:** Delete Employee

**Route:** `/employees/:id`

**Method:** `DELETE`

**Response:**
Employee is deleted from DB

```json
{
    "success": true,
    "err": {},
    "response": {
        "message": "Deleted Successfully"
    },
    "message": "Employee deleted successfully"
}
```

---

**Desc:** Get Employee

**Route:** `/employees/:id`

**Method:** `GET`

**Response:**
Employee is fetched

```json
{
    "success": true,
    "response": {
        "id": 1,
        "name": "Sunio",
        "jobTitle": "Developer",
        "email": "ayushplays010",
        "phoneNumber": 997214,
        "address": "ABC Complex",
        "city": "Jodhpur",
        "state": "Rajasthan",
        "createdAt": "2023-05-22T16:44:32.000Z",
        "updatedAt": "2023-05-22T16:44:32.000Z",
        "contacts": [
            {
                "id": 1,
                "name": "Shubham",
                "level": "primary",
                "phoneNumber": 12345,
                "relationship": "brother",
                "employeeId": 1,
                "createdAt": "2023-05-22T16:44:32.000Z",
                "updatedAt": "2023-05-22T16:44:32.000Z"
            },
            {
                "id": 2,
                "name": "bham",
                "level": "secondary",
                "phoneNumber": 12345,
                "relationship": "brother",
                "employeeId": 1,
                "createdAt": "2023-05-22T16:44:32.000Z",
                "updatedAt": "2023-05-22T16:44:32.000Z"
            }
        ]
    },
    "err": {},
    "message": "Employee fetched successfully"
}
```

---

**Desc:** Update Employee(can used to update any detail related to the employee)

**Route:** `/employees/:id`

**Method:** `PATCH`

**Body:**
```json
{
    "name":"Suniiooo"
}
```


**Response:**
Employee is updated

```json
{
    "success": true,
    "err": {},
    "response": {
        "id": 1,
        "name": "Suniiooo",
        "jobTitle": "Developer",
        "email": "ayushplays010",
        "phoneNumber": 997214,
        "address": "ABC Complex",
        "city": "Jodhpur",
        "state": "Rajasthan",
        "createdAt": "2023-05-22T16:44:32.000Z",
        "updatedAt": "2023-05-22T16:57:40.000Z",
        "contacts": [
            {
                "id": 1,
                "name": "Shubham",
                "level": "primary",
                "phoneNumber": 12345,
                "relationship": "brother",
                "employeeId": 1,
                "createdAt": "2023-05-22T16:44:32.000Z",
                "updatedAt": "2023-05-22T16:44:32.000Z"
            },
            {
                "id": 2,
                "name": "bham",
                "level": "secondary",
                "phoneNumber": 12345,
                "relationship": "brother",
                "employeeId": 1,
                "createdAt": "2023-05-22T16:44:32.000Z",
                "updatedAt": "2023-05-22T16:44:32.000Z"
            }
        ]
    },
    "message": "Employee updated successfully"
}
```