//helper functions, it turned out chrome doesn't support Math.sgn(
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
    connectElements($("#svg"), $("#belt-sange"), $("#belt"), $("#sange"));
    connectElements($("#svg"), $("#robe-lucen"), $("#robe"), $("#lucen"));
    connectElements($("#svg"), $("#band-yasha"), $("#band"), $("#yasha"));
    connectElements($("#svg"), $("#club-sange"), $("#club"), $("#sange"));
    connectElements($("#svg"), $("#staff-lucen"), $("#staff"), $("#lucen"));
    connectElements($("#svg"), $("#blade-yasha"), $("#blade"), $("#yasha"));
    connectElements($("#svg"), $("#gauntlets-woodsman"), $("#gauntlets"), $("#woodsman"));
    connectElements($("#svg"), $("#mantle-frost"), $("#mantle"), $("#frost"));
    connectElements($("#svg"), $("#slippers-pms"), $("#slippers"), $("#pms"));
    connectElements($("#svg"), $("#sange-halberd"), $("#sange"), $("#halberd"));
    connectElements($("#svg"), $("#sange-gjalla"), $("#sange"), $("#gjalla"));
    connectElements($("#svg"), $("#sange-sny"), $("#sange"), $("#sny"));
    connectElements($("#svg"), $("#sange-snl"), $("#sange"), $("#snl"));
    connectElements($("#svg"), $("#sange-trio"), $("#sange"), $("#trio"));
    connectElements($("#svg"), $("#lucen-spellblade"), $("#lucen"), $("#spellblade"));
    connectElements($("#svg"), $("#lucen-seraph"), $("#lucen"), $("#seraph"));
    connectElements($("#svg"), $("#lucen-snl"), $("#lucen"), $("#snl"));
    connectElements($("#svg"), $("#lucen-lny"), $("#lucen"), $("#lny"));
    connectElements($("#svg"), $("#lucen-trio"), $("#lucen"), $("#trio"));
    connectElements($("#svg"), $("#yasha-manta"), $("#yasha"), $("#manta"));
    connectElements($("#svg"), $("#yasha-hayabusa"), $("#yasha"), $("#hayabusa"));
    connectElements($("#svg"), $("#yasha-sny"), $("#yasha"), $("#sny"));
    connectElements($("#svg"), $("#yasha-lny"), $("#yasha"), $("#lny"));
    connectElements($("#svg"), $("#yasha-trio"), $("#yasha"), $("#trio"));
    connectElements($("#svg"), $("#force-pike"), $("#force"), $("#pike"));
    connectElements($("#svg"), $("#dlance-pike"), $("#dlance"), $("#pike"));
    connectElements($("#svg"), $("#dlance-wyrmslayer"), $("#dlance"), $("#wyrmslayer"));
    connectElements($("#svg"), $("#echo-wyrmslayer"), $("#echo"), $("#wyrmslayer"));
    connectElements($("#svg"), $("#sny-trio"), $("#sny"), $("#trio"));
    connectElements($("#svg"), $("#snl-trio"), $("#snl"), $("#trio"));
    connectElements($("#svg"), $("#lny-trio"), $("#lny"), $("#trio"));
    connectElements($("#svg"), $("#reaver-heart"), $("#reaver"), $("#heart"));
    connectElements($("#svg"), $("#reaver-satanic"), $("#reaver"), $("#satanic"));
    connectElements($("#svg"), $("#reaver-pauldron"), $("#reaver"), $("#pauldron"));
    connectElements($("#svg"), $("#mystic-sheep"), $("#mystic"), $("#sheep"));
    connectElements($("#svg"), $("#mystic-shiva"), $("#mystic"), $("#shiva"));
    connectElements($("#svg"), $("#mystic-ocore"), $("#mystic"), $("#ocore"));
    connectElements($("#svg"), $("#eagle-butterfly"), $("#eagle"), $("#butterfly"));
    connectElements($("#svg"), $("#eagle-eblade"), $("#eagle"), $("#eblade"));
    connectElements($("#svg"), $("#eagle-wkb"), $("#eagle"), $("#wkb"));
    connectElements($("#svg"), $("#force-seraph"), $("#force"), $("#seraph"));
    connectElements($("#svg"), $("#staff-force"), $("#staff"), $("#force"));
    connectElements($("#svg"), $("#band-dlance"), $("#band"), $("#dlance"));
    connectElements($("#svg"), $("#club-dlance"), $("#club"), $("#dlance"));
    connectElements($("#svg"), $("#club-echo"), $("#club"), $("#echo"));
    connectElements($("#svg"), $("#staff-atos"), $("#staff"), $("#atos"));
    connectElements($("#svg"), $("#staff-dagon"), $("#staff"), $("#dagon"));
    connectElements($("#svg"), $("#gauntlets-bracer"), $("#gauntlets"), $("#bracer"));
    connectElements($("#svg"), $("#bracer-drum"), $("#bracer"), $("#drum"));
    connectElements($("#svg"), $("#bracer-atos"), $("#bracer"), $("#atos"));
    connectElements($("#svg"), $("#mantle-null"), $("#mantle"), $("#null"));
    connectElements($("#svg"), $("#null-dagon"), $("#null"), $("#dagon"));
    connectElements($("#svg"), $("#null-veil"), $("#null"), $("#veil"));
    connectElements($("#svg"), $("#slippers-wraith"), $("#slippers"), $("#wraith"));
    connectElements($("#svg"), $("#wraith-aquila"), $("#wraith"), $("#aquila"));
    connectElements($("#svg"), $("#wraith-squire"), $("#wraith"), $("#squire"));
    connectElements($("#svg"), $("#mango-soulring"), $("#mango"), $("#soulring"));
    connectElements($("#svg"), $("#ror-soulring"), $("#ror"), $("#soulring"));
    connectElements($("#svg"), $("#sage-soulring"), $("#sage"), $("#soulring"));
    connectElements($("#svg"), $("#irain-urn"), $("#irain"), $("#urn"));
    connectElements($("#svg"), $("#rop-urn"), $("#rop"), $("#urn"));
    connectElements($("#svg"), $("#circlet-urn"), $("#circlet"), $("#urn"));
    connectElements($("#svg"), $("#roh-perseverance"), $("#roh"), $("#perseverance"));
    connectElements($("#svg"), $("#void-perseverance"), $("#void"), $("#perseverance"));
    connectElements($("#svg"), $("#stick-wand"), $("#stick"), $("#wand"));
    connectElements($("#svg"), $("#branch-wand"), $("#branch"), $("#wand"));
    connectElements($("#svg"), $("#circlet-wand"), $("#circlet"), $("#wand"));
    connectElements($("#svg"), $("#rop-woodsman"), $("#rop"), $("#woodsman"));
    connectElements($("#svg"), $("#branch-woodsman"), $("#branch"), $("#woodsman"));
    connectElements($("#svg"), $("#vit-soulbooster"), $("#vit"), $("#soulbooster"));
    connectElements($("#svg"), $("#energy-soulbooster"), $("#energy"), $("#soulbooster"));
    connectElements($("#svg"), $("#pb-soulbooster"), $("#pb"), $("#soulbooster"));
    connectElements($("#svg"), $("#soulring-bloodstone"), $("#soulring"), $("#bloodstone"));
    connectElements($("#svg"), $("#soulbooster-bloodstone"), $("#soulbooster"), $("#bloodstone"));
    connectElements($("#svg"), $("#energy-aether"), $("#energy"), $("#aether"));
    connectElements($("#svg"), $("#void-aether"), $("#void"), $("#aether"));
    connectElements($("#svg"), $("#rop-talon"), $("#rop"), $("#talon"));
    connectElements($("#svg"), $("#qb-talon"), $("#qb"), $("#talon"));
    connectElements($("#svg"), $("#sage-moc"), $("#sage"), $("#moc"));
    connectElements($("#svg"), $("#chainmail-moc"), $("#chainmail"), $("#moc"));
    connectElements($("#svg"), $("#blight-moc"), $("#blight"), $("#moc"));
    connectElements($("#svg"), $("#moc-solar"), $("#moc"), $("#solar"));
    connectElements($("#svg"), $("#talisman-solar"), $("#talisman"), $("#solar"));
    connectElements($("#svg"), $("#talisman-halberd"), $("#talisman"), $("#halberd"));
    connectElements($("#svg"), $("#rop-basi"), $("#rop"), $("#basi"));
    connectElements($("#svg"), $("#sage-basi"), $("#sage"), $("#basi"));
    connectElements($("#svg"), $("#basi-aquila"), $("#basi"), $("#aquila"));
    connectElements($("#svg"), $("#basi-vlads"), $("#basi"), $("#vlads"));
    connectElements($("#svg"), $("#morbid-vlads"), $("#morbid"), $("#vlads"));
    connectElements($("#svg"), $("#headdress-vlads"), $("#headdress"), $("#vlads"));
    connectElements($("#svg"), $("#boots-arcane"), $("#boots"), $("#arcane"));
    connectElements($("#svg"), $("#boots-tranquil"), $("#boots"), $("#tranquil"));
    connectElements($("#svg"), $("#boots-treads"), $("#boots"), $("#treads"));
    connectElements($("#svg"), $("#boots-phase"), $("#boots"), $("#phase"));
    connectElements($("#svg"), $("#boots-bots"), $("#boots"), $("#bots"));
    connectElements($("#svg"), $("#energy-arcane"), $("#energy"), $("#arcane"));
    connectElements($("#svg"), $("#ror-tranquil"), $("#ror"), $("#tranquil"));
    connectElements($("#svg"), $("#lace-tranquil"), $("#lace"), $("#tranquil"));
    connectElements($("#svg"), $("#belt-treads"), $("#belt"), $("#treads"));
    connectElements($("#svg"), $("#robe-treads"), $("#robe"), $("#treads"));
    connectElements($("#svg"), $("#band-treads"), $("#band"), $("#treads"));
    connectElements($("#svg"), $("#boa-phase"), $("#boa"), $("#phase"));
    connectElements($("#svg"), $("#branch-buckler"), $("#branch"), $("#buckler"));
    connectElements($("#svg"), $("#chainmail-buckler"), $("#chainmail"), $("#buckler"));
    connectElements($("#svg"), $("#branch-headdress"), $("#branch"), $("#headdress"));
    connectElements($("#svg"), $("#ror-headdress"), $("#ror"), $("#headdress"));
    connectElements($("#svg"), $("#cloak-glimmer"), $("#cloak"), $("#glimmer"));
    connectElements($("#svg"), $("#shadowam-glimmer"), $("#shadowam"), $("#glimmer"));
    connectElements($("#svg"), $("#cloak-hood"), $("#cloak"), $("#hood"));
    connectElements($("#svg"), $("#ror-hood"), $("#ror"), $("#hood"));
    connectElements($("#svg"), $("#roh-hood"), $("#roh"), $("#hood"));
    connectElements($("#svg"), $("#stout-vanguard"), $("#stout"), $("#vanguard"));
    connectElements($("#svg"), $("#roh-vanguard"), $("#roh"), $("#vanguard"));
    connectElements($("#svg"), $("#vit-vanguard"), $("#vit"), $("#vanguard"));
    connectElements($("#svg"), $("#buckler-mek"), $("#buckler"), $("#mek"));
    connectElements($("#svg"), $("#headdress-mek"), $("#headdress"), $("#mek"));
    connectElements($("#svg"), $("#headdress-hotd"), $("#headdress"), $("#hotd"));
    connectElements($("#svg"), $("#goh-hotd"), $("#goh"), $("#hotd"));
    connectElements($("#svg"), $("#roh-hotd"), $("#roh"), $("#hotd"));
    connectElements($("#svg"), $("#perseverance-refresher"), $("#perseverance"), $("#refresher"));
    connectElements($("#svg"), $("#vanguard-crimson"), $("#vanguard"), $("#crimson"));
    connectElements($("#svg"), $("#buckler-crimson"), $("#buckler"), $("#crimson"));
    connectElements($("#svg"), $("#mek-greaves"), $("#mek"), $("#greaves"));
    connectElements($("#svg"), $("#arcane-greaves"), $("#arcane"), $("#greaves"));
    connectElements($("#svg"), $("#hood-pipe"), $("#hood"), $("#pipe"));
    connectElements($("#svg"), $("#headdress-pipe"), $("#headdress"), $("#pipe"));
    connectElements($("#svg"), $("#platemail-lotus"), $("#platemail"), $("#lotus"));
    connectElements($("#svg"), $("#energy-lotus"), $("#energy"), $("#lotus"));
    connectElements($("#svg"), $("#perseverance-lotus"), $("#perseverance"), $("#lotus"));
    connectElements($("#svg"), $("#chainmail-ac"), $("#chainmail"), $("#ac"));
    connectElements($("#svg"), $("#platemail-ac"), $("#platemail"), $("#ac"));
    connectElements($("#svg"), $("#hyper-ac"), $("#hyper"), $("#ac"));
    connectElements($("#svg"), $("#lace-drum"), $("#lace"), $("#drum"));
    connectElements($("#svg"), $("#sage-drum"), $("#sage"), $("#drum"));
    connectElements($("#svg"), $("#hoiw-veil"), $("#hoiw"), $("#veil"));
    connectElements($("#svg"), $("#clay-squire"), $("#clay"), $("#squire"));
    connectElements($("#svg"), $("#oov-frost"), $("#oov"), $("#frost"));
    connectElements($("#svg"), $("#qb-frost"), $("#qb"), $("#frost"));
    connectElements($("#svg"), $("#stout-pms"), $("#stout"), $("#pms"));
    connectElements($("#svg"), $("#ghost-gjalla"), $("#ghost"), $("#gjalla"));
    connectElements($("#svg"), $("#wand-gjalla"), $("#wand"), $("#gjalla"));
    connectElements($("#svg"), $("#aether-spellblade"), $("#aether"), $("#spellblade"));
    connectElements($("#svg"), $("#void-seraph"), $("#void"), $("#seraph"));
    connectElements($("#svg"), $("#ultimateorb-manta"), $("#ultimateorb"), $("#manta"));
    connectElements($("#svg"), $("#lace-hayabusa"), $("#lace"), $("#hayabusa"));
    connectElements($("#svg"), $("#demon-hayabusa"), $("#demon"), $("#hayabusa"));
    connectElements($("#svg"), $("#qstaff-oblivion"), $("#qstaff"), $("#oblivion"));
    connectElements($("#svg"), $("#robe-oblivion"), $("#robe"), $("#oblivion"));
    connectElements($("#svg"), $("#sage-oblivion"), $("#sage"), $("#oblivion"));
    connectElements($("#svg"), $("#circlet-bracer"), $("#circlet"), $("#bracer"));
    connectElements($("#svg"), $("#circlet-null"), $("#circlet"), $("#null"));
    connectElements($("#svg"), $("#circlet-wraith"), $("#circlet"), $("#wraith"));
    connectElements($("#svg"), $("#roh-force"), $("#roh"), $("#force"));
    connectElements($("#svg"), $("#oblivion-echo"), $("#oblivion"), $("#echo"));
    connectElements($("#svg"), $("#javelin-wyrmslayer"), $("#javelin"), $("#wyrmslayer"));
    connectElements($("#svg"), $("#javelin-basher"), $("#javelin"), $("#basher"));
    connectElements($("#svg"), $("#belt-basher"), $("#belt"), $("#basher"));
    connectElements($("#svg"), $("#oblivion-orchid"), $("#oblivion"), $("#orchid"));
    connectElements($("#svg"), $("#chainmail-blademail"), $("#chainmail"), $("#blademail"));
    connectElements($("#svg"), $("#broad-blademail"), $("#broad"), $("#blademail"));
    connectElements($("#svg"), $("#robe-blademail"), $("#robe"), $("#blademail"));
    connectElements($("#svg"), $("#club-bkb"), $("#club"), $("#bkb"));
    connectElements($("#svg"), $("#mithham-bkb"), $("#mithham"), $("#bkb"));
    connectElements($("#svg"), $("#lace-euls"), $("#lace"), $("#euls"));
    connectElements($("#svg"), $("#sage-euls"), $("#sage"), $("#euls"));
    connectElements($("#svg"), $("#void-euls"), $("#void"), $("#euls"));
    connectElements($("#svg"), $("#staff-euls"), $("#staff"), $("#euls"));
    connectElements($("#svg"), $("#belt-necro"), $("#belt"), $("#necro"));
    connectElements($("#svg"), $("#staff-necro"), $("#staff"), $("#necro"));
    connectElements($("#svg"), $("#blade-diffu"), $("#blade"), $("#diffu"));
    connectElements($("#svg"), $("#robe-diffu"), $("#robe"), $("#diffu"));
    connectElements($("#svg"), $("#club-aghs"), $("#club"), $("#aghs"));
    connectElements($("#svg"), $("#staff-aghs"), $("#staff"), $("#aghs"));
    connectElements($("#svg"), $("#blade-aghs"), $("#blade"), $("#aghs"));
    connectElements($("#svg"), $("#pb-aghs"), $("#pb"), $("#aghs"));
    connectElements($("#svg"), $("#vit-heart"), $("#vit"), $("#heart"));
    connectElements($("#svg"), $("#morbid-satanic"), $("#morbid"), $("#satanic"));
    connectElements($("#svg"), $("#mithham-satanic"), $("#mithham"), $("#satanic"));
    connectElements($("#svg"), $("#hotd-pauldron"), $("#hotd"), $("#pauldron"));
    connectElements($("#svg"), $("#talon-pauldron"), $("#talon"), $("#pauldron"));
    connectElements($("#svg"), $("#ultimateorb-sheep"), $("#ultimateorb"), $("#sheep"));
    connectElements($("#svg"), $("#void-sheep"), $("#void"), $("#sheep"));
    connectElements($("#svg"), $("#platemail-shiva"), $("#platemail"), $("#shiva"));
    connectElements($("#svg"), $("#soulbooster-ocore"), $("#soulbooster"), $("#ocore"));
    connectElements($("#svg"), $("#talisman-butterfly"), $("#talisman"), $("#butterfly"));
    connectElements($("#svg"), $("#qstaff-butterfly"), $("#qstaff"), $("#butterfly"));
    connectElements($("#svg"), $("#ghost-eblade"), $("#ghost"), $("#eblade"));
    connectElements($("#svg"), $("#blight-wkb"), $("#blight"), $("#wkb"));
    connectElements($("#svg"), $("#shadowam-wkb"), $("#shadowam"), $("#wkb"));
    connectElements($("#svg"), $("#boa-crystal"), $("#boa"), $("#crystal"));
    connectElements($("#svg"), $("#broad-crystal"), $("#broad"), $("#crystal"));
    connectElements($("#svg"), $("#clay-shadowb"), $("#clay"), $("#shadowb"));
    connectElements($("#svg"), $("#shadowam-shadowb"), $("#shadowam"), $("#shadowb"));
    connectElements($("#svg"), $("#goh-midas"), $("#goh"), $("#midas"));
    connectElements($("#svg"), $("#oov-skadi"), $("#oov"), $("#skadi"));
    connectElements($("#svg"), $("#pb-skadi"), $("#pb"), $("#skadi"));
    connectElements($("#svg"), $("#ultimateorb-skadi"), $("#ultimateorb"), $("#skadi"));
    connectElements($("#svg"), $("#perseverance-linkens"), $("#perseverance"), $("#linkens"));
    connectElements($("#svg"), $("#ultimateorb-linkens"), $("#ultimateorb"), $("#linkens"));
    connectElements($("#svg"), $("#perseverance-bfury"), $("#perseverance"), $("#bfury"));
    connectElements($("#svg"), $("#qb-bfury"), $("#qb"), $("#bfury"));
    connectElements($("#svg"), $("#broad-bfury"), $("#broad"), $("#bfury"));
    connectElements($("#svg"), $("#clay-bfury"), $("#clay"), $("#bfury"));
    connectElements($("#svg"), $("#morbid-mom"), $("#morbid"), $("#mom"));
    connectElements($("#svg"), $("#qstaff-mom"), $("#qstaff"), $("#mom"));
    connectElements($("#svg"), $("#blight-deso"), $("#blight"), $("#deso"));
    connectElements($("#svg"), $("#mithham-deso"), $("#mithham"), $("#deso"));
    connectElements($("#svg"), $("#goh-treads"), $("#goh"), $("#treads"));
    connectElements($("#svg"), $("#goh-mael"), $("#goh"), $("#mael"));
    connectElements($("#svg"), $("#mithham-mael"), $("#mithham"), $("#mael"));
    connectElements($("#svg"), $("#goh-armlet"), $("#goh"), $("#armlet"));
    connectElements($("#svg"), $("#boa-armlet"), $("#boa"), $("#armlet"));
    connectElements($("#svg"), $("#hoiw-armlet"), $("#hoiw"), $("#armlet"));
    connectElements($("#svg"), $("#crystal-daedalus"), $("#crystal"), $("#daedalus"));
    connectElements($("#svg"), $("#demon-daedalus"), $("#demon"), $("#daedalus"));
    connectElements($("#svg"), $("#shadowb-silvedge"), $("#shadowb"), $("#silvedge"));
    connectElements($("#svg"), $("#ultimateorb-silvedge"), $("#ultimateorb"), $("#silvedge"));
    connectElements($("#svg"), $("#demon-mkb"), $("#demon"), $("#mkb"));
    connectElements($("#svg"), $("#javelin-mkb"), $("#javelin"), $("#mkb"));
    connectElements($("#svg"), $("#relic-radiance"), $("#relic"), $("#radiance"));
    connectElements($("#svg"), $("#vanguard-ablade"), $("#vanguard"), $("#ablade"));
    connectElements($("#svg"), $("#basher-ablade"), $("#basher"), $("#ablade"));
    connectElements($("#svg"), $("#crystal-bloodthorn"), $("#crystal"), $("#bloodthorn"));
    connectElements($("#svg"), $("#orchid-bloodthorn"), $("#orchid"), $("#bloodthorn"));
    connectElements($("#svg"), $("#demon-rapier"), $("#demon"), $("#rapier"));
    connectElements($("#svg"), $("#relic-rapier"), $("#relic"), $("#rapier"));
    connectElements($("#svg"), $("#hyper-mjoll"), $("#hyper"), $("#mjoll"));
    connectElements($("#svg"), $("#mael-mjoll"), $("#mael"), $("#mjoll"));
    connectElements($("#svg"), $("#hyper-moonsh"), $("#hyper"), $("#moonsh"));
    connectElements($("#svg"), $("#reaver-vermcloak"), $("#reaver"), $("#vermcloak"));
    connectElements($("#svg"), $("#mystic-vermcloak"), $("#mystic"), $("#vermcloak"));
    connectElements($("#svg"), $("#eagle-vermcloak"), $("#eagle"), $("#vermcloak"));
}

function hideAll() {
    $("#svg > path").hide();
}

$(window).on("load", function() {
    // reset svg each time
    $("#svg").attr("height", "0");
    $("#svg").attr("width", "0");
    connectAll();
    hideAll();
});

$(window).resize(function () {
    // reset svg each time
    $("#svg").attr("height", "0");
    $("#svg").attr("width", "0");
    connectAll();
});

$("#str,#strl").on("click", function() {
    $("#str").toggle();
    $("#strp").toggle();
    $("#strl").toggle();
    $("#strlp").toggle();
    $(".item-str").css('background-color','#cc3333');
});
$("#str,#strl").hover(function() {
    $("#strl").css('border','4px solid #cc3333');
    $(".item-str").css('background-color','#cc3333');
  }, function() {
    $("#strl").css('border','none');
    $(".item-str").css('background-color','#23242A');
});
$("#strp,#strlp").on("click", function() {
    $("#strp").toggle();
    $("#str").toggle();
    $("#strlp").toggle();
    $("#strl").toggle();
    $(".item-str").css('background-color','#23242A');
});
$("#strp,#strlp").hover(function() {
    $(".item-str").css('background-color','#cc3333');
});

$("#int,#intl").on("click", function() {
    $("#int").toggle();
    $("#intp").toggle();
    $("#intl").toggle();
    $("#intlp").toggle();
    $(".item-int").css('background-color','#0099cc');
});
$("#int,#intl").hover(function() {
    $("#intl").css('border','4px solid #0099cc');
    $(".item-int").css('background-color','#0099cc');
  }, function() {
    $("#intl").css('border','none');
    $(".item-int").css('background-color','#23242A');
});
$("#intp,#intlp").on("click", function() {
    $("#intp").toggle();
    $("#int").toggle();
    $("#intlp").toggle();
    $("#intl").toggle();
    $(".item-int").css('background-color','#23242A');
});
$("#intp,#intlp").hover(function() {
    $(".item-int").css('background-color','#0099cc');
});

$("#agi,#agil").on("click", function() {
    $("#agi").toggle();
    $("#agip").toggle();
    $("#agil").toggle();
    $("#agilp").toggle();
    $(".item-agi").css('background-color','#339966');
});
$("#agi,#agil").hover(function() {
    $("#agil").css('border','4px solid #339966');
    $(".item-agi").css('background-color','#339966');
  }, function() {
    $("#agil").css('border','none');
    $(".item-agi").css('background-color','#23242A');
});
$("#agip,#agilp").on("click", function() {
    $("#agip").toggle();
    $("#agi").toggle();
    $("#agilp").toggle();
    $("#agil").toggle();
    $(".item-agi").css('background-color','#23242A');
});
$("#agip,#agilp").hover(function() {
    $(".item-agi").css('background-color','#339966');
});

$("#stat,#statl").on("click", function() {
    $("#stat").toggle();
    $("#statp").toggle();
    $("#statl").toggle();
    $("#statlp").toggle();
    $(".item-stat").css('background-color','#663399');
});
$("#stat,#statl").hover(function() {
    $("#statl").css('border','4px solid #663399');
    $(".item-stat").css('background-color','#663399');
  }, function() {
    $("#statl").css('border','none');
    $(".item-stat").css('background-color','#23242A');
});
$("#statp,#statlp").on("click", function() {
    $("#statp").toggle();
    $("#stat").toggle();
    $("#statlp").toggle();
    $("#statl").toggle();
    $(".item-stat").css('background-color','#23242A');
});
$("#statp,#statlp").hover(function() {
    $(".item-stat").css('background-color','#663399');
});

$("#regen,#regenl").on("click", function() {
    $("#regen").toggle();
    $("#regenp").toggle();
    $("#regenl").toggle();
    $("#regenlp").toggle();
    $(".item-regen").css('background-color','#993399');
});
$("#regen,#regenl").hover(function() {
    $("#regenl").css('border','4px solid #993399');
    $(".item-regen").css('background-color','#993399');
  }, function() {
    $("#regenl").css('border','none');
    $(".item-regen").css('background-color','#23242A');
});
$("#regenp,#regenlp").on("click", function() {
    $("#regenp").toggle();
    $("#regen").toggle();
    $("#regenlp").toggle();
    $("#regenl").toggle();
    $(".item-regen").css('background-color','#23242A');
});
$("#regenp,#regenlp").hover(function() {
    $(".item-regen").css('background-color','#993399');
});

$("#cons,#consl").on("click", function() {
    $("#cons").toggle();
    $("#consp").toggle();
    $("#consl").toggle();
    $("#conslp").toggle();
    $(".item-cons").css('background-color','#cccc33');
});
$("#cons,#consl").hover(function() {
    $("#consl").css('border','4px solid #cccc33');
    $(".item-cons").css('background-color','#cccc33');
  }, function() {
    $("#consl").css('border','none');
    $(".item-cons").css('background-color','#23242A');
});
$("#consp,#conslp").on("click", function() {
    $("#consp").toggle();
    $("#cons").toggle();
    $("#conslp").toggle();
    $("#consl").toggle();
    $(".item-cons").css('background-color','#23242A');
});
$("#consp,#conslp").hover(function() {
    $(".item-cons").css('background-color','#cccc33');
});

$("#mobi,#mobil").on("click", function() {
    $("#mobi").toggle();
    $("#mobip").toggle();
    $("#mobil").toggle();
    $("#mobilp").toggle();
    $(".item-mobi").css('background-color','#0066cc');
});
$("#mobi,#mobil").hover(function() {
    $("#mobil").css('border','4px solid #0066cc');
    $(".item-mobi").css('background-color','#0066cc');
  }, function() {
    $("#mobil").css('border','none');
    $(".item-mobi").css('background-color','#23242A');
});
$("#mobip,#mobilp").on("click", function() {
    $("#mobip").toggle();
    $("#mobi").toggle();
    $("#mobilp").toggle();
    $("#mobil").toggle();
    $(".item-mobi").css('background-color','#23242A');
});
$("#mobip,#mobilp").hover(function() {
    $(".item-mobi").css('background-color','#0066cc');
});

$("#dam,#daml").on("click", function() {
    $("#dam").toggle();
    $("#damp").toggle();
    $("#daml").toggle();
    $("#damlp").toggle();
    $(".item-dam").css('background-color','#33cccc');
});
$("#dam,#daml").hover(function() {
    $("#daml").css('border','4px solid #33cccc');
    $(".item-dam").css('background-color','#33cccc');
  }, function() {
    $("#daml").css('border','none');
    $(".item-dam").css('background-color','#23242A');
});
$("#damp,#damlp").on("click", function() {
    $("#damp").toggle();
    $("#dam").toggle();
    $("#damlp").toggle();
    $("#daml").toggle();
    $(".item-dam").css('background-color','#23242A');
});
$("#damp,#damlp").hover(function() {
    $(".item-dam").css('background-color','#33cccc');
});

$("#def,#defl").on("click", function() {
    $("#def").toggle();
    $("#defp").toggle();
    $("#defl").toggle();
    $("#deflp").toggle();
    $(".item-def").css('background-color','#999999');
});
$("#def,#defl").hover(function() {
    $("#defl").css('border','4px solid #999999');
    $(".item-def").css('background-color','#999999');
  }, function() {
    $("#defl").css('border','none');
    $(".item-def").css('background-color','#23242A');
});
$("#defp,#deflp").on("click", function() {
    $("#defp").toggle();
    $("#def").toggle();
    $("#deflp").toggle();
    $("#defl").toggle();
    $(".item-def").css('background-color','#23242A');
});
$("#defp,#deflp").hover(function() {
    $(".item-def").css('background-color','#999999');
});

$("#util,#utill").on("click", function() {
    $("#util").toggle();
    $("#utilp").toggle();
    $("#utill").toggle();
    $("#utillp").toggle();
    $(".item-util").css('background-color','#993300');
});
$("#util,#utill").hover(function() {
    $("#utill").css('border','4px solid #993300');
    $(".item-util").css('background-color','#993300');
  }, function() {
    $("#utill").css('border','none');
    $(".item-util").css('background-color','#23242A');
});
$("#utilp,#utillp").on("click", function() {
    $("#utilp").toggle();
    $("#util").toggle();
    $("#utillp").toggle();
    $("#utill").toggle();
    $(".item-util").css('background-color','#23242A');
});
$("#utilp,#utillp").hover(function() {
    $(".item-util").css('background-color','#993300');
});

$("#cast,#castl").on("click", function() {
    $("#cast").toggle();
    $("#castp").toggle();
    $("#castl").toggle();
    $("#castlp").toggle();
    $(".item-cast").css('background-color','#99cc66');
});
$("#cast,#castl").hover(function() {
    $("#castl").css('border','4px solid #99cc66');
    $(".item-cast").css('background-color','#99cc66');
  }, function() {
    $("#castl").css('border','none');
    $(".item-cast").css('background-color','#23242A');
});
$("#castp,#castlp").on("click", function() {
    $("#castp").toggle();
    $("#cast").toggle();
    $("#castlp").toggle();
    $("#castl").toggle();
    $(".item-cast").css('background-color','#23242A');
});
$("#castp,#castlp").hover(function() {
    $(".item-cast").css('background-color','#99cc66');
});

$("#supp,#suppl").on("click", function() {
    $("#supp").toggle();
    $("#suppp").toggle();
    $("#suppl").toggle();
    $("#supplp").toggle();
    $(".item-supp").css('background-color','#cc6600');
});
$("#supp,#suppl").hover(function() {
    $("#suppl").css('border','4px solid #cc6600');
    $(".item-supp").css('background-color','#cc6600');
  }, function() {
    $("#suppl").css('border','none');
    $(".item-supp").css('background-color','#23242A');
});
$("#suppp,#supplp").on("click", function() {
    $("#suppp").toggle();
    $("#supp").toggle();
    $("#supplp").toggle();
    $("#suppl").toggle();
    $(".item-supp").css('background-color','#23242A');
});
$("#suppp,#supplp").hover(function() {
    $(".item-supp").css('background-color','#cc6600');
});

$('.item-str').hover(function (e) {
  $('#strl').toggle();
  $('#strlp').toggle();
}, function (e) {
  $('#strl').toggle();
  $('#strlp').toggle();
});

$('.item-int').hover(function (e) {
  $('#intl').toggle();
  $('#intlp').toggle();
}, function (e) {
  $('#intl').toggle();
  $('#intlp').toggle();
});

$('.item-agi').hover(function (e) {
  $('#agil').toggle();
  $('#agilp').toggle();
}, function (e) {
  $('#agil').toggle();
  $('#agilp').toggle();
});

$('.item-stat').hover(function (e) {
  $('#statl').toggle();
  $('#statlp').toggle();
}, function (e) {
  $('#statl').toggle();
  $('#statlp').toggle();
});

$('.item-regen').hover(function (e) {
  $('#regenl').toggle();
  $('#regenlp').toggle();
}, function (e) {
  $('#regenl').toggle();
  $('#regenlp').toggle();
});

$('.item-cons').hover(function (e) {
  $('#consl').toggle();
  $('#conslp').toggle();
}, function (e) {
  $('#consl').toggle();
  $('#conslp').toggle();
});

$('.item-mobi').hover(function (e) {
  $('#mobil').toggle();
  $('#mobilp').toggle();
}, function (e) {
  $('#mobil').toggle();
  $('#mobilp').toggle();
});

$('.item-dam').hover(function (e) {
  $('#daml').toggle();
  $('#damlp').toggle();
}, function (e) {
  $('#daml').toggle();
  $('#damlp').toggle();
});

$('.item-def').hover(function (e) {
  $('#defl').toggle();
  $('#deflp').toggle();
}, function (e) {
  $('#defl').toggle();
  $('#deflp').toggle();
});

$('.item-util').hover(function (e) {
  $('#utill').toggle();
  $('#utillp').toggle();
}, function (e) {
  $('#utill').toggle();
  $('#utillp').toggle();
});

$('.item-cast').hover(function (e) {
  $('#castl').toggle();
  $('#castlp').toggle();
}, function (e) {
  $('#castl').toggle();
  $('#castlp').toggle();
});

$('.item-supp').hover(function (e) {
  $('#suppl').toggle();
  $('#supplp').toggle();
}, function (e) {
  $('#suppl').toggle();
  $('#supplp').toggle();
});

$("#belt").hover(function() {
    $("path[id*=belt]").show(150);
    //$("#belt-sange").show(150);
    //$("#belt-treads").show(150);
    //$("#belt-basher").show(150);
    //$("#belt-necro").show(150);
  }, function() {
    $("path[id*=belt]").hide();
    //$("#belt-sange").hide();
    //$("#belt-treads").hide();
    //$("#belt-basher").hide();
    //$("#belt-necro").hide();
});

$("#club").hover(function() {
    $("path[id*=club]").show(150);
  }, function() {
    $("path[id*=club]").hide();
});

$("#halberd").hover(function() {
    $("path[id*=halberd]").show(150);
  }, function() {
    $("path[id*=halberd]").hide();
});

$("#gjalla").hover(function() {
    $("path[id*=gjalla]").show(150);
  }, function() {
    $("path[id*=gjalla]").hide();
});

$("#sange").hover(function() {
    $("path[id*=sange]").show(150);
  }, function() {
    $("path[id*=sange]").hide();
});

$("#robe").hover(function() {
    $("path[id*=robe]").show(150);
  }, function() {
    $("path[id*=robe]").hide();
});

$("#staff").hover(function() {
    $("path[id^=staff]").show(150);
  }, function() {
    $("path[id^=staff]").hide();
});

$("#spellblade").hover(function() {
    $("path[id*=spellblade]").show(150);
  }, function() {
    $("path[id*=spellblade]").hide();
});

$("#seraph").hover(function() {
    $("path[id*=seraph]").show(150);
  }, function() {
    $("path[id*=seraph]").hide();
});

$("#lucen").hover(function() {
    $("path[id*=lucen]").show(150);
  }, function() {
    $("path[id*=lucen]").hide();
});

$("#band").hover(function() {
    $("path[id*=band]").show(150);
  }, function() {
    $("path[id*=band]").hide();
});

$("#blade").hover(function() {
    $("path[id^=blade]").show(150);
  }, function() {
    $("path[id^=blade]").hide();
});

$("#manta").hover(function() {
    $("path[id*=manta]").show(150);
  }, function() {
    $("path[id*=manta]").hide();
});

$("#hayabusa").hover(function() {
    $("path[id*=hayabusa]").show(150);
  }, function() {
    $("path[id*=hayabusa]").hide();
});

$("#yasha").hover(function() {
    $("path[id*=yasha]").show(150);
  }, function() {
    $("path[id*=yasha]").hide();
});

$("#trio").hover(function() {
    $("path[id*=trio]").show(150);
  }, function() {
    $("path[id*=trio]").hide();
});

$("#sny").hover(function() {
    $("path[id*=sny]").show(150);
  }, function() {
    $("path[id*=sny]").hide();
});

$("#snl").hover(function() {
    $("path[id*=snl]").show(150);
  }, function() {
    $("path[id*=snl]").hide();
});

$("#lny").hover(function() {
    $("path[id*=lny]").show(150);
  }, function() {
    $("path[id*=lny]").hide();
});

$("#gauntlets").hover(function() {
    $("path[id*=gauntlets]").show(150);
  }, function() {
    $("path[id*=gauntlets]").hide();
});

$("#woodsman").hover(function() {
    $("path[id*=woodsman]").show(150);
  }, function() {
    $("path[id*=woodsman]").hide();
});

$("#mantle").hover(function() {
    $("path[id*=mantle]").show(150);
  }, function() {
    $("path[id*=mantle]").hide();
});

$("#frost").hover(function() {
    $("path[id*=frost]").show(150);
  }, function() {
    $("path[id*=frost]").hide();
});

$("#slippers").hover(function() {
    $("path[id*=slippers]").show(150);
  }, function() {
    $("path[id*=slippers]").hide();
});

$("#pms").hover(function() {
    $("path[id*=pms]").show(150);
  }, function() {
    $("path[id*=pms]").hide();
});

$("#bracer").hover(function() {
    $("path[id*=bracer]").show(150);
  }, function() {
    $("path[id*=bracer]").hide();
});

$("#drum").hover(function() {
    $("path[id*=drum]").show(150);
  }, function() {
    $("path[id*=drum]").hide();
});

$("#atos").hover(function() {
    $("path[id*=atos]").show(150);
  }, function() {
    $("path[id*=atos]").hide();
});

$("#null").hover(function() {
    $("path[id*=null]").show(150);
  }, function() {
    $("path[id*=null]").hide();
});

$("#dagon").hover(function() {
    $("path[id*=dagon]").show(150);
  }, function() {
    $("path[id*=dagon]").hide();
});

$("#veil").hover(function() {
    $("path[id*=veil]").show(150);
  }, function() {
    $("path[id*=veil]").hide();
});

$("#wraith").hover(function() {
    $("path[id*=wraith]").show(150);
  }, function() {
    $("path[id*=wraith]").hide();
});

$("#aquila").hover(function() {
    $("path[id*=aquila]").show(150);
  }, function() {
    $("path[id*=aquila]").hide();
});

$("#squire").hover(function() {
    $("path[id*=squire]").show(150);
  }, function() {
    $("path[id*=squire]").hide();
});

$("#dlance").hover(function() {
    $("path[id*=dlance]").show(150);
  }, function() {
    $("path[id*=dlance]").hide();
});

$("#pike").hover(function() {
    $("path[id*=pike]").show(150);
  }, function() {
    $("path[id*=pike]").hide();
});

$("#oblivion").hover(function() {
    $("path[id*=oblivion]").show(150);
  }, function() {
    $("path[id*=oblivion]").hide();
});

$("#echo").hover(function() {
    $("path[id*=echo]").show(150);
  }, function() {
    $("path[id*=echo]").hide();
});

$("#force").hover(function() {
    $("path[id*=force]").show(150);
  }, function() {
    $("path[id*=force]").hide();
});

$("#wyrmslayer").hover(function() {
    $("path[id*=wyrmslayer]").show(150);
  }, function() {
    $("path[id*=wyrmslayer]").hide();
});

$("#reaver").hover(function() {
    $("path[id*=reaver]").show(150);
  }, function() {
    $("path[id*=reaver]").hide();
});

$("#heart").hover(function() {
    $("path[id*=heart]").show(150);
  }, function() {
    $("path[id*=heart]").hide();
});

$("#satanic").hover(function() {
    $("path[id*=satanic]").show(150);
  }, function() {
    $("path[id*=satanic]").hide();
});

$("#pauldron").hover(function() {
    $("path[id*=pauldron]").show(150);
  }, function() {
    $("path[id*=pauldron]").hide();
});

$("#mystic").hover(function() {
    $("path[id*=mystic]").show(150);
  }, function() {
    $("path[id*=mystic]").hide();
});

$("#sheep").hover(function() {
    $("path[id*=sheep]").show(150);
  }, function() {
    $("path[id*=sheep]").hide();
});

$("#shiva").hover(function() {
    $("path[id*=shiva]").show(150);
  }, function() {
    $("path[id*=shiva]").hide();
});

$("#ocore").hover(function() {
    $("path[id*=ocore]").show(150);
  }, function() {
    $("path[id*=ocore]").hide();
});

$("#eagle").hover(function() {
    $("path[id*=eagle]").show(150);
  }, function() {
    $("path[id*=eagle]").hide();
});

$("#butterfly").hover(function() {
    $("path[id*=butterfly]").show(150);
  }, function() {
    $("path[id*=butterfly]").hide();
});

$("#eblade").hover(function() {
    $("path[id*=eblade]").show(150);
  }, function() {
    $("path[id*=eblade]").hide();
});

$("#wkb").hover(function() {
    $("path[id*=wkb]").show(150);
  }, function() {
    $("path[id*=wkb]").hide();
});

$("#vermcloak").hover(function() {
    $("path[id*=vermcloak]").show(150);
  }, function() {
    $("path[id*=vermcloak]").hide();
});

$("#mango").hover(function() {
    $("path[id*=mango]").show(150);
  }, function() {
    $("path[id*=mango]").hide();
});

$("#irain").hover(function() {
    $("path[id*=irain]").show(150);
  }, function() {
    $("path[id*=irain]").hide();
});

$("#ror").hover(function() {
    $("path[id*=ror]").show(150);
  }, function() {
    $("path[id*=ror]").hide();
});

$("#sage").hover(function() {
    $("path[id*=sage]").show(150);
  }, function() {
    $("path[id*=sage]").hide();
});

$("#roh").hover(function() {
    $("path[id*=roh]").show(150);
  }, function() {
    $("path[id*=roh]").hide();
});

$("#void").hover(function() {
    $("path[id*=void]").show(150);
  }, function() {
    $("path[id*=void]").hide();
});

$("#stick").hover(function() {
    $("path[id*=stick]").show(150);
  }, function() {
    $("path[id*=stick]").hide();
});

$("#stout").hover(function() {
    $("path[id*=stout]").show(150);
  }, function() {
    $("path[id*=stout]").hide();
});

$("#soulring").hover(function() {
    $("path[id*=soulring]").show(150);
  }, function() {
    $("path[id*=soulring]").hide();
});

$("#perseverance").hover(function() {
    $("path[id*=perseverance]").show(150);
  }, function() {
    $("path[id*=perseverance]").hide();
});

$("#branch").hover(function() {
    $("path[id*=branch]").show(150);
  }, function() {
    $("path[id*=branch]").hide();
});

$("#circlet").hover(function() {
    $("path[id*=circlet]").show(150);
  }, function() {
    $("path[id*=circlet]").hide();
});

$("#vit").hover(function() {
    $("path[id*=vit]").show(150);
  }, function() {
    $("path[id*=vit]").hide();
});

$("#energy").hover(function() {
    $("path[id*=energy]").show(150);
  }, function() {
    $("path[id*=energy]").hide();
});

$("#pb").hover(function() {
    $("path[id*=pb]").show(150);
  }, function() {
    $("path[id*=pb]").hide();
});

$("#talisman").hover(function() {
    $("path[id*=talisman]").show(150);
  }, function() {
    $("path[id*=talisman]").hide();
});

$("#cloak").hover(function() {
    $("path[id*=cloak]").show(150);
  }, function() {
    $("path[id*=cloak]").hide();
});

$("#rop").hover(function() {
    $("path[id*=rop]").show(150);
  }, function() {
    $("path[id*=rop]").hide();
});

$("#chainmail").hover(function() {
    $("path[id*=chainmail]").show(150);
  }, function() {
    $("path[id*=chainmail]").hide();
});

$("#hoiw").hover(function() {
    $("path[id*=hoiw]").show(150);
  }, function() {
    $("path[id*=hoiw]").hide();
});

$("#soulbooster").hover(function() {
    $("path[id*=soulbooster]").show(150);
  }, function() {
    $("path[id*=soulbooster]").hide();
});

$("#aether").hover(function() {
    $("path[id*=aether]").show(150);
  }, function() {
    $("path[id*=aether]").hide();
});

$("#lace").hover(function() {
    $("path[id*=lace]").show(150);
  }, function() {
    $("path[id*=lace]").hide();
});

$("#boots").hover(function() {
    $("path[id*=boots]").show(150);
  }, function() {
    $("path[id*=boots]").hide();
});

$("#wand").hover(function() {
    $("path[id*=wand]").show(150);
  }, function() {
    $("path[id*=wand]").hide();
});

$("#talon").hover(function() {
    $("path[id*=talon]").show(150);
  }, function() {
    $("path[id*=talon]").hide();
});

$("#urn").hover(function() {
    $("path[id*=urn]").show(150);
  }, function() {
    $("path[id*=urn]").hide();
});

$("#basi").hover(function() {
    $("path[id*=basi]").show(150);
  }, function() {
    $("path[id*=basi]").hide();
});

$("#bloodstone").hover(function() {
    $("path[id*=bloodstone]").show(150);
  }, function() {
    $("path[id*=bloodstone]").hide();
});

$("#moc").hover(function() {
    $("path[id*=moc]").show(150);
  }, function() {
    $("path[id*=moc]").hide();
});

$("#arcane").hover(function() {
    $("path[id*=arcane]").show(150);
  }, function() {
    $("path[id*=arcane]").hide();
});

$("#tranquil").hover(function() {
    $("path[id*=tranquil]").show(150);
  }, function() {
    $("path[id*=tranquil]").hide();
});

$("#treads").hover(function() {
    $("path[id*=treads]").show(150);
  }, function() {
    $("path[id*=treads]").hide();
});

$("#phase").hover(function() {
    $("path[id*=phase]").show(150);
  }, function() {
    $("path[id*=phase]").hide();
});

$("#bots").hover(function() {
    $("path[id*=bots]").show(150);
  }, function() {
    $("path[id*=bots]").hide();
});

$("#headdress").hover(function() {
    $("path[id*=headdress]").show(150);
  }, function() {
    $("path[id*=headdress]").hide();
});

$("#buckler").hover(function() {
    $("path[id*=buckler]").show(150);
  }, function() {
    $("path[id*=buckler]").hide();
});

$("#solar").hover(function() {
    $("path[id*=solar]").show(150);
  }, function() {
    $("path[id*=solar]").hide();
});

$("#glimmer").hover(function() {
    $("path[id*=glimmer]").show(150);
  }, function() {
    $("path[id*=glimmer]").hide();
});

$("#hotd").hover(function() {
    $("path[id*=hotd]").show(150);
  }, function() {
    $("path[id*=hotd]").hide();
});

$("#vanguard").hover(function() {
    $("path[id*=vanguard]").show(150);
  }, function() {
    $("path[id*=vanguard]").hide();
});

$("#mek").hover(function() {
    $("path[id*=mek]").show(150);
  }, function() {
    $("path[id*=mek]").hide();
});

$("#hood").hover(function() {
    $("path[id*=hood]").show(150);
  }, function() {
    $("path[id*=hood]").hide();
});

$("#vlads").hover(function() {
    $("path[id*=vlads]").show(150);
  }, function() {
    $("path[id*=vlads]").hide();
});

$("#platemail").hover(function() {
    $("path[id*=platemail]").show(150);
  }, function() {
    $("path[id*=platemail]").hide();
});

$("#refresher").hover(function() {
    $("path[id*=refresher]").show(150);
  }, function() {
    $("path[id*=refresher]").hide();
});

$("#crimson").hover(function() {
    $("path[id*=crimson]").show(150);
  }, function() {
    $("path[id*=crimson]").hide();
});

$("#greaves").hover(function() {
    $("path[id*=greaves]").show(150);
  }, function() {
    $("path[id*=greaves]").hide();
});

$("#pipe").hover(function() {
    $("path[id*=pipe]").show(150);
  }, function() {
    $("path[id*=pipe]").hide();
});

$("#lotus").hover(function() {
    $("path[id*=lotus]").show(150);
  }, function() {
    $("path[id*=lotus]").hide();
});

$("#ac").hover(function() {
    $("path[id*=ac]").show(150);
  }, function() {
    $("path[id*=ac]").hide();
});

$("#qb").hover(function() {
    $("path[id*=qb]").show(150);
  }, function() {
    $("path[id*=qb]").hide();
});

$("#blight").hover(function() {
    $("path[id*=blight]").show(150);
  }, function() {
    $("path[id*=blight]").hide();
});

$("#oov").hover(function() {
    $("path[id*=oov]").show(150);
  }, function() {
    $("path[id*=oov]").hide();
});

$("#javelin").hover(function() {
    $("path[id*=javelin]").show(150);
  }, function() {
    $("path[id*=javelin]").hide();
});

$("#qstaff").hover(function() {
    $("path[id*=qstaff]").show(150);
  }, function() {
    $("path[id*=qstaff]").hide();
});

$("#hoiw").hover(function() {
    $("path[id*=hoiw]").show(150);
  }, function() {
    $("path[id*=hoiw]").hide();
});

$("#oblivion").hover(function() {
    $("path[id*=oblivion]").show(150);
  }, function() {
    $("path[id*=oblivion]").hide();
});

$("#morbid").hover(function() {
    $("path[id*=morbid]").show(150);
  }, function() {
    $("path[id*=morbid]").hide();
});

$("#boa").hover(function() {
    $("path[id*=boa]").show(150);
  }, function() {
    $("path[id*=boa]").hide();
});

$("#broad").hover(function() {
    $("path[id*=broad]").show(150);
  }, function() {
    $("path[id*=broad]").hide();
});

$("#clay").hover(function() {
    $("path[id*=clay]").show(150);
  }, function() {
    $("path[id*=clay]").hide();
});

$("#goh").hover(function() {
    $("path[id*=goh]").show(150);
  }, function() {
    $("path[id*=goh]").hide();
});

$("#shadowam").hover(function() {
    $("path[id*=shadowam]").show(150);
  }, function() {
    $("path[id*=shadowam]").hide();
});

$("#mithham").hover(function() {
    $("path[id*=mithham]").show(150);
  }, function() {
    $("path[id*=mithham]").hide();
});

$("#demon").hover(function() {
    $("path[id*=demon]").show(150);
  }, function() {
    $("path[id*=demon]").hide();
});

$("#relic").hover(function() {
    $("path[id*=relic]").show(150);
  }, function() {
    $("path[id*=relic]").hide();
});

$("#ultimateorb").hover(function() {
    $("path[id*=ultimateorb]").show(150);
  }, function() {
    $("path[id*=ultimateorb]").hide();
});

$("#crystal").hover(function() {
    $("path[id*=crystal]").show(150);
  }, function() {
    $("path[id*=crystal]").hide();
});

$("#shadowb").hover(function() {
    $("path[id*=shadowb]").show(150);
  }, function() {
    $("path[id*=shadowb]").hide();
});

$("#deso").hover(function() {
    $("path[id*=deso]").show(150);
  }, function() {
    $("path[id*=deso]").hide();
});

$("#skadi").hover(function() {
    $("path[id*=skadi]").show(150);
  }, function() {
    $("path[id*=skadi]").hide();
});

$("#linkens").hover(function() {
    $("path[id*=linkens]").show(150);
  }, function() {
    $("path[id*=linkens]").hide();
});

$("#silvedge").hover(function() {
    $("path[id*=silvedge]").show(150);
  }, function() {
    $("path[id*=silvedge]").hide();
});

$("#bfury").hover(function() {
    $("path[id*=bfury]").show(150);
  }, function() {
    $("path[id*=bfury]").hide();
});

$("#orchid").hover(function() {
    $("path[id*=orchid]").show(150);
  }, function() {
    $("path[id*=orchid]").hide();
});

$("#basher").hover(function() {
    $("path[id*=basher]").show(150);
  }, function() {
    $("path[id*=basher]").hide();
});

$("#blademail").hover(function() {
    $("path[id*=blademail]").show(150);
  }, function() {
    $("path[id*=blademail]").hide();
});

$("#midas").hover(function() {
    $("path[id*=midas]").show(150);
  }, function() {
    $("path[id*=midas]").hide();
});

$("#armlet").hover(function() {
    $("path[id*=armlet]").show(150);
  }, function() {
    $("path[id*=armlet]").hide();
});

$("#mael").hover(function() {
    $("path[id*=mael]").show(150);
  }, function() {
    $("path[id*=mael]").hide();
});

$("#mom").hover(function() {
    $("path[id*=mom]").show(150);
  }, function() {
    $("path[id*=mom]").hide();
});

$("#bloodthorn").hover(function() {
    $("path[id*=bloodthorn]").show(150);
  }, function() {
    $("path[id*=bloodthorn]").hide();
});

$("#bkb").hover(function() {
    $("path[id*=bkb]").show(150);
  }, function() {
    $("path[id*=bkb]").hide();
});

$("#euls").hover(function() {
    $("path[id*=euls]").show(150);
  }, function() {
    $("path[id*=euls]").hide();
});

$("#necro").hover(function() {
    $("path[id*=necro]").show(150);
  }, function() {
    $("path[id*=necro]").hide();
});

$("#diffu").hover(function() {
    $("path[id*=diffu]").show(150);
  }, function() {
    $("path[id*=diffu]").hide();
});

$("#daedalus").hover(function() {
    $("path[id*=daedalus]").show(150);
  }, function() {
    $("path[id*=daedalus]").hide();
});

$("#mkb").hover(function() {
    $("path[id*=mkb]").show(150);
  }, function() {
    $("path[id*=mkb]").hide();
});

$("#radiance").hover(function() {
    $("path[id*=radiance]").show(150);
  }, function() {
    $("path[id*=radiance]").hide();
});

$("#aghs").hover(function() {
    $("path[id*=aghs]").show(150);
  }, function() {
    $("path[id*=aghs]").hide();
});

$("#hyper").hover(function() {
    $("path[id*=hyper]").show(150);
  }, function() {
    $("path[id*=hyper]").hide();
});

$("#ablade").hover(function() {
    $("path[id*=ablade]").show(150);
  }, function() {
    $("path[id*=ablade]").hide();
});

$("#rapier").hover(function() {
    $("path[id*=rapier]").show(150);
  }, function() {
    $("path[id*=rapier]").hide();
});

$("#mjoll").hover(function() {
    $("path[id*=mjoll]").show(150);
  }, function() {
    $("path[id*=mjoll]").hide();
});

$("#moonsh").hover(function() {
    $("path[id*=moonsh]").show(150);
  }, function() {
    $("path[id*=moonsh]").hide();
});

$("#vermcloak").hover(function() {
    $("path[id*=vermcloak]").show(150);
  }, function() {
    $("path[id*=vermcloak]").hide();
});

$("#ghost").hover(function() {
    $("path[id*=ghost]").show(150);
  }, function() {
    $("path[id*=ghost]").hide();
});

$("#urn").hover(function() {
    $("path[id*=urn]").show(150);
  }, function() {
    $("path[id*=urn]").hide();
});

$("#basi").hover(function() {
    $("path[id*=basi]").show(150);
  }, function() {
    $("path[id*=basi]").hide();
});

$("#bloodstone").hover(function() {
    $("path[id*=bloodstone]").show(150);
  }, function() {
    $("path[id*=bloodstone]").hide();
});

$("#moc").hover(function() {
    $("path[id*=moc]").show(150);
  }, function() {
    $("path[id*=moc]").hide();
});

$("#arcane").hover(function() {
    $("path[id*=arcane]").show(150);
  }, function() {
    $("path[id*=arcane]").hide();
});

$("#arcane").hover(function() {
    $("path[id*=arcane]").show(150);
  }, function() {
    $("path[id*=arcane]").hide();
});

$("#tranquil").hover(function() {
    $("path[id*=tranquil]").show(150);
  }, function() {
    $("path[id*=tranquil]").hide();
});

$("#treads").hover(function() {
    $("path[id*=treads]").show(150);
  }, function() {
    $("path[id*=treads]").hide();
});

$("#phase").hover(function() {
    $("path[id*=phase]").show(150);
  }, function() {
    $("path[id*=phase]").hide();
});

$("#bots").hover(function() {
    $("path[id*=bots]").show(150);
  }, function() {
    $("path[id*=bots]").hide();
});

$("#headdress").hover(function() {
    $("path[id*=headdress]").show(150);
  }, function() {
    $("path[id*=headdress]").hide();
});

$("#buckler").hover(function() {
    $("path[id*=buckler]").show(150);
  }, function() {
    $("path[id*=buckler]").hide();
});

$("#solar").hover(function() {
    $("path[id*=solar]").show(150);
  }, function() {
    $("path[id*=solar]").hide();
});

$("#glimmer").hover(function() {
    $("path[id*=glimmer]").show(150);
  }, function() {
    $("path[id*=glimmer]").hide();
});

$("#hotd").hover(function() {
    $("path[id*=hotd]").show(150);
  }, function() {
    $("path[id*=hotd]").hide();
});

$("#vanguard").hover(function() {
    $("path[id*=vanguard]").show(150);
  }, function() {
    $("path[id*=vanguard]").hide();
});

$("#mek").hover(function() {
    $("path[id*=mek]").show(150);
  }, function() {
    $("path[id*=mek]").hide();
});

$("#hood").hover(function() {
    $("path[id*=hood]").show(150);
  }, function() {
    $("path[id*=hood]").hide();
});

$("#vlads").hover(function() {
    $("path[id*=vlads]").show(150);
  }, function() {
    $("path[id*=vlads]").hide();
});

$("#platemail").hover(function() {
    $("path[id*=platemail]").show(150);
  }, function() {
    $("path[id*=platemail]").hide();
});

$("#refresher").hover(function() {
    $("path[id*=refresher]").show(150);
  }, function() {
    $("path[id*=refresher]").hide();
});

$("#crimson").hover(function() {
    $("path[id*=crimson]").show(150);
  }, function() {
    $("path[id*=crimson]").hide();
});

$("#greaves").hover(function() {
    $("path[id*=greaves]").show(150);
  }, function() {
    $("path[id*=greaves]").hide();
});

$("#pipe").hover(function() {
    $("path[id*=pipe]").show(150);
  }, function() {
    $("path[id*=pipe]").hide();
});

$("#lotus").hover(function() {
    $("path[id*=lotus]").show(150);
  }, function() {
    $("path[id*=lotus]").hide();
});

$("#ac").hover(function() {
    $("path[id*=ac]").show(150);
  }, function() {
    $("path[id*=ac]").hide();
});

