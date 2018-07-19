$.extend(Application, Backbone.Events, {
    bootstrap: function () {
        var e = this;
        this.show_basket = !0, this._ACTIVE_BASKET_OPTION = null, this.views = {}, this.promises = {}, this.models = {}, this.collections = {}, this.models.user = new Application.UserModel, this.models.user.getInfoPromise().always(function () {
            e.init(), Backbone.history.start()
        })
    },
    ACTIVE_BASKET_OPTION: function (e) {
        try {
            return void 0 !== e ? null === e ? ($.removeCookie("_ACTIVE_BASKET_OPTION"), null) : ($.cookie("_ACTIVE_BASKET_OPTION", JSON.stringify(e)), e) : JSON.parse($.cookie("_ACTIVE_BASKET_OPTION"))
        } catch (e) {
        }
    },
    init: function () {
        var e = $(window);
        e.on("scroll", function (e) {
            Backbone.trigger("win:scroll", e)
        }), e.on("resize", function (e) {
            Backbone.trigger("win:resize", e)
        }), $(document).on("click", function (e) {
            Backbone.trigger("doc:click", e)
        }), $(document).on("keyup", function (e) {
            Backbone.trigger("doc:keyup", e)
        }), this.view = new Application.View, this.router = new Application.Router
    },
    changeView: function (e) {
        var i = this;
        document.title = "二一组卷-在线组卷-智能组卷,中小学在线题库";
        var t;
        this.activeView && (t = this.activeView), this.activeView = e, this.listenTo(e, "render", function () {
            t && t.destruct(), i.view.$el.prepend(e.$el)
        }), this.models.user.getInfoPromise().always(function () {
            i.activeView.render()
        })
    },
    getBasketView: function (e) {
        var i = this, e = $.extend({}, e), t = this.models.user, n = e.xd || t.get("xd") || Application.DEF_XD,
            o = e.chid || t.get("chid") || Application.DEF_CHID, a = e.pid || 0, r = ["current_basket", n, o].join("_"),
            s = {xd: n, chid: o};
        if (Number(a) && (r = "current_basket_pid_" + a, s = {pid: a}), s.uid = t.get("uid"), !this.views[r]) {
            var c = new Application.BasketModel(s);
            this.views[r] = new Application.BasketView({model: c}), this.views[r].render()
        }
        return i.views[r].reload(), this.views[r]
    },
    getFootView: function () {
        var e = "foot-view";
        return this.views[e] || (this.views[e] = new Application.FootView, this.views[e].render()), this.views[e]
    },
    getHeaderView: function (e) {
        var i = this, t = "main-header-view";
        this.views[t] || (this.views[t] = new Application.HeaderView);
        var n = null, o = window.location.hash;
        if (e && e.cur_nav && (n = e.cur_nav), 1 == window.location.hash.indexOf("question") || 1 == window.location.hash.indexOf("smart")) a = $.extend({
            type: "question",
            content: ""
        }, e); else var a = $.extend({type: "paper", content: ""}, e);
        return i.views[t].next = function () {
            i.views[t].$(".J_top_search_form").html(JST["partial/search"](a))
        }, this.views[t].render(n, o), this.views[t]
    },
    getMiniHeaderView: function (e) {
        var i = this, t = "inner-header-view";
        if (this.views[t] || (this.views[t] = new Application.MiniHeaderView), 1 == window.location.hash.indexOf("question") || 1 == window.location.hash.indexOf("smart")) n = $.extend({
            type: "question",
            content: ""
        }, e); else var n = $.extend({type: "paper", content: ""}, e);
        return this.views[t].loadPromise().then(function () {
            i.views[t].$(".J_top_search_form").html(JST["partial/search"](n))
        }), this.views[t]
    },
    changeXdChid: function (e) {
        var i = myUtils.http("get", "/data/change-channel", {xd: e[0], chid: e[1]}),
            t = myUtils.http("get", "/question/set-cate-cash", {xd: e[0], chid: e[1]});
        $.when(i, t).then(function () {
            window.location.reload()
        })
    },
    popupLogin: function () {
        var e = "popup-login";
        return Application.views[e] || (Application.views[e] = new Application.LoginDialogView({current_user: Application.models.user.toJSON()}), Application.views[e].render(), this.view.$el.append(Application.views[e].$el)), Application.views[e].$el.show(), Application.views[e]
    },
    popupErrorReport: function (e) {
        var i = myUtils.dialog, t = $(JST["dialogs/ques-error"]({question_id: e}));
        if (!Application.models.user.get("uid")) return this.popupLogin(), !1;
        var n = function () {
            var e = t.find("textarea").val(), i = t.find(".warn");
            return 0 != $.trim(e).length || (i.text("纠错内容不能为空！").show(), !1)
        }, o = function (e) {
            var n = t.find("form").serializeArray();
            return myUtils.http("post", "/question/error-report", n).then(function (n) {
                0 == n.code ? i.alert("试题纠错成功！") : i.alert(n.msg), e.close().remove(), t.remove()
            })
        };
        t.on("submit", "form", function (e) {
            return n(), !1
        }), myUtils.http("get", "/question/is-in-error-report", {qid: e}).then(function (e) {
            if (0 != e.code) return i.alert(e.msg), !1;
            if (0 != e.data.errCode) return i.alert(e.data.message), !1;
            var a = i.confirm2(t, function () {
                if (!n()) return !1;
                o(a)
            })
        })
    },
    popupSubjectDownload: _.debounce(function (e, i) {
        var t = (i || []).join(",");
        myUtils.http("get", "/subject/download-params", {pids: t, subject_id: e}).then(function (i) {
            i.data.subject_id = e;
            var n = $(JST["dialogs/subject-download"](i.data));
            n.find(".J_radio_group").each(function () {
                $(this).on("click", ".radiobox", function (e) {
                    var i = $(e.currentTarget), t = i.siblings(".radiobox");
                    return t.removeClass("checked"), t.find("input").prop("checked", !1), i.addClass("checked"), i.find("input").prop("checked", !0), !1
                })
            }), n.find(".J_content .checkbox").click(function (e) {
                var i = $(e.currentTarget), t = !i.hasClass("checked");
                return i.toggleClass("checked", t), i.find("input[type=checkbox]").prop("checked", t), !1
            });
            var o = this, a = 0;
            n.on("click", ".recharge-btn", function () {
                function e() {
                    if (0 == a) return !1;
                    new RegExp("(;\\s*)?download_" + c + "=").test(document.cookie) ? (clearTimeout(d), d = null, o.innerHTML = "下载", a = 0, setTimeout(function () {
                        r.close().remove(), n.remove()
                    }, 2e3)) : d = setTimeout(e, 1e3)
                }

                if (1 == a) return !1;
                var i = n.find("form").serializeJSON();
                i.content_type = (i.content_type || []).join(",");
                var s = _.map(i, function (e, i) {
                    return i + "=" + e
                }), c = myUtils.setDownToken();
                s.push("token=" + c);
                var p = "/subject/download?" + (s = s.join("&")) + "&pids=" + t;
                this.innerHTML = '正在下载<dot class="downloading">...</dot>';
                var d;
                myUtils.downloadFile(p);
                return setTimeout(function () {
                    a = 0
                }, 48e4), a || (a = 1, d = setTimeout(e, 1e3)), !1
            });
            var r = myUtils.dialog.alert({
                title: "试卷下载", content: n, onclose: function () {
                    this.close().remove(), n.remove()
                }
            })
        })
    }, 1e3, !0),
    popupPaperDownload: _.debounce(function (e) {
        if (!Application.isLogin()) return Application.popupLogin(), !1;
        myUtils.http("get", "/paper/download-params", {pid: e}).then(function (i) {
            i.data.pid = e;
            var t = $(JST["dialogs/paper-download"](i.data));
            t.find(".J_radio_group").each(function () {
                $(this).on("click", ".radiobox", function (e) {
                    var i = $(e.currentTarget), t = i.siblings(".radiobox");
                    return t.removeClass("checked"), t.find("input").prop("checked", !1), i.addClass("checked"), i.find("input").prop("checked", !0), !1
                })
            }), t.find(".J_content .checkbox").click(function (e) {
                var i = $(e.currentTarget), t = !i.hasClass("checked");
                return i.toggleClass("checked", t), i.find("input[type=checkbox]").prop("checked", t), !1
            });
            var n = 0, o = function (e) {
                function i() {
                    if (0 == n) return !1;
                    new RegExp("(;\\s*)?download_" + s + "=").test(document.cookie.toString()) ? (clearTimeout(p), p = null, e && (e.innerHTML = "下载"), n = 0, setTimeout(function () {
                        a.close().remove(), t.remove()
                    }, 1e3)) : p = setTimeout(i, 1e3)
                }

                var o = t.find("form").serializeJSON();
                o.content_type = (o.content_type || []).join(",");
                var r = _.map(o, function (e, i) {
                    return i + "=" + e
                }), s = myUtils.setDownToken();
                r.push("token=" + s);
                var c = "/paper/download?" + (r = r.join("&"));
                e && (e.innerHTML = '正在下载<dot class="downloading">...</dot>');
                var p;
                myUtils.downloadFile(c);
                setTimeout(function () {
                    n = 0
                }, 48e4), n || (n = 1, p = setTimeout(i, 1e3))
            };
            t.on("click", ".recharge-btn", function () {
                return 1 != n && (o(this), !1)
            });
            var a = myUtils.dialog.alert({
                title: "试卷下载", content: t, onclose: function () {
                    this.close().remove(), t.remove(), s = !1
                }
            }), r = function () {
                return !!s && (new Date - p > 18e4 ? (a.close().remove(), myUtils.dialog.alert("二维码失效，请重新打开弹窗！"), s = !1, !1) : void setTimeout(function () {
                    myUtils.http("get", "payment/check-order", {
                        pid: e,
                        username: c.get("username")
                    }).then(function (e) {
                        0 != e.code ? r() : (s = !1, o(), a.title("正在生成试卷..."))
                    }).fail(function () {
                        r()
                    })
                }, 1e3))
            }, s = !1, c = Application.models.user;
            if (t.find(".wxpay_info").length) {
                s = !0;
                var p = new Date;
                r()
            }
        })
    }, 1e3, !0),
    isLogin: function () {
        return this.models.user.get("uid")
    },
    getSiteStatPromise: function () {
        return myUtils.http("get", "/home-page/statistics")
    },
    getFilterParamsPromise: function (e, i) {
        var t = ["/question/query-params", e, i].join("-");
        return Application.promises[t] || (Application.promises[t] = myUtils.http("get", "/question/query-params", {
            xd: e,
            chid: i
        }).then(function (e) {
            return e.data.difficult_indexs[2] && delete e.data.difficult_indexs[2], e.data.difficult_indexs[4] && delete e.data.difficult_indexs[4], e.data
        })), Application.promises[t]
    },
    getDistrictPromise: function () {
        var e = "/data/district";
        return Application.promises[e] || (Application.promises[e] = myUtils.http("get", "/data/district").then(function (e) {
            return e.data
        })), Application.promises[e]
    },
    getBreadCrumbs: function () {
        var e = Application.models.user, i = e.get("xd"), t = e.get("chid"), n = this.xd_hash, o = (new Date).getTime();
        this.getSubjectsPromise().then(function (e) {
            setTimeout(function () {
                $("#crumb-" + o).replaceWith(JST["partial/crumbs"]({xd: n[i], chid: e[t]}))
            }, 0)
        });
        return '<div id="crumb-' + o + '"></div>'
    },
    getSubjectsPromise: function () {
        var e = "/data/subjects";
        return Application.promises[e] || (Application.promises[e] = myUtils.http("get", "/data/subjects").then(function (e) {
            return e.data
        })), Application.promises[e]
    },
    getXdSubjectsPromise: function () {
        var e = "/data/subjects-by-xd";
        return Application.promises[e] || (Application.promises[e] = myUtils.http("get", "/data/subjects-by-xd")), Application.promises[e]
    },
    hasCategoriesPromise: function (e, i) {
        var t = Application.models.user;
        return myUtils.http("get", "/catalog/cate-tree", {
            xd: e || t.get("xd"),
            chid: i || t.get("chid")
        }).then(function (e) {
            return e.data && 0 != _.size(e.data) ? {goto: "categories"} : $.Deferred().reject({goto: "knowledges"})
        }).fail(function () {
            return {goto: "knowledges"}
        })
    },
    question_types: {1: "单选题", 2: "多选题", 3: "判断题", 4: "填空题", 5: "解答题", 6: "完型填空", 7: "综合题"},
    xd_hash: {1: "小学", 2: "初中", 3: "高中"},
    master_level: {0: "不限", 1: "了解", 2: "理解", 3: "掌握", 4: "应用"},
    difficult_indexs: {0: "不限", 1: "容易", 3: "普通", 5: "困难"}
}), Application.MnView = Backbone.View.extend({
    className: "MnView", destruct: function () {
        this.trigger("dispose"), this.off().stopListening().undelegateEvents().remove()
    }, checkAuthLogin: function () {
        return !!Application.models.user.get("uid") || (this.$el.html('<div class="login_bg">未登录！<a href="/#">返回首页</a></div>'), this.trigger("render", this), !1)
    }, mount: function (e, i) {
        return ".BasketView" == e ? (this.$(e).html(i.$el), this) : (("string" == typeof e ? this.$(e) : e).replaceWith(i.$el), i.undelegateEvents().delegateEvents(), this)
    }, initPageView: function () {
        return this.pageView = new Application.PageView, this.$(".JV_page").html(this.pageView.$el), this.listenTo(this.pageView, "page", function (e) {
            this.renderList(e)
        }), this
    }, IsScroll: _.debounce(function () {
        var e = this,
            i = "hidden" != document.body.style.overflow && "no" != document.body.scroll && document.body.scrollHeight > document.body.offsetHeight;
        e.$el.find(".footer").toggleClass("footer-fixed", !i)
    }, 400), __RenderSideMenu: function (e, i) {
        var t = this, n = '<div class="mt-hd clearfix">' + e + "</div>";
        this.$(".JV_tree_hd").html(n);
        var i = $.extend({0: "全部"}, i), o = _.map(i, function (e, i) {
            return '<li class="t-end"><div class="t-tit ' + (0 == i ? "selected" : "") + '"><span class="t-btn"><i></i></span><div class="t-name"><a data-menuid="' + (0 == i ? "" : i) + '" href="javascript:;">' + e + "</a></div></div></li>"
        }), a = ['<div class="t-tree-bd"><ul class="t-bd">'];
        return (a = a.concat(o)).push("</ul></div>"), this.$(".JV_tree_bd").html(a.join("")), this.$el.on("click", "a[data-menuid]", function (e) {
            var i = $(e.currentTarget);
            t.$(".t-tree .t-tit").removeClass("selected"), i.parents(".t-tit").addClass("selected");
            var n = i.data("menuid");
            t.trigger("COM_SIDE_LIST", n)
        }), this
    }
}), Application.View = Backbone.View.extend({el: document.body}), Application.Router = Backbone.Router.extend({
    routes: {
        "questions/:tree_type": "QuestionsListView",
        "question/:id": "QuestionDetailView",
        "smart/spec-list": "SmartSpecListView",
        "smart/spec-edit/*id": "SmartSpecEditView",
        "smart/:tree_type": "SmartConfEditView",
        "paper/edit/*id": "PaperEditView",
        "paper/show/:id": "PaperShowView",
        "paper/test/:id": "PaperTestView",
        "paper/report/:id": "PaperReportView",
        "papers/sync": "PaperListSyncView",
        "papers/exam": "PaperListExamView",
        "papers/real": "PaperListRealView",
        "subject/list": "SubjectListView",
        "subject/detail/:id": "SubjectDetailView",
        search: "SearchListView",
        "": "IndexView",
        "/": "IndexView",
        "not-allowed-view": "NotAllowedView",
        "*notfound": "NotFoundView"
    }, QuestionsListView: function (e, i) {
        var i = i || {}, e = "categories" === e ? "categories" : "knowledges",
            t = new Application.QuestionsListView({tree_type: e, query: i});
        Application.changeView(t)
    }, QuestionDetailView: function (e, i) {
        var t = new Application.QuestionDetailView({id: e});
        Application.changeView(t)
    }, SmartConfEditView: function (e) {
        var e = "categories" === e ? "categories" : "knowledges", i = new Application.SmartConfEditView({tree_type: e});
        Application.changeView(i)
    }, SmartSpecListView: function (e) {
        var e = e || {}, i = new Application.SmartSpecListView({query: e});
        Application.changeView(i)
    }, SmartSpecEditView: function (e, i) {
        var i = i || {}, t = new Application.SmartSpecEditView({id: e, query: i});
        Application.changeView(t)
    }, PaperListSyncView: function (e) {
        var e = e || {}, i = new Application.PaperListSyncView({query: e});
        Application.changeView(i)
    }, PaperListExamView: function (e) {
        var e = e || {}, i = new Application.PaperListExamView({query: e});
        Application.changeView(i)
    }, PaperListRealView: function (e) {
        var e = e || {}, i = new Application.PaperListRealView({query: e});
        Application.changeView(i)
    }, PaperShowView: function (e, i) {
        var i = i || {}, t = new Application.PaperShowView({pid: e, query: i});
        Application.changeView(t)
    }, PaperTestView: function (e, i) {
        var i = i || {}, t = new Application.PaperTestView({pid: e, query: i});
        Application.changeView(t)
    }, PaperReportView: function (e, i) {
        var i = i || {}, t = new Application.PaperReportView({id: e, query: i});
        Application.changeView(t)
    }, PaperEditView: function (e, i) {
        var i = i || {}, t = new Application.PaperEditView({pid: e, query: i});
        Application.changeView(t)
    }, SubjectListView: function (e) {
        var e = e || {}, i = new Application.SubjectListView({query: e});
        Application.changeView(i)
    }, SubjectDetailView: function (e, i) {
        var i = i || {}, t = new Application.SubjectDetailView({id: e, query: i});
        Application.changeView(t)
    }, IndexView: function (e) {
        var i = /^\/paper\/view\/(\d+)/.exec(window.location.pathname);
        if (i) this.PaperShowView(i[1]); else if (i = /^\/question\/detail\/(\d+)/.exec(window.location.pathname)) this.QuestionDetailView(i[1]); else if (1 != Application.dataState.query.top_search) {
            var t = new Application.IndexView;
            Application.changeView(t), document.title = "二一组卷-在线组卷-智能组卷,中小学在线题库"
        } else this.SearchListView(e)
    }, SearchListView: function (e) {
        var e = e || {}, i = new Application.SearchListView({query: e});
        Application.changeView(i)
    }, NotFoundView: function () {
        Application.changeView(new Application.NotFoundView)
    }, NotAllowedView: function () {
        Application.changeView(new Application.NotAllowedView)
    }
});