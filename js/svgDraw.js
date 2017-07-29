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

$("#str").on("click", function() {
    $("#str").hide();
    $("#strp").show();
    $("#belt-sange").show(150);
    $("#club-sange").show(150);
    $("#gauntlets-woodsman").show(150);
    $("#sange-halberd").show(150);
    $("#sange-gjalla").show(150);
    $("#sange-sny").show(150);
    $("#sange-snl").show(150);
    $("#sange-trio").show(150);
    $("#echo-wyrmslayer").show(150);
    $("#sny-trio").show(150);
    $("#snl-trio").show(150);
    $("#reaver-heart").show(150);
    $("#reaver-satanic").show(150);
    $("#reaver-pauldron").show(150);
    $("#club-echo").show(150);
    $("#gauntlets-bracer").show(150);
    $("#bracer-drum").show(150);
    $("#bracer-atos").show(150);
});
$("#strp").on("click", function() {
    $("#strp").hide();
    $("#str").show();
    $("#belt-sange").hide();
    $("#club-sange").hide();
    $("#gauntlets-woodsman").hide();
    $("#sange-halberd").hide();
    $("#sange-gjalla").hide();
    $("#sange-sny").hide();
    $("#sange-snl").hide();
    $("#sange-trio").hide();
    $("#echo-wyrmslayer").hide();
    $("#sny-trio").hide();
    $("#snl-trio").hide();
    $("#reaver-heart").hide();
    $("#reaver-satanic").hide();
    $("#reaver-pauldron").hide();
    $("#club-echo").hide();
    $("#gauntlets-bracer").hide();
    $("#bracer-drum").hide();
    $("#bracer-atos").hide();
});

$("#int").on("click", function() {
    $("#int").hide();
    $("#intp").show();
    $("#robe-lucen").show(150);
    $("#staff-lucen").show(150);
    $("#mantle-frost").show(150);
    $("#lucen-spellblade").show(150);
    $("#lucen-seraph").show(150);
    $("#lucen-snl").show(150);
    $("#lucen-lny").show(150);
    $("#lucen-trio").show(150);
    $("#force-pike").show(150);
    $("#snl-trio").show(150);
    $("#lny-trio").show(150);
    $("#mystic-sheep").show(150);
    $("#mystic-shiva").show(150);
    $("#mystic-ocore").show(150);
    $("#force-seraph").show(150);
    $("#staff-force").show(150);
    $("#mantle-null").show(150);
    $("#null-dagon").show(150);
    $("#null-veil").show(150);
});
$("#intp").on("click", function() {
    $("#intp").hide();
    $("#int").show();
    $("#robe-lucen").hide();
    $("#staff-lucen").hide();
    $("#mantle-frost").hide();
    $("#lucen-spellblade").hide();
    $("#lucen-seraph").hide();
    $("#lucen-snl").hide();
    $("#lucen-lny").hide();
    $("#lucen-trio").hide();
    $("#force-pike").hide();
    $("#snl-trio").hide();
    $("#lny-trio").hide();
    $("#mystic-sheep").hide();
    $("#mystic-shiva").hide();
    $("#mystic-ocore").hide();
    $("#force-seraph").hide();
    $("#staff-force").hide();
    $("#mantle-null").hide();
    $("#null-dagon").hide();
    $("#null-veil").hide();
});

$("#agi").on("click", function() {
    $("#agi").hide();
    $("#agip").show();
    $("#band-yasha").show(150);
    $("#blade-yasha").show(150);
    $("#slippers-pms").show(150);
    $("#yasha-manta").show(150);
    $("#yasha-hayabusa").show(150);
    $("#yasha-sny").show(150);
    $("#yasha-lny").show(150);
    $("#dlance-pike").show(150);
    $("#dlance-wyrmslayer").show(150);
    $("#sny-trio").show(150);
    $("#lny-trio").show(150);
    $("#eagle-butterfly").show(150);
    $("#eagle-eblade").show(150);
    $("#eagle-wkb").show(150);
    $("#band-dlance").show(150);
    $("#slippers-wraith").show(150);
    $("#wraith-aquila").show(150);
    $("#wraith-squire").show(150);
});
$("#agip").on("click", function() {
    $("#agip").hide();
    $("#agi").show();
    $("#band-yasha").hide();
    $("#blade-yasha").hide();
    $("#slippers-pms").hide();
    $("#yasha-manta").hide();
    $("#yasha-hayabusa").hide();
    $("#yasha-sny").hide();
    $("#yasha-lny").hide();
    $("#dlance-pike").hide();
    $("#dlance-wyrmslayer").hide();
    $("#sny-trio").hide();
    $("#snl-trio").hide();
    $("#lny-trio").hide();
    $("#eagle-butterfly").hide();
    $("#eagle-eblade").hide();
    $("#eagle-wkb").hide();
    $("#band-dlance").hide();
    $("#slippers-wraith").hide();
    $("#wraith-aquila").hide();
    $("#wraith-squire").hide();
});

$("#belt").hover(function() {
    $("#belt-sange").show(150);
    $("#belt-treads").show(150);
    $("#belt-basher").show(150);
    $("#belt-necro").show(150);
  }, function() {
    $("#belt-sange").hide();
    $("#belt-treads").hide();
    $("#belt-basher").hide();
    $("#belt-necro").hide();
});

$("#club").hover(function() {
    $("#club-sange").show(150);
    $("#club-dlance").show(150);
    $("#club-echo").show(150);
    $("#club-bkb").show(150);
    $("#club-aghs").show(150);
  }, function() {
    $("#club-sange").hide();
    $("#club-dlance").hide();
    $("#club-echo").hide();
    $("#club-bkb").hide();
    $("#club-aghs").hide();
});

$("#halberd").hover(function() {
    $("#belt-sange").show(150);
    $("#club-sange").show(150);
    $("#sange-halberd").show(150);
    $("#talisman-halberd").show(150);
  }, function() {
    $("#belt-sange").hide();
    $("#club-sange").hide();
    $("#sange-halberd").hide();
    $("#talisman-halberd").hide();
});

$("#gjalla").hover(function() {
    $("#belt-sange").show(150);
    $("#club-sange").show(150);
    $("#sange-gjalla").show(150);
    $("#ghost-gjalla").show(150);
    $("#wand-gjalla").show(150);
    $("#branch-wand").show(150);
    $("#circlet-wand").show(150);
    $("#stick-wand").show(150);
  }, function() {
    $("#belt-sange").hide();
    $("#club-sange").hide();
    $("#sange-gjalla").hide();
    $("#ghost-gjalla").hide();
    $("#wand-gjalla").hide();
    $("#branch-wand").hide();
    $("#circlet-wand").hide();
    $("#stick-wand").hide();
});

$("#sange").hover(function() {
    $("#belt-sange").show(150);
    $("#club-sange").show(150);
    $("#sange-halberd").show(150);
    $("#sange-gjalla").show(150);
    $("#sange-sny").show(150);
    $("#sange-snl").show(150);
    $("#sange-trio").show(150);
  }, function() {
    $("#belt-sange").hide();
    $("#club-sange").hide();
    $("#sange-halberd").hide();
    $("#sange-gjalla").hide();
    $("#sange-sny").hide();
    $("#sange-snl").hide();
    $("#sange-trio").hide();
});

$("#robe").hover(function() {
    $("#robe-lucen").show(150);
    $("#robe-treads").show(150);
    $("#robe-oblivion").show(150);
    $("#robe-blademail").show(150);
    $("#robe-diffu").show(150);
  }, function() {
    $("#robe-lucen").hide();
    $("#robe-treads").hide();
    $("#robe-oblivion").hide();
    $("#robe-blademail").hide();
    $("#robe-diffu").hide();
});

$("#staff").hover(function() {
    $("#staff-lucen").show(150);
    $("#staff-force").show(150);
    $("#staff-atos").show(150);
    $("#staff-dagon").show(150);
    $("#staff-euls").show(150);
    $("#staff-necro").show(150);
    $("#staff-aghs").show(150);
  }, function() {
    $("#staff-lucen").hide();
    $("#staff-force").hide();
    $("#staff-atos").hide();
    $("#staff-dagon").hide();
    $("#staff-euls").hide();
    $("#staff-necro").hide();
    $("#staff-aghs").hide();
});

$("#spellblade").hover(function() {
    $("#robe-lucen").show(150);
    $("#staff-lucen").show(150);
    $("#lucen-spellblade").show(150);
    $("#aether-spellblade").show(150);
    $("#void-aether").show(150);
    $("#energy-aether").show(150);
  }, function() {
    $("#robe-lucen").hide();
    $("#staff-lucen").hide();
    $("#lucen-spellblade").hide();
    $("#aether-spellblade").hide();
    $("#void-aether").hide();
    $("#energy-aether").hide();
});

$("#seraph").hover(function() {
    $("#robe-lucen").show(150);
    $("#staff-lucen").show(150);
    $("#lucen-seraph").show(150);
    $("#void-seraph").show(150);
    $("#force-seraph").show(150);
    $("#roh-force").show(150);
    $("#staff-force").show(150);
  }, function() {
    $("#robe-lucen").hide();
    $("#staff-lucen").hide();
    $("#lucen-seraph").hide();
    $("#void-seraph").hide();
    $("#force-seraph").hide();
    $("#roh-force").hide();
    $("#staff-force").hide();
});

$("#lucen").hover(function() {
    $("#robe-lucen").show(150);
    $("#staff-lucen").show(150);
    $("#lucen-spellblade").show(150);
    $("#lucen-seraph").show(150);
    $("#lucen-snl").show(150);
    $("#lucen-lny").show(150);
    $("#lucen-trio").show(150);
  }, function() {
    $("#robe-lucen").hide();
    $("#staff-lucen").hide();
    $("#lucen-spellblade").hide();
    $("#lucen-seraph").hide();
    $("#lucen-snl").hide();
    $("#lucen-lny").hide();
    $("#lucen-trio").hide();
});

$("#band").hover(function() {
    $("#band-yasha").show(150);
    $("#band-dlance").show(150);
  }, function() {
    $("#band-yasha").hide();
    $("#band-dlance").hide();
});

$("#blade").hover(function() {
    $("#blade-yasha").show(150);
    $("#blade-diffu").show(150);
    $("#blade-aghs").show(150);
  }, function() {
    $("#blade-yasha").hide();
    $("#blade-diffu").hide();
    $("#blade-aghs").hide();
});

$("#manta").hover(function() {
    $("#band-yasha").show(150);
    $("#blade-yasha").show(150);
    $("#yasha-manta").show(150);
    $("#ultimateorb-manta").show(150);
  }, function() {
    $("#band-yasha").hide();
    $("#blade-yasha").hide();
    $("#yasha-manta").hide();
    $("#ultimateorb-manta").hide();
});

$("#hayabusa").hover(function() {
    $("#band-yasha").show(150);
    $("#blade-yasha").show(150);
    $("#yasha-hayabusa").show(150);
    $("#demon-hayabusa").show(150);
    $("#lace-hayabusa").show(150);
  }, function() {
    $("#band-yasha").hide();
    $("#blade-yasha").hide();
    $("#yasha-hayabusa").hide();
    $("#demon-hayabusa").hide();
    $("#lace-hayabusa").hide();
});

$("#yasha").hover(function() {
    $("#band-yasha").show(150);
    $("#blade-yasha").show(150);
    $("#yasha-manta").show(150);
    $("#yasha-hayabusa").show(150);
    $("#yasha-sny").show(150);
    $("#yasha-lny").show(150);
    $("#yasha-trio").show(150);
  }, function() {
    $("#band-yasha").hide();
    $("#blade-yasha").hide();
    $("#yasha-manta").hide();
    $("#yasha-hayabusa").hide();
    $("#yasha-sny").hide();
    $("#yasha-lny").hide();
    $("#yasha-trio").hide();
});

$("#trio").hover(function() {
    $("#belt-sange").show(150);
    $("#club-sange").show(150);
    $("#robe-lucen").show(150);
    $("#staff-lucen").show(150);
    $("#band-yasha").show(150);
    $("#blade-yasha").show(150);
    $("#sange-trio").show(150);
    $("#lucen-trio").show(150);
    $("#yasha-trio").show(150);
    $("#sny-trio").show(150);
    $("#snl-trio").show(150);
    $("#lny-trio").show(150);
  }, function() {
    $("#belt-sange").hide();
    $("#club-sange").hide();
    $("#robe-lucen").hide();
    $("#staff-lucen").hide();
    $("#band-yasha").hide();
    $("#blade-yasha").hide();
    $("#sange-trio").hide();
    $("#lucen-trio").hide();
    $("#yasha-trio").hide();
    $("#sny-trio").hide();
    $("#snl-trio").hide();
    $("#lny-trio").hide();
});

$("#sny").hover(function() {
    $("#belt-sange").show(150);
    $("#club-sange").show(150);
    $("#band-yasha").show(150);
    $("#blade-yasha").show(150);
    $("#sange-sny").show(150);
    $("#yasha-sny").show(150);
  }, function() {
    $("#sange-sny").hide();
    $("#yasha-sny").hide();
    $("#belt-sange").hide();
    $("#club-sange").hide();
    $("#band-yasha").hide();
    $("#blade-yasha").hide();
});

$("#snl").hover(function() {
    $("#sange-snl").show(150);
    $("#lucen-snl").show(150);
    $("#belt-sange").show(150);
    $("#club-sange").show(150);
    $("#robe-lucen").show(150);
    $("#staff-lucen").show(150);
  }, function() {
    $("#belt-sange").hide();
    $("#club-sange").hide();
    $("#robe-lucen").hide();
    $("#staff-lucen").hide();
    $("#sange-snl").hide();
    $("#lucen-snl").hide();
});

$("#lny").hover(function() {
    $("#lucen-lny").show(150);
    $("#yasha-lny").show(150);
    $("#robe-lucen").show(150);
    $("#staff-lucen").show(150);
    $("#band-yasha").show(150);
    $("#blade-yasha").show(150);
  }, function() {
    $("#lucen-lny").hide();
    $("#yasha-lny").hide();
    $("#robe-lucen").hide();
    $("#staff-lucen").hide();
    $("#band-yasha").hide();
    $("#blade-yasha").hide();
});

$("#gauntlets").hover(function() {
    $("#gauntlets-woodsman").show(150);
    $("#gauntlets-bracer").show(150);
  }, function() {
    $("#gauntlets-woodsman").hide();
    $("#gauntlets-bracer").hide();
});

$("#woodsman").hover(function() {
    $("#gauntlets-woodsman").show(150);
    $("#rop-woodsman").show(150);
    $("#branch-woodsman").show(150);
  }, function() {
    $("#gauntlets-woodsman").hide();
    $("#rop-woodsman").hide();
    $("#branch-woodsman").hide();
});

$("#mantle").hover(function() {
    $("#mantle-frost").show(150);
    $("#mantle-null").show(150);
  }, function() {
    $("#mantle-frost").hide();
    $("#mantle-null").hide();
});

$("#frost").hover(function() {
    $("#mantle-frost").show(150);
    $("#oov-frost").show(150);
    $("#qb-frost").show(150);
  }, function() {
    $("#mantle-frost").hide();
    $("#oov-frost").hide();
    $("#qb-frost").hide();
});

$("#slippers").hover(function() {
    $("#slippers-pms").show(150);
    $("#slippers-wraith").show(150);
  }, function() {
    $("#slippers-pms").hide();
    $("#slippers-wraith").hide();
});

$("#pms").hover(function() {
    $("#slippers-pms").show(150);
    $("#stout-pms").show(150);
  }, function() {
    $("#slippers-pms").hide();
    $("#stout-pms").hide();
});

$("#bracer").hover(function() {
    $("#gauntlets-bracer").show(150);
    $("#circlet-bracer").show(150);
    $("#bracer-drum").show(150);
    $("#bracer-atos").show(150);
  }, function() {
    $("#gauntlets-bracer").hide();
    $("#circlet-bracer").hide();
    $("#bracer-drum").hide();
    $("#bracer-atos").hide();
});

$("#drum").hover(function() {
    $("#gauntlets-bracer").show(150);
    $("#circlet-bracer").show(150);
    $("#bracer-drum").show(150);
    $("#sage-drum").show(150);
    $("#lace-drum").show(150);
  }, function() {
    $("#gauntlets-bracer").hide();
    $("#circlet-bracer").hide();
    $("#bracer-drum").hide();
    $("#sage-drum").hide();
    $("#lace-drum").hide();
});

$("#atos").hover(function() {
    $("#gauntlets-bracer").show(150);
    $("#circlet-bracer").show(150);
    $("#staff-atos").show(150);
    $("#bracer-atos").show(150);
  }, function() {
    $("#gauntlets-bracer").hide();
    $("#circlet-bracer").hide();
    $("#staff-atos").hide();
    $("#bracer-atos").hide();
});

$("#null").hover(function() {
    $("#mantle-null").show(150);
    $("#circlet-null").show(150);
    $("#null-dagon").show(150);
    $("#null-veil").show(150);
  }, function() {
    $("#mantle-null").hide();
    $("#circlet-null").hide();
    $("#null-dagon").hide();
    $("#null-veil").hide();
});

$("#dagon").hover(function() {
    $("#mantle-null").show(150);
    $("#circlet-null").show(150);
    $("#staff-dagon").show(150);
    $("#null-dagon").show(150);
  }, function() {
    $("#mantle-null").hide();
    $("#circlet-null").hide();
    $("#staff-dagon").hide();
    $("#null-dagon").hide();
});

$("#veil").hover(function() {
    $("#mantle-null").show(150);
    $("#circlet-null").show(150);
    $("#null-veil").show(150);
    $("#hoiw-veil").show(150);
  }, function() {
    $("#mantle-null").hide();
    $("#circlet-null").hide();
    $("#null-veil").hide();
    $("#hoiw-veil").hide();
});

$("#wraith").hover(function() {
    $("#slippers-wraith").show(150);
    $("#circlet-wraith").show(150);
    $("#wraith-aquila").show(150);
    $("#wraith-squire").show(150);
  }, function() {
    $("#slippers-wraith").hide();
    $("#circlet-wraith").hide();
    $("#wraith-aquila").hide();
    $("#wraith-squire").hide();
});

$("#aquila").hover(function() {
    $("#slippers-wraith").show(150);
    $("#circlet-wraith").show(150);
    $("#wraith-aquila").show(150);
    $("#basi-aquila").show(150);
    $("#sage-basi").show(150);
    $("#rop-basi").show(150);
  }, function() {
    $("#slippers-wraith").hide();
    $("#circlet-wraith").hide();
    $("#wraith-aquila").hide();
    $("#basi-aquila").hide();
    $("#sage-basi").hide();
    $("#rop-basi").hide();
});

$("#squire").hover(function() {
    $("#slippers-wraith").show(150);
    $("#circlet-wraith").show(150);
    $("#wraith-squire").show(150);
    $("#clay-squire").show(150);
  }, function() {
    $("#slippers-wraith").hide();
    $("#circlet-wraith").hide();
    $("#wraith-squire").hide();
    $("#clay-squire").hide();
});

$("#dlance").hover(function() {
    $("#dlance-pike").show(150);
    $("#dlance-wyrmslayer").show(150);
    $("#band-dlance").show(150);
    $("#club-dlance").show(150);
  }, function() {
    $("#dlance-pike").hide();
    $("#dlance-wyrmslayer").hide();
    $("#band-dlance").hide();
    $("#club-dlance").hide();
});

$("#pike").hover(function() {
    $("#band-dlance").show(150);
    $("#club-dlance").show(150);
    $("#force-pike").show(150);
    $("#dlance-pike").show(150);
    $("#roh-force").show(150);
    $("#staff-force").show(150);
  }, function() {
    $("#band-dlance").hide();
    $("#club-dlance").hide();
    $("#force-pike").hide();
    $("#dlance-pike").hide();
    $("#roh-force").hide();
    $("#staff-force").hide();
});

$("#oblivion").hover(function() {
    $("#oblivion-echo").show(150);
    $("#oblivion-orchid").show(150);
    $("#sage-oblivion").show(150);
    $("#robe-oblivion").show(150);
    $("#qstaff-oblivion").show(150);
  }, function() {
    $("#oblivion-echo").hide();
    $("#oblivion-orchid").hide();
    $("#sage-oblivion").hide();
    $("#robe-oblivion").hide();
    $("#qstaff-oblivion").hide();
});

$("#echo").hover(function() {
    $("#echo-wyrmslayer").show(150);
    $("#club-echo").show(150);
    $("#oblivion-echo").show(150);
    $("#sage-oblivion").show(150);
    $("#robe-oblivion").show(150);
    $("#qstaff-oblivion").show(150);
  }, function() {
    $("#echo-wyrmslayer").hide();
    $("#club-echo").hide();
    $("#oblivion-echo").hide();
    $("#sage-oblivion").hide();
    $("#robe-oblivion").hide();
    $("#qstaff-oblivion").hide();
});

$("#force").hover(function() {
    $("#force-pike").show(150);
    $("#force-seraph").show(150);
    $("#roh-force").show(150);
    $("#staff-force").show(150);
  }, function() {
    $("#force-pike").hide();
    $("#force-seraph").hide();
    $("#roh-force").hide();
    $("#staff-force").hide();
});

$("#wyrmslayer").hover(function() {
    $("#band-dlance").show(150);
    $("#club-dlance").show(150);
    $("#dlance-wyrmslayer").show(150);
    $("#echo-wyrmslayer").show(150);
    $("#club-echo").show(150);
    $("#oblivion-echo").show(150);
    $("#sage-oblivion").show(150);
    $("#robe-oblivion").show(150);
    $("#qstaff-oblivion").show(150);
  }, function() {
    $("#band-dlance").hide();
    $("#club-dlance").hide();
    $("#dlance-wyrmslayer").hide();
    $("#echo-wyrmslayer").hide();
    $("#club-echo").hide();
    $("#oblivion-echo").hide();
    $("#sage-oblivion").hide();
    $("#robe-oblivion").hide();
    $("#qstaff-oblivion").hide();
});

$("#reaver").hover(function() {
    $("#reaver-heart").show(150);
    $("#reaver-satanic").show(150);
    $("#reaver-pauldron").show(150);
  }, function() {
    $("#reaver-heart").hide();
    $("#reaver-satanic").hide();
    $("#reaver-pauldron").hide();
});

$("#heart").hover(function() {
    $("#reaver-heart").show(150);
    $("#vit-heart").show(150);
  }, function() {
    $("#reaver-heart").hide();
    $("#vit-heart").hide();
});

$("#satanic").hover(function() {
    $("#reaver-satanic").show(150);
    $("#mithham-satanic").show(150);
    $("#morbid-satanic").show(150);
  }, function() {
    $("#reaver-satanic").hide();
    $("#mithham-satanic").hide();
    $("#morbid-satanic").hide();
});

$("#pauldron").hover(function() {
    $("#reaver-pauldron").show(150);
    $("#hotd-pauldron").show(150);
    $("#talon-pauldron").show(150);
  }, function() {
    $("#reaver-pauldron").hide();
    $("#hotd-pauldron").hide();
    $("#talon-pauldron").hide();
});

$("#mystic").hover(function() {
    $("#mystic-sheep").show(150);
    $("#mystic-shiva").show(150);
    $("#mystic-ocore").show(150);
  }, function() {
    $("#mystic-sheep").hide();
    $("#mystic-shiva").hide();
    $("#mystic-ocore").hide();
});

$("#sheep").hover(function() {
    $("#mystic-sheep").show(150);
    $("#ultimateorb-sheep").show(150);
    $("#void-sheep").show(150);
  }, function() {
    $("#mystic-sheep").hide();
    $("#ultimateorb-sheep").hide();
    $("#void-sheep").hide();
});

$("#shiva").hover(function() {
    $("#mystic-shiva").show(150);
    $("#platemail-shiva").show(150);
  }, function() {
    $("#mystic-shiva").hide();
    $("#platemail-shiva").hide();
});

$("#ocore").hover(function() {
    $("#mystic-ocore").show(150);
    $("#soulbooster-ocore").show(150);
    $("#vit-soulbooster").show(150);
    $("#energy-soulbooster").show(150);
    $("#pb-soulbooster").show(150);
  }, function() {
    $("#mystic-ocore").hide();
    $("#soulbooster-ocore").hide();
    $("#vit-soulbooster").hide();
    $("#energy-soulbooster").hide();
    $("#pb-soulbooster").hide();
});

$("#eagle").hover(function() {
    $("#eagle-butterfly").show(150);
    $("#eagle-eblade").show(150);
    $("#eagle-wkb").show(150);
  }, function() {
    $("#eagle-butterfly").hide();
    $("#eagle-eblade").hide();
    $("#eagle-wkb").hide();
});

$("#butterfly").hover(function() {
    $("#eagle-butterfly").show(150);
    $("#talisman-butterfly").show(150);
    $("#qstaff-butterfly").show(150);
  }, function() {
    $("#eagle-butterfly").hide();
    $("#talisman-butterfly").hide();
    $("#qstaff-butterfly").hide();
});

$("#eblade").hover(function() {
    $("#eagle-eblade").show(150);
    $("#ghost-eblade").show(150);
  }, function() {
    $("#eagle-eblade").hide();
    $("#ghost-eblade").hide();
});

$("#wkb").hover(function() {
    $("#eagle-wkb").show(150);
    $("#shadowam-wkb").show(150);
    $("#blight-wkb").show(150);
  }, function() {
    $("#eagle-wkb").hide();
    $("#shadowam-wkb").hide();
    $("#blight-wkb").hide();
});

$("#vermcloak").hover(function() {
    $("#reaver-vermcloak").show(150);
    $("#mystic-vermcloak").show(150);
    $("#eagle-vermcloak").show(150);
  }, function() {
    $("#reaver-vermcloak").hide();
    $("#mystic-vermcloak").hide();
    $("#eagle-vermcloak").hide();
});

$("#mango").hover(function() {
    $("#mango-soulring").show(150);
  }, function() {
    $("#mango-soulring").hide();
});

$("#irain").hover(function() {
    $("#irain-urn").show(150);
  }, function() {
    $("#irain-urn").hide();
});

$("#ror").hover(function() {
    $("#ror-soulring").show(150);
    $("#ror-headdress").show(150);
    $("#ror-hood").show(150);
    $("#ror-tranquil").show(150);
  }, function() {
    $("#ror-soulring").hide();
    $("#ror-headdress").hide();
    $("#ror-hood").hide();
    $("#ror-tranquil").hide();
});

$("#sage").hover(function() {
    $("#sage-moc").show(150);
    $("#sage-oblivion").show(150);
    $("#sage-basi").show(150);
    $("#sage-soulring").show(150);
    $("#sage-drum").show(150);
  }, function() {
    $("#sage-moc").hide();
    $("#sage-oblivion").hide();
    $("#sage-basi").hide();
    $("#sage-soulring").hide();
    $("#sage-drum").hide();
});

$("#roh").hover(function() {
    $("#roh-hood").show(150);
    $("#roh-perseverance").show(150);
    $("#roh-vanguard").show(150);
    $("#roh-force").show(150);
    $("#roh-hotd").show(150);
  }, function() {
    $("#roh-hood").hide();
    $("#roh-perseverance").hide();
    $("#roh-vanguard").hide();
    $("#roh-force").hide();
    $("#roh-hotd").hide();
});

$("#void").hover(function() {
    $("#void-euls").show(150);
    $("#void-sheep").show(150);
    $("#void-perseverance").show(150);
    $("#void-aether").show(150);
    $("#void-seraph").show(150);
  }, function() {
    $("#void-euls").hide();
    $("#void-sheep").hide();
    $("#void-perseverance").hide();
    $("#void-aether").hide();
    $("#void-seraph").hide();
});

$("#stick").hover(function() {
    $("#stick-wand").show(150);
  }, function() {
    $("#stick-wand").hide();
});

$("#stout").hover(function() {
    $("#stout-pms").show(150);
    $("#stout-vanguard").show(150);
  }, function() {
    $("#stout-pms").hide();
    $("#stout-vanguard").hide();
});

$("#soulring").hover(function() {
    $("#mango-soulring").show(150);
    $("#ror-soulring").show(150);
    $("#sage-soulring").show(150);
    $("#soulring-bloodstone").show(150);
  }, function() {
    $("#mango-soulring").hide();
    $("#ror-soulring").hide();
    $("#sage-soulring").hide();
    $("#soulring-bloodstone").hide();
});

$("#perseverance").hover(function() {
    $("#void-perseverance").show(150);
    $("#roh-perseverance").show(150);
    $("#perseverance-refresher").show(150);
    $("#perseverance-linkens").show(150);
    $("#perseverance-lotus").show(150);
    $("#perseverance-bfury").show(150);
  }, function() {
    $("#void-perseverance").hide();
    $("#roh-perseverance").hide();
    $("#perseverance-refresher").hide();
    $("#perseverance-linkens").hide();
    $("#perseverance-lotus").hide();
    $("#perseverance-bfury").hide();
});

$("#branch").hover(function() {
    $("#branch-headdress").show(150);
    $("#branch-buckler").show(150);
    $("#branch-wand").show(150);
    $("#branch-woodsman").show(150);
  }, function() {
    $("#branch-headdress").hide();
    $("#branch-buckler").hide();
    $("#branch-wand").hide();
    $("#branch-woodsman").hide();
});

$("#circlet").hover(function() {
    $("#circlet-bracer").show(150);
    $("#circlet-null").show(150);
    $("#circlet-wraith").show(150);
    $("#circlet-wand").show(150);
    $("#circlet-urn").show(150);
  }, function() {
    $("#circlet-bracer").hide();
    $("#circlet-null").hide();
    $("#circlet-wraith").hide();
    $("#circlet-wand").hide();
    $("#circlet-urn").hide();
});

$("#vit").hover(function() {
    $("#vit-heart").show(150);
    $("#vit-soulbooster").show(150);
    $("#vit-vanguard").show(150);
  }, function() {
    $("#vit-heart").hide();
    $("#vit-soulbooster").hide();
    $("#vit-vanguard").hide();
});

$("#energy").hover(function() {
    $("#energy-arcane").show(150);
    $("#energy-soulbooster").show(150);
    $("#energy-aether").show(150);
    $("#energy-lotus").show(150);
  }, function() {
    $("#energy-arcane").hide();
    $("#energy-soulbooster").hide();
    $("#energy-aether").hide();
    $("#energy-lotus").hide();
});

$("#pb").hover(function() {
    $("#pb-aghs").show(150);
    $("#pb-skadi").show(150);
    $("#pb-soulbooster").show(150);
  }, function() {
    $("#pb-aghs").hide();
    $("#pb-skadi").hide();
    $("#pb-soulbooster").hide();
});

$("#talisman").hover(function() {
    $("#talisman-butterfly").show(150);
    $("#talisman-halberd").show(150);
    $("#talisman-solar").show(150);
  }, function() {
    $("#talisman-butterfly").hide();
    $("#talisman-halberd").hide();
    $("#talisman-solar").hide();
});

$("#cloak").hover(function() {
    $("#cloak-hood").show(150);
    $("#cloak-glimmer").show(150);
  }, function() {
    $("#cloak-hood").hide();
    $("#cloak-glimmer").hide();
});

$("#rop").hover(function() {
    $("#rop-basi").show(150);
    $("#rop-talon").show(150);
    $("#rop-urn").show(150);
    $("#rop-woodsman").show(150);
  }, function() {
    $("#rop-basi").hide();
    $("#rop-talon").hide();
    $("#rop-urn").hide();
    $("#rop-woodsman").hide();
});

$("#chainmail").hover(function() {
    $("#chainmail-moc").show(150);
    $("#chainmail-buckler").show(150);
    $("#chainmail-blademail").show(150);
    $("#chainmail-ac").show(150);
  }, function() {
    $("#chainmail-moc").hide();
    $("#chainmail-buckler").hide();
    $("#chainmail-blademail").hide();
    $("#chainmail-ac").hide();
});

$("#hoiw").hover(function() {
    $("#hoiw-armlet").show(150);
    $("#hoiw-veil").show(150);
  }, function() {
    $("#hoiw-armlet").hide();
    $("#hoiw-veil").hide();
});

$("#soulbooster").hover(function() {
    $("#soulbooster-bloodstone").show(150);
    $("#soulbooster-ocore").show(150);
    $("#vit-soulbooster").show(150);
    $("#energy-soulbooster").show(150);
    $("#pb-soulbooster").show(150);
  }, function() {
    $("#soulbooster-bloodstone").hide();
    $("#soulbooster-ocore").hide();
    $("#vit-soulbooster").hide();
    $("#energy-soulbooster").hide();
    $("#pb-soulbooster").hide();
});

$("#aether").hover(function() {
    $("#void-aether").show(150);
    $("#energy-aether").show(150);
    $("#aether-spellblade").show(150);
  }, function() {
    $("#void-aether").hide();
    $("#energy-aether").hide();
    $("#aether-spellblade").hide();
});

$("#lace").hover(function() {
    $("#lace-euls").show(150);
    $("#lace-drum").show(150);
    $("#lace-tranquil").show(150);
    $("#lace-hayabusa").show(150);
  }, function() {
    $("#lace-euls").hide();
    $("#lace-drum").hide();
    $("#lace-tranquil").hide();
    $("#lace-hayabusa").hide();
});

$("#boots").hover(function() {
    $("#boots-arcane").show(150);
    $("#boots-treads").show(150);
    $("#boots-phase").show(150);
    $("#boots-tranquil").show(150);
    $("#boots-bots").show(150);
  }, function() {
    $("#boots-arcane").hide();
    $("#boots-treads").hide();
    $("#boots-phase").hide();
    $("#boots-tranquil").hide();
    $("#boots-bots").hide();
});

$("#wand").hover(function() {
    $("#stick-wand").show(150);
    $("#branch-wand").show(150);
    $("#circlet-wand").show(150);
    $("#wand-gjalla").show(150);
  }, function() {
    $("#stick-wand").hide();
    $("#branch-wand").hide();
    $("#circlet-wand").hide();
    $("#wand-gjalla").hide();
});

$("#talon").hover(function() {
    $("#qb-talon").show(150);
    $("#rop-talon").show(150);
    $("#talon-pauldron").show(150);
  }, function() {
    $("#qb-talon").hide();
    $("#rop-talon").hide();
    $("#talon-pauldron").hide();
});

$("#urn").hover(function() {
    $("#rop-urn").show(150);
    $("#circlet-urn").show(150);
    $("#irain-urn").show(150);
  }, function() {
    $("#rop-urn").hide();
    $("#circlet-urn").hide();
    $("#irain-urn").hide();
});

$("#basi").hover(function() {
    $("#rop-basi").show(150);
    $("#sage-basi").show(150);
    $("#basi-aquila").show(150);
    $("#basi-vlads").show(150);
  }, function() {
    $("#rop-basi").hide();
    $("#sage-basi").hide();
    $("#basi-aquila").hide();
    $("#basi-vlads").hide();
});

$("#bloodstone").hover(function() {
    $("#soulring-bloodstone").show(150);
    $("#soulbooster-bloodstone").show(150);
  }, function() {
    $("#soulring-bloodstone").hide();
    $("#soulbooster-bloodstone").hide();
});

$("#moc").hover(function() {
    $("#sage-moc").show(150);
    $("#blight-moc").show(150);
    $("#chainmail-moc").show(150);
    $("#moc-solar").show(150);
  }, function() {
    $("#sage-moc").hide();
    $("#blight-moc").hide();
    $("#chainmail-moc").hide();
    $("#moc-solar").hide();
});

$("#arcane").hover(function() {
    $("#boots-arcane").show(150);
    $("#energy-arcane").show(150);
    $("#arcane-greaves").show(150);
  }, function() {
    $("#boots-arcane").hide();
    $("#energy-arcane").hide();
    $("#arcane-greaves").hide();
});

$("#tranquil").hover(function() {
    $("#lace-tranquil").show(150);
    $("#ror-tranquil").show(150);
    $("#boots-tranquil").show(150);
  }, function() {
    $("#lace-tranquil").hide();
    $("#ror-tranquil").hide();
    $("#boots-tranquil").hide();
});

$("#treads").hover(function() {
    $("#goh-treads").show(150);
    $("#robe-treads").show(150);
    $("#belt-treads").show(150);
    $("#band-treads").show(150);
    $("#boots-treads").show(150);
  }, function() {
    $("#goh-treads").hide();
    $("#robe-treads").hide();
    $("#belt-treads").hide();
    $("#band-treads").hide();
    $("#boots-treads").hide();
});

$("#phase").hover(function() {
    $("#boa-phase").show(150);
    $("#boots-phase").show(150);
  }, function() {
    $("#boa-phase").hide();
    $("#boots-phase").hide();
});

$("#bots").hover(function() {
    $("#boots-bots").show(150);
  }, function() {
    $("#boots-bots").hide();
});

$("#headdress").hover(function() {
    $("#branch-headdress").show(150);
    $("#ror-headdress").show(150);
    $("#headdress-pipe").show(150);
    $("#headdress-mek").show(150);
    $("#headdress-vlads").show(150);
    $("#headdress-hotd").show(150);
  }, function() {
    $("#branch-headdress").hide();
    $("#ror-headdress").hide();
    $("#headdress-pipe").hide();
    $("#headdress-mek").hide();
    $("#headdress-vlads").hide();
    $("#headdress-hotd").hide();
});

$("#buckler").hover(function() {
    $("#branch-buckler").show(150);
    $("#chainmail-buckler").show(150);
    $("#buckler-mek").show(150);
    $("#buckler-crimson").show(150);
  }, function() {
    $("#branch-buckler").hide();
    $("#chainmail-buckler").hide();
    $("#buckler-mek").hide();
    $("#buckler-crimson").hide();
});

$("#solar").hover(function() {
    $("#moc-solar").show(150);
    $("#talisman-solar").show(150);
  }, function() {
    $("#moc-solar").hide();
    $("#talisman-solar").hide();
});

$("#glimmer").hover(function() {
    $("#cloak-glimmer").show(150);
    $("#shadowam-glimmer").show(150);
  }, function() {
    $("#cloak-glimmer").hide();
    $("#shadowam-glimmer").hide();
});

$("#hotd").hover(function() {
    $("#goh-hotd").show(150);
    $("#headdress-hotd").show(150);
    $("#roh-hotd").show(150);
    $("#hotd-pauldron").show(150);
  }, function() {
    $("#goh-hotd").hide();
    $("#headdress-hotd").hide();
    $("#roh-hotd").hide();
    $("#hotd-pauldron").hide();
});

$("#vanguard").hover(function() {
    $("#stout-vanguard").show(150);
    $("#vit-vanguard").show(150);
    $("#roh-vanguard").show(150);
    $("#vanguard-crimson").show(150);
    $("#vanguard-ablade").show(150);
  }, function() {
    $("#stout-vanguard").hide();
    $("#vit-vanguard").hide();
    $("#roh-vanguard").hide();
    $("#vanguard-crimson").hide();
    $("#vanguard-ablade").hide();
});

$("#mek").hover(function() {
    $("#branch-headdress").show(150);
    $("#ror-headdress").show(150);
    $("#branch-buckler").show(150);
    $("#chainmail-buckler").show(150);
    $("#headdress-mek").show(150);
    $("#buckler-mek").show(150);
    $("#mek-greaves").show(150);
  }, function() {
    $("#branch-headdress").hide();
    $("#ror-headdress").hide();
    $("#branch-buckler").hide();
    $("#chainmail-buckler").hide();
    $("#headdress-mek").hide();
    $("#buckler-mek").hide();
    $("#mek-greaves").hide();
});

$("#hood").hover(function() {
    $("#ror-hood").show(150);
    $("#roh-hood").show(150);
    $("#cloak-hood").show(150);
    $("#hood-pipe").show(150);
  }, function() {
    $("#ror-hood").hide();
    $("#roh-hood").hide();
    $("#cloak-hood").hide();
    $("#hood-pipe").hide();
});

$("#vlads").hover(function() {
    $("#branch-headdress").show(150);
    $("#ror-headdress").show(150);
    $("#rop-basi").show(150);
    $("#sage-basi").show(150);
    $("#morbid-vlads").show(150);
    $("#basi-vlads").show(150);
    $("#headdress-vlads").show(150);
  }, function() {
    $("#branch-headdress").hide();
    $("#ror-headdress").hide();
    $("#rop-basi").hide();
    $("#sage-basi").hide();
    $("#morbid-vlads").hide();
    $("#basi-vlads").hide();
    $("#headdress-vlads").hide();
});

$("#platemail").hover(function() {
    $("#-platemail").show(150);
    $("#platemail-").show(150);
  }, function() {
    $("#-platemail").hide();
    $("#platemail-").hide();
});

$("#refresher").hover(function() {
    $("#-refresher").show(150);
    $("#refresher-").show(150);
  }, function() {
    $("#-refresher").hide();
    $("#refresher-").hide();
});

$("#crimson").hover(function() {
    $("#-crimson").show(150);
    $("#crimson-").show(150);
  }, function() {
    $("#-crimson").hide();
    $("#crimson-").hide();
});

$("#greaves").hover(function() {
    $("#-greaves").show(150);
    $("#greaves-").show(150);
  }, function() {
    $("#-greaves").hide();
    $("#greaves-").hide();
});

$("#pipe").hover(function() {
    $("#-pipe").show(150);
    $("#pipe-").show(150);
  }, function() {
    $("#-pipe").hide();
    $("#pipe-").hide();
});

$("#lotus").hover(function() {
    $("#-lotus").show(150);
    $("#lotus-").show(150);
  }, function() {
    $("#-lotus").hide();
    $("#lotus-").hide();
});

$("#ac").hover(function() {
    $("#-ac").show(150);
    $("#ac-").show(150);
  }, function() {
    $("#-ac").hide();
    $("#ac-").hide();
});

$("#qb").hover(function() {
    $("#-qb").show(150);
    $("#qb-").show(150);
  }, function() {
    $("#-qb").hide();
    $("#qb-").hide();
});

$("#blight").hover(function() {
    $("#-blight").show(150);
    $("#blight-").show(150);
  }, function() {
    $("#-blight").hide();
    $("#blight-").hide();
});

$("#oov").hover(function() {
    $("#-oov").show(150);
    $("#oov-").show(150);
  }, function() {
    $("#-oov").hide();
    $("#oov-").hide();
});

$("#javelin").hover(function() {
    $("#-javelin").show(150);
    $("#javelin-").show(150);
  }, function() {
    $("#-javelin").hide();
    $("#javelin-").hide();
});

$("#qstaff").hover(function() {
    $("#-qstaff").show(150);
    $("#qstaff-").show(150);
  }, function() {
    $("#-qstaff").hide();
    $("#qstaff-").hide();
});

$("#hoiw").hover(function() {
    $("#-hoiw").show(150);
    $("#hoiw-").show(150);
  }, function() {
    $("#-hoiw").hide();
    $("#hoiw-").hide();
});

$("#oblivion").hover(function() {
    $("#-oblivion").show(150);
    $("#oblivion-").show(150);
  }, function() {
    $("#-oblivion").hide();
    $("#oblivion-").hide();
});

$("#morbid").hover(function() {
    $("#-morbid").show(150);
    $("#morbid-").show(150);
  }, function() {
    $("#-morbid").hide();
    $("#morbid-").hide();
});

$("#boa").hover(function() {
    $("#-boa").show(150);
    $("#boa-").show(150);
  }, function() {
    $("#-boa").hide();
    $("#boa-").hide();
});

$("#broad").hover(function() {
    $("#-broad").show(150);
    $("#broad-").show(150);
  }, function() {
    $("#-broad").hide();
    $("#broad-").hide();
});

$("#clay").hover(function() {
    $("#-clay").show(150);
    $("#clay-").show(150);
  }, function() {
    $("#-clay").hide();
    $("#clay-").hide();
});

$("#goh").hover(function() {
    $("#-goh").show(150);
    $("#goh-").show(150);
  }, function() {
    $("#-goh").hide();
    $("#goh-").hide();
});

$("#shadowam").hover(function() {
    $("#-shadowam").show(150);
    $("#shadowam-").show(150);
  }, function() {
    $("#-shadowam").hide();
    $("#shadowam-").hide();
});

$("#mithham").hover(function() {
    $("#-mithham").show(150);
    $("#mithham-").show(150);
  }, function() {
    $("#-mithham").hide();
    $("#mithham-").hide();
});

$("#demon").hover(function() {
    $("#-demon").show(150);
    $("#demon-").show(150);
  }, function() {
    $("#-demon").hide();
    $("#demon-").hide();
});

$("#relic").hover(function() {
    $("#-relic").show(150);
    $("#relic-").show(150);
  }, function() {
    $("#-relic").hide();
    $("#relic-").hide();
});

$("#ultimateorb").hover(function() {
    $("#-ultimateorb").show(150);
    $("#ultimateorb-").show(150);
  }, function() {
    $("#-ultimateorb").hide();
    $("#ultimateorb-").hide();
});

$("#crystal").hover(function() {
    $("#-crystal").show(150);
    $("#crystal-").show(150);
  }, function() {
    $("#-crystal").hide();
    $("#crystal-").hide();
});

$("#shadowb").hover(function() {
    $("#-shadowb").show(150);
    $("#shadowb-").show(150);
  }, function() {
    $("#-shadowb").hide();
    $("#shadowb-").hide();
});

$("#deso").hover(function() {
    $("#-deso").show(150);
    $("#deso-").show(150);
  }, function() {
    $("#-deso").hide();
    $("#deso-").hide();
});

$("#skadi").hover(function() {
    $("#-skadi").show(150);
    $("#skadi-").show(150);
  }, function() {
    $("#-skadi").hide();
    $("#skadi-").hide();
});

$("#linkens").hover(function() {
    $("#-linkens").show(150);
    $("#linkens-").show(150);
  }, function() {
    $("#-linkens").hide();
    $("#linkens-").hide();
});

$("#silvedge").hover(function() {
    $("#-silvedge").show(150);
    $("#silvedge-").show(150);
  }, function() {
    $("#-silvedge").hide();
    $("#silvedge-").hide();
});

$("#bfury").hover(function() {
    $("#-bfury").show(150);
    $("#bfury-").show(150);
  }, function() {
    $("#-bfury").hide();
    $("#bfury-").hide();
});

$("#orchid").hover(function() {
    $("#-orchid").show(150);
    $("#orchid-").show(150);
  }, function() {
    $("#-orchid").hide();
    $("#orchid-").hide();
});

$("#basher").hover(function() {
    $("#-basher").show(150);
    $("#basher-").show(150);
  }, function() {
    $("#-basher").hide();
    $("#basher-").hide();
});

$("#blademail").hover(function() {
    $("#-blademail").show(150);
    $("#blademail-").show(150);
  }, function() {
    $("#-blademail").hide();
    $("#blademail-").hide();
});

$("#midas").hover(function() {
    $("#-midas").show(150);
    $("#midas-").show(150);
  }, function() {
    $("#-midas").hide();
    $("#midas-").hide();
});

$("#armlet").hover(function() {
    $("#-armlet").show(150);
    $("#armlet-").show(150);
  }, function() {
    $("#-armlet").hide();
    $("#armlet-").hide();
});

$("#mael").hover(function() {
    $("#-mael").show(150);
    $("#mael-").show(150);
  }, function() {
    $("#-mael").hide();
    $("#mael-").hide();
});

$("#mom").hover(function() {
    $("#-mom").show(150);
    $("#mom-").show(150);
  }, function() {
    $("#-mom").hide();
    $("#mom-").hide();
});

$("#bloodthorn").hover(function() {
    $("#-bloodthorn").show(150);
    $("#bloodthorn-").show(150);
  }, function() {
    $("#-bloodthorn").hide();
    $("#bloodthorn-").hide();
});

$("#bkb").hover(function() {
    $("#-bkb").show(150);
    $("#bkb-").show(150);
  }, function() {
    $("#-bkb").hide();
    $("#bkb-").hide();
});

$("#euls").hover(function() {
    $("#-euls").show(150);
    $("#euls-").show(150);
  }, function() {
    $("#-euls").hide();
    $("#euls-").hide();
});

$("#necro").hover(function() {
    $("#-necro").show(150);
    $("#necro-").show(150);
  }, function() {
    $("#-necro").hide();
    $("#necro-").hide();
});

$("#diffu").hover(function() {
    $("#-diffu").show(150);
    $("#diffu-").show(150);
  }, function() {
    $("#-diffu").hide();
    $("#diffu-").hide();
});

$("#daedalus").hover(function() {
    $("#-daedalus").show(150);
    $("#daedalus-").show(150);
  }, function() {
    $("#-daedalus").hide();
    $("#daedalus-").hide();
});

$("#mkb").hover(function() {
    $("#-mkb").show(150);
    $("#mkb-").show(150);
  }, function() {
    $("#-mkb").hide();
    $("#mkb-").hide();
});

$("#radiance").hover(function() {
    $("#-radiance").show(150);
    $("#radiance-").show(150);
  }, function() {
    $("#-radiance").hide();
    $("#radiance-").hide();
});

$("#aghs").hover(function() {
    $("#-aghs").show(150);
    $("#aghs-").show(150);
  }, function() {
    $("#-aghs").hide();
    $("#aghs-").hide();
});

$("#hyper").hover(function() {
    $("#-hyper").show(150);
    $("#hyper-").show(150);
  }, function() {
    $("#-hyper").hide();
    $("#hyper-").hide();
});

$("#ablade").hover(function() {
    $("#-ablade").show(150);
    $("#ablade-").show(150);
  }, function() {
    $("#-ablade").hide();
    $("#ablade-").hide();
});

$("#rapier").hover(function() {
    $("#-rapier").show(150);
    $("#rapier-").show(150);
  }, function() {
    $("#-rapier").hide();
    $("#rapier-").hide();
});

$("#mjoll").hover(function() {
    $("#-mjoll").show(150);
    $("#mjoll-").show(150);
  }, function() {
    $("#-mjoll").hide();
    $("#mjoll-").hide();
});

$("#moonsh").hover(function() {
    $("#-moonsh").show(150);
    $("#moonsh-").show(150);
  }, function() {
    $("#-moonsh").hide();
    $("#moonsh-").hide();
});

$("#vermcloak").hover(function() {
    $("#-vermcloak").show(150);
    $("#vermcloak-").show(150);
  }, function() {
    $("#-vermcloak").hide();
    $("#vermcloak-").hide();
});

$("#ghost").hover(function() {
    $("#-ghost").show(150);
    $("#ghost-").show(150);
  }, function() {
    $("#-ghost").hide();
    $("#ghost-").hide();
});

$("#urn").hover(function() {
    $("#-urn").show(150);
    $("#urn-").show(150);
  }, function() {
    $("#-urn").hide();
    $("#urn-").hide();
});

$("#basi").hover(function() {
    $("#-basi").show(150);
    $("#basi-").show(150);
  }, function() {
    $("#-basi").hide();
    $("#basi-").hide();
});

$("#bloodstone").hover(function() {
    $("#-bloodstone").show(150);
    $("#bloodstone-").show(150);
  }, function() {
    $("#-bloodstone").hide();
    $("#bloodstone-").hide();
});

$("#moc").hover(function() {
    $("#-moc").show(150);
    $("#moc-").show(150);
  }, function() {
    $("#-moc").hide();
    $("#moc-").hide();
});

$("#arcane").hover(function() {
    $("#-arcane").show(150);
    $("#arcane-").show(150);
  }, function() {
    $("#-arcane").hide();
    $("#arcane-").hide();
});

$("#arcane").hover(function() {
    $("#-arcane").show(150);
    $("#arcane-").show(150);
  }, function() {
    $("#-arcane").hide();
    $("#arcane-").hide();
});

$("#tranquil").hover(function() {
    $("#-tranquil").show(150);
    $("#tranquil-").show(150);
  }, function() {
    $("#-tranquil").hide();
    $("#tranquil-").hide();
});

$("#treads").hover(function() {
    $("#-treads").show(150);
    $("#treads-").show(150);
  }, function() {
    $("#-treads").hide();
    $("#treads-").hide();
});

$("#phase").hover(function() {
    $("#-phase").show(150);
    $("#phase-").show(150);
  }, function() {
    $("#-phase").hide();
    $("#phase-").hide();
});

$("#bots").hover(function() {
    $("#-bots").show(150);
    $("#bots-").show(150);
  }, function() {
    $("#-bots").hide();
    $("#bots-").hide();
});

$("#headdress").hover(function() {
    $("#-headdress").show(150);
    $("#headdress-").show(150);
  }, function() {
    $("#-headdress").hide();
    $("#headdress-").hide();
});

$("#buckler").hover(function() {
    $("#-buckler").show(150);
    $("#buckler-").show(150);
  }, function() {
    $("#-buckler").hide();
    $("#buckler-").hide();
});

$("#solar").hover(function() {
    $("#-solar").show(150);
    $("#solar-").show(150);
  }, function() {
    $("#-solar").hide();
    $("#solar-").hide();
});

$("#glimmer").hover(function() {
    $("#-glimmer").show(150);
    $("#glimmer-").show(150);
  }, function() {
    $("#-glimmer").hide();
    $("#glimmer-").hide();
});

$("#hotd").hover(function() {
    $("#-hotd").show(150);
    $("#hotd-").show(150);
  }, function() {
    $("#-hotd").hide();
    $("#hotd-").hide();
});

$("#vanguard").hover(function() {
    $("#-vanguard").show(150);
    $("#vanguard-").show(150);
  }, function() {
    $("#-vanguard").hide();
    $("#vanguard-").hide();
});

$("#mek").hover(function() {
    $("#-mek").show(150);
    $("#mek-").show(150);
  }, function() {
    $("#-mek").hide();
    $("#mek-").hide();
});

$("#hood").hover(function() {
    $("#-hood").show(150);
    $("#hood-").show(150);
  }, function() {
    $("#-hood").hide();
    $("#hood-").hide();
});

$("#vlads").hover(function() {
    $("#-vlads").show(150);
    $("#vlads-").show(150);
  }, function() {
    $("#-vlads").hide();
    $("#vlads-").hide();
});

$("#platemail").hover(function() {
    $("#-platemail").show(150);
    $("#platemail-").show(150);
  }, function() {
    $("#-platemail").hide();
    $("#platemail-").hide();
});

$("#refresher").hover(function() {
    $("#-refresher").show(150);
    $("#refresher-").show(150);
  }, function() {
    $("#-refresher").hide();
    $("#refresher-").hide();
});

$("#crimson").hover(function() {
    $("#-crimson").show(150);
    $("#crimson-").show(150);
  }, function() {
    $("#-crimson").hide();
    $("#crimson-").hide();
});

$("#greaves").hover(function() {
    $("#-greaves").show(150);
    $("#greaves-").show(150);
  }, function() {
    $("#-greaves").hide();
    $("#greaves-").hide();
});

$("#pipe").hover(function() {
    $("#-pipe").show(150);
    $("#pipe-").show(150);
  }, function() {
    $("#-pipe").hide();
    $("#pipe-").hide();
});

$("#lotus").hover(function() {
    $("#-lotus").show(150);
    $("#lotus-").show(150);
  }, function() {
    $("#-lotus").hide();
    $("#lotus-").hide();
});

$("#ac").hover(function() {
    $("#-ac").show(150);
    $("#ac-").show(150);
  }, function() {
    $("#-ac").hide();
    $("#ac-").hide();
});

$("#").hover(function() {
    $("#-").show(150);
    $("#-").show(150);
  }, function() {
    $("#-").hide();
    $("#-").hide();
});

