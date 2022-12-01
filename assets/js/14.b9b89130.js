(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{427:function(t,s,a){"use strict";a.r(s);var v=a(2),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"摘要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[t._v("#")]),t._v(" 摘要")]),t._v(" "),s("p",[t._v("DLT(分布式账本技术Distributed Ledger Technology)拥有不可篡改和透明等特性可以实现分布式网络的点对点交易。这篇论文旨在缩小use-case ideas和DLT技术实现之间的差距。做出以下贡献：")]),t._v(" "),s("ol",[s("li",[t._v("回顾和分类在文献中提出的DLT use case。")]),t._v(" "),s("li",[t._v("对DLT和他的设计选项(选择哪种DLT技术)的概述")]),t._v(" "),s("li",[t._v("提出一个集成框架，将DLT设计选项(选择哪种的DLT技术)与用例的期望特征相匹配")]),t._v(" "),s("li",[t._v("使用新框架分析用例")])]),t._v(" "),s("h2",{attrs:{id:"引言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[t._v("#")]),t._v(" 引言")]),t._v(" "),s("h3",{attrs:{id:"dlt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dlt"}},[t._v("#")]),t._v(" DLT")]),t._v(" "),s("p",[t._v("分布式账本技术就是为价值交换提供了一个分布式对等系统，无需任何中介。")]),t._v(" "),s("p",[t._v("DLT的基本特性能使交易双方建立信任，并且会增加交易的结算时间和减少中介机构的成本。智能合约的出现可能会改变金融，保险和供应链等行业的规则。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("该论文首先回顾了现有文献中提出的DLT案例")])]),t._v(" "),s("li",[s("p",[t._v("其次描述了DLT的技术特点，又总结了与传统数据库解决方案不同的四种不同的DLT设计方案。")])]),t._v(" "),s("li",[s("p",[t._v("还提出了一个决策框架来回答“是否需要区块链”，以及选择哪种类型的DLT设计方案。")])]),t._v(" "),s("li",[s("p",[t._v("本文还是用该框架来评估提出的use case,并且报告可能使用的潜在DLT设计方案。")])]),t._v(" "),s("li",[s("p",[t._v("最终就是说明该局限性。")])])]),t._v(" "),s("h2",{attrs:{id:"dlt使用案例的分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dlt使用案例的分类"}},[t._v("#")]),t._v(" DLT使用案例的分类")]),t._v(" "),s("h3",{attrs:{id:"一、内部用于行政目的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、内部用于行政目的"}},[t._v("#")]),t._v(" 一、内部用于行政目的")]),t._v(" "),s("p",[t._v("DLT可用于文件的公证和同步，能够简化跨组织系统每次创建，删除和更新文件的存储和完美公证。")]),t._v(" "),s("h3",{attrs:{id:"二、-交易的自动化-智能合约"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、-交易的自动化-智能合约"}},[t._v("#")]),t._v(" 二、 交易的自动化(智能合约)")]),t._v(" "),s("p",[t._v("通过智能合约，DLT能够在相关人之间实现交易的自动化。最值得被提的就是货币自动支付。还有通过将商量好的合同逻辑写在智能合约中，用于合同的自动执行。智能合约还能够实现自动化信息和数据的共享，来确保承包商和业主的数据一致性。")]),t._v(" "),s("h3",{attrs:{id:"三、-事务的不可篡改记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、-事务的不可篡改记录"}},[t._v("#")]),t._v(" 三、 事务的不可篡改记录")]),t._v(" "),s("p",[t._v("DLT能够保证交易的不可篡改和透明特性。DLT可以提供价值交易的时间戳。最常提到的用例就是数字模型的记录的变化。另一个被常提及的就是可用于供应链(采购，运输，货物的存储)的追踪。也可进行扩展，只要是一个porcess都可以考虑使用DLT来进行整个流程的跟踪。")]),t._v(" "),s("h3",{attrs:{id:"四、-资产-身份的不可篡改记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、-资产-身份的不可篡改记录"}},[t._v("#")]),t._v(" 四、 资产/身份的不可篡改记录")]),t._v(" "),s("p",[t._v("实物财产的所有权记录")]),t._v(" "),s("h3",{attrs:{id:"五、-作为支付或奖励计划的硬币-代币"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、-作为支付或奖励计划的硬币-代币"}},[t._v("#")]),t._v(" 五、 作为支付或奖励计划的硬币/代币")]),t._v(" "),s("p",[t._v("好的使用案例可以使用加密货币进行支付。可以是人们可以立即跨境汇款，只需要支付少量交易费用。Mathews等人建议使用代币在整个项目开发周期中奖励项目主要贡献者，即使项目移交给客户，也能获得贡献价值。这个可以保证更高质量项目的竣工。")]),t._v(" "),s("h3",{attrs:{id:"六、-dapps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、-dapps"}},[t._v("#")]),t._v(" 六、 DApps")]),t._v(" "),s("p",[t._v("DApp是基于DLT的应用程序，不由任何中介运行。其规则全部编写在智能合约中。产品和服务的分布式市场能够基于数字身份设置。这能够获取更加客观的数据，无需向第三方透露敏感信息。作为云存储和DLT组合的用于数字模型的分布式的公共数据环境(CDE)是很适合存储数字模型的，无需信任第三方服务器提供商或运行易受攻击的私有服务器。")]),t._v(" "),s("h3",{attrs:{id:"七、-分布式的自治组织-daos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、-分布式的自治组织-daos"}},[t._v("#")]),t._v(" 七、 分布式的自治组织(DAOs)")]),t._v(" "),s("p",[t._v("DAOs代表的是完全自主的组织，它是基于在DLT上运行的智能合约，没有任何人为干预。治理规则编码在智能合约中，激励机制通过加密经济设计隐含。DAOs利用IoT与现实世界交互，并利用数字模型提供位置上下文(location context)。具体示例包括根据预定义的性能指标自动订购配件或调整技术安装(regulate technical installations)。")]),t._v(" "),s("h2",{attrs:{id:"dlt技术和设计选项的综述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dlt技术和设计选项的综述"}},[t._v("#")]),t._v(" DLT技术和设计选项的综述")]),t._v(" "),s("h3",{attrs:{id:"dlt技术栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dlt技术栈"}},[t._v("#")]),t._v(" DLT技术栈")]),t._v(" "),s("p",[t._v("DLT有时也被称为协议层，构建在网络层之上，有三个主要组件影响其特性: "),s("strong",[t._v("账本")]),t._v("、"),s("strong",[t._v("对等网络")]),t._v("、"),s("strong",[t._v("管理方式")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("账本")])]),t._v(" "),s("p",[t._v("账本表示的是DLT的数据结构。最典型的账本就是比特币(具有顺序条目和总订单)")]),t._v(" "),s("blockquote",[s("p",[t._v("P2P网络")])]),t._v(" "),s("p",[t._v("账本是被分布在网络中的不同节点上。这些节点能够分为permissionless或者permissioned.")]),t._v(" "),s("p",[t._v("Permissionless nodes允许任何人通过共识机制启动一个节点写事务到账本中。Permissioned nodes则会限制写权限。")]),t._v(" "),s("p",[t._v("第二个区别就是在公共和私有账本之间。公共账本允许任何人读这个账本。私有账本只允许有权限的成员访问账本上的交易。")]),t._v(" "),s("p",[t._v("通常，public permissionless DLT会使网络更加分布化。")]),t._v(" "),s("blockquote",[s("p",[t._v("Governance")])]),t._v(" "),s("p",[t._v("DLT的自治定义了用户与系统交互的一组规则。最重要的组件是共识机制。PoW是第一个区块链共识机制。由于PoW非常的耗费资源，因此引入了其它类型的共识机制。如PoS,其中验证和添加交易的节点需要将资金至于风险之中，如果他们是恶意节点就会损失资金。")]),t._v(" "),s("h3",{attrs:{id:"基本特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本特性"}},[t._v("#")]),t._v(" 基本特性")]),t._v(" "),s("p",[t._v("DLT的基本特性是不变性(immutability)，不可抵赖性(non-repudiation),完整性(integrity)，透明(transparency)和平等(equal right)。由于不同的DLT设计具有不同的基本特性。这里总结了四种DLT的设计方案：private permissioned, private permissionless, public permissioned, and public permissionless. 权限越多，系统的信任越低，总体的基本属性越低。这几种设计方案只有"),s("strong",[t._v("数据的完整性")]),t._v("不会被权限(permission)影响。该特性可以通过使用加密哈希函数确保。")]),t._v(" "),s("p",[t._v("public permissionless DLT能够保证这全部的特性并且能够实现最高级别的信任。 public permissioned DLT限制写入访问甚至限制节点的设置。因此不能维护用户的平等权力(equal rights)。 private permissioned进一步限制了账本的读取访问，因此对网络外部的用户以及没有相应读取权限的内部用户来说是不透明的。private permissionless不能确保"),s("strong",[t._v("透明")]),t._v("这个性质。")]),t._v(" "),s("h2",{attrs:{id:"选择dlt设计方案的决策框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择dlt设计方案的决策框架"}},[t._v("#")]),t._v(" 选择DLT设计方案的决策框架")]),t._v(" "),s("p",[t._v("一个决策框架如下图所示，结合分析方法如下表。\n"),s("img",{attrs:{src:t.$withBase("/blockchain/adopt/2.1.png")}}),t._v(" "),s("img",{attrs:{src:t.$withBase("/blockchain/adopt/2.2.png")}})]),t._v(" "),s("p",[t._v("分析框架最常注重的是将信任作为决定DLT的标准。根据选择的DLT方案所需的基本特性，对用例中的信任关系进行评估。")]),t._v(" "),s("h3",{attrs:{id:"stage1-do-you-need-dlt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stage1-do-you-need-dlt"}},[t._v("#")]),t._v(" Stage1 : Do you need DLT?")]),t._v(" "),s("blockquote",[s("p",[t._v("使用细粒度更高的问题")])]),t._v(" "),s("ol",[s("li",[t._v("你需要存储状态吗")]),t._v(" "),s("li",[t._v("有频繁的写操作吗")]),t._v(" "),s("li",[t._v("你能够始终使用在线的可信第三方(TTP)吗")]),t._v(" "),s("li",[t._v("你想使用TTP吗")])]),t._v(" "),s("h3",{attrs:{id:"stage2-what-dlt-design"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stage2-what-dlt-design"}},[t._v("#")]),t._v(" Stage2: What DLT design?")]),t._v(" "),s("p",[t._v("框架的第二阶段评估适用于为使用案例选择DLT设计方案。")]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("参与者都互相知道吗")]),t._v(" "),s("li",[t._v("所有参与者利益相关吗")]),t._v(" "),s("li",[t._v("是否需要公共验证 &8")]),t._v(" "),s("li",[t._v("协议级别的控制功能是否需要")])]),t._v(" "),s("h3",{attrs:{id:"stage3-constraints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stage3-constraints"}},[t._v("#")]),t._v(" Stage3: Constraints?")]),t._v(" "),s("p",[t._v("阶段一和阶段二都是基于用例中所需的基本特性进行选择，这些特性通常都与DLT的性能成反比。如下图所示：\n"),s("img",{attrs:{src:t.$withBase("/blockchain/adopt/2.3.png")}})]),t._v(" "),s("p",[t._v("更分布式的系统由更强大的共识机制保护，无需信任中介机构即可实现数据的高度安全。选择很受限制的系统可能会带来更高的吞吐量，但会损害系统的基本特性(less security)。"),s("strong",[t._v("因此引入阶段3评估其他的约束。")])]),t._v(" "),s("p",[t._v("如下图所示：以下的六种约束可以被考虑：\n"),s("img",{attrs:{src:t.$withBase("/blockchain/adopt/2.4.png")}})]),t._v(" "),s("h2",{attrs:{id:"用例分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用例分析"}},[t._v("#")]),t._v(" 用例分析")]),t._v(" "),s("p",[t._v("如下图所示，将框架应用于分析用例之后，可以得到特定的DLT设计方案的九种组合。\n"),s("img",{attrs:{src:t.$withBase("/blockchain/adopt/2.5.png")}})]),t._v(" "),s("p",[t._v("下图展示了在框架第一阶段和第二阶段之后的每个用例的结果：\n"),s("img",{attrs:{src:t.$withBase("/blockchain/adopt/2.6.png")}})]),t._v(" "),s("p",[t._v("接下来要进行更加细节的讨论。")]),t._v(" "),s("h3",{attrs:{id:"stage1-do-you-need-dlt-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stage1-do-you-need-dlt-2"}},[t._v("#")]),t._v(" Stage1: Do you need DLT?")]),t._v(" "),s("p",[t._v("只要是需要TTP(trusted third party),就不需要使用DLT。为了减少中介的成本可以考虑使用DLT。参与者都互相知道并且利益相关不推荐使用DLT")]),t._v(" "),s("h3",{attrs:{id:"stage-2-which-dlt-design-option"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stage-2-which-dlt-design-option"}},[t._v("#")]),t._v(" Stage 2 Which DLT design option?")]),t._v(" "),s("p",[t._v("第一阶段之后，DLT是合适的解决方案，那么最终的DLT设计方案取决于评估的起点是参与者是否相互知道或者利益相关")]),t._v(" "),s("h3",{attrs:{id:"stage-3-constraints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stage-3-constraints"}},[t._v("#")]),t._v(" Stage 3 Constraints?")]),t._v(" "),s("p",[t._v("如果在Stage2后的DLT设计方案无法实现或者其他的约束是更重要的,选择另外的DLT或者不使用DLT是更好的。")]),t._v(" "),s("h2",{attrs:{id:"总结和讨论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结和讨论"}},[t._v("#")]),t._v(" 总结和讨论")]),t._v(" "),s("p",[t._v("该论文三个贡献")]),t._v(" "),s("ul",[s("li",[t._v("对使用案例的分类")]),t._v(" "),s("li",[t._v("提出了对特定使用场景选择DLT设计方案的框架")]),t._v(" "),s("li",[t._v("使用所提出的框架对所调查的用例进行分析")])])])}),[],!1,null,null,null);s.default=_.exports}}]);