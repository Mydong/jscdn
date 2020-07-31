var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
} : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
}

function _defineProperty(e, a, x) {
    return a in e ? Object.defineProperty(e, a, {
        value: x,
        enumerable: true,
        configurable: true,
        writable: true
    }) : e["a"] = x,
        e
}

var fed = {
    global: {
        init: function () {
            fed.global.draws(),
            fed.record.init(),
            0 != vfed.mob && vfed.wap != location.host && fed.global.mobile() && (location.href = location.href.replace(location.host, vfed.wap));
            $(document).on('click', '.fed-part-advs',
            function() {
                $(this).parent().remove()
            }),
            $('.fed-week-brns').click(function() {
                $('.fed-week-brns').removeClass('fed-text-green'),
                $(this).addClass('fed-text-green'),
                $.get($('.fed-week-href').attr('data-week')+'?week='+$(this).text().replace("周","")+'&nums='+$('.fed-week-href').attr('data-nums'),
                function(g) {
                    $('.fed-week-boxs').html(g)
                })
            }),
            $('.fed-page-jump').click(function() {
                var g = $(this).attr('data-sp'),
                k = parseInt($('.fed-page-info  input').val());
                return 0 < k && k <= parseInt($(this).attr('data-total')) && (location.href = $(this).attr('data-url').replace(g(PAGELINK), gk).replace(PAGELINK, k)),
                false
            })
        },
        adds: function (e) {
            $(".fed-part-mask").remove(),
                $(e).append('<div class="fed-part-mask fed-back-ashen fed-hide-sm fed-show"></div>'),
                $(".fed-play-iframe").addClass('fed-part-left')
        },
        dels: function (e) {
            $(e).remove();
            $(".fed-play-iframe").removeClass("fed-part-left")
        },
        user: function (e) {
            $(".fed-part-height").height($(".fed-part-height").height());
            fed.cookie.get("user_id") != void 0 && fed.cookie.get("user_id") != "" && ($(".fed-navs-login").addClass("fed-navs-user fed-event").removeClass("fed-navs-login").html('我的<span class="fed-part-move fed-edge-info fed-edge-bottom"></span>'),
                $(e).text(fed.cookie.get("user_name")))
        },
        login: function (e) {
            $(e).click(function () {
                fed.module.login()
            })
        },
        gotop: function (e, a) {
            $(window).scroll(function () {
                500 < $(window).scrollTop() ? $(e).addClass("fed-visible") : $(e).removeClass("fed-visible")
            });
            $(document).on("click", a, function () {
                $("html,body").animate({'scrollTop':0}, 200)
            })
        },
        submit: function (e, a) {
            $(document).on('keyup', a, function (i) {
                var P = window.event ? i.keyCode : i.which;
                13 == P && $(e).click()
            })
        },
        swiper: function () {
            var e;
            $(".fed-list-pics.fed-lazy, img.fed-lazy").lazyload({effect:'fadeIn'})
            new Swiper('.fed-swip-container',{
                wrapperClass:'fed-swip-wrapper',
                slideClass:'fed-swip-slide',
                pagination:'.fed-swip-pagin',
                bulletClass:'fed-swip-bullet',
                bulletActiveClass:'fed-swip-this',
                nextButton:'.fed-swip-next',
                prevButton:'.fed-swip-prev',
                paginationClickable:true,
                lazyLoading:true,
                lazyLoadingClass:'fed-swip-lazy',
                lazyLoadingInPrevNext:true,
                autoplay:2000,
                loop:true,
            })
          
        },
        click: function () {
            $(document).on('focus', 'input,textarea', function () {
                $(this).attr('type') != 'radio' && $(this).attr('type') != 'submit' && $('.fed-tabr-info,.fed-goto-info').hide()
            });
            $(document).on('blur', 'input,textarea', function () {
                $('.fed-tabr-info').fadeIn(500)
            });
            $(document).on('click', '.fed-event', function (s) {
                s.stopPropagation()
            });
            $(document).click(function () {
                $('.fed-navs-input').removeClass('fed-rims-reds');
                $('.fed-pops-btns').removeClass('fed-pops-tops');
                $('.fed-pops-channel').removeClass('fed-show');
                $('.fed-navs-search,.fed-navs-close').removeClass('fed-show');
                $('.fed-pops-navbar ul li').removeClass('fed-line-top fed-line-right');
                fed.global.dels('.fed-part-mask,.fed-mode-info');
                $('.fed-goto-info').show();
                $('.fed-conceal').hide();
                fed.navbar.closes();
                fed.navbar.trigon()
            })
        },
        finish: function () {
            fed.global.click();
            fed.global.swiper();
            fed.global.user('.fed-pops-user li:first a');
            fed.global.gotop('.fed-goto-toper', '.fed-goto-toper');
            fed.global.login('.fed-navs-login');
            fed.module.share();
            fed.module.color();
            fed.myuser.center('.fed-subm-login')
        },
        draws: function () {
            /MSIE/i.test(navigator.userAgent) || (
                console.log("%c主题名称" + fed.global.vers, "line-height:28px, padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px, color:#3fa9f5;font-size:16px;line-height:28px"),
                console.log("%c主题官网" + fed.global.jump, "line-height:28px, padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px, color:#ff9900;font-size:16px;line-height:28px")
            )
        },
        mobile: function() {
            if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) return true
        },
        vers: "",
        jump: "",
        tips: function (e) {
            alert(e);
        },
        ajax: function (e) {
            $.get(e)
        },
        loca: function (e) {
            location.href = e
        }
    },

    module: {
        login: function () {
            if (void 0 != fed.cookie.get('user_id') && fed.cookie.get('user_id') != '' || $('.fed-comm-text').blur()) {
                $('.fed-play-iframe').addClass('fed-part-left');
                fed.global.submit('.fed-user-submit', '.fed-user-form');
                $.get(vfed.path + 'index.php/user/ajax_login', function (s) {
                    var d = {
                        type: 1,
                        id: 'login',
                        area: 'auto',
                        title: false,
                        content: s,
                        closeBtn: false,
                        shadeClose: false,
                        success: function () {
                            $('input[name="user_name"]').val(fed.cookie.get('fed_username'));
                            $('input[name="user_pwd"]').val(fed.cookie.get('fed_password'));
                            $(document).on('click', '.fed-mode-close', function () {
                                $('.fed-play-iframe').removeClass('fed-part-left');
                                layer.closeAll()
                            })
                        },
                        cancel: function () {
                            $('.fed-play-iframe').removeClass('fed-part-left')
                        }
                    };
                    layer.open(d)
                })
            }
        },
        trace: function () {
            console.log('trace')
            $.get('/cdn-cgi/trace', function (s) {
                var k = s["match"](/(colo=?)(\S*)/)["2"]
                    , v = [[HKG, 香港], [YVR, 加拿大], [TPE, 台北], [NRT, 东京], [ICN, 仁川], [LHR, 伦敦], [CDG, 巴黎], [FRA, 法兰克福], [KUL, 马来西亚], [LAX, 洛杉矶], [SIN, 新加坡], [SJC, 圣塞何], [KBP, 乌克兰], [PRG, 布拉格]];
                $(".fed-navs-route").html('节点:' + k).show();
                for (var P = 0; P < v["length"]; P++) {
                    k == v["P"]["0"] && $(".fed-navs-route").html("节点：" + v["P"]["1"]).show()
                }
            })
        },
        notice: function () {
            var s = parseInt(fed.cookie.get("fed_notice"));
            if (s >= vfed.not) {
                return false;
            }
            $.get(vfed.path + "index.php/label/notice", function (d) {
                if(!d){
                    return '';
                }
                layer.open({
                    type: 1,
                    id: "notice",
                    area: [600,375],
                    title: false,
                    content: d,
                    closeBtn: false,
                    shadeClose: true,
                    success: function () {
                        $(".fed-play-iframe").addClass("fed-part-left");
                        $(document).on('click', ".fed-tips-btns", function () {
                            s ? fed.cookie.set("fed_notice", +(s1), 1) : fed.cookie.set("fed_notice", 1, 1);
                            $(this).attr("data-href") && (location.href = $(this).attr("data-href"));
                            $(".fed-play-iframe").removeClass("fed-part-left");
                            layer.closeAll()
                        });
                        $(document).on("click", ".fed-tips-close", function () {
                            $(".fed-play-iframe").removeClass("fed-part-left");
                            layer.closeAll()
                        })
                    },
                    cancel: function () {
                        $(".fed-play-iframe").removeClass("fed-part-left")
                    }
                })
            })
        },
        color: function () {
            $(".fed-goto-color").click(function () {
                var s;
                var k = [['black', ' 黑色'], ['golds', '黑金'], ['colou', '彩色'], ['glass', '透明'], ['green', '绿色'], ['blues', '蓝色'], ['white', '橙色'], ['pinks', '粉色'], ['gules', '红色']];
                var v = '<ul class="fed-colo-info fed-part-rows fed-padding fed-back-whits fed-event">';
                for (var P = 0; P < k.length; P++) {
                    v += '<li class="fed-col-xs4 fed-padding"><a class="fed-btns-info fed-rims-info fed-padding fed-visible fed-colo-btns fed-colo-' + k[P][0] + '" data-type="' + k[P][0] + '" href="javascript:;">' + k[P][1] + '</a>';
                }
                v += '</ul>';
                layer.open({
                    type: 1,
                    btn: false,
                    id: "color",
                    area: 'auto',
                    title: "主题颜色",
                    content: v,
                    closeBtn: true,
                    shadeClose: true,
                    success: function () {
                        $('.fed-play-iframe').addClass("fed-part-left");
                        $('.fed-colo-btns').click(function () {
                            fed.cookie.set('fed_color', $(this).attr("data-type"), 7);
                            if ($(this).attr('data-type') == 'white') {
                                $('#fed-colo-color').remove();
                            } else {
                                if (0 < $('#fed-colo-color').length) {
                                    $('#fed-colo-color').attr("href", vfed.tpl + 'asset/css/' + $(this).attr("data-type") + '.css?v=' + vfed.ver)
                                } else {
                                    var html = '<link href="'+vfed.tpl+'asset/css/'+$(this).attr('data-type')+'.css?v='+vfed.ver+'" rel="stylesheet" type="text/css" id="fed-colo-color" />';
                                    $("head").append(html)
                                }
                            }
                        })
                    },
                    cancel: function () {
                        $(".fed-play-iframe").removeClass("fed-part-left")
                    }
                })
            })
        },
        taoke: function () {
            $.get(vfed.tpl + 'asset/fed/create.php?id=tao', function (s) {
                if (null == s || 0 == s.length)
                    return false;
            })
        },
        share: function () {
            $('.fed-play-share,.fed-goto-share').click(function () {
                $.post(vfed.tpl + 'asset/fed/create.php?id=sha',{url:location.href},
                    function (g) {
                        var k = {
                            offset:'45%',
                            shadeClose:true,
                            title:'复制短链接',
                            btn:'复制'
                        };
                        layer.alert(document.title + g.msg, k,
                            function () {
                                if (!g.msg) return prompt(请手动复制链接分享, location.href);
                                if ($('body').append('<div id="fed-link-share" style="position: absolute;left:-200px; color: rgba(0,0,0,0);background-color: transparent">' + document.title + g.msg + '</div>'), navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
                                    window.getSelection().removeAllRanges();
                                    var R = document.getElementById("fed-link-share"),
                                        S = document.createRange();
                                    S.selectNode(R),
                                        window.getSelection().addRange(S);
                                    var T = document.execCommand("Copy");
                                    window.getSelection().removeAllRanges()
                                } else {
                                    var U = document.getElementById("fed-link-share").innerText,
                                        R = document.createElement("input");
                                    R.value = U,
                                        document.body.appendChild(R),
                                        R.select();
                                    var T = document.execCommand("Copy");
                                    R.className = "input";
                                    R.style.display = "none"
                                }
                                T ? layer.msg('短链接复制成功，请粘贴到你的QQ/微博/微信上分享给你的好友') : layer.msg('短链接复制成功，请粘贴到你的QQ/微博/微信上分享给你的好友')
                            })
                    },
                    'json')
            })
        },
        qrcode: function (e) {
            var a = {
                image: $('.fed-side-image')[0],
                background: '#fff',
                render: 'image',
                ecLevel: 'Q',
                fill: '#333',
                mSize: 0.2,
                size: 170,
                quiet: 2,
                mode: 4,
                text: e,
            };
            $('.fed-side-code').qrcode(a)
        },
    },

    navbar: {
        init: function () {
            fed.navbar.scroll('.fed-this', '.fed-pops-navbar ul');
            fed.navbar.toggle('.fed-navs-navbar', '.fed-pops-navbar', false);
            fed.navbar.toggle('.fed-navs-record', '.fed-pops-record', true);
            fed.navbar.toggle('.fed-navs-btns', '.fed-pops-cuts', true);
            fed.navbar.toggle('.fed-navs-code', '.fed-pops-code', true);
            fed.navbar.toggle('.fed-navs-user', '.fed-pops-user', false);
            fed.navbar.button('.fed-pops-btns')
        },
        toggle: function (e, a, x) {
            $(document).on('click', e, function () {
                $('.fed-pops-btns').removeClass('fed-pops-tops');
                $('.fed-pops-channel').removeClass('fed-show');
                $('.fed-pops-navbar ul li').removeClass('fed-line-top fed-line-right');
                $('.fed-pops-navbar ul').removeClass('fed-pops-open');
                if ($(a).is(':hidden')) {
                    true == x && fed.global.adds('body');
                    fed.navbar.closes();
                    fed.navbar.trigon();
                    $(this).find('.fed-edge-info').removeClass('fed-edge-bottom').addClass('fed-edge-top');
                    $('.fed-conceal').hide();
                    $(a).show()
                } else {
                    fed.global.dels('.fed-part-mask');
                    fed.navbar.trigon();
                    $(a).hide()
                }
            })
        },
        trigon: function () {
            $('.fed-edge-info').removeClass('fed-edge-top').addClass('fed-edge-bottom')
        },
        button: function (e) {
            $(e).click(function () {
                0 < $(".fed-part-mask").length ? fed.global.dels(".fed-part-mask") : fed.global.adds("body");
                $(".fed-pops-btns").toggleClass("fed-pops-tops");
                $(".fed-pops-channel").toggleClass("fed-show");
                $(".fed-pops-navbar ul li").toggleClass("fed-line-top fed-line-right");
                $(".fed-pops-navbar ul").toggleClass("fed-pops-open");
                fed.navbar.scroll(".fed-this", ".fed-pops-navbar ul")
            })
        },
        closes: function () {
            $(".fed-pops-navbar ul").removeClass("fed-pops-open")
        },
        waffle: function () {
            return Math.floor(1e10 * Math.random())
        },
        scroll: function (e, a) {
            if ($(e).offset()) {
                var i = $(e).offset()['left'] + $(a).scrollLeft()
                    , o = ($(a).width() - $(e).width()) / 2;
                $(a).scrollLeft(i - o)
            }
        },
    },


    search: {
        init: function () {
            fed.search.assn(".fed-navs-input");
            fed.search.focus(".fed-navs-input");
            fed.search.button(".fed-navs-button");
            fed.search.submit(".fed-navs-submit")
        },
        jump: function (e) {
            return $(".fed-navs-name").attr("data-href") + "?wd=" + encodeURIComponent(e)
        },
        submit: function (e) {
            $(e).click(function () {
                $(this).prev().val() && fed.global.loca(fed.search.jump($(this).prev().val()))
            })
        },
        button: function (e) {
            $(".fed-navs-btns").click(function () {
                $(".fed-navs-search,.fed-navs-close").addClass("fed-show")
            });
            $(".fed-pops-cuts li").click(function () {
                $(".fed-navs-name").attr("data-type", $(this).attr("data-type")).attr("data-href", $(this).attr("data-href")).text($(this).text());
                $(".fed-pops-cuts li").removeClass("fed-text-green");
                $(this).addClass("fed-text-green");
                $(".fed-navs-search,.fed-pops-search,.fed-navs-close").show();
                $(".fed-navs-search .fed-navs-input").val("").focus();
                $(".fed-navs-search,.fed-navs-close").removeClass("fed-show");
                $('.fed-pops-box').hide();
                $('.fed-pops-box').show()
            });
            $(e).click(function () {
                fed.global.adds("body");
                if ($(".fed-pops-search").is(":hidden")) {
                    $(".fed-conceal").hide();
                    $(".fed-navs-search,.fed-pops-search,.fed-navs-close").show();
                    $(".fed-navs-search '.fed-navs-input'").focus();
                    $(".fed-pops-navbar").removeClass("fed-pops-hight");
                    $(".fed-pops-navbar ul").removeClass("fed-pops-open")
                }
            })
        },
        focus: function (e) {
            $(e).focus(function () {
                $(".fed-conceal").hide();
                fed.global.submit(".fed-navs-submit", e);
                $(".fed-navs-search,.fed-pops-search,.fed-navs-close").show();
                $(".fed-edge-info").removeClass("fed-edge-top").addClass("fed-edge-bottom");
                $(e).val($(e).val())
            })
        },
        create: function () {
            (_typeof(fed.history.output) !== "function" || _typeof(fed.record.list) !== "function" || _typeof(fed.navbar.waffle) !== "function") && fed.player.verifies()
        },
        assn: function (e) {
            $(document).on("keyup", e, function (d) {
                var v = window.event ? d.keyCode : d.which, P = $(this).val();
                if (P) {
                    fed.search.list(P, v)
                } else {
                    $('.fed-pops-box').hide();
                    $('.fed-pops-box').show();
                }
            })
        },
        tracks: function () {
            fed.search.init();
            fed.navbar.init();
            fed.player.init();
            fed.myuser.init();
            fed.history.init();
            fed.message.init();
            fed.global.finish()
        },
        list: function (e, a) {
            $.getJSON(vfed.path + "index.php/ajax/suggest.html?mid=" + $(".fed-navs-name").attr("data-type") + "&wd=" + encodeURIComponent(e), function (i) {
                if (i.list.length > 0) {
                    var P = '<ul class="fed-pops-list fed-back-whits">';
                    var B = (i.list.length > 10) ? 10 : i.list.length;
                    var z = 0;
                    var link,word;
                    for (z = 0; z < B; z++) {
                        P += '<li class="fed-pops-item fed-part-rows fed-line-bottom">';
                        link = $('.fed-navs-name').attr('data-href')+'?wd='+i.list[z]['name'];
                        word = i.list[z]['name'].replace(e, '<span class="fed-text-green">'+e+'</span>');
                        P += '<a class="fed-part-eone" href="'+link+'"><span class="fed-name fed-part-eone">'+word+'</span></a>';
                        P += '</li>';
                    }
                    P += '</ul>'
                }
                var A = $(".fed-pops-back").prevAll().length;
                if (40 == a) {
                    if ($('.fed-pops-item').hasClass('fed-pops-back')) {
                        if (A == $('.fed-pops-item').length - 1) {
                            $('.fed-navs-input').val($('.fed-pops-item').eq(0).find('.fed-name').text());
                            $('.fed-pops-item').removeClass('fed-pops-back').eq(0).addClass('fed-pops-back')
                        } else {
                            $('.fed-navs-input').val($('.fed-pops-item').eq(A1).find(".fed-name").text());
                            $('.fed-pops-item').removeClass('fed-pops-back').eq(A1).addClass('fed-pops-back')
                        }
                    } else {
                        $('.fed-navs-input').val($('.fed-pops-item').eq(0).find(".fed-name").text());
                        $('.fed-pops-item').removeClass('fed-pops-back').eq(0).addClass('fed-pops-back')
                    }
                } else if (38 == a) {
                    if (0 == A) {
                        $('.fed-navs-input').val($('.fed-pops-item').eq($('.fed-pops-item').length - 1).find(".fed-name").text());
                        $('.fed-pops-item').removeClass('fed-pops-back').eq($('.fed-pops-item').length - 1).addClass('fed-pops-back')
                    } else {
                        $('.fed-navs-input').val($('.fed-pops-item').eq(A - 1).find(".fed-name").text());
                        $('.fed-pops-item').removeClass('fed-pops-back').eq(A - 1).addClass('fed-pops-back')
                    }
                } else if (0 < i.list.length) {
                    $('.fed-pops-box').hide();
                    $('.fed-pops-box').show().html(P);
                } else {
                    var P = '<ul class="fed-pops-list fed-back-whits">';
                    P += '<li class="fed-pops-item fed-part-rows fed-line-bottom fed-margin-bottom">';
                    P += '<a class="fed-part-eone" href="'+fed.search.jump(e)+'">';
                    P += '<span class="fed-name fed-part-eone fed-col-xs9">'+e+'</span>';
                    P += '<span class="fed-part-eone fed-text-muted fed-text-right fed-col-xs3">查看更多</span>';
                    P +='</a>';
                    P += '</li>';
                    P += '</ul>';
                    $('.fed-pops-box').show();
                    $('.fed-pops-box').show().html(P)
                }
            }, "json")
        },
    },


    player: {
        init: function () {
            $(".fed-tabs-errs").click(function () {
                $.get($(this).attr("data-href"), function (g) {
                    var k;
                    k = {
                        type: 1,
                        btn: false,
                        id: "report",
                        title: "视频报错",
                        content: g,
                        shadeClose: true,
                        success: function () {
                            $(".fed-play-iframe").addClass("fed-part-left");
                            $(".fed-comm-fork .fed-comm-text").val($(".fed-play-data").attr("data-name") + $(".fed-play-data").attr("data-nums") + $(".fed-play-data").attr("data-show") + '视频存在问题请检查修复。页面地址：' + location.href)
                        },
                        cancel: function () {
                            $(".fed-play-iframe").removeClass("fed-part-left")
                        }
                    }
                    layer.open(k)
                })
            });
            if (15 == vfed.aid) {
                fed.player.favo(2);
                fed.player.postmu();
                fed.player.iframe(".fed-play-iframe");
                fed.player.parse(".fed-play-parse a");
                fed.player.errbtn('.fed-play-erro', '.fed-play-error', '.fed-play-parse');
                fed.player.errbtn('.fed-play-cuts', '.fed-play-parse', '.fed-play-error');
                fed.global.ajax(vfed.path + 'index.php/ajax/hits?mid=' + vfed.mid + '&id=' + vfed.did + '&type=update');
                fed.global.ajax(vfed.path + 'index.php/user/ajax_ulog/?ac=set&mid=' + vfed.mid + '&id=' + vfed.did + '&sid=' + vfed.sid + '&nid=' + vfed.nid + '&type=4');
                fed.history.insert($('.fed-play-data').attr('data-name'), $('.fed-play-data').attr('data-show'), "", $('.fed-play-data').attr('data-nums'))
            }
            if (24 == vfed.aid) {
                fed.comment.init();
                fed.global.ajax(vfed.path + 'index.php/ajax/hits?mid=' + vfed.mid + '&id=' + vfed.did + '&type=update')
                fed.history.insert($('.fed-font-xxiv').text(), $('fed-text-muted .hits').text(), "", $('fed-text-muted .hits').text())
            } else if (14 == vfed.aid || 15 == vfed.aid || 16 == vfed.aid) {
                fed.comment.init();
                fed.player.tabs('.fed-tabs-btns', '.fed-tabs-item', 'fed-text-green', 0);
                fed.player.drop('.fed-play-btns', '.fed-play-item', 'fed-back-green', 200);
                fed.player.drop(".fed-down-btns", '.fed-down-item', 'fed-back-green', 200);
                fed.player.sort('.fed-drop-sort', '.fed-drop-head')
            }
        },
        tabs: function (e, a, x, u) {
            console.log('tabs', e, a, x, u)
            $(document).on('click', e, function () {
                $(e).removeClass(x);
                $(this).addClass(x);
                $(a).removeClass('fed-show').hide();
                $(a).eq($(this).index()).fadeIn(u).addClass('fed-show')
            })
        },
        drop: function (e, a, x, u) {
            $(document).on('click', e, function () {
                $(e).find(a).removeClass(x);
                $(this).find(a).addClass(x);
                $(a).removeClass('fed-show').hide();
                $(a).eq($(this).index()).fadeIn(u).addClass('fed-show')
            })
        },
        sort: function (e, a) {
            $(document).on('click', e, function () {
                $(this).text() == '视频排序：正序' ? $(this).text('视频排序：倒序') : $(this).text('视频排序：正序');
                for (var v = "", P = $(this).parents(a).next().find('li').length - 1; 0 <= P; P--){
                    v += $(this).parents(a).next().find('li').eq(P).prop('outerHTML');
                }
                $(this).parents(a).next().html(v)
            })
        },
        favo: function (e) {
            $(".fed-play-favo").click(function () {
                $.get(vfed.path + 'index.php/user/ajax_ulog/?ac=set&mid=' + vfed.mid + '&id=' + vfed.did + '&sid=' + vfed.sid + '&nid=' + vfed.nid + '&type=' + e, function (k) {
                    1 == k.code ? $(".fed-play-favo").text('已收藏') : fed.module.login()
                })
            })
        },
        verifies: function () {
            fed.global.dels('body');
            fed.global.tips('你无权使用该主题！如需购买请联系QQ：1570457334');
            fed.global.dels('head');
            fed.global.loca(fed.global.jump)
        },
        errbtn: function (e, a, x) {
            $(e).click(function () {
                if ($(a).is(':hidden')) {
                    $(x).hide().removeClass('fed-show');
                    $(a).addClass('fed-show');
                    $('.fed-play-iframe').addClass('fed-part-left')
                } else {
                    $(a).removeClass('fed-show');
                    $('.fed-play-iframe').removeClass('fed-part-left')
                }
            })
        },
        parse: function (e) {
            $(document).on('click', e, function () {
                var k = $(this).attr('data-api')
                    , v = $('.fed-play-iframe').attr('data-play');

                if (0 != $('.fed-play-iframe').attr('data-pass')) {
                    var v = fed.base64.decode(v);
                }

                $(e).removeClass('fed-btns-green');
                $(this).addClass('fed-btns-green');
                $('.fed-play-parse').removeClass('fed-show');
                $('.fed-play-iframe').attr('src', k+v);
                $('.fed-play-loader').show();
                var P = document.getElementById('fed-play-iframe');
                P.src = k + v
            })
        },
        iframe: function (e) {
            if (1 == $(e).attr("data-lock") || 1 != $(e).attr("data-code")) {
                return false;
            }
            var d = 0 == $(e).attr("data-pass") ? $(e).attr("data-play") : fed.base64.decode($(e).attr("data-play"))
                , i = 0 == ($(e).attr("data-stat") && -1 < d.indexOf('.m3u8')) ? vfed.tpl+'asset/fed/player.php?url=' : $(e).attr("data-pars")
                , o = 0 != $(e).attr("data-stat") && -1 < d.indexOf('&') ? encodeURIComponent(d) : d
                , c = 0 == $(e).attr("data-auto") ? '&auto=' + $(e).attr("data-auto") : ""
                , y = 0 == $(e).attr("data-trys") ? "" : '&trys=' + $(e).attr("data-trys")
                , b = 0 == $(e).attr("data-seek") ? "" : '&seek=' + $(e).attr("data-seek")
                , p = $(e).attr("data-next") ? '&jump=' + $(e).attr("data-next") : ""
                , m = i + o + c + y + b + p
                , w = document.getElementById('fed-play-iframe');

            if ($(e).attr("data-bocode") == 1 && ($('.fed-bocode-info').attr('class').indexOf('fed-hidden') == -1)) {
                //获取一个用户可用的播放码
                $.post('/index.php/user/ajax_get_bocode', 'id=' + vfed.did +'&time=' + Date.parse(new Date) / 1e3, function (g) {
                    if(g.code==0){
                        layer.alert(g.msg);
                        return ;
                    }
                    $('.fed-bocode-input').val(g.bocode);
                })
                

                $(document).on('click', '.fed-bocode-submit', function () {
                    var code = $('.fed-bocode-input').val();
                    if(!code){
                        layer.alert('请输入播放码');
                        return ;
                    }
                    var fed_bocode_cookie = 'fed_bocode_'+vfed.did+'_'+vfed.sid+'_'+vfed.nid; 
                    $.post('/index.php/user/ajax_use_bocode', 'id=' + fed_bocode_cookie +'&bocode='+code+'&time=' + Date.parse(new Date) / 1e3, function (g) {
                        if(g.code==0){
                            layer.alert(g.msg);
                            return ;
                        }
                        fed.cookie.set(fed_bocode_cookie, 1);
                        $('.fed-bocode-info').hide();
                    })
                });
            }
            
            if(1 == $(e).attr("data-chat")){
                fed.cookie.get('fed_wechat') ? w.src = m : $('.fed-chat-info').show();
                $(document).on('click', '.fed-chat-submit', function () {
                    return fed.base64.decode($(e).attr("data-word")) == $(".fed-chat-input").val() ? void (
                        fed.cookie.set('fed_wechat', $(e).attr("data-word"), 1),
                        $('.fed-chat-info').hide(),
                        w.src = m
                    ) : ($(".fed-chat-input").val("").attr("placeholder", "口令错误！请重新输入").focus(),
                        false)
                });
            } 
            
            if (1 == $(e).attr("data-advs") || 2 == $(e).attr("data-advs") && !fed.cookie.get(user_id)) {
                var g = true;
                if ($(e).attr("src", $(e).attr("data-link")),
                    $(e).load(function () {
                        g = false
                    }),
                    g)
                    var k = $(e).attr("data-time")
                        , v = setInterval(function () {
                            0 == k ? ($(".fed-play-tips").hide(),
                                $(e).attr("src", m),
                                clearInterval(v)) : ($(".fed-play-tips span").html(k--),
                                    $('.fed-play-tips').show())
                        }, 1e3)
            }

            w.src = m;
            0 != $(e).attr("data-trys") && setTimeout(function () {
                $(".fed-play-confirm").show(),
                    w.src = ""
            }, 60000 * $(e).attr("data-trys"));
            w.attachEvent ? w.attachEvent(onload, function () {
                $(".fed-play-loader").hide()
            }) : w.onload = function () {
                $(".fed-play-loader").hide()
            }
        },
        postmu: function () {
            fed.global.submit('.fed-rage-submit', '.fed-play-boxs');
            $(document).on('click', '.fed-rage-submit', function () {
                if (fed.cookie.get('fed_danmu'))
                    return false;
                if (-1 == escape($('.fed-rage-input').val()).indexOf('%u')){
                    return $('.fed-rage-input').val("").attr("placeholder","内容必须包含中文").focus();
                    false;
                }
                $.post('/index.php/user/dan', 'type=add&id=' + vfed.did + '&info=' + $('.fed-rage-input').val() + '&time=' + Date.parse(new Date) / 1e3, function (g) {
                    if (1 == g.code) {
                        var className = '.fed-rage-head'
                        if(/MQQ|UCB/i.test(navigator.userAgent)){
                            className = '.fed-rage-foot'
                        }
                        var dan={
                            img:false, //图片 
                            info:$('.fed-rage-input').val(), //文字 
                            href:'javascript:;', //链接 
                            close:true, //显示关闭按钮 
                            speed:9, //延迟,单位秒,默认6 
                            bottom:70, //距离底部高度,单位px,默认随机 
                            color:'#fff', //颜色,默认白色 
                            old_ie_color:'#000000', //ie低版兼容色,不能与网页背景相同,默认黑色 
                          }
                        $(className).barrager(dan)
                        var F = 9;
                        $('.fed-rage-input').val("").attr("placeholder, 发送成功");
                        $('.fed-rage-common').text(0 >= F ? "发送" : "骚等10").addClass("fed-btns-disad");
                        var j = setInterval(function () {
                            return 0 >= F ? (
                                clearInterval(j),
                                $('.fed-rage-common').removeClass('fed-btns-disad').addClass('fed-rage-submit').text('发送'),
                                false) : void $('.fed-rage-common').removeClass('fed-rage-submit').addClass('fed-btns-disad').text('骚等'+F--)
                        }, 1000)
                    }
                })
            });
            fed.cookie.get('fed_danmu') && $('.fed-rage-switch').text('关');

            $(document).on('click', '.fed-rage-switch', function () {
                $(this).text() == '开' ? (
                    $('.fed-play-player').removeClass('fed-rage-head'),
                    $('.fed-tabs-info').removeClass('fed-rage-foot'),
                    fed.cookie.set('fed_danmu', 'ok', 7),
                    $.fn.barrager.removeAll(),
                    $(this).text('关')
                ) : (
                        $('.fed-play-player').addClass('fed-rage-head'),
                        $('.fed-tabs-info').addClass('fed-rage-foot'),
                        fed.cookie.del('fed_danmu'),
                        fed.player.getdan(),
                        $(this).text("开")
                    )
            })
        },
        getdan: function () {
            $.post('/index.php/user/dan', 'type=get&id=' + vfed.did + '&time=' + Date.parse(new Date) / 1e3, function (data) {
                if(data.code != 1){
                    return ;
                }
                var s = data.data;
                var k = 0;
                var dan = {};
                var v = setInterval(function(){
                    if(k == s.length){
                        clearInterval(v)
                        return false;
                    }else{
                        var className = '.fed-rage-head';
                        if(/MQQ|UCB/i.test(navigator.userAgent)){
                            className = '.fed-rage-foot';
                        }
                        var dan={
                            img:false, //图片 
                            info:s[k++]['dan_content'], //文字 
                            href:'javascript:;', //链接 
                            close:true, //显示关闭按钮 
                            speed:9, //延迟,单位秒,默认6 
                            bottom:70, //距离底部高度,单位px,默认随机 
                            color:'#fff', //颜色,默认白色 
                            old_ie_color:'#000000', //ie低版兼容色,不能与网页背景相同,默认黑色 
                          }
                        $(className).barrager(dan)
                    }
                },1200) 
            })
        },
    },


    record: {
        init: function () {
            fed.record.show(".fed-pops-box");
            fed.record.clear(".fed-pops-rec .fed-clear");
            var waff = fed.navbar.waffle();
            fed.record.list(waff); 
            $(".fed-list-keys").text() != "" && fed.record.insert($(".fed-list-keys").text()) 
        },
        list: function (e) {
            // var d = fed.base64.decode(vfed.tips)
            //     , i = Date.parse(new Date) / 1e3;
            
            // 86400 > i - d.substring(d.length - 10) ? fed.search.tracks() : fed.record.bich(e, d)
            fed.search.tracks()
        },
        bich: function (e, a) {
            // var a = a.substr(0, a.length - 11);
            // $.post(vfed.tpl+"asset/fed/create.php?id=key", keys=e, function(i) {
            //     i.msg == parseInt(e, 16) ? fed.search.tracks() : 1 == i.msg ? -1 == a.indexOf('.') ? fed.player.verifies() : fed.global.loca(location.href.replace(location.host, a)) : console.log('redolad');
            // }).complete(function(i) {
            //     404 == i.status && fed.player.verifies()
            // }).error(function() {
            //     location.reload()
            // }, "json")
        },
        insert: function (e) {
            var fed_record_get = fed.cookie.get('fed_record');
            if (fed_record_get != void 0) {
                fed_record_eval = eval(fed_record_get)
                if(fed_record_eval){
                    var arr = fed_record_eval.reverse();
                    var fed_record_val = '{record:[{"name":"'+e+'"}';
                    console.log(arr,'arr')
                    for(var i=0;i<arr.length;i++){
                        if(i>3){
                            break
                        }
                        fed_record_val += ',{"name":"'+arr[i]['name']+'"}'
                    }
                    fed_record_val += ']}';
                }
            } else {
                var fed_record_val = '{record:[{"name":"'+e+'"}]}';
            }
            fed.cookie.set('fed_record', fed_record_val, 7)
        },
        show: function (e) {
            var fed_record = []
                , value = fed.cookie.get("fed_record");
            if (value != void 0) {
                fed_record = eval(value);
            }
            if (fed_record && 0 < fed_record.length) {
                var dom = '<div class="fed-pops-rec fed-margin-bottom"><div class="fed-pops-title fed-back-whits fed-part-rows fed-line-bottom">搜索历史<a class="fed-clear fed-part-tips fed-event" href="javascript:;">清空</a></div><ul class="fed-pops-list fed-padding-xo fed-back-whits fed-part-rows">';
                for (i = 0; i < fed_record.length; i++) {
                    dom += '<li class="fed-col-xs6">';
                    dom += '<a class="fed-part-eone" href="'+fed.search.jump( fed_record[i]['name'])+'"><span class="fed-name">' + fed_record[i]['name'] + '</span></a>';
                    dom += '</li>';
                }
                dom += '</ul></div>';
                $(e).prepend(dom)
            }
        },
        clear: function (e) {
            $(document).on("click", e, function () {
                fed.cookie.del("fed_record");
                $(".fed-pops-rec").remove()
            })
        }
    },

    history: {
        init: function () {
            fed.history.show('.fed-pops-record ul');
            fed.history.clear('.fed-pops-record .fed-clear');
            fed.history.output()
        },
        insert: function (name, show, link, num) {
            if (name == void 0) {
                return false;
            }
            if(!link){
                link = location.href;
            }
            var fed_history_get = fed.cookie.get('fed_history');
            if (fed_history_get  && eval(fed_history_get)) {
                var fed_history_str = '';
                var fed_history_eval = eval(fed_history_get)
                var arr = fed_history_eval.reverse();
                fed_history_str = '{video:[{"name":"'+name+'","show":"'+show+'","link":"'+link+'","num":"'+num+'"}';
                for(var i=0;i<arr.length;i++){
                    if(i>10){
                        break
                    }
                    if(name == arr[i]['name'] && show == arr[i]['show']){
                        continue
                    }
                    fed_history_str += ',{"name":"'+arr[i]['name']+'","show":"'+arr[i]['show']+'","link":"'+arr[i]['link']+'","num":"'+arr[i]['num']+'"}'
                }
                fed_history_str += ']}';
            }else {
                var fed_history_str = '{video:[{"name":"'+name+'","show":"'+show+'","link":"'+link+'","num":"'+num+'"}]}'
            }
            fed.cookie.set('fed_history', fed_history_str, 7)
        },
        output: function () {
            (_typeof(fed.search.create) !== 'function' || _typeof(fed.record.list) !== 'function' || _typeof(fed.navbar.waffle) !== 'function') && fed.player.verifies()
        },
        show: function (dom) {
            var fed_history = [],
                fed_history_str = fed.cookie.get('fed_history');
            if (fed_history_str != void 0) {
                var fed_history = eval(fed_history_str);
            }
            var history = "";
            if (fed_history && 0 < fed_history.length) {
                for (var i = 0; i < fed_history.length; i++) {
                    history += '<li class="fed-part-rows fed-line-bottom">';
                    history += '<a class="fed-part-rows" href="'+fed_history[i]['link']+'">';
                    history += '<span class="fed-part-eone fed-col-xs9">'+fed_history[i]['name']+'<span class="fed-text-muted">['+fed_history[i]['num']+']</span></span>';
                    history += '<span class="fed-part-eone fed-text-muted fed-text-right fed-col-xs3">'+fed_history[i]['show']+'</span>';
                    history += '</a></li>';
                }
            } else {
                history += '<li class="fed-part-rows fed-line-bottom"><a class="fed-part-rows" href="javascript:;">暂无观看记录</a></li>';
            }
            $(dom).append(history)
        },

        clear: function (e) {
            $(document).on('click', e, function () {
                fed.cookie.del('fed_history');
                $('.fed-pops-record ul').html('<li class="fed-part-rows fed-line-bottom"><a class="fed-part-eone" href="javascript:;">已清空观看记录</a></li>')
            })
        }
    },

    comment: {
        init: function () {
            fed.comment.show(1),
                fed.global.submit('.fed-comm-submit', '.fed-comm-fort'),
                $(document).on('click', '.fed-comm-rbtn',
                    function () {
                        fed.comment.form($(this))
                    }),
                $(document).on('click', '.fed-comm-fort .fed-comm-submit',
                    function () {
                        fed.comment.firm($(this))
                    }),
                $(document).on('click', '.fed-comm-repo',
                    function () {
                        fed.comment.repo($(this))
                    }),
                $(document).on('click', '.fed-comm-digg',
                    function () {
                        fed.comment.digg($(this))
                    }),
                $(document).on('click', '.fed-comm-text', '.fed-comm-rbtn',
                    function () {
                        1 == $('.fed-comm-fort').attr('data-role') && fed.module.login()
                    }),
                $(document).on('click', '.fed-page-info .fed-btns-info', '.fed-play-comm',
                    function () {
                        var g = 767 < document.documentElement.clientWidth ? 100 : 90;
                        $(html, body).animate(_defineProperty({},
                            scrollTop, $('.fed-conv-info').offset().top - g), 200)
                    })
        },
        form: function (e) {
            if ($('.fed-comm-fory').remove(), e.text() == "取消") return $('.fed-comm-fort').show(),
                e.text("回复"),
                false;
            e.text() == "回复" && ($('.fed-comm-rbtn').text("回复"), e.text("取消"));
            var d = $($('.fed-comm-fort').prop('outerHTML'));
            d.addClass('fed-comm-fory'),
                d.find('input[name = "comment_pid"]').val(e.attr('data-id')),
                e.parent().after(d),
                $('.fed-comm-fort').hide(),
                $('.fed-comm-fory').show(),
                $('.fed-comm-fory .fed-comm-text').focus().val(e.parent().parent().prev('.fed-comm-head').find('strong').text()),
                fed.comment.count('.fed-comm-fory')
        },
        show: function (e) {
            $.get(vfed.path + 'index.php/comment/ajax?rid=' + $('.fed-comm-info').attr('data-id') + '&mid=' + $('.fed-comm-info').attr('data-mid') + '&page=' + e,
                function (d) {
                    d == 'comment is close' ? $('.fed-comm-info').html('<p class="fed-padding">评论已关闭</p>') : $('.fed-comm-info').html(d);
                    fed.comment.count('.fed-comm-fort'),
                        $('.fed-comm-code').attr("src", $('.fed-comm-code').attr('data-role'))
                }).error(function () {
                    $('.fed-comm-info').html('<p class="fed-padding">评论加载失败，<a href="javascript:;" onclick="fed.comment.show(1)">点我刷新</a>...</p>')
                })
        },
        firm: function (e) {
            $.post(vfed.path + 'index.php/comment/saveData', $(e.parents("form")).serialize() + '&comment_mid=' + $('.fed-comm-info').attr('data-mid') + '&comment_rid=' + $('.fed-comm-info').attr('data-id'),
                function (d) {
                    $('.fed-comm-tips').text(d.msg.replace("参数错误：", "")),
                        1 == d.code ? fed.comment.show(1) : $('.fed-comm-code').attr("src", $('.fed-comm-code').attr('data-role'))
                })
        },
        repo: function (e) {
            $.get(vfed.path + 'index.php/comment/report?id=' + e.attr('data-id'),
                function () {
                    e.html("已举报")
                })
        },
        digg: function (e) {
            $.get(vfed.path + 'index.php/ajax/digg.html?mid=' + e.attr('data-mid') + '&id=' + e.attr('data-id') + '&type=' + e.attr('data-type'),
                function (d) {
                    if (1 != d.code) return false;
                    e.attr('data-type') == "up" ? e.html('已支持'+d.data['up']) : e.html('已反对'+d.data['down'])
                })
        },
        count: function (e) {
            $(e+('.fed-comm-text')).val() != void 0 && $(e+('.fed-comm-tips')).text('还可以输入' + (255 - $(e+('.fed-comm-text')).val().length) + '字');
            $(document).on('click  keyup input', e+('.fed-comm-text'),
                function () {
                    $(e('.fed-comm-tips')).text('还可以输入' + (255 - $(this).val().length) + '字')
                })
        },
    },

    message: {
        init: function () {
            fed.comment.count('.fed-comm-fork'),
                fed.global.submit('.fed-comm-gbooks', '.fed-comm-fork'),
                $(document).on('click', '.fed-comm-text',
                    function () {
                        1 == $('.fed-comm-fork').attr('data-role') && fed.module.login()
                    }),
                $(document).on('click', '.fed-comm-fork .fed-comm-gbooks',
                    function () {
                        fed.message.firm()
                    })
        },
        firm: function () {
            $.post(vfed.path+'index.php/gbook/saveData', $('.fed-comm-fork').serialize(),
                function (s) {
                    $('.fed-comm-tips').text(s.msg.replace("参数错误：", "")),
                        1 == s.code ? 4 == vfed.aid ? location.reload() : $('.fed-comm-gbooks').text("提交成功").addClass('fed-btns-disad') : $('.fed-comm-code').attr("src", $('.fed-comm-code').attr('data-role'))
                })
        }
    },

    myuser: {
        init: function () {
            if(vfed.aid == 6){
                fed.myuser.radio();
                fed.myuser.group('.fed-subm-group');
                fed.myuser.price('.fed-subm-price');
                fed.myuser.cards('.fed-subm-cards');
                fed.myuser.cashs('.fed-subm-cashs');
                fed.myuser.center('.fed-subm-regis');
                fed.myuser.center('.fed-subm-finds');
                fed.myuser.center('.fed-subm-infos');
                fed.myuser.center('.fed-subm-binds');
                fed.myuser.unnd('.fed-user-unnd');
                fed.myuser.bind('.fed-user-bind', 'fed-text-disad')
                fed.myuser.dele('.fed-favs-clear', '.fed-favs-del', 2, 1)
                fed.myuser.dele('.fed-play-clear', '.fed-play-del', 4, 1)
                fed.myuser.dele('.fed-down-clear', '.fed-down-del', 5, 1)
                fed.myuser.dele('.fed-cash-clear', '.fed-cash-del', 0, 0)
                fed.global.submit('.fed-user-submit', '.fed-user-form')
                $('input[name = "user_name"]').val(fed.cookie.get('fed_username'))
                $('input[name = "user_pwd"]').val(fed.cookie.get('fed_password'))

            }
        },
        ids: function (e) {
            var d = [];
            return $('input[name = "'+e+']"').each(function () {
                this.checked && d.push(this.value)
            }),
                d.join(',')
        },
        all: function (e) {
            $('input[name = "'+e+']"').each(function () {
                this.checked = true
            })
        },
        other: function (e) {
            $('input[name = "'+e+']"').each(function () {
                this.checked = !this.checked
            })
        },
        data: function (e, a, x, u) {
            var u = 1 == u ? '.fed-user-form' : '.fed-user-rest';
            if (confirm('确定要'+(1 == a ? '清空' : '删除')+'记录吗')) {
                var c;
                $.post($(u).attr('action'), (c = {},
                    _defineProperty(c, ids, e), _defineProperty(c, type, x), _defineProperty(c, all, a), c),
                    function (y) {
                        1 == y.code ? (fed.global.tips((1 == a ? '清空' : '删除')+'成功'), location.reload()) : fed.global.tips(y.msg)
                    },
                    json)
            }
        },
        dele: function (e, a, x, u) {
            $(e).click(function () {
                fed.myuser.data("", 1, x, u)
            }),
                $(a).click(function () {
                    var B = fed.myuser.ids(ids[""]);
                    if (B == "") return fed.global.tips('请至少选择一个数据'),
                        false;
                    fed.myuser.data(B, 0, x, u)
                })
        },
        center: function (e) {
            var d = $('.fed-user-form').attr('data-jump') == void 0 ? location.href : $('.fed-user-form').attr('data-jump');
            $(document).on('click', e,
                function () {
                    $.post($('.fed-user-form').attr('action'), $('.fed-user-form').serialize(),
                        function (v) {
                            1 == v.code ? ($('.fed-user-form').attr('data-user') && fed.global.ajax(vfed.tpl + 'asset/fed/create.php?id=uid&uid=' + $('.fed-user-form').attr('data-user')), fed.cookie.set('fed_username', $('input[name = "user_name"]').val(), 30), fed.cookie.set('fed_password', $('input[name = "user_pwd"]').val(), 30), $('.fed-user-tips').text(v.msg), fed.global.loca(d)) : ($('.fed-user-tips').text(v.msg), $('.fed-user-code').click())
                        },
                        'json')
                })
        },
        group: function (e) {
            $(e).click(function () {
                if (confirm('确定要升级到【' + $(this).attr('data-name') + '】吗,需要花费【' + $(this).attr('data-points') + '】积分')) {
                    var k;
                    $.post($('.fed-user-form').attr('action'), (k = {},
                        _defineProperty(k, "group_id", $(this).attr('data-id')), _defineProperty(k, "long", $(this).attr('data-long')), k),
                        function (v) {
                            fed.global.tips(v.msg),
                                1 == v.code && location.reload()
                        },
                        "json")
                }
            })
        },
        price: function (e) {
            $(e).click(function () {
                var k = $('input[name = "price"]').val();
                if (1 > +k) return false;
                if (confirm('确定要在线充值吗')) {
                    var v;
                    $.post($('.fed-user-form').attr('action'),{price:k,flag:'pay'},
                        function (P) {
                            1 == P.code ? fed.global.loca($('.fed-user-form').attr('data-pay') + '?order_code=' + P.data.order_code) : fed.global.tips(P.msg)
                        },
                        'json')
                }
            })
        },
        upload: function (e, a) {
            var x = {
                formAction: $(a).attr('data-role'),
                inputFileName:'file',
                browseButtonValue:'',
                browseButtonClass:'fed-user-alter fed-user-ring fed-part-roun fed-icon-font fed-icon-xiugai',
                automaticUpload:true,
                hideDeleteButton:true,
                hover:true
            };
            $(e).imageUpload(x);
            $(e).on('imageUpload.uploadFailed',
                function (o, c) {
                    fed.global.tips(c)
                })
        },
        cards: function (e) {
            $(e).click(function () {
                if (confirm('确定要使用充值卡充值吗')) {
                    var k;
                    $.post($('.fed-user-form').attr('action'), (k = {},
                        _defineProperty(k, card_no, $('input[name = "cardnum"]').val()), _defineProperty(k, card_pwd, $('input[name = "cardpwd"]').val()), _defineProperty(k, flag, card), k),
                        function (v) {
                            fed.global.tips(v.msg),
                                location.reload()
                        },
                        json)
                }
            })
        },
        cashs: function (e) {
            $(e).click(function () {
                $.post($('.fed-user-form').attr('action'), $('.fed-user-form').serialize(),
                    function (k) {
                        fed.global.tips(k.msg),
                            location.reload()
                    },
                    json)
            })
        },
        radio: function () {
            var i = $('.fed-user-pays input[type="radio"]:checked').val();
            i == 'codepay' ? $('.fed-user-mpay').addClass('fed-show') : i == 'zhapay' && $('.fed-user-zpay').addClass('fed-show');
            $('.fed-user-pays input[type="radio"]').click(function () {
                var P = $(this).val();
                P == 'codepay' ? ($('.fed-user-mpay').addClass('fed-show'), $('.fed-user-zpay').removeClass('fed-show')) : P == 'zhapay' ? ($('.fed-user-zpay').addClass('fed-show'), $('.fed-user-mpay').removeClass('fed-show')) : ($('.fed-user-zpay').removeClass('fed-show'), $('.fed-user-mpay').removeClass('fed-show'))
            })
        },
        bind: function (e, a) {
            $(e).click(function () {
                $(this).addClass(a).text('loading...'),
                    $.post($('.fed-user-form').attr('data-role'), $('.fed-user-form').serialize(),
                        function (v) {
                            if (1 == v.code) var H = 60,
                                I = setInterval(function () {
                                    0 == H ? $(e).removeClass(a).text('获取验证码') : $(e).addClass(a).text('重新获取' + H--)
                                },
                                    1e3);
                            else $(e).removeClass(a).text('获取验证码'),
                                $('.fed-user-tips').text(v.msg)
                        },
                        "json")
            })
        },
        unnd: function (e) {
            $(e).click(function () {
                confirm('确认解除绑定吗？此操作不可恢复') && $.post($('.fed-user-form').attr('data-role'), _defineProperty({},
                    ac, $(this).attr('data-role')),
                    function (k) {
                        fed.global.tips(k.msg),
                            1 == k.code && fed.global.loca($('.fed-user-form').attr('action'))
                    },
                    json)
            })
        },
        power: function (e, a) {
            confirm('您确认购买此条数据' + a + '权限吗？') && $.get(vfed.path + 'index.php/user/ajax_buy_popedom.html?id=' + vfed.did + '&mid=' + vfed.mid + '&sid=' + vfed.sid + '&nid=' + vfed.nid + '&type=' + $(e).attr('data-type'),
                function (i) {
                    fed.global.tips(i.msg),
                        1 == i.code && location.reload()
                })
        },
        chat: function () {
            var dom = '#payform';
            setInterval(function () {
                $.get($(dom).attr('data-info') + '?order_id=' + $(dom).attr('data-code'),
                    function (g) {
                        1 == g.info.order_status && (alert('支付完成，即将跳转到会员中心'), fed.global.loca($(dom).attr('data-role')))
                    })
            },
                5e3)
        },
    },

    cookie: {
        set: function (e, a, x) {
            var o = new Date;
            o.setTime(o.getTime() + (x * 24 * 60 * 60 * 1000));
            var re = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            document.cookie.match(re);
            document.cookie = e + "=" + escape(a) + ";path=/;expires=" + o.toUTCString()
        },
        get: function (e) {
            var reg = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            var d = document.cookie.match(reg);
            if (null != d) {
                return unescape(d[2])
            }
        },
        del: function (e) {
            var d = new Date;
            d.setTime(d.getTime() - 1);
            var i = this.get(e);
            document.cookie = e + "=" + escape("") + ";path=/;expires=" + d.toUTCString()
        }
    },
    base64: {
        keystr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        decode: function (e) {
            var d = 0,
                i = "",
                o,
                c,
                y,
                b,
                p,
                m,
                w;
            for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g), e = e.substring(3); d < e.length;) b = this.keystr.indexOf(e.charAt(d++)),
                p = this.keystr.indexOf(e.charAt(d++)),
                m = this.keystr.indexOf(e.charAt(d++)),
                w = this.keystr.indexOf(e.charAt(d++)),
                o = b << 2 | p >> 4,
                c = (15 & p) << 4 | m >> 2,
                y = (3 & m) << 6 | w,
                i += String.fromCharCode(o),
                64 != m && (i += String.fromCharCode(c)),
                64 != w && (i += String.fromCharCode(y));
            return fed.base64.utf8(i)
        },
        utf8: function (e) {
            for (var i, o, c, y, d = "", b = 0; b < e.length; b++) i = e.charCodeAt(b),
                128 > i ? d += String.fromCharCode(i) : 224 > i ? (o = e.charCodeAt(++b), d += String.fromCharCode((31 & i) << 6 | 63 & o)) : 240 > i ? (o = e.charCodeAt(++b), c = e.charCodeAt(++b), d += String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & c)) : (o = e.charCodeAt(++b), c = e.charCodeAt(++b), y = e.charCodeAt(++b), d += String.fromCharCode((7 & i) << 18 | (63 & o) << 12 | (63 & c) << 6 | 63 & o));
            return d
        },

    },

};

fed.global.init();




function whatPoint(){
    $.get(vfed.path + 'index.php/index/what_point', function (s) {
        var d = {
            type: 1,
            id: 'point',
            area: 'auto',
            title: false,
            content: s,
            closeBtn: true,
            shadeClose: true,
            success: function () {

            },
            cancel: function () {
                $('.fed-play-iframe').removeClass('fed-part-left')
            }
        };
        layer.open(d)
    })
}


function BuyContent(o){
    var $that = $(o);
    if($that.attr("data-id")){
        if(!fed.cookie.get('user_id')){
            fed.module.login();
            return ;
        }
        $that.addClass('disabled');

        $.get('/index.php/user/ajax_buy_popedom.html?id=' + $that.attr("data-id") + '&mid=' + $that.attr("data-mid") + '&sid=' + $that.attr("data-sid") + '&nid=' + $that.attr("data-nid") + '&type=' + $that.attr("data-type")+'&jk_point='+$that.attr("data-jk-point"),function(r){
            layer.msg(r.msg)
            if (r.code == 1) {
                window.location.reload();
            }
            $that.removeClass('disabled');
        },'json');
    }
}