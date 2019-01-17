(function(t){function a(a){for(var n,s,o=a[0],c=a[1],r=a[2],u=0,p=[];u<o.length;u++)s=o[u],l[s]&&p.push(l[s][0]),l[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(a);while(p.length)p.shift()();return i.push.apply(i,r||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,o=1;o<e.length;o++){var c=e[o];0!==l[c]&&(n=!1)}n&&(i.splice(a--,1),t=s(s.s=e[0]))}return t}var n={},l={dbmanager:0},i=[];function s(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)s.d(e,n,function(a){return t[a]}.bind(null,n));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var r=0;r<o.length;r++)a(o[r]);var d=c;i.push([1,"chunk-vendors"]),e()})({1:function(t,a,e){t.exports=e("1f9b")},"1f9b":function(t,a,e){"use strict";e.r(a);e("cd2e");var n=e("8c56"),l=e.n(n),i=(e("ff66"),e("ea23"),e("dbff"),e("3a00")),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("单个机体编辑")]),e("ManageGundam")],1)},o=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[e("el-form",{attrs:{"label-width":"120px"}},[e("h2",[t._v("机体ID:"+t._s(t.gundam.ID))]),e("el-row",{attrs:{type:"flex",justify:"start"}},[e("el-col",{attrs:{lg:8,xs:8}},[e("v-img",{staticClass:"grey lighten-2",attrs:{id:"Avatar_dlg",src:"img/avatar/"+t.gundam.ID+".gif","lazy-src":"img/avatar/"+t.gundam.ID+".gif","aspect-ratio":"1","max-width":"120"}},[e("el-col",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)],1),e("br"),e("span",[t._v("图片路径：")]),e("el-input",{model:{value:t.gundam.avatarURL,callback:function(a){t.$set(t.gundam,"avatarURL",a)},expression:"gundam.avatarURL"}})],1),e("el-col",{attrs:{lg:6,xs:14}},[e("div",{staticClass:"inp-block"},[t._v("中文名称:\n          "),e("el-input",{model:{value:t.gundam.Name,callback:function(a){t.$set(t.gundam,"Name",a)},expression:"gundam.Name"}})],1),e("div",{staticClass:"inp-block"},[t._v("英文名称:\n          "),e("el-input",{model:{value:t.gundam.Name_en,callback:function(a){t.$set(t.gundam,"Name_en",a)},expression:"gundam.Name_en"}})],1),e("div",{staticClass:"inp-block"},[t._v("rank:\n          "),e("el-input",{model:{value:t.gundam.rank,callback:function(a){t.$set(t.gundam,"rank",a)},expression:"gundam.rank"}})],1),e("div",{staticClass:"inp-block"},[t._v("陆地类型:\n          "),e("el-input",{model:{value:t.gundam.landType,callback:function(a){t.$set(t.gundam,"landType",a)},expression:"gundam.landType"}})],1),e("div",{staticClass:"inp-block"},[t._v("战斗类型:\n          "),e("el-input",{model:{value:t.gundam.fightType,callback:function(a){t.$set(t.gundam,"fightType",a)},expression:"gundam.fightType"}})],1),e("div",{staticClass:"inp-block"},[t._v("参考评分:\n          "),e("el-input",{model:{value:t.gundam.rating,callback:function(a){t.$set(t.gundam,"rating",a)},expression:"gundam.rating"}})],1),e("div",{staticClass:"inp-block"},[t._v("机体血量:\n          "),e("el-input",{model:{value:t.gundam.life,callback:function(a){t.$set(t.gundam,"life",a)},expression:"gundam.life"}})],1)]),e("el-col",{attrs:{lg:10}},[e("div",{staticClass:"inp-block"},[t._v("梦服状态：\n          "),e("el-input",{model:{value:t.gundam.newState,callback:function(a){t.$set(t.gundam,"newState",a)},expression:"gundam.newState"}})],1),e("div",{staticClass:"inp-block"},[t._v("登场时间：\n          "),e("el-input",{model:{value:t.gundam.birth_date,callback:function(a){t.$set(t.gundam,"birth_date",a)},expression:"gundam.birth_date"}})],1),e("div",{staticClass:"inp-block"},[t._v("(直接写★)稀有度：\n          "),e("el-input",{model:{value:t.gundam.rare,callback:function(a){t.$set(t.gundam,"rare",a)},expression:"gundam.rare"}})],1),e("div",{staticClass:"inp-block"},[t._v("(直接写★)强度：\n          "),e("el-input",{model:{value:t.gundam.strength,callback:function(a){t.$set(t.gundam,"strength",a)},expression:"gundam.strength"}})],1),e("div",{staticClass:"inp-block"},[t._v("获取途径：\n          "),e("el-input",{model:{value:t.gundam.get_way,callback:function(a){t.$set(t.gundam,"get_way",a)},expression:"gundam.get_way"}})],1),e("div",{staticClass:"inp-block"},[t._v("GB价格：\n          "),e("el-input",{model:{value:t.gundam.GB_sale,callback:function(a){t.$set(t.gundam,"GB_sale",a)},expression:"gundam.GB_sale"}})],1),e("div",{staticClass:"inp-block"},[t._v("MB价格：\n          "),e("el-input",{model:{value:t.gundam.MB_sale,callback:function(a){t.$set(t.gundam,"MB_sale",a)},expression:"gundam.MB_sale"}})],1),e("div",{staticClass:"inp-block"},[t._v("图纸价格：\n          "),e("el-input",{model:{value:t.gundam.map_sale,callback:function(a){t.$set(t.gundam,"map_sale",a)},expression:"gundam.map_sale"}})],1)])],1),e("br"),e("el-row",[e("el-col",{attrs:{lg:12,xs:24}},[e("table",{attrs:{width:"90%"}},[e("tbody",[e("tr",[e("td",{attrs:{colspan:"6",align:"center",bgcolor:"#FFFFFF"}},[t._v("机体数值")])]),e("tr",[e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("攻击")])],1),e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("防御")])],1),e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("机动")])],1),e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("操控")])],1),e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("4D综合")])],1),e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("3D综合")])],1)]),e("tr",[e("td",[e("el-input",{model:{value:t.gundam.att,callback:function(a){t.$set(t.gundam,"att",a)},expression:"gundam.att"}})],1),e("td",[e("el-input",{model:{value:t.gundam.def,callback:function(a){t.$set(t.gundam,"def",a)},expression:"gundam.def"}})],1),e("td",[e("el-input",{model:{value:t.gundam.fly,callback:function(a){t.$set(t.gundam,"fly",a)},expression:"gundam.fly"}})],1),e("td",[e("el-input",{model:{value:t.gundam.ctl,callback:function(a){t.$set(t.gundam,"ctl",a)},expression:"gundam.ctl"}})],1),e("td",[e("el-input",{model:{value:t.gundam.D4sum,callback:function(a){t.$set(t.gundam,"D4sum",a)},expression:"gundam.D4sum"}})],1),e("td",[e("el-input",{model:{value:t.gundam.D3sum,callback:function(a){t.$set(t.gundam,"D3sum",a)},expression:"gundam.D3sum"}})],1)])])])]),e("el-col",{attrs:{lg:12,xs:24}},[e("table",[e("tbody",[e("tr",[e("td",{staticStyle:{width:"240px"},attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("繁体名称")])],1),e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("冲刺时间")])],1),e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("跳跃时间")])],1),e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("索敌距离")])],1)]),e("tr",[e("td",[e("el-input",{attrs:{type:"textarea",autosize:""},model:{value:t.gundam.nameCN_G,callback:function(a){t.$set(t.gundam,"nameCN_G",a)},expression:"gundam.nameCN_G"}})],1),e("td",[e("el-input",{attrs:{type:"textarea",autosize:""},model:{value:t.gundam.rushTime,callback:function(a){t.$set(t.gundam,"rushTime",a)},expression:"gundam.rushTime"}})],1),e("td",[e("el-input",{attrs:{type:"textarea",autosize:""},model:{value:t.gundam.jumpTime,callback:function(a){t.$set(t.gundam,"jumpTime",a)},expression:"gundam.jumpTime"}})],1),e("td",[e("el-input",{attrs:{type:"textarea",autosize:""},model:{value:t.gundam.Radar_distance,callback:function(a){t.$set(t.gundam,"Radar_distance",a)},expression:"gundam.Radar_distance"}})],1)])])])])],1),e("h1",[t._v("武器数据 可以参考飞雪等网站。")]),e("el-row",[e("el-dialog",{attrs:{title:"选择图片",visible:t.dialogVisible,width:"60%"},on:{"update:visible":function(a){t.dialogVisible=a}}},["weapon"==t.dlgType?e("el-row",t._l(t.weaponID,function(a){return e("el-card",{key:a,staticStyle:{float:"left"}},[e("el-button",[e("img",{attrs:{src:"img/weapon/"+a+".gif"},on:{click:function(e){t.setWeapon(a)}}})])],1)}),1):t._e(),"skill"==t.dlgType?e("el-row",t._l(t.skillList,function(a){return e("el-card",{key:a,staticStyle:{float:"left"}},[e("el-button",[e("img",{attrs:{src:"img/skill/"+a+".gif"},on:{click:function(e){t.setSkill(a)}}})])],1)}),1):t._e()],1),e("el-col",{attrs:{lg:12,xs:24}},[e("table",{staticClass:"table_border",attrs:{width:"100%",border:"0",cellpadding:"3",cellspacing:"0"}},[e("tbody",[e("tr",{staticClass:"txt_1"},[e("td",{staticClass:"border1",attrs:{colspan:"3",align:"left",bgcolor:"#FFFFCC"}},[t._v("武装一")]),e("td",{staticClass:"border1",attrs:{bgcolor:"#FFFFCC"}},[e("el-form-item",{attrs:{label:"必杀："}},[e("el-select",{attrs:{placeholder:"必杀类型"},model:{value:t.gundam.weapon1.special,callback:function(a){t.$set(t.gundam.weapon1,"special",a)},expression:"gundam.weapon1.special"}},[e("el-option",{attrs:{label:"乱舞型",value:"10"}}),e("el-option",{attrs:{label:"全弹发射型",value:"11"}}),e("el-option",{attrs:{label:"地图炮型",value:"12"}})],1)],1)],1),e("td",{staticClass:"border1",attrs:{bgcolor:"#FFFFCC"}},[e("span",{staticClass:"border2"},[e("img",{attrs:{src:"img/skill/"+t.gundam.weapon1.special+".gif"}})])])])])]),e("table",{staticClass:"table_border",attrs:{width:"100%",border:"0",cellpadding:"3",cellspacing:"0"}},[e("tbody",[t._l(t.gundam.weapon1.arms,function(a,n){return e("div",{key:n},[e("tr",[e("td",{staticClass:"border1",attrs:{width:"150",height:"50",align:"center",bgcolor:"#FFFFFF"}},[t._v("\n                  图片：\n                  "),e("img",{attrs:{id:"inp11img",src:a.imgID&&"img/weapon/"+a.imgID+".gif"||"img/weapon/0.gif",border:"0"},on:{click:function(a){t.openImgDlg("weapon",{statusNum:"1",index:n})}}})]),e("td",{attrs:{colspan:"4",align:"left",bgcolor:"#FFFFFF"}},[e("div",{staticClass:"inp-block"},[t._v("武器名称：\n                    "),e("el-input",{model:{value:a.name,callback:function(e){t.$set(a,"name",e)},expression:"weapon.name"}})],1),e("div",{staticClass:"inp-block"},[t._v("判定：\n                    "),e("el-input",{model:{value:a.panding,callback:function(e){t.$set(a,"panding",e)},expression:"weapon.panding"}})],1),e("div",{staticClass:"inp-block"},[t._v("射程：\n                    "),e("el-input",{model:{value:a.distance,callback:function(e){t.$set(a,"distance",e)},expression:"weapon.distance"}})],1),e("div",{staticClass:"inp-block"},[t._v("系数：\n                    "),e("el-input",{model:{value:a.xishu,callback:function(e){t.$set(a,"xishu",e)},expression:"weapon.xishu"}})],1),e("div",{staticClass:"inp-block"},[t._v("攻速倍率：\n                    "),e("el-input",{model:{value:a.attSpeed,callback:function(e){t.$set(a,"attSpeed",e)},expression:"weapon.attSpeed"}})],1)]),e("td",[e("div",{staticClass:"inp-block"},[t._v("延迟：\n                    "),e("el-input",{model:{value:a.ping,callback:function(e){t.$set(a,"ping",e)},expression:"weapon.ping"}})],1),e("div",{staticClass:"inp-block"},[t._v("弹数：\n                    "),e("el-input",{model:{value:a.shotNum,callback:function(e){t.$set(a,"shotNum",e)},expression:"weapon.shotNum"}})],1),e("div",{staticClass:"inp-block"},[t._v("回弹：\n                    "),e("el-input",{model:{value:a.huidan,callback:function(e){t.$set(a,"huidan",e)},expression:"weapon.huidan"}})],1),e("div",{staticClass:"inp-block"},[t._v("冷却：\n                    "),e("el-input",{model:{value:a.cold,callback:function(e){t.$set(a,"cold",e)},expression:"weapon.cold"}})],1)])]),e("tr",[e("td",{staticClass:"border1",attrs:{height:"2",colspan:"5",bgcolor:"#66CCFF"}})])])}),e("div",[e("tr",[e("td",{staticClass:"border1",attrs:{width:"150",height:"50",align:"center",bgcolor:"#FFFFFF"}},[t._v("\n                  图片：\n                  "),e("img",{attrs:{src:"img/weapon/999.gif"}})]),e("div",{staticClass:"inp-block"},[t._v("盾牌血量：\n                  "),e("el-input",{model:{value:t.gundam.weapon1.shield.life,callback:function(a){t.$set(t.gundam.weapon1.shield,"life",a)},expression:"gundam.weapon1.shield.life"}})],1),e("div",{staticClass:"inp-block"},[t._v("盾牌防御：\n                  "),e("el-input",{model:{value:t.gundam.weapon1.shield.def,callback:function(a){t.$set(t.gundam.weapon1.shield,"def",a)},expression:"gundam.weapon1.shield.def"}})],1)])])],2)])]),e("el-col",{attrs:{lg:12,xs:24}},[e("table",{staticClass:"table_border",attrs:{width:"100%",border:"0",cellpadding:"3",cellspacing:"0"}},[e("tbody",[e("tr",{staticClass:"txt_1"},[e("td",{staticClass:"border1",attrs:{colspan:"3",align:"left",bgcolor:"#FFFFCC"}},[t._v("武装二")]),e("td",{staticClass:"border1",attrs:{bgcolor:"#FFFFCC"}},[e("el-form-item",{attrs:{label:"必杀："}},[e("el-select",{attrs:{placeholder:"必杀类型"},model:{value:t.gundam.weapon2.special,callback:function(a){t.$set(t.gundam.weapon2,"special",a)},expression:"gundam.weapon2.special"}},[e("el-option",{attrs:{label:"乱舞型",value:"10"}}),e("el-option",{attrs:{label:"全弹发射型",value:"11"}}),e("el-option",{attrs:{label:"地图炮型",value:"12"}})],1)],1)],1),e("td",{staticClass:"border1",attrs:{bgcolor:"#FFFFCC"}},[e("span",{staticClass:"border2"},[e("img",{attrs:{src:"img/skill/"+t.gundam.weapon2.special+".gif"}})])])])])]),e("table",{staticClass:"table_border",attrs:{width:"100%",border:"0",cellpadding:"3",cellspacing:"0"}},[e("tbody",[t._l(t.gundam.weapon2.arms,function(a,n){return e("div",{key:n},[e("tr",[e("td",{staticClass:"border1",attrs:{width:"150",height:"50",align:"center",bgcolor:"#FFFFFF"}},[t._v("\n                  图片：\n                  "),e("img",{attrs:{id:"inp11img",src:a.imgID&&"img/weapon/"+a.imgID+".gif"||"img/weapon/0.gif",border:"0"},on:{click:function(a){t.openImgDlg("weapon",{statusNum:"2",index:n})}}})]),e("td",{attrs:{colspan:"4",align:"left",bgcolor:"#FFFFFF"}},[e("div",{staticClass:"inp-block"},[t._v("武器名称：\n                    "),e("el-input",{model:{value:a.name,callback:function(e){t.$set(a,"name",e)},expression:"weapon.name"}})],1),e("div",{staticClass:"inp-block"},[t._v("判定：\n                    "),e("el-input",{model:{value:a.panding,callback:function(e){t.$set(a,"panding",e)},expression:"weapon.panding"}})],1),e("div",{staticClass:"inp-block"},[t._v("射程：\n                    "),e("el-input",{model:{value:a.distance,callback:function(e){t.$set(a,"distance",e)},expression:"weapon.distance"}})],1),e("div",{staticClass:"inp-block"},[t._v("系数：\n                    "),e("el-input",{model:{value:a.xishu,callback:function(e){t.$set(a,"xishu",e)},expression:"weapon.xishu"}})],1),e("div",{staticClass:"inp-block"},[t._v("攻速倍率：\n                    "),e("el-input",{model:{value:a.attSpeed,callback:function(e){t.$set(a,"attSpeed",e)},expression:"weapon.attSpeed"}})],1)]),e("td",[e("div",{staticClass:"inp-block"},[t._v("延迟：\n                    "),e("el-input",{model:{value:a.ping,callback:function(e){t.$set(a,"ping",e)},expression:"weapon.ping"}})],1),e("div",{staticClass:"inp-block"},[t._v("弹数：\n                    "),e("el-input",{model:{value:a.shotNum,callback:function(e){t.$set(a,"shotNum",e)},expression:"weapon.shotNum"}})],1),e("div",{staticClass:"inp-block"},[t._v("回弹：\n                    "),e("el-input",{model:{value:a.huidan,callback:function(e){t.$set(a,"huidan",e)},expression:"weapon.huidan"}})],1),e("div",{staticClass:"inp-block"},[t._v("冷却：\n                    "),e("el-input",{model:{value:a.cold,callback:function(e){t.$set(a,"cold",e)},expression:"weapon.cold"}})],1)])]),e("tr",[e("td",{staticClass:"border1",attrs:{height:"2",colspan:"5",bgcolor:"#66CCFF"}})])])}),e("div",[e("tr",[e("td",{staticClass:"border1",attrs:{width:"150",height:"50",align:"center",bgcolor:"#FFFFFF"}},[t._v("\n                  图片：\n                  "),e("img",{attrs:{src:"img/weapon/999.gif"}})]),e("div",{staticClass:"inp-block"},[t._v("盾牌血量：\n                  "),e("el-input",{model:{value:t.gundam.weapon2.shield.life,callback:function(a){t.$set(t.gundam.weapon2.shield,"life",a)},expression:"gundam.weapon2.shield.life"}})],1),e("div",{staticClass:"inp-block"},[t._v("盾牌防御：\n                  "),e("el-input",{model:{value:t.gundam.weapon2.shield.def,callback:function(a){t.$set(t.gundam.weapon2.shield,"def",a)},expression:"gundam.weapon2.shield.def"}})],1)])])],2)])])],1),e("el-row",[e("el-col",{attrs:{lg:24,xs:24}},t._l(t.gundam.skill,function(a,n){return e("div",{key:n},[e("img",{staticStyle:{float:"left"},attrs:{src:a.id&&"img/skill/"+a.id+".gif"||"img/skill/"+a.img_local.match(/\d+\.gif/),"max-width":"20"},on:{click:function(a){t.openImgDlg("skill",n)}}}),e("el-form-item",{attrs:{label:"技能名称："}},[e("el-input",{model:{value:a.skill_name,callback:function(e){t.$set(a,"skill_name",e)},expression:"skill.skill_name"}})],1),e("br"),e("el-form-item",{attrs:{label:"技能详情："}},[e("el-input",{model:{value:a.skill_detail,callback:function(e){t.$set(a,"skill_detail",e)},expression:"skill.skill_detail"}})],1)],1)}),0),e("el-button",{on:{click:function(a){t.gundam.skill.pop()}}},[t._v("末尾删除一项技能")]),e("el-button",{on:{click:function(a){t.gundam.skill.push({id:"0",skill_detail:"",skill_name:""})}}},[t._v("末尾增加一项技能")])],1),e("p",[t._v("合成需要：（暂不可用）")]),e("el-button",[t._v("加机体")]),e("el-button",[t._v("减机体")]),e("el-row",[e("el-col",t._l(t.gundam.makeNeed,function(a){return e("el-card",{key:a.ID,staticClass:"mk-card"},[e("a",{attrs:{title:a.name,href:"#Avatar_dlg"},on:{click:function(a){t.findGundam("makeNeed")}}},[e("v-img",{class:a.role&&"key"==a.role?"as-key":"",attrs:{src:"img/avatar/"+a.id+".gif","lazy-src":"img/avatar/"+a.id+".gif","aspect-ratio":"1","max-width":"60"}}),e("br"),e("span",{staticClass:"mkcard-word"},[t._v(t._s(a.name)+"："+t._s(a.Level))])],1)])}),1)],1),t.gundam.makeNeed_CN&&t.gundam.makeNeed_CN.length?e("p",[t._v("国服合成需要：")]):t._e(),e("el-row",[e("div",t._l(t.gundam.makeNeed_CN,function(a){return e("el-card",{key:a.ID,staticClass:"mk-card"},[e("a",{attrs:{title:a.name,href:"#Avatar_dlg"},on:{click:function(a){t.findGundam("makeNeed_CN")}}},[e("v-img",{class:a.role&&"key"==a.role?"as-key":"",attrs:{src:"img/avatar/"+a.id+".gif","lazy-src":"img/avatar/"+a.id+".gif","aspect-ratio":"1","max-width":"60"}}),e("br"),e("span",{staticClass:"mkcard-word"},[t._v(t._s(a.name)+"："+t._s(a.Level))])],1)])}),1)]),t.gundam.toMake&&t.gundam.toMake.length?e("p",[t._v("用于合成：")]):t._e(),t.gundam.toMake&&t.gundam.toMake.length?e("el-row",[e("div",t._l(t.gundam.toMake,function(a){return e("el-card",{key:a.ID,staticClass:"mk-card"},[e("a",{attrs:{title:a.name,href:"#Avatar_dlg"},on:{click:function(a){t.findGundam("toMake")}}},[e("v-img",{class:a.role&&"as-ke"==a.role?"as-key":"",attrs:{src:"img/avatar/"+a.id+".gif","lazy-src":"img/avatar/"+a.id+".gif","aspect-ratio":"1","max-width":"60"}}),e("br"),e("span",{staticClass:"mkcard-word"},[t._v(t._s(a.name)+"："+t._s(a.Level))])],1)])}),1)]):t._e(),e("el-row",{attrs:{type:"flex",align:"start"}},[e("div",{staticClass:"inp-block"},[t._v("扭蛋机：(纯数字。请用逗号','隔开)\n        "),e("el-input",{attrs:{placeholder:"记得用英文,隔开哦"},model:{value:t.gundamMachine,callback:function(a){t.gundamMachine=a},expression:"gundamMachine"}})],1)]),e("br"),e("el-row",{attrs:{type:"flex",align:"start"}},[e("strong",[t._v("昵称，绰号，tags：\n        "),e("br"),t._v("(请用逗号','隔开)\n      ")]),e("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"记得用英文,隔开哦",type:"textarea",autosize:""},model:{value:t.gundamtags,callback:function(a){t.gundamtags=a},expression:"gundamtags"}})],1),e("el-row",{attrs:{type:"flex",align:"start"}},[e("div",{staticClass:"inp-block"},[e("strong",[t._v("推荐插件，技能：(暂不可用)")]),e("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"记得用英文,隔开哦",type:"textarea",autosize:"",disabled:!0},model:{value:t.gundam.plugins,callback:function(a){t.$set(t.gundam,"plugins",a)},expression:"gundam.plugins"}})],1)]),e("el-row",{attrs:{type:"flex",align:"start"}},[e("p",[t._v("其他信息：")]),e("p",[t._v("-势力："+t._s(t.gundam.force))]),e("p",[t._v("-"+t._s(t.gundam.feature))]),e("p",[t._v("-出自作品："+t._s(t.gundam.from))]),e("p",[t._v("-驾驶员："+t._s(t.gundam.pilot))])]),e("el-form-item",{attrs:{label:"机体故事："}},[e("el-input",{staticStyle:{width:"80%"},attrs:{type:"textarea",autosize:""},model:{value:t.gundam.story,callback:function(a){t.$set(t.gundam,"story",a)},expression:"gundam.story"}})],1),e("el-form-item",{attrs:{label:"机体简评："}},[e("el-input",{staticStyle:{width:"80%"},attrs:{type:"textarea",autosize:"",placeholder:"机体简评"},model:{value:t.gundam.comment,callback:function(a){t.$set(t.gundam,"comment",a)},expression:"gundam.comment"}})],1),e("el-row",{attrs:{type:"flex",align:"start"}},[t._v("贡献者，愿意留下你的名字吗？\n      "),e("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"请留下你的名字"},model:{value:t.contributor,callback:function(a){t.contributor=a},expression:"contributor"}})],1),e("el-row",{attrs:{type:"flex",align:"start"}},[t._v("\n      贡献者名单：\n    "),t._l(t.gundam.contributor,function(a){return e("el-tag",{key:a},[t._v(t._s(a))])})],2),e("el-row",{attrs:{type:"flex",align:"start"}},[t._v("可选内容：\n      "),e("el-checkbox",{model:{value:t.gundam.showWeaponBlock,callback:function(a){t.$set(t.gundam,"showWeaponBlock",a)},expression:"gundam.showWeaponBlock"}},[t._v("可展示武器(如果武器数据确认无误了，就勾选此项)")])],1),e("br"),e("h3",[t._v("发布时间：")]),e("div",{staticClass:"block"},[e("span",{staticClass:"demonstration"},[t._v("选择发布时间")]),e("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.gundam.publicTime,callback:function(a){t.$set(t.gundam,"publicTime",a)},expression:"gundam.publicTime"}})],1),e("el-button",{attrs:{type:"primary"},on:{click:t.submitGundam}},[t._v("我填完啦，保存一下！")])],1)],1)},r=[],d=e("f360"),u=e.n(d),p=(e("b726"),e("6134"),e("0be8"),e("eee6"),e("8383"),e("7f43")),m=e.n(p),g={data:function(){return{loading:!1,dialogVisible:!1,radioTmp:"1",publicTime:"",contributor:"",gundam:{weapon1:{shield:{},arms:[{},{},{}],special:""},weapon2:{shield:{},arms:[{},{},{}],special:""},skill:[],Machine:[],makeNeed:[],toMake:[],makeNeed_CN:[],tags:[]},gundamMachine:"",Machine:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81"],weaponID:[0,1,2,3,4,5,6,11,12,13,14,15,16,21,22,23,25,26,27,28,31,32,33,34,35,36,37,38,39,41,42,43,999],skillList:[],weaponNow:{statusNum:"",weaponID:""},dlgType:""}},computed:{getshow:{get:function(){return this.show||!1},set:function(){this.$emit("dialogData",!1)}},showFullDlg:{get:function(){var t=document.body.clientWidth;return t<768},set:function(t){return t}},newState:{get:function(){return this.gundam.newState?this.gundam.newState:this.gundam.get_way?"已登场":"未知"}},gundamtags:{get:function(){if(this.gundam.tags)return this.gundam.tags.toString().replace(/[\,，]{2,4}/,",")},set:function(t){this.gundam.tags=t.split(/[\,，]{1,4}/)}}},updated:function(){document.querySelector(".el-dialog__wrapper")},methods:{updateGundam:function(t){var a=this;this.loading=!0,m.a.post("/getGundam/findOne",t).then(function(t){a.gundam=t.data,a.loading=!1;var e=document.querySelector(".el-dialog__wrapper");e.scrollTop=0})},submitGundam:function(){var t=this;this.loading=!0;var a=this,e=this.gundam;e.Machine=this.gundamMachine.split(/[\,,\，]/),e.tags=this.gundamtags.split(/[\,,\，]/),this.gundam.showWeaponBlock&&(delete this.gundam.weapon,delete this.gundam.weaponTable),this.gundam.contributor||(this.gundam.contributor=[]),this.contributor.trim()&&this.gundam.contributor.push(this.contributor),m.a.request({url:"/DBmanage/updateOne",data:a.gundam,method:"post",withCredentials:!0,headers:{Cookie:"koa:sess=eyJwYXNzcG9ydCI6eyJ1c2VyIjoxfSwiX2V4cGlyZSI6MTU0NzY1MzIzODExOCwiX21heEFnZSI6ODY0MDAwMDB9; koa:sess.sig=ctgJmJQx-fnX9C_PXogwENDcWjg; Hm_lvt_9fae1e68827654f107eb59cd7d290864=1547471284,1547511142,1547555999,1547641188; Hm_lpvt_9fae1e68827654f107eb59cd7d290864=1547644806"}}).then(function(a){t.loading=!1,a.data.status&&"ok"==a.data.status?console.log("ok"):console.log("error")})},openImgDlg:function(t,a){var e=this;this.dlgType=t,"skill"==t?(this.skillNow=a,this.skillList.length?this.dialogVisible=!0:(this.loading=!0,m.a.request({url:"/DBmanage/skillIDList",method:"get",withCredentials:!0,headers:{Cookie:"koa:sess=eyJwYXNzcG9ydCI6eyJ1c2VyIjoxfSwiX2V4cGlyZSI6MTU0NzY1MzIzODExOCwiX21heEFnZSI6ODY0MDAwMDB9; koa:sess.sig=ctgJmJQx-fnX9C_PXogwENDcWjg; Hm_lvt_9fae1e68827654f107eb59cd7d290864=1547471284,1547511142,1547555999,1547641188; Hm_lpvt_9fae1e68827654f107eb59cd7d290864=1547644806"}}).then(function(t){e.loading=!1,e.skillList=t.data,e.dialogVisible=!0}))):(this.weaponNow={statusNum:a.statusNum,weaponID:a.index},this.dialogVisible=!0)},setWeapon:function(t){this.gundam["weapon".concat(this.weaponNow.statusNum)].arms[this.weaponNow.weaponID].imgID=t,this.dialogVisible=!1},setSkill:function(t){this.gundam.skill[this.skillNow].id=t,this.dialogVisible=!1},getUrlKey:function(t){var a="(^|&)".concat(t,"=([^&]*)(&|$)"),e=window.location.search.substr(1).match(a);return null!=e?unescape(e[2]):null}},mounted:function(){this.loading=!0;var t=this,a=this.getUrlKey("id");m()({url:"/getGundam/findOne",data:{id:a},method:"post"}).then(function(a){t.loading=!1,t.gundam=u()(t.gundam,a.data)})}},f=g,v=(e("749f"),e("c46c")),b=Object(v["a"])(f,c,r,!1,null,null,null);b.options.__file="ManageGundam.vue";var k=b.exports,h={name:"app",components:{ManageGundam:k}},_=h,w=(e("53f6"),Object(v["a"])(_,s,o,!1,null,null,null));w.options.__file="App.vue";var F,x,y=w.exports,C="http://localhost:3001/",$={BASE_URL:C},N=$,D=Object(v["a"])(N,F,x,!1,null,null,null);D.options.__file="Global.vue";var S=D.exports,M=(e("9eb8"),e("615b")),I=e("fee2"),T=e("c463"),G=e("fc74"),O=e("9101"),j=e("6221");i["default"].prototype.GLOBAL=S,m.a.defaults.baseURL=S.BASE_URL,i["default"].prototype.axios=m.a,i["default"].use(l.a),i["default"].use(M["a"],{components:{VApp:I["a"],VCard:T["a"],VImg:G["a"],VDivider:O["a"],VProgressCircular:j["a"]}}),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(y)}}).$mount("#app")},"53f6":function(t,a,e){"use strict";var n=e("71f9"),l=e.n(n);l.a},"71f9":function(t,a,e){},"749f":function(t,a,e){"use strict";var n=e("858b"),l=e.n(n);l.a},"858b":function(t,a,e){}});
//# sourceMappingURL=dbmanager.6e55ec91.js.map