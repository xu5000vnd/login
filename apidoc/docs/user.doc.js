/**
  * @api {GET} api/user 01. Get all
  * @apiName Get all
  * @apiVersion 1.0.0
  * @apiGroup User
  *
  * @apiHeaderExample {json} Header-Example:
  *  {
  *    "Content-Type": "application/json"
  *    "Authorization": "Bearer {{Token}}"
  *  }
  *
  *
  * @apiSuccessExample {json} Success-Response:
  * HTTP/1.1 200 OK
    {
      "status": "ok",
      "data": [
        {
          "id": 1,
          "email": "avcc@gmail.com"
        },
        {
          "id": 2,
          "email": "avcc1@gmail.com"
        },
        {
          "id": 3,
          "email": "avcc2@gmail.com"
        }
      ]
    }
  *
  */
