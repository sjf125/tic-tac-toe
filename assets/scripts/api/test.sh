#!/bin/sh

curl "http://tic-tac-toe.wdibos.com/games/index" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --data "{
      \"credentials\" : {
      \"email\" : \"coolstory@bro.com\",
      \"password\" : \"ooo\"
    }
  }"
  echo
