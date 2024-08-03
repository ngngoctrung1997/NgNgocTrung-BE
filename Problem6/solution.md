# Scoreboard API 
# About

# API
- POST /api/score/increase
Description: Increase score of the user
Body:
{
  "user_id": "string",
  "score_increment": "int"
}
Response:
200: 
return top 10 scorce
[
    {
    "user_id": "string",
    "username": "string",
    "score": x
    },
    ...
]
- GET /api/score/top10
Description: Retrive top 10 users
Response: 
200: [
  {
    "user_id": "string",
    "username": "string",
    "score": "int"
  },
  ...
]

# Flow
- Client call service to increase score
- Server authenticate request, validate, update db

# Requirement
- Use JWT to validate request
- Limit rate

# Improvement
- Implementing Websocket protocol for realtime communication between the client and the server




