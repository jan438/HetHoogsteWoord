var scoredice = [[['1','b'],['2','y'],['3','r'],['4','g']],[['1','g'],['2','b'],['3','r'],['4','y']],[['1','y'],['2','g'],['3','b'],['4','r']],[['1','r'],['2','y'],['3','g'],['4','b']],[['1','b'],['2','r'],['3','y'],['4','g']],[['1','y'],['2','b'],['3','g'],['4','r']]];
var letterdice1 = [[['a','y'],['m','r'],['t','b'],['g','g']],[['h','b'],['n','g'],['u','y'],['b','r']],[['w','g'],['j','r'],['p','y'],['d','b']],[['i','y'],['o','b'],['v','r'],['c','g']],[['r','r'],['o','b'],['k','g'],['e','y']],[['l','b'],['s','g'],['f','r'],['c','y']]];
var letterdice2 = [[['n','y'],['e','g'],['f','b'],['r','b']],[['o','g'],['t','r'],['d','y'],['g','g']],[['x','r'],['o','b'],['k','g'],['a','y']],[['b','g'],['i','y'],['w','r'],['m','r']],[['f','r'],['n','y'],['l','r'],['s','b']],[['e','y'],['a','b'],['p','b'],['u','g']]];
var letterdice3 = [[['d','b'],['h','r'],['t','g'],['o','y']],[['q','r'],['a','y'],['s','b'],['i','b']],[['l','g'],['u','b'],['e','y'],['k','r']],[['n','b'],['g','y'],['e','r'],['z','g']],[['e','g'],['c','r'],['r','r'],['m','y']],[['v','g'],['a','g'],['n','b'],['i','y']]];
function initialization() {
	console.log("Initialization " + scoredice[2]);
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
	var ldice = Math.floor((Math.random() * 6));
	$("#letter1").html(letterdice1[ldice][0][0]);
	$("#letter1").css('color', 'white');
	$("#letter1").css('background-color', backgroundcolor(letterdice1[ldice][0][1]));
	$("#letter1").on('click', function() {
		$("#letter1").addClass('box-shadow');
	});
	$("#letter2").html(letterdice1[ldice][1][0]);
	$("#letter2").css('color', 'white');
	$("#letter2").css('background-color', backgroundcolor(letterdice1[ldice][1][1]));
	$("#letter2").on('click', function() {
		$("#letter2").addClass('box-shadow');
	});
	$("#letter3").html(letterdice1[ldice][2][0]);
	$("#letter3").css('color', 'white');
	$("#letter3").css('background-color', backgroundcolor(letterdice1[ldice][2][1]));
	$("#letter3").on('click', function() {
		$("#letter3").addClass('box-shadow');
	});
	$("#letter4").html(letterdice1[ldice][3][0]);
	$("#letter4").css('color', 'white');
	$("#letter4").css('background-color', backgroundcolor(letterdice1[ldice][3][1]));
	$("#letter4").on('click', function() {
		$("#letter4").addClass('box-shadow');
	});
	ldice = Math.floor((Math.random() * 6));
	$("#letter5").html(letterdice2[ldice][0][0]);
	$("#letter5").css('color', 'white');
	$("#letter5").css('background-color', backgroundcolor(letterdice2[ldice][0][1]));
	$("#letter5").on('click', function() {
		$("#letter5").addClass('box-shadow');
	});
	$("#letter6").html(letterdice2[ldice][1][0]);
	$("#letter6").css('color', 'white');
	$("#letter6").css('background-color', backgroundcolor(letterdice2[ldice][1][1]));
	$("#letter6").on('click', function() {
		$("#letter6").addClass('box-shadow');
	});
	$("#letter7").html(letterdice2[ldice][2][0]);
	$("#letter7").css('color', 'white');
	$("#letter7").css('background-color', backgroundcolor(letterdice2[ldice][2][1]));
	$("#letter7").on('click', function() {
		$("#letter7").addClass('box-shadow');
	});
	$("#letter8").html(letterdice2[ldice][3][0]);
	$("#letter8").css('color', 'white');
	$("#letter8").css('background-color', backgroundcolor(letterdice2[ldice][3][1]));
	$("#letter8").on('click', function() {
		$("#letter8").addClass('box-shadow');
	});
	ldice = Math.floor((Math.random() * 6));
	$("#letter9").html(letterdice3[ldice][0][0]);
	$("#letter9").css('color', 'white');
	$("#letter9").css('background-color', backgroundcolor(letterdice3[ldice][0][1]));
	$("#letter9").on('click', function() {
		$("#letter9").addClass('box-shadow');
	});
	$("#letter10").html(letterdice3[ldice][1][0]);
	$("#letter10").css('color', 'white');
	$("#letter10").css('background-color', backgroundcolor(letterdice3[ldice][1][1]));
	$("#letter10").on('click', function() {
		$("#letter10").addClass('box-shadow');
	});
	$("#letter11").html(letterdice3[ldice][2][0]);
	$("#letter11").css('color', 'white');
	$("#letter11").css('background-color', backgroundcolor(letterdice3[ldice][2][1]));
	$("#letter11").on('click', function() {
		$("#letter11").addClass('box-shadow');
	});
	$("#letter12").html(letterdice3[ldice][3][0]);
	$("#letter12").css('color', 'white');
	$("#letter12").css('background-color', backgroundcolor(letterdice3[ldice][3][1]));
	$("#letter12").on('click', function() {
		$("#letter12").addClass('box-shadow');
	});
	var ddice = Math.floor((Math.random() * 6));
	$("#digit1").html(scoredice[ddice][0][0]);
	$("#digit1").css('color', 'white');
	$("#digit1").css('background-color', backgroundcolor(scoredice[ddice][0][1]));
	$("#digit1").on('click', function() {
		$("#digit1").addClass('box-shadow');
	});
	$("#digit2").html(scoredice[ddice][1][0]);
	$("#digit2").css('color', 'white');
	$("#digit2").css('background-color', backgroundcolor(scoredice[ddice][1][1]));
	$("#digit2").on('click', function() {
		$("#digit2").addClass('box-shadow');
	});
	$("#digit3").html(scoredice[ddice][2][0]);
	$("#digit3").css('color', 'white');
	$("#digit3").css('background-color', backgroundcolor(scoredice[ddice][2][1]));
	$("#digit3").on('click', function() {
		$("#digit3").addClass('box-shadow');
	});
	$("#digit4").html(scoredice[ddice][3][0]);
	$("#digit4").css('color', 'white');
	$("#digit4").css('background-color', backgroundcolor(scoredice[ddice][3][1]));
	$("#digit4").on('click', function() {
		$("#digit4").addClass('box-shadow');
	});
}

