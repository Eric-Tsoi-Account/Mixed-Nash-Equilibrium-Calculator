function popup(){
	if (window.confirm("Refer to 'https://en.wikipedia.org/wiki/Nash_equilibrium#Examples_2' for more details on the math concept. \n\nClick 'OK' to proceed to the webpage.")) 
    {
    	var w = window.open("https://en.wikipedia.org/wiki/Nash_equilibrium#Examples_2", "width=300", "height=400");
    };
}

function inRange(p, min, max) {
    return ((p-min)*(p-max) <= 0);
}

function calc(){	
	a = Number(document.getElementById("A").value);
	b = Number(document.getElementById("B").value);
	c = Number(document.getElementById("C").value);
	d = Number(document.getElementById("D").value);
	e = Number(document.getElementById("E").value);
	f = Number(document.getElementById("F").value);
	g = Number(document.getElementById("G").value);
	h = Number(document.getElementById("H").value);
	if ((b - d - f + h != 0) && (a - e - c + g != 0)){
        x = Math.abs((h - f)/(b - d - f + h));
        y = Math.abs((g - c)/(a - e - c + g));
        if (inRange(x, 0, 1) && inRange(y, 0, 1)){
            window.alert('Player x adopt strategy A with a probability of ' + x + ' and strategy B with a probability of ' + (1 - x))
            window.alert('Player y adopt strategy A with a probability of ' + y + ' and strategy B with a probability of ' + (1 - y))
        }
        else
        {
            window.alert('Cannot calculate.')
        }
        
    }
    else{
        window.alert('Cannot calculate.')
    }

};


document.querySelector('#Calc').addEventListener('click', () => {
    popup();
})

document.querySelector('#OpenDialog').addEventListener('click', () => {
    popup();
})