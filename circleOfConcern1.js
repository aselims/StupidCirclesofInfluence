//Circle Data Set
var circlesData = [
	  { "cx": 200, "cy": 200, "radius": 100, "color" : "rgba(128, 0, 128, 1.0)", "text": "The World" },
	  { "cx": 200, "cy": 200, "radius": 70, "color" : "rgba(0, 0, 255, 0.75)", "text": "Circle of Concern" },
		{ "cx": 200, "cy": 200, "radius": 40, "color" : "rgba(0, 255, 0, 0.5)", "text": "Circle of Influence" }
];

//Create the SVG Viewport
var divCenter = d3.select("body")
									
var svgContainer = divCenter.append("svg")
                                     .attr("width",500)
                                     .attr("height",500)
									 .attr("id", "svgMain")
									 .attr("align","center");

//Add circles to the svgContainer
var circles = svgContainer.selectAll("circle")
                           .data(circlesData)
                           .enter()
                           .append("circle");

//Add the circle attributes
var circleAttributes = circles
                       .attr("cx", function (d) { return d.cx; })
                       .attr("cy", function (d) { return d.cy; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function (d) { return d.color; });

//Add the SVG Text Element to the svgContainer
var text = svgContainer.selectAll("text")
                        .data(circlesData)
                        .enter()
                        .append("text");

//Add SVG Text Element Attributes
var textLabels = text
                 .attr("x", function(d) { return d.cx; })
                 .attr("y", function(d) { return d.radius + 100; })
                 .text( function (d) { return d.text; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .attr("fill", "red");
