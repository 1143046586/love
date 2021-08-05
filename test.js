function onNavigation(a) {
  2 == a.progress && player.pause();
}
Flowtime.showProgress(!0),
  Flowtime.addEventListener('flowtimenavigation', onNavigation, !1),
  Flowtime.start(),
  $(function () {
    $('.nojavascript').remove(),
      setInterval(function () {
        $('.showtip').removeClass('showtip').hide().siblings('span').addClass('showtip').fadeIn();
      }, 5e3),
      $('#write-submit').click(function () {
        for (var a = {}, b = 1; 79 > b; b++) a[b] = $('#text-' + b).text();
        $('.write-ok').fadeIn(),
          $('#text-href').focus(),
          $('#back').click(function () {
            $('.write-ok').fadeOut();
          }),
          $('#write-post').click(function () {
            var b = $('#text-href').text(),
              c = $('#text-music').text();
            '' == b.replace(/\s+/g, '')
              ? ($('#write-url i').text('\u2190\u4e0d\u80fd\u4e3a\u7a7a').fadeIn(),
                $('#text-href').focus(),
                setTimeout(function () {
                  $('#write-url i').fadeOut();
                }, 3e3))
              : /^[\w\-]{3,30}$/.test(b)
              ? '' == c.replace(/\s+/g, '')
                ? ($('#write-mp3 i').text('\u2190\u4e0d\u80fd\u4e3a\u7a7a').fadeIn(),
                  $('#text-music').focus(),
                  setTimeout(function () {
                    $('#write-mp3 i').fadeOut();
                  }, 3e3))
                : /^(http|https):\/\/+([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?$/.test(c)
                ? ($('#back').html('<img src="img/loading.gif" alt="loading">'),
                  $('#write-post').text('\u9875\u9762\u751f\u6210\u4e2d...').attr('disabled', !0).addClass('disabled'),
                  $.post(
                    'love.php?add',
                    { textHref: b, textMusic: c, textArr: a },
                    function (a) {
                      1 == a.status
                        ? ($('#back').hide(),
                          $('.write-ok p').hide(),
                          $('.write-ok div button').hide(),
                          $('.write-ok div h2').hide().text('\u6210\u529f\u751f\u6210\u8868\u2764\u767d\u9875\u9762').fadeIn(),
                          $('#write-url')
                            .html('\u60a8\u7684\u8868\u767d\u94fe\u63a5\u662f\uff1a<a href="' + a.url + '" target="_blank">' + a.url + '</a>')
                            .fadeIn(),
                          $('.write-share').css('display', 'inline-block').children('p').show())
                        : 0 == a.status &&
                          ($('#write-url i').text(a.msg).fadeIn(),
                          $('#text-href').focus(),
                          setTimeout(function () {
                            $('#write-url i').fadeOut();
                          }, 3e3),
                          $('#back').text('\u91cd\u65b0\u4fee\u6539'),
                          $('#write-post').text('\u2764 \u751f\u6210\u8868\u767d\u9875\u9762').attr('disabled', !1).removeClass('disabled'));
                    },
                    'json'
                  ))
                : ($('#write-mp3 i').text('\u2190\u4e0d\u5141\u8bb8\u7684\u94fe\u63a5').fadeIn(),
                  $('#text-music').focus(),
                  setTimeout(function () {
                    $('#write-mp3 i').fadeOut();
                  }, 3e3))
              : ($('#write-url i').text('\u2190\u683c\u5f0f\u4e0d\u6b63\u786e').fadeIn(),
                $('#text-href').focus(),
                setTimeout(function () {
                  $('#write-url i').fadeOut();
                }, 3e3));
          });
      });
    var bgmMusic = document.getElementById('bgmMusic');
    $('#on').click(function () {
      bgmMusic.pause(), $('#on').hide(200), $('#off').css({ display: 'inline-block' }, 300);
    }),
      $('#off').click(function () {
        bgmMusic.play(), $('#off').hide(200), $('#on').css({ display: 'inline-block' }, 300);
      });
    var sharetext = $('#text-75').text() + 'love' + $('#text-76').text() + $('#text-77').text();
    with (((sharedesc =
      $('#text-1').text() + $('#text-2').text() + $('#text-3').text() + $('#text-4').text() + $('#text-5').text() + $('#text-6').text() + $('#text-7').text() + $('#text-8').text() + '......'),
    (window._bd_share_config = {
      common: {
        bdSnsKey: {},
        bdText: sharetext,
        bdDesc: sharedesc,
        bdUrl: 'http://www.qiugouda.com/love/2014/' + $('#text-href').text() + '.html',
        bdMini: '2',
        bdMiniList: [
          'mshare',
          'qzone',
          'tsina',
          'bdysc',
          'weixin',
          'renren',
          'tqq',
          'bdxc',
          'kaixin001',
          'tqf',
          'tieba',
          'douban',
          'tsohu',
          'bdhome',
          'sqq',
          'thx',
          'qq',
          'ibaidu',
          'taobao',
          'hi',
          'baidu',
          'sohu',
          't163',
          'qy',
          'meilishuo',
          'mogujie',
          'diandian',
          'huaban',
          'leho',
          'share189',
          'duitang',
          'hx',
          'tfh',
          'fx',
          'youdao',
          'sdo',
          'qingbiji',
          'ifeng',
          'people',
          'xinhua',
          'ff',
          'mail',
          'kanshou',
          'isohu',
          'yaolan',
          'wealink',
          'xg',
          'ty',
          'iguba',
          'fbook',
          'twi',
          'deli',
          's139',
        ],
        bdPic: 'http://www.qiugouda.com/love/img/319280.jpg',
        bdStyle: '1',
        bdSize: '32',
      },
      share: {},
    }),
    document))
      (0)[
        ((getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5))
      ];
  });
