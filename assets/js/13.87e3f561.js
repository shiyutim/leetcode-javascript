(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{461:function(t,s,a){"use strict";a.r(s);var n=a(53),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_495-提莫攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_495-提莫攻击"}},[t._v("#")]),t._v(" 495 提莫攻击")]),t._v(" "),a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),a("p",[t._v("在《英雄联盟》的世界中，有一个叫 “提莫” 的英雄，他的攻击可以让敌方英雄艾希（编者注：寒冰射手）进入中毒状态。现在，给出提莫对艾希的攻击时间序列和提莫攻击的中毒持续时间，你需要输出艾希的中毒状态总时长。")]),t._v(" "),a("p",[t._v("你可以认为提莫在给定的时间点进行攻击，并立即使艾希处于中毒状态。")]),t._v(" "),a("p",[t._v("\b示例1:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("输入"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n输出"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n原因"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 第 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 秒初，提莫开始对艾希进行攻击并使其立即中毒。中毒状态会维持 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 秒钟，直到第 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 秒末结束。\n第 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" 秒初，提莫再次攻击艾希，使得艾希获得另外 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 秒中毒时间。\n所以最终输出 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" 秒。\n")])])]),a("p",[t._v("示例2:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("输入"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n输出"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n原因"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 第 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 秒初，提莫开始对艾希进行攻击并使其立即中毒。中毒状态会维持 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 秒钟，直到第 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 秒末结束。\n但是第 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 秒初，提莫再次攻击了已经处于中毒状态的艾希。\n由于中毒状态不可叠加，提莫在第 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 秒初的这次攻击会在第 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" 秒末结束。\n所以最终输出 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" 。\n")])])]),a("p"),t._v(" "),a("p",[t._v("提示：")]),t._v(" "),a("p",[t._v("你可以假定时间序列数组的总长度不超过 10000。\n你可以假定提莫攻击时间序列中的数字和提莫攻击的中毒持续时间都是非负整数，并且不超过 10,000,000。")]),t._v(" "),a("h2",{attrs:{id:"题解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),a("ol",[a("li",[t._v("遍历一次，每次计算当前数与下一个数之前的差值，如果大于等于中毒时间，则累加时间，否则加上差值。")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number[]} timeSeries\n * @param {number} duration\n * @return {number}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("findPoisonedDuration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("timeSeries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("timeSeries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 累计值")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("timeSeries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前值")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" timeSeries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下一个值")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" timeSeries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 差值")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" diff "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" current\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 大于等于中毒事件，则直接累加")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("diff "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" duration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" duration\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 否则加上差值")]),t._v("\n            time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" diff\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后一次中毒时间，不需要比较，直接加上即可")]),t._v("\n    time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" duration\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" time\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);