var scoredice = [[['1','b'],['2','y'],['3','r'],['4','g']],[['1','g'],['2','b'],['3','r'],['4','y']],[['1','y'],['2','g'],['3','b'],['4','r']],[['1','r'],['2','y'],['3','g'],['4','b']],[['1','b'],['2','r'],['3','y'],['4','g']],[['1','y'],['2','b'],['3','g'],['4','r']]];
var letterdice1 = [[['a','y'],['m','r'],['t','b'],['g','g']],[['h','b'],['n','g'],['u','y'],['b','r']],[['w','g'],['j','r'],['p','y'],['d','b']],[['i','y'],['o','b'],['v','r'],['c','g']],[['r','r'],['o','b'],['k','g'],['e','y']],[['l','b'],['s','g'],['f','r'],['c','y']]];
var letterdice2 = [[['n','y'],['e','g'],['f','b'],['r','b']],[['o','g'],['t','r'],['d','y'],['g','g']],[['x','r'],['o','b'],['k','g'],['a','y']],[['b','g'],['i','y'],['w','r'],['m','r']],[['f','r'],['n','y'],['l','r'],['s','b']],[['e','y'],['a','b'],['p','b'],['u','g']]];
var letterdice3 = [[['d','b'],['h','r'],['t','g'],['o','y']],[['q','r'],['a','y'],['s','b'],['i','b']],[['l','g'],['u','b'],['e','y'],['k','r']],[['n','b'],['g','y'],['e','r'],['z','g']],[['e','g'],['c','r'],['r','r'],['m','y']],[['v','g'],['a','g'],['n','b'],['i','y']]];
var woordindex = 0;
function initialization() {
	var w = window.innerWidth;
	var h = window.innerHeight;
	console.log("Initialization " + scoredice[2] + " Screensize: " + w + "-" + h);
	var lmargin = 50;
	var rmargin = 50;
	var cspace = (w - lmargin - rmargin - 200 - 200 - 200 - 200) / 3;
	$("#cube1").css("left", + lmargin + "px");
	lmargin = lmargin + 200 + cspace;
	$("#cube2").css("left", + lmargin + "px");
	lmargin = lmargin + 200 + cspace;
	$("#cube3").css("left", + lmargin + "px");
	lmargin = lmargin + 200 + cspace;
	$("#cube4").css("left", + lmargin + "px");
	newthrow();
}
function backgroundcolor(c) {
	switch (c) {
		case 'b' : return 'blue';
		break;
		case 'g' : return 'green';
		break;
		case 'y' : return 'yellow';
		break;
		case 'r' : return 'red';
		break;
	}
}
function newthrow() {
	var ldice1 = Math.floor((Math.random() * 6));
	var ldice2 = Math.floor((Math.random() * 6));
	var ldice3 = Math.floor((Math.random() * 6));
	var ddice = Math.floor((Math.random() * 6));
	switch (ldice1) {
		case 0: document.getElementById('cube1').getElementsByTagName('div')[0].className = 'cube toTop';
			$("#c1s1letter1").html(letterdice1[ldice1][0][0]);
			$("#c1s1letter1").css('color', 'white');
			$("#c1s1letter1").css('background-color', backgroundcolor(letterdice1[ldice1][0][1]));
			$("#c1s1letter1").on('click', function() {
				letterselect("c1s1letter1");
			});
			$("#c1s1letter2").html(letterdice1[ldice1][1][0]);
			$("#c1s1letter2").css('color', 'white');
			$("#c1s1letter2").css('background-color', backgroundcolor(letterdice1[ldice1][1][1]));
			$("#c1s1letter2").on('click', function() {
				letterselect("c1s1letter2");
			});
			$("#c1s1letter3").html(letterdice1[ldice1][2][0]);
			$("#c1s1letter3").css('color', 'white');
			$("#c1s1letter3").css('background-color', backgroundcolor(letterdice1[ldice1][2][1]));
			$("#c1s1letter3").on('click', function() {
				letterselect("c1s1letter3");
			});
			$("#c1s1letter4").html(letterdice1[ldice1][3][0]);
			$("#c1s1letter4").css('color', 'white');
			$("#c1s1letter4").css('background-color', backgroundcolor(letterdice1[ldice1][3][1]));
			$("#c1s1letter4").on('click', function() {
				letterselect("c1s1letter4");
			});
			break;
		case 1: document.getElementById('cube1').getElementsByTagName('div')[0].className = 'cube toFront';
			$("#c1s2letter1").html(letterdice1[ldice1][0][0]);
			$("#c1s2letter1").css('color', 'white');
			$("#c1s2letter1").css('background-color', backgroundcolor(letterdice1[ldice1][0][1]));
			$("#c1s2letter1").on('click', function() {
				letterselect("c1s2letter1");
			});
			$("#c1s2letter2").html(letterdice1[ldice1][1][0]);
			$("#c1s2letter2").css('color', 'white');
			$("#c1s2letter2").css('background-color', backgroundcolor(letterdice1[ldice1][1][1]));
			$("#c1s2letter2").on('click', function() {
				letterselect("c1s2letter2");
			});
			$("#c1s2letter3").html(letterdice1[ldice1][2][0]);
			$("#c1s2letter3").css('color', 'white');
			$("#c1s2letter3").css('background-color', backgroundcolor(letterdice1[ldice1][2][1]));
			$("#c1s2letter3").on('click', function() {
				letterselect("c1s2letter3");
			});
			$("#c1s2letter4").html(letterdice1[ldice1][3][0]);
			$("#c1s2letter4").css('color', 'white');
			$("#c1s2letter4").css('background-color', backgroundcolor(letterdice1[ldice1][3][1]));
			$("#c1s2letter4").on('click', function() {
				letterselect("c1s2letter4");
			});
			break;
		case 2: document.getElementById('cube1').getElementsByTagName('div')[0].className = 'cube toBottom';
			$("#c1s3letter1").html(letterdice1[ldice1][0][0]);
			$("#c1s3letter1").css('color', 'white');
			$("#c1s3letter1").css('background-color', backgroundcolor(letterdice1[ldice1][0][1]));
			$("#c1s3letter1").on('click', function() {
				letterselect("c1s3letter1");
			});
			$("#c1s3letter2").html(letterdice1[ldice1][1][0]);
			$("#c1s3letter2").css('color', 'white');
			$("#c1s3letter2").css('background-color', backgroundcolor(letterdice1[ldice1][1][1]));
			$("#c1s3letter2").on('click', function() {
				letterselect("c1s3letter2");
			});
			$("#c1s3letter3").html(letterdice1[ldice1][2][0]);
			$("#c1s3letter3").css('color', 'white');
			$("#c1s3letter3").css('background-color', backgroundcolor(letterdice1[ldice1][2][1]));
			$("#c1s3letter3").on('click', function() {
				letterselect("c1s3letter3");
			});
			$("#c1s3letter4").html(letterdice1[ldice1][3][0]);
			$("#c1s3letter4").css('color', 'white');
			$("#c1s3letter4").css('background-color', backgroundcolor(letterdice1[ldice1][3][1]));
			$("#c1s3letter4").on('click', function() {
				letterselect("c1s3letter4");
			});
			break;
		case 3: document.getElementById('cube1').getElementsByTagName('div')[0].className = 'cube toLeft';
			$("#c1s4letter1").html(letterdice1[ldice1][0][0]);
			$("#c1s4letter1").css('color', 'white');
			$("#c1s4letter1").css('background-color', backgroundcolor(letterdice1[ldice1][0][1]));
			$("#c1s4letter1").on('click', function() {
				letterselect("c1s4letter1");
			});
			$("#c1s4letter2").html(letterdice1[ldice1][1][0]);
			$("#c1s4letter2").css('color', 'white');
			$("#c1s4letter2").css('background-color', backgroundcolor(letterdice1[ldice1][1][1]));
			$("#c1s4letter2").on('click', function() {
				letterselect("c1s4letter2");
			});
			$("#c1s4letter3").html(letterdice1[ldice1][2][0]);
			$("#c1s4letter3").css('color', 'white');
			$("#c1s4letter3").css('background-color', backgroundcolor(letterdice1[ldice1][2][1]));
			$("#c1s4letter3").on('click', function() {
				letterselect("c1s4letter3");
			});
			$("#c1s4letter4").html(letterdice1[ldice1][3][0]);
			$("#c1s4letter4").css('color', 'white');
			$("#c1s4letter4").css('background-color', backgroundcolor(letterdice1[ldice1][3][1]));
			$("#c1s4letter4").on('click', function() {
				letterselect("c1s4letter4");
			});
			break;
		case 4: document.getElementById('cube1').getElementsByTagName('div')[0].className = 'cube toRight';
			$("#c1s5letter1").html(letterdice1[ldice1][0][0]);
			$("#c1s5letter1").css('color', 'white');
			$("#c1s5letter1").css('background-color', backgroundcolor(letterdice1[ldice1][0][1]));
			$("#c1s5letter1").on('click', function() {
				letterselect("c1s5letter1");
			});
			$("#c1s5letter2").html(letterdice1[ldice1][1][0]);
			$("#c1s5letter2").css('color', 'white');
			$("#c1s5letter2").css('background-color', backgroundcolor(letterdice1[ldice1][1][1]));
			$("#c1s5letter2").on('click', function() {
				letterselect("c1s5letter2");
			});
			$("#c1s5letter3").html(letterdice1[ldice1][2][0]);
			$("#c1s5letter3").css('color', 'white');
			$("#c1s5letter3").css('background-color', backgroundcolor(letterdice1[ldice1][2][1]));
			$("#c1s5letter3").on('click', function() {
				letterselect("c1s5letter3");
			});
			$("#c1s5letter4").html(letterdice1[ldice1][3][0]);
			$("#c1s5letter4").css('color', 'white');
			$("#c1s5letter4").css('background-color', backgroundcolor(letterdice1[ldice1][3][1]));
			$("#c1s5letter4").on('click', function() {
				letterselect("c1s5letter4");
			});
			break;
		case 5: document.getElementById('cube1').getElementsByTagName('div')[0].className = 'cube toRear';
			$("#c1s6letter1").html(letterdice1[ldice1][0][0]);
			$("#c1s6letter1").css('color', 'white');
			$("#c1s6letter1").css('background-color', backgroundcolor(letterdice1[ldice1][0][1]));
			$("#c1s6letter1").on('click', function() {
				letterselect("c1s6letter1");
			});
			$("#c1s6letter2").html(letterdice1[ldice1][1][0]);
			$("#c1s6letter2").css('color', 'white');
			$("#c1s6letter2").css('background-color', backgroundcolor(letterdice1[ldice1][1][1]));
			$("#c1s6letter2").on('click', function() {
				letterselect("c1s6letter2");
			});
			$("#c1s6letter3").html(letterdice1[ldice1][2][0]);
			$("#c1s6letter3").css('color', 'white');
			$("#c1s6letter3").css('background-color', backgroundcolor(letterdice1[ldice1][2][1]));
			$("#c1s6letter3").on('click', function() {
				letterselect("c1s6letter3");
			});
			$("#c1s6letter4").html(letterdice1[ldice1][3][0]);
			$("#c1s6letter4").css('color', 'white');
			$("#c1s6letter4").css('background-color', backgroundcolor(letterdice1[ldice1][3][1]));
			$("#c1s6letter4").on('click', function() {
				letterselect("c1s6letter4");
			});
			break;
	}
	switch (ldice2) {
		case 0: document.getElementById('cube2').getElementsByTagName('div')[0].className = 'cube toTop';
			$("#c2s1letter1").html(letterdice2[ldice2][0][0]);
			$("#c2s1letter1").css('color', 'white');
			$("#c2s1letter1").css('background-color', backgroundcolor(letterdice2[ldice2][0][1]));
			$("#c2s1letter1").on('click', function() {
				letterselect("c2s1letter1");
			});
			$("#c2s1letter2").html(letterdice2[ldice2][1][0]);
			$("#c2s1letter2").css('color', 'white');
			$("#c2s1letter2").css('background-color', backgroundcolor(letterdice2[ldice2][1][1]));
			$("#c2s1letter2").on('click', function() {
				letterselect("c2s1letter2");
			});
			$("#c2s1letter3").html(letterdice2[ldice2][2][0]);
			$("#c2s1letter3").css('color', 'white');
			$("#c2s1letter3").css('background-color', backgroundcolor(letterdice2[ldice2][2][1]));
			$("#c2s1letter3").on('click', function() {
				letterselect("c2s1letter3");
			});
			$("#c2s1letter4").html(letterdice2[ldice2][3][0]);
			$("#c2s1letter4").css('color', 'white');
			$("#c2s1letter4").css('background-color', backgroundcolor(letterdice2[ldice2][3][1]));
			$("#c2s1letter4").on('click', function() {
				letterselect("c2s1letter4");
			});
			break;
		case 1: document.getElementById('cube2').getElementsByTagName('div')[0].className = 'cube toFront';
			$("#c2s2letter1").html(letterdice2[ldice2][0][0]);
			$("#c2s2letter1").css('color', 'white');
			$("#c2s2letter1").css('background-color', backgroundcolor(letterdice2[ldice2][0][1]));
			$("#c2s2letter1").on('click', function() {
				letterselect("c2s2letter1");
			});
			$("#c2s2letter2").html(letterdice2[ldice2][1][0]);
			$("#c2s2letter2").css('color', 'white');
			$("#c2s2letter2").css('background-color', backgroundcolor(letterdice2[ldice2][1][1]));
			$("#c2s2letter2").on('click', function() {
				letterselect("c2s2letter2");
			});
			$("#c2s2letter3").html(letterdice2[ldice2][2][0]);
			$("#c2s2letter3").css('color', 'white');
			$("#c2s2letter3").css('background-color', backgroundcolor(letterdice2[ldice2][2][1]));
			$("#c2s2letter3").on('click', function() {
				letterselect("c2s2letter3");
			});
			$("#c2s2letter4").html(letterdice2[ldice2][3][0]);
			$("#c2s2letter4").css('color', 'white');
			$("#c2s2letter4").css('background-color', backgroundcolor(letterdice2[ldice2][3][1]));
			$("#c2s2letter4").on('click', function() {
				letterselect("c2s2letter4");
			});
			break;
		case 2: document.getElementById('cube2').getElementsByTagName('div')[0].className = 'cube toBottom';
			$("#c2s3letter1").html(letterdice2[ldice2][0][0]);
			$("#c2s3letter1").css('color', 'white');
			$("#c2s3letter1").css('background-color', backgroundcolor(letterdice2[ldice2][0][1]));
			$("#c2s3letter1").on('click', function() {
				letterselect("c2s3letter1");
			});
			$("#c2s3letter2").html(letterdice2[ldice2][1][0]);
			$("#c2s3letter2").css('color', 'white');
			$("#c2s3letter2").css('background-color', backgroundcolor(letterdice2[ldice2][1][1]));
			$("#c2s3letter2").on('click', function() {
				letterselect("c2s3letter2");
			});
			$("#c2s3letter3").html(letterdice2[ldice2][2][0]);
			$("#c2s3letter3").css('color', 'white');
			$("#c2s3letter3").css('background-color', backgroundcolor(letterdice2[ldice2][2][1]));
			$("#c2s3letter3").on('click', function() {
				letterselect("c2s3letter3");
			});
			$("#c2s3letter4").html(letterdice2[ldice2][3][0]);
			$("#c2s3letter4").css('color', 'white');
			$("#c2s3letter4").css('background-color', backgroundcolor(letterdice2[ldice2][3][1]));
			$("#c2s3letter4").on('click', function() {
				letterselect("c2s3letter4");
			});
			break;
		case 3: document.getElementById('cube2').getElementsByTagName('div')[0].className = 'cube toLeft';
			$("#c2s4letter1").html(letterdice2[ldice2][0][0]);
			$("#c2s4letter1").css('color', 'white');
			$("#c2s4letter1").css('background-color', backgroundcolor(letterdice2[ldice2][0][1]));
			$("#c2s4letter1").on('click', function() {
				letterselect("c2s4letter1");
			});
			$("#c2s4letter2").html(letterdice2[ldice2][1][0]);
			$("#c2s4letter2").css('color', 'white');
			$("#c2s4letter2").css('background-color', backgroundcolor(letterdice2[ldice2][1][1]));
			$("#c2s4letter2").on('click', function() {
				letterselect("c2s4letter2");
			});
			$("#c2s4letter3").html(letterdice2[ldice2][2][0]);
			$("#c2s4letter3").css('color', 'white');
			$("#c2s4letter3").css('background-color', backgroundcolor(letterdice2[ldice2][2][1]));
			$("#c2s4letter3").on('click', function() {
				letterselect("c2s4letter3");
			});
			$("#c2s4letter4").html(letterdice2[ldice2][3][0]);
			$("#c2s4letter4").css('color', 'white');
			$("#c2s4letter4").css('background-color', backgroundcolor(letterdice2[ldice2][3][1]));
			$("#c2s4letter4").on('click', function() {
				letterselect("c2s4letter4");
			});
			break;
		case 4: document.getElementById('cube2').getElementsByTagName('div')[0].className = 'cube toRight';
			$("#c2s5letter1").html(letterdice2[ldice2][0][0]);
			$("#c2s5letter1").css('color', 'white');
			$("#c2s5letter1").css('background-color', backgroundcolor(letterdice2[ldice2][0][1]));
			$("#c2s5letter1").on('click', function() {
				letterselect("c2s5letter1");
			});
			$("#c2s5letter2").html(letterdice2[ldice2][1][0]);
			$("#c2s5letter2").css('color', 'white');
			$("#c2s5letter2").css('background-color', backgroundcolor(letterdice2[ldice2][1][1]));
			$("#c2s5letter2").on('click', function() {
				letterselect("c2s5letter2");
			});
			$("#c2s5letter3").html(letterdice2[ldice2][2][0]);
			$("#c2s5letter3").css('color', 'white');
			$("#c2s5letter3").css('background-color', backgroundcolor(letterdice2[ldice2][2][1]));
			$("#c2s5letter3").on('click', function() {
				letterselect("c2s5letter3");
			});
			$("#c2s5letter4").html(letterdice2[ldice2][3][0]);
			$("#c2s5letter4").css('color', 'white');
			$("#c2s5letter4").css('background-color', backgroundcolor(letterdice2[ldice2][3][1]));
			$("#c2s5letter4").on('click', function() {
				letterselect("c2s5letter4");
			});
			break;
		case 5: document.getElementById('cube2').getElementsByTagName('div')[0].className = 'cube toRear';
			$("#c2s6letter1").html(letterdice2[ldice2][0][0]);
			$("#c2s6letter1").css('color', 'white');
			$("#c2s6letter1").css('background-color', backgroundcolor(letterdice2[ldice2][0][1]));
			$("#c2s6letter1").on('click', function() {
				letterselect("c2s6letter1");
			});
			$("#c2s6letter2").html(letterdice2[ldice2][1][0]);
			$("#c2s6letter2").css('color', 'white');
			$("#c2s6letter2").css('background-color', backgroundcolor(letterdice2[ldice2][1][1]));
			$("#c2s6letter2").on('click', function() {
				letterselect("c2s6letter2");
			});
			$("#c2s6letter3").html(letterdice2[ldice2][2][0]);
			$("#c2s6letter3").css('color', 'white');
			$("#c2s6letter3").css('background-color', backgroundcolor(letterdice2[ldice2][2][1]));
			$("#c2s6letter3").on('click', function() {
				letterselect("c2s6letter3");
			});
			$("#c2s6letter4").html(letterdice2[ldice2][3][0]);
			$("#c2s6letter4").css('color', 'white');
			$("#c2s6letter4").css('background-color', backgroundcolor(letterdice2[ldice2][3][1]));
			$("#c2s6letter4").on('click', function() {
				letterselect("c2s6letter4");
			});
			break;
	}
	switch (ldice3) {
		case 0: document.getElementById('cube3').getElementsByTagName('div')[0].className = 'cube toTop';
			$("#c3s1letter1").html(letterdice3[ldice3][0][0]);
			$("#c3s1letter1").css('color', 'white');
			$("#c3s1letter1").css('background-color', backgroundcolor(letterdice3[ldice3][0][1]));
			$("#c3s1letter1").on('click', function() {
				letterselect("c3s1letter1");
			});
			$("#c3s1letter2").html(letterdice3[ldice3][1][0]);
			$("#c3s1letter2").css('color', 'white');
			$("#c3s1letter2").css('background-color', backgroundcolor(letterdice3[ldice3][1][1]));
			$("#c3s1letter2").on('click', function() {
				letterselect("c3s1letter2");
			});
			$("#c3s1letter3").html(letterdice3[ldice3][2][0]);
			$("#c3s1letter3").css('color', 'white');
			$("#c3s1letter3").css('background-color', backgroundcolor(letterdice3[ldice3][2][1]));
			$("#c3s1letter3").on('click', function() {
				letterselect("c3s1letter3");
			});
			$("#c3s1letter4").html(letterdice3[ldice3][3][0]);
			$("#c3s1letter4").css('color', 'white');
			$("#c3s1letter4").css('background-color', backgroundcolor(letterdice3[ldice3][3][1]));
			$("#c3s1letter4").on('click', function() {
				letterselect("c3s1letter4");
			});
			break;
		case 1: document.getElementById('cube3').getElementsByTagName('div')[0].className = 'cube toFront';
			$("#c3s2letter1").html(letterdice3[ldice3][0][0]);
			$("#c3s2letter1").css('color', 'white');
			$("#c3s2letter1").css('background-color', backgroundcolor(letterdice3[ldice3][0][1]));
			$("#c3s2letter1").on('click', function() {
				letterselect("c3s2letter1");
			});
			$("#c3s2letter2").html(letterdice3[ldice3][1][0]);
			$("#c3s2letter2").css('color', 'white');
			$("#c3s2letter2").css('background-color', backgroundcolor(letterdice3[ldice3][1][1]));
			$("#c3s2letter2").on('click', function() {
				letterselect("c3s2letter2");
			});
			$("#c3s2letter3").html(letterdice3[ldice3][2][0]);
			$("#c3s2letter3").css('color', 'white');
			$("#c3s2letter3").css('background-color', backgroundcolor(letterdice3[ldice3][2][1]));
			$("#c3s2letter3").on('click', function() {
				letterselect("c3s2letter3");
			});
			$("#c3s2letter4").html(letterdice3[ldice3][3][0]);
			$("#c3s2letter4").css('color', 'white');
			$("#c3s2letter4").css('background-color', backgroundcolor(letterdice3[ldice3][3][1]));
			$("#c3s2letter4").on('click', function() {
				letterselect("c3s2letter4");
			});
			break;
		case 2: document.getElementById('cube3').getElementsByTagName('div')[0].className = 'cube toBottom';
			$("#c3s3letter1").html(letterdice3[ldice3][0][0]);
			$("#c3s3letter1").css('color', 'white');
			$("#c3s3letter1").css('background-color', backgroundcolor(letterdice3[ldice3][0][1]));
			$("#c3s3letter1").on('click', function() {
				letterselect("c3s3letter1");
			});
			$("#c3s3letter2").html(letterdice3[ldice3][1][0]);
			$("#c3s3letter2").css('color', 'white');
			$("#c3s3letter2").css('background-color', backgroundcolor(letterdice3[ldice3][1][1]));
			$("#c3s3letter2").on('click', function() {
				letterselect("c3s3letter2");
			});
			$("#c3s3letter3").html(letterdice3[ldice3][2][0]);
			$("#c3s3letter3").css('color', 'white');
			$("#c3s3letter3").css('background-color', backgroundcolor(letterdice3[ldice3][2][1]));
			$("#c3s3letter3").on('click', function() {
				letterselect("c3s3letter3");
			});
			$("#c3s3letter4").html(letterdice3[ldice3][3][0]);
			$("#c3s3letter4").css('color', 'white');
			$("#c3s3letter4").css('background-color', backgroundcolor(letterdice3[ldice3][3][1]));
			$("#c3s3letter4").on('click', function() {
				letterselect("c3s3letter4");
			});
			break;
		case 3: document.getElementById('cube3').getElementsByTagName('div')[0].className = 'cube toLeft';
			$("#c3s4letter1").html(letterdice3[ldice3][0][0]);
			$("#c3s4letter1").css('color', 'white');
			$("#c3s4letter1").css('background-color', backgroundcolor(letterdice3[ldice3][0][1]));
			$("#c3s4letter1").on('click', function() {
				letterselect("c3s4letter1");
			});
			$("#c3s4letter2").html(letterdice3[ldice3][1][0]);
			$("#c3s4letter2").css('color', 'white');
			$("#c3s4letter2").css('background-color', backgroundcolor(letterdice3[ldice3][1][1]));
			$("#c3s4letter2").on('click', function() {
				letterselect("c3s4letter2");
			});
			$("#c3s4letter3").html(letterdice3[ldice3][2][0]);
			$("#c3s4letter3").css('color', 'white');
			$("#c3s4letter3").css('background-color', backgroundcolor(letterdice3[ldice3][2][1]));
			$("#c3s4letter3").on('click', function() {
				letterselect("c3s4letter3");
			});
			$("#c3s4letter4").html(letterdice3[ldice3][3][0]);
			$("#c3s4letter4").css('color', 'white');
			$("#c3s4letter4").css('background-color', backgroundcolor(letterdice3[ldice3][3][1]));
			$("#c3s4letter4").on('click', function() {
				letterselect("c3s4letter4");
			});
			break;
		case 4: document.getElementById('cube3').getElementsByTagName('div')[0].className = 'cube toRight';
			$("#c3s5letter1").html(letterdice3[ldice3][0][0]);
			$("#c3s5letter1").css('color', 'white');
			$("#c3s5letter1").css('background-color', backgroundcolor(letterdice3[ldice3][0][1]));
			$("#c3s5letter1").on('click', function() {
				letterselect("c3s5letter1");
			});
			$("#c3s5letter2").html(letterdice3[ldice3][1][0]);
			$("#c3s5letter2").css('color', 'white');
			$("#c3s5letter2").css('background-color', backgroundcolor(letterdice3[ldice3][1][1]));
			$("#c3s5letter2").on('click', function() {
				letterselect("c3s5letter2");
			});
			$("#c3s5letter3").html(letterdice3[ldice3][2][0]);
			$("#c3s5letter3").css('color', 'white');
			$("#c3s5letter3").css('background-color', backgroundcolor(letterdice3[ldice3][2][1]));
			$("#c3s5letter3").on('click', function() {
				letterselect("c3s5letter3");
			});
			$("#c3s5letter4").html(letterdice3[ldice3][3][0]);
			$("#c3s5letter4").css('color', 'white');
			$("#c3s5letter4").css('background-color', backgroundcolor(letterdice3[ldice3][3][1]));
			$("#c3s5letter4").on('click', function() {
				letterselect("c3s5letter4");
			});
			break;
		case 5: document.getElementById('cube3').getElementsByTagName('div')[0].className = 'cube toRear';
			$("#c3s6letter1").html(letterdice3[ldice3][0][0]);
			$("#c3s6letter1").css('color', 'white');
			$("#c3s6letter1").css('background-color', backgroundcolor(letterdice3[ldice3][0][1]));
			$("#c3s6letter1").on('click', function() {
				letterselect("c3s6letter1");
			});
			$("#c3s6letter2").html(letterdice3[ldice3][1][0]);
			$("#c3s6letter2").css('color', 'white');
			$("#c3s6letter2").css('background-color', backgroundcolor(letterdice3[ldice3][1][1]));
			$("#c3s6letter2").on('click', function() {
				letterselect("c3s6letter2");
			});
			$("#c3s6letter3").html(letterdice3[ldice3][2][0]);
			$("#c3s6letter3").css('color', 'white');
			$("#c3s6letter3").css('background-color', backgroundcolor(letterdice3[ldice3][2][1]));
			$("#c3s6letter3").on('click', function() {
				letterselect("c3s6letter3");
			});
			$("#c3s6letter4").html(letterdice3[ldice3][3][0]);
			$("#c3s6letter4").css('color', 'white');
			$("#c3s6letter4").css('background-color', backgroundcolor(letterdice3[ldice3][3][1]));
			$("#c3s6letter4").on('click', function() {
				letterselect("c3s6letter4");
			});
			break;
	}
	switch (ddice) {
		case 0: document.getElementById('cube4').getElementsByTagName('div')[0].className = 'cube toTop';
			$("#c4s1digit1").html(scoredice[ddice][0][0]);
			$("#c4s1digit1").css('color', 'white');
			$("#c4s1digit1").css('background-color', backgroundcolor(scoredice[ddice][0][1]));
			$("#c4s1digit1").on('click', function() {
				$("#c4s1digit1").addClass('box-shadow');
			});
			$("#c4s1digit2").html(scoredice[ddice][1][0]);
			$("#c4s1digit2").css('color', 'white');
			$("#c4s1digit2").css('background-color', backgroundcolor(scoredice[ddice][1][1]));
			$("#c4s1digit2").on('click', function() {
				$("#c4s1digit2").addClass('box-shadow');
			});
			$("#c4s1digit3").html(scoredice[ddice][2][0]);
			$("#c4s1digit3").css('color', 'white');
			$("#c4s1digit3").css('background-color', backgroundcolor(scoredice[ddice][2][1]));
			$("#c4s1digit3").on('click', function() {
				$("#c4s1digit3").addClass('box-shadow');
			});
			$("#c4s1digit4").html(scoredice[ddice][3][0]);
			$("#c4s1digit4").css('color', 'white');
			$("#c4s1digit4").css('background-color', backgroundcolor(scoredice[ddice][3][1]));
			$("#c4s1digit4").on('click', function() {
				$("#c4s1digit4").addClass('box-shadow');
			});
			break;
		case 1: document.getElementById('cube4').getElementsByTagName('div')[0].className = 'cube toFront';
			$("#c4s2digit1").html(scoredice[ddice][0][0]);
			$("#c4s2digit1").css('color', 'white');
			$("#c4s2digit1").css('background-color', backgroundcolor(scoredice[ddice][0][1]));
			$("#c4s2digit1").on('click', function() {
				$("#c4s2digit1").addClass('box-shadow');
			});
			$("#c4s2digit2").html(scoredice[ddice][1][0]);
			$("#c4s2digit2").css('color', 'white');
			$("#c4s2digit2").css('background-color', backgroundcolor(scoredice[ddice][1][1]));
			$("#c4s2digit2").on('click', function() {
				$("#c4s2digit2").addClass('box-shadow');
			});
			$("#c4s2digit3").html(scoredice[ddice][2][0]);
			$("#c4s2digit3").css('color', 'white');
			$("#c4s2digit3").css('background-color', backgroundcolor(scoredice[ddice][2][1]));
			$("#c4s2digit3").on('click', function() {
				$("#c4s2digit3").addClass('box-shadow');
			});
			$("#c4s2digit4").html(scoredice[ddice][3][0]);
			$("#c4s2digit4").css('color', 'white');
			$("#c4s2digit4").css('background-color', backgroundcolor(scoredice[ddice][3][1]));
			$("#c4s2digit4").on('click', function() {
				$("#c4s2digit4").addClass('box-shadow');
			});
			break;
		case 2: document.getElementById('cube4').getElementsByTagName('div')[0].className = 'cube toBottom';
			$("#c4s3digit1").html(scoredice[ddice][0][0]);
			$("#c4s3digit1").css('color', 'white');
			$("#c4s3digit1").css('background-color', backgroundcolor(scoredice[ddice][0][1]));
			$("#c4s3digit1").on('click', function() {
				$("#c4s3digit1").addClass('box-shadow');
			});
			$("#c4s3digit2").html(scoredice[ddice][1][0]);
			$("#c4s3digit2").css('color', 'white');
			$("#c4s3digit2").css('background-color', backgroundcolor(scoredice[ddice][1][1]));
			$("#c4s3digit2").on('click', function() {
				$("#c4s3digit2").addClass('box-shadow');
			});
			$("#c4s3digit3").html(scoredice[ddice][2][0]);
			$("#c4s3digit3").css('color', 'white');
			$("#c4s3digit3").css('background-color', backgroundcolor(scoredice[ddice][2][1]));
			$("#c4s3digit3").on('click', function() {
				$("#c4s3digit3").addClass('box-shadow');
			});
			$("#c4s3digit4").html(scoredice[ddice][3][0]);
			$("#c4s3digit4").css('color', 'white');
			$("#c4s3digit4").css('background-color', backgroundcolor(scoredice[ddice][3][1]));
			$("#c4s3digit4").on('click', function() {
				$("#c4s3digit4").addClass('box-shadow');
			});
			break;
		case 3: document.getElementById('cube4').getElementsByTagName('div')[0].className = 'cube toLeft';
			$("#c4s4digit1").html(scoredice[ddice][0][0]);
			$("#c4s4digit1").css('color', 'white');
			$("#c4s4digit1").css('background-color', backgroundcolor(scoredice[ddice][0][1]));
			$("#c4s4digit1").on('click', function() {
				$("#c4s4digit1").addClass('box-shadow');
			});
			$("#c4s4digit2").html(scoredice[ddice][1][0]);
			$("#c4s4digit2").css('color', 'white');
			$("#c4s4digit2").css('background-color', backgroundcolor(scoredice[ddice][1][1]));
			$("#c4s4digit2").on('click', function() {
				$("#c4s4digit2").addClass('box-shadow');
			});
			$("#c4s4digit3").html(scoredice[ddice][2][0]);
			$("#c4s4digit3").css('color', 'white');
			$("#c4s4digit3").css('background-color', backgroundcolor(scoredice[ddice][2][1]));
			$("#c4s4digit3").on('click', function() {
				$("#c4s4digit3").addClass('box-shadow');
			});
			$("#c4s4digit4").html(scoredice[ddice][3][0]);
			$("#c4s4digit4").css('color', 'white');
			$("#c4s4digit4").css('background-color', backgroundcolor(scoredice[ddice][3][1]));
			$("#c4s4digit4").on('click', function() {
				$("#c4s4digit4").addClass('box-shadow');
			});
			break;
		case 4: document.getElementById('cube4').getElementsByTagName('div')[0].className = 'cube toRight';
			$("#c4s5digit1").html(scoredice[ddice][0][0]);
			$("#c4s5digit1").css('color', 'white');
			$("#c4s5digit1").css('background-color', backgroundcolor(scoredice[ddice][0][1]));
			$("#c4s5digit1").on('click', function() {
				$("#c4s5digit1").addClass('box-shadow');
			});
			$("#c4s5digit2").html(scoredice[ddice][1][0]);
			$("#c4s5digit2").css('color', 'white');
			$("#c4s5digit2").css('background-color', backgroundcolor(scoredice[ddice][1][1]));
			$("#c4s5digit2").on('click', function() {
				$("#c4s5digit2").addClass('box-shadow');
			});
			$("#c4s5digit3").html(scoredice[ddice][2][0]);
			$("#c4s5digit3").css('color', 'white');
			$("#c4s5digit3").css('background-color', backgroundcolor(scoredice[ddice][2][1]));
			$("#c4s5digit3").on('click', function() {
				$("#c4s5digit3").addClass('box-shadow');
			});
			$("#c4s5digit4").html(scoredice[ddice][3][0]);
			$("#c4s5digit4").css('color', 'white');
			$("#c4s5digit4").css('background-color', backgroundcolor(scoredice[ddice][3][1]));
			$("#c4s5digit4").on('click', function() {
				$("#c4s5digit4").addClass('box-shadow');
			});
			break;
		case 5: document.getElementById('cube4').getElementsByTagName('div')[0].className = 'cube toRear';
			$("#c4s6digit1").html(scoredice[ddice][0][0]);
			$("#c4s6digit1").css('color', 'white');
			$("#c4s6digit1").css('background-color', backgroundcolor(scoredice[ddice][0][1]));
			$("#c4s6digit1").on('click', function() {
				$("#c4s6digit1").addClass('box-shadow');
			});
			$("#c4s6digit2").html(scoredice[ddice][1][0]);
			$("#c4s6digit2").css('color', 'white');
			$("#c4s6digit2").css('background-color', backgroundcolor(scoredice[ddice][1][1]));
			$("#c4s6digit2").on('click', function() {
				$("#c4s6digit2").addClass('box-shadow');
			});
			$("#c4s6digit3").html(scoredice[ddice][2][0]);
			$("#c4s6digit3").css('color', 'white');
			$("#c4s6digit3").css('background-color', backgroundcolor(scoredice[ddice][2][1]));
			$("#c4s6digit3").on('click', function() {
				$("#c4s6digit3").addClass('box-shadow');
			});
			$("#c4s6digit4").html(scoredice[ddice][3][0]);
			$("#c4s6digit4").css('color', 'white');
			$("#c4s6digit4").css('background-color', backgroundcolor(scoredice[ddice][3][1]));
			$("#c4s6digit4").on('click', function() {
				$("#c4s6digit4").addClass('box-shadow');
			});
			break;
	}
}
function letterselect(letter) {
	if ($("#" + letter).hasClass('box-shadow')) {
		console.log(letter + " selected");
	}
	else $("#" + letter).addClass('box-shadow');
}
