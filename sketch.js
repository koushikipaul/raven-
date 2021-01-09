// enemy should become inactive  when light  is on it;
//enemy should move towards the player slowly; 
//enemy velocity(movement)

var gameState = 0;
var canvas;
var enemyGroup = [];

function preload() {

}

function setup() {
	canvas = createCanvas(600, 600);
	player = new Player(100, 580);
	
	

}


function draw() {
	background(0);
	text(mouseX+","+mouseY,mouseX,mouseY)
	if (gameState == 0) {

	}
	if (gameState == 1) {

	}
	//keyPressed();
	player.display();
	
	
	drawSprites();
	spawnEnemy();

}
//  function destroybullet(){
// 	for(var i =0; i<this.bullet.length;i++){
// 		this.bullet[i].isTouching(mazeGroup);
// 		this.bullet[i].destroy();
// 	}
// }
function keyPressed() {
	if (keyCode === UP_ARROW) {

		player.y -= 10;
		player.canvaspoint = {
			x: player.x,
			y: 0
		}



	}
	if (keyCode === DOWN_ARROW) {
		player.y += 10;
		player.canvaspoint = {
			x: player.x,
			y: canvas.height
		}
		
	}
	if (keyCode === LEFT_ARROW) {
		player.x -= 10;
		player.canvaspoint = {
			x: 0,
			y: player.y
		}
		
		
	}

if (keyCode === RIGHT_ARROW) {
	player.x += 10;
	player.canvaspoint = {
		x: canvas.width,
		y: player.y
	}
}
}
function mouseDragged(){
	player.canvaspoint={x:mouseX,y: mouseY}
	// player.canvaspoint=lineExtension(player.canvaspoint.x,player.canvaspoint.y,mouseX,mouseY);
	//console.log(player.canvaspoint)
	


}
function spawnEnemy(){
	var enemy;
	if(frameCount % 200 === 0 && enemyGroup.length<5 ){
		enemy = new Enemy(Math.round(random(100,400)),Math.round(random(100,400)));
		// if(player.x - enemy.x >=0 ){
		// 	enemy.x = player.x-25;
		// }
		// if(player.x - enemy.x <0 ){
		// 	enemy.x = player.x+25;
		// }
		// if(player.y - enemy.y <0 ){
		// 	enemy.y = player.y+25;
		// }
		// if(player.y - enemy.y >=0 ){
		// 	enemy.y = player.y-25;
		// }
		
			
			enemyGroup.push(enemy);
	}
	for(var i = 0; i<enemyGroup.length;i++){
		enemyGroup[i].createBullet();
		if(player.x - enemyGroup[i].x >=0 ){
			enemyGroup[i].x = player.x-25;
		}
		if(player.x - enemyGroup[i].x <0 ){
			enemyGroup[i].x = player.x+25;
		}
		if(player.y - enemyGroup[i].y <0 ){
			enemyGroup[i].y = player.y+25;
		}
		if(player.y - enemyGroup[i].y >=0 ){
			enemyGroup[i].y = player.y-25;
		}
	}
	
	
}