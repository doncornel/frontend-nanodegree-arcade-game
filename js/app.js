// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = 150 + (Math.random() * 200);
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    //Loop bug movement
    if (this.x > 505) {
        this.x = -100;
        this.speed = 150 + (Math.random() * 200);
    }
    //Check for collisions
    if (player.y >= this.y - 40 && player.y <= this.y + 80 && player.x >= this.x - 40 && player.x <= this.x + 70) {
        player.resetGame();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 410;
};

// Update Player's position
Player.prototype.update = function(dt) {};

// Draw the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
allEnemies.push(new Enemy(-200, 60));
allEnemies.push(new Enemy(2, 145));
allEnemies.push(new Enemy(40, 230));
allEnemies.push(new Enemy(-100, 315));
var player = new Player();

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

//Moves player and checks if he reaches the water
Player.prototype.handleInput = function(keyPress) {
    if (keyPress == 'left' && this.x >= 10) {
        this.x += -30;
    }
    if (keyPress == 'right' && this.x <= 390) {
        this.x += 30;
    }
    if (keyPress == 'up' && this.y >= 10) {
        this.y += -30;
        if (this.y <= 10) {
            alert('Congratulations! You WON!!!');
            this.resetGame();
        }
    }
    if (keyPress == 'down' && this.y <= 400) {
        this.y += 30;
    }
};

// Resets the game
Player.prototype.resetGame = function() {
    this.x = 200;
    this.y = 410;
};
