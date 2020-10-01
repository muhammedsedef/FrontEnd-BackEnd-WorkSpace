var check = 1;
var is_game_over = false;

$(function () {
    $("td").click(function () {

       if($(this).is(':empty') && is_game_over != true){
           if(check % 2 == 1){
               $(this).html("X");
           }
           else{
               $(this).html("O");
           }
           check++;
           if(checkWinner()!= ""){
                if(checkWinner() == "X"){
                    $("body").append("<div class ='result'> Winner is X </div>");
                    $("body").append("<button onclick='location.reload()'>Play Again </button>");
                    is_game_over = true;
                } 
                    else{
                    $("body").append("<div class ='result'> Winner is O </div>");
                    $("body").append('<button class ="btn_reload" onclick="location.reload()"> Play Again </button>');
                    is_game_over = true;
                }
           }
           
           
       }
    });
    function checkWinner(){
        bx1 = $("table tr:nth-child(1) td:nth-child(1)").text();
        bx2 = $("table tr:nth-child(1) td:nth-child(2)").text();
        bx3 = $("table tr:nth-child(1) td:nth-child(3)").text();
        bx4 = $("table tr:nth-child(2) td:nth-child(1)").text();
        bx5 = $("table tr:nth-child(2) td:nth-child(2)").text();
        bx6 = $("table tr:nth-child(2) td:nth-child(3)").text();
        bx7 = $("table tr:nth-child(3) td:nth-child(1)").text();
        bx8 = $("table tr:nth-child(3) td:nth-child(2)").text();
        bx9 = $("table tr:nth-child(3) td:nth-child(3)").text();

        // Checking horizontal line 
        if(bx1 == bx2 && bx2 == bx3){
            return bx3;
        }
        else if(bx4 == bx5 && bx5 == bx6){
            return bx6;
        }
        else if(bx7 == bx8 && bx8 == bx9){
            return bx9;
        }
        // Checking vertical line
        else if(bx1 == bx4 && bx4 == bx7){
            return bx7;
        }
        else if(bx2 == bx5 && bx5 == bx8){
            return bx8;
        }
        else if(bx3 == bx6 && bx6 == bx9){
            return bx9;
        }
        // Checking cross line 
        else if(bx1 == bx5 && bx5 == bx9){
            return bx9;
        }
        else if(bx3 == bx5 && bx5 == bx7){
            return bx7;
        }
        
    }
  });