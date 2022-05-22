$("#sbmt").on("click", function (e) {

    $("#tab-body").html(""); 
    $("#dv").html("");
    $("#ch44").html("");

    var chnf = $("#chnf").val(); 

    chnf = chnf.split(" ", chnf.length); 
    chnf = chnf.toString(); 
    chnf = chnf.replaceAll(",",""); 
    chnf = chnf.split("", chnf.length); 

    if(chnf.length !== 43){
        alert("Atenção! Chave NF-e Inválida!!!!"); 
        return; 
    }

    $("#tab-body").append("<tr id='R1'></tr>");
    $("#R1").append("<th>"+ "CH 43 Digitos" +"</th>");

    for (let i = 0; i < chnf.length; i++) {
        var num = chnf[i];
        $("#R1").append("<td>"+ num +"</td>");
    }

    chnf = chnf.reverse(); 

    $("#tab-body").append("<tr id='R2'></tr>");
    $("#tab-body").append("<tr id='R3'></tr>");
    
    $("#R2").append("<th>"+ "CH 43 Digitos Invertida" +"</th>");
    $("#R3").append("<th>"+ "Multiplicadores" +"</th>");
    
    var peso = 2; 
    var arr_ponderado = []; 

    for (let i = 0; i < chnf.length; i++) {
        var num = chnf[i];
        $("#R2").append("<td>"+ num +"</td>");
        $("#R3").append("<td>"+ peso +"</td>");
        if(peso === 9)
        {   
            arr_ponderado.push(num*peso)
            peso = 2; 
        } else {
            arr_ponderado.push(num*peso)
            peso++; 
        }
    }
    $("#tab-body").append("<tr id='R4'></tr>");
    $("#R4").append("<th>"+ "Produto da Multiplicação" +"</th>");

    for(let i = 0; i < arr_ponderado.length; i++)
    {
        var ponderacao = arr_ponderado[i]; 
        $("#R4").append("<td>"+ ponderacao +"</td>");
    }


    var soma = arr_ponderado.reduce(function(soma, i) {
         return soma + i;
    });

    var resto = soma % 11; 
    var dv = (resto === 0 || resto === 1) ? 0 : 11 - resto;
    chnf = chnf.reverse() 
    chnf = chnf.toString() 
    chnf = chnf.replaceAll(",",""); 
    var ch44 = chnf + dv; 

    $("#dv").append("Digito Verificador: " + dv);
    $("#ch44").append(" Chave 44 Digitos: " + ch44);
})