curl --include --request POST http://httpbin.org/post \
  --header "Content-Type: application/json" \
  --data '{
    "user": {
      "id": 1,
      "email": "abc@123.com"
    }
  }'
