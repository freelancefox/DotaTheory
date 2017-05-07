//helper functions, it turned out chrome doesn't support Math.sgn() 
function signum(x) {
    return (x < 0) ? -1 : 1;
}
function absolute(x) {
    return (x < 0) ? -x : x;
}

function drawPath(svg, path, startX, startY, endX, endY) {
    // get the path's stroke width (if one wanted to be  really precize, one could use half the stroke size)
    var stroke =  parseFloat(path.attr("stroke-width"));
    // check if the svg is big enough to draw the path, if not, set heigh/width
    if (svg.attr("height") <  endY)                 svg.attr("height", endY);
    if (svg.attr("width" ) < (startX + stroke) )    svg.attr("width", (startX + stroke));
    if (svg.attr("width" ) < (endX   + stroke) )    svg.attr("width", (endX   + stroke));

    var deltaX = (endX - startX) * 0.15;
    var deltaY = (endY - startY) * 0.15;
    // for further calculations which ever is the shortest distance
    var delta  =  deltaY < absolute(deltaX) ? deltaY : absolute(deltaX);

    // set sweep-flag (counter/clock-wise)
    // if start element is closer to the left edge,
    // draw the first arc counter-clockwise, and the second one clock-wise
    var arc1 = 0; var arc2 = 1;
    if (startX > endX) {
        arc1 = 1;
        arc2 = 0;
    }
    // draw tha pipe-like path
    // 1. move a bit down, 2. arch,  3. move a bit to the right, 4.arch, 5. move down to the end
    path.attr("d",  "M"  + startX + " " + startY +
                    " V" + (startY + delta) +
                    " A" + delta + " " +  delta + " 0 0 " + arc1 + " " + (startX + delta*signum(deltaX)) + " " + (startY + 2*delta) +
                    " H" + (endX - delta*signum(deltaX)) + 
                    " A" + delta + " " +  delta + " 0 0 " + arc2 + " " + endX + " " + (startY + 3*delta) +
                    " V" + endY );
}

function connectElements(svg, path, startElem, endElem) {
    var svgContainer= $("#svgContainer");

    // if first element is lower than the second, swap!
    if(startElem.offset().top > endElem.offset().top){
        var temp = startElem;
        startElem = endElem;
        endElem = temp;
    }

    // get (top, left) corner coordinates of the svg container
    var svgTop  = svgContainer.offset().top;
    var svgLeft = svgContainer.offset().left;

    // get (top, left) coordinates for the two elements
    var startCoord = startElem.offset();
    var endCoord   = endElem.offset();

    // calculate path's start (x,y)  coords
    // we want the x coordinate to visually result in the element's mid point
    var startX = startCoord.left + 0.5*startElem.outerWidth() - svgLeft;    // x = left offset + 0.5*width - svg's left offset
    var startY = startCoord.top  + startElem.outerHeight() - svgTop;        // y = top offset + height - svg's top offset

        // calculate path's end (x,y) coords
    var endX = endCoord.left + 0.5*endElem.outerWidth() - svgLeft;
    var endY = endCoord.top  - svgTop;

    // call function for drawing the path
    drawPath(svg, path, startX, startY, endX, endY);

}

function connectAll() {
    connectElements($("#svg"), $("#path1"), $("#belt"),  $("#sange"));
    connectElements($("#svg"), $("#path2"), $("#robe"),  $("#lucen"));
    connectElements($("#svg"), $("#path3"), $("#band"),  $("#yasha"));
    connectElements($("#svg"), $("#path4"), $("#club"),  $("#sange"));
    connectElements($("#svg"), $("#path5"), $("#staff"), $("#lucen"));
    connectElements($("#svg"), $("#path6"), $("#blade"), $("#yasha"));
    connectElements($("#svg"), $("#path7"), $("#gauntlets"),  $("#urn"));
    connectElements($("#svg"), $("#path8"), $("#mantle"),  $("#frost"));
    connectElements($("#svg"), $("#path9"), $("#slippers"),  $("#pms"));
    connectElements($("#svg"), $("#path10"), $("#sange"),  $("#halberd"));
    connectElements($("#svg"), $("#path11"), $("#sange"),  $("#gjalla"));
    connectElements($("#svg"), $("#path12"), $("#sange"),  $("#sny"));
    connectElements($("#svg"), $("#path13"), $("#sange"),  $("#snl"));
    connectElements($("#svg"), $("#path14"), $("#sange"),  $("#trio"));
    connectElements($("#svg"), $("#path15"), $("#lucen"),  $("#spellblade"));
    connectElements($("#svg"), $("#path16"), $("#lucen"),  $("#seraph"));
    connectElements($("#svg"), $("#path17"), $("#lucen"),  $("#snl"));
    connectElements($("#svg"), $("#path18"), $("#lucen"),  $("#lny"));
    connectElements($("#svg"), $("#path19"), $("#lucen"),  $("#trio"));
    connectElements($("#svg"), $("#path20"), $("#yasha"),  $("#manta"));
    connectElements($("#svg"), $("#path21"), $("#yasha"),  $("#hayabusa"));
    connectElements($("#svg"), $("#path22"), $("#yasha"),  $("#sny"));
    connectElements($("#svg"), $("#path23"), $("#yasha"),  $("#lny"));
    connectElements($("#svg"), $("#path24"), $("#yasha"),  $("#trio"));
    connectElements($("#svg"), $("#path25"), $("#force"),  $("#pike"));
    connectElements($("#svg"), $("#path26"), $("#dlance"),  $("#pike"));
    connectElements($("#svg"), $("#path27"), $("#dlance"),  $("#wyrmslayer"));
    connectElements($("#svg"), $("#path28"), $("#echo"),  $("#wyrmslayer"));
    connectElements($("#svg"), $("#path29"), $("#sny"),  $("#trio"));
    connectElements($("#svg"), $("#path30"), $("#snl"),  $("#trio"));
    connectElements($("#svg"), $("#path31"), $("#lny"),  $("#trio"));
    connectElements($("#svg"), $("#path32"), $("#reaver"),  $("#heart"));
    connectElements($("#svg"), $("#path33"), $("#reaver"),  $("#satanic"));
    connectElements($("#svg"), $("#path34"), $("#reaver"),  $("#pauldron"));
    connectElements($("#svg"), $("#path35"), $("#mystic"),  $("#sheep"));
    connectElements($("#svg"), $("#path36"), $("#mystic"),  $("#shiva"));
    connectElements($("#svg"), $("#path37"), $("#mystic"),  $("#ocore"));
    connectElements($("#svg"), $("#path38"), $("#eagle"),  $("#butterfly"));
    connectElements($("#svg"), $("#path39"), $("#eagle"),  $("#eblade"));
    connectElements($("#svg"), $("#path40"), $("#eagle"),  $("#wkb"));
    connectElements($("#svg"), $("#path41"), $("#force"),  $("#seraph"));
    //connectElements($("#svg"), $("#path42"), $("#lny"),  $("#trio"));
    //connectElements($("#svg"), $("#path43"), $("#lny"),  $("#trio"));
    connectElements($("#svg"), $("#path44"), $("#staff"),  $("#force"));
    connectElements($("#svg"), $("#path45"), $("#band"),  $("#dlance"));
    connectElements($("#svg"), $("#path46"), $("#club"),  $("#dlance"));
    connectElements($("#svg"), $("#path47"), $("#club"),  $("#echo"));
}

function hideAll() {
    $("[id^=path]").hide();
}

$(window).on("load", function() {
    // reset svg each time
    $("#svg").attr("height", "0");
    $("#svg").attr("width", "0");
    connectAll();
    hideAll();
});

$("#str").on("click", function() {
    $("#str").hide();
    $("#strp").show();
    $("#path1").show(150);
    $("#path4").show(150);
    $("#path7").show(150);
    $("#path10").show(150);
    $("#path11").show(150);
    $("#path12").show(150);
    $("#path13").show(150);
    $("#path14").show(150);
    $("#path28").show(150);
    $("#path29").show(150);
    $("#path30").show(150);
    $("#path32").show(150);
    $("#path33").show(150);
    $("#path34").show(150);
    $("#path47").show(150);
});
$("#strp").on("click", function() {
    $("#strp").hide();
    $("#str").show();
    $("#path1").hide();
    $("#path4").hide();
    $("#path7").hide();
    $("#path10").hide();
    $("#path11").hide();
    $("#path12").hide();
    $("#path13").hide();
    $("#path14").hide();
    $("#path28").hide();
    $("#path29").hide();
    $("#path30").hide();
    $("#path32").hide();
    $("#path33").hide();
    $("#path34").hide();
    $("#path47").hide();
});

$("#int").on("click", function() {
    $("#int").hide();
    $("#intp").show();
    $("#path2").show(150);
    $("#path5").show(150);
    $("#path8").show(150);
    $("#path15").show(150);
    $("#path16").show(150);
    $("#path17").show(150);
    $("#path18").show(150);
    $("#path19").show(150);
    $("#path25").show(150);
    $("#path30").show(150);
    $("#path31").show(150);
    $("#path35").show(150);
    $("#path36").show(150);
    $("#path37").show(150);
    $("#path41").show(150);
    $("#path44").show(150);
});
$("#intp").on("click", function() {
    $("#intp").hide();
    $("#int").show();
    $("#path2").hide();
    $("#path5").hide();
    $("#path8").hide();
    $("#path15").hide();
    $("#path16").hide();
    $("#path17").hide();
    $("#path18").hide();
    $("#path19").hide();
    $("#path25").hide();
    $("#path30").hide();
    $("#path31").hide();
    $("#path35").hide();
    $("#path36").hide();
    $("#path37").hide();
    $("#path41").hide();
    $("#path44").hide();
});

$("#agi").on("click", function() {
    $("#agi").hide();
    $("#agip").show();
    $("#path3").show(150);
    $("#path6").show(150);
    $("#path9").show(150);
    $("#path20").show(150);
    $("#path21").show(150);
    $("#path22").show(150);
    $("#path23").show(150);
    $("#path26").show(150);
    $("#path27").show(150);
    $("#path29").show(150);
    $("#path31").show(150);
    $("#path38").show(150);
    $("#path39").show(150);
    $("#path40").show(150);
    $("#path45").show(150);
    $("#path46").show(150);
});
$("#agip").on("click", function() {
    $("#agip").hide();
    $("#agi").show();
    $("#path3").hide();
    $("#path6").hide();
    $("#path9").hide();
    $("#path20").hide();
    $("#path21").hide();
    $("#path22").hide();
    $("#path23").hide();
    $("#path26").hide();
    $("#path27").hide();
    $("#path29").hide();
    $("#path30").hide();
    $("#path31").hide();
    $("#path38").hide();
    $("#path39").hide();
    $("#path40").hide();
    $("#path45").hide();
    $("#path46").hide();
});

$("#belt").hover(function() {
    $("#path1").show(150);
  }, function() {
    $("#path1").hide();
});

$("#club").hover(function() {
    $("#path4").show(150);
    $("#path46").show(150);
    $("#path47").show(150);
  }, function() {
    $("#path4").hide();
    $("#path46").hide();
    $("#path47").hide();
});

$("#halberd").hover(function() {
    $("#path1").show(150);
    $("#path4").show(150);
    $("#path10").show(150);
  }, function() {
    $("#path1").hide();
    $("#path4").hide();
    $("#path10").hide();
});

$("#gjalla").hover(function() {
    $("#path1").show(150);
    $("#path4").show(150);
    $("#path11").show(150);
  }, function() {
    $("#path1").hide();
    $("#path4").hide();
    $("#path11").hide();
});

$("#sange").hover(function() {
    $("#path1").show(150);
    $("#path4").show(150);
    $("#path10").show(150);
    $("#path11").show(150);
    $("#path12").show(150);
    $("#path13").show(150);
    $("#path14").show(150);
  }, function() {
    $("#path1").hide();
    $("#path4").hide();
    $("#path10").hide();
    $("#path11").hide();
    $("#path12").hide();
    $("#path13").hide();
    $("#path14").hide();
});

$("#robe").hover(function() {
    $("#path2").show(150);
  }, function() {
    $("#path2").hide();
});

$("#staff").hover(function() {
    $("#path5").show(150);
    $("#path44").show(150);
  }, function() {
    $("#path5").hide();
    $("#path44").hide();
});

$("#spellblade").hover(function() {
    $("#path2").show(150);
    $("#path5").show(150);
    $("#path15").show(150);
  }, function() {
    $("#path2").hide();
    $("#path5").hide();
    $("#path15").hide();
});

$("#seraph").hover(function() {
    $("#path2").show(150);
    $("#path5").show(150);
    $("#path16").show(150);
    $("#path41").show(150);
  }, function() {
    $("#path2").hide();
    $("#path5").hide();
    $("#path16").hide();
    $("#path41").hide();
});

$("#lucen").hover(function() {
    $("#path2").show(150);
    $("#path5").show(150);
    $("#path15").show(150);
    $("#path16").show(150);
    $("#path17").show(150);
    $("#path18").show(150);
    $("#path19").show(150);
  }, function() {
    $("#path2").hide();
    $("#path5").hide();
    $("#path15").hide();
    $("#path16").hide();
    $("#path17").hide();
    $("#path18").hide();
    $("#path19").hide();
});

$("#band").hover(function() {
    $("#path3").show(150);
    $("#path45").show(150);
  }, function() {
    $("#path3").hide();
    $("#path45").hide();
});

$("#blade").hover(function() {
    $("#path6").show(150);
  }, function() {
    $("#path6").hide();
});

$("#manta").hover(function() {
    $("#path3").show(150);
    $("#path6").show(150);
    $("#path20").show(150);
  }, function() {
    $("#path3").hide();
    $("#path6").hide();
    $("#path20").hide();
});

$("#hayabusa").hover(function() {
    $("#path3").show(150);
    $("#path6").show(150);
    $("#path21").show(150);
  }, function() {
    $("#path3").hide();
    $("#path6").hide();
    $("#path21").hide();
});

$("#yasha").hover(function() {
    $("#path3").show(150);
    $("#path6").show(150);
    $("#path20").show(150);
    $("#path21").show(150);
    $("#path22").show(150);
    $("#path23").show(150);
    $("#path24").show(150);
  }, function() {
    $("#path3").hide();
    $("#path6").hide();
    $("#path20").hide();
    $("#path21").hide();
    $("#path22").hide();
    $("#path23").hide();
    $("#path24").hide();
});

$("#trio").hover(function() {
    $("#path29").show(150);
    $("#path30").show(150);
    $("#path31").show(150);
  }, function() {
    $("#path29").hide();
    $("#path30").hide();
    $("#path31").hide();
});

$("#sny").hover(function() {
    $("#path12").show(150);
    $("#path22").show(150);
  }, function() {
    $("#path12").hide();
    $("#path22").hide();
});

$("#snl").hover(function() {
    $("#path13").show(150);
    $("#path17").show(150);
  }, function() {
    $("#path13").hide();
    $("#path17").hide();
});

$("#lny").hover(function() {
    $("#path18").show(150);
    $("#path23").show(150);
  }, function() {
    $("#path18").hide();
    $("#path23").hide();
});

$("#gauntlets, #urn").hover(function() {
    $("#path7").show(150);
  }, function() {
    $("#path7").hide();
});

$("#mantle, #frost").hover(function() {
    $("#path8").show(150);
  }, function() {
    $("#path8").hide();
});

$("#slippers, #pms").hover(function() {
    $("#path9").show(150);
  }, function() {
    $("#path9").hide();
});

$("#dlance").hover(function() {
    $("#path26").show(150);
    $("#path27").show(150);
    $("#path45").show(150);
    $("#path46").show(150);
  }, function() {
    $("#path26").hide();
    $("#path27").hide();
    $("#path45").hide();
    $("#path46").hide();
});

$("#pike").hover(function() {
    $("#path25").show(150);
    $("#path26").show(150);
  }, function() {
    $("#path25").hide();
    $("#path26").hide();
});

$("#echo").hover(function() {
    $("#path28").show(150);
    $("#path47").show(150);
  }, function() {
    $("#path28").hide();
    $("#path47").hide();
});

$("#force").hover(function() {
    $("#path25").show(150);
    $("#path41").show(150);
    $("#path44").show(150);
  }, function() {
    $("#path25").hide();
    $("#path41").hide();
    $("#path44").hide();
});

$("#wyrmslayer").hover(function() {
    $("#path27").show(150);
    $("#path28").show(150);
  }, function() {
    $("#path27").hide();
    $("#path28").hide();
});

$("#reaver").hover(function() {
    $("#path32").show(150);
    $("#path33").show(150);
    $("#path34").show(150);
  }, function() {
    $("#path32").hide();
    $("#path33").hide();
    $("#path34").hide();
});

$("#heart").hover(function() {
    $("#path32").show(150);
  }, function() {
    $("#path32").hide();
});

$("#satanic").hover(function() {
    $("#path33").show(150);
  }, function() {
    $("#path33").hide();
});

$("#pauldron").hover(function() {
    $("#path34").show(150);
  }, function() {
    $("#path34").hide();
});

$("#mystic").hover(function() {
    $("#path35").show(150);
    $("#path36").show(150);
    $("#path37").show(150);
  }, function() {
    $("#path35").hide();
    $("#path36").hide();
    $("#path37").hide();
});

$("#sheep").hover(function() {
    $("#path35").show(150);
  }, function() {
    $("#path35").hide();
});

$("#shiva").hover(function() {
    $("#path36").show(150);
  }, function() {
    $("#path36").hide();
});

$("#ocore").hover(function() {
    $("#path37").show(150);
  }, function() {
    $("#path37").hide();
});

$("#eagle").hover(function() {
    $("#path38").show(150);
    $("#path39").show(150);
    $("#path40").show(150);
  }, function() {
    $("#path38").hide();
    $("#path39").hide();
    $("#path40").hide();
});

$("#butterfly").hover(function() {
    $("#path38").show(150);
  }, function() {
    $("#path38").hide();
});

$("#eblade").hover(function() {
    $("#path39").show(150);
  }, function() {
    $("#path39").hide();
});

$("#wkb").hover(function() {
    $("#path40").show(150);
  }, function() {
    $("#path40").hide();
});

$(window).resize(function () {
    // reset svg each time
    $("#svg").attr("height", "0");
    $("#svg").attr("width", "0");
    connectAll();
});
