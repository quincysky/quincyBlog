(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{433:function(a,v,t){"use strict";t.r(v);var _=t(2),r=Object(_.a)({},(function(){var a=this,v=a._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("p",[v("a",{attrs:{href:"https://vitalik.ca/general/2021/04/07/sharding.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("相关链接"),v("OutboundLink")],1)]),a._v(" "),v("h2",{attrs:{id:"三难困境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三难困境"}},[a._v("#")]),a._v(" 三难困境")]),a._v(" "),v("p",[a._v('"The Scalability Trilemma"三难困境问题的存在促成了'),v("strong",[a._v("分片")]),a._v("技术的诞生。\n"),v("img",{attrs:{src:a.$withBase("/blockchain/shard/1.1.png")}})]),a._v(" "),v("p",[a._v("首先说明区块链的三个特性： 可扩展性、去中心化、安全。")]),a._v(" "),v("p",[a._v('"The Scalability Trilemma"说明如果你坚持使用“简单(sample)”技术，你只能保证其中三个特性中的两个。下面列举三类“简单解决方案”，它们只能保证三个特性中的两个。')]),a._v(" "),v("ul",[v("li",[v("p",[a._v("传统区块链：包括比特币、pre-PoS/sharding 以太坊等相似区块链。它们都依赖于参与者运行一个全功能节点验证每一笔交易。保证了去中心化和安全但是没有可扩展性。")])]),a._v(" "),v("li",[v("p",[a._v("High-TPS链 以DPoS(或者其他)为共识的区块链网络保证了网络高性能，保障了可扩展醒和安全。但是容易造成中心化。")])]),a._v(" "),v("li",[v("p",[a._v("多链生态系统(Multi-chain ecosystems)。 保障了去中心化和可扩展性但不是安全的。因为攻击者只需要攻击一条链上的大多数节点就可以引起连锁反应，从而对其他链中的应用程序造成巨大损害。")])])]),a._v(" "),v("p",[v("strong",[a._v("分片技术")]),a._v("的出现保证了区块链网络的这三个特性。基于分片的区块链网络：")]),a._v(" "),v("ul",[v("li",[a._v("可扩展性： 它能处理比单个节点多得多的事务")]),a._v(" "),v("li",[a._v("去中心化： 它可以完全依赖消费者笔记本电脑生存，而不依赖于任何“超级节点”")]),a._v(" "),v("li",[a._v("安全： 攻击者不能用少量资源攻击系统的一小部分，他们只能视图控制和攻击整个系统。")])]),a._v(" "),v("h2",{attrs:{id:"通过随机采样进行分片-sharding-through-random-sampling"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通过随机采样进行分片-sharding-through-random-sampling"}},[a._v("#")]),a._v(" 通过随机采样进行分片(Sharding through Random Sampling)")]),a._v(" "),v("p",[a._v("最容易理解的分片方法就是通过随机抽样进行分片。相对于其他的分片方法它的信任是相对较弱的(weaker trust properties),但是技术相对简单。核心思想如下：")]),a._v(" "),v("p",[a._v("要做的就是随机分配验证工作。随机的分配验证者集合为第一组、第二组...。其中第一组验证第一个块，第二组验证第二个块...。一组随机选择的验证者被分配到验证一个块(或执行一些其他任务)，这组验证者被称为委员会(committee).")]),a._v(" "),v("img",{attrs:{src:a.$withBase("/blockchain/shard/1.2.png")}}),a._v(" "),v("h3",{attrs:{id:"分成100个委员会和分成100个链的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分成100个委员会和分成100个链的区别"}},[a._v("#")]),a._v(" 分成100个委员会和分成100个链的区别")]),a._v(" "),v("p",[a._v("主要有两个区别：")]),a._v(" "),v("ol",[v("li",[v("p",[a._v("随机采样分片可以防止攻击者只攻击其中的一个分片。而对于多链网络来说，一个链网络受损就会连锁反应影响其他链的正常运行。")])]),a._v(" "),v("li",[v("p",[a._v("紧密耦合： 即使一个shard得到一个恶意块，整个区块链都会重组。")])])]),a._v(" "),v("h2",{attrs:{id:"使用更好的安全模型改进分片"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用更好的安全模型改进分片"}},[a._v("#")]),a._v(" 使用更好的安全模型改进分片")]),a._v(" "),v("h3",{attrs:{id:"fraud-proofs"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fraud-proofs"}},[a._v("#")]),a._v(" Fraud proofs")]),a._v(" "),v("p",[a._v("Fraud proofs(欺诈证明)是一个系统，这个系统中接受计算的结果，需要有一个抵押权益的人签名事务，形式是“我证明，如果你使用输入X进行计算C,你得到输出Y”。任何其他的人都可以再次进行验证，如果出错保证金将会被没收。")]),a._v(" "),v("h3",{attrs:{id:"zk-snarks"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#zk-snarks"}},[a._v("#")]),a._v(" ZK-SNARKs")]),a._v(" "),v("p",[a._v("ZK-SNARKs是一种密码学证明形式，它直接证明了“对输入X执行计算C给出输出Y”的说法。")]),a._v(" "),v("h3",{attrs:{id:"数据可用性的可扩展验证更加困难"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据可用性的可扩展验证更加困难"}},[a._v("#")]),a._v(" 数据可用性的可扩展验证更加困难")]),a._v(" "),v("p",[a._v("欺诈证明不能用来验证数据的可用性。对欺诈证明的质疑是执行在与原始执行完全相同的环境中。")]),a._v(" "),v("h3",{attrs:{id:"如何检查1mb的数据是否可用而不必下载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何检查1mb的数据是否可用而不必下载"}},[a._v("#")]),a._v(" 如何检查1MB的数据是否可用而不必下载？")]),a._v(" "),v("p",[a._v("关键是一种称为数据可用性采样的技术。具体流程如下：")]),a._v(" "),v("ol",[v("li",[v("p",[a._v('使用一个名为"擦除编码"的工具将含有N个数据块的数据展开为一段含有2N个数据块的数据，这样任意N个数据块都可以恢复整个数据。')])]),a._v(" "),v("li",[v("p",[a._v("代替下载整个数据，用户只需在块中随机选择一个固定数量的位置，并且只有当他们所在选定位置成功地找到块中的块时才接受块。")])])]),a._v(" "),v("h3",{attrs:{id:"如何确保这一切都是正确的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何确保这一切都是正确的"}},[a._v("#")]),a._v(" 如何确保这一切都是正确的？")]),a._v(" "),v("p",[a._v("假设你有100个代码块，并且你希望在不依赖委员会的情况下有效的验证所有代码快的正确性。需要如下几个步骤:")]),a._v(" "),v("ol",[v("li",[v("p",[a._v("每个客户端对每个块进行数据可用性采样验证数据可用性。客户端只有在验证的所有数据的可用性都得到正确响应时才接受块。")])]),a._v(" "),v("li",[v("p",[a._v("现在数据可用性得到验证。接下来就是验证正确性。有两种技术：")]),a._v(" "),v("ol",[v("li",[a._v("欺诈证明(Fraud proofs).")]),a._v(" "),v("li",[a._v("ZK-SNARKs")])])])]),a._v(" "),v("h3",{attrs:{id:"什么是分片系统的关键属性和什么是权衡"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是分片系统的关键属性和什么是权衡"}},[a._v("#")]),a._v(" 什么是分片系统的关键属性和什么是权衡？")]),a._v(" "),v("p",[a._v("分片的关键目标是尽可能接近于复制传统区块链的最重要的安全属性，但不需要每个节点亲自验证每个事务。")]),a._v(" "),v("p",[a._v("在分片区块链(具有安全功能):")]),a._v(" "),v("ul",[v("li",[a._v("无效(Invalid)的块不能通过.")]),a._v(" "),v("li",[a._v("不可用(Unavailable)的块不能通过。")])]),a._v(" "),v("p",[a._v("传统的high-TPS链不能确保以上的功能。多链系统不能避免一个链遭受攻击等于攻击了整个网络。")]),a._v(" "),v("p",[a._v("侧链高度依赖于实现，它们通常受到传统的hign-TPS链的弱点(如果它们共享矿工或验证者)的影响或多链生态系统的弱点(如果它们不共享矿工或验证者)的影响。")]),a._v(" "),v("h2",{attrs:{id:"分片系统的缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分片系统的缺点"}},[a._v("#")]),a._v(" 分片系统的缺点")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("只依赖于委员会的分片链系统容易受到自适应性攻击，并且有较弱的责任。")])]),a._v(" "),v("li",[v("p",[a._v("只有在有足够多的联机客户端时，数据可用性抽样才是安全地。")])]),a._v(" "),v("li",[v("p",[a._v("如果分片链依赖于欺诈证据，那么它依赖于时间假设。如果网络速度太慢，节点可以在欺诈证据显示它是错误的之前接受最终的一个块。使用ZK-SNARKs验证有效性可以解决这个问题。")])]),a._v(" "),v("li",[v("p",[a._v("有大量的原始数据需要传递。在极端的网络条件下增加失败的风险")])]),a._v(" "),v("li",[v("p",[a._v("分片区块链依赖于分片对等网络，每个单独的P2P子网更容易受到攻击，因为它有更少的节点。数据可用性抽样可以减轻这种情况，因为子网之间存在一些冗余。")])])]),a._v(" "),v("h3",{attrs:{id:"为什么不集中生产和分片验证"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么不集中生产和分片验证"}},[a._v("#")]),a._v(" 为什么不集中生产和分片验证？")]),a._v(" "),v("p",[a._v("high-TPS是更困难的发现链中的垄断联盟。")])])}),[],!1,null,null,null);v.default=r.exports}}]);