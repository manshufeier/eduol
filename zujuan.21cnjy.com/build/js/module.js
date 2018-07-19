Application.IndexView = Application.MnView.extend({
    template: JST.home, initialize: function () {
        this.promises = {}
    }, render: function () {
        return this.$el.html(this.template()), Application.show_basket = !1, this.mount(".BasketView", Application.getBasketView()), this.mount(".HeaderView", Application.getHeaderView()), this.mount(".FootView", Application.getFootView()), this.renderBody(), this.trigger("render", this), this
    }, renderBody: function () {
        var e = this, t = Application.models.user;
        this.promises.statistics = Application.getSiteStatPromise(), this.promises["hot-subject"] = myUtils.http("get", " /data/hot-subject", {
            xd: t.get("xd"),
            chid: t.get("chid")
        }), this.promises["hot-paper"] = myUtils.http("get", "  /data/hot-paper", {
            xd: t.get("xd"),
            chid: t.get("chid")
        }), myUtils.http("get", "/home-page/banner-par").then(function (t) {
            return t.data.banner = _.filter(t.data.banner, function (e) {
                return 1 == e.status
            }), e.$(".JV_home__banner").html(JST["home/banner"](t.data)), e.promises.statistics.then(function (e) {
                return $.extend({primary_count_ztc: e.data.primary_count.count_ztc}, t.data)
            })
        }).then(function (t) {
            e.$(".JV_home__partner").html(JST["home/partner"](t)), e.initBannerSlide()
        }), this.promises.statistics.then(function (t) {
            e.$(".JV_home__statistics").html(JST["home/statistics"](t.data))
        }), this.promises["hot-subject"].then(function (t) {
            var i = _.map(t.data, function (e) {
                return $.extend({}, e, {format_date: myUtils.formatTimestamp(e.updatetime)})
            });
            e.$(".JV_home__subject").html(JST["home/subject"]({list: i}))
        }), this.promises["hot-paper"].then(function (t) {
            e.$(".JV_home__hot").html(JST["home/hotpapers"](t))
        })
    }, updateNotice: function () {
        var e = {
            show_notice: function () {
                var e = $(window).height(), t = this.$el.height();
                e >= t ? this.$el.css({
                    top: (e - t + 60) / 2 + "px",
                    position: "fixed"
                }) : this.$el.css({position: "absolute"})
            }, isClosed: function () {
                return (new Date).getTime() > new Date(2018, 6, 30, 0, 0, 0).getTime() || /(;\s)?close_system_upgrade_notice=/.test(document.cookie.toString())
            }, clear_notice: function () {
                this.$el.remove(), $(".system-upgrade-wall").remove();
                var e = new Date;
                e.setMonth(e.getMonth() + 1), document.cookie = "close_system_upgrade_notice=1; expires=" + e.toGMTString()
            }, init: function () {
                var e = this;
                $(document.body).append(JST["dialogs/update-notice"]()), this.$el = $("#J_NoticeModal"), this.$doc = $(document.documentElement), this.$doc.addClass("system-upgrade"), this.$el.on("click", ".icon-close", function () {
                    e.clear_notice()
                }), this.show_notice(), $(window).resize(function () {
                    e.show_notice()
                })
            }
        };
        e.isClosed() || e.init()
    }, initBannerSlide: function () {
        var e = this;
        setTimeout(function () {
            e.$(".J_LunboList").slide({
                mainCell: ".J_LunboItems",
                effect: "leftLoop",
                vis: 4,
                interTime: "3000",
                autoPlay: !0
            })
        }, 0), setTimeout(function () {
            e.$(".banner").slide({
                mainCell: ".silderbox > ul",
                effect: "fold",
                autoPlay: !0,
                interTime: "8000",
                delayTime: "1000",
                titCell: ".control-num a"
            })
        }, 0)
    }
}), Application.NotAllowedView = Application.MnView.extend({
    template: JST["partial/not-allowed"], render: function () {
        return this.$el.html(this.template()), this.trigger("render", this), this
    }
}), Application.NotFoundView = Application.MnView.extend({
    template: JST["partial/not-found"], render: function () {
        return this.$el.html(this.template()), this.trigger("render", this), this
    }
}), Application.PaperEditView = Application.MnView.extend({
    template: JST["04paper-edit"], qTemplate: function (e) {
        var t = ['<div class="question-block" data-ques="' + e.data.question_id + '">', '<div class="q-mc">', JST["question/text-score"](e), 7 == e.data.question_type ? '<ol class="q-bd-list"></ol>' : "", JST["question/options"](e), "</div>", JST["question/btn-handler"](e), "</div>"].join(""),
            i = JST["question/text"](e);
        return i += JST["question/options"](e), 0 == e.data.parent_id ? t : i
    }, initialize: function (e) {
        this._timestamp = null, document.title = "手动搜题-21组卷";
        var t = Application.models.user;
        this.__option = $.extend({pid: null}, e), this.query = $.extend({
            xd: t.get("xd") || Application.DEF_XD,
            chid: t.get("chid") || Application.DEF_CHID,
            from: 0
        }, this.__option.query)
    }, syncBasket: function (e) {
        var t = this.model.typeCollection.models;
        return this.model.tizuSortList.reset(t), this.model.saveDataPromise(e)
    }, getBasket: function () {
        return Application.getBasketView({xd: this.query.xd, chid: this.query.chid, pid: this.__option.pid})
    }, render: function () {
        var e = this, t = Application.models.user.toJSON();
        if (t.uid) {
            this.basket = this.getBasket(), Application.ACTIVE_BASKET_OPTION({pid: this.__option.pid}), this.model = this.basket.model, this.model.set("pid", this.__option.pid), this.getBasket();
            var i = Application.models.user;
            return this.part_views = [], this.type_views = [], this.ques_views = [], i.get("uid") ? (this.model.fetchDataPromise().then(_.bind(function (i) {
                if (0 != i.code || 0 == _.size(i.data.content)) return $.Deferred().reject(i);
                this.$el.html(this.template({
                    data: e.model.toJSON(),
                    user: t
                })), this.renderPaper(), this.renderEditGrids(), this.renderSettings(), this.renderMarkTable(), this.mount(".MiniHeaderView", Application.getMiniHeaderView()), setTimeout(_.bind(e.fixedBlock, e), 100), this.renderBreadCrumb()
            }, this)).fail(function (t) {
                e.$el.html('<div class="basket-empty"><img src="/images/blank.png"><p>试题篮中没有试题... </p><a href="/#" class="close-dialog">【返回首页】</a></div>')
            }), this.trigger("render", this), this.subscribeEvents(), this) : (window.history.href = "/", this)
        }
        Application.router.navigate("/", {trigger: !0})
    }, renderBreadCrumb: function () {
        var e = this, t = ['<i class="iconw-fixed"></i><span>当前位置：</span><a href="javascript:;">组卷编辑</a>'];
        Application.getSubjectsPromise().then(function (i) {
            var n = Application.xd_hash[e.query.xd], o = i[e.query.chid];
            t.push('<span>&gt;</span><a href="javascript:;">' + n + o + "</a>"), t = t.join(""), e.$(".crumbs").html(t)
        })
    }, fixedBlock: function () {
        var e = this.$("#edit-wrap").offset().top;
        this.listenTo(Backbone, "win:scroll", function () {
            var t = $(window).height(), i = $(".J_paper_style").outerHeight(!0);
            $("#sd-fix").hasClass("sd-fix") ? $(".J_height").css({
                height: t - i - 60,
                overflow: "auto"
            }) : $(".J_height").css({height: "auto", overflow: "auto"});
            var n = $(document).scrollTop();
            this.$(".fixheader")[n >= e ? "slideDown" : "slideUp"]("fast"), this.$("#sd-fix").toggleClass("sd-fix", n >= e)
        })
    }, renderPaper: function () {
        var e = this, t = 0, i = 0, n = e.model.typeCollection.groupBy("part"),
            o = e.model.quesCollection.groupBy("_t");
        this.model.partCollection.each(function (s, a) {
            var r = new Application.PaperPartView({model: s, parentView: e, rootView: e});
            e.part_views.push(r), e.$(".J_paper").append(r.$el), _.each(n[a], function (n) {
                n.set({_n: t++}, {silent: !0});
                var s = new Application.PaperTypeView({model: n, parentView: r, rootView: e});
                e.type_views.push(s), r.$el.append(s.$el), _.each(o[n.get("_t")], function (t) {
                    t.set({_n: i++}, {silent: !0});
                    var n = new Application.QuestionView({enable_drag: !0, model: t, parentView: s, rootView: e});
                    e.ques_views.push(n), n.template = e.qTemplate, s.$el.children("ul").append(n.$el), t.addAnyAttrsPromise.then(_.bind(n.render, n))
                })
            })
        })
    }, renderSettings: function () {
        this.renderSideSet(), this.renderPaperSet()
    }, renderSideSet: function () {
        this.$(".J_paper_style").html(JST["papers/paper-style"]({
            data: this.model.toJSON(),
            settings: this.model.settings,
            templates: this.model.templates
        }))
    }, renderPaperSet: function () {
        var e = this.model.get("style");
        this.$("[data-jset]").each(function () {
            var t = $(this).data("jset") - 1;
            $(this)[+e[t] ? "show" : "hide"]()
        })
    }, renderMarkTable: function () {
        var e = this.model.typeCollection.size(), t = [], i = {
            num: _.map(_.range(0, e), function (e) {
                return t.push(""), myUtils.chinesesn(e)
            }), blanks: t
        };
        this.$(".J_mark_table").html(JST["papers/mark-table"]({data: i}))
    }, renderEditGrids: function () {
        var e = {};
        e.part_views = this.part_views, e.type_group = _.groupBy(this.type_views, function (e) {
            return e.__option.parentView.cid
        }), e.ques_group = _.groupBy(this.ques_views, function (e) {
            return e.__option.parentView.cid
        }), e.ques_num = _.size(this.ques_views), e.ques_score = _.reduce(this.ques_views, function (e, t) {
            return e += Number(t.model.get("score").score) || 0
        }, 0);
        var t = {1: 1, 3: 2, 5: 3}, i = _.reduce(this.ques_views, function (e, i) {
            return e += Number(t[i.model.get("difficult_index")]) || 0
        }, 0);
        e.ques_difficulty = "容易";
        var n = this.model.quesCollection.size();
        (i = 0 == n ? 0 : i / n) > 1.7 && i <= 2.4 && (e.ques_difficulty = "普通"), i > 2.4 && (e.ques_difficulty = "困难"), this.$(".J_edit_grids").html(JST["papers/edit-grids"](e))
    }, getTypeCount: function (e) {
        var t = this.model.quesCollection.filter(function (t) {
            return t.get("_t") === e.get("_t")
        }), i = _.reduce(t, function (e, t) {
            return e += Number(t.get("score").score) || 0
        }, 0);
        return {count: _.size(t), score: i}
    }, subscribeSideGridDragSort: function () {
        var e = this, t = $(document), i = !1, n = !1, o = null, s = _.uniqueId("clone"), a = null, r = null, l = null,
            c = !1, d = 200, u = 0, h = 0, p = 0, m = 0, f = 0, g = 0, v = 0, y = 0;
        this.$el.on("mousedown", ".J_drag_grid", function (e) {
            if ($("html, body").stop(), e.stopPropagation(), i = !0, a = $(e.currentTarget), r = a.siblings(), t.on("mousemove", T), t.on("mouseup", x), 0 == r.length) return i = !1, !0;
            if (!i) return !1;
            r.each(function () {
                var e = $(this), t = e.offset();
                this._meta = {left: t.left, top: t.top, width: e.width(), height: e.height()}
            }), v = a.width(), y = a.height(), (o = a.clone(!1)).attr("id", s), o.addClass("s-clone"), o.css({
                position: "absolute",
                width: v,
                height: y,
                "z-index": d++
            });
            var n = a.offset();
            p = n.left, m = n.top, u = e.clientX - p, h = e.clientY - m, g = m, f = p, 0 == $("#" + s).length && a.parent().append(o), o.offset({
                left: p,
                top: m
            })
        });
        var w = function (e) {
            if (i) {
                n = !0, a.addClass("s-drag");
                var t = e.clientX - u, s = e.clientY - h;
                o.offset({left: t, top: s}), l = null, r.removeClass("s-crash"), r.each(function () {
                    var e = this._meta, i = e.left, n = e.top, o = e.width, a = e.height;
                    if (!(t > i + o || s > n + a || t + v < i || s + y < n)) return l = this, $(l).addClass("s-crash"), c = t < f, !1
                })
            }
        }, T = _.throttle(w, 50), x = function (s) {
            if (i && n && l && (o && o.remove(), a[c ? "insertBefore" : "insertAfter"](l), e.trigger("DRAG_QUES_GRID")), a) {
                var d = a.data("cid");
                e.scrollQuesToView(d)
            }
            i && (a && a.removeClass("s-drag"), o && o.remove(), l && $(l).removeClass("s-crash"), l = null, r = null, a = null, i = !1, n = !1, t.off("mousemove", T), t.off("mouseup", x))
        }
    }, subscribeSideTypeDragSort: function () {
        var e = this, t = $(document), i = !1, n = !1, o = null, s = _.uniqueId("clone"), a = null, r = null, l = null,
            c = !1, d = 200, u = 0, h = 0, p = 0, m = 0, f = 0, g = 0, v = 0, y = 0;
        this.$el.on("mousedown", ".J_drag_type", function (n) {
            if ($("html, body").stop(), n.stopPropagation(), i = !0, a = $(n.currentTarget), $(n.target).hasClass("J_dis_drag") && (i = !1), 0 == (r = e.$(".J_drag_type").filter(function () {
                return this !== n.currentTarget
            })).length && (i = !1), r = e.$(".J_drag_type, .J_type_hd").filter(function () {
                return this !== n.currentTarget
            }), !i) return !1;
            t.on("mousemove", T), t.on("mouseup", x), r.each(function () {
                var e = $(this), t = e.offset();
                this._meta = {left: t.left, top: t.top, width: e.width(), height: e.height()}
            }), v = a.width(), y = a.height(), (o = a.clone(!1)).attr("id", s), o.addClass("s-clone"), o.css({
                position: "absolute",
                width: v,
                height: y,
                "z-index": d++
            });
            var l = a.offset();
            p = l.left, m = l.top, u = n.clientX - p, h = n.clientY - m, g = m, f = p, 0 == $("#" + s).length && a.parent().append(o), o.offset({
                left: p,
                top: m
            })
        });
        var w = function (e) {
            if (i) {
                n = !0, a.addClass("s-drag");
                var t = e.clientX - u, s = e.clientY - h;
                o.offset({left: t, top: s}), l = null, r.removeClass("s-crash"), r.each(function () {
                    var e = this._meta, i = e.left, n = e.top, o = e.width, a = e.height;
                    if (!(s + y < n + a / 3 || s > n + 2 * a / 3 || t + v < i + o / 3 || t > i + 2 * o / 3)) return l = this, $(l).addClass("s-crash"), c = s > g, !1
                })
            }
        }, T = _.throttle(w, 50), x = function (s) {
            if (i && n && l && ($(l).hasClass("J_type_hd") ? $(l).next(".edit-mc").prepend(a) : a[c ? "insertAfter" : "insertBefore"](l), o && o.remove(), e.trigger("DRAG_TYPE_GRID"), a)) {
                var d = a.data("cid");
                e.scrollTypeToView(d)
            }
            i && (o && o.remove(), a && a.removeClass("s-drag"), l && $(l).removeClass("s-crash"), l = null, r = null, a = null, i = !1, n = !1, t.off("mousemove", T), t.off("mouseup", x))
        }
    }, subscribeEvents: function () {
        var e = this;
        this.subscribeSideTypeDragSort(), this.subscribeSideGridDragSort();
        var t = function () {
            e.model.quesCollection.sort(), e.ques_views = _.sortBy(e.ques_views, function (e) {
                return e.model.get("_n")
            }), _.each(e.ques_views, function (e) {
                e.$el.appendTo(e.__option.parentView.$el.children("ul"))
            })
        }, i = function () {
            e.model.typeCollection.sort(), e.type_views = _.sortBy(e.type_views, function (t) {
                return t.__option.parentView = e.part_views[t.model.get("part")], t.model.get("_n")
            }), _.each(e.type_views, function (e) {
                e.$el.appendTo(e.__option.parentView.$el)
            })
        }, n = function () {
            var t = {}, i = 0, n = 0;
            e.$(".J_type_ques").each(function () {
                $(this).data("cid");
                $(this).find(".J_drag_type").each(function () {
                    var e = $(this).data("cid");
                    t[e] = {_n: n++, part: i}
                }), i++
            }), e.model.typeCollection.each(function (e) {
                e.set(t[e.cid])
            })
        }, o = function () {
            var t = {};
            e.$(".J_drag_grid").each(function (e) {
                var i = $(this).data("cid");
                t[i] = e
            }), e.model.quesCollection.each(function (e) {
                e.set({_n: t[e.cid]})
            })
        };
        this.on("DRAG_QUESTION", function () {
            var i = {};
            e.$(".question-block").each(function (e) {
                var t = $(this).data("ques");
                i[t] = e
            }), e.model.quesCollection.each(function (e) {
                e.set({_n: i[e.id]})
            }), t(), e.renderEditGrids(), e.syncBasket()
        }), this.on("DRAG_QUES_GRID", function () {
            o(), t(), e.renderEditGrids(), e.syncBasket()
        }), this.on("DRAG_TYPE_GRID", function () {
            n(), i(), o(), t(), e.renderEditGrids(), e.syncBasket()
        }), this.on("SORT_TYPE_QUES", function (t) {
            var i = $(JST["dialogs/sort-bytype"]({models: this.model.typeCollection, cid: t}));
            i.on("click", ".custom-checkbox", function (e) {
                var t = $(e.currentTarget);
                t.toggleClass("checked"), t.find("input").prop("checked", t.hasClass("checked"))
            }), i.on("click", ".custom-radio", function (e) {
                var t = $(e.currentTarget);
                i.find(".custom-radio").removeClass("checked"), i.find(".custom-radio input").prop("checked", !1), t.addClass("checked"), t.find("input").prop("checked", !0)
            }), myUtils.dialog.confirm2(i, function () {
                var t = [];
                i.find("input[type=checkbox]:checked").each(function () {
                    t.push(this.value)
                });
                var n = i.find("input[type=radio]:checked").val();
                _.each(t, function (t) {
                    var i = _.filter(e.ques_views, function (e) {
                        return e.__option.parentView.model.cid == t
                    });
                    i = _.sortBy(i, function (e) {
                        return Number(e.model.get("difficult_index")) * (1 == n ? 1 : -1)
                    }), _.each(i, function (e) {
                        e.$el.appendTo(e.__option.parentView.$el.children("ul"))
                    })
                }), e.trigger("DRAG_QUESTION")
            })
        }), this.on("SCORE_SOME", function (t) {
            var i = this.query.xd, n = this.query.chid, o = this.ques_views.filter(function (e) {
                return e.__option.parentView === t
            }), s = {};
            _.each(o, function (e) {
                var t = e.model.get("question_type"), i = e.model.get("question_channel_type");
                void 0 === s[t] && (s[t] = {}), void 0 === s[t][i] ? s[t][i] = [e.model] : s[t][i].push(e.model)
            });
            var a = function (e) {
                var t = 0;
                return _.each(e, function (e) {
                    t += (Number(e.value) || 0) * Number($(e).data("n"))
                }), s[6] && _.each(s[6], function (e) {
                    _.each(e, function (e) {
                        t += Number(e.get("score").score) || 0
                    })
                }), s[7] && _.each(s[7], function (e) {
                    _.each(e, function (e) {
                        t += Number(e.get("score").score) || 0
                    })
                }), $el.find(".t-score").html(t), t
            };
            Application.getFilterParamsPromise(i, n).then(function (i) {
                var n = i.question_channel_types;
                $el = $(JST["dialogs/setscore-some"]({data: s, qctypes: n, current: t.model}));
                var r = $el.find("input[name=score]");
                $el.on("submit", "form", function () {
                    return !1
                }), $el.on("blur", "input[name=score]", function () {
                    a(r)
                }), a(r), myUtils.dialog.confirm2($el, function () {
                    var i = {};
                    r.each(function () {
                        var e = $(this).data("ct");
                        i[e] = Number(this.value) || 0
                    }), _.each(o, function (e) {
                        var t = [e.model.get("question_type"), e.model.get("question_channel_type")].join(","),
                            n = e.model.get("question_type");
                        if (6 != n && 7 != n && i[t]) {
                            var o = Number(i[t]) || 0, s = Number(i[t]) || 0;
                            4 == n && (o = s * (_.size(e.model.get("answer_json") || e.model.get("myanswer")) || 1)), e.model.set({
                                score: {
                                    score: o,
                                    subScore: s
                                }
                            })
                        }
                    }), t.renderBody(), _.each(o, function (e) {
                        e.setScore()
                    }), e.renderEditGrids(), e.syncBasket()
                })
            })
        }), this.on("SCORE_ONE", function (e) {
            var t = this, i = this.query.xd, n = this.query.chid, o = e.model.get("question_type");
            Application.getFilterParamsPromise(i, n).then(function (i) {
                var n = $(JST["dialogs/setscore-one"]({model: e.model, qctypes: i.question_channel_types})),
                    s = n.find("input[name=score]"), a = function () {
                        var e = 0, t = [];
                        return s.each(function () {
                            var i = $(this).data("n") || null, n = Number(this.value) || 0;
                            e += i ? n * i : n, t.push(n)
                        }), n.find(".s-total").html(e), {score: e, subScore: t}
                    };
                n.on("blur", "input[name=score]", function () {
                    var e = parseFloat(this.value);
                    this.value = isNaN(e) ? 0 : e, a()
                }), a(), myUtils.dialog.confirm2(n, function () {
                    var i = a();
                    7 != o && (i.subScore = i.subScore[0]), 7 == o && e.model.collection.size() && e.model.collection.each(function (e, t) {
                        e.get("question_type");
                        var n = (i.subScore[t] || 0) * (_.size(e.get("answer_json") || e.get("myanswer")) || 1),
                            o = Number(i.subScore[t]) || 0;
                        e.set({score: {score: n, subScore: o}}, {silent: !0})
                    }), e.model.set({score: i}), e.setScore(), e.__option.parentView.renderBody(), e.__option.rootView.renderEditGrids(), t.syncBasket()
                })
            })
        }), this.on("QUES_REPLACE", function (t) {
            var i = new Application.ReplaceListView({replacedQues: t, rootView: this});
            i.$el.appendTo(this.$el), this.listenTo(i, "QUES_REPLACE_SUBMIT", function (n) {
                var o = new Application.QuestionView({model: n, parentView: t.__option.parentView, rootView: e});
                o.template = e.qTemplate, n.set({_n: t.model.get("_n")}), o.model.addAnyAttrsPromise.then(function () {
                    o.render()
                }), o.$el.insertAfter(t.$el);
                var s = e.model.quesCollection;
                s.remove(t.model), s.add(n), s.sort(), e.ques_views.push(o), e.ques_views = _.reject(e.ques_views, function (e) {
                    return e === t
                }), e.ques_views = _.sortBy(e.ques_views, function (e) {
                    return e.model.get("_n")
                }), myUtils.destructView(t), e.renderEditGrids(), i.destruct(), o.__option.parentView.renderBody(), e.syncBasket()
            })
        }), this.on("SET_STYLE", function () {
            this.syncBasket(), this.renderSettings()
        }), this.on("DEL_TYPE", function (e) {
            var t = this, i = _.find(this.type_views, function (t) {
                return t.model.cid === e
            });
            if (!i) return !1;
            var n = '确定要删除该"' + i.model.get("_t") + '"题型吗？';
            myUtils.dialog.alert(n, function () {
                t.delTypeView(i), t.renderEditGrids(), t.syncBasket()
            })
        }), this.on("DEL_QUES_ONE", function (t) {
            e.ques_views = _.reject(this.ques_views, function (e) {
                return t === e
            });
            var i = e.model.quesCollection;
            i.remove(t.model), i.sort(), i.each(function (e, t) {
                e.set({_n: t})
            }), myUtils.destructView(t), t.__option.parentView.renderBody(), e.renderPaperSet(), e.renderEditGrids(), e.syncBasket()
        }), this.on("EDIT_BLOCK", function (e, t, i) {
            var n = this, o = e.data("jedit"), s = "notes" === o ? $("<textarea>") : $("<input>");
            s.name = o;
            var a = e.html().toString();
            "type" == i && (a = t.get("_t")), a = a.replace(/<br>|<BR>/g, "\n"), s.val(a), s.insertAfter(e), e.hide(), s.focus();
            var r = function (e) {
                var t = !0;
                return "part" == i && "name" === o && ((t = !n.model.partCollection.findWhere({name: e})) || myUtils.dialog.alert('分卷名称"' + e + '"已存在！')), "type" == i && "_t" === o && ((t = !n.model.typeCollection.findWhere({_t: e})) || myUtils.dialog.alert('题型名称"' + e + '"已存在！')), t
            };
            s.on("change", function (i) {
                var o = this.value.toString();
                if ((o = $.trim(o)).length) {
                    o = _.escape(o).replace(/\n/g, "<br>");
                    var a = {};
                    a[s.name] = o, r(o) && (t.set(a), e.html(o), "title" == s.name && $(".J_edit_tit").html(o), n.syncBasket())
                }
                s && s.trigger("blur")
            }), s.on("blur", function (n) {
                e.show(), "type" == i && e.html(t.toJSON().short_tit), s.off(), s.remove(), s = null
            })
        }), this.on("EDIT_TYPE_NAME", function (t) {
            var i = t.model.get("_t");
            _.each(this.ques_views, function (e) {
                e.__option.parentView === t && e.model.set({_t: i}, {silent: !0})
            }), e.renderEditGrids(), e.basket.renderBody()
        }), this.on("QUES_MIGRATE", function (t) {
            var i = $(JST["dialogs/ques-migrate"]({
                model: t.model,
                t_view: t.__option.parentView,
                type_views: this.type_views
            }));
            i.on("click", ".custom-radio", function () {
                var e = $(this);
                if (e.hasClass("checked")) return !1;
                i.find(".custom-radio").removeClass("checked"), e.addClass("checked");
                var t = e.data("vid");
                i.find("input[name=_vid]").val(t)
            }), myUtils.dialog.confirm2(i, function () {
                var n = i.find("input[name=_vid]").val(), o = _.find(e.type_views, function (e) {
                    return e.cid == n
                });
                if (o) {
                    var s = t.__option.parentView;
                    t.__option.parentView = o, t.model.set({_t: o.model.get("_t")}), o.$el.children("ul").append(t.$el);
                    var a = {};
                    e.$(".question-block").each(function (e) {
                        var t = $(this).data("ques");
                        a[t] = e
                    }), e.model.quesCollection.each(function (e) {
                        e.set({_n: a[e.id]})
                    }), e.model.quesCollection.sort(), e.ques_views = _.sortBy(e.ques_views, function (e) {
                        return e.model.get("_n")
                    }), e.renderEditGrids(), s.renderBody(), o.renderBody(), setTimeout(function () {
                        e.scrollQuesToView(t.model.cid)
                    }, 20), myUtils.dialog.toast("试题转移成功。")
                }
            })
        }), this.listenTo(Backbone, "win:scroll", _.throttle(function () {
        }, 100)), this.listenTo(Backbone, "win:resize", _.debounce(function () {
        }, 100))
    }, scrollQuesToView: function (e) {
        _.each(this.ques_views, function (t) {
            if (t.model.cid === e) return t.scrollToView(), !1
        })
    }, scrollTypeToView: function (e) {
        _.each(this.type_views, function (t) {
            if (t.model.cid === e) return t.scrollToView(), !1
        })
    }, delTypeView: function (e) {
        var t = this, i = [];
        t.ques_views = _.reject(t.ques_views, function (t) {
            var n = t.__option.parentView === e;
            return n && i.push(t.model), n && myUtils.destructView(t), n
        });
        var n = t.model.quesCollection;
        n.remove(i), n.sort(), n.each(function (e, t) {
            e.set({_n: t})
        });
        var o = t.model.typeCollection;
        o.remove(e.model), o.sort(), o.each(function (e, t) {
            e.set({_n: t})
        }), t.type_views = _.reject(t.type_views, function (t) {
            return t === e
        }), myUtils.destructView(e)
    }, addNewType: function (e) {
        var t = _.size(this.type_views), i = _.last(this.type_views), n = i ? i.model.get("part") : 0,
            o = new Application.TypeModel({_t: e, _n: t, part: n});
        this.model.typeCollection.add(o);
        var s = this.part_views[n], a = new Application.PaperTypeView({model: o, parentView: s, rootView: this});
        a.render(), s.$el.append(a.$el), this.type_views.push(a), this.renderEditGrids(), this.syncBasket()
    }, createPaper: function (e) {
        var t = myUtils.dialog.alert("请稍后，正在保存试卷..."),
            i = {xd: this.query.xd, chid: this.query.chid, from: this.query.from, pid: this.__option.pid || null};
        void 0 !== e && (i.status = e), myUtils.http("get", "/paper/save-paper", i).then(function (i) {
            if (t.close(), 0 != i.code) return $.Deferred().reject(i);
            var n = Application.getBasketView();
            n.model.set({pid: null, template: 0}), n.model.clearAll().then(function () {
                n.renderBody()
            }), myUtils.dialog.toast("组卷成功").then(function () {
                void 0 === e ? window.location = "/paper/view/" + i.data.pid : 2 == e && (window.location = "/paper/view/" + i.data.pid)
            })
        }).fail(function (e) {
            myUtils.dialog.alert(e.data.err.title || "保存失败")
        })
    }, savePaper: function (e) {
        var t = this, i = $(JST["dialogs/save-paper"]({title: this.model.get("title")})), n = function () {
            var e = $.trim(i.find("input").val()), t = 0 == e.length;
            return i.find(".field-tip").toggle(t), !t && e
        };
        i.on("blur", "input", n);
        var o = myUtils.dialog.alert({
            title: "保存组卷", content: i, onclose: function () {
                o.close().remove(), i.remove()
            }
        }, function () {
            var i = n();
            if (!1 === i) return !1;
            t.model.set("title", i), t.$(".J_edit_tit").html(i), t.syncBasket(function () {
                e()
            })
        })
    }, events: {
        "click .J_sortby_type": function (e) {
            var t = $(e.currentTarget).data("cid");
            return this.trigger("SORT_TYPE_QUES", t), !1
        }, "click .J_del_type": function (e) {
            var t = $(e.currentTarget).data("cid");
            return this.trigger("DEL_TYPE", t), !1
        }, "click .J_selete_temp li": function (e) {
            var t = $(e.currentTarget).data("jtemp");
            this.$(".J_selete_temp").removeClass("select").hide();
            var i = _.map(_.range(0, 12), function () {
                return 0
            }), n = this.model.templates[t].val;
            _.each(n, function (e) {
                i[e - 1] = 1
            }), this.model.set({style: i, template: Number(t) || 0}), this.trigger("SET_STYLE")
        }, "mouseenter .J_selete_temp": function (e) {
            var t = $(e.currentTarget);
            t.addClass("select"), t.find(".edit-style").show()
        }, "mouseleave .J_selete_temp": function (e) {
            var t = $(e.currentTarget);
            t.removeClass("select"), t.find(".edit-style").hide()
        }, "click .J_jsettings > .custom-checkbox": function (e) {
            var t = $(e.currentTarget), i = t.data("jsetcheck");
            if (3 == i) return !1;
            var n = [];
            this.$(".J_jsettings > .custom-checkbox").each(function () {
                var e = $(this).data("jsetcheck") - 1;
                n[e] = $(this).hasClass("checked") ? 1 : 0
            }), n[i - 1] = t.hasClass("checked") ? 0 : 1, 6 != i && 8 != i || (n[5] = n[7] = t.hasClass("checked") ? 0 : 1), 10 != i && 12 != i || (n[9] = n[11] = t.hasClass("checked") ? 0 : 1), n[2] = 1, this.model.set({style: n}), this.$(".J_jsettings > .custom-checkbox").each(function () {
                var e = $(this).data("jsetcheck") - 1;
                $(this).toggleClass("checked", n[e])
            }), this.trigger("SET_STYLE")
        }, "click .contenteditable": function (e) {
            var t = $(e.currentTarget);
            this.trigger("EDIT_BLOCK", t, this.model)
        }, "click .J_new_type": function () {
            var e = this, t = $(JST["dialogs/paper-newtype"]());
            myUtils.dialog.confirm2(t, function () {
                var i = $.trim(t.find("input").val()), n = "";
                if (i.length <= 0 && (n = "题型名称不能为空！"), t.find(".error-msg")[n ? "show" : "hide"](), t.find(".error-msg").html(n), n) return !1;
                e.addNewType(i)
            })
        }, "click .J_show_analyze": function () {
            var e = [], t = {}, i = [], n = 0, o = this.model.typeCollection.toJSON(),
                s = this.model.quesCollection.groupBy(function (e) {
                    return e.get("_t")
                });
            _.each(o, function (t) {
                var o = {}, a = _.map(s[t._t], function (t) {
                    t.set({_n: n++}, {silent: !0});
                    var i = t.get("question_id");
                    return o[i] = t.get("score"), e.push(i), i
                }), r = {head_title: t._t, scores: o, questions: a};
                _.size(a) && i.push(r)
            }), t.content = i, t.qids = e, t = $.extend({}, t, Application.dataState.csrf), myUtils.http("post", "/paper/b-analysis", t).then(function (e) {
                if (0 != e.code) return !1;
                Application.AnalyzeChart.show1(e.data)
            })
        }, "click .J_submit_paper": function () {
            var e = this;
            e.savePaper(function () {
                e.createPaper()
            })
        }, "click .J_submit_uncheck": function () {
            var e = this;
            e.savePaper(function () {
                e.createPaper(1)
            })
        }, "click .J_submit_check": function () {
            var e = this;
            e.savePaper(function () {
                e.createPaper(2)
            })
        }
    }
}), Application.PaperPartView = Backbone.View.extend({
    className: "paper-part",
    template: JST["papers/paper-part"],
    initialize: function (e) {
        this.__option = $.extend({parentView: null, rootView: null}, e), this.list = [], this.render()
    },
    renderBody: function () {
        this.$el.children(".paper-title").html(this.template({data: this.model.toJSON()}))
    },
    render: function () {
        return this.$el.html(this.template({data: null})), this.renderBody(), this
    },
    events: {
        "click .contenteditable-part": function (e) {
            var t = $(e.currentTarget);
            this.__option.rootView.trigger("EDIT_BLOCK", t, this.model, "part")
        }
    }
}), Application.PaperTypeView = Backbone.View.extend({
    className: "paper-section",
    template: JST["papers/paper-type"],
    initialize: function (e) {
        this.__option = $.extend({
            parentView: null,
            rootView: null
        }, e), this.list = [], this.render(), this.listenTo(this.model, "change:_n", function () {
            this.renderBody()
        }), this.listenTo(this.model, "change:_t", function () {
            this.__option.rootView.trigger("EDIT_TYPE_NAME", this)
        })
    },
    renderBody: function () {
        var e = this.model.toJSON();
        e.type_count = this.__option.rootView.getTypeCount(this.model), this.$el.children(".paper-type").html(this.template({data: e}))
    },
    render: function () {
        return this.$el.html(this.template({data: null})), this.renderBody(), this
    },
    scrollToView: function () {
        var e = this;
        e.$(".paper-type").css({"background-color": "#cee5db"});
        var t = this.$el.offset().top - $(window).height() / 3;
        $("html,body").animate({scrollTop: t}, "slow"), setTimeout(function () {
            e.$(".paper-type").css({"background-color": "#ffffff"})
        }, 2e3)
    },
    events: {
        "click .J_del_ques": function () {
            this.__option.rootView.trigger("DEL_TYPE", this.model.cid)
        }, "click .J_sort_ques": function () {
            this.__option.rootView.trigger("SORT_TYPE_QUES", this.model.cid)
        }, "click .J_score_ques": function () {
            this.__option.rootView.trigger("SCORE_SOME", this)
        }, "click .contenteditable-type": function (e) {
            var t = $(e.currentTarget);
            this.__option.rootView.trigger("EDIT_BLOCK", t, this.model, "type")
        }
    }
}), Application.ReplaceListView = Backbone.View.extend({
    template: JST["dialogs/ques-replace"], qTemplate: function (e) {
        var t = ['<div class="question-block">', '<div class="q-mc">', JST["question/text"](e), 7 == e.data.question_type ? '<ol class="q-bd-list"></ol>' : "", JST["question/options"](e), "</div>", JST["question/analyze"](e), JST["question/origin-handler-nobtn"](e), "</div>"].join(""),
            i = JST["question/text"](e);
        return 0 == e.data.parent_id ? t : i
    }, initialize: function (e) {
        this.__option = $.extend({replacedQues: null, rootView: null}, e), this.select_view = null, this.render()
    }, render: function () {
        var e = this;
        return $(document.body).css({"overflow-y": "hidden"}), this.$el.html(this.template({data: null})), this.renderList(), setTimeout(function () {
            e.$(".p-replace-wrap").addClass("mactive")
        }, 200), this
    }, loading: function () {
        var e = this;
        return this.$(".loading").show(), function () {
            e.$(".loading").hide()
        }
    }, renderList: function () {
        var e = this, t = this.__option.replacedQues.model.id,
            i = this.__option.rootView.model.quesCollection.map(function (e) {
                return e.id
            }), n = this.loading(), o = $.extend({id: t, ids: i}, Application.dataState.csrf);
        myUtils.http("post", "/question/relation", o).then(function (t) {
            e.$(".J_bd_replace").html(e.template(t));
            var i = _.map(t.data.questions, function (t, i) {
                var n = new Application.QuestionModel(t);
                n.set({_n: i}, {silent: !0});
                var o = new Application.QuestionView({model: n});
                return o.template = e.qTemplate, n.addAnyAttrsPromise.then(function () {
                    o.render(), o.$(".q-analyize").show()
                }), o
            });
            _.each(e.list, function (e) {
                myUtils.destructView(e)
            }), e.list = i, e.list[0] && (e.select_view = e.list[0], e.$(".J_ques_list").html(e.select_view.$el))
        }).always(n)
    }, destruct: function () {
        var e = this;
        $(document.body).css({"overflow-y": "auto"}), this.$(".p-replace-wrap").removeClass("mactive"), setTimeout(function () {
            myUtils.destructView(e)
        }, 200)
    }, events: {
        "click .J_ques_tab": function (e) {
            var t = this, i = $(e.currentTarget);
            if (i.hasClass("active")) return !1;
            this.$(".J_ques_tab").removeClass("active"), i.addClass("active");
            var n = i.data("n");
            _.each(this.list, function (e, i) {
                i == n ? (t.$(".J_ques_list").append(e.$el), e.$el.show(), t.select_view = e) : e.$el.hide()
            })
        }, "click .J_reload_replace": _.throttle(function () {
            this.renderList()
        }, 600), "click .J_close_replace": function () {
            this.destruct()
        }, "click .J_submit_replace": function () {
            this.trigger("QUES_REPLACE_SUBMIT", this.select_view.model)
        }
    }
}), Application.PaperListExamView = Application.PaperListCommonView.extend({
    initialize: function (e) {
        document.title = "试卷库-测试试卷-21组卷";
        var t = Application.models.user;
        this._timestamp = null, this.__option = $.extend({
            type: "exam",
            query: null
        }, e), this.query = $.extend({
            xd: t.get("xd") || Application.DEF_XD,
            chid: t.get("chid") || Application.DEF_CHID,
            papertype: null,
            province_id: null,
            termid: null,
            page: 1
        }, this.__option.query)
    }, getListUrl: function () {
        return "/paper/paper-sync-list"
    }, renderBody: function () {
        var e = this, e = this;
        myUtils.http("get", "/paper/get-sync-parms", {xd: this.query.xd}).then(function (t) {
            var i = e.createLibTermsFilter(t.data.terms), n = e.createLibProvinceFilter(t.data.province);
            return e.$(".JV_filter_box").append(i.$el, n.$el), t.data
        }).then(function (t) {
            e.renderSideMenu("测试试卷类型", t.types)
        }), this.renderList(), this.renderBreadCrumb()
    }, renderBreadCrumb: function () {
        var e = this, t = ['<i class="iconw-fixed"></i><span>当前位置：</span><a href="javascript:;">试卷库</a>'];
        Application.getSubjectsPromise().then(function (i) {
            var n = Application.xd_hash[e.query.xd], o = i[e.query.chid];
            t.push('<span>&gt;</span><a href="javascript:;">测试试卷类型</a>'), t.push('<span>&gt;</span><a href="javascript:;">' + n + o + "</a>"), t = t.join(""), e.$(".crumbs").html(t)
        })
    }, events: {}
}), Application.PaperListRealView = Application.PaperListCommonView.extend({
    initialize: function (e) {
        document.title = "试卷库-真卷&模拟-21组卷";
        var t = Application.models.user;
        this._timestamp = null, this.__option = $.extend({
            type: "real",
            query: null
        }, e), this.query = $.extend({
            xd: t.get("xd") || Application.DEF_XD,
            chid: t.get("chid") || Application.DEF_CHID,
            papertype: null,
            province_id: null,
            paperyear: null,
            page: 1
        }, this.__option.query)
    }, getListUrl: function () {
        return "/paper/paper-exam-list"
    }, renderBody: function () {
        var e = this, e = this;
        myUtils.http("get", "/paper/get-exam-parms", {xd: this.query.xd}).then(function (t) {
            var i = e.createLibYearsFilter(t.data.years), n = e.createLibProvinceFilter(t.data.province);
            return e.$(".JV_filter_box").append(i.$el, n.$el), t.data
        }).then(function (t) {
            e.renderSideMenu("真卷/模拟试卷类型", t.types)
        }), this.renderList(), this.renderBreadCrumb()
    }, renderBreadCrumb: function () {
        var e = this, t = ['<i class="iconw-fixed"></i><span>当前位置：</span><a href="javascript:;">试卷库</a>'];
        Application.getSubjectsPromise().then(function (i) {
            var n = Application.xd_hash[e.query.xd], o = i[e.query.chid];
            t.push('<span>&gt;</span><a href="javascript:;">真题/模拟试卷类型</a>'), t.push('<span>&gt;</span><a href="javascript:;">' + n + o + "</a>"), t = t.join(""), e.$(".crumbs").html(t)
        })
    }, events: {}
}), Application.PaperListSyncView = Application.PaperListCommonView.extend({
    initialize: function (e) {
        document.title = "试卷库-同步试卷-21组卷";
        var t = Application.models.user;
        this._timestamp = null, this._tree = null, this.version_view = null, this.__option = $.extend({
            type: "sync",
            query: null
        }, e), this.query = $.extend({
            xd: t.get("xd") || Application.DEF_XD,
            chid: t.get("chid") || Application.DEF_CHID,
            categories: null,
            page: 1
        }, this.__option.query)
    }, getListUrl: function () {
        return "/paper/paper-category-list"
    }, renderBody: function () {
        var e = this, t = Application.models.user, i = new Application.VersionGradeSelectBlockView({
            el: this.$(".JV_tree_hd"),
            version_id: t.get("p_book_id") || null,
            grade_id: t.get("p_nianji_id") || null,
            type: "papers"
        });
        this.version_view = i, this._tree = new Application.TreeView({
            xd: this.query.xd,
            chid: this.query.chid,
            type: "papers",
            tree_type: "categories"
        }), this.listenTo(i, "DATA_CHANGE", function () {
            e._tree.render(i.__option.grade_id), e.query.categories = i.__option.grade_id, e.$(".JV_tree_bd").html(e._tree.$el), e.renderList();
            var t = i.__option.version_id, n = i.__option.grade_id;
            this.cacheVersionGrade(t, n), this.renderBreadCrumb()
        }), this.listenTo(this._tree, "TreeView_Title_Click", function (t) {
            e.query.categories = t.model.get("id"), this.renderList()
        }), i.afterRenderPromise().fail(function () {
            e.renderNoTree(), e.IsScroll()
        })
    }, renderBreadCrumb: function () {
        var e = this, t = this.version_view,
            i = ['<i class="iconw-fixed"></i><span>当前位置：</span><a href="javascript:;">试卷库</a>'];
        Application.getSubjectsPromise().then(function (n) {
            var o = Application.xd_hash[e.query.xd], s = n[e.query.chid];
            i.push('<span>&gt;</span><a href="javascript:;">同步试卷类型</a>'), i.push('<span>&gt;</span><a href="javascript:;">' + o + s + "</a>"), t && (t.__option.version_name && i.push('<span>&gt;</span><a href="javascript:;">' + t.__option.version_name + "</a>"), t.__option.version_name && t.__option.grade_name && i.push('<span>&gt;</span><a href="javascript:;">' + t.__option.grade_name + "</a>")), i = i.join(""), e.$(".crumbs").html(i)
        })
    }, renderNoTree: function () {
        var e = this;
        Application.hasCategoriesPromise().always(function (t) {
            var i = JST["partial/paper-undefind"](t);
            e.$(".J_main").html(i)
        })
    }, cacheVersionGrade: function (e, t) {
    }, events: {}
}), Application.PaperReportView = function () {
    var e = Backbone.Model.extend({
        toJSON: function () {
            var e = _.clone(this.attributes), t = this.get("scoreRank");
            return e.avgmin = Math.floor(t.total_time / t.total / 60), e.avgsec = Math.floor(t.total_time / t.total % 60), e
        }
    }), t = Backbone.View.extend({
        template: JST["report/head-title"], initialize: function () {
            document.title = "作答报告-21组卷", this.render()
        }, render: function () {
            var e = this.model.toJSON();
            return e.count = this.model.collection.size(), e.score = this.model.collection.reduce(function (e, t) {
                return e += +t.get("score").score
            }, 0), this.$el.html(this.template({data: e})), this
        }
    });
    return Application.MnView.extend({
        template: JST["04paper-report"], qTemplate: function (e) {
            var t = ['<div class="question-block report-question-block">', '<div class="q-mc">', JST["question/text"](e), 7 == e.data.question_type ? '<ol class="q-bd-list"></ol>' : "", JST["question/options-report"](e), "</div>", JST["question/analyze"](e), "</div>"].join(""),
                i = JST["question/text"](e);
            return i += JST["question/options-report"](e), i += JST["question/analyze"](e), 0 == e.data.parent_id ? t : i
        }, initialize: function (e) {
            this.__option = $.extend({id: null, query: null}, e), this.query = $.extend({}, this.__option.query)
        }, getDataPromise: function () {
            var t = this;
            return myUtils.http("get", "/paper/report", {id: this.__option.id}).then(function (i) {
                var n = _.filter(i.data.result.errorRateByKnowledge, function (e) {
                    return 100 * e.err_rate >= 80
                });
                t.model = new e(_.omit(i.data.result, "testResultData")), t.model.set({un_know: n}), t.typeCollection = new Application.TypeCollection;
                var o = 0, s = 0;
                return _.each(i.data.result.testResultData[0], function (e) {
                    var i = e.head_title, n = t.typeCollection.add({_n: o++, _t: i, head_title: i});
                    n.collection = new Application.QuestionCollection;
                    var a = e.scores;
                    _.each(e.questions, function (e) {
                        var t = _.size(a) ? {score: a[e.question_id]} : {};
                        7 == e.question_type && (e.list = _.map(e.list, function (t) {
                            return 4 == t.question_type && (t.myanswer = _.find(e.myanswer.list, function (e) {
                                return e.question_id == t.question_id
                            }), t.myanswer && (t.myanswer.list = JSON.parse(t.myanswer.myanswer))), t
                        })), n.collection.add($.extend(!0, {}, e, t, {_n: s++, _t: i}))
                    })
                }), t
            })
        }, render: function () {
            var e = this;
            return this.list = [], this.getDataPromise().then(_.bind(function () {
                this.$el.html(this.template({
                    data: this.model.toJSON(),
                    head_t_collection: this.typeCollection
                })), this.mount(".MiniHeaderView", Application.getMiniHeaderView()), this.typeCollection.each(function (i) {
                    var n = new t({model: i, rootView: e});
                    e.$(".J_reprot_con").append(n.$el), i.collection.each(function (t) {
                        var i = new Application.QuestionView({
                            model: t,
                            parentView: n,
                            rootView: e,
                            enable_show_analyze: !1
                        });
                        e.list.push(i), n.$(".J_ques_items").append(i.$el), i.template = e.qTemplate, i.render()
                    })
                }), e.initAnalyzeShow(), e.initChart(), setTimeout(_.bind(e.fixedBlock, e), 100)
            }, this)), this.trigger("render", this), this
        }, fixedBlock: function () {
            var e = this.$("#report-warp").offset().top, t = this.$(".do-q-box").width();
            this.listenTo(Backbone, "win:scroll", function () {
                var i = $(document).scrollTop();
                this.$(".do-q-box").css("width", t), this.$(".edit-handle,.do-q-box").toggleClass("fix-h", i >= e)
            })
        }, initChart: function () {
            var e = ["#f68657", "#77aaad", "#8cd790"], t = [];
            this.$(".c-circle").each(function (i) {
                t.push($(".c-circle").eq(i).find(".per").text()), t[i] <= 50 ? $(this).find(".circle-right").css("transform", "rotate(" + 3.6 * t[i] + "deg)") : ($(this).find(".circle-right").css({
                    transform: "rotate(0deg)",
                    background: e[i]
                }), $(this).find(".circle-left").css("transform", "rotate(" + 3.6 * (t[i] - 50) + "deg)"))
            })
        }, initAnalyzeShow: function () {
            var e = {};
            this.$(".J_custom_radio input").each(function () {
                e[this.name] = this.checked
            }), this.$(".J_ana_knw").toggle(e.know), this.$(".J_ana_ans").toggle(e.answer), this.$(".J_ana_exp").toggle(e.analyze)
        }, events: {
            "click .J_know_detail": function () {
                myUtils.dialog.alert({
                    title: "知识点掌握",
                    content: JST["report/dialog-know-master"]({data: this.model.get("errorRateByKnowledge")})
                })
            }, "click .J_tab > a": function (e) {
                var t = $(e.currentTarget), i = t.data("rest");
                if (t.hasClass("current")) return !1;
                t.siblings().removeClass("current"), t.addClass("current"), _.each(this.list, function (e) {
                    "all" == i ? e.$el.show() : "wrong" == i ? e.$el.toggle(0 == e.model.get("myanswer").is_right) : e.$el.toggle(1 == e.model.get("myanswer").is_right)
                })
            }, "click .J_custom_radio .checkbox": function (e) {
                var t = $(e.currentTarget), i = !t.hasClass("checked");
                return t.toggleClass("checked", i), t.find("input[type=checkbox]").prop("checked", i), this.initAnalyzeShow(), !1
            }, "click .J_side_card li": function (e) {
                var t = $(e.currentTarget).data("idz"), i = _.find(this.list, function (e) {
                    return e.model.id == t
                }), n = i.$el.offset().top - $(window).height() / 2;
                $("html, body").animate({scrollTop: n}, 250);
                var o = $('<div class="hightlight-wire"><div></div></div>');
                i.$el.addClass("hightlight-ques"), o.appendTo(i.$el), setTimeout(function () {
                    i.$el.removeClass("hightlight-ques")
                }, 800)
            }
        }
    })
}(), Application.PaperShowView = Application.MnView.extend({
    template: JST["04paper-show"], initialize: function (e) {
        document.title = "试卷预览-21组卷", this.__option = $.extend({
            pid: null,
            query: null
        }, e), this.query = $.extend({code: null, internal: !1}, this.__option.query)
    }, qTemplate: function (e) {
        var t = this.query.internal,
            i = ['<div class="question-block">', '<div class="q-mc">', JST["question/text"](e), 7 == e.data.question_type ? '<ol class="q-bd-list"></ol>' : "", JST["question/options"](e), "</div>", JST["question/btn-handler2"](e), t ? JST["question/analyze"](e) : "", "</div>"].join(""),
            n = JST["question/text"](e);
        return n += JST["question/options"](e), 0 == e.data.parent_id ? i : n
    }, getBasket: function () {
        return Application.ACTIVE_BASKET_OPTION(null), Backbone.trigger("SWITCH_BASKET"), Application.getBasketView({
            xd: this.model.get("xd"),
            chid: this.model.get("chid")
        })
    }, getDataPromise: function () {
        var e = this;
        return (this.query.code && this.query.code.toString().length > 10 ? myUtils.http("get", "/paper/test-detail", {code: this.query.code}) : myUtils.http("get", "/paper/detail", {pid: this.__option.pid})).then(_.bind(function (t) {
            if ("404" == t.code) return $.Deferred().reject(t);
            this.model = new Backbone.Model(t.data ? t.data._meta : {}), document.title = this.model.get("title"), this.typeCollection = new Application.TypeCollection;
            var i = 0;
            return _.each(t.data.content, function (t, n) {
                var o = myUtils.stripHTML(t.head_title), s = new Application.TypeModel({_n: n, _t: o, head_title: o}),
                    a = _.map(t.questions, function (e) {
                        var n = t.scores && t.scores[e.question_id] ? {score: t.scores[e.question_id]} : {};
                        return $.extend(!0, {}, e, n, {_n: i++, _t: o})
                    });
                s.collection = new Application.QuestionCollection(a), e.typeCollection.add(s)
            }), t
        }, this)).then(function (t) {
            return Application.getFilterParamsPromise(e.model.get("xd"), e.model.get("chid")).then(function (i) {
                return e.params = i, t
            })
        })
    }, renderNodeFound: function (e) {
        this.$el.append('<div class="MiniHeaderView"></div>'), this.mount(".MiniHeaderView", Application.getMiniHeaderView()), myUtils.dialog.alert(e)
    }, render: function () {
        var e = this;
        this.list = [];
        var t = Application.models.user.toJSON();
        return this.getDataPromise().then(_.bind(function () {
            this.$el.html(this.template({
                data: this.model.toJSON(),
                internal: this.query.internal,
                user: t,
                code: this.query.code
            })), e.typeCollection.each(function (t) {
                var i = new Application.ShowTypeView({model: t, rootView: e});
                t.collection.each(function (t) {
                    var n = new Application.QuestionView({model: t, parentView: i, rootView: e});
                    e.list.push(n), n.template = _.bind(e.qTemplate, e), t.addAnyAttrsPromise.then(function () {
                        n.render()
                    }), i.$el.children("ul").append(n.$el)
                }), e.$(".J_ques_item").append(i.$el)
            }), this.query.internal && setTimeout(function () {
                e.$(".q-analyize").toggle(!0)
            }, 100), Application.show_basket = !0;
            var i = this.getBasket();
            this.mount(".MiniHeaderView", Application.getMiniHeaderView()), this.mount(".BasketView", i), i.$el.removeClass("float-basket--show"), i.model.afterLoadedPromise().then(function () {
                e.toggleSelectAllState()
            }), this.genSideChart(), setTimeout(_.bind(this.fixedBlock, this), 100), this.listenTo(i.model.quesCollection, "add remove reset", function () {
                e.toggleSelectAllState()
            })
        }, this)).fail(function (t) {
            "404" == t.code && e.renderNodeFound(t.msg)
        }), this.trigger("render", this), this
    }, fixedBlock: function () {
        this.$("#ohead-fix").offset().top;
        this.listenTo(Backbone, "win:scroll", function () {
            var e = $(document).scrollTop();
            this.$("#ohead-fix").toggleClass("hd-fix", e >= 60)
        })
    }, genSideChart: function () {
        var e = this, t = {a: 0, b: 0};
        this.typeCollection.each(function (e) {
            e.collection.each(function (e) {
                var i = "123".indexOf(e.get("question_type")) > -1;
                (i = i || 4 == e.get("question_type") && 1 == e.get("is_objective")) ? t.a += +e.get("score").score || 0 : t.b += +e.get("score").score || 0
            })
        });
        var i = {labels: ["客观题", "主观题"], values: [t.a, t.b]};
        myUtils.Chart.Pie("J_total", i, function (e, t) {
            return t + "(" + e + ")分"
        }), this.$(".J_chart_score").html(t.a + t.b);
        var n = myUtils.genAnalyzeChart(e.typeCollection, e.params.difficult_indexs);
        _.size(n.data.head_titles) && myUtils.Chart.Bar("J_chart_num", n.data_tild), _.size(n.data.difficult_indexs) && myUtils.Chart.Pie("J_chart_difficulty", n.data_njdu), _.size(n.data.knowledge) && myUtils.Chart.Bar("J_chart_knowlist", n.data_viui)
    }, toggleSelectAllState: function () {
        var e = !0, t = this.getBasket();
        e = _.all(this.list, function (e) {
            return !!t.model.existsQuestions(e.model.id)
        }), this.$(".J_all_basket").toggleClass("checked", e)
    }, events: {
        "click .J_islogin": function () {
            if (!Application.models.user.get("uid")) return Application.popupLogin(), !1
        }, "click .J_show_all_explain": function (e) {
            var t = !$(e.currentTarget).hasClass("checked");
            return $(e.currentTarget).toggleClass("checked", t), this.$(".q-analyize").toggle(t), !1
        }, "click .J_all_basket": function (e) {
            return !$(e.currentTarget).hasClass("checked") && (Application.isLogin() ? (this.getBasket().model.addQuestions(_.map(this.list, function (e) {
                var t = e.model.toJSON();
                return t._t = t.question_channel_type_name, t
            })), this.toggleSelectAllState(), !1) : (Application.popupLogin(), !1))
        }, "click .J_share_paper": function () {
            var e = this.model.get("pid");
            myUtils.http("get", "/paper/share-info", {pid: e}).then(function (t) {
                if (0 != t.code) return t.msg && myUtils.dialog.alert(t.msg), !1;
                if (void 0 !== t.data.errCode && 0 != t.data.errCode) return t.data.message && myUtils.dialog.alert(t.data.message), !1;
                t.data.pid = e, t.data._csrf = Application.dataState.csrf._csrf;
                var i = $(JST["dialogs/paper-share"](t.data));
                myUtils.dialog.confirm({
                    title: "平台共享编辑", content: i, onclose: function () {
                        this.close().remove(), i.remove()
                    }
                }, function () {
                    var e = i.find("#share-form").serializeArray();
                    if ("" == i.find(".papers-tit").val()) return myUtils.dialog.toast("标题不能为空"), !1;
                    myUtils.http("post", "/paper/share", e).then(function (e) {
                        Application.models.user.fetchData(), myUtils.dialog.toast(0 == e.code ? "试卷分享成功" : e.message)
                    })
                })
            })
        }, "click .J_edit_paper": function () {
            var e = this, t = function () {
                Application.router.navigate("paper/edit/" + e.model.get("pid"), {trigger: !0})
            };
            this.getBasket().model.quesCollection.size() > 0 ? myUtils.dialog.alert("编辑功能需要清空您的试题篮，是否清空？", t) : t()
        }, "click .P_collect": function (e) {
            var t = $(e.currentTarget), i = this.model.get("pid"), n = $.extend({pid: i}, Application.dataState.csrf);
            myUtils.http("get", "/paper/collect", n).then(function (e) {
                if (e.code) return myUtils.dialog.toast("收藏失败：" + e.msg), !1;
                2 == e.data ? (t.html('<span class="iconw-collect-h"></span>收藏试卷'), myUtils.dialog.toast("已取消收藏")) : (t.html('<span class="iconw-ucollect-h"></span>取消收藏'), myUtils.dialog.toast("收藏成功"))
            })
        }, "click .J_answer_card": function () {
            var e = this;
            if (!Application.isLogin()) return Application.popupLogin(), !1;
            var t = 1, i = e.model.get("pid"), n = $(JST["dialogs/paper-card"]());
            n.vmenu = n.find(".menu"), n.vsheetlist = n.find(".sheet-list"), n.vtit = n.find(".s-title"), n.vsheets = n.find(".sheet div"), n.vmenu.on("click", function () {
                n.vsheetlist.show(), $(this).addClass("active")
            }), n.vsheetlist.find("li").on("click", function (e) {
                e.stopPropagation(), n.vsheetlist.hide(), n.vtit.html(this.innerHTML), t = $(this).data("sheet"), n.vsheets.hide(), n.vsheets.eq(t - 1).show(), n.vmenu.removeClass("active")
            }), this.listenTo(Backbone, "doc:click", function (e) {
                0 != $(e.target).parents(".menu").length || $(e.target).hasClass("menu") || (n.vsheetlist.hide(), n.vmenu.removeClass("active"))
            });
            var o = myUtils.dialog.confirm({
                title: "答题卡下载", content: n, onclose: function () {
                    this.close().remove(), n.remove()
                }
            }, function () {
                function e() {
                    new RegExp("(;s*)?download_" + r + "=").test(document.cookie.toString()) ? (clearTimeout(c), s.innerHTML = "下载", a = 0, setTimeout(function () {
                        o.close().remove(), n.remove()
                    }, 500)) : e()
                }

                var s = this, a = 0, r = myUtils.setDownToken(),
                    l = "/paper/download-answer-sheet?pid=" + i + "&size=" + t + "&token=" + r;
                myUtils.downloadFile(l);
                if (!a) {
                    a = 1;
                    var c = setTimeout(e, 1e3)
                }
                return !1
            })
        }, "click .J_temp_test": function () {
            var e = this;
            if (!Application.isLogin()) return Application.popupLogin(), !1;
            var t = e.model.get("pid");
            myUtils.http("get", "/paper/share-test", {pid: t}).then(function (e) {
                myUtils.dialog.alert({title: "分享试卷", content: JST["dialogs/paper-temp-test"]({code: e.data, pid: t})})
            })
        }
    }
}), Application.ShowTypeView = Backbone.View.extend({
    template: JST["question/type-show"], initialize: function (e) {
        this.__option = $.extend({parentView: null, rootView: null}, e), this.render()
    }, getCount: function () {
        return {
            count: this.model.collection.size(), score: this.model.collection.reduce(function (e, t) {
                return e += Number(t.get("score").score) || 0
            }, 0)
        }
    }, render: function () {
        var e = this.getCount();
        return this.$el.html(this.template({data: this.model.toJSON(), type_count: e})), this
    }
}), Application.PaperTestView = Application.MnView.extend({
    template: JST["04paper-test"], initialize: function (e) {
        this.__option = $.extend({pid: null, query: null}, e), this.query = $.extend({
            code: "",
            task_id: 0
        }, this.__option.query), this.start = !1, this.subscribeEvents()
    }, subscribeEvents: function () {
        this.on("FILL_ANSWER", function (e) {
            this.renderSideCard()
        })
    }, initEditor: function () {
        var e = this, t = this.model.get("xml_png"), i = {
            index: t ? t.index : 0, data: t ? t.answer_xml : {}, answers: {}, getHash: function () {
                var e = [], t = function (t) {
                    for (var i, n = /data-kfformula-index="(\d+)"/g; i = n.exec(t);) e.push(i[1])
                };
                _.each(this.answers, function (e, i) {
                    "string" == typeof e ? t(e) : null != e && _.size(e) > 0 && _.each(e, function (e, i) {
                        "string" == typeof e && t(e)
                    })
                });
                var i = {};
                return _.each(this.data, function (t, n) {
                    n = n.toString(), _.indexOf(e, n) > -1 && (i[n] = t)
                }), {answer_xml: i, index: this.index}
            }
        }, n = null, o = this.$("#formula-wrap"), s = !1;
        o.find("iframe").attr({src: "/lib/ckeditor2/plugins/kityformula_le/index.html"});
        var a = function (e) {
            return !1 === e ? (s = !1, o.animate({right: "-800px"}, "slow"), !1) : !s && (s = !0, void o.animate({right: 0}, "slow"))
        };
        this.$("#J_FormulaClose").click(function () {
            a(!1)
        }), o.draggable({
            handle: ".formula-tit",
            axis: "y",
            containment: "window"
        }), window.formulaReady = function (t) {
            e.$("#J_FormulaOk").click(function () {
                t.execCommand("get.image.data", function (e) {
                    var o = t.execCommand("get.source"), s = TeXZilla.toMathMLString(o, !1, !1, !0),
                        a = '<img class="kfformula" data-kfformula-index="' + i.index + '" src="' + e.img + '" />';
                    i.data[i.index] = s, i.index += 1, n && n.insertHtml(a)
                })
            })
        }, this.on("SHOW_FORMULA_EDITOR", function (e) {
            n = e, "function" == typeof a && a()
        }), this.on("CACHE_FORMULA_ANSWER", function (e) {
            i.answers[e.model.get("question_id")] = e.model.get("myanswer")
        }), this.on("GET_FORMULA_HASH", function (e) {
            e.data = i
        })
    }, qTemplate: function (e) {
        var t = ['<div class="question-block">', '<div class="q-mc">', JST["question/text"](e), 7 == e.data.question_type ? '<ol class="q-bd-list"></ol>' : "", 7 != e.data.question_type ? JST["question/options-answer"](e) : "", "</div>", "</div>"].join(""),
            i = JST["question/text"](e);
        return i += JST["question/options-answer"](e), 0 == e.data.parent_id ? t : i
    }, getDataPromise: function () {
        var e = this,
            t = myUtils.http("get", "/paper/temporary-answer", {pid: this.__option.pid, task_id: this.query.task_id}),
            i = null;
        return i = this.query.code && this.query.code.toString().length > 10 ? myUtils.http("get", "/paper/test-detail", {code: this.query.code}) : myUtils.http("get", "/paper/detail", {pid: this.__option.pid}), $.when(t, i).then(_.bind(function (t, i) {
            var n = t.data.answers || {}, o = 0;
            return i.data && 0 == i.code ? (e.model = new Backbone.Model(i.data._meta), document.title = "在线测试：" + e.model.get("title"), e.model.set({
                usetime: Number(t.data.usetime) || 0,
                task_id: t.data.task_id,
                xml_png: e.model.get("xml_png")
            }), e.typeCollection = new Application.TypeCollection, _.each(i.data.content, function (t, i) {
                var s = e.typeCollection.add({_t: t.head_title, _n: i});
                s.collection = new Application.QuestionCollection, _.each(t.questions, function (e) {
                    var i = $.extend({}, e, {
                        _n: o,
                        score: t.scores && t.scores[e.question_id] || null,
                        myanswer: n[e.question_id] || null
                    });
                    7 == e.question_type && _.each(i.list, function (e, t) {
                        i.list[t].myanswer = n[e.question_id] || null
                    }), s.collection.add(i), o++
                })
            }), e) : (myUtils.dialog.alert(i.msg), $.Deferred().reject())
        }, this))
    }, render: function () {
        var e = this;
        {
            if (Application.models.user.get("uid")) return this.checkAuthLogin() ? (this.list = [], this.getDataPromise().then(_.bind(function () {
                this.$el.html(this.template({data: this.model.toJSON()})), this.typeCollection.each(function (t) {
                    var i = new Application.TestPaperTypeView({model: t});
                    t.collection.each(function (t) {
                        var n = new Application.QuestionView({model: t, rootView: e, parentView: i});
                        n.template = e.qTemplate, n.render(), i.$(".J_ques_items").append(n.$el), e.list.push(n)
                    }), e.$(".J_ques_wrap").append(i.$el)
                }), this.renderSideCard(), this.mount(".MiniHeaderView", Application.getMiniHeaderView()), setTimeout(_.bind(e.initEditor, e), 100), e.start = !0, e.startTest(), setTimeout(_.bind(e.fixedBlock, e), 100)
            }, this)), this.trigger("render", this), this) : this;
            Application.router.navigate("/", {trigger: !0})
        }
    }, fixedBlock: function () {
        var e = this.$("#ohead-fix").offset().top;
        this.listenTo(Backbone, "win:scroll", function () {
            var t = $(document).scrollTop();
            this.$("#ohead-fix").toggleClass("hd-fix", t >= e)
        })
    }, renderSideCard: function () {
        this.$(".J_side_card").html(JST["test/side-card"]({head_t_collection: this.typeCollection}))
    }, startTest: function () {
        if (!this.start) return !1;
        var e = this, t = null, i = this.$(".J_used_time h3"), n = function (t) {
            var n = myUtils.secondsToRead(t);
            i.each(function (e) {
                this.innerHTML = n[e]
            });
            var t = e.model.get("usetime");
            e.model.set("usetime", t + 1)
        }, o = function () {
            t = setTimeout(function () {
                if (!e.start) return !1;
                n(e.model.get("usetime")), o()
            }, 1e3)
        };
        o()
    }, getSubmitData: function () {
        var e = {};
        this.typeCollection.each(function (t) {
            t.collection.each(function (t) {
                7 == t.get("question_type") ? t.collection.each(function (t) {
                    t.get("myanswer") && (e[t.id] = t.get("myanswer"))
                }) : t.get("myanswer") && (e[t.id] = t.get("myanswer"))
            })
        });
        var t = {data: null};
        this.trigger("GET_FORMULA_HASH", t);
        var i = this.$(".J_side_card a"), n = i.filter(function () {
            return $(this).hasClass("done")
        }), o = {
            FormulaImgHash: t.data.getHash(),
            answers: e,
            task_id: this.model.get("task_id"),
            pid: this.model.get("pid"),
            usetime: this.model.get("usetime"),
            percent: 100 * n.length / i.length
        };
        return o._csrf = Application.dataState.csrf._csrf, o
    }, hasCompleteTest: function () {
        var e = [];
        return this.typeCollection.each(function (t) {
            t.collection.each(function (t) {
                t.hasDone() || e.push(t)
            })
        }), e
    }, stopTest: function (e) {
        var t = this, i = $(e.currentTarget);
        if (this.start = !this.start, i.html('<span class="iconw-save"></span>' + (this.start ? "暂时保存" : "继续作答")), this.start) return this.startTest(), !1;
        var n = this.getSubmitData();
        return myUtils.http("post", "/paper/save-answer", n).then(function () {
            var i = myUtils.dialog.alert(JST["dialogs/save-test"]());
            $(i.node).on("click", ".pop-btn", function () {
                i.close().remove(), t.stopTest(e)
            })
        }), !1
    }, events: {
        "click li[data-idz]": function (e) {
            var t = $(e.currentTarget).data("idz").toString().split("."), i = t[0], n = t[1],
                o = _.find(this.list, function (e) {
                    return e.model.id == i
                });
            if (!o) return !1;
            var s = o.$el;
            n && (s = 6 == o.model.get("question_type") ? s.find(".q-subitem").eq(n) : s.find(".QuestionView").eq(n));
            var a = s.offset().top - document.documentElement.clientHeight / 2 + 100;
            $("html,body").animate({scrollTop: a}, 250);
            var r = $('<div class="hightlight-wire"><div></div></div>');
            return s.addClass("hightlight-ques"), r.appendTo(s), setTimeout(function () {
                s.removeClass("hightlight-ques"), r.remove()
            }, 800), !1
        }, "click .J_stop_test": "stopTest", "click .J_submit_test": function (e) {
            var t = this, i = this.hasCompleteTest(), n = t.getSubmitData(), o = function () {
                var e = myUtils.dialog.alert("请稍候，正在上传答案, 系统正在自动批改...");
                myUtils.http("post", "/paper/upload-answer", n).then(function (t) {
                    e.close().remove(), Application.router.navigate("paper/report/" + t.data.result_id, {trigger: !0})
                })
            };
            if (_.size(i)) return myUtils.dialog.alert("你还有<strong>" + _.size(i) + "</strong>道题还没有完成，是否提交？", function () {
                o()
            }), !1;
            o()
        }
    }
}), Application.TestPaperTypeView = Backbone.View.extend({
    template: JST["test/head-title"], initialize: function () {
        this.render()
    }, render: function () {
        return this.$el.html(this.template({data: this.model.toJSON()})), this
    }
}), Application.QuestionDetailView = Application.MnView.extend({
    template: JST["02question-detail"],
    initialize: function (e) {
        document.title = "答案解析-21组卷", this.__option = $.extend({id: null}, e);
        Application.models.user;
        this.query = $.extend({}, this.__option.query)
    },
    render: function () {
        var e = this;
        return this.$el.html(this.template()), this.mount(".MiniHeaderView", Application.getMiniHeaderView()), Application.show_basket = !0, myUtils.http("get", "/question/detail", {id: this.__option.id}).then(function (t) {
            0 == t.code ? (e.query.xd = t.data.xd, e.query.chid = t.data.chid, e.mount(".BasketView", Application.getBasketView({
                xd: t.data.xd,
                chid: t.data.chid
            })), e.renderBody(t.data)) : (e.$(".m-wrap").hide(), e.$(".inner-footer").hide(), myUtils.dialog.alert(t.msg || "试题已经被删除！"))
        }), this.trigger("render", this), this
    },
    qTemplate: function (e) {
        var t = ['<div class="question-block">', '<div class="q-mc">', JST["question/text"](e), 7 == e.data.question_type ? '<ol class="q-bd-list"></ol>' : "", JST["question/options"](e), "</div>", JST["question/analyze"](e), JST["question/origin-handler"](e), "</div>"].join(""),
            i = JST["question/text"](e);
        return i += JST["question/options"](e), i += JST["question/analyze"](e), 0 == e.data.parent_id ? t : i
    },
    renderBody: function (e) {
        var t = this, i = new Application.QuestionModel(e);
        document.title = i.get("question_text");
        var n = i.get("xd"), o = i.get("chid");
        i.addAnyAttrsPromise.then(function () {
            i.set("_n", 0);
            var e = new Application.QuestionView({model: i, enable_show_analyze: !1});
            e.template = t.qTemplate, e.render(), t.$("#J_question_detail").html(e.$el), t.$(".J_analyize").hide(), Application.getFilterParamsPromise(n, o).then(function (e) {
                var s = e.question_channel_types[i.get("question_channel_type")];
                t.renderBreadCrumb(s, n, o)
            }), t.renderAnswerBtn(), t.renderPartialPapers(), t.renderPartialVideos(), t.renderPartialSubject(), t.renderConnectQues(), setTimeout(function () {
                setInterval(_.bind(t.animate, t), 5e3), t.animate()
            }, 0)
        })
    },
    renderBreadCrumb: function (e, t, i) {
        var n = this, o = ['<i class="iconw-fixed"></i><span>当前位置：</span><a href="javascript:;">答案解析</a>'];
        Application.getSubjectsPromise().then(function (s) {
            var a = Application.xd_hash[t], r = s[i];
            o.push('<span>&gt;</span><a href="javascript:;">' + a + r + "</a>"), o.push('<span>&gt;</span><a href="javascript:;">' + e + "</a>"), o = o.join(""), n.$(".crumbs").html(o)
        })
    },
    renderAnswerBtn: function () {
        var e = Application.models.user, t = JST["question/login-btn"]();
        e.get("uid") ? this.$(".q-analyize").show() : this.$("#J_question_detail .q-mc").first().append(t)
    },
    renderPartialPapers: function () {
        var e = this;
        myUtils.http("get", "/question/relation-paper", {xd: this.query.xd, chid: this.query.chid}).then(function (t) {
            e.$(".JV_question__papers").html(JST["question/papers"](t))
        })
    },
    renderPartialVideos: function () {
        var e = this;
        myUtils.http("get", "/question/get-kt5u-data", {id: this.__option.id}).then(function (t) {
            e.$(".JV_question__video").html(JST["question/video"](t))
        })
    },
    renderPartialSubject: function () {
        var e = this;
        myUtils.http("get", "/question/reco-merge").then(function (t) {
            e.$(".JV_question__subject").html(JST["question/subject"](t))
        })
    },
    loading: function () {
        var e = this.$(".loading-wrap").show();
        return function () {
            e.hide()
        }
    },
    renderConnectQues: function () {
        var e = this;
        this.list = this.list || [];
        var t = function (e) {
            var t = ['<div class="question-block">', '<div class="q-mc">', JST["question/text"](e), 7 == e.data.question_type ? '<ol class="q-bd-list"></ol>' : "", JST["question/options"](e), "</div>", JST["question/btn-handler2"](e), "</div>"].join(""),
                i = JST["question/text"](e);
            return i += JST["question/options"](e), 0 == e.data.parent_id ? t : i
        }, i = this.loading();
        myUtils.http("get", "/question/relation-question", {qid: this.__option.id}).then(function (i) {
            if (0 != i.code) return !1;
            if (!i.data || 0 == _.size(i.data)) return !1;
            var n = [], o = $("<ul>").addClass("do-q-mc");
            _.each(i.data, function (i, s) {
                i._n = s;
                var a = new Application.QuestionModel(i),
                    r = new Application.QuestionView({model: a, rootView: e, async_analyze: !0});
                r.template = t, n.push(r), o.append(r.$el), a.addAnyAttrsPromise.then(function () {
                    r.render()
                })
            }), _.each(this.list, function (e) {
                e.off().stopListening().undelegateEvents().remove()
            }), e.list = n, e.$(".J_ConnectQues").html(o)
        }).always(i), this.$(".J_ConnectQues").html()
    },
    animate: function () {
        this.$(".qline").animate({width: "+=280px", opacity: "0"}, 1500, function () {
            $(this).css({left: "280px", opacity: "1"})
        }), this.$(".qline").animate({left: "-1px", opacity: "0"}, 1500, function () {
            $(this).css({opacity: "1", width: "1px"})
        })
    },
    events: {
        "click .q-login-btn": function () {
            return Application.popupLogin(), !1
        }, "click .J_ConnectReload": _.debounce(function () {
            this.renderConnectQues()
        }, 400, !0)
    }
}), Application.QuestionsListView = Application.MnView.extend({
    className: "QuestionsListView",
    template: JST["02question-list"],
    initialize: function (e) {
        document.title = "手动搜题-21组卷";
        var t = Application.models.user;
        this._timestamp = null, this._tree = null, this.list = [], this.version_view = null, this.__option = $.extend({
            tree_type: "categories",
            query: null
        }, e), this.query = $.extend({
            xd: t.get("xd") || Application.DEF_XD,
            chid: t.get("chid") || Application.DEF_CHID,
            categories: null,
            knowledges: null,
            question_channel_type: null,
            difficult_index: null,
            exam_type: null,
            kid_num: null,
            grade_id: null,
            sort_field: "time",
            filterquestion: 0,
            page: 1
        }, this.__option.query), this.listenTo(this.getActiveBasket().model.quesCollection, "add remove reset", function () {
            this.toggleAllBtnStat()
        }), this.listenTo(Backbone, "win:scroll", _.bind(this.IsScroll, this))
    },
    getActiveBasket: function () {
        return Application.getBasketView(Application.ACTIVE_BASKET_OPTION())
    },
    render: function () {
        return this.$el.html(this.template()), this.initPageView(), this.mount(".HeaderView", Application.getHeaderView({cur_nav: "questions"})), this.mount(".FootView", Application.getFootView()), Application.show_basket = !0, this.mount(".BasketView", this.getActiveBasket()), this.renderBody(), this.trigger("render", this), this
    },
    renderBody: function () {
        var e = this, t = Application.models.user;
        if ("categories" == this.__option.tree_type) {
            var i = new Application.VersionGradeSelectBlockView({
                el: this.$(".JV_tree_hd"),
                version_id: t.get("q_book_id") || null,
                grade_id: t.get("q_nianji_id") || null
            });
            this.version_view = i;
            n = new Application.TreeView({xd: this.query.xd, chid: this.query.chid, tree_type: "categories"});
            this._tree = n, this.$(".JV_tree_bd").html(n.$el), this.listenTo(i, "DATA_CHANGE", function () {
                this.cacheVersionGrade(i.__option.version_id, i.__option.grade_id), n.render(i.__option.grade_id), e.query.categories = i.__option.grade_id, this.renderList(), e.renderBreadCrumb()
            }), this.listenTo(this._tree, "TreeView_Title_Click", function (t) {
                e.query.categories = t.model.get("id"), this.renderList()
            }), i.afterRenderPromise().then(function () {
                e.renderFilterBlock(), e.IsScroll()
            }).fail(function () {
                e.renderNoTree(), e.IsScroll()
            })
        } else {
            this.$(".JV_tree_hd").html('<div class="mt-hd clearfix">选择知识点</div>');
            var n = new Application.TreeView({xd: this.query.xd, chid: this.query.chid, tree_type: "knowledges"});
            this._tree = n, this.listenTo(this._tree, "TreeView_Title_Click", function (t) {
                e.query.knowledges = t.model.get("id"), this.renderList()
            }), this._tree.render().then(function (t) {
                _.size(t.data) ? (e.renderList(), e.renderFilterBlock(), e.renderBreadCrumb(), e.$(".JV_tree_bd").html(n.$el)) : e.renderNoTree1()
            })
        }
    },
    renderBreadCrumb: function () {
        var e = this, t = this.version_view,
            i = ['<i class="iconw-fixed"></i><span>当前位置：</span><a href="javascript:;">手动组卷</a>'];
        Application.getSubjectsPromise().then(function (n) {
            var o = Application.xd_hash[e.query.xd], s = n[e.query.chid];
            t ? (i.push('<span>&gt;</span><a href="javascript:;">按章节</a>'), i.push('<span>&gt;</span><a href="javascript:;">' + o + s + "</a>"), t.__option.version_name && i.push('<span>&gt;</span><a href="javascript:;">' + t.__option.version_name + "</a>"), t.__option.version_name && t.__option.grade_name && i.push('<span>&gt;</span><a href="javascript:;">' + t.__option.grade_name + "</a>")) : (i.push('<span>&gt;</span><a href="javascript:;">按知识点</a>'), i.push('<span>&gt;</span><a href="javascript:;">' + o + s + "</a>"), i.push('<span>&gt;</span><a href="javascript:;">综合知识点</a>')), i = i.join(""), e.$(".crumbs").html(i)
        })
    },
    renderNoTree: function (e, t) {
        var i = JST["partial/undefind"];
        this.$(".J_main").html(i)
    },
    renderNoTree1: function (e, t) {
        var i = JST["partial/undefind-know"];
        this.$(".J_main").html(i)
    },
    cacheVersionGrade: function (e, t) {
        myUtils.http("get", "/question/set-cate-cash", {
            xd: this.query.xd,
            chid: this.query.chid,
            version: e,
            nianji: t
        })
    },
    renderFilterBlock: function () {
        var e = this, t = Application.FilterSelectView, i = t.createChannelTypeFilter(this.query.xd, this.query.chid),
            n = t.createDifficultyFilter(this.query.xd, this.query.chid),
            o = t.createQuestionArchiveTypeFilter(this.query.xd, this.query.chid);
        this.$(".JV_filter_box").append([i.$el, n.$el, o.$el]), _.each([i, n, o], function (t) {
            e.listenTo(t, "FilterView_Update", function (t, i) {
                e.query[t] = i, e.renderList()
            })
        })
    },
    renderList: _.debounce(function (e) {
        var t = this, i = this.loading();
        this.query.page = Number(e) ? Number(e) : 1;
        var n = (new Date).getTime();
        this._timestamp = n, myUtils.http("get", "/question/list", this.query).then(function (e) {
            if (t.$(".J_count_questions").html(e.data.total + "题"), 0 == _.size(e.data.questions)) return t.NotFound(), !1;
            if (n !== t._timestamp) return !1;
            var i = [], o = $("<ul>");
            _.each(e.data.questions, function (e, n) {
                e._n = n;
                var s = new Application.QuestionModel(e),
                    a = new Application.QuestionView({model: s, rootView: t, async_analyze: !0});
                i.push(a), o.append(a.$el), s.addAnyAttrsPromise.then(function () {
                    a.render()
                })
            }), _.each(this.list, function (e) {
                e.off().stopListening().undelegateEvents().remove()
            }), t.list = i, t.$(".JV_list .items").html(o), t.toggleAllBtnStat(), t.pageView.render(e.data.pager)
        }).always(i)
    }, Application.debounceTime),
    NotFound: function () {
        this.$(".JV_list .items").html('<div class="empty-ffxi"><img src="/images/blank.png"><p>筛选无结果，换个条件试试吧</p></div>'), this.pageView.render("")
    },
    loading: function () {
        var e = this;
        return setTimeout(function () {
            $("html,body").animate({scrollTop: 0}, 300)
        }, 0), this.$(".JV_list .loading-wrap").show(), function () {
            e.$(".JV_list .loading-wrap").hide()
        }
    },
    toggleAllBtnStat: function () {
        var e = this.getActiveBasket();
        if (0 != _.size(this.list)) {
            var t = _.all(this.list, function (t) {
                return !!e.model.existsQuestions(t.model.id)
            });
            this.$(".J_add_all").toggleClass("active", t)
        } else this.$(".J_add_all").toggleClass("active", !1)
    },
    events: {
        "click .J_exclude_used": function (e) {
            var t = $(e.currentTarget);
            this.query.filterquestion = t.hasClass("checked") ? 0 : 1, t.toggleClass("checked", this.query.filterquestion), this.renderList()
        }, "click .J_sort_item": function (e) {
            var t = $(e.currentTarget);
            if (t.hasClass("sort-current")) return !1;
            t.siblings(".J_sort_item").removeClass("sort-current"), t.addClass("sort-current");
            var i = t.data("param").toString().split("=");
            this.query.sort_field = i[1], this.renderList()
        }, "click .J_add_all": function (e) {
            return Application.isLogin() ? (this.getActiveBasket().model.addQuestions(_.map(this.list, function (e) {
                return e.model.toJSON()
            })), !1) : (Application.popupLogin(), !1)
        }
    }
}), Application.SearchListView = Application.MnView.extend({
    template: JST["06search-list"], initialize: function (e) {
        var t = Application.models.user;
        this.__option = $.extend({}, e), this.query = $.extend({
            type: "paper",
            xd: t.get("xd"),
            chid: t.get("chid"),
            typeid: "",
            content: "",
            papertype: "",
            page: 1
        }, Application.dataState.query, this.__option.query), this.qlist = []
    }, renderBody: function () {
        var e, t = this, i = Application.models.user.toJSON(),
            n = $.extend({user: i, type: this.query.type, xds: Application.xd_hash}, this.query);
        e = "question" == this.query.type ? Application.getFilterParamsPromise(i.xd, i.chid) : myUtils.http("get", "/paper/get-paper-types", {xd: t.query.xd}).then(function (e) {
            return {exam_types: e.data}
        });
        Application.getXdSubjectsPromise().then(function (i) {
            n.data = i.data, n.type = t.query.type, e.then(function (e) {
                n.params = e, n.cur_xd = t.query.xd, n.cur_chid = t.query.chid, t.$el.html(t.template(n)), t.initPageView(), t.renderList(), t.mount(".MiniHeaderView", Application.getMiniHeaderView(t.query)), "paper" != t.query.type && (t.basket && myUtils.destructView(t.basket), t.basket = Application.getBasketView({
                    xd: t.query.xd,
                    chid: t.query.chid
                }), t.mount(".BasketView", t.basket))
            })
        });
        return this
    }, render: function () {
        return this.renderBody(), this.trigger("render", this), this
    }, renderList: _.debounce(function (e) {
        var t = this.loading();
        this.query.page = Number(e) ? Number(e) : 1;
        var i = (new Date).getTime();
        this._timestamp = i, "paper" == this.query.type ? myUtils.http("get", "/paper/search", this.query).then(_.bind(this.renderPaperList, this)).always(t) : myUtils.http("get", "/question/search", this.query).then(_.bind(this.renderQList, this)).always(t)
    }, Application.debounceTime), renderQList: function (e) {
        var t = this;
        _.each(this.qlist, function (e) {
            myUtils.destructView(e)
        }), this.qlist = [], this.$(".JV_list").html(JST["searchpage/search-qblock"](e)), _.each(e.data.questions, function (e, i) {
            var n = new Application.QuestionModel($.extend(!0, {}, e, {_n: i})),
                o = new Application.QuestionView({model: n, rootView: t});
            t.qlist.push(o), this.$(".JV_list ul").append(o.$el), n.addAnyAttrsPromise.then(function () {
                o.render()
            })
        }), this.$(".J_total").html("“" + e.data.total + "”"), t.pageView.render(e.data.pager)
    }, renderPaperList: function (e) {
        var t = this;
        this.$(".JV_list").html(JST["searchpage/search-tblock"](e)), this.$(".J_total").html("“" + e.data.total + "”"), t.pageView.render(e.data.pager)
    }, loading: function () {
        var e = this;
        return setTimeout(function () {
            $("html,body").animate({scrollTop: 0}, 300)
        }, 0), this.$(".JV_list .loading-wrap").show(), function () {
            e.$(".JV_list .loading-wrap").hide()
        }
    }, events: {
        "click .J_filter_line a[data-param]": function (e) {
            var t = $(e.currentTarget);
            if (t.hasClass("active")) return !1;
            var i = t.data("param").toString().split("=");
            this.$(".J_filter_line a[data-param]").removeClass("active"), t.addClass("active"), this.query[i[0]] = i[1], this.renderList()
        }, "click .J_xdchid_menu a": function (e) {
            var t = $(e.currentTarget).data("xdchid").toString().split(",");
            Application.changeXdChid(t)
        }, "click .q-mc": function (e) {
            return $(e.currentTarget).siblings(".q-analyize").toggle(), !1
        }
    }
}), Application.SmartConfEditView = Application.MnView.extend({
    template: JST["03smart-conf-edit"],
    initialize: function (e) {
        document.title = "智能组卷-21组卷";
        var t = Application.models.user;
        this._timestamp = null, this._tree = null, this.version_view = null, this.typeSetCollection = null, this.__option = $.extend({
            tree_type: "categories",
            query: null
        }, e), this.query = $.extend({
            xd: t.get("xd") || Application.DEF_XD,
            chid: t.get("chid") || Application.DEF_CHID
        }, this.__option.query), this.list = [], this.listenTo(Backbone, "win:scroll", _.bind(this.IsScroll, this))
    },
    render: function () {
        var e = this, t = this.query.xd, i = this.query.chid, n = $.Deferred().resolve({tree_type: "categories"});
        return "knowledges" === this.__option.tree_type && (n = Application.getFilterParamsPromise(t, i).then(function (t) {
            return {grade_ids: t.grade_ids, tree_type: e.__option.tree_type}
        })), n.then(_.bind(function (t) {
            t.xd = e.query.xd, t.chid = e.query.chid, t.csrf = Application.dataState.csrf, this.$el.html(this.template(t)), this.mount(".HeaderView", Application.getHeaderView({cur_nav: "smart"})), this.mount(".FootView", Application.getFootView()), Application.show_basket = !0, this.mount(".BasketView", Application.getBasketView()), this.renderBody(), e.IsScroll()
        }, this)).fail(function () {
            e.IsScroll()
        }), this.trigger("render", this), this
    },
    renderResults: _.debounce(function (e) {
        return this.$(".JV_results").html(JST["smartpage/node-results"]({
            list: e,
            tree_type: this.__option.tree_type
        })), this
    }, 100),
    renderChannelSet: function () {
        var e = this;
        Application.getFilterParamsPromise(this.query.xd, this.query.chid).then(function (t) {
            var i = _.map(t.question_channel_types, function (e, t) {
                return {
                    question_channel_type: t,
                    question_channel_type_name: e,
                    selected: "单选题" == e || "填空题" == e || "解答题" == e
                }
            });
            e.typeSetCollection = new Application.SmartChannelTypeCollection(i), e.typeSetCollection.each(function (t) {
                var i = new Application.SmartChannelTypeSettingView({model: t});
                e.list.push(i), e.$(".J_channel_sets").append(i.$el), e.$(".J_channel_btns").append(new Application.SmartChannelTypeButtonView({model: t}).$el)
            })
        })
    },
    renderBody: function () {
        var e = this, t = Application.models.user;
        if ("categories" == this.__option.tree_type) {
            var i = new Application.VersionGradeSelectBlockView({
                el: this.$(".JV_tree_hd"),
                version_id: t.get("q_book_id") || null,
                grade_id: t.get("q_nianji_id") || null
            });
            this.version_view = i;
            n = new Application.TreeCheckboxView({xd: this.query.xd, chid: this.query.chid, tree_type: "categories"});
            this._tree = n, this.$(".JV_tree_bd").html(n.$el), this.listenTo(i, "DATA_CHANGE", function () {
                n.render(i.__option.grade_id);
                var t = i.__option.version_id, o = i.__option.grade_id;
                this.cacheVersionGrade(t, o), e.renderBreadCrumb()
            }), i.afterRenderPromise().then(function () {
                e.renderChannelSet()
            }).fail(function () {
                e.renderNoTree()
            })
        } else {
            this.$(".JV_tree_hd").html('<div class="mt-hd clearfix">选择知识点</div>');
            var n = new Application.TreeCheckboxView({
                xd: this.query.xd,
                chid: this.query.chid,
                tree_type: "knowledges"
            });
            this._tree = n, this.$(".JV_tree_bd").html(n.$el), this._tree.render(), this.renderBreadCrumb(), this.renderChannelSet()
        }
        return this.renderResults([]), this._tree && this.listenTo(this._tree, "TreeView_Node_Checked", function (e, t) {
            this.renderResults(t), this.onlineCountData()
        }), this
    },
    renderBreadCrumb: function () {
        var e = this, t = this.version_view,
            i = ['<i class="iconw-fixed"></i><span>当前位置：</span><a href="javascript:;">智能组卷</a>'];
        Application.getSubjectsPromise().then(function (n) {
            var o = Application.xd_hash[e.query.xd], s = n[e.query.chid];
            t ? (i.push('<span>&gt;</span><a href="javascript:;">按章节</a>'), i.push('<span>&gt;</span><a href="javascript:;">' + o + s + "</a>"), t.__option.version_name && i.push('<span>&gt;</span><a href="javascript:;">' + t.__option.version_name + "</a>"), t.__option.version_name && t.__option.grade_name && i.push('<span>&gt;</span><a href="javascript:;">' + t.__option.grade_name + "</a>")) : (i.push('<span>&gt;</span><a href="javascript:;">按知识点</a>'), i.push('<span>&gt;</span><a href="javascript:;">' + o + s + "</a>"), i.push('<span>&gt;</span><a href="javascript:;">综合知识点</a>')), i = i.join(""), e.$(".crumbs").html(i)
        })
    },
    renderNoTree: function () {
        var e = JST["partial/undefind"];
        this.$(".J_main").html(e)
    },
    cacheVersionGrade: function (e, t) {
    },
    onlineCountData: _.debounce(function () {
        var e = this;
        if (0 == this.$(".JV_results .smart-sel-item").length) return _.each(e.list, function (e) {
            e.model.set({total: 0})
        }), !1;
        var t = this.$(".smart-form").serializeJSON();
        myUtils.http("post", "/smarter/count", t).then(function (t) {
            if (0 != t.code) return !1;
            var i = _.reduce(t.data, function (e, t) {
                return e[t.question_channel_type] = t, e
            }, {});
            _.each(e.list, function (e) {
                e.model.set({total: i[e.model.get("question_channel_type")].num})
            })
        })
    }, 100),
    events: {
        "click .smart-del": function (e) {
            var t = $(e.currentTarget).parent(".smart-sel-item").data("id");
            this._tree && this._tree.trigger("TreeView_Node_Unchecked", t)
        }, "click .J_clear_all": function () {
            this.$(".smart-del").trigger("click")
        }, "click .smart-set .radio": function (e) {
            var t = $(e.currentTarget), i = t.siblings(".radio");
            return i.removeClass("checked"), i.find("input").prop("checked", !1), t.addClass("checked"), t.find("input").prop("checked", !0), this.onlineCountData(), !1
        }, "submit .smart-form": function (e) {
            var t = this;
            if (!Application.models.user.get("uid")) return Application.popupLogin(), !1;
            var i = Application.getBasketView(), n = $(e.currentTarget), o = [];
            0 == t.$(".smart-sel-item").length && (o[o.length] = "knowledges" == this.__option.tree_type ? '<p style="margin-top:20px; text-align:center">请选择知识点！</p>' : '<p style="margin-top:20px; text-align:center">请选择章节！</p>');
            var s = !0, a = 0;
            if (n.find(".setting-fun input").each(function () {
                Number(this.value) || (s = !1), a += Number(this.value) || 0
            }), !i.model.limitWarn(a)) return !1;
            if (s || (o[o.length] = '<p style="margin-top:20px; text-align:center">题型题量设置不完整！</p>'), o[0]) return myUtils.dialog.alert(o[0]), !1;
            var r = function () {
                form_dd = n.serializeJSON(), myUtils.http("post", "/smarter/submit", form_dd).then(function (e) {
                    0 == e.code && Application.router.navigate("paper/edit/?from=1", {trigger: !0})
                })
            };
            if (i.model.quesCollection.size()) myUtils.dialog.alert("智能组卷将清空您的试题篮,是否继续?", r); else r();
            return !1
        }
    }
}), Application.SmartChannelTypeModel = Backbone.Model.extend({
    defaults: {
        question_channel_type: null,
        question_channel_type_name: null,
        total: 0,
        num: 0,
        selected: !1
    }
}), Application.SmartChannelTypeCollection = Backbone.Collection.extend({model: Application.SmartChannelTypeModel}), Application.SmartChannelTypeButtonView = Backbone.View.extend({
    tagName: "a",
    initialize: function () {
        this.$el.attr({
            href: "javascript:;",
            title: this.model.get("question_channel_type_name")
        }), this.listenTo(this.model, "change:selected", function () {
            this.render()
        }), this.render()
    },
    render: function () {
        return this.$el.html(this.model.get("question_channel_type_name")), this.$el.toggleClass("selected", this.model.get("selected")), this
    },
    events: {
        click: function () {
            if (this.$el.hasClass("selected")) return !1;
            this.model.set({selected: !0})
        }
    }
}), Application.SmartChannelTypeSettingView = Backbone.View.extend({
    className: "setting-item",
    template: JST["smartpage/setting-input"],
    initialize: function () {
        this.listenTo(this.model, "change", function () {
            this.render()
        }), this.render()
    },
    render: function () {
        return this.$el.html(this.template({data: this.model.toJSON()})), this.$el[this.model.get("selected") ? "show" : "hide"](), this
    },
    events: {
        "click .del": function () {
            this.model.set("selected", !1)
        }, "change input": function (e) {
            var t = e.currentTarget, i = t.value.toString().replace(/\D/g, "");
            t.value = i, this.model.set({num: i || 0})
        }
    }
}), Application.SmartSpecEditView = function () {
    var e = 100, t = function (e) {
        e.on("keyup blur", "input.x-num", function () {
            var e = Number(this.value.replace(/\D/g, "")) || "";
            this.value = e.toString().slice(0, 2)
        })
    }, i = function () {
        this.initialize.apply(this, arguments)
    };
    i.active = null, $.extend(i.prototype, {
        initialize: function (e, t) {
            e.hide();
            var n = e.html().replace(/<[^>]+>/g, ""), o = $("<input>").addClass("edit-grid").val(n);
            i.active = o, e.after(o), o.focus(), o.on("keyup input", function () {
                var e = $.trim(this.value).length > 0;
                o[e ? "removeClass" : "addClass"]("edit-grid-error")
            }), o.on("blur change", function () {
                var i = $.trim(this.value).replace(/<[^>]+>/g, "");
                i.length > 0 && (t(i), n = i), o.remove(), e.html(n).show()
            })
        }
    });
    var n = Backbone.Model.extend({
        defaults: {head_title: null, _n: 1e4, xd: null, chid: null},
        initialize: function () {
            this.collection = new r
        }
    }), o = Backbone.Collection.extend({model: n}), s = Backbone.View.extend({
        template: JST["specpage/item-head"], initialize: function (e) {
            this.__option = $.extend({parentView: null, rootView: null}, e), this.subscribeEvents(), this.render()
        }, subscribeEvents: function () {
            var e = this;
            this.on("DEL_QUES", function (e) {
                this.model.collection.remove(e.model), this.__option.rootView.trigger("SORT_QUES"), myUtils.destructView(e)
            }), this.listenTo(this.model, "change:_n", function () {
                this.$(".tixy-sort").html(myUtils.chinesesn(this.model.get("_n")))
            }), this.listenTo(this.model, "change:head_title", function () {
                e.__option.rootView.trigger("GEN_SIDE_REPORT")
            })
        }, render: function () {
            return this.$el.html(this.template({data: this.model.toJSON()})), this
        }, genQuesViews: function (e) {
            for (var t = this, i = [], n = Number(e.num) || 1, o = {
                xd: this.model.get("xd"),
                chid: this.model.get("chid"),
                question_channel_type: e.question_channel_type,
                difficult_index: e.difficult_index,
                knowledge: null
            }, s = 0; s < n; s++) {
                var r = $.extend(!0, {}, o), c = new a(r);
                t.model.collection.add(c);
                var d = new l({model: c, parentView: t, rootView: t.__option.rootView});
                i.push(d.$el)
            }
            this.__option.rootView.trigger("SORT_QUES"), t.$el.find("tbody").append(i)
        }, events: {
            "click .J_DelQ": function () {
                var e = this;
                myUtils.dialog.alert("您是否要删除该大题？", function () {
                    e.trigger("DEL_TYPE"), e.__option.rootView.trigger("DEL_TYPE", e)
                })
            }, "click .J_AddQ": function () {
                var e = this, i = this.__option.rootView.params;
                if (!i) return !1;
                var n = $(JST["specpage/add-new-ques"]({params: i}));
                t(n), myUtils.dialog.alert({title: "新加新试题", content: n}, function () {
                    var t = {};
                    return n.find("select, input").each(function () {
                        t[this.name] = this.value
                    }), !(Number(n.find(".x-num").val()) < 1) && (e.genQuesViews(t), !0)
                })
            }, "click .J_Edit": function (e) {
                e.stopPropagation();
                var t = this, n = $(e.currentTarget);
                new i(n, function (e) {
                    t.model.set("head_title", e)
                })
            }
        }
    }), a = Backbone.Model.extend({
        defaults: {
            _n: 1e4,
            xd: null,
            chid: null,
            question_channel_type: null,
            difficult_index: null,
            knowledge: null
        }
    }), r = Backbone.Collection.extend({model: a}), l = Backbone.View.extend({
        tagName: "tr", initialize: function (e) {
            this.__option = $.extend({parentView: null, rootView: null}, e), this.subscribeEvents(), this.render()
        }, subscribeEvents: function () {
            var e = this;
            this.listenTo(this.model, "change:knowledge", function () {
                this.renderKnowItems()
            }), this.listenTo(this.model, "change", function () {
                this.__option.rootView.trigger("GEN_SIDE_REPORT")
            }), this.listenTo(this.model, "change:_n", function () {
                this.$(".cell-1 span").html(this.model.get("_n") + 1)
            }), this.listenTo(this.__option.rootView, "UPDATE_QUES_ATTR", function (e, t) {
                this.model.cid == t && this.model.set(e)
            }), this.listenTo(this.__option.rootView, "CHECK_QUES_KNOW_EMPTY", function (t) {
                var i = e.model.get("knowledge"), n = !0;
                i && 0 != _.size(i) || (e.renderKnowItems({errcode: "knowledge"}), t.push(e), n = !1), e.markWarning(!n), e.flashWarning()
            }), this.listenTo(this.__option.parentView, "DEL_TYPE", function () {
                myUtils.destructView(this)
            }), this.listenTo(this.model, "RENDER_KN_ITEMS", function (t) {
                e.renderKnowItems(t), e.markWarning()
            })
        }, render: function () {
            return Application.getFilterParamsPromise(this.model.get("xd"), this.model.get("chid")).then(_.bind(function (e) {
                e.difficult_indexs[0] = "不限";
                var t = this.model.toJSON();
                t.cid = this.model.cid, this.$el.html(JST["specpage/item-ques"]({
                    data: t,
                    params: e
                })), this.trigger("render", this)
            }, this)), this
        }, renderKnowItems: function (e) {
            var t = void 0 === e ? 0 : e.errcode, i = {data: this.model.toJSON(), errcode: t};
            this.$(".J_kn_items").html(JST["specpage/tbl-kn-item"](i))
        }, markWarning: function (e) {
            var e = void 0 === e || !!e;
            this.$el.toggleClass("warn-tr", e)
        }, flashWarning: function () {
            var e = $('<div class="flash-warn-bg"></div>'), t = this.$el.offset(), i = this.$el.width(),
                n = this.$el.height();
            e.css({
                width: i + 2,
                height: n + 2,
                position: "absolute"
            }), $(".J_spec_table").before(e), e.offset({left: t.left, top: t.top});
            var o = $(document.body).scrollTop(), s = $(window).height();
            (t.top < o || t.top > o + s) && $("html,body").animate({scrollTop: t.top}, "fast"), setTimeout(function () {
                e.animate({width: 0}, "slow", function () {
                    e.remove()
                })
            }, 3e3)
        }, events: {
            "click .J_del_q": function () {
                this.__option.parentView.trigger("DEL_QUES", this), this.__option.rootView.trigger("GEN_SIDE_REPORT")
            }, "click .J_del_kn": function (e) {
                var t = Number($(e.currentTarget).data("kid")), i = $.extend(!0, {}, this.model.get("knowledge"));
                delete i[t], this.model.set("knowledge", i)
            }, "click .J_add_kn": function () {
                this.__option.rootView.trigger("OPEN_KNOW_TREE", this)
            }
        }
    }), c = Backbone.View.extend({
        template: JST["specpage/dia-know-tree"], initialize: function (e) {
            this.__option = $.extend({
                xd: null,
                chid: null,
                ques_view: null,
                tree_inst: null
            }, e), this.model = new Backbone.Model({knowledge: this.__option.ques_view.model.get("knowledge")}), this.listenTo(this.model, "change", _.bind(this.renderResult, this)), this.__option.tree_inst || this.genTree(), this.render(), this.showModal()
        }, showModal: function () {
            var e = this, t = function () {
                i.close().remove(), e.$el.remove()
            }, i = myUtils.dialog.alert({title: "选择知识点", content: e.$el, onclose: t}, function () {
                var i = $.extend(!0, {}, e.model.get("knowledge"));
                return e.__option.ques_view.model.set("knowledge", i), t(), !0
            }, function () {
                t()
            })
        }, render: function () {
            this.$el.html(this.template({data: null})), this.$el.find(".kn-tree").append(this.__option.tree_inst.$el), this.__option.tree_inst.$el.show(), this.renderResult()
        }, renderResult: function () {
            this.$el.find(".kn-selected-box").html(this.template({data: this.model.toJSON()}))
        }, genTree: function () {
            var e = this;
            this.__option.tree_inst = new Application.TreeXimuView({
                xd: this.__option.xd,
                chid: this.__option.chid,
                pre_checked: this.model.get("knowledge") || {}
            }).render(), this.listenTo(this.__option.tree_inst, "NODE_CHECK_SWITCH", function (t, i) {
                if (_.size(this.model.get("knowledge")) >= 5 && !t.__option.checked) return e.$el.find(".kn-selected-box .hd span").html("<em>（* 知识点最多选5个）</em>"), i.code = -1, !1;
                var n = t.fullData(), o = $.extend(!0, {}, this.model.get("knowledge"));
                !t.__option.checked ? o[n.kid] = n : delete o[n.kid], this.model.set("knowledge", o)
            })
        }, events: {
            "click .del-it": function (e) {
                var t = $(e.currentTarget).data("id"), i = $.extend(!0, {}, this.model.get("knowledge"));
                this.__option.tree_inst.trigger("CANCEL_CHECK", t), delete i[t], this.model.set("knowledge", i)
            }
        }
    }), d = Backbone.Model.extend({
        defaults: {
            paperid: null,
            type: "system",
            ximutype: null,
            title: null,
            xd: null,
            chid: null,
            makenum: 0,
            total: 0,
            from: 1
        }
    });
    return Application.MnView.extend({
        template: JST["03smart-spec-edit"], initialize: function (e) {
            document.title = "双向细目表组卷-21组卷";
            Application.models.user;
            this._timestamp = null, this.__option = $.extend({
                id: null,
                query: null
            }, e), this.tree_inst = null, this.query = $.extend({ximutype: null}, this.__option.query), this.params = null, this.output_token = null, this.subscribeEvents()
        }, subscribeEvents: function () {
            this.listenTo(this.model, "change:title", function (e, t) {
                this.$(".J_spec_tit").text(t)
            }), this.on("OPEN_KNOW_TREE", function (e) {
                this.showTreeModal(e)
            }), this.on("GEN_SIDE_REPORT", function () {
                this.genAnalyzeChart()
            }), this.on("DEL_TYPE", function (e) {
                this.headTitleCollection.remove(e.model), this.headTitleCollection.each(function (e, t) {
                    e.set("_n", t)
                }), myUtils.destructView(e), this.trigger("GEN_SIDE_REPORT"), this.trigger("SORT_QUES")
            }), this.on("SORT_QUES", function () {
                var e = 0;
                this.headTitleCollection.each(function (t, i) {
                    t.set({_n: i}), t.collection.each(function (t) {
                        t.set({_n: e++})
                    })
                })
            }), this.listenTo(Backbone, "doc:click", function (e) {
                var t = e.target;
                $(t).parents(".drop-list").length > 0 || $(t).hasClass("drop-list") || $(".active-drop-list").removeClass("active-drop-list")
            }), this.listenTo(Backbone, "doc:keyup", function (e) {
                13 == e.keyCode && i.active && i.active.blur()
            })
        }, showTreeModal: function (e) {
            new c({ques_view: e, xd: this.model.get("xd"), chid: this.model.get("chid")})
        }, instanceSpecModelPromise: function () {
            var e = this, t = Application.models.user;
            return e.headTitleCollection = new o, this.__option.id ? myUtils.http("get", "/smarter/ximu-detail", {id: this.__option.id}).then(function (t) {
                if (0 != t.code) return $.Deferred().reject(t);
                e.model = new d(t.data._meta), e.model.set("paperid", e.__option.id);
                var i = 0;
                return _.each(t.data.content, function (o, s) {
                    var r = new n({head_title: o.head_title, _n: s, xd: t.data._meta.xd, chid: t.data._meta.chid});
                    e.headTitleCollection.add(r), _.each(o.questions, function (e) {
                        var n = new a($.extend({_n: i++, xd: t.data._meta.xd, chid: t.data._meta.chid}, e));
                        r.collection.add(n)
                    })
                }), this
            }) : Application.getSubjectsPromise().then(function (i) {
                var n = new Date, o = Application.xd_hash, s = t.get("xd"), a = t.get("chid"),
                    r = n.getFullYear() + "年" + (n.getMonth() + 1) + "月" + n.getDate() + "日" + o[s] + i[a] + "双向细目表";
                return e.model = new d({
                    type: "new",
                    ximutype: e.query.ximutype,
                    title: r,
                    xd: s,
                    chid: a
                }), e.model.set("paperid", e.__option.id), $.Deferred().resolve()
            })
        }, render: function () {
            var e = this;
            this.params = null;
            {
                if (Application.models.user.get("uid")) return this.instanceSpecModelPromise().then(_.bind(function () {
                    return Application.getFilterParamsPromise(e.model.get("xd"), e.model.get("chid")).then(function (t) {
                        return e.params = $.extend(!0, {}, t), e.params.difficult_indexs[0] = "不限", e.$el.html(e.template({data: e.model.toJSON()})), e.mount(".MiniHeaderView", Application.getMiniHeaderView()), e.headTitleCollection.each(function (t) {
                            var i = new s({model: t, rootView: e});
                            e.$(".J_spec_table").append(i.$el), t.collection.each(function (t) {
                                var n = new l({model: t, parentView: i, rootView: e});
                                i.$("tbody").append(n.$el)
                            })
                        }), e.renderXimuType(), e.genAnalyzeChart(), e.renderBreadCrumb(), e
                    })
                }, this)), this.trigger("render", this), this;
                Application.router.navigate("/", {trigger: !0})
            }
        }, renderXimuType: function () {
            var e = this;
            myUtils.http("get", "/smarter/min-types", {xd: e.model.get("xd")}).then(function (t) {
                t.cur_type = e.model.get("ximutype"), e.$(".J_ximu_type").html(JST["specpage/ximu-type"](t))
            })
        }, renderBreadCrumb: function () {
            var e = this, t = ['<i class="iconw-fixed"></i><span>当前位置：</span><a href="javascript:;">智能组卷</a>'];
            Application.getSubjectsPromise().then(function (i) {
                var n = Application.xd_hash[e.model.get("xd")], o = i[e.model.get("chid")];
                t.push('<span>&gt;</span><a href="javascript:;">双向细目表</a>'), t.push('<span>&gt;</span><a href="javascript:;">' + n + o + "</a>"), t = t.join(""), e.$(".crumbs").html(t)
            })
        }, genAnalyzeChart: _.debounce(function () {
            var e = this, t = myUtils.genAnalyzeChart(e.headTitleCollection, e.params.difficult_indexs);
            e.$el[0 == t.len ? "addClass" : "removeClass"]("empty-container"), e.$el.find(".diy-ffxi-table").html(JST["specpage/report-analyze"]({data: t.data})), _.size(t.data.head_titles) && myUtils.Chart.Bar("J_ChartQNum", t.data_tild), _.size(t.data.difficult_indexs) && myUtils.Chart.Pie("J_ChartDifficulty", t.data_njdu), _.size(t.data.knowledge) && myUtils.Chart.Bar("J_ChartKnowlist", t.data_viui)
        }, 100), createHeadTitle: function () {
            var e = this, i = $(JST["specpage/add-new-head"]({params: this.params}));
            t(i);
            var o = function () {
                var e = !0;
                return i.find(".x-num").val() < 1 && (e = !1), e
            };
            myUtils.dialog.alert({title: "添加新大题", content: i}, function () {
                if (!o()) return !1;
                var t = {}, a = {};
                i.find("select, input").each(function () {
                    if ("question_channel_type" == this.name) {
                        for (var i = $.trim(e.params.question_channel_types[$.trim(this.value)]), n = e.headTitleCollection.map(function (e) {
                            return $.trim(e.get("head_title"))
                        }); ;) {
                            if (not_found = _.indexOf(n, i) > 0, !not_found) break;
                            i += "-副本"
                        }
                        t.head_title = i
                    }
                    a[this.name] = $.trim(this.value)
                }), t.xd = e.model.get("xd"), t.chid = e.model.get("chid");
                var r = new n(t);
                e.headTitleCollection.add(r);
                var l = new s({model: r, rootView: e});
                return e.$(".diy-edit-table").append(l.$el), e.headTitleCollection.each(function (e, t) {
                    e.set({_n: t})
                }), l.genQuesViews(a), !0
            })
        }, save_template: function () {
            var e = this, t = {1: "小升初", 2: "中考", 3: "高考"}, i = this.model.get("xd") || 2,
                n = $(JST["specpage/save-spec"]({
                    name: this.model.get("title"),
                    ximutype: this.model.get("ximutype"),
                    csrf: Application.dataState.csrf,
                    nj: t[i]
                }));
            n.on("click", ".custom-radio", function (e) {
                var t = $(e.currentTarget);
                n.find(".custom-radio").removeClass("checked"), n.find("input[name=paper_type]").prop("checked", !1), t.addClass("checked"), t.find("input[name=paper_type]").prop("checked", !0)
            });
            var o = function () {
                var e = n.find(".ximu-name"), t = $.trim(e.val()).length > 0;
                return e.toggleClass("error", t), t
            };
            myUtils.dialog.alert({title: "保存双向细目表", content: n}, function () {
                if (!o()) return !1;
                var t = e.filterSubmitData();
                t._meta.title = n.find("input.ximu-name").val(), t._meta.ximutype = n.find("input[name=paper_type]:checked").val(), myUtils.http("post", "/smarter/ximu-save", t).then(function (i) {
                    0 != i.code ? myUtils.dialog.alert(i.msg) : (e.model.set({
                        title: t._meta.title,
                        ximutype: t._meta.ximutype,
                        id: i.data.id,
                        type: "custom"
                    }), e.renderXimuType(), myUtils.dialog.toast("细目表保存成功"))
                })
            })
        }, filterSubmitData: function () {
            var e = {
                _saveType: 1,
                _ximuId: this.model.get("paperid"),
                ximutype: this.model.get("ximutype") || 1,
                title: this.model.get("title"),
                status: 1,
                xd: this.model.get("xd"),
                chid: this.model.get("chid")
            }, t = [];
            return this.headTitleCollection.each(function (e) {
                var i = {
                    head_title: e.get("head_title"), questions: e.collection.map(function (e) {
                        return e.pick("difficult_index", "question_channel_type", "knowledge")
                    })
                };
                t.push(i)
            }), $.extend({_meta: e, content: t}, Application.dataState.csrf)
        }, count: function () {
            var e = 0;
            return this.headTitleCollection.each(function (t) {
                e += t.collection.size()
            }), e
        }, output: _.debounce(function () {
            var e = this;
            if (!this.validate()) return !1;
            Application.models.user.toJSON();
            var t = this.count();
            if (!Application.getBasketView().model.limitWarn(t)) return !1;
            var i = _.uniqueId("output-token");
            this.output_token = i;
            var n = this.filterSubmitData(), o = myUtils.dialog.alert("系统正在匹配细目表试题，请耐心等待...");
            myUtils.http("post", "/smarter/ximu-to-basket", n).then(function (t) {
                return i == e.output_token && (0 == t.code ? (Application.router.navigate("paper/edit/?from=1", {trigger: !0}), !1) : (e.ajaxRespEmptyHandler(t), void myUtils.dialog.alert(t.msg)))
            }).always(function () {
                o.close()
            })
        }, 400), validate: function () {
            var e = [];
            return this.trigger("CHECK_QUES_KNOW_EMPTY", e), e.length && _.each(e, function (t) {
                e.flashWarning()
            }), 0 == e.length
        }, ajaxRespEmptyHandler: function (e) {
            var t = null, i = !0;
            return this.headTitleCollection.each(function (n, o) {
                n.collection.each(function (n, s) {
                    var a = e.data[o + 1] || [];
                    _.contains(a, s + 1) ? (n.trigger("RENDER_KN_ITEMS", {errcode: "none"}), i = !1, t || (t = n)) : n.trigger("RENDER_KN_ITEMS", {errcode: 0})
                })
            }), t && t.trigger("FLASH_WARN"), i
        }, events: {
            "click .drop-list": function (t) {
                var i = t.currentTarget, n = $(i);
                n.addClass("active-drop-list"), n.css("z-index", ++e), this.$(".active-drop-list").each(function () {
                    this !== i && $(this).removeClass("active-drop-list")
                })
            },
            "mouseenter .J_ximu_type": function (e) {
                $(e.currentTarget).find(".item-attr-mc").show()
            },
            "mouseleave .J_ximu_type": function (e) {
                $(e.currentTarget).find(".item-attr-mc").hide()
            },
            "click .J_ximu_type a": function (e) {
                var t = $(e.currentTarget), i = +t.data("ximutype");
                this.model.set("ximutype", i), this.$(".J_ximu_type .item-attr-mc").hide(), this.$(".J_ximu_type .item-attr-tit").html("类型：" + t.html() + '<i class="iconw-down2"></i>')
            },
            "click .drop-list dd > div": function (e) {
                e.stopPropagation();
                var t = $(e.currentTarget), i = {}, n = t.data("val").toString().split(",");
                i[n[1]] = +n[2] || 0, this.trigger("UPDATE_QUES_ATTR", i, n[0]), t.parents("td").find("dt > span").html(t.html()), this.$(".active-drop-list").each(function () {
                    $(this).removeClass("active-drop-list")
                })
            },
            "click .J_output": "output",
            "click .J_savetemp": "save_template",
            "click .J_add_head_tit": "createHeadTitle",
            "click .J_spec_tit": function (e) {
                var t = this, n = $(e.currentTarget);
                new i(n, function (e) {
                    t.model.set("title", e)
                })
            }
        }
    })
}(), Application.SmartSpecListView = Application.MnView.extend({
    template: JST["03smart-spec-list"],
    initialize: function (e) {
        document.title = "手动搜题-21组卷";
        var t = Application.models.user;
        this._timestamp = null, this.__option = $.extend({query: null}, e), this.query = $.extend({
            addtype: 2,
            chid: t.get("chid"),
            xd: t.get("xd"),
            order: "edit_time",
            ximutype: null,
            page: 1
        }, this.__option.query), this.listenTo(Backbone, "win:scroll", _.bind(this.IsScroll, this)), this.cache = null
    },
    render: function () {
        var e = this;
        return this.$el.html(this.template(this.query)), this.pageView = new Application.PageView, this.$(".JV_page").html(this.pageView.$el), this.renderList(), this.listenTo(this.pageView, "page", function (t) {
            e.renderList(t)
        }), this.renderSideMenu(), this.mount(".HeaderView", Application.getHeaderView({cur_nav: "smart"})), this.mount(".FootView", Application.getFootView()), this.renderBreadCrumb(), this.trigger("render", this), this
    },
    renderSideMenu: function () {
        var e = this;
        myUtils.http("get", "/smarter/min-types", {xd: this.query.xd}).then(function (t) {
            e.__RenderSideMenu("测试试卷类型", t.data || [])
        }), this.on("COM_SIDE_LIST", function (t) {
            if (t == e.query.ximutype) return !1;
            e.query.ximutype = t, e.renderList()
        })
    },
    renderList: function (e) {
        var t = this;
        this.query.page = Number(e) || 1;
        var i = this.loading();
        myUtils.http("get", "/smarter/minutia-list", this.query).then(function (e) {
            if (t.cache = e.data, !e.data || !e.data.list) return $.Deferred().reject();
            var i = _.map(e.data.list, function (e) {
                return $.extend({}, e, {format_date: myUtils.formatTimestamp(e.addtime)})
            });
            t.$(".JV_list").html(JST["smartpage/paper-items"]({
                list: i,
                user: Application.models.user,
                count: e.data.count,
                addtype: t.query.addtype,
                order: t.query.order
            })), t.pageView.render(e.data.paper), t.IsScroll()
        }).fail(function () {
            t.IsScroll()
        }).always(i)
    },
    renderBreadCrumb: function () {
        var e = this, t = ['<i class="iconw-fixed"></i><span>当前位置：</span><a href="javascript:;">智能组卷</a>'];
        Application.getSubjectsPromise().then(function (i) {
            var n = Application.xd_hash[e.query.xd], o = i[e.query.chid];
            t.push('<span>&gt;</span><a href="javascript:;">双向细目表</a>'), t.push('<span>&gt;</span><a href="javascript:;">' + n + o + "</a>"), t = t.join(""), e.$(".crumbs").html(t)
        })
    },
    loading: function () {
        var e = this;
        return this.$(".loading-wrap").show(), function () {
            e.$(".loading-wrap").hide()
        }
    },
    events: {
        "click [data-param]": function (e) {
            var t = $(e.target), i = t.data("param").toString().split("=");
            if ("addtype" == i[0] && 1 == i[1] && !Application.models.user.get("uid")) return Application.popupLogin(), !1;
            var n = "order" == i[0] ? "sort-current" : "active";
            if (t.hasClass(n)) return !1;
            this.$("[data-param^=" + i[0] + "]").removeClass(n), t.addClass(n), this.query[i[0]] = i[1], this.renderList()
        }, "click .J_build": function () {
            var e = this, t = Application.models.user;
            if (0 == t.get("vip").length && !t.get("school_permit_id")) return myUtils.dialog.alert(JST["dialogs/Permission"]()), !1;
            myUtils.http("get", "/smarter/min-types", {xd: this.query.xd}).then(function (t) {
                var i = $(JST["dialogs/select-ximutype"]({res: t.data, ximutype: e.query.ximutype || 1}));
                i.on("click", ".smart-set .radio", function (e) {
                    var t = $(e.currentTarget), i = t.siblings(".radio");
                    return i.removeClass("checked"), i.find("input").prop("checked", !1), t.addClass("checked"), t.find("input").prop("checked", !0), !1
                }), myUtils.dialog.alert({title: "创建细目表", width: 500, content: i}, function () {
                    var e = i.find("input[name=ximu_type]:checked").val();
                    Application.router.navigate("smart/spec-edit/?ximutype=" + e, {trigger: !0})
                })
            })
        }, "click .J_islogin": function (e) {
            var t = Application.models.user;
            return t.get("uid") ? 0 != t.get("vip").length || t.get("school_permit_id") ? void 0 : (myUtils.dialog.alert(JST["dialogs/Permission"]()), !1) : (Application.popupLogin(), !1)
        }, "click .J_del_ximu": function (e) {
            var t = this, i = $(e.currentTarget), n = i.data("xid"), o = _.find(t.cache.list, function (e) {
                return e.id == n
            });
            if (!o) return !1;
            var s = $.extend({id: n}, Application.dataState.csrf);
            myUtils.dialog.alert("是否删除“" + o.title + "”？", function () {
                myUtils.http("get", " /smarter/del-ximu", s).then(function () {
                    i.parents("li").remove(), t.renderList()
                })
            })
        }
    }
}), Application.SubjectDetailView = function () {
    var e = Backbone.Model.extend({
        defaults: {
            name: null,
            pid: null,
            type: "chapter",
            paper_data: null,
            test: null,
            checked: !1
        }, toJSON: function () {
            var e = _.clone(this.attributes);
            return e.test && (e.test.avg = Math.round(1e5 * e.test.total / (1e3 * e.test.num)) / 100), e
        }
    }), t = Backbone.Collection.extend({model: e}), i = Backbone.View.extend({
        template: JST["subjectpage/paper-item"], initialize: function (e) {
            this.__option = $.extend({
                parentView: null,
                rootView: null
            }, e), this.__option.rootView.list.push(this), this.render(), this.listenTo(this.__option.rootView, "select-all", function (e) {
                this.model.set("checked", e), this.$(".custom-checkbox").first().toggleClass("checked", e)
            })
        }, render: function () {
            var e = this, t = $.extend({data: this.model.toJSON(), current_user: Application.models.user.toJSON()}),
                n = $($.trim(this.template(t)));
            return this.setElement(n), this.collection && this.collection.each(function (t) {
                var n = new i({model: t, parentView: e, rootView: e.__option.rootView});
                e.$el.append(n.$el)
            }), this
        }, checked: function (e) {
            this.model.set("checked", e), this.$(".custom-checkbox").first().toggleClass("checked", e)
        }, events: {
            "click .custom-checkbox": function (e) {
                return this.checked(!this.model.get("checked")), this.collection && this.__option.rootView.trigger("Checked_Next", this), this.__option.rootView.trigger("Checked_Prev", this), !1
            }
        }
    });
    return Application.MnView.extend({
        template: JST["05subject-detail"], initialize: function (e) {
            var t = this;
            document.title = "专题特供-21组卷", this._timestamp = null, this.list = [this];
            var i = Application.models.user;
            this.__option = $.extend({
                parentView: null,
                rootView: null,
                id: null,
                xd: null,
                chid: null,
                query: null
            }, e), this.query = $.extend({xd: i.get("xd")}, this.__option.query), this.model = new Backbone.Model({checked: !1}), this.on("Checked_Next", function (e) {
                var i = _.filter(this.list, function (t) {
                    return t.__option.parentView === e
                });
                _.each(i, function (i) {
                    i.checked(e.model.get("checked")), i.collection && t.trigger("Checked_Next", i)
                })
            }), this.on("Checked_Prev", function (e) {
                if (!e.__option.parentView) return !1;
                var t = _.filter(this.list, function (t) {
                    return t.__option.parentView === e.__option.parentView
                }), i = _.filter(t, function (e) {
                    return !!e.model.get("checked")
                }), n = _.size(t) == _.size(i);
                e.__option.parentView.checked(n), e.__option.parentView && this.trigger("Checked_Prev", e.__option.parentView)
            })
        }, render: function () {
            var e = this;
            return myUtils.http("get", "/subject/detail", {id: this.__option.id}).then(function (e) {
                return myUtils.http("get", "/subject/type-list", {xd: e.data.xd}).then(function (t) {
                    return e.data.type_name = t.data[e.data.type] || "--", e
                })
            }).then(function (t) {
                0 == t.code && (e.__option.xd = t.data.xd, e.__option.chid = t.data.chid, e.renderBody(t))
            }), this.trigger("render", this), this
        }, renderBody: function (n) {
            var o = this;
            this.$el.html(this.template(n)), _.each(n.data.chapter, function (s) {
                var a = new e(s), r = _.map(s.children, function (e) {
                    return $.extend({}, e, {
                        type: "paper",
                        paper_data: n.data.paper_data[e.pid] || null,
                        test: n.data.paper_testdata[e.pid] || null,
                        checked: a.get("checked"),
                        chapter_id: a.get("pid")
                    })
                }), l = new t(r), c = new i({model: a, collection: l, parentView: o, rootView: o});
                o.$(".subject-con").append(c.$el)
            }), this.mount(".MiniHeaderView", Application.getMiniHeaderView()), this.mount(".FootView", Application.getFootView())
        }, checked: function (e) {
            this.model.set("checked", e), this.$(".custom-checkbox").first().toggleClass("checked", e)
        }, hasPermission: function () {
            var e = this, t = Application.models.user;
            if (!t.get("uid")) return Application.popupLogin(), !1;
            var i = !1, n = JST["dialogs/Permission"](), o = function () {
                return _.find(t.get("vip"), function (t) {
                    return t.xd == e.__option.xd && t.chid == e.__option.chid
                })
            };
            if (0 != t.get("school_permit_id")) {
                if (function () {
                    return _.find(t.get("access_channel"), function (t, i) {
                        return _.find(t, function (t) {
                            return i == e.__option.chid && t == e.__option.xd
                        })
                    })
                }()) return !0;
                if (i = n + "。", o()) return !0;
                i = n + "."
            } else {
                if (o()) return !0;
                i = n
            }
            return myUtils.dialog.alert(i), !1
        }, events: {
            "click .J_select_all": function (e) {
                this.checked(!this.model.get("checked")), this.trigger("Checked_Next", this)
            }, "click .J_down_subject": function () {
                if (!this.hasPermission()) return !1;
                var e = [];
                if (_.each(this.list, function (t) {
                    t.model.get("checked") && t.model.get("pid") && e.push(t.model.get("pid"))
                }), 0 == e.length) return myUtils.dialog.alert('<p style="text-align:center; margin-top:10px">请选择需要下载的试卷</p>'), !1;
                Application.popupSubjectDownload(this.__option.id, e)
            }, "click .J_collect": function (e) {
                var t = $(e.currentTarget), i = this.__option.id, n = $.extend({id: i}, Application.dataState.csrf);
                myUtils.http("get", "/subject/collect", n).then(function (e) {
                    if (e.code) return myUtils.dialog.toast("收藏失败：" + e.msg), !1;
                    2 == e.data ? (t.html('<i class="iconw-collect-h"></i>收藏'), myUtils.dialog.toast("已取消收藏")) : (t.html('<i class="iconw-ucollect-h"></i>取消收藏'), myUtils.dialog.toast("收藏成功"))
                })
            }, "click .J_islogin": function (e) {
                if (!this.hasPermission()) return !1
            }
        }
    })
}(), Application.SubjectListView = Application.MnView.extend({
    template: JST["05subject"], initialize: function (e) {
        document.title = "专题特供-21组卷", this._timestamp = null;
        var t = Application.models.user;
        this.__option = $.extend({
            query: null,
            types: null
        }, e), this.query = $.extend({
            xd: t.get("xd") || Application.DEF_XD,
            chid: t.get("chid") || Application.DEF_CHID,
            type: null,
            page: 1
        }, this.__option.query), this.listenTo(Backbone, "win:scroll", _.bind(this.IsScroll, this))
    }, render: function () {
        return this.$el.html(this.template()), this.initPageView(), this.mount(".HeaderView", Application.getHeaderView({cur_nav: "subject"})), this.mount(".FootView", Application.getFootView()), Application.show_basket = !1, this.mount(".BasketView", Application.getBasketView()), this.renderBody(), this.renderBreadCrumb(), this.trigger("render", this), this
    }, renderBody: function () {
        var e = this, t = new Application.FilterSelectView({title: "筛选"});
        this.listenTo(t, "FilterView_Update", function (e, t) {
            this.query[e] = t, this.renderList()
        }), this.$(".JV_filter_box").append(t.$el), myUtils.http("get", "/subject/type-list", {xd: this.query.xd}).then(function (i) {
            var n = [{name: "type", value: "", text: "全部"}];
            return _.each(i.data, function (e, t) {
                t && n.push({text: e, value: t, name: "type"})
            }), t.render(n), e.__option.types = i.data, i.data
        }).then(function () {
            e.renderList()
        })
    }, renderList: _.debounce(function (e) {
        var t = this, i = this.loading();
        setTimeout(function () {
            $("html,body").animate({scrollTop: 0}, 300)
        }, 0), this.query.page = Number(e) ? Number(e) : 1;
        var n = (new Date).getTime();
        this._timestamp = n;
        var o = $.extend({pageSize: 12}, this.query);
        myUtils.http("get", "/subject/list", o).then(function (e) {
            if (n !== t._timestamp) return !1;
            var i = _.map(e.data.list, function (e) {
                return $.extend({}, e, {
                    type_name: t.__option.types[e.type] || "--",
                    format_date: myUtils.formatTimestamp(e.updatetime)
                })
            });
            return t.$(".JV_list").html(JST["subjectpage/subject-items"]({list: i})), t.pageView.render(e.data.pager), t.IsScroll(), e.data
        }).fail(function () {
            t.IsScroll()
        }).always(i)
    }, Application.debounceTime), renderBreadCrumb: function () {
        var e = this, t = ['<i class="iconw-fixed"></i><span>当前位置：</span><a href="javascript:;">专题特供</a>'];
        Application.getSubjectsPromise().then(function (i) {
            var n = Application.xd_hash[e.query.xd], o = i[e.query.chid];
            t.push('<span>&gt;</span><a href="javascript:;">' + n + o + "</a>"), t = t.join(""), e.$(".crumbs").html(t)
        })
    }, loading: function () {
        var e = this;
        return this.$(".JV_list .loading-wrap").show(), function () {
            e.$(".JV_list .loading-wrap").hide()
        }
    }, events: {}
}), Application.UQuestionListView = Application.MnView.extend({
    template: JST["ucenter/u-shiti"],
    initialize: function (e) {
        this.__option = $.extend({list_url: null}, e), this.query = $.extend({
            xd: Application.DEF_XD,
            chid: Application.DEF_CHID
        }, this.__option.query)
    },
    render: function () {
        return this.$el.html(this.template()), this.initPageView(), this.mount(".BasketView", Application.getBasketView({
            xd: this.query.xd,
            chid: this.query.chid
        })), this.renderList(), this.trigger("render", this), this
    },
    renderList: _.debounce(function (e) {
        var t = this, i = this.loading();
        this.query.page = Number(e) ? Number(e) : 1;
        var n = (new Date).getTime();
        this._timestamp = n, myUtils.http("get", this.__option.list_url, this.query).then(function (e) {
            if (0 == _.size(e.data.list)) return t.NotFound(), !1;
            if (n !== t._timestamp) return !1;
            var i = [], o = $("<ul>");
            _.each(e.data.list, function (e, n) {
                e._n = n;
                var s = new Application.QuestionModel(e), a = new Application.QuestionView({model: s, rootView: t});
                i.push(a), o.append(a.$el), s.addAnyAttrsPromise.then(function () {
                    a.render()
                })
            }), _.each(this.list, function (e) {
                e.off().stopListening().undelegateEvents().remove()
            }), t.list = i, t.$(".JV_list .items").html(o), t.pageView.render(e.data.pager)
        }).always(i)
    }, Application.debounceTime),
    NotFound: function () {
        this.$(".JV_list .items").html('<div class="empty-ffxi"><img src="/images/blank.png"><p>筛选无结果，换个条件试试吧</p></div>'), this.pageView.render("")
    },
    loading: function () {
        var e = this;
        return setTimeout(function () {
            $("html,body").animate({scrollTop: 0}, 300)
        }, 0), this.$(".JV_list .loading-wrap").show(), function () {
            e.$(".JV_list .loading-wrap").hide()
        }
    },
    events: {}
});