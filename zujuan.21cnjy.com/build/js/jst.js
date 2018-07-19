JST["02question-detail"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="MiniHeaderView"></div> <div class="crumbs g-cw"></div>  <div class="m-wrap g-cw cfx">  <div class="w fl">  <div class="g-mn2">  <ul id="J_question_detail" class="f-usn" onselectstart="return false" onselect="return false" oncontextmenu="return false" ondragstart="return false"></ul>  <div class="connect-ques f-usn" onselectstart="return false" onselect="return false" oncontextmenu="return false" ondragstart="return false">  <div class="connect-ques--hd"><span>举一反三</span><a class="J_ConnectReload" href="javascript:;"><i class="iconw-reload--normal"></i>换一批</a></div>  <div class="connect-ques--list">  <div class="loading-wrap">  <div class="loading-bg"></div>  <div class="loading"></div>  </div>  <div class="J_ConnectQues do-q-bd preview-bd"></div>  </div>  </div>  </div>  </div>  <div class="g-sd2">  <div class="analyize-extend">  <a href="/help.html/request" target="_blank" class="ex-link"><img src="/images/paper.png"></a>  </div>  \x3c!--相关试卷--\x3e  <div class="analyize-extend JV_question__papers"></div>  \x3c!--大专题推荐--\x3e  <div class="JV_question__subject"></div>  \x3c!--相关视频--\x3e  <div class="analyize-extend JV_question__video"></div>  </div> </div> ' + (null == (__t = JST["partial/inner-foot"]()) ? "" : __t) + ' <div class="BasketView"></div>';
    return __p
}, JST["02question-list"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="HeaderView"></div> <div class="crumbs g-cw"></div> <div class="m-wrap g-cw cfx J_main">  <div class="g-sd">  <div class="list-sd-tree JV_tree">  <div class="JV_tree_hd list-tree-mt"></div>  <div class="JV_tree_bd t-tree"></div>  </div>  </div>  <div class="w fl">  <div class="g-mn">  <div class="filter-box cfx JV_filter_box">  </div>  <div class="handle-line cfx">  <div class="sort-item fl">  <span class="sort-current J_sort_item" data-param="sort_field=time">时间<i class="iconw-sort-desc"></i></span>  <span class="J_sort_item" data-param="sort_field=save_num">使用次数<i class="iconw-sort-desc"></i></span>  <div class="custom-checkbox J_exclude_used"><i class="iconw-checkbox"></i>过滤已使用的试题</div>  </div>  <div class="act-item fr">  <a class="selall-btn J_add_all">选择本页全部试题</a>  <span>共计：<b class="J_count_questions">--</b></span>  </div>  </div>  <div class="manual-list pr JV_list f-usn cursor" onselectstart="return false" onselect="return false" oncontextmenu="return false" ondragstart="return false">  <div class="loading-wrap">  <div class="loading-bg"></div>  <div class="loading"></div>  </div>  <div class="items">   </div>  </div>  <div class="page-wrap JV_page"></div>   </div>  </div> </div> <div class="FootView"></div> <div class="BasketView"></div>';
    return __p
}, JST["03smart-conf-edit"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="HeaderView"></div> <div class="crumbs g-cw"></div> <div class="s-wrap g-cw cfx J_main">  <div class="g-sd">  <div class="list-sd-tree JV_tree">  <div class="JV_tree_hd list-tree-mt"></div>  <div class="JV_tree_bd t-tree"></div>  </div>   </div>  <div class="w fl">  <div class="g-mn">  <form class="smart-form">  <div class="smart-bd JV_results"></div>  <div class="smart-bd">  <div class="smart-mt cfx">  <strong>试卷设置：</strong>  </div>  <div class="smart-mc">  <div class="smart-set cfx">  <span class="set-tit">试卷难度：</span>  <label class="radio checked">  <i class="iconw-radio"></i>  <input type="radio" name="difficult_index" checked value="" style="display: none;">  <em>不限</em>  </label>  <label class="radio">  <i class="iconw-radio"></i>  <input type="radio" name="difficult_index" value="1" style="display: none;">  <em>容易</em>  </label>  <label class="radio">  <i class="iconw-radio"></i>  <input type="radio" name="difficult_index" value="3" style="display: none;">  <em>普通</em>  </label>  <label class="radio">  <i class="iconw-radio"></i>  <input type="radio" name="difficult_index" value="5" style="display: none;">  <em>困难</em>  </label>  </div>  ', "knowledges" === tree_type && (__p += '  <div class="smart-set cfx">  <span class="set-tit">出卷方式：</span>  <label class="radio checked">  <i class="iconw-radio"></i>  <input type="radio" name="joinType" value="unjoin" checked style="display: none;">  <em>关联出题</em>  </label>  <div class="what-wrap">  <b class="iconw-what2"></b>  <div class="what-tip">  <b class="iconw-tri-t"></b>  <div>匹配出来的试题包含的知识点（章节），最少有一个在已选的知识点（章节）中，这个方式适用于期末考试、学业考试、升学考试等试卷类型。出题的综合性较强。</div>  </div>  </div>  <label class="radio">  <i class="iconw-radio"></i>  <input type="radio" name="joinType" value="join" style="display: none;">  <em>精准出题</em>  </label>  <div class="what-wrap">  <b class="iconw-what2"></b>  <div class="what-tip">  <b class="iconw-tri-t"></b>  <div>匹配出来的试题包含的知识点（章节）。都在已选的知识点（章节）中，这个方式保证了组卷的精准性，避免超纲试题的出现，适用于同步类型的试卷。</div>  </div>  </div>  </div>    <div class="smart-set cfx J_nianji">  <span class="set-tit">适用年级：</span>  <label class="radio checked">  <i class="iconw-radio"></i>  <input type="radio" name="grade_id" checked value style="display: none;">  <em>不限</em>  </label>  ', _.each(grade_ids, function (a, s) {
        __p += '  <label class="radio">  <i class="iconw-radio"></i>  <input type="radio" name="grade_id" value="' + (null == (__t = s) ? "" : __t) + '" style="display: none;">  <em>' + (null == (__t = a) ? "" : __t) + "</em>  </label>  "
    }), __p += '  <em class="error-warnning" style="display: none;">*适用年级至少选择一个！</em>  </div>  '), __p += '    </div>  </div>  <div class="smart-bd">  <div class="smart-mt cfx">  <strong>题型/题量设置</strong>  </div>  <div class="smart-mc cfx">  <div class="w fl">  <div class="setted-wrap J_channel_sets"></div>  </div>  <div class="smart-type-warp">  <div class="smart-type-set J_channel_btns"></div>  </div>  </div>  </div>  <input type="hidden" name="xd" value="' + (null == (__t = xd) ? "" : __t) + '" >  <input type="hidden" name="chid" value="' + (null == (__t = chid) ? "" : __t) + '" >  <input type="hidden" name="_csrf" value="' + (null == (__t = csrf._csrf) ? "" : __t) + '">  <button type="submit" class="create-btn">生成试卷</button>  </form>  </div>  </div> </div> <div class="FootView"></div> <div class="BasketView"></div>';
    return __p
}, JST["03smart-spec-edit"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="MiniHeaderView"></div> <div class="crumbs g-cw"></div> <div class="fixheader" style="display: none;">  <div class="g-cw cfx">  <div class="w fl">  <div class="g-mn2">  <h2 class="J_spec_tit">' + (null == (__t = data.title) ? "" : __t) + '</h2>  </div>  </div>  <div class="g-sd2">  <div class="btn-group">  <a href="javascript:;" class="button-g">马上出题</a>  <a href="javascript:;" class="button-w">保存细目表</a>  </div>  </div>  </div> </div> <div class="s-wrap g-cw cfx">  <div class="w fl">  <div class="g-mn2">  <div class="diy-edit-inner">  <div class="item-attr fr J_ximu_type"></div>  <h2 class="diy-edit-title cfx">  <span class="editable J_spec_tit">' + (null == (__t = data.title) ? "" : __t) + '</span>  </h2>  <div class="diy-edit-table J_spec_table"></div>  <div class="diy-add-tixy-box">  <a href="javascript:;" class="diy-add-tixy J_add_head_tit">  <span><i class="icone-jw"></i>添加新大题</span>  </a>  </div>    </div>   </div>  </div>  <div class="g-sd2">  <div class="btn-group">  <a href="javascript:;" class="button-g J_output">马上出题</a>  <a href="javascript:;" class="button-w J_savetemp">保存细目表</a>  </div>  <div class="data-mc" id="sd-fix">  <h3 class="data-mt">双向细目表分析</h3>  <div class="diy-ffxi-grid">  <div class="diy-ffxi-table"></div>  </div>  </div>  </div>  </div> ' + (null == (__t = JST["partial/inner-foot"]()) ? "" : __t);
    return __p
}, JST["03smart-spec-list"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="HeaderView"></div> <div class="crumbs g-cw"></div> <div class="s-wrap g-cw cfx">  <div class="g-sd">  <div class="list-sd-tree">  <div class="list-tree-mt JV_tree_hd"> </div>  <div class="t-tree JV_tree_bd"> </div>  </div>  </div>  <div class="w fl">  <div class="g-mn">   <div class="filter-box cfx">  <div class="filter-item cfx">  <span class="mt">选择细目表：</span>  <div class="w fl">  <div class="mc">  <ul class="filter-item-wrap cfx ">  <li><a href="javascript:;" data-param="addtype=2" class="active">推荐细目表</a></li>   <li><a href="javascript:;" data-param="addtype=1">我的细目表</a></li>   </ul>  </div>  </div>  </div>  </div>    <div class="JV_list">  ' + (null == (__t = JST["partial/list-loading"]()) ? "" : __t) + '   </div>  <div class="page-wrap JV_page"> </div>  </div>  </div> </div> <div class="FootView"></div>';
    return __p
}, JST["04paper-edit"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="MiniHeaderView"></div> <div class="crumbs g-cw"></div>  <div class="fixheader" style="display: none;">  <div class="g-cw cfx">  <div class="w fl">  <div class="g-mn2">  <h2 data-jedit="title" class="J_edit_tit">' + (null == (__t = data.title) ? "" : __t) + '</h2>  </div>  </div>  <div class="g-sd2">  <div class="btn-group">  ', data.pid && 0 != data.pid && user.isAdmin ? __p += '  <a href="javascript:;" class="button-g J_submit_uncheck">保存到待审</a>  <a href="javascript:;" class="button-w J_submit_check">保存到已审</a>  ' : __p += '  <a href="javascript:;" class="button-g J_submit_paper">完成组卷</a>  <a href="javascript:;" class="button-w J_show_analyze">试卷分析</a>  ', __p += '  </div>  </div>  </div> </div>  <div class="m-wrap g-cw cfx" id="edit-wrap">  <div class="w fl">  <div class="g-mn2">   <div class="paper-wrap">  <div class="paper-sd" data-jset="1"></div>  <div class="paper-mc">  <div class="paper-hd">  \x3c!--考试科目标题--\x3e  <div class="test-title">  \x3c!--主标题--\x3e  <h1 data-jset="3">  <span class="edit-text contenteditable J_edit_tit" data-jedit="title">' + (null == (__t = data.title) ? "" : __t) + '</span>  </h1>  \x3c!--副标题--\x3e  <h2 data-jset="5">  <span class="edit-text contenteditable" data-jedit="subtitle">' + (null == (__t = data.subtitle) ? "" : __t) + '</span>  </h2>  </div>  \x3c!--考试时间--\x3e  <div class="test-time" data-jset="7">  <span>考试时间：<i class="edit-text contenteditable" data-jedit="examtime">' + (null == (__t = data.examtime) ? "" : __t) + '</i>分钟</span>  <span>满分：<i class="edit-text contenteditable" data-jedit="score">' + (null == (__t = data.score) ? "" : __t) + '</i>分</span>  </div>  \x3c!--学生信息--\x3e  <ul class="stu-info" data-jset="9">  <li>姓名：<span>____________</span></li>  <li>班级：<span>____________</span></li>  <li>学号：<span>____________</span></li>  </ul>  \x3c!--评分区--\x3e  <div class="mark-table J_mark_table" data-jset="11"></div>  \x3c!--注意事项--\x3e  <div class="rule" data-jset="4">  <p class="note">*注意事项：</p>  <div class="edit-text contenteditable" data-jedit="notes">' + (null == (__t = data.notes) ? "" : __t) + '</div>  </div>  </div>  <div class="paper-bd J_paper f-usn" onselectstart="return false" onselect="return false" oncontextmenu="return false" ondragstart="return false"></div>  </div>  </div>    </div>  </div>  <div class="g-sd2">  <div class="btn-group">  ', data.pid && 0 != data.pid && user.isAdmin ? __p += '  <a href="javascript:;" class="button-g J_submit_uncheck">保存到待审</a>  <a href="javascript:;" class="button-w J_submit_check">保存到已审</a>  ' : __p += '  <a href="javascript:;" class="button-g J_submit_paper">完成组卷</a>  <a href="javascript:;" class="button-w J_show_analyze">试卷分析</a>  ', __p += '  </div>  <div id="sd-fix">  <div class="edit-handle J_paper_style"></div>  <div class="edit-handle J_height">  <div class="J_edit_grids f-usn" onselectstart="return false" onselect="return false" oncontextmenu="return false" ondragstart="return false"></div>  <div class="edit-handle-ft">  <a href="/questions/categories" class="handle-btn">继续选题</a>  <a href="javascript:;" class="handle-btn J_new_type">自定义题型</a>  </div>  </div>  </div>  </div> </div>';
    return __p
}, JST["04paper-list"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="HeaderView"></div> <div class="crumbs g-cw"></div> <div class="m-wrap g-cw cfx J_main">  <div class="g-sd">  <div class="list-sd-tree JV_tree">  <div class="JV_tree_hd list-tree-mt"></div>  <div class="JV_tree_bd t-tree"></div>  </div>  </div>  <div class="w fl">  <div class="g-mn">  ', "sync" != type && (__p += '  <div class="filter-box cfx JV_filter_box"></div>  <div style="height: 10px;">&nbsp;</div>  '), __p += '  <div class="bank-list mt0 J_paper_items">  <div class="loading"></div>  \x3c!-- items --\x3e  </div>  <div class="page-wrap JV_page"></div>   </div>  </div> </div> <div class="FootView"></div> <div class="BasketView"></div>';
    return __p
}, JST["04paper-report"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="MiniHeaderView"></div>  <div class="report-data-wrap g-cw">  <div class="report-hdtit">  <strong class="report-title">  作答报告  <span class="b-tl"></span>  <span class="b-tr"></span>  <span class="b-br"></span>  <span class="b-bl"></span>  </strong>  </div>  <div class="report-data-bd">  <div class="c-circle-wrap">  <span class="c-circle-box">  <div class="cfx">  ' + (null == (__t = JST["report/report-circle"]({data: data})) ? "" : __t) + '  </div>  </span>  </div>  <div class="report-data-con">  <div class="report-data-mt cfx">  <div class="report-data-tit fl">  <i class="iconw-what4"></i>未掌握知识点：  <div class="report-tip">  <i class="iconw-tri-t"></i>  <P>1、知识点得分率计算方式：包含该知识点的试题所得的总分/包含该知识点的试题总分</P>  <p>2、知识点掌握程度小于80%未掌握的知识点。</p>  <p>3、此处只加载未掌握的知识点。</p>  <p>4、点击查看详情，显示此次作答的全部知识点。</p>  </div>  </div>  <div class="fl report-data-item">  ', _.each(data.un_know, function (a, s) {
        __p += "  " + (null == (__t = 0 == s ? "" : "、") ? "" : __t) + "<span>" + (null == (__t = a.name ? a.name.name : "--") ? "" : __t) + "</span>  "
    }), __p += "  </div>  </div>  ", _.size(data.errorRateByKnowledge) && (__p += '  <a href="javascript:;" class="report-detail-btn J_know_detail">查看详情</a>  '), __p += '  </div>  </div> </div>   <div class="b-wrap g-cw cfx" >  <div class="w fl">  <div class="g-mn2" id="report-warp">  <div class="do-wrap">  <div class="do-q-box">  <div class="do-q-hd">  <div class="do-q-tab J_tab">  <a href="javascript:;" class="current" data-rest="all">全部试题</a>  <a href="javascript:;" data-rest="wrong">做错的题</a>  <a href="javascript:;" data-rest="right">做对的题</a>  </div>  <div class="do-q-handle J_custom_radio">  <label class="checkbox checked">  <b class="iconw-checkbox"></b>  <input type="checkbox" name="answer" value="1" checked style="display: none;">  <span>答案</span>  </label>  <label class="checkbox">  <b class="iconw-checkbox"></b>  <input type="checkbox" name="know" value="1" style="display: none;">  <span>考点</span>  </label>  <label class="checkbox">  <b class="iconw-checkbox"></b>  <input type="checkbox" name="analyze" value="1" style="display: none;">  <span>解析</span>  </label>  </div>  </div>   </div>  <div class="do-q-bd J_reprot_con"></div>  </div>  </div>  </div>  <div class="g-sd2">  <div class="edit-handle paper-report-card J_side_card">  <div class="edit-mc">  ', head_t_collection.each(function (a) {
        __p += '  <div class="edit-handle-mt">  <strong title="' + (null == (__t = a.get("_t")) ? "" : __t) + '"><span>' + (null == (__t = myUtils.chinesesn(a.get("_n"))) ? "" : __t) + "、</span>" + (null == (__t = a.get("_t")) ? "" : __t) + '</strong>  </div>  <div class="edit-handle-bd">  <ul class="item-num cfx">  ', a.collection.each(function (a) {
            __p += "  ", 1 == a.get("myanswer").is_check ? (__p += "  ", 1 == a.get("myanswer").is_right ? __p += '  <li data-idz="' + (null == (__t = a.id) ? "" : __t) + '"><a href="javascript:;" class="right">' + (null == (__t = a.get("_n") + 1) ? "" : __t) + "</a></li>  " : __p += '  <li data-idz="' + (null == (__t = a.id) ? "" : __t) + '"><a href="javascript:;" class="error">' + (null == (__t = a.get("_n") + 1) ? "" : __t) + "</a></li>  ", __p += "  ") : __p += '  <li data-idz="' + (null == (__t = a.id) ? "" : __t) + '"><a href="javascript:;">' + (null == (__t = a.get("_n") + 1) ? "" : __t) + "</a></li>  ", __p += "  "
        }), __p += "  </ul>  </div>  "
    }), __p += "  </div>  </div>  </div> </div>";
    return __p
}, JST["04paper-show"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="MiniHeaderView"></div> <div class="download-wrap b-head preview-h" id="ohead-fix">  <div class="g-cw cfx">  <div class="w fl">  <div class="item-mc">  <h3 class="item-tit"><a href="javascript:;" title="' + (null == (__t = data.title) ? "" : __t) + '">' + (null == (__t = data.title) ? "" : __t) + '</a></h3>  <div class="item-attr">  <span><i class="iconw-time"></i>修改时间：' + (null == (__t = data.examine_time ? myUtils.formatTimestamp(data.examine_time) : myUtils.formatTimestamp(data.addtime)) ? "" : __t) + '</span>  <span><i class="iconw-eye1"></i>浏览次数：' + (null == (__t = data.look_num) ? "" : __t) + '</span>  <span><i class="iconw-download"></i>下载次数：' + (null == (__t = data.download_num) ? "" : __t) + "</span>  ", "未设置" != data.paper_type && (__p += '  <span><i class="iconw-leixing"></i>类型：' + (null == (__t = data.paper_type) ? "" : __t) + "</span>  "), __p += '  </div>  </div>  </div>  <div class="item-act">  <a href="javascript:;" class="download-btn" onclick="Application.popupPaperDownload(' + (null == (__t = data.pid) ? "" : __t) + ')">下载试卷</a>  ', user.uid && 0 != user.uid && user.uid == data.paper_uid && (__p += '  <a class="fun-btn J_share_paper"><span class="iconw-card"></span>平台共享</a>  '), __p += "  ", data.is_collect ? __p += '  <a href="javascript:;"class="fun-btn P_collect"><span class="iconw-ucollect-h"></span>取消收藏</a>  ' : __p += '  <a href="javascript:;"class="fun-btn P_collect"><span class="iconw-collect-h"></span>收藏试卷</a>  ', __p += '  <a class="fun-btn J_islogin" href="/#paper/test/' + (null == (__t = data.pid) ? "" : __t) + "?code=" + (null == (__t = code) ? "" : __t) + '"><span class="iconw-ceshi"></span>在线测试</a>  <a href="javascript:;" class="fun-btn J_answer_card" ><span class="iconw-card"></span>答题卡下载</a>  ', code || (__p += '  <a href="javascript:;" class="fun-btn J_temp_test" ><span class="iconw-ceshi"></span>分享试卷</a>  '), __p += "  ", user.isAdmin && (__p += '  <a class="fun-btn J_edit_paper" href="javascript:;" ><span class="iconw-edit"></span>编辑</a>  '), __p += '   </div>  </div> </div>  <div class="b-wrap g-cw cfx">  <div class="w fl">  <div class="g-mn2">  <div class="preview-wrap f-usn" onselectstart="return false" onselect="return false" oncontextmenu="return false" ondragstart="return false">  <div class="preview-hd">  ', internal && (__p += '  <label class="fl checkbox checked J_show_all_explain">  <b class="iconw-checkbox"></b>  <span>查看答案与解析</span>  </label>  '), __p += '  <a href="javascript:;" class="fr p-selall J_all_basket">选择试卷全部试题</a>  </div>  <div class="do-q-bd preview-bd"><ul class="J_ques_item"></ul></div>  </div>  </div>  </div>  <div class="g-sd2">  <div class="chart-wrap" id="sd-fix">  <div class="chart-hd">  <p><a href="javascript:;" class="detail-btn" onclick="Application.AnalyzeChart.show(' + (null == (__t = data.pid) ? "" : __t) + ')">详情</a></p>  <h2>试卷分析</h2>  <span>(总分：<span class="J_chart_score">0</span>)</span>  </div>  <div class="chart-bd">  <h3 class="chart-mt">总体分析</h3>  <div class="chart-mc" id="J_total">  </div>  <h3 class="chart-mt ">题量分析</h3>  <div class="chart-mc" id="J_chart_num">  </div>  <h3 class="chart-mt">难度分析</h3>  <div class="chart-mc" id="J_chart_difficulty">  </div>  <h3 class="chart-mt">知识点分析</h3>  <div class="chart-mc" id="J_chart_knowlist">  </div>  </div>  </div>  </div> </div> <div class="BasketView"></div>';
    return __p
}, JST["04paper-test"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<link rel="stylesheet" href="/lib/jquery-ui-1.9.2.custom/css/base/jquery-ui-1.9.2.custom.css"> <div class="MiniHeaderView"></div> <div class="download-wrap b-head" id="ohead-fix">  <div class="g-cw">  <div class="w fl">  <div class="item-mc">  <h3 class="item-tit">  <a href="/paper/view/' + (null == (__t = data.pid) ? "" : __t) + '">' + (null == (__t = data.title) ? "" : __t) + '</a>  </h3>  <div class="item-attr">  <span><i class="iconw-time"></i>修改时间：' + (null == (__t = myUtils.formatTimestamp(data.examine_time)) ? "" : __t) + '</span>  <span><i class="iconw-eye1"></i>浏览次数：' + (null == (__t = data.look_num) ? "" : __t) + '</span>  <span><i class="iconw-download"></i>下载次数：' + (null == (__t = data.download_num) ? "" : __t) + "</span>  ", "未设置" != data.paper_type && (__p += '  <span><i class="iconw-leixing"></i>类型：' + (null == (__t = data.paper_type) ? "" : __t) + "</span>  "), __p += '  </div>  </div>  </div>  <div class="item-act">  <a href="javascript:;" target="_blank" class="download-btn J_submit_test">马上提交</a>  <a href="javascript:;" class="fun-btn J_stop_test"><span class="iconw-save"></span>暂时保存</a>  </div>  </div>  </div>  <div class="b-wrap g-cw cfx online-test-paper">  <div class="w fl">  <div class="g-mn2">  <div class="do-wrap online-wrap">  <div class="do-q-bd">  <ul class="J_ques_wrap"></ul>  </div>  </div>  </div>  </div>  <div class="g-sd2">  <div class="edit-handle" id="sd-fix">  <div class="timer J_used_time">  <div class="timer-item">  <h3>00</h3>  <p>小时</p>  </div>  <div class="timer-item">  <h3>00</h3>  <p>分钟</p>  </div>  <div class="timer-item">  <h3>00</h3>  <p>秒</p>  </div>  </div>  <div class="edit-mc paper-test-mc J_side_card">   </div>  </div>  </div> </div> <div id="formula-wrap" style="width: 560px; height: 420px;">  <div class="formula-tit">二一组卷平台 - 公式编辑器</div>  <div class="formula-iframe">  <iframe src="" frameborder="0" width="100%" height="320"></iframe>  </div>  <button type="button" class="close" id="J_FormulaClose">关 闭</button>  <button type="button" class="submit" id="J_FormulaOk">确 定</button> </div>   ' + (null == (__t = JST["partial/inner-foot"]()) ? "" : __t);
    return __p
}, JST["05subject-detail"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="MiniHeaderView"></div> <div class="subject-banner">  <div class="g-cw">  <h1 class="subject-title">' + __e(data.title) + '</h1>  <p class="subject-subtitle">' + (null == (__t = data.type_name) ? "" : __t) + '</p>  <p class="subject-tip">  <span><i class="iconw-time3"></i>时间：' + __e(myUtils.formatTimestamp(data.updatetime)) + '</span>  <span><i class="iconw-download3"></i>下载量：' + __e(data.downcount) + '次</span>  <span><i class="iconw-eye4"></i>浏览量：' + __e(data.hits) + "</span>  ", "" == data.is_collect ? __p += '  <span class="pointer J_collect"><i class="iconw-collect-h "></i>收藏</span>  ' : __p += '  <span class="pointer J_collect"><i class="iconw-ucollect-h "></i>取消收藏</span>  ', __p += '  </p>  </div> </div>  <div class="t-wrap g-cw">  <div class="subject-con">  <div class="subject-hd">  <div class="w fl">  <div class="subject-cn">  <div class="J_select_all">  <span class="iconw-checkbox custom-checkbox">  <input type="checkbox" value="" name="">  </span>  <span class="sall">全选</span>  </div>  </div>  </div>  <div class="subject-fun">  <a href="javascript:;" class="down-btn J_down_subject">下载选中的试卷</a>  </div>  </div>  \x3c!-- list --\x3e  </div> </div> <div class="FootView"></div>';
    return __p
}, JST["05subject"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="HeaderView"></div> <div class="crumbs g-cw"></div>  <div class="t-wrap g-cw">  <div class="filter-box cfx JV_filter_box"></div>  <div class="subject-wrap pr JV_list">  <div class="loading-wrap">  <div class="loading-bg"></div>  <div class="loading"></div>  </div>  </div>  <div class="page-wrap JV_page"> </div> </div> <div class="FootView"></div> <div class="BasketView"></div>';
    return __p
}, JST["06search-list"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="MiniHeaderView"></div> <div class="search-key g-cw">  <p>和<span class="q-key" title="' + (null == (__t = content) ? "" : __t) + '">“' + (null == (__t = content.length > 20 ? content.slice(0, 20) + "..." : content) ? "" : __t) + "”</span>相关" + (null == (__t = "paper" == type ? "试卷" : "试题") ? "" : __t) + '，共<span class="q-key J_total">“0”</span>条</p> </div> <div class="h-wrap g-cw cfx">  <div class="g-sd">  <div class="search-tag">  <div class="search-tag-mt">  <h3 class="mt-hd clearfix">选择学科</h3>  </div>  <div class="main-cate-menu J_xdchid_menu">  ', _.each(data, function (a, s) {
        __p += '  <div class="item">  <h3>' + (null == (__t = xds[s]) ? "" : __t) + '</h3>  <div class="cfx">  ', _.each(a, function (a, t) {
            __p += '  <a href="javascript:;" class="' + (null == (__t = cur_xd == s && cur_chid == t ? "active" : "") ? "" : __t) + '" data-xdchid="' + (null == (__t = [s, t].join(",")) ? "" : __t) + '">' + (null == (__t = a) ? "" : __t) + "</a>  "
        }), __p += "  </div>  </div>  "
    }), __p += '  </div>  </div>   </div>  <div class="w fl">  <div class="g-mn">  <div class="filter-box cfx J_filter_line">  ', "question" == type ? (__p += '  <div class="filter-item cfx">  <span class="mt">类型：</span>  <div class="w fl">  <div class="mc">  <ul class="filter-item-wrap cfx ">  <li><a data-param="question_channel_type=" class="active">全部</a></li>   ', _.each(params.question_channel_types, function (a, s) {
        __p += '   <li><a data-param="question_channel_type=' + (null == (__t = s) ? "" : __t) + '">' + (null == (__t = a) ? "" : __t) + "</a></li>  "
    }), __p += "  </ul>  </div>  </div>  </div>  ") : (__p += '  <div class="filter-item cfx">  <span class="mt">类型：</span>  <div class="w fl">  <div class="mc">  <ul class="filter-item-wrap cfx ">  <li><a data-param="papertype=" class="active">全部</a></li>   ', _.each(params.exam_types, function (a, s) {
        __p += '   <li><a data-param="papertype=' + (null == (__t = s) ? "" : __t) + '">' + (null == (__t = a) ? "" : __t) + "</a></li>  "
    }), __p += "   </ul>  </div>  </div>  </div>   "), __p += '  </div>  <div class="' + (null == (__t = "paper" == type ? "bank-list" : "manual-list f-usn") ? "" : __t) + ' pr JV_list" ' + (null == (__t = "paper" == type ? "" : 'onselectstart="return false" onselect="return false" oncontextmenu="return false" ondragstart="return false"') ? "" : __t) + ' >  <div class="loading-wrap">  <div class="loading-bg"></div>  <div class="loading"></div>  </div>   </div>  <div class="page-wrap JV_page"> </div>  </div>  </div> </div> ' + (null == (__t = JST["partial/inner-foot"]()) ? "" : __t) + " ", "paper" != type && (__p += '  <div class="BasketView"></div> ');
    return __p
}, JST.home = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="HeaderView"></div> <div class="banner JV_home__banner"></div> <div class="i-wrap g-cw">  <div class="seat seat-test JV_home__hot"> </div>   <div class="seat subject-block JV_home__subject"> </div>   <div class="seat JV_home__statistics"> </div>   <div class="seat">  <div class="seat-mt">  <strong> <i class="line"></i>网站特色</strong>  </div>  <div class="seat-mc">  <ul class="resource-warp cfx">  <li>  <div class="resource-item">  <div class="iconb-tese1"></div>  <p class="resource-txt">为老师用户提供</p>  <P class="resource-nav">  <a href="/help.html/teacher" target="_blank">优质试题</a>  <a href="/help.html/teacher" target="_blank">海量试卷</a>  <a href="/help.html/teacher" target="_blank">精品专题</a>  <a href="/help.html/teacher" target="_blank">在线组卷</a>  </P>  </div>  </li>  <li>  <div class="resource-item">  <div class="iconb-tese2"></div>  <p class="resource-txt">为学生用户提供</p>  <P class="resource-nav">  <a href="/help.html/student" target="_blank">自我测试</a>  <a href="/help.html/student" target="_blank">测试报告</a>  <a href="/help.html/student" target="_blank">好题本</a>  <a href="/help.html/student" target="_blank">错题本</a>  </P>  </div>  </li>  <li>  <div class="resource-item">  <div class="iconb-tese3"></div>  <p class="resource-txt">为学校用户提供</p>  <P class="resource-nav">  <a href="/help.html/school" target="_blank">优质资源</a>  <a href="/help.html/school" target="_blank">智能组卷</a>  <a href="/help.html/school" target="_blank">定制化服务</a>  </P>  </div>  </li>  </ul>  </div>  </div>   <div class="seat JV_home__partner"></div>  </div> <div class="FootView"></div> <div class="BasketView"></div>';
    return __p
}, JST["home/banner"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="silderbox">  <ul>  ', _.each(banner, function (a) {
        __p += '   <li style="background: url(' + (null == (__t = a.banner_url) ? "" : __t) + ') 50% 50% no-repeat;">  <a href="' + (null == (__t = a.target_url) ? "" : __t) + '" title="' + (null == (__t = a.title) ? "" : __t) + '" target="_blank"></a>  </li>  '
    }), __p += '  </ul>  <div class="control prev"><i class="iconb-banner-prev"></i></div>  <div class="control next"><i class="iconb-banner-next"></i></div> </div> <div class="control-num">  <span class="f-box">  ', _.each(banner, function (a, s) {
        __p += '  <a href="javascript:;" class="' + (null == (__t = 0 == s ? "on" : "") ? "" : __t) + '"></a>  '
    }), __p += "  </span> </div>";
    return __p
}, JST["home/hotpapers"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="seat-mt">  <strong><i class="line"></i>热门试卷</strong>  <a href="/#papers/sync" class="more" target="_blank">更多</a> </div> <div class="seat-mc">  <ul class="seat-list cfx">  ', _.each(data, function (a) {
        __p += '  <li><a href="/paper/view/' + (null == (__t = a.paper_id) ? "" : __t) + '" target="_blank" title="' + (null == (__t = a.title) ? "" : __t) + '"><b></b><span>' + (null == (__t = a.title) ? "" : __t) + "</span></a></li>  "
    }), __p += "  </ul> </div>";
    return __p
}, JST["home/partner"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="seat-mt">  <strong> <i class="line"></i>合作院校</strong>  <div class="school-data">  <span>全国已有<em>' + (null == (__t = primary_count_ztc) ? "" : __t) + '</em>所学校申请组卷通！</span>  <a href="/help.html/request" target="_blank" class="apply">+申请组卷通</a>  </div> </div> <div class="seat-mc J_LunboList">  <ul class="school-wrap cfx J_LunboItems">  ', _.each(parnter, function (a) {
        __p += '  <li>  <a href="' + (null == (__t = a.target_url) ? "" : __t) + '" target="_blank">  <img src="' + (null == (__t = a.pic_url) ? "" : __t) + '" alt="' + (null == (__t = a.school_name) ? "" : __t) + '" style="width:275px;height:154px">  <P>' + (null == (__t = a.school_name) ? "" : __t) + "</P>  </a>  </li>  "
    }), __p += "  </ul> </div>";
    return __p
}, JST["home/statistics"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="seat-mt">  <strong> <i class="line"></i>网站数据</strong> </div> <div class="seat-mc ">  <ul class="web-data cfx">  <li>  <div class="web-data-item">  <a>  <i class="iconb-book1"></i>  <h2>试题库</h2>  </a>  <P class="data-sum">试题总量</P>  <h4>' + (null == (__t = primary_count.count_question) ? "" : __t) + '</h4>  <p class="updata">今日更新试题：' + (null == (__t = update_count.count_question) ? "" : __t) + '道</p>  </div>  </li>  <li>  <div class="web-data-item">  <a>  <i class="iconb-book2"></i>  <h2>试卷库</h2>  </a>  <P class="data-sum">试卷总量</P>  <h4>' + (null == (__t = primary_count.count_paper) ? "" : __t) + '</h4>  <p class="updata">今日更新试卷：' + (null == (__t = update_count.count_paper) ? "" : __t) + '份</p>  </div>  </li>  <li>  <div class="web-data-item">  <a>  <i class="iconb-computer"></i>  <h2>智能组卷</h2>  </a>  <P class="data-sum">组卷总量</P>  <h4>' + (null == (__t = primary_count.count_create) ? "" : __t) + '</h4>  <p class="updata">今日组卷数量：' + (null == (__t = update_count.count_create) ? "" : __t) + '份</p>  </div>  </li>  <li>  <div class="web-data-item">  <a>  <i class="iconb-data1"></i>  <h2>在线测试</h2>  </a>  <P class="data-sum">测试总量</P>  <h4>' + (null == (__t = primary_count.count_test) ? "" : __t) + '</h4>  <p class="updata">今日测试次数：' + (null == (__t = update_count.count_test) ? "" : __t) + '次</p>  </div>  </li>  <li>  <div class="web-data-item">  <a>  <i class="iconb-hezuoschool"></i>  <h2>合作院校</h2>  </a>  <P class="data-sum">学校总量</P>  <h4>' + (null == (__t = primary_count.count_ztc) ? "" : __t) + '</h4>  <p class="updata">今日新增学校：' + (null == (__t = update_count.count_ztc) ? "" : __t) + "所</p>  </div>  </li>  </ul> </div>";
    return __p
}, JST["home/subject"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) _.size(list) && (__p += ' <div class="seat-mt">  <strong> <i class="line"></i>专题推荐</strong>  <a href="/#subject/list" class="more" target="_blank">更多</a> </div> <div class="seat-mc">  <ul class="subject-wrap cfx">  ', _.each(list, function (a) {
        __p += '  <li>  <div class="subject subject-item--type' + (null == (__t = a.type) ? "" : __t) + '">  <div class="subject-bd cfx">  <div class="subject-pic">  <i class="iconc-zt"></i>  </div>  <div class="subject-mc">  <p>' + (null == (__t = a.type_name) ? "" : __t) + '</p>  <h3><a href="/#subject/detail/' + (null == (__t = a.id) ? "" : __t) + '" target="_blank">' + (null == (__t = a.title) ? "" : __t) + '</a></h3>  </div>  </div>  <div class="subject-ft">  <span><i class="iconw-time3"></i>时间：' + (null == (__t = a.format_date) ? "" : __t) + '</span>  <span><i class="iconw-download2"></i>下载：' + (null == (__t = a.downcount) ? "" : __t) + '</span>  <span><i class="iconw-eye"></i>浏览量：' + (null == (__t = a.hits) ? "" : __t) + "次</span>  </div>  </div>  </li>  "
    }), __p += "  </ul> </div> ");
    return __p
}, JST["dialogs/Permission"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div style="padding:45px 10px; text-align: center;">  <div class="vip-tips">  <p>抱歉，该功能仅限VIP与组卷通用户使用。</p>  <div class="enters">  <a href="/payment/vip" target="_blank">购买VIP</a>  <a href="/help.html/request" target="_blank">申请免费试用（组卷通）</a>  </div>  </div> </div>';
    return __p
}, JST["dialogs/paper-analyze"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="paper-analysis-fixed" data-modal-title="试卷分析">  <div class="paper-analysis">  <div class="analysis-block">  <h3 class="analysis-tit"><span>试卷总体分布分析</span></h3>  <table class="analysis-table">  <thead>  <tr>  <th colspan="3">总分：' + (null == (__t = grid1.score) ? "" : __t) + '</th>  </tr>  </thead>  <tbody>  <tr>  <th rowspan="2">分值分布</th>  <th>客观题（占比）</th>  <td>' + (null == (__t = grid1.row1[0]) ? "" : __t) + "（" + (null == (__t = grid1.row1[1]) ? "" : __t) + "）</td>  </tr>  <tr>  <th>主观题（占比）</th>  <td>" + (null == (__t = grid1.row1[2]) ? "" : __t) + "（" + (null == (__t = grid1.row1[3]) ? "" : __t) + '）</td>  </tr>  <tr>  <th rowspan="2">题量分布</th>  <th>客观题（占比）</th>  <td>' + (null == (__t = grid1.row2[0]) ? "" : __t) + "（" + (null == (__t = grid1.row2[1]) ? "" : __t) + "）</td>  </tr>  <tr>  <th>主观题（占比）</th>  <td>" + (null == (__t = grid1.row2[2]) ? "" : __t) + "（" + (null == (__t = grid1.row2[3]) ? "" : __t) + '）</td>  </tr>  </tbody>  </table>  </div>  <div class="f-cb">  <div class="analysis-cell f-fl">  <div class="analysis-block">  <div class="analysis-tit"><span>试卷题量分布分析</span></div>  <table class="analysis-table">  <thead>  <tr>  <th>大题题型</th>  <th>题目量（占比）</th>  <th>分值（占比）</th>  </tr>  </thead>  <tbody>  ', _.each(grid2, function (a) {
        __p += "  <tr>  <th>" + (null == (__t = a.title) ? "" : __t) + "</th>  <td>" + (null == (__t = a.q_num) ? "" : __t) + "（" + (null == (__t = a.q_percent) ? "" : __t) + "）</td>  <td>" + (null == (__t = a.s_num) ? "" : __t) + "（" + (null == (__t = a.s_percent) ? "" : __t) + "）</td>  </tr>  "
    }), __p += '\t  </tbody>  </table>  </div>  </div>  <div class="analysis-cell f-fr">  <div class="analysis-block">  <h3 class="analysis-tit"><span>试卷难度结构分析</span></h3>  <div class="analysis-chart" id="J_chart_container" style="min-height:160px; width: 360px"></div>  </div>  </div>  </div>  <div class="analysis-block">  <h3 class="analysis-tit"><span>试卷知识点分析</span></h3>  <table class="analysis-table">  <thead>  <tr>  <th>序号</th>  <th>知识点（认知水平）</th>  <th>分值（占比）</th>  <th>对应题号</th>  </tr>  </thead>  <tbody>  ', _.each(grid4, function (a) {
        __p += "  <tr>  <td>" + (null == (__t = a.sn) ? "" : __t) + "</td>  <td>" + (null == (__t = a.knowledge) ? "" : __t) + "</td>  <td>" + (null == (__t = a.s_num) ? "" : __t) + "（" + (null == (__t = a.s_percent) ? "" : __t) + "）</td>  <td>" + (null == (__t = a.id) ? "" : __t) + "</td>  </tr>  "
    }), __p += "  </tbody>  </table>  </div>  </div>  </div>";
    return __p
}, JST["dialogs/paper-card"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<link rel="stylesheet" href="/css/popup.min.css?v=8ce06c807d"> <link rel="stylesheet" href="/css/spriter-a.min.css?v=c8a2fa51d7"> <link rel="stylesheet" href="/css/spriter-mix.min.css?v=c8a2fa51d7"> <style>  .ui-dialog-content { width: 450px; } </style> <div class="answersheet-con">  <div class="sheet-line f-cb">  <label>答题卡样式：</label>  <div class="menu sheet-section">  <span class="s-title">普通表格型</span><i class="icona-tri"></i>  <ul class="sheet-list">  <li data-sheet="1">普通表格型</li>  <li data-sheet="2">标准题卡型</li>  <li data-sheet="3">选择密集型</li>  </ul>  </div>  </div>  <div class="sheet">  <div><img src="/images/putong.png"></div>  <div style="display: none;"><img src="/images/biaozhun.png"></div>  <div style="display: none;"><img src="/images/miji.png"></div>  </div> </div>';
    return __p
}, JST["dialogs/paper-download"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div> <link rel="stylesheet" href="/css/spriter-a.min.css?v=c8a2fa51d7"> <link rel="stylesheet" href="/css/spriter-mix.min.css?v=c8a2fa51d7"> <style>  .form-paper-download { width: 500px; } .form-paper-download i { display: inline-block; } .download-msg { padding-left: 0; padding-right: 0; } .download-hint, .download-size, .download-type, .download-math, .download-beizu { padding-left: 10px; padding-right: 10px; padding-bottom: 13px; border-bottom: 0px; zoom: 1; }  .download-type-content .checkbox, .download-type-con .radiobox { margin-right: 10px; } </style> <div class="form-paper-download">  <form class="P_download">  <input type="hidden" name="pid" value="' + (null == (__t = pid) ? "" : __t) + '" >   <div class=" download-msg">  <div class="download-size">  <div class="download-text">纸张大小：</div>  <div class="size-con download-bd J_radio_group">  <div class="size-a4 radiobox checked">  <span>  <i class="icona-radio"></i>  <input type="radio" value="A4" name="size" checked style="display: none;">  </span>  <i class="icona-a4"></i>  <p>A4</p>  </div>  <div class="size-a3 radiobox">  <span>  <i class="icona-radio"></i>  <input type="radio" value="A3" name="size" style="display: none;">  </span>  <i class="icona-a3"></i>  <p>A3（双栏）</p>  </div>  <div class="size-a4 radiobox">  <span>  <i class="icona-radio"></i>  <input type="radio" value="B5" name="size" style="display: none;">  </span>  <i class="icona-a4"></i>  <p>B5</p>  </div>  <div class="size-a3 radiobox">  <span>  <i class="icona-radio"></i>  <input type="radio" value="B4" name="size" style="display: none;">  </span>  <i class="icona-a3"></i>  <p>B4（双栏）</p>  </div>  </div>   </div>  <div class="download-type">  <div class="download-text">试卷内容：</div>  <div class="download-type-content download-bd J_content">  <span class="checkbox checked">  <i class="icona-check"></i>  <input type="checkbox" style="display:none" value="an" checked name="content_type[]">  答案  </span>  <span class="checkbox">  <i class="icona-check"></i>  <input type="checkbox" style="display:none" value="kw" name="content_type[]">  考点  </span>  <span class="checkbox">  <i class="icona-check"></i>  <input type="checkbox" style="display:none" value="ex" name="content_type[]">  解析  </span>   <span class="checkbox">  <i class="icona-check"></i>  <input type="checkbox" style="display:none" value="sc" name="content_type[]">  小题分  </span>   </div>  </div>  </div>  <div class="download-math">  <div class="download-text">公式形式：</div>  <div class="download-type-con download-bd J_radio_group">  <span class="radiobox checked">  <i class="icona-radio"></i>  <input type="radio" value="2" name="renderMathAsImg" checked style="display: none;">  图片公式（不可编辑）  </span>  <span class="radiobox">  <i class="icona-radio"></i>  <input type="radio" value="1" name="renderMathAsImg" style="display: none;">  文本公式（可编辑）  </span>  </div>  </div>  <div class="download-type">  <div class="download-text">试卷类型：</div>  <div class="download-type-con download-bd J_radio_group">  <span class="radiobox">  <i class="icona-radio"></i>  <input type="radio" value="teacher" name="type" style="display: none;">  教师用卷（答案在题后）  </span>  <span class="radiobox checked">  <i class="icona-radio"></i>  <input type="radio" value="student" name="type" checked style="display: none;">  学生用卷（答案在卷尾）  </span>  </div>  </div>  <div class="download-hint">  <div class="download-bd">  ', isUnit && !limitStatus[3] && (__p += '  <div class="hint-con">  ', isOnDue ? (__p += "  ", limitStatus[0] ? (isEnd = !0, __p += '  <p>您为“组卷通”用户，此次下载<b class="highlight strong">免费</b></p>  <p class="small"> “组卷通” 到期时间：<b class="highlight">' + (null == (__t = moment(1e3 * productInfo.etime).format("YYYY-MM-DD")) ? "" : __t) + "</b></p>  ") : (isEnd = !1, isUnitOutLimit = !0, __p += '  <p><b class="highlight">' + (null == (__t = limitStatus[1]) ? "" : __t) + "</b></p>  "), __p += "  ") : (isEnd = !1, isUnitOutDue = !0, __p += "  "), __p += "  </div>  "), __p += "   ", isUnitOutLimit || (__p += "  ", !isEnd && PaperCount.isfree && (isEnd = !0, __p += '  <div class="hint-con">  <p>你下载过这份试卷，15天内下载<b class="highlight strong">免费</b></p>  </div>  '), __p += "   ", !isEnd && newvip.deadline ? (__p += '  <div class="hint-con">  ', newvip.coin && (isEnd = !0, __p += '  <p>您为vip用户，此次下载<b class="highlight">免费</b></p>  <p class="small">剩余下载次数:<b class="highlight">' + (null == (__t = newvip.coin) ? "" : __t) + "</b>, 到期时间:" + (null == (__t = moment(1e3 * newvip.deadline).format("YYYY-MM-DD")) ? "" : __t) + "</p>  "), __p += "  </div>  ") : !isEnd && isUnitOutDue && (__p += '  <div class="hint-con">  <p><b class="highlight">非常抱歉，“组卷通”已到期！</b><a href="/help.html/request" target="_blank">立即申请</a></p>  </div>   '), __p += "   ", !isEnd && (xuebi.coin >= 3 * PaperCount.point || pu >= PaperCount.point) && (isEnd = !0, __p += '  <div class="hint-con">  ', vipLimitMsg && (__p += ' <p><b class="highlight">' + (null == (__t = vipLimitMsg) ? "" : __t) + "</b></p> "), __p += '  <p>此次下载需扣除： 学币<b class="highlight">' + (null == (__t = PaperCount.xuebi) ? "" : __t) + '</b>个  <span class="lowlight">（或普通点' + (null == (__t = PaperCount.point) ? "" : __t) + '个）</span>  </p>  <p class="small">您当前剩余：<b>' + (null == (__t = xuebi.coin) ? "" : __t) + "</b>个学币，<b>" + (null == (__t = pu) ? "" : __t) + "</b>个普通点</p>  </div>  "), __p += "  "), __p += "   ", isEnd || hasWxpay || isUnitOutDue || isUnitOutLimit || (__p += "  ", vipLimitMsg && (__p += ' <div class="hint-con"> <p><b class="highlight">' + (null == (__t = vipLimitMsg) ? "" : __t) + "</b></p> </div> "), __p += "  ", wxpayInfo && 1 == wxpayInfo.status ? __p += '  <div class="recharge-btn-box wxpay_info">  <img src="' + (null == (__t = wxpayInfo.wxpayUrl) ? "" : __t) + '" width="160" height="160"><br>  <font style="color:#3db06e;font-weight:bold">' + (null == (__t = wxpayInfo.paymoney) ? "" : __t) + '</font><br>  （微信安全支付，支付成功自动下载）  </div>  \x3c!-- <div class="recharge-btn-box down_btn" style="display:none">  <font style="color:#3db06e;font-weight:bold">已通过微信支付，可以正常下载！</font><br>  <button class="recharge-btn" type="submit">下 载</button>  </div> --\x3e  ' : __p += '   <div class="recharge-btn-box">  <font style="color:red;font-weight:bold">(error: ' + (null == (__t = wxpayInfo.error ? wxpayInfo.error : "") ? "" : __t) + ")生成微信二维码失败！请联系客服QQ：81321902</font>  </div>  ", __p += "  "), __p += "   ", !isEnd && hasWxpay && (isEnd = !0, __p += '  <div class="recharge-btn-box">  <font style="color:#3db06e;font-weight:bold">已通过微信支付，可以正常下载！</font>  </div>  '), __p += "   ", isEnd && (__p += ' <div class="recharge-btn-box"><button class="recharge-btn" type="submit">下 载</button></div> '), __p += '    </div>  </div>  </form>  <div class="download-beizu">  <div class="download-text" style="padding-top:0;"> 温馨提示：</div>  <div class="download-bd">  <p class="small">1、VIP用户下载免费。 <a href="/payment/vip" target="_blank">开通VIP</a></p>  <p class="small">2、如有问题，请联系客服QQ：81321902 </p>  </div>  </div> </div> </div>';
    return __p
}, JST["dialogs/paper-download_old"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class=" download-msg">  <div class="download-size">  <div class="download-text" style="height: 120px;">  纸张大小：  </div>  <div class="size-con">  <div class="size-a4 radiobox checked">  <span>  <i class="icona-radio"></i>  <input type="radio" value="A4" name="chooseSize" checked style="display: none;">  </span>  <i class="icona-a4"></i>  <p>A4</p>  </div>  <div class="size-a3 radiobox">  <span>  <i class="icona-radio"></i>  <input type="radio" value="A3" name="chooseSize" style="display: none;">  </span>  <i class="icona-a3"></i>  <p>A3（双栏）</p>  </div>  </div>   <div class="size-con">  <div class="size-a4 radiobox">  <span>  <i class="icona-radio"></i>  <input type="radio" value="B5" name="chooseSize" style="display: none;">  </span>  <i class="icona-a4"></i>  <p>B5</p>  </div>  <div class="size-a3 radiobox">  <span>  <i class="icona-radio"></i>  <input type="radio" value="B4" name="chooseSize" style="display: none;">  </span>  <i class="icona-a3"></i>  <p>B4（双栏）</p>  </div>  </div>   </div>  <div class="download-type">  <div class="download-text">  试卷类型：  </div>  <div class="download-type-con">  <div>  <span class="radiobox">  <i class="icona-radio"></i>  <input type="radio" value="teacher" name="chooseType" style="display: none;">  教师用卷（答案在题后）  </span>  <label></label>  </div>  <div>  <span class="radiobox checked">  <i class="icona-radio"></i>  <input type="radio" value="student" name="chooseType" checked style="display: none;">  学生用卷（答案在卷尾）  </span>  <label></label>  </div>  </div>  </div>  <div class="download-hint">  <div class="download-text">  扣费提示：  </div>  ', data.unitcount.isOnDue ? (__p += '  <div class="hint-con">  ', data.unitcount.limitStatus[0] ? __p += "  <p>此次下载需扣除您所属的单位账户额度1份</p>  " : __p += "  <p>您所属的单位账户下载受限</p>  <p>系统提示：" + (null == (__t = data.unitcount.limitStatus[1]) ? "" : __t) + "</p>  ", __p += "  </div>  ") : data.paperinfo.isfree ? __p += '  <div class="hint-con">  <p>您已下载过这份试卷,15天内再次下载免费</p>  </div>  ' : (__p += '  <div class="hint-con">  ', data.userinfo.newvip.coin > 0 ? __p += '  <p>您为vip用户，此次下载<b class="highlight">免费</b></p>  <p>剩余下载次数:<b class="highlight">' + (null == (__t = data.userinfo.newvip.coin) ? "" : __t) + '</b>到期时间:<b class="highlight">' + (null == (__t = data.userinfo.newvip.deadline) ? "" : __t) + "</b></p>  " : __p += "  <p>您当前剩余：<b>" + (null == (__t = data.userinfo.xuebi.coin) ? "" : __t) + "</b>个学币，<b>" + (null == (__t = data.userinfo.pu) ? "" : __t) + "</b>个普通点</p>  <p>本次下载含普通试题<b>" + (null == (__t = data.paperinfo.common) ? "" : __t) + "</b>个，精品试题<b>" + (null == (__t = data.paperinfo.special) ? "" : __t) + '</b>个</p>  <p>此次下载需扣除普通点：  <b class="highlight">' + (null == (__t = data.paperinfo.point) ? "" : __t) + '</b>个  或学币<b class="highlight">' + (null == (__t = data.paperinfo.xuebi) ? "" : __t) + "</b>个  </p>  ", __p += "  </div>  "), __p += '  <p></p>  <div class="hint-msg">  <div class="hint-tit">  温馨提示：  </div>  <div class="hint-text">  <p>1、组卷通用户下载免费。 <a href="/help.html/zujuan" target="blank" style="color:#17A3E0;">学校/培训机构申请免费试用</a></p>  <p>2、VIP用户下载免费。 <a href="/payment/vip" target="blank" style="color:#17A3E0;">开通VIP</a></p>  <p>3、如有问题，请联系客服QQ：81321902 </p>  </div>  </div>  </div>  </div>';
    return __p
}, JST["dialogs/paper-newtype"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="add-type-con custom-modal" data-modal-title="添加新题型">  <p>请输入新题型名称：<span class="error-msg"></span></p>  <input type="text" name="" value="" /> </div>';
    return __p
}, JST["dialogs/paper-share"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class=" download-msg">  <style type="text/css">  .mytest-data {margin:10px 0} .mytest-data select { margin-left: 10px;} .mytest-data td {text-align: left; padding:5px 0; } .mytest-data select {width: 140px; padding: 2px 0;} .mytest-data input {margin-left: 10px; padding: 2px 4px;}   </style>  <form id =\'share-form\'>  <input type="hidden" name="pid" value="' + (null == (__t = pid) ? "" : __t) + '"/>  <input type="hidden" name="_csrf" value="' + (null == (__t = _csrf) ? "" : __t) + '">  <table width="100%" class="mytest-data" id="sharedata">  <tbody>  <tr>  <td height="40" colspan="2">  试卷名称:<input type="text" class="papers papers-tit" value="' + (null == (__t = title) ? "" : __t) + '" name="title" style="width:300px; color:#9a9a9a">  </td>  </tr>  <tr>  <td>  地区:  <select class="papers" name="province">  <option value="0">全国</option>  <option value="1">北京市</option>  <option value="2">天津市</option>  <option value="3">河北省</option>  <option value="4">山西省</option>  <option value="5">内蒙古自治区</option>  <option value="6">辽宁省</option>  <option value="7">吉林省</option>  <option value="8">黑龙江省</option>  <option value="9">上海市</option>  <option value="10">江苏省</option>  <option value="11">浙江省</option>  <option value="12">安徽省</option>  <option value="13">福建省</option>  <option value="14">江西省</option>  <option value="15">山东省</option>  <option value="16">河南省</option>  <option value="17">湖北省</option>  <option value="18">湖南省</option>  <option value="19">广东省</option>  <option value="20">广西壮族自治区</option>  <option value="21">海南省</option>  <option value="22">重庆市</option>  <option value="23">四川省</option>  <option value="24">贵州省</option>  <option value="25">云南省</option>  <option value="26">西藏自治区</option>  <option value="27">陕西省</option>  <option value="28">甘肃省</option>  <option value="29">青海省</option>  <option value="30">宁夏回族自治区</option>  <option value="31">新疆维吾尔自治区</option>  </select>  </td>   <td>  年级:  <select class="papers" name="gradeid">  ', _.each(nianji, function (a, s) {
        __p += '  <option value="' + (null == (__t = s) ? "" : __t) + '">' + (null == (__t = a) ? "" : __t) + "</option>  "
    }), __p += '  </select>  </td>  <td>  类型:  <select class="papers" name="papertype">  ', _.each(papertype, function (a, s) {
        __p += '  <option value="' + (null == (__t = s) ? "" : __t) + '">' + (null == (__t = a) ? "" : __t) + "</option>  "
    }), __p += '  </select>  </td>  </tr>  <tr>  </tr>  </tbody>  </table>  </form>  注：共享试卷成功后，其他用户也可以看到您的组卷哦。同时，您也会得到一定的<label style="color:#FF9136;">积分</label>作为奖励。 </div>';
    return __p
}, JST["dialogs/paper-temp-test"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<style>  .temp-test-box { width: 460px; }  .temp-test-link { width: 328px; border: 1px solid #ddd; background: #fff; font-size: 12px; line-height: 1.6; padding: 5px; border-radius: 5px; }  .test-link-btn {  margin-left: 10px;  width: 100px;  height: 36px;  line-height: 36px;  text-align: center;  color: #fff;  font-size: 12px;  background: #2bbb61;  border-radius: 5px;  border: none;  outline: none;  }  .test-link-btn:hover { background: #5ecb87; }   .temp-test-tip { font-size: 12px; margin-top: 10px; color: #333; } </style> <div class="temp-test-box">  <input type="text" id="copyurl" value=\'https://zujuan.21cnjy.com/#paper/show/' + (null == (__t = pid) ? "" : __t) + "?code=" + (null == (__t = code) ? "" : __t) + '\' class="temp-test-link">  <button type="button" class="test-link-btn" onclick="copyUrl();">复制链接</button>  <P class="temp-test-tip">温馨提示：您可以通过此链接将试卷分享给用户进行下载或作答</P> </div>  <script>  function copyUrl(){  var Url=document.getElementById("copyurl");  Url.select();   document.execCommand("Copy");   } <\/script>';
    return __p
}, JST["dialogs/ques-error"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="error-con custom-modal" data-modal-title="试题纠错"> \t<form> \t\t<input type="hidden" name="qid" value="' + (null == (__t = question_id) ? "" : __t) + '"> \t\t<p>*请输入您遇到的错误，错误一经确认，我们会给予您一定的奖励</p> \t\t<textarea name="message"></textarea> \t\t<div class="warn"></div> \t\t<input type="hidden" name="_csrf" value="' + (null == (__t = Application.dataState.csrf._csrf) ? "" : __t) + '" > \t</form> </div';
    return __p
}, JST["dialogs/ques-migrate"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="transfer-con f-usn custom-modal" onselectstart="return false" data-modal-title="转移试题">  <div class="transfer-title">  将第' + (null == (__t = model.get("_n") + 1) ? "" : __t) + '题转移至：  </div>  <div class="transfer-num">  <form>  <ul>  ', _.each(type_views, function (a, s) {
        __p += '  <li>  <span data-vid="' + (null == (__t = a.cid) ? "" : __t) + '" class="custom-radio ' + (null == (__t = a.cid == t_view.cid ? "checked" : "") ? "" : __t) + '">  <i class="iconw-radio"></i>' + (null == (__t = myUtils.chinesesn(s)) ? "" : __t) + "、" + (null == (__t = a.model.get("_t")) ? "" : __t) + "  </span>  </li>  "
    }), __p += '  </ul>  <input type="hidden" name="_vid" value="' + (null == (__t = t_view.cid) ? "" : __t) + '">  </form>  </div> </div>';
    return __p
}, JST["dialogs/ques-replace"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) null === data ? __p += ' <div class="shade-bg"></div> <div class="p-replace-wrap ">  <div class="loading">  \x3c!-- <img src="/build/images/loading.gif">  <span>试题正在加载中...</span> --\x3e  </div>  <div class="p-body J_bd_replace"></div> </div> ' : (__p += ' <div class="p-con-hd f-cb">  <ul class="p-con-num f-cb">  ', _.each(data.questions, function (a, s) {
        __p += '  <li><a href="javascript:;" data-n="' + (null == (__t = s) ? "" : __t) + '" class="J_ques_tab ' + (null == (__t = 0 == s ? "active" : "") ? "" : __t) + '">' + (null == (__t = s + 1) ? "" : __t) + "</a></li>  "
    }), __p += "  </ul>  ", data.count > 10 && (__p += '  <a href="javascript:;" class="change-btn J_reload_replace">换一批</a>  '), __p += ' </div> <div class="p-con-bd">  <div class="p-content">  <ul class="J_ques_list"></ul>  </div>  <div class="p-q-ft">  ', _.size(data.questions) && (__p += '  <a href="javascript:;" class="replace-btn J_submit_replace">替换</a>'), __p += '  <a href="javascript:;" class="p-close J_close_replace">关闭</a>  </div> </div> ');
    return __p
}, JST["dialogs/save-paper"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="form-save-paper custom-modal">  <form action="">  <p class="field-tip" style="display:none">请输入标题。</p>  <div class="field-line">  <label for="field-paper-tit">标题：</label>  <input class="field-tit" type="text" id="field-paper-tit" name="title" value="' + (null == (__t = title) ? "" : __t) + '" >  </div>  <div>注：保存后的试卷可在<a href="/ucenter/u-zujuan" class="field-go">用户中心--组卷记录</a>中查看</div>  </form> </div>';
    return __p
}, JST["dialogs/save-test"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="pop-tit"><span>作答保存成功</span></div> <P class="pop-txt mt10">您可以在<a href="/ucenter/u-ceshi" target="_blank" class="field-go">个人中心--测试记录</a>进行查看</P> <button type="button" class="pop-btn doing">继续做题</button>';
    return __p
}, JST["dialogs/select-ximutype"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="select-ximutype">  <div class="ximutypt-tit">请选择细目表的类型：</div>  <div class="smart-set cfx">  ', _.each(res, function (a, s) {
        __p += '  <label class="radio ' + (null == (__t = ximutype == s ? "checked" : "") ? "" : __t) + ' ">  <i class="iconw-radio"></i>  <input type="radio" name="ximu_type" value="' + (null == (__t = s) ? "" : __t) + '" ' + (null == (__t = ximutype == s ? "checked" : "") ? "" : __t) + ' style="display: none;">  <em>' + (null == (__t = a) ? "" : __t) + "</em>  </label>  "
    }), __p += "  </div> </div>";
    return __p
}, JST["dialogs/setscore-one"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) {
        if (__p += '<div class="q-score-con" data-modal-title="设置分数">  <form action="javascript:;" id="dialog-score-form">  ', Number(model.get("question_type")) < 6) {
            if (__p += "  ", "4" == model.get("question_type")) {
                __p += "  ";
                var _NN = _.size(model.get("answer_json") || model.get("myanswer"));
                __p += '  <p><label for="">' + (null == (__t = qctypes[model.get("question_channel_type")]) ? "" : __t) + '：</label><input type="text" name="score" value="' + (null == (__t = model.get("score").subScore || 1) ? "" : __t) + '" data-n="' + (null == (__t = _NN) ? "" : __t) + '"> 分 x ' + (null == (__t = _NN) ? "" : __t) + "空</p>  "
            } else __p += '  <p><label for="">' + (null == (__t = qctypes[model.get("question_channel_type")]) ? "" : __t) + '：</label><input type="text" value="' + (null == (__t = model.get("score").score) ? "" : __t) + '" name="score"> 分</p>  ';
            __p += "  "
        } else {
            if (__p += "    <ul>  ", "7" == model.get("question_type") && (__p += "  ", model.collection.each(function (a, s) {
                if (__p += "  <li>  <label>（" + (null == (__t = Number(s) + 1) ? "" : __t) + "）</label>  ", Number(a.get("question_type")) < 6) {
                    if (__p += "  ", "4" == a.get("question_type")) {
                        __p += "  ";
                        var t = _.size(a.get("answer_json") || a.get("myanswer"));
                        __p += '  <div><input type="text" name="score" value="' + (null == (__t = a.get("score").subScore || 1) ? "" : __t) + '" data-n="' + (null == (__t = t) ? "" : __t) + '"> 分 x ' + (null == (__t = t) ? "" : __t) + "空</div>  "
                    } else __p += '  <div><input type="text" value="' + (null == (__t = a.get("score").subScore || 0) ? "" : __t) + '" name="score" /> 分</div>  ';
                    __p += "  "
                }
                __p += "  ", "6" == a.get("question_type") && (__p += "  ", t = _.size(a.get("answer_json") || a.get("myanswer")), __p += '  <div><input type="text" name="score" value="' + (null == (__t = a.get("score").subScore || 1) ? "" : __t) + '" data-n="' + (null == (__t = t) ? "" : __t) + '"> 分 x ' + (null == (__t = t) ? "" : __t) + "空</div>  "), __p += "  </li>  "
            }), __p += "  "), __p += "   ", "6" == model.get("question_type")) {
                __p += "  ";
                var _NN = _.size(model.get("answer_json") || model.get("myanswer"));
                __p += "  <li>  <div>  " + (null == (__t = qctypes[model.get("question_channel_type")]) ? "" : __t) + '：  <input type="text" name="score" value="' + (null == (__t = model.get("score").subScore || 1) ? "" : __t) + '" data-n="' + (null == (__t = _NN) ? "" : __t) + '"> 分 x ' + (null == (__t = _NN) ? "" : __t) + "空  </div>  </li>  "
            }
            __p += '   </ul>  <p>共计：<span class="s-total">0</span> 分</p>   '
        }
        __p += "  </form> </div>"
    }
    return __p
}, JST["dialogs/setscore-some"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="q-scorelist-con custom-modal" data-modal-title="根据题型批量设置分数：">  <ul>  ', _.each(data, function (a, s) {
        __p += "  ", "4" == s ? (__p += "  ", _.each(a, function (a, t) {
            __p += "  ", _NN = _.reduce(a, function (a, s) {
                return a + _.size(s.get("answer_json") || s.get("myanswer"))
            }, 0), __p += "  <li><em>" + (null == (__t = qctypes[t]) ? "" : __t) + '：</em><input type="text" name="score" data-n="' + (null == (__t = _NN) ? "" : __t) + '" value="0" data-ct="' + (null == (__t = [s, t].join(",")) ? "" : __t) + '" /> 分 x ' + (null == (__t = _NN) ? "" : __t) + "空</li>  "
        }), __p += "  ") : _.indexOf(["6", "7"], s) > -1 ? (__p += "  ", _.each(a, function (a, s) {
            __p += "  <li><em>" + (null == (__t = qctypes[s]) ? "" : __t) + '：</em><span class="words">该题型暂时不支持批量设置分数，请针对题单独设置分数！</span></li>  '
        }), __p += "  ") : (__p += "  ", _.each(a, function (a, t) {
            __p += "  <li><em>" + (null == (__t = qctypes[t]) ? "" : __t) + '：</em><input type="text" name="score" data-n="' + (null == (__t = a.length) ? "" : __t) + '" value="0" data-ct="' + (null == (__t = [s, t].join(",")) ? "" : __t) + '" /> 分 x ' + (null == (__t = a.length) ? "" : __t) + "题</li>  "
        }), __p += "  "), __p += "  "
    }), __p += '  <li class="sum"><em>共计：</em><strong class="t-score">0</strong> 分</li>  </ul> </div>';
    return __p
}, JST["dialogs/sort-bytype"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="new-side-types custom-modal" data-modal-title="试题排序">  <form>  <div class="label">需要排序的大题</div>  <div class="custom-checbox-g f-cb">  ', models.each(function (a) {
        __p += '  <span class="custom-checkbox ' + __e(a.cid == cid ? "checked" : "") + '" title="' + __e(a.get("_t")) + '">  <i class="iconw-checkbox"></i><input type="checkbox" name="type[]" value="' + __e(a.cid) + '" style="display:none" ' + __e(a.cid == cid ? "checked" : "") + " >" + __e(a.get("_t")) + "  </span>  "
    }), __p += '  </div>  <div class="label">排序方式</div>  <div class="custom-radio-g">  <span class="checked custom-radio"><i class="iconw-radio"></i><input type="radio" name="orderby" value="1" style="display:none" checked>难度从低到高排序</span>  <span class="custom-radio"><i class="iconw-radio"></i><input type="radio" name="orderby" value="-1" style="display:none">难度从高到低排序</span>  </div>  </form> </div>';
    return __p
}, JST["dialogs/subject-download"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div>  <link rel="stylesheet" href="/css/spriter-a.min.css?v=c8a2fa51d7">  <link rel="stylesheet" href="/css/spriter-mix.min.css?v=c8a2fa51d7">  <style>   .form-paper-download { width: 500px; }  .form-paper-download i { display: inline-block; }  .download-msg { padding-left: 0; padding-right: 0; }  .download-hint, .download-size, .download-type, .download-math, .download-beizu { padding-left: 10px; padding-right: 10px; padding-bottom: 13px; border-bottom: 0px; zoom: 1; }   .download-type-content .checkbox,  .download-type-con .radiobox { margin-right: 10px; }  </style>  <div class="form-paper-download">  <form class="P_download">   <input type="hidden" name="subject_id" value="' + (null == (__t = subject_id) ? "" : __t) + '">   <div class=" download-msg">  <div class="download-size">  <div class="download-text">纸张大小：</div>  <div class="size-con download-bd J_radio_group">  <div class="size-a4 radiobox checked">  <span>  <i class="icona-radio"></i>  <input type="radio" value="A4" name="size" checked style="display: none;">  </span>  <i class="icona-a4"></i>  <p>A4</p>  </div>  <div class="size-a3 radiobox">  <span>  <i class="icona-radio"></i>  <input type="radio" value="A3" name="size" style="display: none;">  </span>  <i class="icona-a3"></i>  <p>A3（双栏）</p>  </div>  <div class="size-a4 radiobox">  <span>  <i class="icona-radio"></i>  <input type="radio" value="B5" name="size" style="display: none;">  </span>  <i class="icona-a4"></i>  <p>B5</p>  </div>  <div class="size-a3 radiobox">  <span>  <i class="icona-radio"></i>  <input type="radio" value="B4" name="size" style="display: none;">  </span>  <i class="icona-a3"></i>  <p>B4（双栏）</p>  </div>  </div>   </div>  <div class="download-type">  <div class="download-text">试卷内容：</div>  <div class="download-type-content download-bd J_content">  <span class="checkbox checked">  <i class="icona-check"></i>  <input type="checkbox" style="display:none" value="an" checked name="content_type[]">  答案  </span>  <span class="checkbox">  <i class="icona-check"></i>  <input type="checkbox" style="display:none" value="kw" name="content_type[]">  考点  </span>  <span class="checkbox">  <i class="icona-check"></i>  <input type="checkbox" style="display:none" value="ex" name="content_type[]">  解析  </span>   <span class="checkbox">  <i class="icona-check"></i>  <input type="checkbox" style="display:none" value="sc" name="content_type[]">  小题分  </span>   </div>  </div>  </div>  <div class="download-type">  <div class="download-text">试卷类型：</div>  <div class="download-type-con download-bd J_radio_group">  <span class="radiobox">  <i class="icona-radio"></i>  <input type="radio" value="teacher" name="type" style="display: none;">  教师用卷（答案在题后）  </span>  <span class="radiobox checked">  <i class="icona-radio"></i>  <input type="radio" value="student" name="type" checked style="display: none;">  学生用卷（答案在卷尾）  </span>  </div>  </div>  <div class="download-hint">  <div class="download-bd">  ', isUnit && !limitStatus[3] && (__p += '  <div class="hint-con">  ', isOnDue ? (__p += "  ", limitStatus[0] ? (isEnd = !0, __p += '  <p>您为“组卷通”用户，此次下载<b class="highlight strong">免费</b></p>  <p class="small"> “组卷通” 到期时间：<b class="highlight">' + (null == (__t = moment(1e3 * productInfo.etime).format("YYYY-MM-DD")) ? "" : __t) + "</b></p>  ") : (isEnd = !1, isUnitOutLimit = !0, __p += '  <p><b class="highlight">' + (null == (__t = limitStatus[1]) ? "" : __t) + "</b></p>  "), __p += "  ") : (isEnd = !1, isUnitOutDue = !0, __p += "  "), __p += "  </div>  "), __p += "    ", isUnitOutLimit || (__p += "  ", !isEnd && PaperCount.isfree && (isEnd = !0, __p += '  <div class="hint-con">  <p>你下载过此专题，15天内下载<b class="highlight strong">免费</b></p>  </div>  '), __p += "    ", !isEnd && newvip.deadline ? (__p += '  <div class="hint-con">  ', newvip.coin > paperNum ? (isEnd = !0, __p += '  <p>您为vip用户，此次下载<b class="highlight">免费</b></p>  <p class="small">剩余下载次数:<b class="highlight">' + (null == (__t = newvip.coin) ? "" : __t) + "</b>, 到期时间:" + (null == (__t = moment(1e3 * newvip.deadline).format("YYYY-MM-DD")) ? "" : __t) + "</p>  ") : isUnitOutDue || (isEnd = !1), __p += "  ", 0 == newvip.coin ? __p += '  <p><b class="highlight">非常抱歉，组卷VIP已经到期！</b><a href="/payment/vip" target="_blank">立即续费</a></p>  ' : newvip.coin < paperNum && (__p += '  <p><b class="highlight">非常抱歉，组卷VIP权限的下载次数不足！</b><a href="/payment/vip" target="_blank">立即续费</a></p>  <p class="small">剩余试卷下载份数:<b class="highlight">' + (null == (__t = newvip.coin) ? "" : __t) + "</b>,到期时间:" + (null == (__t = moment(1e3 * newvip.deadline).format("YYYY-MM-DD")) ? "" : __t) + "</p>  "), __p += "  </div>  ") : !isEnd && isUnitOutDue && (__p += '  <div class="hint-con">  <p><b class="highlight">非常抱歉，“组卷通”已到期！</b></p>  </div>   '), __p += "     "), __p += "       ", isEnd && (__p += ' <div class="recharge-btn-box"><button class="recharge-btn" type="submit">下 载</button></div> '), __p += '    </div>  </div>  </form>  <div class="download-beizu">  <div class="download-text" style="padding-top:0;"> 温馨提示：</div>  <div class="download-bd">  <p class="small">1、VIP用户下载免费。 <a href="/payment/vip" target="_blank">开通VIP</a></p>  <p class="small">2、如有问题，请联系客服QQ：81321902 </p>  </div>  </div>  </div>  </div>';
    return __p
}, JST["dialogs/update-notice"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div> <style>  .system-upgrade .system-upgrade-wall, .system-upgrade .pop-wrap { display: block; }  .system-upgrade-wall { position: fixed; top:0; right:0; left:0; bottom:0; background:#000; opacity: 0.3; filter:alpha(opacity=30); z-index: 10000; display: none; }  .pop-wrap { width: 600px; background-color: #fff; position: absolute; top: 60px; left: 50%; margin-left: -300px; z-index: 12000; font-size: 14px; display: none; }  .update span:first-child { margin-right: 30px; }  .pop-banner img { display: block; }  .pop-banner { position: relative; }  .produce { position: absolute; top: -54px; left: 87px; }  .pop-banner>span { cursor: pointer; display: block; width: 36px; height: 36px; position: absolute; background: url(/images/upgrade/close.png); right: -15px; top: -16px;}  .main-wrap { padding: 20px 24px; max-height: 350px; overflow: auto; }  .pop-icon { width: 4px; height: 16px; background-color: #52c684; float: left; margin-right: 10px; }  .pop-title>h1 { font-size: 16px; float: left; }  .pop-detail { clear: both; }  #J_NoticeModal .pop-content { margin-top: 20px; text-align: left; margin:0; }  .pop-detail li { line-height: 22px; margin-bottom: 5px; }  .pop-detail li a { color: #52c684; }  .pop-detail li a:hover { text-decoration:underline; }  .pop-detail { padding-top: 10px;}  .pop-title { overflow: hidden; margin-top: 15px; }  #J_NoticeModal .pop-content h1 { margin-bottom: 0; font-size: 16px; font-weight: bold; }  </style>  <div class="system-upgrade-wall"></div>  <div class="pop-wrap" id="J_NoticeModal">  <div class="pop-banner">  <img src="/images/upgrade/pop-banner.png" alt="二一组卷v3.0更新公告">  <img src="/images/upgrade/produce.png" alt="二一组卷v3.0更新公告" class="produce">  <span class="icon-close"></span>  </div>  <div class="main-wrap">  <div class="update">  <span>更新版本：V3.0</span>  <span>更新时间：2018年6月8日</span>  </div>  <div class="pop-content">  <div class="pop-title">  <div class="pop-icon"></div>  <h1>更新内容</h1>  </div>  <ul class="pop-detail">  <li>1、优化了组卷首页布局，首页新增了优质试卷推送！并且在首页新增了右侧边栏功能，支持快速联系客服、提交意见反馈、关注公众号等操作；</li>  <li>2、手动组卷新增了右侧边栏功能，选择的试题会自动添加到右侧边栏的试题篮中，支持点击伸缩展开；新增了试题篮一键清空试题功能；</li>  <li>3、优化了试卷编辑、预览页面，优化了组卷保存下载流程；</li>  <li>4、优化了在线测试提交后的作答报告页面，测评统计数据更加直观、清晰；</li>  <li>5、试卷编辑和预览页面新增了分享功能，支持一键分享试卷，实现资源共享；</li>  <li>6、优化了手动组卷、智能组卷、细目表组卷底层算法，生成的试卷更加精准；</li>  </ul>  </div>  \x3c!-- <div class="pop-content">  <div class="pop-title">  <div class="pop-icon"></div>  <h1>二、其他</h1>  </div>  <ul class="pop-detail">  <li>1、优化了网页与word的题号样式问题；</li>  <li>2、优化了下载下来的word，缺少阅卷人、分卷注释等信息的bug；</li>  <li>3、优化了系统不稳定，偶尔崩溃的现象；</li>  <li>4、优化了VIP购买机制，1个用户可购买多个学科的VIP。</li>  </ul>  </div> --\x3e  </div>  </div> </div>';
    return __p
}, JST["basket/basket-body"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="scorll">  ', 0 == _.size(type_count) ? __p += '  <div class="basket-empty">您的试题篮还没有试题，马上添加试题吧！</div>  ' : (__p += '  <div class="c-basket-hd"> 试题总量（<span class="c-num">' + (null == (__t = total) ? "" : __t) + '</span>） </div>  <div class="c-basket-bd">  ', _.each(type_count, function (a) {
        __p += '  <div class="c-basket-line">  <div class="c-type">  <span class="c-type-tit fl" title="' + (null == (__t = a._t) ? "" : __t) + '">' + (null == (__t = a._t) ? "" : __t) + '</span>  <span class="c-type-sum fr"><em class="c-num">' + (null == (__t = a.count) ? "" : __t) + '</em>题</span>  </div>  <a href="javascript:;" class="c-del J_del_type" data-name="' + (null == (__t = a._t) ? "" : __t) + '"><i class="iconw-del2"></i></a>  </div>  '
    }), __p += '  <a href="javascript:;" class="c-clear J_emtpy_data">清空试题</a>  ', Number(pid) && user.isAdmin ? __p += '  <a href="/#paper/edit/' + (null == (__t = pid || "") ? "" : __t) + "?from=0&xd=" + (null == (__t = xd) ? "" : __t) + "&chid=" + (null == (__t = chid) ? "" : __t) + '" class="c-btn">编辑试卷</a>  <a href="javascript:;" class="c-btn J_cancel_data">取消编辑</a>  ' : __p += '  <a href="javascript:;" class="c-btn J_redirect_to_edit">试卷预览</a>  ', __p += "  </div>  "), __p += " </div>";
    return __p
}, JST["basket/basket-handler"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="c-basket-btn">  <div class="c-basket-mc">  <i class="iconw-box"></i>  <p>试题篮</p>  <span>' + (null == (__t = total) ? "" : __t) + "</span>  </div> </div>";
    return __p
}, JST["manualpage/filter-box"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<span class="mt">  ' + (null == (__t = title) ? "" : __t) + '： </span> <div class="w fl">  <div class="mc hide-mc">  <ul class="filter-item-wrap cfx ">  ', _.each(list, function (a) {
        __p += '  <li><a class="' + (null == (__t = a.value == selected ? "active" : "") ? "" : __t) + '" data-param="' + (null == (__t = [a.name, a.value].join("=")) ? "" : __t) + '">' + (null == (__t = a.text) ? "" : __t) + "</a></li>   "
    }), __p += '   </ul>  <div class="filter-more">   <span><i class="iconw-more-down-tiggle"></i>更多</span>  </div>  </div> </div>';
    return __p
}, JST["manualpage/filter-drop"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<dd>  <a class="filter-sel-hd"><span class="J_filter_tit">' + (null == (__t = title) ? "" : __t) + '</span><i class="iconw-filter-down"></i></a>  <ul class="' + (null == (__t = "short" == style ? "filter-type" : "filter-item-wrap cfx") ? "" : __t) + '">  ', _.each(list, function (a) {
        __p += '  <li><a class="' + (null == (__t = a.value == selected ? "active" : "") ? "" : __t) + '" data-param="' + (null == (__t = [a.name, a.value].join("=")) ? "" : __t) + '">' + (null == (__t = a.text) ? "" : __t) + "</a></li>  "
    }), __p += "  </ul> </dd>";
    return __p
}, JST["manualpage/manual-tree-mt"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="mt-hd clearfix">  <div class="fl mt-tit" title="' + (null == (__t = cur_version.title) ? "" : __t) + (null == (__t = cur_grade.title) ? "" : __t) + '">  <span>' + (null == (__t = cur_version.title) ? "" : __t) + "</span>  <em>·</em>  <span>" + (null == (__t = cur_grade.title) ? "" : __t) + '</span>  </div>  <i class="iconw-nav-down"></i> </div> <div class="mt-bd" id="J_TreeVersionForm">  <h3>教材选择</h3>  <form action="">  <div class="ff clearfix">  <label>版本：</label>  <select name="chid" class="J_version">  ', _.each(versions, function (a) {
        __p += '  <option value="' + (null == (__t = a.id) ? "" : __t) + '" ' + (null == (__t = a.id == sel_version.id ? "selected" : "") ? "" : __t) + " >" + (null == (__t = a.title) ? "" : __t) + "</option>  "
    }), __p += '  </select>  </div>  <div class="ff clearfix">  <label>年级：</label>  <select name="bookversionid" class="J_grade">  \x3c!-- <option value="">请选择年级</option> --\x3e  ', _.each(grades, function (a) {
        __p += '  <option value="' + (null == (__t = a.id) ? "" : __t) + '" ' + (null == (__t = a.id == sel_grade.id ? "selected" : "") ? "" : __t) + " >" + (null == (__t = a.title) ? "" : __t) + "</option>  "
    }), __p += '   </select>  </div>  <button type="submit">确定</button>  </form> </div>';
    return __p
}, JST["partial/crumbs"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="crumbs g-cw"><i class="iconw-fixed"></i><span>当前位置：</span> <a href="">首页</a><span>&gt;</span><a href="javascript:;">' + (null == (__t = [xd, chid].join("")) ? "" : __t) + "</a></div>";
    return __p
}, JST["partial/foot"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="g-cw">  <div class="footer-bd cfx">  <div class="footer-item">  <h3>公司介绍</h3>  <p>Company Introduction</p>  <ul class="w50">  <li><a href="//www.21cnjy.com/about/about_about.php" target="_blank"><b></b>公司简介</a></li>  <li><a href="/help.html/copyright" target="_blank"><b></b>版权声明</a></li>  <li><a href="//www.21cnjy.com/about/about_company-news.php" target="_blank"><b></b>公司动态</a></li>  <li><a href="/help.html/feedback" target="_blank"><b></b>意见反馈</a></li>  </ul>  </div>   <div class="footer-item">  <h3>服务介绍</h3>  <p>Service Introduction</p>  <ul>  <li><a href="/help.html/zujuan" target="_blank"><b></b>组卷通服务</a></li>  <li><a href="/help.html/vip" target="_blank"><b></b>VIP会员服务</a></li>  <li><a href="/help.html/diy" target="_blank"><b></b>学校定制化服务</a></li>  </ul>  </div>  <div class="footer-item">  <h3>帮助中心</h3>  <p>Help center</p>  <ul class="w50">  <li><a href="/help.html/demo" target="_blank"><b></b>视频帮助</a></li>  <li><a href="/help.html/faq" target="_blank"><b></b>常见问题</a></li>  <li><a href="/help.html/makepaper" target="_blank"><b></b>如何组卷</a></li>  <li><a href="/help.html/download" target="_blank"><b></b>下载试卷</a></li>  <li><a href="/help.html/test" target="_blank"><b></b>在线测试</a></li>  <li><a href="/new" target="_blank"><b></b>最新试题</a></li>   </ul>  </div>  <div class="footer-item">  <div class="ewm-box">  <img src="/build/images/ewm1.png">  <P><a href="javascript:;">二一教育</a></P>  </div>  </div>  <div class="footer-item">  <div class="contact-msg">  <h4>400-637-9991</h4>  <p>周一至周五 8:30-17:30</p>  </div>  <a href="javascript:;" class="contact-btn jBizQQWPA" ><i class="iconw-qq"></i>在线咨询客服</a>  </div>  </div>  <div class="footer-adress">  <P>2006-' + (null == (__t = (new Date).getFullYear()) ? "" : __t) + " 二一教育股份有限公司 <a>粤ICP备11039084号 </a> 粤教信息(2013)2号 </P> <p>  <span>邮编：518000</span>  <span>地址：深圳市龙岗区横岗街道深峰路3号启航商务大厦5楼5M</span>  </p>  </div> </div>";
    return __p
}, JST["partial/function-line"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="c-fun-bd">  <div class="c-fun-box">  <div class="basket__handler"></div>  ', user.co_partner || (__p += '  <div class="c-fun-blcok">  <div class="c-fun-item">  <a href="javascript:;" class="jBizQQWPA">  <i class="iconw-kf"></i>  </a>  <div class="c-fun-tip">  <b class="iconw-tri-r"></b>  QQ客服  </div>  </div>  <div class="c-fun-item">  <a href="javascript:;">  <i class="iconw-gn"></i>  </a>  <div class="c-fun-tip c-ewm">  <b class="iconw-tri-r"></b>  <div class="c-ewm-item">  <img src="/build/images/ewm1.png">  <p>二一教育</p>  </div>  <div class="c-ewm-item">  <img src="/build/images/ewm2.png">  <p>二一组卷官方交流群1<br>(142401456)</p>  </div>  </div>  </div>  <div class="c-fun-item">  <a href="/help.html/feedback">  <i class="iconw-fk"></i>  </a>  <div class="c-fun-tip">  <b class="iconw-tri-r"></b>  意见反馈  </div>  </div>  <div class="c-fun-item">  <a href="javascript:;" class="J_gotop">  <i class="iconw-top"></i>  </a>  <div class="c-fun-tip">  <b class="iconw-tri-r"></b>  返回顶部  </div>  </div>  </div>  '), __p += '  </div>  </div> <div class="c-basket basket__body"></div>';
    return __p
}, JST["partial/inner-foot"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="inner-footer">  <div class="g-cw">  <div class="footer-adress">  <P>2006-' + (null == (__t = (new Date).getFullYear()) ? "" : __t) + " 二一教育股份有限公司 <a>粤ICP备11039084号 </a> 粤教信息(2013)2号 </P>  <p>  <span>邮编：518000</span>  <span>地址：深圳市龙岗区横岗街道深峰路3号启航商务大厦5楼5M</span>  </p>  </div>  </div> </div>";
    return __p
}, JST["partial/inner-head"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="top-inner-head">  <div class="g-cw top-head-bd cfx">  <div class="fl inner-logo">  ', user.co_partner ? __p += '  <div class="co-partner--logo--inner">  <a href="/#">  <img src="' + (null == (__t = user.co_partner.logopic) ? "" : __t) + '" alt="' + (null == (__t = user.co_partner.realName) ? "" : __t) + '" title="' + (null == (__t = user.co_partner.realName) ? "" : __t) + '" />  <span>' + (null == (__t = user.co_partner.realName) ? "" : __t) + "</span>  </a>  </div>  " : __p += '  <a href="/#"><img src="/build/images/test_logo_w.png"></a>  ', __p += '  </div>  <div class="w fl J_top_search_form"></div>  <ul class="top-nav-cn fr">  <li class="p-20">  <a href="/#" class="menu-tit">网站首页</a>  </li>  <li class="sep"></li>  <li class="p-20">  <a href="/help.html" class="menu-tit">帮助中心</a>  </li>  ', user.co_partner || (__p += '  <li class="sep"></li>  <li class="menu-item">  <a href="/payment/vip" class="menu-tit"><span>购买服务<i class="iconw-search-down-w"></i></span></a>  <div class="menu-item-inner">  <a href="/payment/vip" target="_blank">VIP服务</a>  <a href="/help.html/request" target="_blank">组卷通服务</a>  <a href="/payment/vip-card" target="_blank" class="L_islogin">激活VIP</a>  </div>  </li>  <li class="sep"></li>  <li class="menu-item">  <a href="javascript:;" class="menu-tit" target="_blank"><span>旗下站点<i class="iconw-search-down-w"></i></span></a>  <div class="menu-item-inner">  <a href="https://www.21cnjy.com/zhitongche/index" target="_blank">校网通</a>  <a href="http://www.jbzyk.com" target="_blank">校本资源库</a>  <a href="http://tiku.21cnjy.com/" target="_blank">在线题库</a>  <a href="https://www.21cnjy.com/video.php" target="_blank">名师课堂</a>  <a href="https://www.21cnjy.com/productshow/index.php?prod=school" target="_blank">数字化校园</a>  <a href="https://www.21cnjy.com/productshow/index.php?prod=yun" target="_blank">区域云平台</a>  <a href="https://www.21cnjy.com/productshow/app/" target="_blank">二一教育APP</a>  </div>  </li>  <li class="sep"></li>  '), __p += "  \x3c!--登录前--\x3e  ", user.uid ? (__p += '  \x3c!--登录后--\x3e  <li class="user-msg p-20">  <a href="/ucenter/u-msg" class="menu-tit">消息<span>(' + (null == (__t = user["ur-mess"]) ? "" : __t) + ')</span></a>  </li>  <li class="sep"></li>  <li class="menu-item user-item">  <a href="javascript:;" class="menu-tit">  <span class="cfx">  <i class="iconw-user-w"></i>  <span class="l-limit" title="' + (null == (__t = user.realname) ? "" : __t) + '">' + (null == (__t = user.realname) ? "" : __t) + '</span>  <i class="iconw-search-down-w"></i>  </span>  </a>  <div class="menu-item-inner">  <a href="/ucenter/u-download" target="_blank">下载记录</a>  <a href="/ucenter/u-zujuan" target="_blank">组卷记录</a>  <a href="/ucenter/u-ceshi" target="_blank">测试记录</a>  <a href="/ucenter/u-shiti" target="_blank">我的收藏</a>  <a href="/ucenter/u-question-wrong" target="_blank">错题本</a>  ', user.co_partner || (__p += '<a href="/ucenter/index" target="_blank">个人信息</a>'), __p += '  <a shref="/site/logout" class="J_logout">退出</a>  </div>  </li>  ') : (__p += '  <li class="login.html-item">  <a href="/site/login.html" class="top-login.html-item">登录</a>  ', user.co_partner || (__p += '  <a href="https://passport.21cnjy.com/site/register?jump_url=http://zujuan.21cnjy.com/" class="top-register-item">注册</a>  '), __p += "  </li>  "), __p += "  </ul>  </div> </div>";
    return __p
}, JST["partial/layout"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<!DOCTYPE html> <html>  <head> <meta charset="utf-8" /> <meta name="renderer" content="webkit"> <meta name="force-rendering" content="webkit"> <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"> <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" /> <title>组卷</title> <meta name="keywords" content="关键词" /> <meta name="description" content="描述" /> <script src="lib/jquery-1.9.1.min.js"><\/script> <script>  // script <\/script>  </head>  <body>        </body>  </html>';
    return __p
}, JST["partial/list-loading"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="loading-wrap">  <div class="loading-bg"></div>  <div class="loading"></div> </div>';
    return __p
}, JST["partial/login"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<link rel="stylesheet" href="/css/spriter-a.min.css?v=c8a2fa51d7"> <link rel="stylesheet" href="/css/spriter-mix.min.css?v=c8a2fa51d7"> <link rel="stylesheet" href="/css/reg.min.css?v=c8a2fa51d7"> <style>  .reg-form { z-index: 1110; left: 50%; margin-left: -180px; top: 0; }  .reg-form i { display: inline-block; vertical-align: middle; }  .reg-mask { position: fixed; left: 0; top: 0; bottom: 0; right: 0; background: #000; opacity: 0.5; filter: alpha(opacity=50); z-index: 1000; }  .reg-form .btn-close { position: absolute; right: 16px; top: 16px; display: block; text-indent: -9999px; width: 24px; height: 24px; background: url(/images/close_24.png) no-repeat center center; }  .reg-form .btn-close:hover { opacity: 0.8; } </style> <div class="reg-mask"></div> <div class="reg-form" style="top: 182px;">  <ul>  <li> <a href="javascript:;" class="reg-active">登录</a> </li>  </ul>  <a class="btn-close J_CloseForm">x</a>  <form id="J_LoginForm" class="reg-form-detail" action="/login.html" method="post">  <input type="hidden" name="_csrf" value="' + (null == (__t = csrf._csrf) ? "" : __t) + '">  <div class="reg-form-input">  <label for="account" class="placeholder">请输入网站账号/手机号码/邮箱</label>  <input type="text" name="LoginForm[username]" class="validate" id="account" placeholder="请输入网站账号/手机号码/邮箱">  <div class="fm-warn"> <p>账号不能为空！</p> <i></i> </div>   </div>  <div class="reg-form-input">  <label for="password" class="placeholder">请输入密码</label>  <input type="password" name="LoginForm[password]" class="validate" id="password" placeholder="请输入密码">  <div class="fm-warn"> <p>密码不能为空！</p> <i></i> </div>   </div>  <div class="login.html-line">  <div class="login.html-auto">  <span class="checkbox checked f-usn" onselectstart="return false">  <i class="icona-check"></i>  <input type="checkbox" checked="" value="1" class="f-dn" name="LoginForm[rememberMe]">自动登录</span>  </div>  <div class="login.html-pwd">  <a href="http://passport.21cnjy.com/site/password-find?jump_url=http://zujuan.21cnjy.com/paper/new-index?tree_type=exam"  target="_blank">忘记密码</a>  </div>  </div>  <div class="reg-btn">  <button type="submit">登录</button>  </div>  </form>  ', current_user.co_partner || (__p += '  <div class="login.html-others">  <div class="login.html-others-method">其它登录方式：  <a href="http://passport.21cnjy.com/site/show-qr-code?jump_url=http://zujuan.21cnjy.com">  <i class="icona-wxloginbtn"> </i>  </a>  <a href="http://21cnjy.com/qqconnect?jump_url=http://zujuan.21cnjy.com">  <i class="icona-qqloginbtn"> </i>  </a>  </div>  <div class="login.html-reg">  <a target="_blank" href="http://passport.21cnjy.com/site/register?jump_url=http://zujuan.21cnjy.com">免费注册  <i class="icona-right-arrow"></i>  </a>  </div>   </div>  '), __p += " </div>";
    return __p
}, JST["partial/main-head"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="top-head">  <div class="g-cw top-head-bd cfx">  <span class="fl slogan">' + (null == (__t = user.co_partner ? "欢迎来到" + user.co_partner.realName + "组卷平台" : "二一教育旗下产品") ? "" : __t) + '</span>  <ul class="top-nav-cn fr">  ', user.co_partner || (__p += '  <li class="p-20">  <a href="/#" class="menu-tit">网站首页</a>  </li>  <li class="sep"></li>  '), __p += '  <li class="p-20">  <a href="/help.html" class="menu-tit">帮助中心</a>  </li>  ', user.co_partner || (__p += '  <li class="sep"></li>  <li class="menu-item">  <a href="/payment/vip" class="menu-tit" target="_blank"><span>购买服务<i class="iconw-search-down"></i></span></a>  <div class="menu-item-inner">  <a href="/payment/vip" target="_blank">VIP服务</a>  <a href="/help.html/request" target="_blank">组卷通服务</a>  <a href="/payment/vip-card" target="_blank" class="J_islogin">激活VIP</a>  </div>  </li>  <li class="sep"></li>  <li class="menu-item">  <a href="javascript:;" class="menu-tit" target="_blank"><span>旗下站点<i class="iconw-search-down"></i></span></a>  <div class="menu-item-inner">  <a href="https://www.21cnjy.com/zhitongche/index" target="_blank">校网通</a>  <a href="http://www.jbzyk.com" target="_blank">校本资源库</a>  <a href="http://tiku.21cnjy.com/" target="_blank">在线题库</a>  <a href="https://www.21cnjy.com/video.php" target="_blank">名师课堂</a>  <a href="https://www.21cnjy.com/productshow/index.php?prod=school" target="_blank">数字化校园</a>  <a href="https://www.21cnjy.com/productshow/index.php?prod=yun" target="_blank">区域云平台</a>  <a href="https://www.21cnjy.com/productshow/app/" target="_blank">二一教育APP</a>  </div>  </li>  <li class="sep"></li>  '), __p += "  ", user.uid ? (__p += '  \x3c!--登录后--\x3e  <li class="user-msg p-20">  <a href="/ucenter/u-msg" class="menu-tit" target="_blank">消息<span>(' + (null == (__t = user["ur-mess"]) ? "" : __t) + ')</span></a>  </li>  <li class="sep"></li>  <li class="menu-item user-item">  <a href="javascript:;" class="menu-tit">  <span class="cfx">  <i class="iconw-user"></i>  <span class="l-limit" title="' + (null == (__t = user.realname) ? "" : __t) + '">' + (null == (__t = user.realname) ? "" : __t) + '</span>  <i class="iconw-search-down"></i>  </span>  </a>  <div class="menu-item-inner">  <a href="/ucenter/u-download" target="_blank">下载记录</a>  <a href="/ucenter/u-zujuan" target="_blank">组卷记录</a>  <a href="/ucenter/u-ceshi" target="_blank">测试记录</a>  <a href="/ucenter/u-shiti" target="_blank">我的收藏</a>  <a href="/ucenter/u-question-wrong" target="_blank">错题本</a>  ', user.co_partner || (__p += '<a href="/ucenter/index" target="_blank">个人信息</a>'), __p += '  <a shref="/site/logout" class="J_logout">退出</a>  </div>  </li>  ') : (__p += '  \x3c!--登录前--\x3e  <li class="login.html-item">  <a class="top-login.html-item">登录</a>  ', user.co_partner || (__p += '  <a href="https://passport.21cnjy.com/site/register?jump_url=http://zujuan.21cnjy.com/" class="top-register-item">注册</a>  '), __p += "  </li>  "), __p += '  </ul>  </div> </div>   <div class="top-search">  <div class="g-cw cfx">  <div class="logo-block">  ', user.co_partner ? __p += '  <div class="co-partner--logo">  <a href="/#">  <img src="' + (null == (__t = user.co_partner.logopic) ? "" : __t) + '" alt="' + (null == (__t = user.co_partner.realName) ? "" : __t) + '" title="' + (null == (__t = user.co_partner.realName) ? "" : __t) + '" />  <span>' + (null == (__t = user.co_partner.realName.toString().slice(0, 10)) ? "" : __t) + "</span>  </a>  </div>  " : __p += '  <a href="/#"><img src="/build/images/test_logo.png"></a>  ', __p += '  </div>  <div class="w fl J_top_search_form"></div>  ', user.co_partner ? __p += '  <div class="service-block">  <p class="test-data">总试题数量：<span>' + (null == (__t = stat.primary_count.count_question) ? "" : __t) + '</span></p>  <p class="test-data">总试卷数量：<span>' + (null == (__t = stat.primary_count.count_paper) ? "" : __t) + "</span></p>  </div>  " : __p += '  <div class="service-block">  <a href="/payment/vip" class="service-item">  <img src="/build/images/VIP.gif">  <strong>VIP申请</strong>  </a>  <a href="/help.html/request" class="service-item">  <img src="/build/images/xwt.gif">  <strong>组卷通申请</strong>  </a>  </div>  ', __p += "  </div> </div>";
    return __p
}, JST["partial/nav"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="g-cw cfx">  <div class="main-cate fl">  <a href="javascript:;" class="current">  当前：<span>' + (null == (__t = xd_chid) ? "" : __t) + '</span>  <i class="iconw-nav-down"></i>  </a>  <div class="main-cate-menu">  ', _.each(data, function (a, s) {
        __p += '  <div class="item">  <h3>' + (null == (__t = xds[s]) ? "" : __t) + '</h3>  <div class="cfx">  ', _.each(a, function (a, t) {
            __p += '  <a href="javascript:;" data-xdchid="' + (null == (__t = [s, t].join(",")) ? "" : __t) + '" class="' + (null == (__t = t == user.chid && user.xd == s ? "active" : "") ? "" : __t) + '">' + (null == (__t = a) ? "" : __t) + "</a>  "
        }), __p += "  </div>  </div>  "
    }), __p += '  </div>  </div>  <div class="main-nav fl">  <ul class="cfx">  <li>  <a href="/#/" class="nav-tit ' + (null == (__t = "index" == cur_nav ? "active" : "") ? "" : __t) + '">首页</a>  </li>  <li class="nav-menu">  <a href="/questions/categories" class="nav-tit ' + (null == (__t = "questions" == cur_nav ? "active" : "") ? "" : __t) + '">手动组卷</a>  <div class="nav-menu-inner">  <a href="/questions/categories" class="' + (null == (__t = "questions/categories" == cur_subnav ? "active" : "") ? "" : __t) + '">章节同步选题</a>  <a href="/questions/knowledges" class="' + (null == (__t = "questions/knowledges" == cur_subnav ? "active" : "") ? "" : __t) + '">知识点选题</a>  </div>  </li>  <li class="nav-menu">  <a href="/#smart/categories" class="nav-tit ' + (null == (__t = "smart" == cur_nav ? "active" : "") ? "" : __t) + '">智能组卷</a>  <div class="nav-menu-inner">  <a href="/#smart/categories" class="' + (null == (__t = "#smart/categories" == cur_subnav ? "active" : "") ? "" : __t) + '">章节智能组卷</a>  <a href="/#smart/knowledges" class="' + (null == (__t = "#smart/knowledges" == cur_subnav ? "active" : "") ? "" : __t) + '">知识点智能组卷</a>  <a href="/#smart/spec-list" class="' + (null == (__t = "#smart/spec-list" == cur_subnav ? "active" : "") ? "" : __t) + '">双向细目表组卷</a>  </div>  </li>  <li class="nav-menu">  <a href="/#papers/sync" class="nav-tit ' + (null == (__t = "paper" == cur_nav ? "active" : "") ? "" : __t) + '">试卷库</a>  <div class="nav-menu-inner">  <a href="/#papers/sync" class="' + (null == (__t = "#papers/sync" == cur_subnav ? "active" : "") ? "" : __t) + '">同步试卷类型</a>  <a href="/#papers/exam" class="' + (null == (__t = "#papers/exam" == cur_subnav ? "active" : "") ? "" : __t) + '">测试试卷类型</a>  <a href="/#papers/real" class="' + (null == (__t = "#papers/real" == cur_subnav ? "active" : "") ? "" : __t) + '">真卷/模拟试卷类型</a>  </div>  </li>  <li class="nav-menu">  <a href="/#subject/list" class="nav-tit ' + (null == (__t = "subject" == cur_nav ? "active" : "") ? "" : __t) + '">专题特供</a>  </li>  </ul>  </div>  </div>';
    return __p
}, JST["partial/not-allowed"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="bridge-bd" style="padding-top: 44px;">  <h2 class="bridge-title"> (#error) 页面出错。</h2>   <h2 class="bridge-title">sorry！ 系统出错了，码农正在抢修中！</h2>  <div> 请稍候再试，或<a href="/#">【返回首页】</a> </div> </div>';
    return __p
}, JST["partial/not-found"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="bridge-bd" style="padding-top: 44px;">  <h2 class="bridge-title"> (#404) 页面未找到。</h2>   <h2 class="bridge-title">sorry！ 系统出错了，码农正在抢修中！</h2>  <div> 请稍候再试，或<a href="/#">【返回首页】</a> </div> </div>';
    return __p
}, JST["partial/paper-undefind"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="undefind-data">  <img src="/images/blank.png" class="undefind-img">  <div class="undefind-tit">筛选无结果，去组个试卷试试吧</div>  <div class="back-line">  <a href="/#" class="gohome"><span>←</span>返回首页</a>  ', "categories" == goto ? __p += '  <a href="/questions/categories" class="other">【立即组卷】</a>  ' : __p += '  <a href="/questions/knowledges" class="other">【立即组卷】</a>  ', __p += "  </div> </div>";
    return __p
}, JST["partial/search"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="searchbox-bd">  <form class="search-form" action="/#search" method="GET">  <div class="search-wrap cfx">  <div class="new-search-type">  <span class="search-select">  <em class="searc-txt">' + (null == (__t = "paper" == type ? "试卷" : "试题") ? "" : __t) + '</em>  <i class="iconw-search-down"></i>  </span>  <ul class="new-search-list">  <li>  <input type="radio" name="type" value="paper" ' + (null == (__t = "paper" == type ? "checked" : "") ? "" : __t) + ' style="display: none;">  <span>试卷</span>  </li>  <li>  <input type="radio" name="type" value="question" ' + (null == (__t = "question" == type ? "checked" : "") ? "" : __t) + ' style="display: none;">  <span>试题</span>  </li>  </ul>  </div>  <div class="search">  <input type="text" name="content" class="search-inputtxt" value="' + (null == (__t = content ? content.slice(0, 200) : "") ? "" : __t) + '" placeholder="请输入搜索关键词">  <input type="hidden" name="top_search" value="1" />  <span class="btn-search">   <button type="submit" id="J_submit"><i class="iconw-search"></i></button>  </span>  </div>  </div>  </form> </div>';
    return __p
}, JST["partial/undefind-know"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="undefind-data">  <img src="/images/blank.png" class="undefind-img">  <div class="undefind-tit">当前学科下暂不支持知识点选题</div>  <div class="back-line">  <a href="/#" class="gohome"><span>←</span>返回首页</a>  <a href="/questions/categories" class="other">章节同步选题<span>→</span></a>  </div> </div>';
    return __p
}, JST["partial/undefind"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="undefind-data">  <img src="/images/blank.png" class="undefind-img">  <div class="undefind-tit">当前学科下暂不支持章节同步选题</div>  <div class="back-line">  <a href="/#" class="gohome"><span>←</span>返回首页</a>  <a href="/questions/knowledges" class="other">知识点选题<span>→</span></a>  </div> </div>';
    return __p
}, JST["searchpage/search-qblock"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="loading-wrap">  <div class="loading-bg"></div>  <div class="loading"></div> </div>  ', data.total ? __p += " <ul> </ul> " : __p += ' <div class="empty-ffxi">  <img src="/images/blank.png">  <p>没有相关试题，换个条件试试吧。</p> </div> ';
    return __p
}, JST["searchpage/search-tblock"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="loading-wrap">  <div class="loading-bg"></div>  <div class="loading"></div> </div> ', _.size(data.list) ? (__p += "  <ul>  ", _.each(data.list, function (a) {
        __p += '  <li>  <div class="item-wrap">  <div class="item-img">  <a href="/paper/view/' + (null == (__t = a.pid) ? "" : __t) + '" traget="_blank"><img src="/build/images/shijuan.png"></a>  </div>  <div class="w fl">  <div class="item-mc">  <h3 class="item-tit"><a href="/paper/view/' + (null == (__t = a.pid) ? "" : __t) + '" traget="_blank" title="' + (null == (__t = a.origin_title) ? "" : __t) + '">' + (null == (__t = a.title) ? "" : __t) + '</a></h3>  <div class="item-attr">  <span><i class="iconw-time"></i>修改时间：' + (null == (__t = myUtils.formatTimestamp(a.examine_time)) ? "" : __t) + '</span>  <span><i class="iconw-download"></i>下载次数：' + (null == (__t = a.use_num) ? "" : __t) + '</span>  <span><i class="iconw-leixing"></i>类型：' + (null == (__t = a.typeName) ? "" : __t) + '</span>  </div>  </div>  </div>  <div class="item-act">  <a class="download-btn" onclick="Application.popupPaperDownload(' + (null == (__t = a.pid) ? "" : __t) + ')">下载</a>  <a class="fun-btn J_analyze" data-pid="' + (null == (__t = a.pid) ? "" : __t) + '" onclick="Application.AnalyzeChart.show(' + (null == (__t = a.pid) ? "" : __t) + ')" ><span class="iconw-fenxi2"></span>试卷分析</a>  </div>  </div>  </li>  '
    }), __p += " </ul> ") : __p += ' <div class="empty-ffxi">  <img src="/images/blank.png">  <p>筛选无结果，换个条件试试吧。</p> </div> ';
    return __p
}, JST["papers/edit-grids"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) {
        __p += '<div class="club-summary f-cb">  <div class="t1">分数：<strong>' + (null == (__t = ques_score) ? "" : __t) + '分</strong></div>  <div class="w"><span class="t2">题数：<strong>' + (null == (__t = ques_num) ? "" : __t) + '</strong></span></div>  <div class="t3">难度：<strong>' + (null == (__t = ques_difficulty) ? "" : __t) + "</strong></div> </div> ";
        var NN = 0;
        _.each(part_views, function (a, s) {
            __p += ' <div class="edit-handle-hd J_type_hd">  <span>' + (null == (__t = a.model.get("name")) ? "" : __t) + '</span>  <div class="dash-line"></div> </div> <div class="edit-mc J_type_ques" data-cid="' + (null == (__t = a.model.cid) ? "" : __t) + '">  ', _.each(type_group[a.cid], function (a, s) {
                __p += '  <div class="J_drag_type edit-mc-item" data-cid="' + (null == (__t = a.model.cid) ? "" : __t) + '">  <div class="edit-handle-mt">  <strong title="' + (null == (__t = a.model.get("_t")) ? "" : __t) + '"><span>' + (null == (__t = myUtils.chinesesn(NN++)) ? "" : __t) + "、</span>" + (null == (__t = a.model.get("_t")) ? "" : __t) + '</strong>  <div class="edit-act">  <a href="javascript:;" class="J_sortby_type J_dis_drag" data-cid="' + (null == (__t = a.model.cid) ? "" : __t) + '">排序</a>  <a href="javascript:;" class="J_del_type J_dis_drag" data-cid="' + (null == (__t = a.model.cid) ? "" : __t) + '">删除</a>  </div>  </div>  <div class="edit-handle-bd">  <ul class="item-num cfx">  ', _.each(ques_group[a.cid], function (a, s) {
                    __p += '  <li class="J_drag_grid" data-cid="' + (null == (__t = a.model.cid) ? "" : __t) + '"><span>' + (null == (__t = a.model.get("_n") + 1) ? "" : __t) + "</span></li>  "
                }), __p += "  </ul>  </div>  </div>  "
            }), __p += " </div> "
        })
    }
    return __p
}, JST["papers/manual-edit-question"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="paper-part">  <div class="paper-title">  <h2>  <span class="edit-text">第Ⅰ卷 客观题</span>  <input type="text" style="display: none;">  </h2>   <p>  <span class="edit-text">第Ⅰ卷的注释</span>  <input type="text" style="display: none;">  </p>  </div>  <div class="paper-section">   <div class="paper-type">  \x3c!--答题评分区--\x3e  <table>  <tr>  <th>阅卷人</th>  <td></td>  </tr>  <tr>  <th>得分</th>  <td></td>  </tr>  </table>  <h3>  <span class="order">一</span>、  <span class="edit-text">选择题</span>  <input type="text" name="" value="" style="display: none">  <span>(共<b class="t-num">6</b>题；共<b class="t-score">12</b>分)</span>  </h3>  <div class="paper-fun-list cfx">  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-fenshu"></i>批量设定得分  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-sort"></i>排序  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-del"></i>删除  </a>  </div>  </div>   \x3c!--单选--\x3e   <div class="question-block">  <div class="q-mc">  <div class="q-tit"><span class="q-num">1、</span><span class="q-sum">(2分)</span>停车场原来有15辆汽车，现在只有6辆，开走了（ ）辆？</div>  \x3c!--4选项同一行--\x3e  <div class="q-bd-sel cfx">  <span class="sel-item sel-item-4">  <span class="sel-item-nut">A、</span>  <span class="sel-item-meat">9</span>  </span>  <span class="sel-item sel-item-4">  <span class="sel-item-nut">B、</span>  <span class="sel-item-meat">10</span>  </span>  <span class="sel-item sel-item-4">  <span class="sel-item-nut">C、</span>  <span class="sel-item-meat">14</span>  </span>  <span class="sel-item sel-item-4">  <span class="sel-item-nut">D、</span>  <span class="sel-item-meat">13</span>  </span>  </div>  </div>  <div class="paper-fun-list cfx">  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-jiexi"></i>答案解析  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-fenshu"></i>设定得分  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-exchange"></i>换题  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-zhuanyi"></i>转移  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-collect"></i>收藏  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-ucollect"></i>取消收藏  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-error"></i>纠错  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-del"></i>删除  </a>  </div>  </div>  \x3c!--多选--\x3e  <div class="question-block">  <div class="q-mc">  <div class="q-tit"><span class="q-num">2、</span><span class="q-sum">(2分)</span>大货车在长距离下坡时，车速会越来越大，而刹车会导致刹车片温度急剧升高，司机会在刹车片上浇冷水降温，下列说法正确的是（ ）</div>  \x3c!--2选项同一行--\x3e  <div class="q-bd-sel cfx">  <span class="sel-item sel-item-2">  <span class="sel-item-nut">A、</span>  <span class="sel-item-meat">火车下坡越来越快，是重力势能转化为动能</span>  </span>  <span class="sel-item sel-item-2">  <span class="sel-item-nut">B、</span>  <span class="sel-item-meat">刹车片温度升高，是内能转化为机械能</span>  </span>  <span class="sel-item sel-item-2">  <span class="sel-item-nut">C、</span>  <span class="sel-item-meat">火车下坡越来越快，是重力势能转化为动能</span>  </span>  <span class="sel-item sel-item-2">  <span class="sel-item-nut">D、</span>  <span class="sel-item-meat">刹车片温度升高，是内能转化为机械能</span>  </span>  </div>  </div>  <div class="paper-fun-list cfx">  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-jiexi"></i>答案解析  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-fenshu"></i>设定得分  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-exchange"></i>换题  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-zhuanyi"></i>转移  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-collect"></i>收藏  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-ucollect"></i>取消收藏  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-error"></i>纠错  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-del"></i>删除  </a>  </div>  </div>   </div>   <div class="paper-section">  <div class="paper-type">  <h3>  <span class="order">二</span>、  <span class="edit-text">填空题</span>  <input type="text" name="" value="" style="display: none">  <span>(共<b class="t-num">6</b>题；共<b class="t-score">12</b>分)</span>  </h3>  <div class="paper-fun-list cfx">  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-fenshu"></i>批量设定得分  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-sort"></i>排序  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-del"></i>删除  </a>  </div>  </div>  \x3c!--判断--\x3e  <div class="question-block">  <div class="q-mc">  <div class="q-tit"><span class="q-num">3、</span><span class="q-sum">(2分)</span>蒸发是液体表面和内部同时发生的汽化现象．（判断对错）</div>  </div>  <div class="paper-fun-list cfx">  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-jiexi"></i>答案解析  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-fenshu"></i>设定得分  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-exchange"></i>换题  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-zhuanyi"></i>转移  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-collect"></i>收藏  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-ucollect"></i>取消收藏  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-error"></i>纠错  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-del"></i>删除  </a>  </div>  </div>  \x3c!--填空--\x3e  <div class="question-block">  <div class="q-mc">  <div class="q-tit">  <span class="q-num">4、</span><span class="q-sum">(2分)</span>如图所示，用F=20N的拉力将重G=30N物体匀速提升2m，不计轮轴间摩擦及绳重，则动滑轮G<sub>动</sub>=  <span class="q-blank">&nbsp;</span>N，上述过程中有用功W<sub>有</sub>=  <span class="q-blank">&nbsp;</span>J，动滑轮的机械效率η=  <span class="q-blank">&nbsp;</span> ．   <img width="61" height="94" src="http://tikupic.21cnjy.com/7c/4d/7c4d64bd9389279c87707da42198d773.png" alt="" >  </div>  </div>  <div class="paper-fun-list cfx">  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-jiexi"></i>答案解析  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-fenshu"></i>设定得分  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-exchange"></i>换题  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-zhuanyi"></i>转移  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-collect"></i>收藏  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-ucollect"></i>取消收藏  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-error"></i>纠错  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-del"></i>删除  </a>  </div>  </div>  </div>    <div class="paper-section">  <div class="paper-type">  <h3>  <span class="order">一</span>、  <span class="edit-text">解答题</span>  <input type="text" name="" value="" style="display: none">  <span>(共<b class="t-num">6</b>题；共<b class="t-score">12</b>分)</span>  </h3>  <div class="paper-fun-list cfx">  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-fenshu"></i>批量设定得分  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-sort"></i>排序  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-del"></i>删除  </a>  </div>  </div>  \x3c!--解答--\x3e  <div class="question-block">  <div class="q-mc">  <div class="q-tit">  <span class="q-num">5、</span><span class="q-sum">(2分)</span>先化简，再求值：（2x+1）<sup>2</sup>﹣2（x﹣1）（x+3）﹣2，其中x=   <img class="mathml" src="http://math.21cnjy.com/MathMLToImage?mml=%3Cmath+xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmrow%3E%3Cmsqrt%3E%3Cmn%3E2%3C%2Fmn%3E%3C%2Fmsqrt%3E%3C%2Fmrow%3E%3C%2Fmath%3E&amp;key=e044106fb8cb66c185a92f7701331efd"> ．  </div>  </div>  <div class="paper-fun-list cfx">  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-jiexi"></i>答案解析  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-fenshu"></i>设定得分  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-exchange"></i>换题  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-zhuanyi"></i>转移  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-collect"></i>收藏  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-ucollect"></i>取消收藏  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-error"></i>纠错  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-del"></i>删除  </a>  </div>  </div>  \x3c!--复合--\x3e  <div class="question-block">  <div class="q-mc">  <div class="q-tit">  <span class="q-num">6、</span><span class="q-sum">(2分)</span>如图所示，将重力不计的吸盘内部空气排尽后与水平地砖完全贴合，已知贴合的面积为30cm<sup>2</sup> ， 大气压强为1×10<sup>5</sup>Pa，AB为轻质杠杆，O为转轴，OA与OB的长度之比为1：3保持杠杆水平，某人在B端用竖直向下的拉力F将吸盘沿竖直方向刚好拉离地砖   <img width="172" height="104" src="http://tikupic.21cnjy.com/d6/e9/d6e9a321639b147a84bf12bddf236bbe.png" alt="" >  </div>  <div class="q-bd-list">  <div class="q-mc">  <div class="q-tit">（1）、求吸盘所受的大气压力F</div>  </div>  </div>  </div>  <div class="paper-fun-list cfx">  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-jiexi"></i>答案解析  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-fenshu"></i>设定得分  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-exchange"></i>换题  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-zhuanyi"></i>转移  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-collect"></i>收藏  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-ucollect"></i>取消收藏  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-error"></i>纠错  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-del"></i>删除  </a>  </div>  </div>  </div>   </div>  <div class="paper-part">  <div class="paper-title">  <h2>  <span class="edit-text">第Ⅱ卷 主观题</span>  <input type="text" style="display: none;">  </h2>   <p>  <span class="edit-text">第Ⅱ卷的注释</span>  <input type="text" style="display: none;">  </p>  </div>  <div class="paper-section">  <div class="paper-type">  <h3>  <span class="order">一</span>、  <span class="edit-text">解答题</span>  <input type="text" name="" value="" style="display: none">  <span>(共<b class="t-num">6</b>题；共<b class="t-score">12</b>分)</span>  </h3>  <div class="paper-fun-list cfx">  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-fenshu"></i>批量设定得分  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-sort"></i>排序  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-del"></i>删除  </a>  </div>  </div>  \x3c!--解答--\x3e  <div class="question-block">  <div class="q-mc">  <div class="q-tit">  <span class="q-num">5、</span><span class="q-sum">(2分)</span>先化简，再求值：（2x+1）<sup>2</sup>﹣2（x﹣1）（x+3）﹣2，其中x=   <img class="mathml" src="http://math.21cnjy.com/MathMLToImage?mml=%3Cmath+xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmrow%3E%3Cmsqrt%3E%3Cmn%3E2%3C%2Fmn%3E%3C%2Fmsqrt%3E%3C%2Fmrow%3E%3C%2Fmath%3E&amp;key=e044106fb8cb66c185a92f7701331efd"> ．  </div>  </div>  <div class="paper-fun-list cfx">  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-jiexi"></i>答案解析  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-fenshu"></i>设定得分  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-exchange"></i>换题  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-zhuanyi"></i>转移  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-collect"></i>收藏  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-ucollect"></i>取消收藏  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-error"></i>纠错  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-del"></i>删除  </a>  </div>  </div>  \x3c!--复合--\x3e  <div class="question-block">  <div class="q-mc">  <div class="q-tit">  <span class="q-num">6、</span><span class="q-sum">(2分)</span>如图所示，将重力不计的吸盘内部空气排尽后与水平地砖完全贴合，已知贴合的面积为30cm<sup>2</sup> ， 大气压强为1×10<sup>5</sup>Pa，AB为轻质杠杆，O为转轴，OA与OB的长度之比为1：3保持杠杆水平，某人在B端用竖直向下的拉力F将吸盘沿竖直方向刚好拉离地砖   <img width="172" height="104" src="http://tikupic.21cnjy.com/d6/e9/d6e9a321639b147a84bf12bddf236bbe.png" alt="" >  </div>  <div class="q-bd-list">  <div class="q-mc">  <div class="q-tit">（1）、求吸盘所受的大气压力F</div>  </div>  </div>  </div>  <div class="paper-fun-list cfx">  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-jiexi"></i>答案解析  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-fenshu"></i>设定得分  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-exchange"></i>换题  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-zhuanyi"></i>转移  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-collect"></i>收藏  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-ucollect"></i>取消收藏  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-error"></i>纠错  </a>  <a href="javascript:;" class="paper-fun-item">  <i class="iconw-del"></i>删除  </a>  </div>  </div>  </div>  </div>';
    return __p
}, JST["papers/mark-table"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += "<table>  <tr><th>题号</th><th>" + (null == (__t = data.num.join("</th><th>")) ? "" : __t) + "</th></tr>  <tr><th>评分</th><td>" + (null == (__t = data.blanks.join("</td><td>")) ? "" : __t) + "</td></tr> </table>";
    return __p
}, JST["papers/paper-items"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="loading-wrap">  <div class="loading-bg"></div>  <div class="loading"></div> </div> ', _.size(list) ? (__p += " <ul>  ", _.each(list.sort(function (a, s) {
        return s.addtime - a.addtime
    }), function (a) {
        __p += '  <li>  <div class="item-wrap">  <div class="item-img">  <a href="/paper/view/' + (null == (__t = a.pid) ? "" : __t) + '" traget="_blank"><span class="icon iconf-' + (null == (__t = a.icon) ? "" : __t) + '"></span></a>  </div>  <div class="w fl">  <div class="item-mc">  <h3 class="item-tit"><a href="/paper/view/' + (null == (__t = a.pid) ? "" : __t) + '" traget="_blank" title="' + (null == (__t = a.title) ? "" : __t) + '" >' + (null == (__t = a.title) ? "" : __t) + '</a></h3>  <div class="item-attr">  <span><i class="iconw-time"></i>修改时间：' + (null == (__t = myUtils.formatTimestamp(a.examine_time)) ? "" : __t) + '</span>  <span><i class="iconw-eye1"></i>浏览次数：' + (null == (__t = a.look_num) ? "" : __t) + '</span>  <span><i class="iconw-leixing"></i>类型：' + (null == (__t = a.typeName) ? "" : __t) + '</span>  </div>  </div>  </div>  <div class="item-act">  <a class="download-btn" onclick="Application.popupPaperDownload(' + (null == (__t = a.pid) ? "" : __t) + ')">下载</a>  <a class="fun-btn" onclick="Application.AnalyzeChart.show(' + (null == (__t = a.pid) ? "" : __t) + ')"><span class="iconw-fenxi2"></span>试卷分析</a>  </div>  </div>  </li>  '
    }), __p += " </ul> ") : __p += ' <div class="empty-ffxi">  <img src="/images/blank.png" >  <p>筛选无结果，去组个试卷试试吧<a href="/questions/knowledges" class="">【立即组卷】</a></p> </div> ';
    return __p
}, JST["papers/paper-part"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) null === data ? __p += ' <div class="paper-title" data-jset="6"></div> ' : __p += ' <h2>  <span class="edit-text contenteditable-part" data-jedit="name">' + (null == (__t = data.name) ? "" : __t) + '</span> </h2>  <p data-jset="8">  <span class="edit-text contenteditable-part" data-jedit="tip">' + (null == (__t = data.tip) ? "" : __t) + "</span> </p> ";
    return __p
}, JST["papers/paper-style"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="edit-handle-mt cfx">  <strong>试卷结构调整</strong>  <div class="edit-act">  <div class="edit-sel-box J_selete_temp">  <a class="edit-sel-hd"><span>' + (null == (__t = templates[data.template].name) ? "" : __t) + '</span><i class="iconw-filter-down"></i></a>  <ul class="edit-type">  ', _.each(templates, function (a, s) {
        __p += '  <li data-jtemp="' + (null == (__t = s) ? "" : __t) + '">' + (null == (__t = a.name) ? "" : __t) + "</li>  "
    }), __p += '  </ul>  </div>  </div> </div> <div class="edit-handle-bd">  <div class="edit-sel-tag cfx J_jsettings">  ', _.each(settings, function (a, s) {
        __p += '  <label style="' + (null == (__t = ",3,8,12,".indexOf("," + s + ",") > -1 ? "display:none" : "") ? "" : __t) + '" class=" ' + (null == (__t = 1 == data.style[s - 1] ? "checked" : "") ? "" : __t) + ' custom-checkbox" data-jsetcheck="' + (null == (__t = s) ? "" : __t) + '">  <i class="iconw-checkbox"></i>  <span>' + (null == (__t = a) ? "" : __t) + "</span>  </label>  "
    }), __p += "   </div> </div>";
    return __p
}, JST["papers/paper-type"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) null === data ? __p += ' <div class="paper-type" data-jset="10"></div> <ul></ul>  ' : __p += ' \x3c!--答题评分区--\x3e <table data-jset="2" style="display:none">  <tr>  <th>阅卷人</th>  <td></td>  </tr>  <tr>  <th>得分</th>  <td></td>  </tr> </table> <h3>  <span class="order">' + (null == (__t = myUtils.chinesesn(data._n)) ? "" : __t) + '</span>、  <span class="edit-text contenteditable-type" data-jedit="_t">' + (null == (__t = data.short_tit) ? "" : __t) + '</span>  <span data-jset="12">(共<b class="t-num">' + (null == (__t = data.type_count.count) ? "" : __t) + '</b>题；共<b class="t-score">' + (null == (__t = data.type_count.score) ? "" : __t) + '</b>分)</span> </h3> <div class="paper-fun-list cfx">  <a href="javascript:;" class="paper-fun-item J_score_ques">  <i class="iconw-fenshu"></i>批量设定得分  </a>  <a href="javascript:;" class="paper-fun-item J_sort_ques">  <i class="iconw-sort"></i>排序  </a>  <a href="javascript:;" class="paper-fun-item J_del_ques">  <i class="iconw-del"></i>删除  </a> </div> ';
    return __p
}, JST["smartpage/node-results"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="smart-mt cfx">  <strong>已选' + (null == (__t = "categories" == tree_type ? "章节" : "知识点") ? "" : __t) + "（<span>" + (null == (__t = _.size(list)) ? "" : __t) + '</span>个）</strong>  <a href="javascript:;" class="J_clear_all"><i class="iconw-del2"></i>清空</a> </div> <div class="smart-mc">  <div class="smart-sel-list cfx">  ', _.size(list) ? (__p += "  ", _.each(list, function (a) {
        __p += '  <div class="smart-sel-item" data-id="' + (null == (__t = a.id) ? "" : __t) + '">  ' + (null == (__t = a.title) ? "" : __t) + '<span class="smart-del"><i class="iconw-close"></i></span>  <input type="checkbox" checked name="' + (null == (__t = "categories" == tree_type ? "categories[]" : "knowledges[]") ? "" : __t) + '" value="' + (null == (__t = a.id) ? "" : __t) + '" style="display:none">  </div>  '
    }), __p += "  ") : __p += "  <p>您未选择" + (null == (__t = "categories" == tree_type ? "章节" : "知识点") ? "" : __t) + "！</p>  ", __p += "  </div> </div>";
    return __p
}, JST["smartpage/paper-items"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) "2" == addtype ? __p += '  <div class="handle-line cfx">  <div class="sort-item fl">  <span class="' + (null == (__t = "edit_time" == order ? "sort-current" : "") ? "" : __t) + '" data-param="order=edit_time">时间<i class="iconw-sort-desc"></i></span>  <span class="' + (null == (__t = "makenum" == order ? "sort-current" : "") ? "" : __t) + '" data-param="order=makenum">使用次数<i class="iconw-sort-desc"></i></span>  <a href="/help.html/notice?id=41" target="_blank"><i class="iconw-what3"></i>如何使用双向细目表</a>  </div>  <div class="act-item fr">  <span>共计：<b class="J_total">' + (null == (__t = count) ? "" : __t) + "</b>份</span>  </div>  </div>  " : __p += '  <div class="handle-line cfx">  <div class="sort-item fl">  <span>共计：<b >' + (null == (__t = count) ? "" : __t) + '</b>份</span>  </div>  <div class="act-item fr">  <a class="selall-btn J_build">新建细目表</a>  </div>  </div>  ', __p += " " + (null == (__t = JST["partial/list-loading"]()) ? "" : __t) + " ", _.size(list) ? (__p += ' <ul class="' + (null == (__t = "2" == addtype ? "smart-detail-list" : "smart-mydetail-list") ? "" : __t) + '">  ', _.each(list, function (a) {
        __p += '  <li>  <div class="item-wrap">  <div class="item-img J_islogin">  <a href="' + (null == (__t = user.get("uid") ? "/#smart/spec-edit/" + a.id : "javascript:;") ? "" : __t) + ' "><img src="/build/images/xmb.png"></a>  </div>  <div class="w fl">  <div class="item-mc">  <h3 class="item-tit J_islogin"><a href="' + (null == (__t = user.get("uid") ? "/#smart/spec-edit/" + a.id : "javascript:;") ? "" : __t) + ' ">' + (null == (__t = a.title) ? "" : __t) + '</a></h3>  <div class="item-attr">  <span><i class="iconw-time"></i>上传时间：' + (null == (__t = a.format_date) ? "" : __t) + '</span>  <span><i class="iconw-leixing"></i>类型：' + (null == (__t = a.ximutype_name) ? "" : __t) + '</span>  <span><i class="iconw-use"></i>使用人数：' + (null == (__t = a.makenum) ? "" : __t) + '人</span>  </div>  </div>  </div>  <div class="item-act">  <a href="' + (null == (__t = user.get("uid") ? "/#smart/spec-edit/" + a.id : "javascript:;") ? "" : __t) + ' " class="download-btn J_islogin">使用</a>  </div>  </div>  ', 1 == addtype && (__p += '  <a href="javascript:;" data-xid="' + (null == (__t = a.id) ? "" : __t) + '" class="del iconw-del J_del_ximu"></a>  '), __p += "   </li>  "
    }), __p += " </ul> ") : __p += ' <div class="empty-ffxi">  <img src="/images/blank.png">  <p>当前条件下没有找到细目表。</p> </div> ';
    return __p
}, JST["smartpage/setting-input"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="fl cfx">  <span class="setting-tit fl" title="' + (null == (__t = data.question_channel_type_name) ? "" : __t) + '">' + (null == (__t = data.question_channel_type_name) ? "" : __t) + '</span>  <em class="fl"><b>' + (null == (__t = data.total > 999 ? "999+" : data.total) ? "" : __t) + '</b>道试题可用</em> </div> <div class="setting-fun fr">  ', data.selected && (__p += '  <input type="text" name="question_channel_type[' + (null == (__t = data.question_channel_type) ? "" : __t) + ']" class="' + (null == (__t = data.num > data.total || 0 == data.num ? "warnning" : "") ? "" : __t) + '" value="' + (null == (__t = _.min([data.num, data.total]) || "") ? "" : __t) + '" placeholder="0">道  <i class="del iconw-del2"></i>  '), __p += " </div>";
    return __p
}, JST["report/dialog-know-master"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="progress-wrap">  ', _.each(data, function (a) {
        __p += '  <div class="bar-item">  <p class="bar-tit">' + (null == (__t = a.name ? a.name.name : "--") ? "" : __t) + '</p>  <div class="bar-bd">  <div class="bar-bg"><div class="bar" style="width:' + (null == (__t = 100 - 100 * a.err_rate) ? "" : __t) + '%"></div></div>  <span class="bar-pp">' + (null == (__t = 100 - 100 * a.err_rate) ? "" : __t) + "%</span>  </div>  </div>  "
    }), __p += " </div>";
    return __p
}, JST["report/head-title"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="do-q-mt">  <strong class="do-q-tit">' + (null == (__t = myUtils.chinesesn(data._n)) ? "" : __t) + "、" + (null == (__t = data.head_title) ? "" : __t) + '<span class="q-score">(共' + (null == (__t = data.count) ? "" : __t) + "题；共" + (null == (__t = data.score) ? "" : __t) + '分)</span></strong>  </div>  <div class="do-q-mc"><ul class="J_ques_items"></ul></div> </div>';
    return __p
}, JST["report/report-circle"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '\x3c!--环形进度条 ie8 ie7 全挂orz--\x3e  \x3c!--作答成绩--\x3e <div class="c-circle">  <div class="circle-wrap">  <div class="circle">  \x3c!--左半边圆--\x3e  <div class="circle-left">  <div class="clip_left"></div>  </div>  \x3c!--右半边圆--\x3e  <div class="circle-right">  <div class="clip_right"></div>  </div>  <div class="mask">  <div class="mask-con">  <span class="per">' + (null == (__t = data.score) ? "" : __t) + "</span>分   </div>   </div>  </div>  </div>  <h3>作答成绩</h3>  <p>（平均分：" + (null == (__t = Math.floor(data.scoreRank.total_score / data.scoreRank.total)) ? "" : __t) + '分）</p> </div>  \x3c!--排名--\x3e <div class="c-circle c2">  <div class="circle-wrap">  <div class="circle">  \x3c!--左半边圆--\x3e  <div class="circle-left">  <div class="clip_left"></div>  </div>  \x3c!--右半边圆--\x3e  <div class="circle-right">  <div class="clip_right"></div>  </div>  <div class="mask">  <div class="mask-con">  第' + (null == (__t = Number(data.scoreRank.myrank) + 1) ? "" : __t) + '名   <span class="per" style="display: none">100</span>  </div>   </div>  </div>  </div>  <h3>排名</h3>  <p>（总共' + (null == (__t = data.scoreRank.total) ? "" : __t) + '人作答）</p> </div>  \x3c!--作答时长--\x3e <div class="c-circle c3">  <div class="circle-wrap">  <div class="circle">  \x3c!--左半边圆--\x3e  <div class="circle-left">  <div class="clip_left"></div>  </div>  \x3c!--右半边圆--\x3e  <div class="circle-right">  <div class="clip_right"></div>  </div>  <div class="mask">  <div class="mask-con">  ' + (null == (__t = Math.floor(data.use_time / 60)) ? "" : __t) + "'" + (null == (__t = data.use_time % 60) ? "" : __t) + '"  <span class="per" style="display: none">100</span>   </div>   </div>  </div>  </div>  <h3>作答时长</h3>  <p>平均时长' + (null == (__t = data.avgmin) ? "" : __t) + "'" + (null == (__t = data.avgsec) ? "" : __t) + '"</p> </div>';
    return __p
}, JST["report/report-q"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="do-q-bd">  <div class="do-q-mt">  <strong class="do-q-tit">一、单选题<span class="q-score">(共10题；共20分)</span></strong>  </div>  <div class="do-q-mc">  \x3c!--单选--\x3e   <div class="question-block">  <div class="q-mc">  <div class="q-tit"><span class="q-num">1、</span><span class="q-sum">(2分)</span>停车场原来有15辆汽车，现在只有6辆，开走了（ ）辆？</div>  \x3c!--4选项同一行--\x3e  <div class="q-bd-sel cfx">  <span class="sel-item sel-item-4">  <label class="checked">  <b class="iconw-radio"></b>  <input type="radio" name="" value="">  <span class="sel-item-nut">A、</span>  <span class="sel-item-meat">9</span>  </label>  </span>  <span class="sel-item sel-item-4">  <label>  <b class="iconw-radio"></b>  <input type="radio" name="" value="">  <span class="sel-item-nut">B、</span>  <span class="sel-item-meat">10</span>  </label>  </span>  <span class="sel-item sel-item-4">  <label>  <b class="iconw-radio"></b>  <input type="radio" name="" value="">  <span class="sel-item-nut">C、</span>  <span class="sel-item-meat">14</span>  </label>  </span>  <span class="sel-item sel-item-4">  <label>  <b class="iconw-radio"></b>  <input type="radio" name="" value="">  <span class="sel-item-nut">D、</span>  <span class="sel-item-meat">13</span>  </label>  </span>  </div>  <div class="judge">  <i class="iconw-right"></i>  </div>  </div>  <div class="q-analyize">  <div class="q-analyize-item">  <strong class="q-analyize-mt">【考点】</strong>  <div class="q-analyize-mc">解： A、大货车下坡时，质量不变，高度减小，所以重力势能减小；速度越来越快，所以动能增加；此过程中重力势能转化为动能．故A正确；</div>  </div>  <div class="q-analyize-item">  <strong class="q-analyize-mt">【答案】</strong>  <div class="q-analyize-mc">解： A、大货车下坡时，质量不变，高度减小，所以重力势能减小；速度越来越快，所以动能增加；此过程中重力势能转化为动能．故A正确；</div>  </div>  <div class="q-analyize-item">  <strong class="q-analyize-mt">【解析】</strong>  <div class="q-analyize-mc">【解答】解： A、大货车下坡时，质量不变，高度减小，所以重力势能减小；速度越来越快，所以动能增加；此过程中重力势能转化为动能．故A正确；</div>  </div>  </div>  </div>  \x3c!--多选--\x3e  <div class="question-block">  <div class="q-mc">  <div class="q-tit"><span class="q-num">2、</span><span class="q-sum">(2分)</span>大货车在长距离下坡时，车速会越来越大，而刹车会导致刹车片温度急剧升高，司机会在刹车片上浇冷水降温，下列说法正确的是（ ）</div>  \x3c!--2选项同一行--\x3e  <div class="q-bd-sel cfx">  <span class="sel-item sel-item-2">  <label class="checked">  <b class="iconw-checkbox"></b>  <input type="checkbox" name="" value="">  <span class="sel-item-nut">A、</span>  <span class="sel-item-meat">火车下坡越来越快，是重力势能转化为动能</span>  </label>  </span>  <span class="sel-item sel-item-2">  <label>  <b class="iconw-checkbox"></b>  <input type="checkbox" name="" value="">  <span class="sel-item-nut">B、</span>  <span class="sel-item-meat">刹车片温度升高，是内能转化为机械能</span>  </label>  </span>  <span class="sel-item sel-item-2">  <label>  <b class="iconw-checkbox"></b>  <input type="checkbox" name="" value="">  <span class="sel-item-nut">C、</span>  <span class="sel-item-meat">火车下坡越来越快，是重力势能转化为动能</span>  </label>  </span>  <span class="sel-item sel-item-2">  <label>  <b class="iconw-checkbox"></b>  <input type="checkbox" name="" value="">  <span class="sel-item-nut">D、</span>  <span class="sel-item-meat">刹车片温度升高，是内能转化为机械能</span>  </label>  </span>  </div>  <div class="judge">  <i class="iconw-mistake"></i>  </div>  </div>  <div class="q-analyize">  <div class="q-analyize-item">  <strong class="q-analyize-mt">【考点】</strong>  <div class="q-analyize-mc">解： A、大货车下坡时，质量不变，高度减小，所以重力势能减小；速度越来越快，所以动能增加；此过程中重力势能转化为动能．故A正确；</div>  </div>  <div class="q-analyize-item">  <strong class="q-analyize-mt">【答案】</strong>  <div class="q-analyize-mc">解： A、大货车下坡时，质量不变，高度减小，所以重力势能减小；速度越来越快，所以动能增加；此过程中重力势能转化为动能．故A正确；</div>  </div>  <div class="q-analyize-item">  <strong class="q-analyize-mt">【解析】</strong>  <div class="q-analyize-mc">【解答】解： A、大货车下坡时，质量不变，高度减小，所以重力势能减小；速度越来越快，所以动能增加；此过程中重力势能转化为动能．故A正确；</div>  </div>  </div>  </div>   </div>  <div class="do-q-mt">  <strong class="do-q-tit">二、填空题<span class="q-score">(共10题；共20分)</span></strong>  </div>  <div class="do-q-mc">  \x3c!--填空--\x3e  <div class="question-block">  <div class="q-mc">  <div class="q-tit">  <span class="q-num">4、</span><span class="q-sum">(2分)</span>如图所示，用F=20N的拉力将重G=30N物体匀速提升2m，不计轮轴间摩擦及绳重，则动滑轮G<sub>动</sub>=  <span class="q-blank">&nbsp;</span>N，上述过程中有用功W<sub>有</sub>=  <span class="q-blank">&nbsp;</span>J，动滑轮的机械效率η=  <span class="q-blank">&nbsp;</span>．   <img width="61" height="94" src="http://tikupic.21cnjy.com/7c/4d/7c4d64bd9389279c87707da42198d773.png" alt="" >  </div>  <div class="judge">  <i class="iconw-doubt"></i>  <div class="judge-tip">  <b class="iconw-tri-l"></b>  本题暂不支持自动批改可自己设定分数  </div>  </div>  </div>  <div class="q-input-box">  <div class="q-input-line">  <strong>【第一空】</strong><input class="q-input" name="" value="3" readonly disabled>  </div>  <div class="q-input-line">  <strong>【第二空】</strong><input class="q-input" name="" value="4" readonly disabled>  </div>  </div>  </div>  </div>   <div class="do-q-mt">  <strong class="do-q-tit">三、复合题<span class="q-score">(共10题；共20分)</span></strong>  </div>  <div class="do-q-mc">  \x3c!--复合--\x3e  <div class="question-block">  <div class="q-mc">  <div class="q-tit">  <span class="q-num">6、</span><span class="q-sum">(2分)</span>如图所示，将重力不计的吸盘内部空气排尽后与水平地砖完全贴合，已知贴合的面积为30cm<sup>2</sup> ， 大气压强为1×10<sup>5</sup>Pa，AB为轻质杠杆，O为转轴，OA与OB的长度之比为1：3保持杠杆水平，某人在B端用竖直向下的拉力F将吸盘沿竖直方向刚好拉离地砖   <img width="172" height="104" src="http://tikupic.21cnjy.com/d6/e9/d6e9a321639b147a84bf12bddf236bbe.png" alt="" >  </div>  <div class="q-bd-list">  <div class="q-mc">  <div class="q-tit">（1）、求吸盘所受的大气压力F</div>  <div class="judge">  <i class="iconw-doubt"></i>  <div class="judge-tip">  <b class="iconw-tri-l"></b>  <p class="tip-txt">本题暂不支持自动批改可自己设定分数</p>  </div>  </div>  </div>   <textarea class="q-textarea" readonly disabled>答案答案。。。。。。。。。。</textarea>  <div class="q-mc">  <div class="q-tit">（2）、求吸盘所受的大气压力F</div>  <div class="judge">  <span class="judge-txt">2分</span>  <div class="judge-tip">  <b class="iconw-tri-l"></b>  <p class="tip-txt">点击可修改分数</p>  </div>  </div>  </div>  </div>  </div>  </div>  </div> </div>';
    return __p
}, JST["question/analyze"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) data.current_user.uid && (__p += " ", 0 == data.parent_id ? (__p += ' <div class="q-analyize">  <div class="q-analyize-item J_ana_knw cfx">  <strong class="q-analyize-mt">【考点】</strong>  <div class="q-analyize-mc"><img _src="' + (null == (__t = data.knowledge) ? "" : __t) + '"></div>  </div>  ', 7 != data.question_type && (__p += '  <div class="q-analyize-item J_ana_ans cfx">  <strong class="q-analyize-mt">【答案】</strong>  <div class="q-analyize-mc"><img _src="' + (null == (__t = data.answer) ? "" : __t) + '" ></div>  </div>  '), __p += "  ", data.explanation.toString().length && (__p += '  <div class="q-analyize-item J_ana_exp cfx">  <strong class="q-analyize-mt">【解析】</strong>  <div class="q-analyize-mc"><img _src="' + (null == (__t = data.explanation) ? "" : __t) + '"></div>  </div>  '), __p += " </div> ") : __p += ' <div class="q-analyize">  <div class="q-analyize-item J_ana_ans cfx">  <strong class="q-analyize-mt">【答案】</strong>  <div class="q-analyize-mc"><img _src="' + (null == (__t = data.answer) ? "" : __t) + '" ></div>  </div> </div> ', __p += " ");
    return __p
}, JST["question/btn-handler"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="paper-fun-list cfx J_acts">  <a href="/question/detail/' + (null == (__t = data.question_id) ? "" : __t) + '" target="_blank" class="paper-fun-item">  <i class="iconw-jiexi"></i>答案解析  </a>  <a href="javascript:;" class="paper-fun-item J_set_score">  <i class="iconw-fenshu"></i>设定得分  </a>  <a href="javascript:;" class="paper-fun-item J_reload">  <i class="iconw-exchange"></i>换题  </a>  <a href="javascript:;" class="paper-fun-item J_migrate">  <i class="iconw-zhuanyi"></i>转移  </a>  ', data.is_collect ? __p += '  <a href="javascript:;" class="paper-fun-item J_collect">  <i class="iconw-collect"></i>取消收藏  </a>  ' : __p += '  <a href="javascript:;" class="paper-fun-item J_collect">  <i class="iconw-collect"></i>收藏  </a>  ', __p += '  <a href="javascript:;" onclick="Application.popupErrorReport(' + (null == (__t = data.question_id) ? "" : __t) + ')" class="paper-fun-item J_correct">  <i class="iconw-error"></i>纠错  </a>  <a href="javascript:;" class="paper-fun-item J_remove">  <i class="iconw-del"></i>删除  </a> </div>';
    return __p
}, JST["question/btn-handler2"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="paper-fun-list cfx J_acts">  <a href="/question/detail/' + (null == (__t = data.question_id) ? "" : __t) + '" target="_blank" class="paper-fun-item">  <i class="iconw-jiexi"></i>答案解析  </a>   ', data.is_collect ? __p += '  <a href="javascript:;" class="paper-fun-item J_collect">  <i class="iconw-collect"></i>取消收藏  </a>  ' : __p += '  <a href="javascript:;" class="paper-fun-item J_collect">  <i class="iconw-collect"></i>收藏  </a>  ', __p += '  <a href="javascript:;" onclick="Application.popupErrorReport(' + (null == (__t = data.question_id) ? "" : __t) + ')" class="paper-fun-item J_correct">  <i class="iconw-error"></i>纠错  </a>  ', data.exists_in_basket ? __p += '  <a href="javascript:;" class="paper-fun-item J_add_it ">  - 移除  </a>  ' : __p += '  <a href="javascript:;" class="paper-fun-item J_add_it ">  + 选题  </a>  ', __p += " </div>";
    return __p
}, JST["question/login-btn"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="q-login.html">  <P class="q-login.html-txt">抱歉，您未登录！暂时无法查看答案与解析！</P>  <a class="q-login.html-btn">登录查看答案解析<div class="qline"></div></a> </div>';
    return __p
}, JST["question/options-answer"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) "123".indexOf(data.question_type) > -1 && (__p += ' <div class="q-res J_answer_input">  <ol class="op-items ' + (null == (__t = 3 == data.question_type ? "op-items-xv" : "") ? "" : __t) + ' ">  ', _.each(data.options, function (a, s) {
        __p += '  <li class="op-item">  ', 2 == data.question_type ? __p += '  <span class="checkbox J_inputbox ' + (null == (__t = data.myanswer && _.contains(data.myanswer, s) ? "checked" : "") ? "" : __t) + ' ">  <span class="op-item-nut">  <i class="iconw-checkbox"></i>  <input type="checkbox" name="" value="' + (null == (__t = s) ? "" : __t) + '" ' + (null == (__t = data.myanswer && _.contains(data.myanswer, s) ? "checked" : "") ? "" : __t) + ' style="display:none" />' + (null == (__t = s) ? "" : __t) + ' .   </span>  <span class="op-item-meat">' + (null == (__t = a) ? "" : __t) + "</span>  </span>  " : (__p += '  <span class="radiobox J_inputbox ', data.myanswer == s && (__p += "checked"), __p += '">  <span class="op-item-nut">  <i class="iconw-radio"></i>  <input type="radio" name="" value="' + (null == (__t = s) ? "" : __t) + '" ' + (null == (__t = self.myanswer == s ? "checked" : "") ? "" : __t) + ' style="display:none" />' + (null == (__t = 3 != data.question_type ? s + "." : "") ? "" : __t) + '  </span>  <span class="op-item-meat">' + (null == (__t = a) ? "" : __t) + "</span>  </span>  "), __p += "  </li>  "
    }), __p += "  </ol> </div> "), __p += "   ", 4 == data.question_type && (__p += ' <div class="q-res J_answer_input">  ', _.each(data.answer_json, function (a, s) {
        __p += '  <div class="line-field">  <span>【第' + (null == (__t = s + 1) ? "" : __t) + '空】</span>  <div class="edit-wrap">  <div contenteditable="true" data-idx="' + (null == (__t = s + 1) ? "" : __t) + '" class="fill-edit edit-line ' + (null == (__t = data.myanswer && data.myanswer[s + 1] ? "done-textarea" : "") ? "" : __t) + '" >' + (null == (__t = data.myanswer && data.myanswer[s + 1] ? data.myanswer[s + 1] : "") ? "" : __t) + "</div>  </div>  </div>\t  "
    }), __p += " </div> "), __p += "   ", 5 == data.question_type && (__p += ' <div class="q-res J_answer_input">  <div class="edit-wrap2">  <div contenteditable="true" class="fill-edit txt-field edit-line ' + (null == (__t = data.myanswer ? "done-textarea" : "") ? "" : __t) + '">' + (null == (__t = data.myanswer ? data.myanswer : "") ? "" : __t) + "</div>  </div> </div> "), __p += "   ", 6 == data.question_type && (__p += ' <div class="q-res"> ', _.each(data.options, function (a, s) {
        __p += '  <div class="q-subitem J_answer_input" data-idx="' + (null == (__t = s + 1) ? "" : __t) + '">  <span class="op-order">（' + (null == (__t = s + 1) ? "" : __t) + '）</span>  <div class="w">  <ol class="op-items">  ', _.each(a, function (a, t) {
            __p += '  <li class="op-item">  <span class="radiobox J_inputbox ' + (null == (__t = data.myanswer && data.myanswer[s + 1] == t ? "checked" : "") ? "" : __t) + '">  <span class="op-item-nut">  <i class="iconw-radio"></i>  <input type="radio" name="" value="' + (null == (__t = t) ? "" : __t) + '" style="display:none" ' + (null == (__t = data.myanswer && data.myanswer[s + 1] == t ? "checked" : "") ? "" : __t) + ' />  <span class="op-ordersn">' + (null == (__t = t) ? "" : __t) + ' . </span>  </span>  <span class="op-item-meat">' + (null == (__t = a) ? "" : __t) + "</span>  </span>  </li>  "
        }), __p += "  </ol>  </div>  </div>\t "
    }), __p += " </div> ");
    return __p
}, JST["question/options-report"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) "123".indexOf(data.question_type) > -1 && (__p += '  <div class="q-res">  <ol class="op-items ' + (null == (__t = 3 == data.question_type ? "op-items-xv" : "") ? "" : __t) + ' ">  ', _.each(data.options, function (a, s) {
        __p += '  <li class="op-item">  ', 2 == data.question_type ? __p += '  <span class="checkbox ' + (null == (__t = data.myanswer.myanswer && _.contains(data.myanswer.myanswer, s) ? "checked" : "") ? "" : __t) + ' ">  <span class="op-item-nut">  <i class="iconw-checkbox"></i>' + (null == (__t = s) ? "" : __t) + ' .   </span>  <span class="op-item-meat">' + (null == (__t = a) ? "" : __t) + "</span>  </span>  " : __p += '  <span class="radiobox ' + (null == (__t = data.myanswer.myanswer == s ? "checked" : "") ? "" : __t) + '">  <span class="op-item-nut">  <i class="iconw-radio"></i>' + (null == (__t = s) ? "" : __t) + ' .  </span>  <span class="op-item-meat">' + (null == (__t = a) ? "" : __t) + "</span>  </span>  ", __p += "  </li>  "
    }), __p += '  </ol>  <div class="judeg"><i class="' + (null == (__t = 1 == data.myanswer.is_right ? "qright" : data.myanswer.is_check ? "qwrong" : "qunknow") ? "" : __t) + '"></i></div>  </div>  '), __p += "     ", 4 == data.question_type && (__p += ' <div class="q-res">  <ul class="fill-items">  ', _.each(data.myanswer.list, function (a, s) {
        __p += '  <li class="fill-item cfx">  <span class="fill-hint">【第' + (null == (__t = s + 1) ? "" : __t) + '空】</span>  <div class="w"><div class="fill-blank">' + (null == (__t = a.myanswer) ? "" : __t) + '</div></div>  <span class="judeg">  <i class="' + (null == (__t = 0 == a.is_check ? "qunknow" : 1 == a.is_right ? "qright" : "qwrong") ? "" : __t) + ' "></i>  </span>  </li>  '
    }), __p += "  </ul> </div> "), __p += "     ", 5 == data.question_type && (__p += ' <div class="q-res">  <div class="fill-myanswer f-cb">  <span class="fill-hint">答：</span>  <div class="w">  <div class="fill-blank">  ' + (null == (__t = data.myanswer.myanswer) ? "" : __t) + '  </div>  </div>  <div class="judeg"><i class="' + (null == (__t = 1 == data.myanswer.is_right ? "qright" : data.myanswer.is_check ? "qwrong" : "qunknow") ? "" : __t) + '"></i></div>  </div> </div>  '), __p += "      ", 6 == data.question_type && (__p += '  <div class="q-res">  ', _.each(data.options, function (a, s) {
        __p += '  <div class="q-subitem" data-idx="' + (null == (__t = s + 1) ? "" : __t) + '">  <span class="op-order">（' + (null == (__t = s + 1) ? "" : __t) + '）</span>  <div class="w">  <ol class="op-items">  ', _.each(a, function (a, t) {
            __p += '  <li class="op-item">  <span class="radiobox ' + (null == (__t = data.myanswer && data.myanswer.list[s].myanswer == t ? "checked" : "") ? "" : __t) + '">  <span class="op-item-nut">  <i class="iconw-radio"></i>  <span class="op-ordersn">' + (null == (__t = t) ? "" : __t) + ' . </span>  </span>  <span class="op-item-meat">' + (null == (__t = a) ? "" : __t) + "</span>  </span>  </li>  "
        }), __p += '  </ol>  </div>  <div class="judeg"><i class="' + (null == (__t = 1 == data.myanswer.list[s].is_right ? "qright" : "qwrong") ? "" : __t) + '"></i></div>\t  </div>  '
    }), __p += "  </div>  ");
    return __p
}, JST["question/options"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) "12".indexOf(data.question_type) > -1 && (__p += ' <div class="exam-s">  ', _.each(data.options, function (a, s) {
        __p += '  <span class="op-item"><span class="op-item-nut">' + (null == (__t = s) ? "" : __t) + ' . </span><span class="op-item-meat">' + (null == (__t = a) ? "" : __t) + "</span></span>  "
    }), __p += " </div> "), __p += "   ", 6 == data.question_type && (__p += "  ", _.each(data.options, function (a, s) {
        __p += '  <div class="f-cb">  <div class="exam-mynum">（' + (null == (__t = s + 1) ? "" : __t) + '）</div>  <div class="w">  <div class="exam-s exam-sw">  ', _.each(a, function (a, s) {
            __p += '  <span class="op-item">  <span class="op-item-nut">' + (null == (__t = s) ? "" : __t) + ' . </span>  <span class="op-item-meat">' + (null == (__t = a) ? "" : __t) + "</span>  </span>  "
        }), __p += "  </div>  </div>  </div>  "
    }), __p += " ");
    return __p
}, JST["question/origin-handler-nobtn"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="q-msg cfx">  <div class="q-attr fl">  <span>题型：' + (null == (__t = data.question_channel_type_name) ? "" : __t) + "</span>  <em>|</em>  <span>题类：" + (null == (__t = data.exam_name) ? "" : __t) + "</span>  <em>|</em>  <span>难度：" + (null == (__t = data.difficult_name) ? "" : __t) + "</span>  <em>|</em>  <span>组卷次数：" + (null == (__t = data.save_num) ? "" : __t) + "</span>  </div> </div>";
    return __p
}, JST["question/origin-handler"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) data.paperid && (__p += ' <div class="q-origin">  <a href="/paper/view/' + (null == (__t = data.paperid) ? "" : __t) + '" target="_blank">试题来源：' + (null == (__t = data.question_source) ? "" : __t) + "</a> </div> "), __p += ' <div class="q-msg cfx">  <div class="q-attr fl">  <span>题型：' + (null == (__t = data.question_channel_type_name) ? "" : __t) + "</span>  <em>|</em>  <span>题类：" + (null == (__t = data.exam_name) ? "" : __t) + "</span>  <em>|</em>  <span>难度：" + (null == (__t = data.difficult_name) ? "" : __t) + "</span>  <em>|</em>  <span>组卷次数：" + (null == (__t = data.save_num) ? "" : __t) + '</span>  </div>  <div class="q-handle fr">  <a href="/question/detail/' + (null == (__t = data.question_id) ? "" : __t) + '" target="_blank" class="q-handle-item J_analyize"><i class="iconw-jiexi"></i>查看解析</a>  ', data.is_collect ? __p += '  <a href="javascript:;" class="q-handle-item J_collect">  <i class="iconw-ucollect"></i>取消收藏  </a>  ' : __p += '  <a href="javascript:;" class="q-handle-item J_collect">  <i class="iconw-collect"></i>收藏  </a>  ', __p += '  <a class="q-handle-item J_report_error"><i class="iconw-error"></i>纠错</a>  ', data.exists_in_basket ? __p += '  <a class="q-add-btn active J_add_remove">- 移除</a>  ' : __p += '  <a class="q-add-btn J_add_remove">+ 选题</a>  ', __p += "  </div> </div>";
    return __p
}, JST["question/papers"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) _.size(data) && (__p += ' <h3 class="extend-mt">相关试卷</h3> <ul class="extend-mc">  ', _.each(data, function (a) {
        __p += '  <li>  <a href="/paper/view/' + (null == (__t = a.pid) ? "" : __t) + '" target="_blank" title="' + (null == (__t = a.title) ? "" : __t) + '" class="ex-tit">  <b></b><span>' + (null == (__t = a.title) ? "" : __t) + "</span>  </a>  </li>  "
    }), __p += " </ul> ");
    return __p
}, JST["question/subject"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<ul class="subjects-recomm">  ', _.each(data, function (a) {
        __p += '  <li>  <a href="/merge?id=' + (null == (__t = a.mt_id) ? "" : __t) + '" target="_blank">  <img src="' + (null == (__t = a.cover) ? "" : __t) + '">  </a>  </li>  '
    }), __p += " </ul>";
    return __p
}, JST["question/text-score"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="q-tit">' + (null == (__t = 0 != data.parent_id ? "（" + (data._n + 1) + "）" : data._n + 1 + ". ") ? "" : __t), 0 == data.parent_id && (__p += '<span class="t-score">（' + (null == (__t = data.score.score) ? "" : __t) + "分）</span>"), __p += (null == (__t = data.question_text) ? "" : __t) + " ", data.extra_file && (__p += ' <div class="q-audio" style="margin-bottom:10px;cursor:pointer;"> <audio controls>  <source src="' + (null == (__t = data.extra_file) ? "" : __t) + '" /> </audio> </div> '), __p += " </div>";
    return __p
}, JST["question/text"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="q-tit">' + (null == (__t = 0 != data.parent_id ? "（" + (data._n + 1) + "）" : data._n + 1 + ". ") ? "" : __t) + (null == (__t = data.question_text) ? "" : __t) + " ", data.extra_file && (__p += ' <div class="q-audio" style="margin-bottom:10px;cursor:pointer;"> <audio controls>  <source src="' + (null == (__t = data.extra_file) ? "" : __t) + '" /> </audio> </div> '), __p += " </div>";
    return __p
}, JST["question/type-show"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="do-q-mt">  <strong class="do-q-tit">' + (null == (__t = myUtils.chinesesn(data._n)) ? "" : __t) + "、" + (null == (__t = data._t) ? "" : __t) + '<span class="q-score">(共' + (null == (__t = type_count.count) ? "" : __t) + "题；共" + (null == (__t = type_count.score) ? "" : __t) + '分)</span></strong> </div> <ul class="do-q-mc"></ul>';
    return __p
}, JST["question/video"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) _.size(data) && (__p += ' <h3 class="extend-mt">相关视频</h3> <ul class="extend-mc">  ', _.each(data, function (a) {
        __p += '  <li>  <a href="' + (null == (__t = a.url) ? "" : __t) + '" target="_blank" title="' + (null == (__t = a.title) ? "" : __t) + '" class="ex-tit">  <i class="iconw-video"></i><span>' + (null == (__t = a.title) ? "" : __t) + "</span>  </a>  </li>  "
    }), __p += " </ul> ");
    return __p
}, JST["subjectpage/paper-item"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) "chapter" == data.type ? (__p += ' <dl class="subject-list cfx">  <dt>  <div class="w fl">  <div class="subject-cn">  <label class="iconw-checkbox custom-checkbox">  <input type="checkbox" value="' + (null == (__t = data.pid) ? "" : __t) + '" name="chapter[]">  </label>  <a href="javascript:;" class="subject-tit">' + (null == (__t = data.name) ? "" : __t) + "</a>  ", current_user.co_partner || (__p += "  <span>该专题只对<em>VIP</em>与<em>组卷通</em>用户开放</span>  "), __p += "  </div>  </div>  ", current_user.co_partner || (__p += '  <div class="subject-fun">  <a href="/help.html/request" class="link">还没有组卷通？点此申请</a>  </div>  '), __p += "  </dt> </dl> ") : (__p += ' <dd>  <div class="w fl">  <div class="subject-cn">  <label class="iconw-checkbox custom-checkbox ' + (null == (__t = data.checked ? "checked" : "") ? "" : __t) + ' ">  <input type="checkbox" value="' + (null == (__t = data.pid) ? "" : __t) + '" name="paper[]">  </label>  <a href="/paper/view/' + (null == (__t = data.pid) ? "" : __t) + '" class="subject-tit J_islogin">' + (null == (__t = data.name) ? "" : __t) + "<span>(" + (null == (__t = data.paper_data.qcount) ? "" : __t) + '道题)</span></a>   </div>  </div>  <div class="subject-fun">  <a href="/#paper/test/' + (null == (__t = data.pid) ? "" : __t) + '" class="test-btn J_islogin"><i class="iconw-ceshi2"></i>在线测试</a>  ', data.test ? __p += '  <span class="msg"> 平均分：<span class="numc">' + (null == (__t = data.test.avg) ? "" : __t) + "分</span></span>  " : __p += '  <span class="msg"> 平均分：<span>暂无测试</span></span>  ', __p += "  </div> </dd> ");
    return __p
}, JST["subjectpage/subject-items"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="loading-wrap">  <div class="loading-bg"></div>  <div class="loading"></div> </div> ', _.size(list) ? (__p += ' <ul class=" cfx">  ', _.each(list, function (a) {
        __p += '  <li>  <div class="subject subject-item--type' + (null == (__t = a.type) ? "" : __t) + '">  <div class="subject-bd cfx">  <div class="subject-pic">  <i class="iconc-zt"></i>  </div>  <div class="subject-mc">  <p>' + (null == (__t = a.type_name) ? "" : __t) + '</p>  <h3><a href="/#subject/detail/' + (null == (__t = a.id) ? "" : __t) + '" target="_blank" title="' + (null == (__t = a.title) ? "" : __t) + '">' + (null == (__t = a.title) ? "" : __t) + '</a></h3>  </div>  </div>  <div class="subject-ft">  <span><i class="iconw-time3"></i>时间：' + (null == (__t = a.format_date) ? "" : __t) + '</span>  <span><i class="iconw-download2"></i>下载：' + (null == (__t = a.downcount) ? "" : __t) + '</span>  <span><i class="iconw-eye"></i>浏览量：' + (null == (__t = a.hits) ? "" : __t) + "次</span>  </div>  </div>  </li>  "
    }), __p += " </ul> ") : __p += ' <div class="empty-ffxi">  <img src="/images/blank.png">  <p>筛选无结果，换个条件试试吧。</p> </div> ';
    return __p
}, JST["test/head-title"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="do-q-mt">  <strong class="do-q-tit">' + (null == (__t = myUtils.chinesesn(data._n)) ? "" : __t) + "、" + (null == (__t = data._t) ? "" : __t) + '</strong> </div> <div class="do-q-mc J_ques_items">  </div>';
    return __p
}, JST["test/side-card"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) head_t_collection.each(function (a) {
        __p += ' <div class="edit-handle-mt" title="' + (null == (__t = a.bareTitle()) ? "" : __t) + '">  <strong><span>' + (null == (__t = myUtils.chinesesn(a.get("_n"))) ? "" : __t) + "、</span>" + (null == (__t = a.get("_t")) ? "" : __t) + '</strong> </div> <div class="edit-handle-bd">  <ul class="item-num cfx">  ', a.collection.each(function (a) {
            __p += "  ", 6 == a.get("question_type") ? (__p += "  ", _.each(a.get("options"), function (s, t) {
                __p += '  <li data-idz="' + (null == (__t = a.id) ? "" : __t) + "." + (null == (__t = t) ? "" : __t) + '">  <a href="javascript:;" class="' + (null == (__t = a.hasDone(t + 1) ? "done" : "") ? "" : __t) + '" >' + (null == (__t = a.get("_n") + 1) ? "" : __t) + "." + (null == (__t = t + 1) ? "" : __t) + "</a>  </li>  "
            }), __p += "  ") : 7 == a.get("question_type") ? (__p += "  ", a.collection.each(function (s, t) {
                __p += '  <li data-idz="' + (null == (__t = a.id) ? "" : __t) + "." + (null == (__t = t) ? "" : __t) + '">  <a href="javascript:;" class="' + (null == (__t = s.hasDone() ? "done done1" : "") ? "" : __t) + '" >' + (null == (__t = a.get("_n") + 1) ? "" : __t) + "." + (null == (__t = t + 1) ? "" : __t) + "</a>  </li>  "
            }), __p += "  ") : __p += '  <li data-idz="' + (null == (__t = a.id) ? "" : __t) + '">  <a href="javascript:;" class="' + (null == (__t = a.hasDone() ? "done" : "") ? "" : __t) + '" >' + (null == (__t = a.get("_n") + 1) ? "" : __t) + "</a>  </li>  ", __p += "  "
        }), __p += "  </ul> </div> "
    });
    return __p
}, JST["test/used-time"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="timer-item">  <h3>00</h3>  <p>小时</p> </div> <div class="timer-item">  <h3>00</h3>  <p>分钟</p> </div> <div class="timer-item">  <h3>00</h3>  <p>秒</p> </div>';
    return __p
}, JST["specpage/add-new-head"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<form action="" class="save-question-form"> \x3c!--   <div class="type-name">  <label for="">大题名称：</label>  <input type="text" name="head_title" placeholder="请输入大题名称">  </div> --\x3e  <div class="f-cb">  <div class="select-item">  <label for="x-num">试题数量：</label>  <input type="text" name="num" class="x-num" value="1" >  </div>  <div class="select-item">  <label for="">选择题型：</label>  <select name="question_channel_type" id="">  ', _.each(params.question_channel_types, function (a, s) {
        __p += '  <option value="' + (null == (__t = s) ? "" : __t) + '">' + (null == (__t = a) ? "" : __t) + "</option>  "
    }), __p += '  </select>  </div>  <div class="select-item">  <label for="">试题难度：</label>  <select name="difficult_index" id="">  ', _.each(params.difficult_indexs, function (a, s) {
        __p += '  <option value="' + (null == (__t = s) ? "" : __t) + '">' + (null == (__t = a) ? "" : __t) + "</option>  "
    }), __p += "  </select>  </div>  </div> </form>";
    return __p
}, JST["specpage/add-new-ques"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<form action="" class="save-question-form f-cb">  <div class="select-item">  <label for="x-num">试题数量：</label>  <input type="text" name="num" class="x-num" value="1" >  </div>  <div class="select-item">  <label for="">选择题型：</label>  <select name="question_channel_type" id="">  ', _.each(params.question_channel_types, function (a, s) {
        __p += '  <option value="' + (null == (__t = s) ? "" : __t) + '">' + (null == (__t = a) ? "" : __t) + "</option>  "
    }), __p += '  </select>  </div>  <div class="select-item">  <label for="">试题难度：</label>  <select name="difficult_index" id="">  ', _.each(params.difficult_indexs, function (a, s) {
        __p += '  <option value="' + (null == (__t = s) ? "" : __t) + '">' + (null == (__t = a) ? "" : __t) + "</option>  "
    }), __p += "  </select>  </div> </form>";
    return __p
}, JST["specpage/dia-kn-item"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="kn-item">' + (null == (__t = name) ? "" : __t) + '<span class="del-it" data-id="' + (null == (__t = kid) ? "" : __t) + '"><i class="icone-del"></i></span></div>';
    return __p
}, JST["specpage/dia-know-tree"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) data ? (__p += '  <div class="hd">已选知识点<span>（最多选5个）</span></div> <div class="kn-list">  ', _.each(data.knowledge, function (a, s) {
        __p += '  <div class="kn-item">' + (null == (__t = a.name) ? "" : __t) + '<span class="del-it" data-id="' + (null == (__t = a.kid) ? "" : __t) + '"><i class="icone-del"></i></span></div>  '
    }), __p += " </div> ") : __p += ' <div class="f-cb dialog-know-tree">  <div class="kn-tree t-tree"></div>  <div class="w f-fl">  <div class="kn-selected-box">    </div>  </div> </div> ';
    return __p
}, JST["specpage/dia-select-spec"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<form class="dialog-temp-form">  <div class="name-wave" style="font-size: 12px;">*请选择细目表的类型：</div>  <div class="f-cb type-wave">  <span class="custom-radio ' + (null == (__t = 1 == ximutype ? "checked" : "") ? "" : __t) + '"><i class="iconw-radio"></i>' + (null == (__t = nj) ? "" : __t) + '模拟<input type="radio" name="paper_type" value="1" class="f-dn" ' + (null == (__t = 1 == ximutype ? "checked" : "") ? "" : __t) + ' ></span>  <span class="custom-radio ' + (null == (__t = 2 == ximutype ? "checked" : "") ? "" : __t) + '"><i class="iconw-radio"></i>期中试卷<input type="radio" name="paper_type" value="2" class="f-dn" ' + (null == (__t = 2 == ximutype ? "checked" : "") ? "" : __t) + ' ></span>  <span class="custom-radio ' + (null == (__t = 3 == ximutype ? "checked" : "") ? "" : __t) + '"><i class="iconw-radio"></i>期末试卷<input type="radio" name="paper_type" value="3" class="f-dn" ' + (null == (__t = 3 == ximutype ? "checked" : "") ? "" : __t) + ' ></span>  <span class="custom-radio ' + (null == (__t = 4 == ximutype ? "checked" : "") ? "" : __t) + '"><i class="iconw-radio"></i>其他<input type="radio" name="paper_type" value="3" class="f-dn" ' + (null == (__t = 3 == ximutype ? "checked" : "") ? "" : __t) + " ></span>  </div> </form> <script>    var g = [];  $('.dialog-temp-form').find('.custom-radio').each(function () {  new OT2.Element.radio(this, g).bindEvent();  });   <\/script>";
    return __p
}, JST["specpage/item-head"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="diy-tixy-hd">  <div class="big-tixy-tit">  <span class="tixy-sort">' + (null == (__t = myUtils.chinesesn(data._n)) ? "" : __t) + '</span>、<span class="editable J_Edit">' + __e(data.head_title) + '</span>  </div>  <div class="act">  <a href="javascript:;" class="del btn J_DelQ"><i class="iconw-del3"></i>删除</a>  <a href="javascript:;" class="add btn J_AddQ">+ 添加小题</a>  </div> </div> <div class="diy-tixy-grid">  <table>  <thead>  <tr>  <td>题序</td>  <td>题型</td>  <td>关联知识点<span class="kn-tit-tips">（最多选5个）</span></td>  <td>难度</td>  <td>操作</td>  </tr>  </thead>  <tbody></tbody>  </table> </div>';
    return __p
},JST["specpage/item-ques"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<td class="cell-1"><span>' + (null == (__t = data._n + 1) ? "" : __t) + '</span></td> <td class="cell-2">  <dl class="drop-list">  <dt><span>' + (null == (__t = params.question_channel_types[data.question_channel_type]) ? "" : __t) + '</span><i class="icone-sjjc"></i></dt>  <dd>  ', _.each(params.question_channel_types, function (a, s) {
        __p += '  <div data-val="' + (null == (__t = [data.cid, "question_channel_type", s].join(",")) ? "" : __t) + '" >' + (null == (__t = a) ? "" : __t) + "</div>  "
    }), __p += '  </dd>  </dl> </td> <td class="cell-3">  <div class="kn-items J_kn_items">  ', _.each(data.knowledge, function (a, s) {
        __p += '  <span class="kn-item">' + (null == (__t = a.name) ? "" : __t) + '<span class="del-it J_del_kn" data-kid="' + (null == (__t = a.kid) ? "" : __t) + '"><i class="icone-del"></i></span></span>  '
    }), __p += "  ", _.size(data.knowledge) < 5 && (__p += '  <span class="kn-add-item J_add_kn">+ 添加知识点</span>  '), __p += '  </div> </td> <td class="cell-4">  <dl class="drop-list">  <dt><span>' + (null == (__t = params.difficult_indexs[data.difficult_index]) ? "" : __t) + '</span><i class="icone-sjjc"></i></dt>  <dd>  ', _.each(params.difficult_indexs, function (a, s) {
        __p += '  <div data-val="' + (null == (__t = [data.cid, "difficult_index", s].join(",")) ? "" : __t) + '" >' + (null == (__t = a) ? "" : __t) + "</div>  "
    }), __p += '  </dd>  </dl> </td> <td class="cell-6"><a href="javascript:;" class="del-uiti J_del_q"><i class="iconw-del2"></i></a></td>';
    return __p
},JST["specpage/report-analyze"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) data.len ? (__p += '  <h4>大题题量分析</h4>  <div id="J_ChartQNum" class="xc"></div>  <h4>难度分析</h4>  <div id="J_ChartDifficulty" class="xc"></div>  ', _.size(data.knowledge) > 0 && (__p += '  <h4>知识点分析</h4>  <div id="J_ChartKnowlist" class="xc"></div>  '), __p += " ") : __p += '  <div class="empty-ffxi">  <img src="/images/blank.png">  <p>未检测到相关数据！</p>  </div> ';
    return __p
},JST["specpage/save-spec"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<form class="dialog-temp-form">  <div class="name-wave"><label for="">细目表名称：</label><input type="text" name="title" value="' + (null == (__t = name) ? "" : __t) + '" class="ximu-name" placeholder="请输入细目表名称"></div>  <div class="f-cb type-wave">  <label>细目表类型：</label>  <span class="custom-radio ' + (null == (__t = 1 == ximutype ? "checked" : "") ? "" : __t) + '"><i class="iconw-radio"></i>' + (null == (__t = nj) ? "" : __t) + '模拟<input type="radio" name="paper_type" value="1" class="f-dn" ' + (null == (__t = 1 == ximutype ? "checked" : "") ? "" : __t) + ' ></span>  <span class="custom-radio ' + (null == (__t = 2 == ximutype ? "checked" : "") ? "" : __t) + '"><i class="iconw-radio"></i>期中试卷<input type="radio" name="paper_type" value="2" class="f-dn" ' + (null == (__t = 2 == ximutype ? "checked" : "") ? "" : __t) + ' ></span>  <span class="custom-radio ' + (null == (__t = 3 == ximutype ? "checked" : "") ? "" : __t) + '"><i class="iconw-radio"></i>期末试卷<input type="radio" name="paper_type" value="3" class="f-dn" ' + (null == (__t = 3 == ximutype ? "checked" : "") ? "" : __t) + ' ></span>  <span class="custom-radio ' + (null == (__t = 4 == ximutype ? "checked" : "") ? "" : __t) + '"><i class="iconw-radio"></i>其他<input type="radio" name="paper_type" value="4" class="f-dn" ' + (null == (__t = 4 == ximutype ? "checked" : "") ? "" : __t) + " ></span>  </div> </form>";
    return __p
},JST["specpage/tbl-kn-item"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) _.each(data.knowledge, function (a, s) {
        __p += ' <span class="kn-item">' + (null == (__t = a.name) ? "" : __t) + '<span class="del-it J_del_kn" data-kid="' + (null == (__t = a.kid) ? "" : __t) + '"><i class="icone-del"></i></span></span> '
    }), __p += " ", _.size(data.knowledge) < 5 && (__p += ' <span class="kn-add-item J_add_kn">+ 添加知识点</span> '), __p += " ", "knowledge" == errcode && (__p += '<span class="none-kn-item">（请添加知识点）</span>'), __p += " ", "none" == errcode && (__p += '<p class="none-kn-question">（没有找到符合当前条件的试题）</p>');
    return __p
},JST["specpage/ximu-type"] = function (obj) {
    function print() {
        __p += __j.call(arguments, "")
    }

    obj || (obj = {});
    var __t, __p = "", __e = _.escape, __j = Array.prototype.join;
    with (obj) __p += '<div class="item-attr-mt">  <span class="item-attr-tit">类型：' + (null == (__t = data[cur_type] || "--") ? "" : __t) + '<i class="iconw-down2"></i></span>  <div class="item-attr-mc">  ', _.each(data, function (a, s) {
        __p += '  <a href="javascript:;" data-ximutype="' + (null == (__t = s) ? "" : __t) + '" >' + (null == (__t = a) ? "" : __t) + "</a>  "
    }), __p += "  </div> </div>";
    return __p
},JST["ucenter/u-shiti"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) __p += '<div class="JV_list"> <div class="items"></div> </div> <div class="page-wrap JV_page"> </div> <div class="BasketView"></div>';
    return __p
};