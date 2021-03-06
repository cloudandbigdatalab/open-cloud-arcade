/*
  Programming and art made by www.lessmilk.com
  You can freely look at the code below, 
  but you are not allowed to use the code or art to make your own games
*/

Game.Play = function (game) { };

Game.Play.prototype = {

	create: function () {
		game.physics.startSystem(Phaser.Physics.ARCADE);

		this.cursor = this.game.input.keyboard.createCursorKeys();
		//var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        //space_key.onDown.add(this.fire, this); 

        this.load_map();

		this.player = this.game.add.sprite(w/2, 80, 'player');
		this.player.anchor.setTo(0.5, 0.5);
		this.player.direction = 2;
		this.player.animations.add('down', [1, 2], 6, true);
		this.player.animations.add('up', [4, 5], 6, true);
		this.player.animations.add('right', [7, 8], 6, true);
		this.player.animations.add('left', [10, 11], 6, true);
		this.player.alive = true;
		game.physics.arcade.enable(this.player);

		//this.bullets = game.add.group();
		//this.bullets.createMultiple(20, 'bullet');  
		
    	this.music = game.add.sound('music'); 
    	if (sound) this.music.play('', 0, 0.4, true);
    	this.key_s = game.add.sound('key');
    	this.key_s.volume = 0.3;
    	this.heart_s = game.add.sound('heart');
    	this.heart_s.volume = 0.3;
    	this.dead_s = game.add.sound('dead');
    	this.dead_s.volume = 0.2;

		this.tween = false;
		this.camera = {x:0, y:0};
		this.number_hearts = 0;

		this.dead = this.game.add.sprite(0, 0, 'dead');
		this.dead.alpha = 0;
	},

	update: function() {
		game.physics.arcade.collide(this.player, this.layer);
		game.physics.arcade.collide(this.player, this.doors, this.touched_door, null, this);
		//game.physics.arcade.overlap(this.bullets, this.layer, this.kill_bullet, null, this);
		game.physics.arcade.overlap(this.player, this.keys, this.take_key, null, this);
		game.physics.arcade.overlap(this.player, this.hearts, this.take_heart, null, this);
		game.physics.arcade.overlap(this.player, this.enemies, this.player_dead, null, this);
		game.physics.arcade.overlap(this.enemies, this.walls, this.enemy_wall, null, this);

		this.player_movements();
		this.camera_movements();
	},

	enemy_wall: function(enemy, wall) {		
		if (enemy.body.velocity.x > 0) {
			enemy.body.velocity.x = -200;
			enemy.x -= 10;
		}
		else if (enemy.body.velocity.x < 0) {
			enemy.body.velocity.x = 200;
			enemy.x += 10;
		}
		else if (enemy.body.velocity.y > 0) {
			enemy.body.velocity.y = -200;
			enemy.y -= 10;
		}
		else if (enemy.body.velocity.y < 0) {
			enemy.body.velocity.y = 200;
			enemy.y += 10;
		}
	},

	player_dead: function() {
		if (!this.player.alive)
			return;

		if (this.sound) this.dead_s.play();
		this.player.alive = false;
		var t = game.add.tween(this.dead).to({alpha:1}, 100).start();
		t.onComplete.add(function(){
			this.player.reset(w/2, 80);
			game.camera.reset(0, 0);
			this.camera = {x:0, y:0};
			game.add.tween(this.dead).to({alpha:0}, 1200).start();
			this.player.alive = true;
		}, this);
	},

	touched_door: function() {
		if (this.player.body.touching.down)
			this.player.y -= 1;
		else if (this.player.body.touching.up)
			this.player.y += 1;		
		else if (this.player.body.touching.left)
			this.player.x += 1;
		else if (this.player.body.touching.right)
			this.player.x -= 1;
	},

	take_key: function(player, key) {
		this.open_door(key.key_id);
		if (sound) this.key_s.play();
		key.kill();
	},

	open_door: function(id) {
		this.doors.forEach(function(d) {
			if (d.key_id == id) {
				var t = game.add.tween(d.scale).to({x:0, y:0}, 300).start();
				t.onComplete.add(function(){this.kill()}, d);				
			}
		}, this);		
	},

	take_heart: function(player, heart) {
		if (!heart.alive)
			return;

		heart.alive = false;
		game.add.tween(heart.scale).to({x:2, y:2}, 200).start();
		game.add.tween(heart).to({alpha:0}, 300).start();
		var t = game.add.tween(heart).delay(2200).start();
		t.onComplete.add(function(){
			this.music.resume();
			this.music.volume = 0;
			game.add.tween(this.music).to({volume:0.4}, 1000).start();
		}, this);
		
		this.music.pause();
		if (sound) this.heart_s.play();
		this.number_hearts += 1;

		if (this.number_hearts == 3) 
			this.game_finished();
	},

	camera_movements: function() {
		if (this.tween)
			return;

		this.tween = true;
		var speed = 600;
		var to_move = false;

		if (this.player.y > game.camera.y + h) {
			this.camera.y += 1;
			to_move = true;
		}
		else if (this.player.y < game.camera.y) {
			this.camera.y -= 1;
			to_move = true;
		}
		else if (this.player.x > game.camera.x + w) {
			this.camera.x += 1;
			to_move = true;
		}
		else if (this.player.x < game.camera.x) {
			this.camera.x -= 1;
			to_move = true;
		}

		if (to_move) {
			var t = game.add.tween(game.camera).to({x:this.camera.x*w, y:this.camera.y*h}, speed);
			t.start();
			t.onComplete.add(function(){this.tween = false;}, this);
		}
		else
			this.tween = false;

	},

	/*fire: function() {
		var fire = this.bullets.getFirstDead();
		game.physics.arcade.enable(fire);
		fire.anchor.setTo(0.5, 0.5);
        fire.reset(this.player.x, this.player.y);
        fire.body.angularVelocity = 500;

        var speed = 350;
        if (this.player.direction == 1)
        	fire.body.velocity.y = -speed; 
        else if (this.player.direction == 2)
        	fire.body.velocity.y = +speed;
        else if (this.player.direction == 3)
        	fire.body.velocity.x = +speed;
        else if (this.player.direction == 4)
        	fire.body.velocity.x = -speed;
	},

	kill_bullet: function(bullet, layer) {
		bullet.kill();
	},*/

	player_movements: function() {
		this.player.body.velocity.x = 0;
		this.player.body.velocity.y = 0;

		if (!this.player.alive)
			return;

		var speed = 230;

		if (this.cursor.left.isDown) {
        	if (this.tween) this.player.body.velocity.x = -50;
        	else this.player.body.velocity.x = -speed;
			this.player.direction = 4;
			this.player.animations.play('left');
		}
		else if (this.cursor.right.isDown) {
        	if (this.tween) this.player.body.velocity.x = 50;
        	else this.player.body.velocity.x = speed;
			this.player.direction = 3;
			this.player.animations.play('right');
		}
		else if (this.cursor.up.isDown) {
        	if (this.tween) this.player.body.velocity.y = -50;
        	else this.player.body.velocity.y = -speed;
			this.player.direction = 1;
			this.player.animations.play('up');
		}
        else if (this.cursor.down.isDown) { 
        	if (this.tween) this.player.body.velocity.y = 50;
        	else this.player.body.velocity.y = speed;
            this.player.direction = 2;
            this.player.animations.play('down');
        }
        else {
        	if (this.player.direction == 1)
        		this.player.frame = 3;
        	else if (this.player.direction == 2)
        		this.player.frame = 0;
        	else if (this.player.direction == 3)
        		this.player.frame = 6;
        	else if (this.player.direction == 4)
        		this.player.frame = 9;

        	this.player.animations.stop();
        }
	},

	load_map: function() {
	    this.map = game.add.tilemap('map1');
	    this.map.addTilesetImage('tiles');
	    this.layer = this.map.createLayer('tiles');
	    this.map.setCollisionBetween(1, 6);
	    this.layer.resizeWorld();

		this.enemies = game.add.group();
		this.keys = game.add.group();
		this.doors = game.add.group();
		this.hearts = game.add.group();
		this.walls = game.add.group();

 	    this.map.createFromObjects('objects', 16, 'enemy', 0, true, false, this.enemies);
	    this.map.createFromObjects('objects', 24, 'key', 0, true, false, this.keys);
	    this.map.createFromObjects('objects', 25, 'door', 0, true, false, this.doors);			
	    this.map.createFromObjects('objects', 22, '', 0, true, false, this.walls);			
	    this.map.createFromObjects('objects', 23, 'heart', 0, true, false, this.hearts);			

		this.keys.forEach(function(d) {
			game.physics.arcade.enable(d);
		}, this);

		this.enemies.forEach(function(e) {
			game.physics.arcade.enable(e);
			if (e.move == 1)
				e.body.velocity.x = 200;
			else
				e.body.velocity.y = 200;
		}, this);

		this.walls.forEach(function(e) {
			game.physics.arcade.enable(e);
		}, this);

		this.hearts.forEach(function(h) {
			game.physics.arcade.enable(h);
			h.anchor.setTo(0.5, 0.5);
			h.x += h.width/2;
			h.y += h.height/2;
			h.alive = true;
		}, this);

		this.doors.forEach(function(d) {
			game.physics.arcade.enable(d);
			d.body.immovable = true;
			d.anchor.setTo(0.5, 0.5);
			d.x += d.width/2;
			d.y += d.height/2;
		}, this);
	},

	game_finished: function() {
		this.open_door(4);	
		var style = { font: '25px Arial', fill: '#fff', align: 'center' };
		var label = game.add.text(this.camera.x*w+w/2, this.camera.y*h+h/2, 'congratulation!\nnow go to the South-East', style);
		label.anchor.setTo(0.5, 0.5);
		label.scale.setTo(0, 0);
		game.add.tween(label.scale).to({x:1, y: 1}, 1500, Phaser.Easing.Bounce.Out).start();
		
		var p = game.add.emitter(3.5*w, 4*h, 200);
		p.makeParticles('heart');
		p.gravity *= -1;
		p.width = 12*35;
		p.start(false, 1800, 50);

		p.maxParticleScale = 1.3;
		p.minParticleScale = 0.7;
		p.setYSpeed(-100, -200);
		p.setXSpeed(-5, 5);		
	},
};

