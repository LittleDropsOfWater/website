(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{155:function(n,t,s){"use strict";s.r(t);var o=s(0),e=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"content"},[s("p",[n._v("#setState\n参数（对象，回调函数）\n回调函数在协调完毕，dom生成后执行。\n依靠Object.assign 合并对象\n#props\n父传子，子传父\n#cssModule\n#事件绑定\n##合成事件：")]),n._v(" "),s("ul",[s("li",[n._v("消除浏览器差异")]),n._v(" "),s("li",[n._v("把dom和事件进行解耦\n##三种方式绑定this：")]),n._v(" "),s("li",[n._v("bind this")]),n._v(" "),s("li",[n._v("箭头函数  （匿名函数不相等，容易引起不必要的渲染）")]),n._v(" "),s("li",[n._v("constructor里进行bind （效率更高）\n#ref\n获取dom，  用在组件上会获得组件实例，依靠finNodeDOM\n#redux\nconnect，\n四个参数，\nconnect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])\nstate哪来？\n依靠上层组件依靠Provider组件传递值\n组件依靠context组件接受值\n[mapStateToProps]：\n将state作为props注入到组件中\nmapDispatchToProps(dispatch, [ownProps]) ：\n第二个参数能将action作为props绑定到组件中\n[mergeProps]：\nmergeProps(stateProps, dispatchProps, ownProps) 该参数非必须，redux默认会帮你把更新维护一个新的props对象，类似调用Object.assign({}, ownProps, stateProps, dispatchProps)。\n[options]:\noptions.pure:true, 当设为false时，浅拷贝依旧可以更新state")])])])}],!1,null,null,null);t.default=e.exports}}]);