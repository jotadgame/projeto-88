//Atribua o valor empty para  variável mouseEvent

var mouseEvent = "empty";
//crie duas  variáveis :lastPositionOfX, lastPositionOfY  
var lastPositionOfX, lastPositionOfY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
//  Defina duas variáveis color e widthOfLine   
    color = "purple";
    widthOfLine = 1;

//Crie a função addEventListener() para mousedown()
    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e)
    {
        //Início da Atividade Adicional
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        //Fim da Atividade Adicional

        mouseEvent = "mousedown";
    }

//  Crie a função my_mouseup(). Atribua a variável “mouseup” à variável mouseEvent
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseup";
    }

// crie addEventListener() para mouseleave e a função my_mouseleave().

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

//  Crie um addEventListener() para mousemove
    canvas.addEventListener("mousemove", my_mousemove);
   

 function my_mousemove(e)
    {
        currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
        currentPositionOfMouseY = e.clientY - canvas.offsetTop;
//Verifique se o mouseEvent é mousedown
        if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Ultima posicao das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
 // Agora vamos passar a variável lastPositionOfX e lastPositionOfY para dentro da função moveTo(). O desenho começa nesses pontos.
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posicao atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
//  Chame a função lineTo() com currentPositionOfMouseX e currentPositionOfMouseY. A criação das linhas termina nesses pontos 
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);

// Agora vamos desenhar a linha usando a função stroke()

        ctx.stroke();
        }

        lastPositionOfX = currentPositionOfMouseX; 
        lastPositionOfY = currentPositionOfMouseY;
    }



//Atividade Adicional
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}