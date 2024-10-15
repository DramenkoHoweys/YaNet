const airports = [
    {
        "name": "CitrusLab",
        "slogan": "1Gbps IEPL+ 4Gbps隧道 支持按周期/按量付费",
        "url": "https://s.yanet.app/Epr0em",
        "features": ["iepl", "周期付费", "按量付费", "隧道", "中转", "解锁流媒体", "gpt", "ss", "trojan", "emby"],
    },
    {
        "name": "超实惠机场🔥",
        "slogan": "🎥 精彩影视随心看：与EMBY影视库合作，丰富视频资源尽在掌握（详情请参阅公告）。🌐 尖端网络技术支持：广港、深港、沪日等多地中转，搭载IEPL专线、歇斯底里2、SS、VMess等高质量线路，为您提供稳定、高速的网络连接。",
        "url": "https://s.yanet.app/rQegfU",
        "features": ["周期付费", "按量付费", "直连", "中转", "解锁流媒体", "不限设备数量", "gpt", "ss", "v2ray", "emby", "不限速"],
    },
    {
        "name": "养老机场",
        "slogan": "1Gbps IEPL+ 4Gbps隧道 支持按周期/按量付费",
        "url": "https://s.yanet.app/xj0ekK",
        "features": ["周期付费", "按量付费", "直连", "中转", "解锁流媒体", "gpt", "hysteria2", "reality"],
        "coupons": [
            {
                "code": "8ZHE",
                "text": "8折"
            },
        ]
    },
    {
        "name": "玉兔🔥",
        "slogan": "前小黑云改名而来，2022 年成立，有合作的HXD Emby，1Gbps 带宽保证，有定制的 Windows、Mac 和 Android 客户端。",
        "url": "https://s.yanet.app/e40hXj",
        "features": ["周期付费", "按量付费", "中转", "解锁流媒体", "不限设备数量", "gpt", "ss", "v2ray", "iepl", "emby"],
        "coupons": []
    },
    {
        "name": "博纳斯/蓝云",
        "slogan": "博纳斯蓝云网络运营团队均在海外，100%保证用户的隐私和数据安全。",
        "url": "https://s.yanet.app/sEze0P",
        "features": ["周期付费", "按量付费", "中转", "家宽", "解锁流媒体", "gpt", "ss"],
        "coupons": []
    },
    {
        "name": "白月光🔥",
        "slogan": "全中转节点，多落地负载。目前采用的 Shadowsocks 翻墙协议，全专线节点。",
        "url": "https://s.yanet.app/1W2fAl",
        "features": ["周期付费", "按量付费", "中转", "iepl", "解锁流媒体", "gpt", "ss", "不限速"],
        "coupons": [
            {
                "code": "BYG05OFFHA",
                "text": "半年付95折"
            },
            {
                "code": "BYG10OFFAN",
                "text": "年付9折"
            },
            {
                "code": "BYG15OFFTY",
                "text": "两年付85折"
            },
        ]
    },
    {
        "name": "速云梯🔥",
        "slogan": "流量充足，价格便宜，线路节点档次分明，覆盖绝大多数人群的使用需求。国内采用CN2/BGP入口，隧道中转，极速稳定。",
        "url": "https://s.yanet.app/DxuPgq",
        "features": ["周期付费", "按量付费", "中转", "解锁流媒体", "gpt", "ss", "v2ray", "隧道", "cn2", "bgp", "iplc"],
        "coupons": []
    },
    {
        "name": "EMO",
        "slogan": "可免费白嫖300G每月套餐。",
        "url": "https://s.yanet.app/d9EF5N",
        "features": ["周期付费", "按量付费", "直连", "解锁流媒体", "gpt", "ss", "v2ray"],
        "coupons": []
    },
    {
        "name": "狂热云",
        "slogan": "解锁全球各区流媒体，原生IP高速节点，有自建EMBY服务。",
        "url": "https://s.yanet.app/d9EF5N",
        "features": ["周期付费", "按量付费", "中转", "解锁流媒体", "gpt", "ss", "emby"],
        "coupons": []
    },
    {
        "name": "山水云",
        "slogan": "3元50G/4元100G的超低价格就可享受优质中转线路，50+多国家落地节点，晚高峰流畅观看4K/8K视频，流媒体解锁能力优秀。",
        "url": "https://s.yanet.app/xHnsTX",
        "features": ["周期付费", "按量付费", "中转", "解锁流媒体", "gpt", "ss", "不限速"],
        "coupons": []
    },
    {
        "name": "TKV",
        "slogan": "被俗称KTV😅，走全专线路线，解锁优秀，据称走广港、沪日、京德内网。",
        "url": "https://s.yanet.app/xHnsTX",
        "features": ["周期付费", "中转", "解锁流媒体", "gpt", "ss", "ipel", "bgp"],
        "coupons": []
    },
    {
        "name": "RecMata®",
        "slogan": "Core 套餐 全线采用 CTG CN2GIA，CU-II AS9929，CMI AS58453 等优质线路进行跨境通信，让您的电信宽带也能在晚高峰获取飞速的浏览体验。",
        "url": "https://s.yanet.app/xHnsTX",
        "features": ["周期付费", "直连", "解锁流媒体", "gpt", "ss", "cn2"],
        "coupons": []
    },
    {
        "name": "P1Cloud🔥",
        "slogan": "🚀 不限速🌐 50 + 全球边缘网络🔑 GPT / TikTok流媒体服务访问解锁🧰 不留日志保障隐私安全✈️ 全中转加速线路✅ 不限制设备数量",
        "url": "https://s.yanet.app/zMbfeG",
        "features": ["周期付费", "按量付费", "中转", "解锁流媒体", "不限设备数量", "gpt", "ss"],
        "coupons": [
            {
                "code": "888",
                "text": "季付 半年付 一年付 8 折"
            },
            {
                "code": "999",
                "text": "其他套餐全部 9 折"
            },
        ]
    },
    {
        "name": "最萌の云",
        "slogan": "速度和稳定性极佳，Youtube全天可8K。有低倍率节点/专用加速器/多种共享账户/负载均衡等等~，提供苹果、迪士尼、ChatGPT等共享账号。",
        "url": "https://s.yanet.app/zMbfeG",
        "features": ["周期付费", "按量付费", "中转", "专线", "解锁流媒体", "gpt", "v2ray", "trojan", "共享账号"],
        "coupons": []
    },
    {
        "name": "宝贝云",
        "slogan": "专注流媒体与性价比，价格便宜流量大。",
        "url": "https://s.yanet.app/frqSyS",
        "features": ["周期付费", "按量付费", "中转", "解锁流媒体", "gpt", "v2ray"],
        "coupons": []
    },
    {
        "name": "拓扑门",
        "slogan": "★9元专线不限速不限时间★8元专线不限流量!注册即有永久免费线路。从不做折扣价格实在没有套路。提供流媒体共享账号。",
        "url": "https://s.yanet.app/74sch8",
        "features": ["周期付费", "按量付费", "中转", "解锁流媒体", "gpt", "ss", "共享账号"],
        "coupons": []
    },
    {
        "name": "FASTLINK",
        "slogan": "节点速度高达2Gbps，秒开4k、支持8K · Anycast全球加速技术IPLC，中转因有尽有，高峰期稳定。",
        "url": "https://s.yanet.app/FPIMSK",
        "features": ["周期付费", "按量付费", "中转", "解锁流媒体", "gpt", "ss", "v2ray", "iplc", "bgp"],
        "coupons": []
    },
    {
        "name": "大马猴Cloud",
        "slogan": "💯完美解锁GPT/流媒体💫全中转加速✅可用线路随时增加⚡最大峰值2500Mbps",
        "url": "https://s.yanet.app/cgVhJo",
        "features": ["周期付费", "按量付费", "中转", "解锁流媒体", "不限设备数量", "gpt", "ss"],
        "coupons": [
            {
                "code": "9999",
                "text": "月付9折"
            },
            {
                "code": "8888",
                "text": "季付8折"
            },
            {
                "code": "7777",
                "text": "年付7折"
            },
        ]
    },
    {
        "name": "YKKCloud🔥",
        "slogan": "Trojan机场/BGP/隧道/综合性价比较高",
        "url": "https://s.yanet.app/KcBx91",
        "features": ["周期付费", "中转", "隧道", "解锁流媒体", "不限设备数量", "gpt", "trojan"],
        "coupons": []
    },
    {
        "name": "98K专线机场",
        "slogan": "全线路 IEPL 跨境专线出国1000Mbps峰值速率。Netflix、HBO、Disney+、ChatGPT等流媒体解锁",
        "url": "https://s.yanet.app/98Kairport",
        "features": ["周期付费", "按量付费", "中转", "解锁流媒体", "不限设备数量", "gpt", "ss", "不限速"],
        "coupons": []
    },
    {
        "name": "CATNET",
        "slogan": "基于自有专线资源托管服务，总冗余10Gbps，该订阅最大可突发250Mbps业务带宽，具有强大SLA保证。",
        "url": "https://s.yanet.app/jDLIMa",
        "features": ["周期付费", "按量付费", "中转", "解锁流媒体", "gpt", "ss", "不限速", "bgp"],
        "coupons": []
    },
    {
        "name": "FlyingBird飞鸟机场",
        "slogan": "一个全员海外落地的ss机场，全专线IPLC，不限速，不限设备数量，超稳晚高峰，流媒体全解锁！全节点解锁chatgpt！",
        "url": "https://s.yanet.app/SdraoW",
        "features": ["周期付费", "按量付费", "中转", "解锁流媒体", "gpt", "ss", "不限设备数量", "不限速", "iplc", "bgp"],
        "coupons": []
    },
    {
        "name": "WgetCloud🔥",
        "slogan": "多线BGP中转+双程CN2优质线路，独享带宽，并且在香港有自己的机房，可以保证高峰期稳定可用。",
        "url": "https://s.yanet.app/Sdr4mA",
        "features": ["周期付费", "中转", "解锁流媒体", "gpt", "ss", "trojan", "cn2", "bgp"],
        "coupons": []
    },
    {
        "name": "M78星云🔥",
        "slogan": "最高2000Mbps速率，可使用本站Emby服务，超万部4K影片免费观看，解锁奈飞，迪士尼，ChatGPT等服务。",
        "url": "https://s.yanet.app/02mIO6",
        "features": ["周期付费", "按量付费", "中转", "解锁流媒体", "gpt", "ss", "trojan", "iepl"],
        "coupons": []
    },
    {
        "name": "CornSS",
        "slogan": "所有节点均采用优质 IEPL 高速线路。全节点SS协议，无设备数限制。流媒体及各种服务解锁（Netflix ChatGPT 等）。",
        "url": "https://s.yanet.app/bTvLeo",
        "features": ["周期付费", "中转", "解锁流媒体", "gpt", "ss", "iepl", "不限速"],
        "coupons": []
    },
    {
        "name": "ENET",
        "slogan": "ENET机场全部IEPL内网专线接入，保障节点可用性以及高速率，晚高峰8K速率保障.节点落地IP均为本土纯原生IP，解锁本土特有流媒体服务 比如Netflix Disney+ 动画疯等服务。",
        "url": "https://s.yanet.app/YcllBt",
        "features": ["周期付费", "按量付费", "中转", "解锁流媒体", "gpt", "ss", "iepl", "iplc", "不限速", "emby", "不限设备数量"],
        "coupons": []
    },
    {
        "name": "哈基米",
        "slogan": "哈基米高速机场，不限制客户端数，不限制端口速度，不限制每日使用量。",
        "url": "https://s.yanet.app/13qtQJ",
        "features": ["周期付费", "按量付费", "直连", "中转", "解锁流媒体", "gpt", "v2ray", "不限速", "不限设备数量", "禁bt"],
        "coupons": []
    },
    {
        "name": "CokeCloud可乐云🔥",
        "slogan": "主打速度快，节点稳老牌机场，可定制原生千兆独享节点，亦有9.9元超值400G流量不限速，亦有不限时套餐选择。",
        "url": "https://s.yanet.app/jxUQE6",
        "features": ["周期付费", "按量付费", "中转", "解锁流媒体", "gpt", "trojan", "iplc", "不限速", "不限设备数量"],
        "coupons": []
    },
    {
        "name": "红杏云",
        "slogan": "秒开4K8K | 跑满宽带 | 5元/月222G 40元1000G不限时。",
        "url": "https://s.yanet.app/1xeCYp",
        "features": ["周期付费", "中转", "解锁流媒体", "gpt", "trojan", "iplc"],
        "coupons": []
    },
    {
        "name": "狗狗加速",
        "slogan": "Hysteria2协议，晚高峰速度依然优秀，4K秒开。",
        "url": "https://s.yanet.app/ngCtHU",
        "features": ["周期付费", "解锁流媒体", "gpt", "hysteria2"],
        "coupons": []
    },
]

const queryAirports = (filters: Array<string>, relation: String = "or") => {
    if (filters.length === 0) {
        return airports
    } else {
        switch (relation) {
            case 'and':
                return airports.filter(airport => {
                    return airport.features.filter(feature => filters.includes(feature)).length === filters.length
                })
                break;
            case 'or':
            default:
                return airports.filter(airport => {
                    return airport.features.filter(feature => filters.includes(feature)).length > 0
                })
                break;
        }
    }
}

export { airports, queryAirports }
