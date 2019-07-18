let canvasLength, canvasHeight;
let playerHealth, playerAttack;
let computerHealth, computerAttack;
let attackBoxX, attackBoxY, attackBoxLength, attackBoxHeight;
let turn;

function setup(){
    createCanvas(600,600)
    playerHealth = 100;
    playerAttack = 10;

    computerHealth = 100;
    computerAttack = random(5, 15);

    attackBoxX = 450;
    attackBoxY = 360;
    attackBoxLength = 150;
    attackBoxHeight = 50;

    turn = "player";


};
let ca = function compAttack() {
    if(turn == 'computer') {
        playerHealth -= computerAttack;
        turn = 'player';
    }
}

function mousePressed({clientX, clientY}) {
    if(mouseX >= attackBoxX && mouseX <= attackBoxX + attackBoxLength && mouseY >= attackBoxY && mouseY <= attackBoxY + attackBoxHeight && turn == 'player') {
        computerHealth -= playerAttack;
        turn = 'computer';
        setTimeout(ca, 2000);
    }
    console.log(clientX, clientY);
}
let refresh=function reset(){
    playerHealth=100;
    computerHealth=100;
    turn = 'player';
}
function playerWin() {
    winTextSize = 50;
    fill(0);
    textSize(winTextSize);
    text("Computer Wins!",198,256);
    setTimeout(refresh, 10000);
}
function enemyWin(){
        winTextSize = 50;
        fill(0);
        textSize(winTextSize);
        text("Player Wins!", 198, 256);
        setTimeout(refresh, 10000);

};

function draw(){
    
    background(200, 100, 40);
    fill(200,0,0);
    rect(50,520, playerHealth * 1.5,20);
    fill(225, 0, 0); //green
    rect(50, 520, playerHealth * 1.5, 20); //player
    textSize(18);
    fill(0,0,0);
    text ('Health',72,535);
    fill(225,0,0);
    rect(15, 15, computerHealth * 1.5, 20);//compute
    textSize(18);
    fill(0,0,0);
    text('Health',28,29);

    if(playerHealth<=0){
        winTextSize = 50;
        fill(0);
        textSize(winTextSize);
        text("Computer Wins!",198,256);
        setTimeout(refresh, 10000);
        
    }
    else if(computerHealth<=0){
        winTextSize = 50;
        fill(0);
        textSize(winTextSize);
        text("Player Wins!", 198, 256);
        setTimeout(refresh, 10000);
        

    };
    fill(120); //grey
    rect(attackBoxX, attackBoxY, attackBoxLength, attackBoxHeight); //attack button
    rect()

    fill(0,255,0);
    rect(29,490,200,20);//EXP
    textSize(10);
    fill(0,0,0);
    text('EXP',49,503);
    fill(255,255,255);
    rect(240,360,200,200);
    fill(200,200,200);
    rect(450,360,150,50);
    textSize(18);
    fill(0,0,0);
    text('Flamethrower',469,390);
    fill(200,200,200);
    rect(450,412,150,50);
    textSize(18);
    fill(0,0,0);
    text('Dragon Claw',469,437);
    fill(200,200,200);
    rect(450,464,150,50);
    textSize(18);
    fill(0,0,0);
    text('Fly',469,491);
    fill(200,200,200);
    rect(450,515,150,50);
    textSize(18);
    fill(0,0,0);
    text('Overheat',469,538);
    fill(255,255,255);
    rect(362,20,200,200);
    fill(0,255,0);
    fill(255,0,0);
    ellipse(28,55,30,30);
    ellipse(65,55,30,30);
    ellipse(103,55,30,30);
    ellipse(140,55,30,30);
    ellipse(175,55,30,30);
    ellipse(210,55,30,30);
    fill(255,0,0);
    triangle(295,391,285,411,305,411);
    triangle(325,391,315,411,335,411);
    ellipse(310,430,40,40);
    rect(290,442,100,50);
    rect(295,490,20,45);
    rect(365,490,20,45);
    fill(225,225,0);
    ellipse(465,72,40,40);
    ellipse(465,115,40,60);
    ellipse(475,147,20,10);
    ellipse(455,147,20,10);
    triangle(485,135,485,118,502,112);
    ellipse(458,50,15,35);
    ellipse(490,65,15,35);
}
