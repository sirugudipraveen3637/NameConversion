function camelcase(inp)
{
    var outstrng="";
    inparray=inp.split(" ");
    var i=0;
    for (const element of inparray) {
        if(i==0)
            outstrng=outstrng+element.toLowerCase();
        else{
            outstrng=outstrng+(element.substr(0,1).toUpperCase())+(element.substr(1,element.length-1).toLowerCase());
        }
        i++;
    }
    document.getElementById("camel-case").textContent=outstrng;
}

function pascalcase(inp)
{
    var outstrng="";
    inparray=inp.split(" ");
    var i=0;
    for (const element of inparray) {
        outstrng=outstrng+(element.substr(0,1).toUpperCase())+(element.substr(1,element.length-1).toLowerCase());
    }
    document.getElementById("pascal-case").textContent=outstrng;
}

function snakecase(inp)
{
    var outstrng="";
    inparray=inp.split(" ");
    var i=0;
    for (const element of inparray) {
        if(i==0)
            outstrng=element.toLowerCase();
        else{
            outstrng=outstrng+"_"+element.toLowerCase();
        }
        i++;
    }
    document.getElementById("snake-case").textContent=outstrng;
}

function screamsnakecase(inp)
{
    var outstrng="";
    inparray=inp.split(" ");
    var i=0;
    for (const element of inparray) {
        if(i==0)
            outstrng=element.toUpperCase();
        else{
            outstrng=outstrng+"_"+element.toUpperCase();
        }
        i++;
    }
    document.getElementById("screaming-snake-case").textContent=outstrng;
}

function kebabcase(inp)
{
    var outstrng="";
    inparray=inp.split(" ");
    var i=0;
    for (const element of inparray) {
        if(i==0)
            outstrng=element.toLowerCase();
        else{
            outstrng=outstrng+"-"+element.toLowerCase();
        }
        i++;
    }
    document.getElementById("kebab-case").textContent=outstrng;
}

function screamkababcase(inp)
{
    var outstrng="";
    inparray=inp.split(" ");
    var i=0;
    for (const element of inparray) {
        if(i==0)
            outstrng=element.toUpperCase();
        else{
            outstrng=outstrng+"-"+element.toUpperCase();
        }
        i++;
    }
    document.getElementById("screaming-kebab-case").textContent=outstrng;
}

function allConversions() {
   let inp= document.getElementById("text").value;
   camelcase(inp);
   pascalcase(inp);
   snakecase(inp);
   screamsnakecase(inp);
   kebabcase(inp);
   screamkababcase(inp);
}