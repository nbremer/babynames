////////////////////////////////////////////////////////////// 
/////////////////////////// Boys /////////////////////////////
////////////////////////////////////////////////////////////// 

////////////// Boy stuff ////////////////	
allBoyNames = [];
boyNamesByID = [];
boys.forEach(function(d,i) {
    allBoyNames[i] = d.name;
	boyNamesByID[d.name] = i;
});
var colorBoys = d3.scale.ordinal()
		.range(["#B5C660", "#B3C762", "#B0C765", "#ADC767", "#AAC769", "#A7C76A", "#A3C66B", "#9FC46B", "#9AC26A", 
		"#94BF68", "#8EBB66", "#87B662", "#7FB05E", "#75AA5A", "#6BA354", "#609B4F", "#549249", "#478943", "#39803D", 
		"#2C7739", "#206F36", "#166A35", "#0F6638", "#0B663E", "#0C6A48", "#127257", "#1B7D6A", "#27897F", "#359795", 
		"#42A4AB", "#4EB0C0", "#58BAD3", "#5DBFE2", "#5DC0EC", "#5ABCF2", "#52B5F4", "#49ABF3", "#3E9FEE", "#3292E7", 
		"#2785DE", "#1E77D3", "#176AC7", "#125EBA", "#0F53AB", "#0E489C", "#0D3E8D", "#0E347D", "#0F2B6C", "#11215C"])
		.domain(allBoyNames);

////////////////////////////////////////////////////////////// 
/////////////////////////// Girls /////////////////////////////
////////////////////////////////////////////////////////////// 		
allGirlNames = [];
girlNamesByID = [];
girls.forEach(function(d,i) {
    allGirlNames[i] = d.name;
	girlNamesByID[d.name] = i;
});
var colorGirls = d3.scale.ordinal()
		.range(["#FFC600", "#FEC606", "#FEC60B", "#FDC710", "#FDC716", "#FCC61B", "#FCC61F", "#FCC523", "#FBC427", 
		"#FBC22B", "#FBC02D", "#FBBD2F", "#FBBA31", "#FBB632", "#FBB132", "#FCAC31", "#FCA730", "#FDA12F", "#FD9B2D", 
		"#FE952C", "#FE8F2A", "#FF8929", "#FF8428", "#FF7E27", "#FF7927", "#FF7527", "#FF7128", "#FE6E29", "#FE6A2B", 
		"#FD682D", "#FC652F", "#FB6330", "#FA6032", "#F95E33", "#F85C34", "#F65A34", "#F55733", "#F35432", "#F15230", 
		"#F04F2D", "#EE4B2A", "#EC4827", "#EA4524", "#E84221", "#E63E1F", "#E43B1D", "#E2381C", "#E0351C", "#DD321E", 
		"#DB3020", "#D92E25", "#D62C2B", "#D42A31", "#D22939", "#CF2841", "#CD274A", "#CB2754", "#C8275D", "#C62866", 
		"#C4296F", "#C22A77", "#BF2C7F", "#BD2E86", "#BB308C", "#B93391", "#B73596", "#B5389A", "#B33B9D", "#B13EA0", 
		"#AE41A2", "#AC43A3", "#A946A4", "#A648A4", "#A349A4", "#9F4AA3", "#9B4BA2", "#974BA1", "#934B9F", "#8E4A9D", 
		"#8A499A", "#854897", "#804795", "#7B4692", "#76448E", "#71438B", "#6C4188"])
		.domain(allGirlNames);
		
////////////////////////////////////////////////////////////// 
///////////////////// Insight Buttons //////////////////////// 
////////////////////////////////////////////////////////////// 

d3.select("#years_1947_girls").on("click", function() { changeYears(1880, 1947, "girls") });
d3.select("#years_1965_boys").on("click", function() { changeYears(1880, 1965, "boys") });
d3.select("#Christopher").on("click", function() { changeName("Christopher", "boys") });  
d3.select("#Jason").on("click", function() { changeName("Jason", "boys") });  
d3.select("#years_2005_boys").on("click", function() { changeYears(2005, 2014, "boys") });

d3.select("#Mary").on("click", function() { changeName("Mary", "girls") }); 
d3.select("#Linda").on("click", function() { changeName("Linda", "girls") });
d3.select("#years_1947_1952_girls").on("click", function() { changeYears(1945, 1954, "girls") });

d3.select("#John").on("click", function() { changeName("John", "boys") });  
d3.select("#Michael").on("click", function() { changeName("Michael", "boys") }); 
d3.select("#James").on("click", function() { changeName("James", "boys") }); 
d3.select("#Robert").on("click", function() { changeName("Robert", "boys") }); 

d3.select("#Ethel").on("click", function() { changeName("Ethel", "girls") }); 
d3.select("#Daniel").on("click", function() { changeName("Daniel", "boys") }); 
	
d3.select("#Elizabeth").on("click", function() { changeName("Elizabeth", "girls") }); 
d3.select("#Emma").on("click", function() { changeName("Emma", "girls") }); 
d3.select("#William").on("click", function() { changeName("William", "boys") }); 
d3.select("#Joseph").on("click", function() { changeName("Joseph", "boys") }); 

d3.select("#Mary2").on("click", function() { changeName("Mary", "girls") }); 
d3.select("#Linda2").on("click", function() { changeName("Linda", "girls") });
d3.select("#John2").on("click", function() { changeName("John", "boys") }); 