(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31753c33"],{"255a":function(e,t,n){"use strict";var i=n("fc9d"),a=n.n(i);a.a},d344:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.id?"编辑":"新建")+"用户")]),n("el-form",{attrs:{model:e.model,"label-width":"100px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),n("el-form-item",{attrs:{label:"邮箱"}},[n("el-input",{model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}})],1),n("el-form-item",{attrs:{label:"创建时间"}},[n("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",readonly:""},model:{value:e.model.created_time,callback:function(t){e.$set(e.model,"created_time",t)},expression:"model.created_time"}})],1),n("el-form-item",{attrs:{label:"最近修改时间"}},[n("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",align:"left","picker-options":e.pickerOptions},model:{value:e.model.updated_time,callback:function(t){e.$set(e.model,"updated_time",t)},expression:"model.updated_time"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},a=[],r=(n("96cf"),n("3b8d")),s=n("2612"),c={name:"UserDetail",props:["id"],data:function(){return{model:{},loading:!1,pickerOptions:{shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]}}},created:function(){this.id&&this.fetch()},methods:{fetch:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["c"])(this.id);case 2:t=e.sent,200===t.code&&(this.model=t.data.user);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),save:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.id){e.next=6;break}return e.next=3,Object(s["g"])(this.id,this.model);case 3:t=e.sent,e.next=9;break;case 6:return e.next=8,Object(s["a"])(this.model);case 8:t=e.sent;case 9:200===t.code&&(this.$router.push("/user/list?refresh=1"),this.$message({type:"success",message:t.message}));case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},l=c,o=(n("255a"),n("2877")),m=Object(o["a"])(l,i,a,!1,null,"ebbb4d10",null);t["default"]=m.exports},fc9d:function(e,t,n){}}]);
//# sourceMappingURL=chunk-31753c33.6f7a5900.js.map