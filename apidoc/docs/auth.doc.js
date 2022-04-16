/**
  * @api {POST} api/auth/signin 01. Login
  * @apiName Login
  * @apiVersion 1.0.0
  * @apiGroup Authenticate
  *
  * @apiHeaderExample {json} Header-Example:
  *  {
  *    "Content-Type": "application/json"
  *  }
  *
  * @apiParam {String} email (required)
  * @apiParam {String} password (required)
  *
  * @apiSuccessExample {json} Success-Response:
  * HTTP/1.1 200 OK
    {
      "status": "ok",
      "user": {
        "id": 4,
        "email": "abc@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhYmNAZ21haWwuY29tIiwiaWF0IjoxNjUwMTI5OTg3fQ.ZuohuIIh78F9OzpWdc-pp-x525apVXkZ9zn5nibfMaU"
      }
    }
  *
  * HTTP/1.1 400 Error
    {
      "errors": [
        {
          "message": "Invalid Credentials"
        }
      ]
    }
  *
  */

/**
  * @api {POST} api/auth/signin 02. SignUp
  * @apiName SignUp
  * @apiVersion 1.0.0
  * @apiGroup Authenticate
  *
  * @apiHeaderExample {json} Header-Example:
  *  {
  *    "Content-Type": "application/json"
  *  }
  *
  * @apiParam {String} email (required)
  * @apiParam {String} password (required)
  *
  * @apiSuccessExample {json} Success-Response:
  * HTTP/1.1 200 OK
    {
      "status": "ok",
      "message": "Signup success"
    }
  *
  * HTTP/1.1 422 Error
    {
      "errors": [
        {
          "message": "\"email\" must be a valid email",
          "field": "email"
        }
      ]
    }
  *
  */