(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{523:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"测试数据格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试数据格式"}},[s._v("#")]),s._v(" 测试数据格式")]),s._v(" "),n("h2",{attrs:{id:"自动模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动模式"}},[s._v("#")]),s._v(" 自动模式")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),n("p",[s._v("您可以直接选择文件（支持多选）上传或将文件拖拽至相应位置上传。"),n("br"),s._v("\n若上传文件为 zip 格式，将会自动进行解压操作。")])]),s._v(" "),n("p",[s._v("对于一般的题目，您只需提供 "),n("code",[s._v(".in")]),s._v(" 和 "),n("code",[s._v(".out/.ans")]),s._v(" 文件，以下是一个例子。"),n("br"),s._v("\n请务必确保文件名中含有数字。形如 "),n("code",[s._v("sample.in")]),s._v(" 的文件是不会被自动识别的。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("喵? tree\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├── a1.in\n├── a1.out\n├── a2.in\n├── a2.out\n├── a3.in\n└── a3.out\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("测试数据将被自动识别，并使用 1S 256MB 的限制。")]),s._v(" "),n("h2",{attrs:{id:"使用配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用配置文件"}},[s._v("#")]),s._v(" 使用配置文件")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),n("p",[s._v("推荐您通过 评测设置 在线编辑题目配置，可以拥有更好的编辑体验。")])]),s._v(" "),n("p",[s._v("上传 "),n("code",[s._v("config.yaml")]),s._v(" 文件即可，文件格式如下（下方所有样例均为可选项，若无说明则预填写的内容即为默认值）：")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 题目类型，可以为 default(比对输出，可以含spj), objective(客观题), interactive(交互题)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" default\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局时空限制（此处的限制优先级低于测试点的限制）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("time")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1s\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 128m\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入输出文件名（例：使用 foo.in 和 foo.out），若使用标准 IO 删除此配置项即可")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("filename")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" foo\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此部分设置当题目类型为 default 时生效")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比较器类型，支持的值有 default（直接比对，忽略行末空格和文件末换行）, ccr, cena, hustoj, lemon, qduoj, syzoj, testlib(比较常用)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("checker_type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" default\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比较器文件（当比较器类型不为 default 时填写）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件路径（位于压缩包中的路径）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将通过扩展名识别语言，与编译命令处一致。在默认配置下，C++ 扩展名应为 .cc 而非 .cpp")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("checker")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" chk.cc\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此部分设置当题目类型为interactive时生效")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 交互器路径（位于压缩包中的路径）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("interactor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" interactor.cc\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Extra files 额外文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# These files will be copied to the working directory 这些文件将被复制到工作目录。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提示：您无需手动上传 testlib.h。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("user_extra_files")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" extra_input.txt\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("judge_extra_files")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" extra_file.txt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Test Cases 测试数据列表")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If neither CASES or SUBTASKS are set(or config.yaml doesn't exist), judge will try to locate them automaticly.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果 CASES 和 SUBTASKS 都没有设置或 config.yaml 不存在， 系统会自动尝试识别数据点。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# We support these names for auto mode: 自动识别支持以下命名方式：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. [name(optional)][number].(in/out/ans)         RegExp: /^([a-zA-Z]*)([0-9]+).in$/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   examples: ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     - c1.in / c1.out")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     - 1.in / 1.out")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     - c1.in / c1.ans")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. input[number].txt / output[number].txt        RegExp: /^(input)([0-9]+).txt$/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   - example: input1.txt / input2.txt")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The CASES option has higher priority than the SUBTASKS option!")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在有 CASES 设置项时，不会读取 SUBTASKS 设置项！")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The CASES option has been deprecated in the new version, please use the more personalized SUBTASKS!")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CASES 已于新版本中被废弃，请使用个性化程度更高的SUBTASKS！")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# score: 50     # 单个测试点分数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# time: 1s      # 时间限制")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# memory: 256m  # 内存限制")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cases:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   - input: abc.in")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     output: def.out")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   - input: ghi.in")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     output: jkl.out")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或使用Subtask项：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("subtasks")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("score")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" min "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选 min/max/sum，分别表示取所有测试点最小值、所有测试点最大值、所有测试点之和")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("time")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1s\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 64m\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cases")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("time")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.5s\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 32m "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可对单个测试点单独设置时间限制和内存限制")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" a.in\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("output")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" a.out\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" b.in\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("output")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" b.out\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("score")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("70")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("time")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.5s\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 32m\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，传入数组，表示仅在subtask0通过时此subtask才计分")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cases")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" c.in\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("output")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" c.out\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" d.in\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("output")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" d.out\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交语言限制")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列举出所有本题允许使用的语言对应的代码（需要和评测机 lang.yaml 内的语言代码相同）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用语言ID而非名称！对于有子类的选项，请详细至子分类！")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("langs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" c\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cc\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cc.cc11o2\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" pas\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br")])]),n("p",[s._v("可以在 "),n("a",{attrs:{href:"https://hydro.ac/d/system_test/",target:"_blank",rel:"noopener noreferrer"}},[s._v("此题库"),n("OutboundLink")],1),s._v(" 中找到各种类型题目的配置示例。")])])}),[],!1,null,null,null);t.default=e.exports}}]);