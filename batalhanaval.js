
var jogo=document.getElementById("jogar");
jogo.addEventListener("click", jogar, false);
function jogar(){
    var srcs=new Audio("First Transmission.mp3");
    srcs.play(); 
    srcs.loop=true;
    jogo.remove();
    var pg1=document.getElementById("pg1");
    var linhas = 10;
    var colunas = 10;
    var tamanhoQuadrado = 50;
    var tabuleiroContainer = document.getElementById("tabuleiro");
    for (i = 0; i < colunas; i++) {
        for (j = 0; j < linhas; j++) {
            var quadrado = document.createElement("div");
            tabuleiroContainer.appendChild(quadrado);
            quadrado.id = 's' + j + i;			
            var topi = j * tamanhoQuadrado;
            var lefti= i * tamanhoQuadrado;			
            quadrado.style.top = topi + 'px';
            quadrado.style.left = lefti + 'px';						
        }
    }

    var tabuleiro = [
        ["0","0","0","0","0","0","0","0","0","0"],
        ["0","0","0","0","0","0","0","0","0","0"],
        ["0","0","0","0","0","0","0","0","0","0"],
        ["0","0","0","0","0","0","0","0","0","0"],
        ["0","0","0","0","0","0","0","0","0","0"],
        ["0","0","0","0","0","0","0","0","0","0"],
        ["0","0","0","0","0","0","0","0","0","0"],
        ["0","0","0","0","0","0","0","0","0","0"],
        ["0","0","0","0","0","0","0","0","0","0"],
        ["0","0","0","0","0","0","0","0","0","0"],
        ]
    console.log(tabuleiro)

    var glinha=Math.floor(Math.random()*10);
    var gcoluna=Math.floor(Math.random()*10);
    var pos=Math.floor(Math.random()*2);

    //navio de 5 posicoes;
    if(pos==0 && gcoluna>5){
        gcoluna=5;
    }
    else if(pos==1 && glinha>5){
        glinha=5;
    }
    console.log(glinha,gcoluna,pos)
        switch(pos){
            case 0:
                for(var i=0;i<5;i++){
                    tabuleiro[glinha][gcoluna+i]=5;
                }
            break;
            case 1:
                for(var i=0;i<5;i++){
                    tabuleiro[glinha+i][gcoluna]=5;
                }
            break;
        }



    //4 posicoes
    for(var iiii=0;iiii<2;iiii++){
        var glinha=Math.floor(Math.random()*10);
        var gcoluna=Math.floor(Math.random()*10);
        var pos=Math.floor(Math.random()*2);
        if(pos==0 && gcoluna>6){
            gcoluna=6;
        }
        else if(pos==1 && glinha>6){
            glinha=6;
        }
        //horizontal
        if(pos==0){
            while(tabuleiro[glinha][gcoluna]!="0" || tabuleiro[glinha][gcoluna+1]!="0" || tabuleiro[glinha][gcoluna+2]!="0" || tabuleiro[glinha][gcoluna+3]!="0" ){
                var glinha=Math.floor(Math.random()*10);
                var gcoluna=Math.floor(Math.random()*7);
        }
        }
        else if(pos==1){
            while(tabuleiro[glinha][gcoluna]!="0" || tabuleiro[glinha+1][gcoluna]!="0" || tabuleiro[glinha+2][gcoluna]!="0" || tabuleiro[glinha+3][gcoluna]!="0"){
                var glinha=Math.floor(Math.random()*7);
                var gcoluna=Math.floor(Math.random()*10);
        }
        }
        switch(pos){
            case 0:
                for(var iif=0 ; iif<4;iif++){
                    tabuleiro[glinha][gcoluna+iif]=4+"n"+iiii;
                }
            break;
            case 1:
                for(var iif=0;iif<4;iif++){
                    tabuleiro[glinha+iif][gcoluna]=4+"n"+iiii;
                    
                }
            break;
        }

    }
    //barco de 3 posicoes
    for(var ii=0;ii<3;ii++){
        var glinha=Math.floor(Math.random()*10);
        var gcoluna=Math.floor(Math.random()*10);
        var pos=Math.floor(Math.random()*2);
        if(pos==0 && gcoluna>7){
            gcoluna=7;
        }
        else if(pos==1 && glinha>7){
            glinha=7;
        }
        if(pos==0){
            while(tabuleiro[glinha][gcoluna]!="0" || tabuleiro[glinha][gcoluna+1]!="0" || tabuleiro[glinha][gcoluna+2]!="0" ){
                var glinha=Math.floor(Math.random()*10);
                var gcoluna=Math.floor(Math.random()*8);
        }
        }
        else if(pos==1){
            while(tabuleiro[glinha][gcoluna]!="0" ||tabuleiro[glinha+1][gcoluna]!="0" ||tabuleiro[glinha+2][gcoluna]!="0" ){
                var glinha=Math.floor(Math.random()*8);
                var gcoluna=Math.floor(Math.random()*10);
        }
        }
        switch(pos){
            case 0:
                for(var i=0;i<3;i++){
                    tabuleiro[glinha][gcoluna+i]=3+"n"+ii;
                }
            break;
            case 1:
                for(var i=0;i<3;i++){
                    tabuleiro[glinha+i][gcoluna]=3+"n"+ii;
                }
            break;
        }
    }
    //barco de 2 posicoes
    for(var iii=0;iii<4;iii++){
        var glinha=Math.floor(Math.random()*10);
        var gcoluna=Math.floor(Math.random()*10);
        var pos=Math.floor(Math.random()*2);
        if(pos==0 && gcoluna>8){
            gcoluna=8;
        }
        else if(pos==1 && glinha>8){
            glinha=8;
        }
        //horizontal
        if(pos==0){
            while(tabuleiro[glinha][gcoluna]!="0" || tabuleiro[glinha][gcoluna+1]!="0" ){
                var glinha=Math.floor(Math.random()*10);
                var gcoluna=Math.floor(Math.random()*9);
        }
        }
        else if(pos==1){
            while(tabuleiro[glinha][gcoluna]!="0" ||tabuleiro[glinha+1][gcoluna]!="0" ){
                var glinha=Math.floor(Math.random()*9);
                var gcoluna=Math.floor(Math.random()*10);
        }
        }
        switch(pos){
            case 0:
                for(var i=0;i<2;i++){
                    tabuleiro[glinha][gcoluna+i]=2+"n"+iii;
                }
            break;
            case 1:
                for(var i=0;i<2;i++){
                    tabuleiro[glinha+i][gcoluna]=2+"n"+iii;
                }
                
            break;
        }
    }
    console.log(tabuleiro)


var acertado=0;
var tentativas=0;
var stt=70;
function opcao(e){

    if (e.target !== e.currentTarget) {
        tentativas++;
        var rest=70-tentativas;
        var str = document.getElementById("pg1").innerHTML; 
        var res = str.replace(stt, rest);
        stt=rest;
        document.getElementById("pg1").innerHTML = res;
		var linha = e.target.id.substring(1,2);
        var coluna = e.target.id.substring(2,3);
        
        if(tabuleiro[linha][coluna]=="op"){
            alert("estás a perder munições!!");

        }
		if (tabuleiro[linha][coluna] != 0 && (tabuleiro[linha][coluna] =="2n0" || tabuleiro[linha][coluna] =="2n1" || tabuleiro[linha][coluna] =="2n2" || tabuleiro[linha][coluna] =="2n3")) {
            e.target.style.backgroundImage = "url('submarino.png')";
            var bomba=new Audio("bomb.mp3");
           bomba.play();
           acertado++; 
           
           tabuleiro[linha][coluna]="op";
            
        }
        else if (tabuleiro[linha][coluna] != 0 && (tabuleiro[linha][coluna] =="3n0" || tabuleiro[linha][coluna] =="3n1" || tabuleiro[linha][coluna] =="3n2")) {
            e.target.style.backgroundImage = "url('contratorpedeiro.jpg')";
            var bomba=new Audio("bomb.mp3");
           bomba.play();
           acertado++;
           tabuleiro[linha][coluna]="op"; 
                
        }
        if (tabuleiro[linha][coluna] != 0 && (tabuleiro[linha][coluna] =="4n0" || tabuleiro[linha][coluna] =="4n1")) {
            e.target.style.backgroundImage = "url('naviotanque.png')";
            var bomba=new Audio("bomb.mp3");
           bomba.play();
           acertado++;
           tabuleiro[linha][coluna]="op";
                
        }
        if (tabuleiro[linha][coluna] != 0 && tabuleiro[linha][coluna] ==5) {
            e.target.style.backgroundImage = "url('portavioes.jpg')";
            var bomba=new Audio("bomb.mp3");
           bomba.play();
           acertado++;
           tabuleiro[linha][coluna]="op";
               
		}
        else if(tabuleiro[linha][coluna] == 0){
            var agua=new Audio("waterfa.wav");
            agua.play();
            e.target.style.backgroundImage = "url('onda.jpg')";
            tabuleiro[linha][coluna]="op";
        } 
        if(rest<=70 && acertado==30){
            srcs.pause();
            var winner= new Audio("winner.mp3");
            winner.play();
            alert("Ganhaste, parabéns!");
        }
        if(rest==0 && acertado<30){
            var gameover=new Audio("gameover.mp3");
            srcs.pause();
            gameover.play();
            alert("Perdeste!");
            location.reload();
        }

    }
    e.stopPropagation();
}

tabuleiroContainer.addEventListener("click", opcao, false);
}