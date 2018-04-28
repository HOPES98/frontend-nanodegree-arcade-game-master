// Enemies our player must avoid
var Enemy = function(x, y, movement) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.movement = movement;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.movement * (dt);

  //updating enemy's position
  if (this.x > 505) {
    this.x = -40;
    this.speed = 100 + Math.floor(Math.random() * 222);
  }

  //checking for any collisions:
  if (player.x < this.x + 80 &&
    player.x + 80 > this.x &&
    player.y < this.y + 60 &&
    player.y + 60 > this.y) {
    player.y = 400;
    player.x = 200;
  }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.player = 'images/char-cat-girl.png';

};

//rendering method:
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

//updatong method:
Player.prototype.update = function(dt) {

};

//handle input method:
Player.prototype.handleInput = function(keyPress) {
  if (keyPress == 'right' && this.x < 405) { //user moves right with arrow keys
    this.x += 102;
  };
  /////
  if (keyPress == 'left' && this.x > 0) { //user moves left with arrow keys
    this.x -= 102;
  };
  //////
  if (keyPress == 'up' && this.y > 0) { //user moves up with arrow keys
    this.y -= 83;
  };
  //////
  if (keyPress == 'down' && this.y < 405) { //user moves down with arrow keys
    this.y += 83;

    //when it reaches up the water??
  };
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
let player = [];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
