$(function(){
    var total = 0;
    var numElementos = 3;
    
    $("tbody tr").each(function(index){
        let examen1 = $("tbody tr: nth-child(" +(index+1)) + ") td".eq(1).text();
        let examen2 = $("tbody tr: nth-child(" +(index+1)) + ") td".eq(2).text();
        let examen3 = $("tbody tr: nth-child(" +(index+1)) + ") td".eq(3).text();
    
    let total = (parseFloat(examen1)) + (parseFloat(examen2)) + (parseFloat(examen3)) / numElementos;
    
    $("tbody tr:nth-child(" + (index+1) + ") td").eq(4).text(total);
    
        (total >= 70) ? $(this).css("color","green") : $(this).css("color","red");
    
                       });
});