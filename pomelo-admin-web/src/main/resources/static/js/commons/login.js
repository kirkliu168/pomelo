$(function() {
    validateKickout();
    validateRule();
    $('.imgcode').click(function() {
        //验证码看不清
        var url = "http://localhost:18001/captcha.jpg?s=" + Math.random();
        $(".imgcode").attr("src", url);
    });
});

$.validator.setDefaults({
    submitHandler: function() {
        login();
    }
});

function login() {
    addClass(document.querySelector(".login"), "active");
    setTimeout(function () {
        addClass(document.querySelector(".sk-rotating-plane"), "active")
        document.querySelector(".login").style.display = "none"
    }, 800);
    setTimeout(function () {
        removeClass(document.querySelector(".login"), "active")
        removeClass(document.querySelector(".sk-rotating-plane"), "active")
        document.querySelector(".login").style.display = "block"
        var username = $.common.trim($("input[name='username']").val());
        var password = $.common.trim($("input[name='userpwd']").val());
        var validateCode = $("input[name='validateCode']").val();
        $.ajax({
            type: "post",
            url: "http://localhost:18001/login",
            data: {
                "username": username,
                "password": password,
                "validateCode" : validateCode
            },
            success: function(r) {
                if (r.code == 0) {
                    location.href = ctx + 'index';
                } else {
                    $.modal.closeLoading();
                    $('.imgcode').click();
                    $(".code").val("");
                    $.modal.msg(r.msg);
                }
            }
        });
    }, 5000);

}

function validateRule() {
    var icon = "<i class='fa fa-times-circle' style='margin-top:10px;'></i> ";
    $("#signupForm").validate({
        rules: {
            username: {
                required: true
            },
            userpwd: {
                required: true
            }
        },
        messages: {
            username: {
                required: icon + "请输入您的用户名",
            },
            userpwd: {
                required: icon + "请输入您的密码",
            }
        }
    })
}

function validateKickout() {
    if (getParam("kickout") == 1) {
        layer.alert("<font color='red'>您已在别处登录，请您修改密码或重新登录</font>", {
                icon: 0,
                title: "系统提示"
            },
            function(index) {
                //关闭弹窗
                layer.close(index);
                if (top != self) {
                    top.location = self.location;
                } else {
                    var url  =  location.search;
                    if (url) {
                        var oldUrl  = window.location.href;
                        var newUrl  = oldUrl.substring(0,  oldUrl.indexOf('?'));
                        self.location  = newUrl;
                    }
                }
            });
    }
}

function getParam(paramName) {
    var reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

function hasClass(elem, cls) {
    cls = cls || '';
    if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
    return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
        ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
    }
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
        while (newClass.indexOf(' ' + cls + ' ') >= 0) {
            newClass = newClass.replace(' ' + cls + ' ', ' ');
        }
        ele.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

// document.querySelector("#login-button").onclick = function () {
//     addClass(document.querySelector(".login"), "active")
//     setTimeout(function () {
//         addClass(document.querySelector(".sk-rotating-plane"), "active")
//         document.querySelector(".login").style.display = "none"
//     }, 800)
//     setTimeout(function () {
//         removeClass(document.querySelector(".login"), "active")
//         removeClass(document.querySelector(".sk-rotating-plane"), "active")
//         document.querySelector(".login").style.display = "block"
//         alert("登录成功")
//
//     }, 5000)
// }