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
    connectElements($("#svg"), $("#robe-kaya"), $("#robe"), $("#kaya"));
    connectElements($("#svg"), $("#band-yasha"), $("#band"), $("#yasha"));
    connectElements($("#svg"), $("#club-sange"), $("#club"), $("#sange"));
    connectElements($("#svg"), $("#staff-kaya"), $("#staff"), $("#kaya"));
    connectElements($("#svg"), $("#blade-yasha"), $("#blade"), $("#yasha"));
    connectElements($("#svg"), $("#mantle-frost"), $("#mantle"), $("#frost"));
    connectElements($("#svg"), $("#sange-halberd"), $("#sange"), $("#halberd"));
    connectElements($("#svg"), $("#sange-sanguine"), $("#sange"), $("#sanguine"));
    connectElements($("#svg"), $("#sange-sny"), $("#sange"), $("#sny"));
    connectElements($("#svg"), $("#sange-snk"), $("#sange"), $("#snk"));
    connectElements($("#svg"), $("#sange-trio"), $("#sange"), $("#trio"));
    connectElements($("#svg"), $("#kaya-spellblade"), $("#kaya"), $("#spellblade"));
    connectElements($("#svg"), $("#kaya-seraph"), $("#kaya"), $("#seraph"));
    connectElements($("#svg"), $("#kaya-snk"), $("#kaya"), $("#snk"));
    connectElements($("#svg"), $("#kaya-kny"), $("#kaya"), $("#kny"));
    connectElements($("#svg"), $("#kaya-trio"), $("#kaya"), $("#trio"));
    connectElements($("#svg"), $("#yasha-manta"), $("#yasha"), $("#manta"));
    connectElements($("#svg"), $("#yasha-hayabusa"), $("#yasha"), $("#hayabusa"));
    connectElements($("#svg"), $("#yasha-sny"), $("#yasha"), $("#sny"));
    connectElements($("#svg"), $("#yasha-kny"), $("#yasha"), $("#kny"));
    connectElements($("#svg"), $("#yasha-trio"), $("#yasha"), $("#trio"));
    connectElements($("#svg"), $("#force-pike"), $("#force"), $("#pike"));
    connectElements($("#svg"), $("#dlance-pike"), $("#dlance"), $("#pike"));
    connectElements($("#svg"), $("#dlance-wyrmslayer"), $("#dlance"), $("#wyrmslayer"));
    connectElements($("#svg"), $("#echo-wyrmslayer"), $("#echo"), $("#wyrmslayer"));
    connectElements($("#svg"), $("#sny-trio"), $("#sny"), $("#trio"));
    connectElements($("#svg"), $("#snk-trio"), $("#snk"), $("#trio"));
    connectElements($("#svg"), $("#kny-trio"), $("#kny"), $("#trio"));
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
    connectElements($("#svg"), $("#mantle-nulltal"), $("#mantle"), $("#nulltal"));
    connectElements($("#svg"), $("#nulltal-dagon"), $("#nulltal"), $("#dagon"));
    connectElements($("#svg"), $("#nulltal-veil"), $("#nulltal"), $("#veil"));
    connectElements($("#svg"), $("#slippers-wraith"), $("#slippers"), $("#wraith"));
    connectElements($("#svg"), $("#wraith-pike"), $("#wraith"), $("#pike"));
    connectElements($("#svg"), $("#wraith-aquila"), $("#wraith"), $("#aquila"));
    connectElements($("#svg"), $("#wraith-squire"), $("#wraith"), $("#squire"));
    connectElements($("#svg"), $("#mango-wand"), $("#mango"), $("#wand"));
    connectElements($("#svg"), $("#ror-soulring"), $("#ror"), $("#soulring"));
    connectElements($("#svg"), $("#gauntlets-soulring"), $("#gauntlets"), $("#soulring"));
    connectElements($("#svg"), $("#soulring-sanguine"), $("#soulring"), $("#sanguine"));
    connectElements($("#svg"), $("#irain-urn"), $("#irain"), $("#urn"));
    connectElements($("#svg"), $("#rop-urn"), $("#rop"), $("#urn"));
    connectElements($("#svg"), $("#circlet-urn"), $("#circlet"), $("#urn"));
    connectElements($("#svg"), $("#urn-vessel"), $("#urn"), $("#vessel"));
    connectElements($("#svg"), $("#roh-perseverance"), $("#roh"), $("#perseverance"));
    connectElements($("#svg"), $("#void-perseverance"), $("#void"), $("#perseverance"));
    connectElements($("#svg"), $("#stick-wand"), $("#stick"), $("#wand"));
    connectElements($("#svg"), $("#branch-wand"), $("#branch"), $("#wand"));
    connectElements($("#svg"), $("#circlet-woodsman"), $("#circlet"), $("#woodsman"));
    connectElements($("#svg"), $("#tango-woodsman"), $("#tango"), $("#woodsman"));
    connectElements($("#svg"), $("#vit-soulbooster"), $("#vit"), $("#soulbooster"));
    connectElements($("#svg"), $("#energy-soulbooster"), $("#energy"), $("#soulbooster"));
    connectElements($("#svg"), $("#pb-soulbooster"), $("#pb"), $("#soulbooster"));
    connectElements($("#svg"), $("#perseverance-bloodstone"), $("#perseverance"), $("#bloodstone"));
    connectElements($("#svg"), $("#soulbooster-bloodstone"), $("#soulbooster"), $("#bloodstone"));
    connectElements($("#svg"), $("#energy-aether"), $("#energy"), $("#aether"));
    connectElements($("#svg"), $("#void-aether"), $("#void"), $("#aether"));
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
    connectElements($("#svg"), $("#boots-chargers"), $("#boots"), $("#chargers"));
    connectElements($("#svg"), $("#energy-arcane"), $("#energy"), $("#arcane"));
    connectElements($("#svg"), $("#ror-tranquil"), $("#ror"), $("#tranquil"));
    connectElements($("#svg"), $("#lace-tranquil"), $("#lace"), $("#tranquil"));
    connectElements($("#svg"), $("#volt-chargers"), $("#volt"), $("#chargers"));
    connectElements($("#svg"), $("#bov-chargers"), $("#bov"), $("#chargers"));
    connectElements($("#svg"), $("#belt-treads"), $("#belt"), $("#treads"));
    connectElements($("#svg"), $("#robe-treads"), $("#robe"), $("#treads"));
    connectElements($("#svg"), $("#band-treads"), $("#band"), $("#treads"));
    connectElements($("#svg"), $("#boa-phase"), $("#boa"), $("#phase"));
    connectElements($("#svg"), $("#branch-buckler"), $("#branch"), $("#buckler"));
    connectElements($("#svg"), $("#chainmail-buckler"), $("#chainmail"), $("#buckler"));
    connectElements($("#svg"), $("#branch-lantern"), $("#branch"), $("#lantern"));
    connectElements($("#svg"), $("#sage-lantern"), $("#sage"), $("#lantern"));
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
    connectElements($("#svg"), $("#sage-frost"), $("#sage"), $("#frost"));
    connectElements($("#svg"), $("#qb-woodsman"), $("#qb"), $("#woodsman"));
    connectElements($("#svg"), $("#ultimateorb-gjalla"), $("#ultimateorb"), $("#gjalla"));
    connectElements($("#svg"), $("#ghost-gjalla"), $("#ghost"), $("#gjalla"));
    connectElements($("#svg"), $("#wand-gjalla"), $("#wand"), $("#gjalla"));
    connectElements($("#svg"), $("#aether-spellblade"), $("#aether"), $("#spellblade"));
    connectElements($("#svg"), $("#void-seraph"), $("#void"), $("#seraph"));
    connectElements($("#svg"), $("#ultimateorb-manta"), $("#ultimateorb"), $("#manta"));
    connectElements($("#svg"), $("#lace-hayabusa"), $("#lace"), $("#hayabusa"));
    connectElements($("#svg"), $("#demon-hayabusa"), $("#demon"), $("#hayabusa"));
    connectElements($("#svg"), $("#morbid-seal"), $("#morbid"), $("#seal"));
    connectElements($("#svg"), $("#belt-seal"), $("#belt"), $("#seal"));
    connectElements($("#svg"), $("#ror-seal"), $("#ror"), $("#seal"));
    connectElements($("#svg"), $("#qstaff-oblivion"), $("#qstaff"), $("#oblivion"));
    connectElements($("#svg"), $("#robe-oblivion"), $("#robe"), $("#oblivion"));
    connectElements($("#svg"), $("#sage-oblivion"), $("#sage"), $("#oblivion"));
    connectElements($("#svg"), $("#javelin-shieldbreaker"), $("#javelin"), $("#shieldbreaker"));
    connectElements($("#svg"), $("#band-shieldbreaker"), $("#band"), $("#shieldbreaker"));
    connectElements($("#svg"), $("#oov-shieldbreaker"), $("#oov"), $("#shieldbreaker"));
    connectElements($("#svg"), $("#circlet-bracer"), $("#circlet"), $("#bracer"));
    connectElements($("#svg"), $("#circlet-nulltal"), $("#circlet"), $("#nulltal"));
    connectElements($("#svg"), $("#circlet-wraith"), $("#circlet"), $("#wraith"));
    connectElements($("#svg"), $("#roh-force"), $("#roh"), $("#force"));
    connectElements($("#svg"), $("#oblivion-echo"), $("#oblivion"), $("#echo"));
    connectElements($("#svg"), $("#javelin-wyrmslayer"), $("#javelin"), $("#wyrmslayer"));
    connectElements($("#svg"), $("#javelin-basher"), $("#javelin"), $("#basher"));
    connectElements($("#svg"), $("#belt-basher"), $("#belt"), $("#basher"));
    connectElements($("#svg"), $("#oblivion-orchid"), $("#oblivion"), $("#orchid"));
    connectElements($("#svg"), $("#shieldbreaker-fangs"), $("#shieldbreaker"), $("#fangs"));
    connectElements($("#svg"), $("#oblivion-fangs"), $("#oblivion"), $("#fangs"));
    connectElements($("#svg"), $("#boa-fangs"), $("#boa"), $("#fangs"));
    connectElements($("#svg"), $("#armlet-cc"), $("#armlet"), $("#cc"));
    connectElements($("#svg"), $("#seal-cc"), $("#seal"), $("#cc"));
    connectElements($("#svg"), $("#seal-sanguine"), $("#seal"), $("#sanguine"));
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
    connectElements($("#svg"), $("#sage-necro"), $("#sage"), $("#necro"));
    connectElements($("#svg"), $("#blade-diffu"), $("#blade"), $("#diffu"));
    connectElements($("#svg"), $("#robe-diffu"), $("#robe"), $("#diffu"));
    connectElements($("#svg"), $("#club-aghs"), $("#club"), $("#aghs"));
    connectElements($("#svg"), $("#staff-aghs"), $("#staff"), $("#aghs"));
    connectElements($("#svg"), $("#blade-aghs"), $("#blade"), $("#aghs"));
    connectElements($("#svg"), $("#pb-aghs"), $("#pb"), $("#aghs"));
    connectElements($("#svg"), $("#vit-heart"), $("#vit"), $("#heart"));
    connectElements($("#svg"), $("#morbid-satanic"), $("#morbid"), $("#satanic"));
    connectElements($("#svg"), $("#clay-satanic"), $("#clay"), $("#satanic"));
    connectElements($("#svg"), $("#hotd-pauldron"), $("#hotd"), $("#pauldron"));
    connectElements($("#svg"), $("#chainmail-pauldron"), $("#chainmail"), $("#pauldron"));
    connectElements($("#svg"), $("#qb-pauldron"), $("#qb"), $("#pauldron"));
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
    connectElements($("#svg"), $("#pb-prism"), $("#pb"), $("#prism"));
    connectElements($("#svg"), $("#hoiw-prism"), $("#hoiw"), $("#prism"));
    connectElements($("#svg"), $("#stout-prism"), $("#stout"), $("#prism"));
    connectElements($("#svg"), $("#pb-skadi"), $("#pb"), $("#skadi"));
    connectElements($("#svg"), $("#ultimateorb-skadi"), $("#ultimateorb"), $("#skadi"));
    connectElements($("#svg"), $("#perseverance-linkens"), $("#perseverance"), $("#linkens"));
    connectElements($("#svg"), $("#ultimateorb-linkens"), $("#ultimateorb"), $("#linkens"));
    connectElements($("#svg"), $("#perseverance-bfury"), $("#perseverance"), $("#bfury"));
    connectElements($("#svg"), $("#qb-bfury"), $("#qb"), $("#bfury"));
    connectElements($("#svg"), $("#demon-bfury"), $("#demon"), $("#bfury"));
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
    connectElements($("#svg"), $("#hyper-mkb"), $("#hyper"), $("#mkb"));
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
    connectElements($("#svg"), $("#reaver-vermilion"), $("#reaver"), $("#vermilion"));
    connectElements($("#svg"), $("#mystic-vermilion"), $("#mystic"), $("#vermilion"));
    connectElements($("#svg"), $("#eagle-vermilion"), $("#eagle"), $("#vermilion"));
    connectElements($("#svg"), $("#lace-vessel"), $("#lace"), $("#vessel"));
    connectElements($("#svg"), $("#vit-vessel"), $("#vit"), $("#vessel"));
    connectElements($("#svg"), $("#vit-aeondisk"), $("#vit"), $("#aeondisk"));
    connectElements($("#svg"), $("#energy-aeondisk"), $("#energy"), $("#aeondisk"));
    connectElements($("#svg"), $("#staff-meteor"), $("#staff"), $("#meteor"));
    connectElements($("#svg"), $("#club-meteor"), $("#club"), $("#meteor"));
    connectElements($("#svg"), $("#ror-meteor"), $("#ror"), $("#meteor"));
    connectElements($("#svg"), $("#sage-meteor"), $("#sage"), $("#meteor"));
    connectElements($("#svg"), $("#relic-nullifier"), $("#relic"), $("#nullifier"));
    connectElements($("#svg"), $("#hoiw-nullifier"), $("#hoiw"), $("#nullifier"));
    connectElements($("#svg"), $("#bov-sigil"), $("#bov"), $("#sigil"));
    connectElements($("#svg"), $("#vlads-sigil"), $("#vlads"), $("#sigil"));
    connectElements($("#svg"), $("#pov-valiance"), $("#pov"), $("#valiance"));
    connectElements($("#svg"), $("#talisman-valiance"), $("#talisman"), $("#valiance"));
    connectElements($("#svg"), $("#lov-infernalorb"), $("#lov"), $("#infernalorb"));
    connectElements($("#svg"), $("#lantern-infernalorb"), $("#lantern"), $("#infernalorb"));
    connectElements($("#svg"), $("#veil-infernalorb"), $("#veil"), $("#infernalorb"));
    connectElements($("#svg"), $("#aeondisk-aoa"), $("#aeondisk"), $("#aoa"));
    connectElements($("#svg"), $("#pov-aoa"), $("#pov"), $("#aoa"));
    connectElements($("#svg"), $("#slippers-swift"), $("#slippers"), $("#swift"));
    connectElements($("#svg"), $("#lace-swift"), $("#lace"), $("#swift"));
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
    $('div[class*="row-"] div[class^="col-"]').each( function() {
      if (($( this ).height() > 55) || ((this.scrollHeight - this.offsetHeight) > 40)) {
        $( this ).children('.item-box-1').last().children('.price-label').addClass('label-reposition');
      } else {
        $( this ).children('.item-box-1').last().children('.price-label').removeClass('label-reposition');
      }
    });
    $('.grid .price-label').each( function() {
      var multiplier = $(this).parent().parent().attr('class').split('-')[1].slice(1);
      if (multiplier >= 1) {
        $(this).addClass('label-reposition-'+multiplier);
      }
    });
    connectAll();
});

$("#str,#strl").on("click", function() {
    $("#str").toggle();
    $("#strp").toggle();
    $("#strl").toggle();
    $("#strlp").toggle();
    $(".item-str").addClass('active0');
});
$("#str,#strl").hover(function() {
    $("#strl").css('border','4px solid #cc3333');
    $(".item-str").css('background-color','#cc3333');
  }, function() {
    $("#strl").css('border','none');
    $(".item-str:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8):not(.active9):not(.activeA):not(.activeB)").css('background-color','#23242A');
    $(".item-str.active0").css('background-color','#cc3333');
    $(".item-str.active1").css('background-color','#0099cc');
    $(".item-str.active2").css('background-color','#339966');
    $(".item-str.active3").css('background-color','#663399');
    $(".item-str.active4").css('background-color','#993399');
    $(".item-str.active5").css('background-color','#cccc33');
    $(".item-str.active6").css('background-color','#0066cc');
    $(".item-str.active7").css('background-color','#33cccc');
    $(".item-str.active8").css('background-color','#999999');
    $(".item-str.active9").css('background-color','#993300');
    $(".item-str.activeA").css('background-color','#99cc66');
    $(".item-str.activeB").css('background-color','#cc6600');
});
$("#strp,#strlp").on("click", function() {
    $("#strp").toggle();
    $("#str").toggle();
    $("#strlp").toggle();
    $("#strl").toggle();
    $(".item-str").removeClass('active0');
});
$("#strp,#strlp").hover(function() {
    $(".item-str").css('background-color','#cc3333');
});

$("#int,#intl").on("click", function() {
    $("#int").toggle();
    $("#intp").toggle();
    $("#intl").toggle();
    $("#intlp").toggle();
    $(".item-int").addClass('active1');
});
$("#int,#intl").hover(function() {
    $("#intl").css('border','4px solid #0099cc');
    $(".item-int").css('background-color','#0099cc');
  }, function() {
    $("#intl").css('border','none');
    $(".item-int:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8):not(.active9):not(.activeA):not(.activeB)").css('background-color','#23242A');
    $(".item-int.active0").css('background-color','#cc3333');
    $(".item-int.active1").css('background-color','#0099cc');
    $(".item-int.active2").css('background-color','#339966');
    $(".item-int.active3").css('background-color','#663399');
    $(".item-int.active4").css('background-color','#993399');
    $(".item-int.active5").css('background-color','#cccc33');
    $(".item-int.active6").css('background-color','#0066cc');
    $(".item-int.active7").css('background-color','#33cccc');
    $(".item-int.active8").css('background-color','#999999');
    $(".item-int.active9").css('background-color','#993300');
    $(".item-int.activeA").css('background-color','#99cc66');
    $(".item-int.activeB").css('background-color','#cc6600');
});
$("#intp,#intlp").on("click", function() {
    $("#intp").toggle();
    $("#int").toggle();
    $("#intlp").toggle();
    $("#intl").toggle();
    $(".item-int").removeClass('active1');
});
$("#intp,#intlp").hover(function() {
    $(".item-int").css('background-color','#0099cc');
});

$("#agi,#agil").on("click", function() {
    $("#agi").toggle();
    $("#agip").toggle();
    $("#agil").toggle();
    $("#agilp").toggle();
    $(".item-agi").addClass('active2');
});
$("#agi,#agil").hover(function() {
    $("#agil").css('border','4px solid #339966');
    $(".item-agi").css('background-color','#339966');
  }, function() {
    $("#agil").css('border','none');
    $(".item-agi:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8):not(.active9):not(.activeA):not(.activeB)").css('background-color','#23242A');
    $(".item-agi.active0").css('background-color','#cc3333');
    $(".item-agi.active1").css('background-color','#0099cc');
    $(".item-agi.active2").css('background-color','#339966');
    $(".item-agi.active3").css('background-color','#663399');
    $(".item-agi.active4").css('background-color','#993399');
    $(".item-agi.active5").css('background-color','#cccc33');
    $(".item-agi.active6").css('background-color','#0066cc');
    $(".item-agi.active7").css('background-color','#33cccc');
    $(".item-agi.active8").css('background-color','#999999');
    $(".item-agi.active9").css('background-color','#993300');
    $(".item-agi.activeA").css('background-color','#99cc66');
    $(".item-agi.activeB").css('background-color','#cc6600');
});
$("#agip,#agilp").on("click", function() {
    $("#agip").toggle();
    $("#agi").toggle();
    $("#agilp").toggle();
    $("#agil").toggle();
    $(".item-agi").removeClass('active2');
});
$("#agip,#agilp").hover(function() {
    $(".item-agi").css('background-color','#339966');
});

$("#stat,#statl").on("click", function() {
    $("#stat").toggle();
    $("#statp").toggle();
    $("#statl").toggle();
    $("#statlp").toggle();
    $(".item-stat").addClass('active3');
});
$("#stat,#statl").hover(function() {
    $("#statl").css('border','4px solid #663399');
    $(".item-stat").css('background-color','#663399');
  }, function() {
    $("#statl").css('border','none');
    $(".item-stat:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8):not(.active9):not(.activeA):not(.activeB)").css('background-color','#23242A');
    $(".item-stat.active0").css('background-color','#cc3333');
    $(".item-stat.active1").css('background-color','#0099cc');
    $(".item-stat.active2").css('background-color','#339966');
    $(".item-stat.active3").css('background-color','#663399');
    $(".item-stat.active4").css('background-color','#993399');
    $(".item-stat.active5").css('background-color','#cccc33');
    $(".item-stat.active6").css('background-color','#0066cc');
    $(".item-stat.active7").css('background-color','#33cccc');
    $(".item-stat.active8").css('background-color','#999999');
    $(".item-stat.active9").css('background-color','#993300');
    $(".item-stat.activeA").css('background-color','#99cc66');
    $(".item-stat.activeB").css('background-color','#cc6600');
});
$("#statp,#statlp").on("click", function() {
    $("#statp").toggle();
    $("#stat").toggle();
    $("#statlp").toggle();
    $("#statl").toggle();
    $(".item-stat").removeClass('active3');
});
$("#statp,#statlp").hover(function() {
    $(".item-stat").css('background-color','#663399');
});

$("#regen,#regenl").on("click", function() {
    $("#regen").toggle();
    $("#regenp").toggle();
    $("#regenl").toggle();
    $("#regenlp").toggle();
    $(".item-regen").addClass('active4');
});
$("#regen,#regenl").hover(function() {
    $("#regenl").css('border','4px solid #993399');
    $(".item-regen").css('background-color','#993399');
  }, function() {
    $("#regenl").css('border','none');
    $(".item-regen:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8):not(.active9):not(.activeA):not(.activeB)").css('background-color','#23242A');
    $(".item-regen.active0").css('background-color','#cc3333');
    $(".item-regen.active1").css('background-color','#0099cc');
    $(".item-regen.active2").css('background-color','#339966');
    $(".item-regen.active3").css('background-color','#663399');
    $(".item-regen.active4").css('background-color','#993399');
    $(".item-regen.active5").css('background-color','#cccc33');
    $(".item-regen.active6").css('background-color','#0066cc');
    $(".item-regen.active7").css('background-color','#33cccc');
    $(".item-regen.active8").css('background-color','#999999');
    $(".item-regen.active9").css('background-color','#993300');
    $(".item-regen.activeA").css('background-color','#99cc66');
    $(".item-regen.activeB").css('background-color','#cc6600');
});
$("#regenp,#regenlp").on("click", function() {
    $("#regenp").toggle();
    $("#regen").toggle();
    $("#regenlp").toggle();
    $("#regenl").toggle();
    $(".item-regen").removeClass('active4');
});
$("#regenp,#regenlp").hover(function() {
    $(".item-regen").css('background-color','#993399');
});

$("#cons,#consl").on("click", function() {
    $("#cons").toggle();
    $("#consp").toggle();
    $("#consl").toggle();
    $("#conslp").toggle();
    $(".item-cons").addClass('active5');
});
$("#cons,#consl").hover(function() {
    $("#consl").css('border','4px solid #cccc33');
    $(".item-cons").css('background-color','#cccc33');
  }, function() {
    $("#consl").css('border','none');
    $(".item-cons:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8):not(.active9):not(.activeA):not(.activeB)").css('background-color','#23242A');
    $(".item-cons.active0").css('background-color','#cc3333');
    $(".item-cons.active1").css('background-color','#0099cc');
    $(".item-cons.active2").css('background-color','#339966');
    $(".item-cons.active3").css('background-color','#663399');
    $(".item-cons.active4").css('background-color','#993399');
    $(".item-cons.active5").css('background-color','#cccc33');
    $(".item-cons.active6").css('background-color','#0066cc');
    $(".item-cons.active7").css('background-color','#33cccc');
    $(".item-cons.active8").css('background-color','#999999');
    $(".item-cons.active9").css('background-color','#993300');
    $(".item-cons.activeA").css('background-color','#99cc66');
    $(".item-cons.activeB").css('background-color','#cc6600');
});
$("#consp,#conslp").on("click", function() {
    $("#consp").toggle();
    $("#cons").toggle();
    $("#conslp").toggle();
    $("#consl").toggle();
    $(".item-cons").removeClass('active5');
});
$("#consp,#conslp").hover(function() {
    $(".item-cons").css('background-color','#cccc33');
});

$("#mobi,#mobil").on("click", function() {
    $("#mobi").toggle();
    $("#mobip").toggle();
    $("#mobil").toggle();
    $("#mobilp").toggle();
    $(".item-mobi").addClass('active6');
});
$("#mobi,#mobil").hover(function() {
    $("#mobil").css('border','4px solid #0066cc');
    $(".item-mobi").css('background-color','#0066cc');
  }, function() {
    $("#mobil").css('border','none');
    $(".item-mobi").css('background-color','#23242A');
    $(".item-mobi:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8):not(.active9):not(.activeA):not(.activeB)").css('background-color','#23242A');
    $(".item-mobi.active0").css('background-color','#cc3333');
    $(".item-mobi.active1").css('background-color','#0099cc');
    $(".item-mobi.active2").css('background-color','#339966');
    $(".item-mobi.active3").css('background-color','#663399');
    $(".item-mobi.active4").css('background-color','#993399');
    $(".item-mobi.active5").css('background-color','#cccc33');
    $(".item-mobi.active6").css('background-color','#0066cc');
    $(".item-mobi.active7").css('background-color','#33cccc');
    $(".item-mobi.active8").css('background-color','#999999');
    $(".item-mobi.active9").css('background-color','#993300');
    $(".item-mobi.activeA").css('background-color','#99cc66');
    $(".item-mobi.activeB").css('background-color','#cc6600');
});
$("#mobip,#mobilp").on("click", function() {
    $("#mobip").toggle();
    $("#mobi").toggle();
    $("#mobilp").toggle();
    $("#mobil").toggle();
    $(".item-mobi").removeClass('active6');
});
$("#mobip,#mobilp").hover(function() {
    $(".item-mobi").css('background-color','#0066cc');
});

$("#dam,#daml").on("click", function() {
    $("#dam").toggle();
    $("#damp").toggle();
    $("#daml").toggle();
    $("#damlp").toggle();
    $(".item-dam").addClass('active7');
});
$("#dam,#daml").hover(function() {
    $("#daml").css('border','4px solid #33cccc');
    $(".item-dam").css('background-color','#33cccc');
  }, function() {
    $("#daml").css('border','none');
    $(".item-dam").css('background-color','#23242A');
    $(".item-dam:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8):not(.active9):not(.activeA):not(.activeB)").css('background-color','#23242A');
    $(".item-dam.active0").css('background-color','#cc3333');
    $(".item-dam.active1").css('background-color','#0099cc');
    $(".item-dam.active2").css('background-color','#339966');
    $(".item-dam.active3").css('background-color','#663399');
    $(".item-dam.active4").css('background-color','#993399');
    $(".item-dam.active5").css('background-color','#cccc33');
    $(".item-dam.active6").css('background-color','#0066cc');
    $(".item-dam.active7").css('background-color','#33cccc');
    $(".item-dam.active8").css('background-color','#999999');
    $(".item-dam.active9").css('background-color','#993300');
    $(".item-dam.activeA").css('background-color','#99cc66');
    $(".item-dam.activeB").css('background-color','#cc6600');
});
$("#damp,#damlp").on("click", function() {
    $("#damp").toggle();
    $("#dam").toggle();
    $("#damlp").toggle();
    $("#daml").toggle();
    $(".item-dam").removeClass('active7');
});
$("#damp,#damlp").hover(function() {
    $(".item-dam").css('background-color','#33cccc');
});

$("#def,#defl").on("click", function() {
    $("#def").toggle();
    $("#defp").toggle();
    $("#defl").toggle();
    $("#deflp").toggle();
    $(".item-def").addClass('active8');
});
$("#def,#defl").hover(function() {
    $("#defl").css('border','4px solid #999999');
    $(".item-def").css('background-color','#999999');
  }, function() {
    $("#defl").css('border','none');
    $(".item-def").css('background-color','#23242A');
    $(".item-def:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8):not(.active9):not(.activeA):not(.activeB)").css('background-color','#23242A');
    $(".item-def.active0").css('background-color','#cc3333');
    $(".item-def.active1").css('background-color','#0099cc');
    $(".item-def.active2").css('background-color','#339966');
    $(".item-def.active3").css('background-color','#663399');
    $(".item-def.active4").css('background-color','#993399');
    $(".item-def.active5").css('background-color','#cccc33');
    $(".item-def.active6").css('background-color','#0066cc');
    $(".item-def.active7").css('background-color','#33cccc');
    $(".item-def.active8").css('background-color','#999999');
    $(".item-def.active9").css('background-color','#993300');
    $(".item-def.activeA").css('background-color','#99cc66');
    $(".item-def.activeB").css('background-color','#cc6600');
});
$("#defp,#deflp").on("click", function() {
    $("#defp").toggle();
    $("#def").toggle();
    $("#deflp").toggle();
    $("#defl").toggle();
    $(".item-def").removeClass('active8');
});
$("#defp,#deflp").hover(function() {
    $(".item-def").css('background-color','#999999');
});

$("#util,#utill").on("click", function() {
    $("#util").toggle();
    $("#utilp").toggle();
    $("#utill").toggle();
    $("#utillp").toggle();
    $(".item-util").addClass('active9');
});
$("#util,#utill").hover(function() {
    $("#utill").css('border','4px solid #993300');
    $(".item-util").css('background-color','#993300');
  }, function() {
    $("#utill").css('border','none');
    $(".item-util").css('background-color','#23242A');
    $(".item-util:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8):not(.active9):not(.activeA):not(.activeB)").css('background-color','#23242A');
    $(".item-util.active0").css('background-color','#cc3333');
    $(".item-util.active1").css('background-color','#0099cc');
    $(".item-util.active2").css('background-color','#339966');
    $(".item-util.active3").css('background-color','#663399');
    $(".item-util.active4").css('background-color','#993399');
    $(".item-util.active5").css('background-color','#cccc33');
    $(".item-util.active6").css('background-color','#0066cc');
    $(".item-util.active7").css('background-color','#33cccc');
    $(".item-util.active8").css('background-color','#999999');
    $(".item-util.active9").css('background-color','#993300');
    $(".item-util.activeA").css('background-color','#99cc66');
    $(".item-util.activeB").css('background-color','#cc6600');
});
$("#utilp,#utillp").on("click", function() {
    $("#utilp").toggle();
    $("#util").toggle();
    $("#utillp").toggle();
    $("#utill").toggle();
    $(".item-util").removeClass('active9');
});
$("#utilp,#utillp").hover(function() {
    $(".item-util").css('background-color','#993300');
});

$("#cast,#castl").on("click", function() {
    $("#cast").toggle();
    $("#castp").toggle();
    $("#castl").toggle();
    $("#castlp").toggle();
    $(".item-cast").addClass('activeA');
});
$("#cast,#castl").hover(function() {
    $("#castl").css('border','4px solid #99cc66');
    $(".item-cast").css('background-color','#99cc66');
  }, function() {
    $("#castl").css('border','none');
    $(".item-cast").css('background-color','#23242A');
    $(".item-cast:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8):not(.active9):not(.activeA):not(.activeB)").css('background-color','#23242A');
    $(".item-cast.active0").css('background-color','#cc3333');
    $(".item-cast.active1").css('background-color','#0099cc');
    $(".item-cast.active2").css('background-color','#339966');
    $(".item-cast.active3").css('background-color','#663399');
    $(".item-cast.active4").css('background-color','#993399');
    $(".item-cast.active5").css('background-color','#cccc33');
    $(".item-cast.active6").css('background-color','#0066cc');
    $(".item-cast.active7").css('background-color','#33cccc');
    $(".item-cast.active8").css('background-color','#999999');
    $(".item-cast.active9").css('background-color','#993300');
    $(".item-cast.activeA").css('background-color','#99cc66');
    $(".item-cast.activeB").css('background-color','#cc6600');
});
$("#castp,#castlp").on("click", function() {
    $("#castp").toggle();
    $("#cast").toggle();
    $("#castlp").toggle();
    $("#castl").toggle();
    $(".item-cast").removeClass('activeA');
});
$("#castp,#castlp").hover(function() {
    $(".item-cast").css('background-color','#99cc66');
});

$("#supp,#suppl").on("click", function() {
    $("#supp").toggle();
    $("#suppp").toggle();
    $("#suppl").toggle();
    $("#supplp").toggle();
    $(".item-supp").addClass('activeB');
});
$("#supp,#suppl").hover(function() {
    $("#suppl").css('border','4px solid #cc6600');
    $(".item-supp").css('background-color','#cc6600');
  }, function() {
    $("#suppl").css('border','none');
    $(".item-supp").css('background-color','#23242A');
    $(".item-supp:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8):not(.active9):not(.activeA):not(.activeB)").css('background-color','#23242A');
    $(".item-supp.active0").css('background-color','#cc3333');
    $(".item-supp.active1").css('background-color','#0099cc');
    $(".item-supp.active2").css('background-color','#339966');
    $(".item-supp.active3").css('background-color','#663399');
    $(".item-supp.active4").css('background-color','#993399');
    $(".item-supp.active5").css('background-color','#cccc33');
    $(".item-supp.active6").css('background-color','#0066cc');
    $(".item-supp.active7").css('background-color','#33cccc');
    $(".item-supp.active8").css('background-color','#999999');
    $(".item-supp.active9").css('background-color','#993300');
    $(".item-supp.activeA").css('background-color','#99cc66');
    $(".item-supp.activeB").css('background-color','#cc6600');
});
$("#suppp,#supplp").on("click", function() {
    $("#suppp").toggle();
    $("#supp").toggle();
    $("#supplp").toggle();
    $("#suppl").toggle();
    $(".item-supp").removeClass('activeB');
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
    $("path[id*=belt]").show();
  }, function() {
    $("path[id*=belt]").hide();
});

$("#club").hover(function() {
    $("path[id*=club]").show();
  }, function() {
    $("path[id*=club]").hide();
});

$("#halberd").hover(function() {
    $("path[id*=halberd]").show();
  }, function() {
    $("path[id*=halberd]").hide();
});

$("#gjalla").hover(function() {
    $("path[id*=gjalla]").show();
  }, function() {
    $("path[id*=gjalla]").hide();
});

$("#sange").hover(function() {
    $("path[id*=sange]").show();
  }, function() {
    $("path[id*=sange]").hide();
});

$("#robe").hover(function() {
    $("path[id*=robe]").show();
  }, function() {
    $("path[id*=robe]").hide();
});

$("#staff").hover(function() {
    $("path[id^=staff]").show();
  }, function() {
    $("path[id^=staff]").hide();
});

$("#spellblade").hover(function() {
    $("path[id*=spellblade]").show();
  }, function() {
    $("path[id*=spellblade]").hide();
});

$("#seraph").hover(function() {
    $("path[id*=seraph]").show();
  }, function() {
    $("path[id*=seraph]").hide();
});

$("#kaya").hover(function() {
    $("path[id*=kaya]").show();
  }, function() {
    $("path[id*=kaya]").hide();
});

$("#band").hover(function() {
    $("path[id*=band]").show();
  }, function() {
    $("path[id*=band]").hide();
});

$("#blade").hover(function() {
    $("path[id^=blade]").show();
  }, function() {
    $("path[id^=blade]").hide();
});

$("#manta").hover(function() {
    $("path[id*=manta]").show();
  }, function() {
    $("path[id*=manta]").hide();
});

$("#hayabusa").hover(function() {
    $("path[id*=hayabusa]").show();
  }, function() {
    $("path[id*=hayabusa]").hide();
});

$("#yasha").hover(function() {
    $("path[id*=yasha]").show();
  }, function() {
    $("path[id*=yasha]").hide();
});

$("#trio").hover(function() {
    $("path[id*=trio]").show();
  }, function() {
    $("path[id*=trio]").hide();
});

$("#sny").hover(function() {
    $("path[id*=sny]").show();
  }, function() {
    $("path[id*=sny]").hide();
});

$("#snk").hover(function() {
    $("path[id*=snk]").show();
  }, function() {
    $("path[id*=snk]").hide();
});

$("#kny").hover(function() {
    $("path[id*=kny]").show();
  }, function() {
    $("path[id*=kny]").hide();
});

$("#gauntlets").hover(function() {
    $("path[id*=gauntlets]").show();
  }, function() {
    $("path[id*=gauntlets]").hide();
});

$("#woodsman").hover(function() {
    $("path[id*=woodsman]").show();
  }, function() {
    $("path[id*=woodsman]").hide();
});

$("#mantle").hover(function() {
    $("path[id*=mantle]").show();
  }, function() {
    $("path[id*=mantle]").hide();
});

$("#frost").hover(function() {
    $("path[id*=frost]").show();
  }, function() {
    $("path[id*=frost]").hide();
});

$("#slippers").hover(function() {
    $("path[id*=slippers]").show();
  }, function() {
    $("path[id*=slippers]").hide();
});

$("#bracer").hover(function() {
    $("path[id*=bracer]").show();
  }, function() {
    $("path[id*=bracer]").hide();
});

$("#drum").hover(function() {
    $("path[id*=drum]").show();
  }, function() {
    $("path[id*=drum]").hide();
});

$("#atos").hover(function() {
    $("path[id*=atos]").show();
  }, function() {
    $("path[id*=atos]").hide();
});

$("#nulltal").hover(function() {
    $("path[id*=nulltal]").show();
  }, function() {
    $("path[id*=nulltal]").hide();
});

$("#dagon").hover(function() {
    $("path[id*=dagon]").show();
  }, function() {
    $("path[id*=dagon]").hide();
});

$("#veil").hover(function() {
    $("path[id*=veil]").show();
  }, function() {
    $("path[id*=veil]").hide();
});

$("#wraith").hover(function() {
    $("path[id*=wraith]").show();
  }, function() {
    $("path[id*=wraith]").hide();
});

$("#aquila").hover(function() {
    $("path[id*=aquila]").show();
  }, function() {
    $("path[id*=aquila]").hide();
});

$("#squire").hover(function() {
    $("path[id*=squire]").show();
  }, function() {
    $("path[id*=squire]").hide();
});

$("#dlance").hover(function() {
    $("path[id*=dlance]").show();
  }, function() {
    $("path[id*=dlance]").hide();
});

$("#pike").hover(function() {
    $("path[id*=pike]").show();
  }, function() {
    $("path[id*=pike]").hide();
});

$("#oblivion").hover(function() {
    $("path[id*=oblivion]").show();
  }, function() {
    $("path[id*=oblivion]").hide();
});

$("#echo").hover(function() {
    $("path[id*=echo]").show();
  }, function() {
    $("path[id*=echo]").hide();
});

$("#force").hover(function() {
    $("path[id*=force]").show();
  }, function() {
    $("path[id*=force]").hide();
});

$("#wyrmslayer").hover(function() {
    $("path[id*=wyrmslayer]").show();
  }, function() {
    $("path[id*=wyrmslayer]").hide();
});

$("#reaver").hover(function() {
    $("path[id*=reaver]").show();
  }, function() {
    $("path[id*=reaver]").hide();
});

$("#heart").hover(function() {
    $("path[id*=heart]").show();
  }, function() {
    $("path[id*=heart]").hide();
});

$("#satanic").hover(function() {
    $("path[id*=satanic]").show();
  }, function() {
    $("path[id*=satanic]").hide();
});

$("#pauldron").hover(function() {
    $("path[id*=pauldron]").show();
  }, function() {
    $("path[id*=pauldron]").hide();
});

$("#mystic").hover(function() {
    $("path[id*=mystic]").show();
  }, function() {
    $("path[id*=mystic]").hide();
});

$("#sheep").hover(function() {
    $("path[id*=sheep]").show();
  }, function() {
    $("path[id*=sheep]").hide();
});

$("#shiva").hover(function() {
    $("path[id*=shiva]").show();
  }, function() {
    $("path[id*=shiva]").hide();
});

$("#ocore").hover(function() {
    $("path[id*=ocore]").show();
  }, function() {
    $("path[id*=ocore]").hide();
});

$("#eagle").hover(function() {
    $("path[id*=eagle]").show();
  }, function() {
    $("path[id*=eagle]").hide();
});

$("#butterfly").hover(function() {
    $("path[id*=butterfly]").show();
  }, function() {
    $("path[id*=butterfly]").hide();
});

$("#eblade").hover(function() {
    $("path[id*=eblade]").show();
  }, function() {
    $("path[id*=eblade]").hide();
});

$("#wkb").hover(function() {
    $("path[id*=wkb]").show();
  }, function() {
    $("path[id*=wkb]").hide();
});

$("#vermilion").hover(function() {
    $("path[id*=vermilion]").show();
  }, function() {
    $("path[id*=vermilion]").hide();
});

$("#tango").hover(function() {
    $("path[id*=tango]").show();
  }, function() {
    $("path[id*=tango]").hide();
});

$("#mango").hover(function() {
    $("path[id*=mango]").show();
  }, function() {
    $("path[id*=mango]").hide();
});

$("#irain").hover(function() {
    $("path[id*=irain]").show();
  }, function() {
    $("path[id*=irain]").hide();
});

$("#ror").hover(function() {
    $("path[id*=ror]").show();
  }, function() {
    $("path[id*=ror]").hide();
});

$("#sage").hover(function() {
    $("path[id*=sage]").show();
  }, function() {
    $("path[id*=sage]").hide();
});

$("#roh").hover(function() {
    $("path[id*=roh]").show();
  }, function() {
    $("path[id*=roh]").hide();
});

$("#void").hover(function() {
    $("path[id*=void]").show();
  }, function() {
    $("path[id*=void]").hide();
});

$("#stick").hover(function() {
    $("path[id*=stick]").show();
  }, function() {
    $("path[id*=stick]").hide();
});

$("#stout").hover(function() {
    $("path[id*=stout]").show();
  }, function() {
    $("path[id*=stout]").hide();
});

$("#soulring").hover(function() {
    $("path[id*=soulring]").show();
  }, function() {
    $("path[id*=soulring]").hide();
});

$("#perseverance").hover(function() {
    $("path[id*=perseverance]").show();
  }, function() {
    $("path[id*=perseverance]").hide();
});

$("#branch").hover(function() {
    $("path[id*=branch]").show();
  }, function() {
    $("path[id*=branch]").hide();
});

$("#circlet").hover(function() {
    $("path[id*=circlet]").show();
  }, function() {
    $("path[id*=circlet]").hide();
});

$("#vit").hover(function() {
    $("path[id*=vit]").show();
  }, function() {
    $("path[id*=vit]").hide();
});

$("#energy").hover(function() {
    $("path[id*=energy]").show();
  }, function() {
    $("path[id*=energy]").hide();
});

$("#pb").hover(function() {
    $("path[id*=pb]").show();
  }, function() {
    $("path[id*=pb]").hide();
});

$("#talisman").hover(function() {
    $("path[id*=talisman]").show();
  }, function() {
    $("path[id*=talisman]").hide();
});

$("#cloak").hover(function() {
    $("path[id*=cloak]").show();
  }, function() {
    $("path[id*=cloak]").hide();
});

$("#rop").hover(function() {
    $("path[id*=rop]").show();
  }, function() {
    $("path[id*=rop]").hide();
});

$("#chainmail").hover(function() {
    $("path[id*=chainmail]").show();
  }, function() {
    $("path[id*=chainmail]").hide();
});

$("#hoiw").hover(function() {
    $("path[id*=hoiw]").show();
  }, function() {
    $("path[id*=hoiw]").hide();
});

$("#soulbooster").hover(function() {
    $("path[id*=soulbooster]").show();
  }, function() {
    $("path[id*=soulbooster]").hide();
});

$("#aether").hover(function() {
    $("path[id*=aether]").show();
  }, function() {
    $("path[id*=aether]").hide();
});

$("#lace").hover(function() {
    $("path[id*=lace]").show();
  }, function() {
    $("path[id*=lace]").hide();
});

$("#boots").hover(function() {
    $("path[id*=boots]").show();
  }, function() {
    $("path[id*=boots]").hide();
});

$("#wand").hover(function() {
    $("path[id*=wand]").show();
  }, function() {
    $("path[id*=wand]").hide();
});

$("#urn").hover(function() {
    $("path[id*=urn]").show();
  }, function() {
    $("path[id*=urn]").hide();
});

$("#vessel").hover(function() {
    $("path[id*=vessel]").show();
  }, function() {
    $("path[id*=vessel]").hide();
});

$("#aeondisk").hover(function() {
    $("path[id*=aeondisk]").show();
  }, function() {
    $("path[id*=aeondisk]").hide();
});

$("#nullifier").hover(function() {
    $("path[id*=nullifier]").show();
  }, function() {
    $("path[id*=nullifier]").hide();
});

$("#meteor").hover(function() {
    $("path[id*=meteor]").show();
  }, function() {
    $("path[id*=meteor]").hide();
});

$("#basi").hover(function() {
    $("path[id*=basi]").show();
  }, function() {
    $("path[id*=basi]").hide();
});

$("#bloodstone").hover(function() {
    $("path[id*=bloodstone]").show();
  }, function() {
    $("path[id*=bloodstone]").hide();
});

$("#moc").hover(function() {
    $("path[id*=moc]").show();
  }, function() {
    $("path[id*=moc]").hide();
});

$("#arcane").hover(function() {
    $("path[id*=arcane]").show();
  }, function() {
    $("path[id*=arcane]").hide();
});

$("#tranquil").hover(function() {
    $("path[id*=tranquil]").show();
  }, function() {
    $("path[id*=tranquil]").hide();
});

$("#treads").hover(function() {
    $("path[id*=treads]").show();
  }, function() {
    $("path[id*=treads]").hide();
});

$("#phase").hover(function() {
    $("path[id*=phase]").show();
  }, function() {
    $("path[id*=phase]").hide();
});

$("#bots").hover(function() {
    $("path[id*=bots]").show();
  }, function() {
    $("path[id*=bots]").hide();
});

$("#headdress").hover(function() {
    $("path[id*=headdress]").show();
  }, function() {
    $("path[id*=headdress]").hide();
});

$("#buckler").hover(function() {
    $("path[id*=buckler]").show();
  }, function() {
    $("path[id*=buckler]").hide();
});

$("#solar").hover(function() {
    $("path[id*=solar]").show();
  }, function() {
    $("path[id*=solar]").hide();
});

$("#glimmer").hover(function() {
    $("path[id*=glimmer]").show();
  }, function() {
    $("path[id*=glimmer]").hide();
});

$("#hotd").hover(function() {
    $("path[id*=hotd]").show();
  }, function() {
    $("path[id*=hotd]").hide();
});

$("#vanguard").hover(function() {
    $("path[id*=vanguard]").show();
  }, function() {
    $("path[id*=vanguard]").hide();
});

$("#mek").hover(function() {
    $("path[id*=mek]").show();
  }, function() {
    $("path[id*=mek]").hide();
});

$("#hood").hover(function() {
    $("path[id*=hood]").show();
  }, function() {
    $("path[id*=hood]").hide();
});

$("#vlads").hover(function() {
    $("path[id*=vlads]").show();
  }, function() {
    $("path[id*=vlads]").hide();
});

$("#platemail").hover(function() {
    $("path[id*=platemail]").show();
  }, function() {
    $("path[id*=platemail]").hide();
});

$("#refresher").hover(function() {
    $("path[id*=refresher]").show();
  }, function() {
    $("path[id*=refresher]").hide();
});

$("#crimson").hover(function() {
    $("path[id*=crimson]").show();
  }, function() {
    $("path[id*=crimson]").hide();
});

$("#greaves").hover(function() {
    $("path[id*=greaves]").show();
  }, function() {
    $("path[id*=greaves]").hide();
});

$("#pipe").hover(function() {
    $("path[id*=pipe]").show();
  }, function() {
    $("path[id*=pipe]").hide();
});

$("#lotus").hover(function() {
    $("path[id*=lotus]").show();
  }, function() {
    $("path[id*=lotus]").hide();
});

$("#qb").hover(function() {
    $("path[id*=qb]").show();
  }, function() {
    $("path[id*=qb]").hide();
});

$("#blight").hover(function() {
    $("path[id*=blight]").show();
  }, function() {
    $("path[id*=blight]").hide();
});

$("#oov").hover(function() {
    $("path[id*=oov]").show();
  }, function() {
    $("path[id*=oov]").hide();
});

$("#javelin").hover(function() {
    $("path[id*=javelin]").show();
  }, function() {
    $("path[id*=javelin]").hide();
});

$("#qstaff").hover(function() {
    $("path[id*=qstaff]").show();
  }, function() {
    $("path[id*=qstaff]").hide();
});

$("#hoiw").hover(function() {
    $("path[id*=hoiw]").show();
  }, function() {
    $("path[id*=hoiw]").hide();
});

$("#morbid").hover(function() {
    $("path[id*=morbid]").show();
  }, function() {
    $("path[id*=morbid]").hide();
});

$("#boa").hover(function() {
    $("path[id*=boa]").show();
  }, function() {
    $("path[id*=boa]").hide();
});

$("#broad").hover(function() {
    $("path[id*=broad]").show();
  }, function() {
    $("path[id*=broad]").hide();
});

$("#clay").hover(function() {
    $("path[id*=clay]").show();
  }, function() {
    $("path[id*=clay]").hide();
});

$("#goh").hover(function() {
    $("path[id*=goh]").show();
  }, function() {
    $("path[id*=goh]").hide();
});

$("#shadowam").hover(function() {
    $("path[id*=shadowam]").show();
  }, function() {
    $("path[id*=shadowam]").hide();
});

$("#mithham").hover(function() {
    $("path[id*=mithham]").show();
  }, function() {
    $("path[id*=mithham]").hide();
});

$("#demon").hover(function() {
    $("path[id*=demon]").show();
  }, function() {
    $("path[id*=demon]").hide();
});

$("#relic").hover(function() {
    $("path[id*=relic]").show();
  }, function() {
    $("path[id*=relic]").hide();
});

$("#ultimateorb").hover(function() {
    $("path[id*=ultimateorb]").show();
  }, function() {
    $("path[id*=ultimateorb]").hide();
});

$("#crystal").hover(function() {
    $("path[id*=crystal]").show();
  }, function() {
    $("path[id*=crystal]").hide();
});

$("#shadowb").hover(function() {
    $("path[id*=shadowb]").show();
  }, function() {
    $("path[id*=shadowb]").hide();
});

$("#deso").hover(function() {
    $("path[id*=deso]").show();
  }, function() {
    $("path[id*=deso]").hide();
});

$("#skadi").hover(function() {
    $("path[id*=skadi]").show();
  }, function() {
    $("path[id*=skadi]").hide();
});

$("#linkens").hover(function() {
    $("path[id*=linkens]").show();
  }, function() {
    $("path[id*=linkens]").hide();
});

$("#silvedge").hover(function() {
    $("path[id*=silvedge]").show();
  }, function() {
    $("path[id*=silvedge]").hide();
});

$("#bfury").hover(function() {
    $("path[id*=bfury]").show();
  }, function() {
    $("path[id*=bfury]").hide();
});

$("#orchid").hover(function() {
    $("path[id*=orchid]").show();
  }, function() {
    $("path[id*=orchid]").hide();
});

$("#basher").hover(function() {
    $("path[id*=basher]").show();
  }, function() {
    $("path[id*=basher]").hide();
});

$("#blademail").hover(function() {
    $("path[id*=blademail]").show();
  }, function() {
    $("path[id*=blademail]").hide();
});

$("#midas").hover(function() {
    $("path[id*=midas]").show();
  }, function() {
    $("path[id*=midas]").hide();
});

$("#armlet").hover(function() {
    $("path[id*=armlet]").show();
  }, function() {
    $("path[id*=armlet]").hide();
});

$("#mael").hover(function() {
    $("path[id*=mael]").show();
  }, function() {
    $("path[id*=mael]").hide();
});

$("#mom").hover(function() {
    $("path[id*=mom]").show();
  }, function() {
    $("path[id*=mom]").hide();
});

$("#bloodthorn").hover(function() {
    $("path[id*=bloodthorn]").show();
  }, function() {
    $("path[id*=bloodthorn]").hide();
});

$("#bkb").hover(function() {
    $("path[id*=bkb]").show();
  }, function() {
    $("path[id*=bkb]").hide();
});

$("#euls").hover(function() {
    $("path[id*=euls]").show();
  }, function() {
    $("path[id*=euls]").hide();
});

$("#necro").hover(function() {
    $("path[id*=necro]").show();
  }, function() {
    $("path[id*=necro]").hide();
});

$("#diffu").hover(function() {
    $("path[id*=diffu]").show();
  }, function() {
    $("path[id*=diffu]").hide();
});

$("#daedalus").hover(function() {
    $("path[id*=daedalus]").show();
  }, function() {
    $("path[id*=daedalus]").hide();
});

$("#mkb").hover(function() {
    $("path[id*=mkb]").show();
  }, function() {
    $("path[id*=mkb]").hide();
});

$("#radiance").hover(function() {
    $("path[id*=radiance]").show();
  }, function() {
    $("path[id*=radiance]").hide();
});

$("#aghs").hover(function() {
    $("path[id*=aghs]").show();
  }, function() {
    $("path[id*=aghs]").hide();
});

$("#hyper").hover(function() {
    $("path[id*=hyper]").show();
  }, function() {
    $("path[id*=hyper]").hide();
});

$("#ablade").hover(function() {
    $("path[id*=ablade]").show();
  }, function() {
    $("path[id*=ablade]").hide();
});

$("#rapier").hover(function() {
    $("path[id*=rapier]").show();
  }, function() {
    $("path[id*=rapier]").hide();
});

$("#mjoll").hover(function() {
    $("path[id*=mjoll]").show();
  }, function() {
    $("path[id*=mjoll]").hide();
});

$("#moonsh").hover(function() {
    $("path[id*=moonsh]").show();
  }, function() {
    $("path[id*=moonsh]").hide();
});

$("#vermilion").hover(function() {
    $("path[id*=vermilion]").show();
  }, function() {
    $("path[id*=vermilion]").hide();
});

$("#ghost").hover(function() {
    $("path[id*=ghost]").show();
  }, function() {
    $("path[id*=ghost]").hide();
});

$("#urn").hover(function() {
    $("path[id*=urn]").show();
  }, function() {
    $("path[id*=urn]").hide();
});

$("#basi").hover(function() {
    $("path[id*=basi]").show();
  }, function() {
    $("path[id*=basi]").hide();
});

$("#bloodstone").hover(function() {
    $("path[id*=bloodstone]").show();
  }, function() {
    $("path[id*=bloodstone]").hide();
});

$("#moc").hover(function() {
    $("path[id*=moc]").show();
  }, function() {
    $("path[id*=moc]").hide();
});

$("#arcane").hover(function() {
    $("path[id*=arcane]").show();
  }, function() {
    $("path[id*=arcane]").hide();
});

$("#arcane").hover(function() {
    $("path[id*=arcane]").show();
  }, function() {
    $("path[id*=arcane]").hide();
});

$("#tranquil").hover(function() {
    $("path[id*=tranquil]").show();
  }, function() {
    $("path[id*=tranquil]").hide();
});

$("#treads").hover(function() {
    $("path[id*=treads]").show();
  }, function() {
    $("path[id*=treads]").hide();
});

$("#phase").hover(function() {
    $("path[id*=phase]").show();
  }, function() {
    $("path[id*=phase]").hide();
});

$("#bots").hover(function() {
    $("path[id*=bots]").show();
  }, function() {
    $("path[id*=bots]").hide();
});

$("#headdress").hover(function() {
    $("path[id*=headdress]").show();
  }, function() {
    $("path[id*=headdress]").hide();
});

$("#buckler").hover(function() {
    $("path[id*=buckler]").show();
  }, function() {
    $("path[id*=buckler]").hide();
});

$("#solar").hover(function() {
    $("path[id*=solar]").show();
  }, function() {
    $("path[id*=solar]").hide();
});

$("#glimmer").hover(function() {
    $("path[id*=glimmer]").show();
  }, function() {
    $("path[id*=glimmer]").hide();
});

$("#hotd").hover(function() {
    $("path[id*=hotd]").show();
  }, function() {
    $("path[id*=hotd]").hide();
});

$("#vanguard").hover(function() {
    $("path[id*=vanguard]").show();
  }, function() {
    $("path[id*=vanguard]").hide();
});

$("#mek").hover(function() {
    $("path[id*=mek]").show();
  }, function() {
    $("path[id*=mek]").hide();
});

$("#hood").hover(function() {
    $("path[id*=hood]").show();
  }, function() {
    $("path[id*=hood]").hide();
});

$("#vlads").hover(function() {
    $("path[id*=vlads]").show();
  }, function() {
    $("path[id*=vlads]").hide();
});

$("#platemail").hover(function() {
    $("path[id*=platemail]").show();
  }, function() {
    $("path[id*=platemail]").hide();
});

$("#refresher").hover(function() {
    $("path[id*=refresher]").show();
  }, function() {
    $("path[id*=refresher]").hide();
});

$("#crimson").hover(function() {
    $("path[id*=crimson]").show();
  }, function() {
    $("path[id*=crimson]").hide();
});

$("#greaves").hover(function() {
    $("path[id*=greaves]").show();
  }, function() {
    $("path[id*=greaves]").hide();
});

$("#pipe").hover(function() {
    $("path[id*=pipe]").show();
  }, function() {
    $("path[id*=pipe]").hide();
});

$("#lotus").hover(function() {
    $("path[id*=lotus]").show();
  }, function() {
    $("path[id*=lotus]").hide();
});

$("#ac").hover(function() {
    $("path[id$=-ac]").show();
  }, function() {
    $("path[id$=-ac]").hide();
});

$("#volt").hover(function() {
    $("path[id*=volt]").show();
  }, function() {
    $("path[id*=volt]").hide();
});

$("#seal").hover(function() {
    $("path[id*=seal]").show();
  }, function() {
    $("path[id*=seal]").hide();
});

$("#shieldbreaker").hover(function() {
    $("path[id*=shieldbreaker]").show();
  }, function() {
    $("path[id*=shieldbreaker]").hide();
});

$("#cc").hover(function() {
    $("path[id*=cc]").show();
  }, function() {
    $("path[id*=cc]").hide();
});

$("#fangs").hover(function() {
    $("path[id*=fangs]").show();
  }, function() {
    $("path[id*=fangs]").hide();
});

$("#lantern").hover(function() {
    $("path[id*=lantern]").show();
  }, function() {
    $("path[id*=lantern]").hide();
});

$("#pov").hover(function() {
    $("path[id*=pov]").show();
  }, function() {
    $("path[id*=pov]").hide();
});

$("#lov").hover(function() {
    $("path[id*=lov]").show();
  }, function() {
    $("path[id*=lov]").hide();
});

$("#bov").hover(function() {
    $("path[id*=bov]").show();
  }, function() {
    $("path[id*=bov]").hide();
});

$("#chargers").hover(function() {
    $("path[id*=chargers]").show();
  }, function() {
    $("path[id*=chargers]").hide();
});

$("#sigil").hover(function() {
    $("path[id*=sigil]").show();
  }, function() {
    $("path[id*=sigil]").hide();
});

$("#valiance").hover(function() {
    $("path[id*=valiance]").show();
  }, function() {
    $("path[id*=valiance]").hide();
});

$("#infernalorb").hover(function() {
    $("path[id*=infernalorb]").show();
  }, function() {
    $("path[id*=infernalorb]").hide();
});

$("#aoa").hover(function() {
    $("path[id*=aoa]").show();
  }, function() {
    $("path[id*=aoa]").hide();
});

$("#swift").hover(function() {
    $("path[id*=swift]").show();
  }, function() {
    $("path[id*=swift]").hide();
});

$("#prism").hover(function() {
    $("path[id*=prism]").show();
  }, function() {
    $("path[id*=prism]").hide();
});

$("#sanguine").hover(function() {
    $("path[id*=sanguine]").show();
  }, function() {
    $("path[id*=sanguine]").hide();
});


