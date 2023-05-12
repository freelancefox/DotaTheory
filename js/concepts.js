$('#carry,#carryl').on('click', function() {
    $('#carry').toggle();
    $('#carryp').toggle();
    $('#carryl').toggle();
    $('#carrylp').toggle();
    $('img[class*="role-carry"]').addClass('active0');
});
$('#carry,#carryl').hover(function() {
    $('#carryl').css('border','4px solid #663399');
    $('img[class*="role-carry"]').css('outline','3px solid #663399');
  }, function() {
    $('#carryl').css('border','none');
    $('img[class*="role-carry"]:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8)').css('outline','0');
    $('img[class*="role-carry"].active0').css('outline','3px solid #663399');
    $('img[class*="role-carry"].active1').css('outline','3px solid #993399');
    $('img[class*="role-carry"].active2').css('outline','3px solid #cccc33');
    $('img[class*="role-carry"].active3').css('outline','3px solid #993300');
    $('img[class*="role-carry"].active4').css('outline','3px solid #33cccc');
    $('img[class*="role-carry"].active5').css('outline','3px solid #999999');
    $('img[class*="role-carry"].active6').css('outline','3px solid #99cc66');
    $('img[class*="role-carry"].active7').css('outline','3px solid #cc6600');
    $('img[class*="role-carry"].active8').css('outline','3px solid #0066cc');
});
$('#carryp,#carrylp').on('click', function() {
    $('#carryp').toggle();
    $('#carry').toggle();
    $('#carrylp').toggle();
    $('#carryl').toggle();
    $('img[class*="role-carry"]').removeClass('active0');
});
$('#carryp,#carrylp').hover(function() {
    $('img[class*="role-carry"]').css('outline','3px solid #663399');
});

$('#nuker,#nukerl').on('click', function() {
    $('#nuker').toggle();
    $('#nukerp').toggle();
    $('#nukerl').toggle();
    $('#nukerlp').toggle();
    $('img[class*="role-nuker"]').addClass('active1');
});
$('#nuker,#nukerl').hover(function() {
    $('#nukerl').css('border','4px solid #993399');
    $('img[class*="role-nuker"]').css('outline','3px solid #993399');
  }, function() {
    $('#nukerl').css('border','none');
    $('img[class*="role-nuker"]:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8)').css('outline','0');
    $('img[class*="role-nuker"].active0').css('outline','3px solid #663399');
    $('img[class*="role-nuker"].active1').css('outline','3px solid #993399');
    $('img[class*="role-nuker"].active2').css('outline','3px solid #cccc33');
    $('img[class*="role-nuker"].active3').css('outline','3px solid #993300');
    $('img[class*="role-nuker"].active4').css('outline','3px solid #33cccc');
    $('img[class*="role-nuker"].active5').css('outline','3px solid #999999');
    $('img[class*="role-nuker"].active6').css('outline','3px solid #99cc66');
    $('img[class*="role-nuker"].active7').css('outline','3px solid #cc6600');
    $('img[class*="role-nuker"].active8').css('outline','3px solid #0066cc');
});
$('#nukerp,#nukerlp').on('click', function() {
    $('#nukerp').toggle();
    $('#nuker').toggle();
    $('#nukerlp').toggle();
    $('#nukerl').toggle();
    $('img[class*="role-nuker"]').removeClass('active1');
});
$('#nukerp,#nukerlp').hover(function() {
    $('img[class*="role-nuker"]').css('outline','3px solid #993399');
});

$('#jung,#jungl').on('click', function() {
    $('#jung').toggle();
    $('#jungp').toggle();
    $('#jungl').toggle();
    $('#junglp').toggle();
    $('img[class*="role-jung"]').addClass('active2');
});
$('#jung,#jungl').hover(function() {
    $('#jungl').css('border','4px solid #cccc33');
    $('img[class*="role-jung"]').css('outline','3px solid #cccc33');
  }, function() {
    $('#jungl').css('border','none');
    $('img[class*="role-jung"]:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8)').css('outline','0');
    $('img[class*="role-jung"].active0').css('outline','3px solid #663399');
    $('img[class*="role-jung"].active1').css('outline','3px solid #993399');
    $('img[class*="role-jung"].active2').css('outline','3px solid #cccc33');
    $('img[class*="role-jung"].active3').css('outline','3px solid #993300');
    $('img[class*="role-jung"].active4').css('outline','3px solid #33cccc');
    $('img[class*="role-jung"].active5').css('outline','3px solid #999999');
    $('img[class*="role-jung"].active6').css('outline','3px solid #99cc66');
    $('img[class*="role-jung"].active7').css('outline','3px solid #cc6600');
    $('img[class*="role-jung"].active8').css('outline','3px solid #0066cc');
});
$('#jungp,#junglp').on('click', function() {
    $('#jungp').toggle();
    $('#jung').toggle();
    $('#junglp').toggle();
    $('#jungl').toggle();
    $('img[class*="role-jung"]').removeClass('active2');
});
$('#jungp,#junglp').hover(function() {
    $('img[class*="role-jung"]').css('outline','3px solid #cccc33');
});

$('#supp,#suppl').on('click', function() {
    $('#supp').toggle();
    $('#suppp').toggle();
    $('#suppl').toggle();
    $('#supplp').toggle();
    $('img[class*="role-supp"]').addClass('active3');
});
$('#supp,#suppl').hover(function() {
    $('#suppl').css('border','4px solid #993300');
    $('img[class*="role-supp"]').css('outline','3px solid #993300');
  }, function() {
    $('#suppl').css('border','none');
    $('img[class*="role-supp"]').css('outline','0');
    $('img[class*="role-supp"]:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8)').css('outline','0');
    $('img[class*="role-supp"].active0').css('outline','3px solid #663399');
    $('img[class*="role-supp"].active1').css('outline','3px solid #993399');
    $('img[class*="role-supp"].active2').css('outline','3px solid #cccc33');
    $('img[class*="role-supp"].active3').css('outline','3px solid #993300');
    $('img[class*="role-supp"].active4').css('outline','3px solid #33cccc');
    $('img[class*="role-supp"].active5').css('outline','3px solid #999999');
    $('img[class*="role-supp"].active6').css('outline','3px solid #99cc66');
    $('img[class*="role-supp"].active7').css('outline','3px solid #cc6600');
    $('img[class*="role-supp"].active8').css('outline','3px solid #0066cc');
});
$('#suppp,#supplp').on('click', function() {
    $('#suppp').toggle();
    $('#supp').toggle();
    $('#supplp').toggle();
    $('#suppl').toggle();
    $('img[class*="role-supp"]').removeClass('active3');
});
$('#suppp,#supplp').hover(function() {
    $('img[class*="role-supp"]').css('outline','3px solid #993300');
});

$('#init,#initl').on('click', function() {
    $('#init').toggle();
    $('#initp').toggle();
    $('#initl').toggle();
    $('#initlp').toggle();
    $('img[class*="role-init"]').addClass('active4');
});
$('#init,#initl').hover(function() {
    $('#initl').css('border','4px solid #33cccc');
    $('img[class*="role-init"]').css('outline','3px solid #33cccc');
  }, function() {
    $('#initl').css('border','none');
    $('img[class*="role-init"]').css('outline','0');
    $('img[class*="role-init"]:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8)').css('outline','0');
    $('img[class*="role-init"].active0').css('outline','3px solid #663399');
    $('img[class*="role-init"].active1').css('outline','3px solid #993399');
    $('img[class*="role-init"].active2').css('outline','3px solid #cccc33');
    $('img[class*="role-init"].active3').css('outline','3px solid #993300');
    $('img[class*="role-init"].active4').css('outline','3px solid #33cccc');
    $('img[class*="role-init"].active5').css('outline','3px solid #999999');
    $('img[class*="role-init"].active6').css('outline','3px solid #99cc66');
    $('img[class*="role-init"].active7').css('outline','3px solid #cc6600');
    $('img[class*="role-init"].active8').css('outline','3px solid #0066cc');
});
$('#initp,#initlp').on('click', function() {
    $('#initp').toggle();
    $('#init').toggle();
    $('#initlp').toggle();
    $('#initl').toggle();
    $('img[class*="role-init"]').removeClass('active4');
});
$('#initp,#initlp').hover(function() {
    $('img[class*="role-init"]').css('outline','3px solid #33cccc');
});

$('#dura,#dural').on('click', function() {
    $('#dura').toggle();
    $('#durap').toggle();
    $('#dural').toggle();
    $('#duralp').toggle();
    $('img[class*="role-dura"]').addClass('active5');
});
$('#dura,#dural').hover(function() {
    $('#dural').css('border','4px solid #999999');
    $('img[class*="role-dura"]').css('outline','3px solid #999999');
  }, function() {
    $('#dural').css('border','none');
    $('img[class*="role-dura"]').css('outline','0');
    $('img[class*="role-dura"]:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8)').css('outline','0');
    $('img[class*="role-dura"].active0').css('outline','3px solid #663399');
    $('img[class*="role-dura"].active1').css('outline','3px solid #993399');
    $('img[class*="role-dura"].active2').css('outline','3px solid #cccc33');
    $('img[class*="role-dura"].active3').css('outline','3px solid #993300');
    $('img[class*="role-dura"].active4').css('outline','3px solid #33cccc');
    $('img[class*="role-dura"].active5').css('outline','3px solid #999999');
    $('img[class*="role-dura"].active6').css('outline','3px solid #99cc66');
    $('img[class*="role-dura"].active7').css('outline','3px solid #cc6600');
    $('img[class*="role-dura"].active8').css('outline','3px solid #0066cc');
});
$('#durap,#duralp').on('click', function() {
    $('#durap').toggle();
    $('#dura').toggle();
    $('#duralp').toggle();
    $('#dural').toggle();
    $('img[class*="role-dura"]').removeClass('active5');
});
$('#durap,#duralp').hover(function() {
    $('img[class*="role-dura"]').css('outline','3px solid #999999');
});

$('#push,#pushl').on('click', function() {
    $('#push').toggle();
    $('#pushp').toggle();
    $('#pushl').toggle();
    $('#pushlp').toggle();
    $('img[class*="role-push"]').addClass('active6');
});
$('#push,#pushl').hover(function() {
    $('#pushl').css('border','4px solid #99cc66');
    $('img[class*="role-push"]').css('outline','3px solid #99cc66');
  }, function() {
    $('#pushl').css('border','none');
    $('img[class*="role-push"]').css('outline','0');
    $('img[class*="role-push"]:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8)').css('outline','0');
    $('img[class*="role-push"].active0').css('outline','3px solid #663399');
    $('img[class*="role-push"].active1').css('outline','3px solid #993399');
    $('img[class*="role-push"].active2').css('outline','3px solid #cccc33');
    $('img[class*="role-push"].active3').css('outline','3px solid #993300');
    $('img[class*="role-push"].active4').css('outline','3px solid #33cccc');
    $('img[class*="role-push"].active5').css('outline','3px solid #999999');
    $('img[class*="role-push"].active6').css('outline','3px solid #99cc66');
    $('img[class*="role-push"].active7').css('outline','3px solid #cc6600');
    $('img[class*="role-push"].active8').css('outline','3px solid #0066cc');
});
$('#pushp,#pushlp').on('click', function() {
    $('#pushp').toggle();
    $('#push').toggle();
    $('#pushlp').toggle();
    $('#pushl').toggle();
    $('img[class*="role-push"]').removeClass('active6');
});
$('#pushp,#pushlp').hover(function() {
    $('img[class*="role-push"]').css('outline','3px solid #99cc66');
});

$('#disa,#disal').on('click', function() {
    $('#disa').toggle();
    $('#disap').toggle();
    $('#disal').toggle();
    $('#disalp').toggle();
    $('img[class*="role-disa"]').addClass('active7');
});
$('#disa,#disal').hover(function() {
    $('#disal').css('border','4px solid #cc6600');
    $('img[class*="role-disa"]').css('outline','3px solid #cc6600');
  }, function() {
    $('#disal').css('border','none');
    $('img[class*="role-disa"]').css('outline','0');
    $('img[class*="role-disa"]:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8)').css('outline','0');
    $('img[class*="role-disa"].active0').css('outline','3px solid #663399');
    $('img[class*="role-disa"].active1').css('outline','3px solid #993399');
    $('img[class*="role-disa"].active2').css('outline','3px solid #cccc33');
    $('img[class*="role-disa"].active3').css('outline','3px solid #993300');
    $('img[class*="role-disa"].active4').css('outline','3px solid #33cccc');
    $('img[class*="role-disa"].active5').css('outline','3px solid #999999');
    $('img[class*="role-disa"].active6').css('outline','3px solid #99cc66');
    $('img[class*="role-disa"].active7').css('outline','3px solid #cc6600');
    $('img[class*="role-disa"].active8').css('outline','3px solid #0066cc');
});
$('#disap,#disalp').on('click', function() {
    $('#disap').toggle();
    $('#disa').toggle();
    $('#disalp').toggle();
    $('#disal').toggle();
    $('img[class*="role-disa"]').removeClass('active7');
});
$('#disap,#disalp').hover(function() {
    $('img[class*="role-disa"]').css('outline','3px solid #cc6600');
});

$('#esc,#escl').on('click', function() {
    $('#esc').toggle();
    $('#escp').toggle();
    $('#escl').toggle();
    $('#esclp').toggle();
    $('img[class*="role-esc"]').addClass('active8');
});
$('#esc,#escl').hover(function() {
    $('#escl').css('border','4px solid #0066cc');
    $('img[class*="role-esc"]').css('outline','3px solid #0066cc');
  }, function() {
    $('#escl').css('border','none');
    $('img[class*="role-esc"]').css('outline','0');
    $('img[class*="role-esc"]:not(.active0):not(.active1):not(.active2):not(.active3):not(.active4):not(.active5):not(.active6):not(.active7):not(.active8)').css('outline','0');
    $('img[class*="role-esc"].active0').css('outline','3px solid #663399');
    $('img[class*="role-esc"].active1').css('outline','3px solid #993399');
    $('img[class*="role-esc"].active2').css('outline','3px solid #cccc33');
    $('img[class*="role-esc"].active3').css('outline','3px solid #993300');
    $('img[class*="role-esc"].active4').css('outline','3px solid #33cccc');
    $('img[class*="role-esc"].active5').css('outline','3px solid #999999');
    $('img[class*="role-esc"].active6').css('outline','3px solid #99cc66');
    $('img[class*="role-esc"].active7').css('outline','3px solid #cc6600');
    $('img[class*="role-esc"].active8').css('outline','3px solid #0066cc');
});
$('#escp,#esclp').on('click', function() {
    $('#escp').toggle();
    $('#esc').toggle();
    $('#esclp').toggle();
    $('#escl').toggle();
    $('img[class*="role-esc"]').removeClass('active8');
});
$('#escp,#esclp').hover(function() {
    $('img[class*="role-esc"]').css('outline','3px solid #0066cc');
});

$('img[class*="role-carry"]').hover(function (e) {
  $('#carryl').toggle();
  $('#carrylp').toggle();
}, function (e) {
  $('#carryl').toggle();
  $('#carrylp').toggle();
});

$('img[class*="role-nuker"]').hover(function (e) {
  $('#nukerl').toggle();
  $('#nukerlp').toggle();
}, function (e) {
  $('#nukerl').toggle();
  $('#nukerlp').toggle();
});

$('img[class*="role-jung"]').hover(function (e) {
  $('#jungl').toggle();
  $('#junglp').toggle();
}, function (e) {
  $('#jungl').toggle();
  $('#junglp').toggle();
});

$('img[class*="role-supp"]').hover(function (e) {
  $('#suppl').toggle();
  $('#supplp').toggle();
}, function (e) {
  $('#suppl').toggle();
  $('#supplp').toggle();
});

$('img[class*="role-init"]').hover(function (e) {
  $('#initl').toggle();
  $('#initlp').toggle();
}, function (e) {
  $('#initl').toggle();
  $('#initlp').toggle();
});

$('img[class*="role-dura"]').hover(function (e) {
  $('#dural').toggle();
  $('#duralp').toggle();
}, function (e) {
  $('#dural').toggle();
  $('#duralp').toggle();
});

$('img[class*="role-push"]').hover(function (e) {
  $('#pushl').toggle();
  $('#pushlp').toggle();
}, function (e) {
  $('#pushl').toggle();
  $('#pushlp').toggle();
});

$('img[class*="role-disa"]').hover(function (e) {
  $('#disal').toggle();
  $('#disalp').toggle();
}, function (e) {
  $('#disal').toggle();
  $('#disalp').toggle();
});

$('img[class*="role-esc"]').hover(function (e) {
  $('#escl').toggle();
  $('#esclp').toggle();
}, function (e) {
  $('#escl').toggle();
  $('#esclp').toggle();
});

