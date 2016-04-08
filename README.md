[Wireframe](https://app.moqups.com/sjf125/woZADwAU/edit/page/a16b2c2a4)
Data structure
  -Each TTT cell will have unique ID (A to I?)
  -Cell states will be mapped to an array - changes made with jQuery
  -Cells can either be null, 'x', or 'o'

Approach
  -Set up login and game pages
  -Integrate login and records functionality with API
  -Set up game logic
  -Set up reach goals of
    -Keep track of multiple game rounds with a win counter
    -Allow players to customize their tokens (X, O, name, picture, etc)
    -Get inventive with styling, e.g. use hover effects or animations to
      spiff things up
  -Look into online multiplayer support
  -Look into setting up an AI player

User Stories
  -As a user, I'd like to be able to have an account to track my games
  -As a user, I'd like to be able to see the games won by each player to be able
   to tell who is winning
  -As a user, I'd like to be able to play against an AI in case I don't have
  anyone to play with
  -As a user, I'd like to be able to play online with other people in case no
  one is around to play on the same machine as me.
  -As someone concerned with privacy, I'd like to be able to play a game of TTT
  without having to sign up/register/submit my email.

DESCRIPTION:

This SPA allows you to play tic-tac-toe with another player ont he same machine.
It keeps track of turns, total moves, the score fo games won, and can retrieve a
list of past games, both completed and incomplete, either individually or as a
group.

I attempted to implement remote multiplayer, but was unable to do so, as I
eventually reached a point where I was getting an unknown error that kicked me
out of the SPA, so I was unable to diagnose the problem, though by using the
debugger and noticing when I got kicked out, I know it happens after calling the
newGame function within the #host-game jQuery onClick function.

TODO wishlist:

  -Remote multiplayer (of course), and/or ability for more than 1 user to log in
  locally
  -Animations for turn switching
  -Better presentation of past game data
  -A quick-play feature that does not require a user to log in, but does not
  keep track of game data
  -Additional jQuery that makes it so filled cells do not have hover (highlight)
  effect
  -Option for AI opponent(random, simple, prefect)
  -Option to change player marker (any ASCII character)
  -Option to change cell colors
