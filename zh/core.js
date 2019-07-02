//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Settings': '设置',
    'City': '城市',
    'Civics': '公民',
    'Evolve': '进化',
    'Farmer': '农民',
    'Government': '政府',
    'Jobs': '工作',
    'Light': '浅色',
    'Market': '市场',
    'Miner': '矿工',
    'New': '新',
    'Night': '夜晚',
    'Top Bar': '顶部条',
    'Stats': '统计',
    'Soft Reset Game': '软复位',
    'Scientist': '科学家',
    'Space': '太空',
    'Export Game': '导出存档',
    'Evolve by': '进化 作者:',
    'External Links': '外部链接',
    'Form DNA': '形成DNA',
    'Genetics': '遗传学',
    'Year': '年',
    'Total Resets': '总重置次数',
    'Theme': '主题',
    'Tax Rates': '税率',
    'Village': '村庄',
    'Import Game': '导入存档',
    'Import/Export Save': '导入/导出存档',
    'Industry': '行业',
    'Hard Reset Game': '硬复位',
    'Knowledge Spent': '知识花费',
    'Enable Reset Buttons': '启用重置按钮',
    'Entertainer': '艺人',
    'Eukaryotic Cell': '真核细胞',
    'Game Days Played': '玩的游戏天数',
    'kW': '知识',
    'Lumberjack': '伐木工',
    'Membrane': '细胞膜',
    'Morale': '情绪',
    'Overall': '总体',
    'Race Info': '比赛信息',
    'Red Green CB': '红绿CB',
    'Dark': '暗色',
    'Sexual Reproduction': '有性生殖',
    'Nucleus': '原子核',
    'Organelles': '细胞器',
    'Plasmid': '质粒',
    'Plasmids Earned': '获得的质粒',
    'Prehistoric': '史前',
    'New Research': '新研究',
    'Projects': '项目',
    'Professor': '教授',
    'Protoplasm': '原生质',
    'Quarry Worker': '采石工人',
    'Mitochondria': '细胞线粒体',
    'Multiplier Keys': '乘数键',
    'Space Miner': '太空矿工',
    'Research': '研究',
    'Resources': '资源',
    'Starved to Death': '饿死了',
    'Tab Navigation': '标签导航',
    'Unemployed': '失业人口',
    'Message Queue': '消息队列',
    'Day': '天',
    'Crispr': '',
    'Cement Plant Worker': '水泥厂工人',
    'Phagocytosis': '吞噬',
    'Banker': '银行家',
    'Coal Miner': '煤矿工人',
    'Colonist': '殖民者',
    'Completed': '已完成',
    'Completed Research': '已完成研究',
    'Current Game': '本轮游戏',
    'Died in Combat': '在战斗中死去',
    'Multicellular': '多细胞',
    'Evolve Mitochondria': '进化线粒体',
    'Decreases cost of producing new nucleus.': '降低生产新原子核的成本。',
    'Creates a new strand of DNA': '创造一条新的DNA链',
    'Creates 1 RNA': '创建1 RNA',
    'Evolve Eukaryotic Cell': '进化真核细胞',
    'Evolve Spores': '进化孢子',
    'Evolve Nucleus': '进化核',
    'Evolve Multicellular': '进化多细胞',
    'Evolve Membranes': '进化膜',
    'Spores': '孢子',
    'Increases the effect of membranes and eukaryotic cells': '增加膜和真核细胞的作用',
    'Increases DNA capacity by': '增加DNA容量',
    'Increases DNA generation from nucleus': '增加细胞核的DNA生成',
    'Increases RNA capacity by': '增加RNA容量',
    'Continue evolving towards sentience': '继续朝着感知方向发展',
    'Evolve Bryophyte': '进化苔藓植物',
    'Evolve Organelles': '进化细胞器',
    'Never': '从不',
    'Warning: This completely resets all your progress and can not be undone': '警告：这会完全重置您的所有游戏进度，无法撤消',
    'Club': '俱乐部',
    'Make a basic club': '做一个基本的俱乐部',
    'Bone Tools': '骨制工具',
    'Add a house to every farm': '为每个农场添加房屋',
    'Wounded': '受伤的',
    'University': '大学',
    'Rock Quarry': '采石场',
    'Mine': '矿山',
    'Foundry': '铸造厂',
    'Iron Mining': '铁矿',
    'Investing': '投资',
    'Mercenaries': '雇佣兵',
    'Plywood': '胶合板',
    'Brick': '砖',
    'Armillaria University': '蜜环菌大学',
    'Agriculture': '农业',
    'Armillaria': '蜜环菌',
    'Artisans': '工艺',
    'Helium': '氦',
    'Grain Silo': '粮仓',
    'Housing': '住房',
    'Reinforced Sheds': '加固棚',
    'Theatre': '剧院',
    'Containerization': '集装箱',
    'Marketplace': '市场',
    'Dewey Decimal System': '杜威十进制系统',
    'Bronze Pickaxe': '青铜镐',
    'Bronze Hoes': '青铜锄头',
    'Irrigation': '灌溉',
    'Banking': '银行',
    'Currency': '货币',
    'Leather Armor': '皮甲',
    'Cement': '水泥',
    'Bows': '弓',
    'Garrison': '驻军',
    'Bronze Axe': '青铜斧',
    'Primitive Axes': '基本坐标轴',
    'Scientific Method': '科学方法',
    'Metal Working': '金属加工',
    'Mining': '采矿',
    'Basic Storage': '基本存储',
    'Sundial': '日晷',
    'Farm Houses': '农舍',
    'Bronze Sledgehammer': '青铜锤',
    'Trade Routes': '贸易路线',
    'Cement Factory': '水泥厂',
    'Cyclops': '剑水蚤',
    'Wrought Iron': '锻铁',
    'Sheet Metal': '金属板',
    'Master Craftsman': '工匠大师',
    'Carpentry': '木匠',
    'Apprentices': '学徒',
    'Playwright': '剧作家',
    'Techno Wizards': '科技向导',
    'Bank Vault': '银行金库',
    'Research Grants': '研究基金',
    'House Safe': '房屋保险箱',
    'Scientific Journal': '科学期刊',
    'Adjunct Professors': '兼职教授',
    'Diplomacy': '外交',
    'Dynamite': '炸药',
    'Electric Arc Furnace': '电弧炉',
    'Electric Jackhammer': '电动手提钻',
    'Electricity': '电力',
    'Electronics': '电子产品',
    'Enables tax rates': '启用税率',
    'Factory': '工厂',
    'Fuel Depot': '燃料库',
    'Gantry Cranes': '门式起重机',
    'You have founded a settlement.': '你已经建立了一个定居点。',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    'DNA': 'DNA',
//    'RNA': '核糖核酸',

}

//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
var cnRegReplace = new Map([
	[/^Some DNA molecules have replicated, you gain (\d+) DNA.$/, '一些DNA分子已复制，你获得 $1 个DNA。'],
	[/^(\d+) \/$/, '$1 \/'],
	[/^Achievements Earned: (\d+) of$/, '成就获得：$1 \/'],
	[/^Automatically consume (\d+) RNA to create (\d+) DNA$/, '自动消耗$1个RNA以产生$2个DNA'],
	[/^Automatically generate (\d+) RNA$/, '自动生成$1个RNA'],
    [/^Turn (\d+) RNA into (\d+) DNA$/, '将$1个RNA转化为$2个DNA'],

]);

//2.采集新词
//20190320@JAR

var cnItem = function () {

    //传参是否非空字串
    if (!arguments[0]) return;

    //检验传参是否对象
    let text = arguments[0],
        s = '';
    if (typeof (text) != "string")
        return text;
    else
        s = arguments[0].charCodeAt();

    //检验传参是否英文
    // if (
    //     s < 65 || (s > 90 && s < 97) || (s > 122)
    //
    // ) return text;

    //处理前缀
    let text_prefix = "";
    for (let prefix in cnPrefix) {
        if (text.substr(0, prefix.length) === prefix) {
            text_prefix = cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for (let postfix in cnPostfix) {
        if (text.substr(-postfix.length) === postfix) {
            text_postfix = cnPostfix[postfix];
            text = text.substr(0, text.length - postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for (let reg of cnExcludePostfix) {
        let result = text.match(reg);
        if (result) {
            text_reg_exclude_postfix = result[0];
            text = text.substr(0, text.length - text_reg_exclude_postfix.length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for (let reg of cnExcludeWhole) {
        if (reg.test(text)) {
            return arguments[0];
        }
    }

    //尝试正则替换
    for (let [key, value] of cnRegReplace.entries()) {
        if (key.test(text)) {
            return text_prefix + text.replace(key, value) + text_reg_exclude_postfix + text_postfix;
        }
    }

    //遍历尝试匹配
    for (let i in cnItems) {
        //字典已有词汇或译文、且译文不为空，则返回译文
        if (
            text == i || text == cnItems[i] &&
            cnItems[i] != ''
        )
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    let save_cfg = 1;
    let save_text = save_cfg ? text : arguments[0]
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return arguments[0];
    }

    if (cnItems._OTHER_.length < 500) {
        //未收录则保存
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(
            function (a, b) {
                return a.localeCompare(b)
            }
        );
    }

    /*
        //开启生词打印
        //console.log(
            '有需要汉化的英文：', text
        );
    */

    //返回生词字串
    return arguments[0];
};

transTaskMgr = {
    tasks: [],
    addTask: function (node, attr, text) {
        this.tasks.push({
            node,
            attr,
            text
        })
    },
    doTask: function () {
        let task = null;
        while (task = this.tasks.pop())
            task.node[task.attr] = task.text;
    },
}

function TransSubTextNode(node) {
    if (node.childNodes.length > 0) {
        for (let subnode of node.childNodes) {
            if (subnode.nodeName === "#text") {
                let text = subnode.textContent;
                let cnText = cnItem(text);
                cnText !== text && transTaskMgr.addTask(subnode, 'textContent', cnText);
                //console.log(subnode);
            } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "TEXTAREA" && subnode.innerHTML && subnode.innerText) {
                if (subnode.innerHTML === subnode.innerText) {
                    let text = subnode.innerText;
                    let cnText = cnItem(text);
                    cnText !== text && transTaskMgr.addTask(subnode, 'innerText', cnText);
                    //console.log(subnode);
                } else {
                    TransSubTextNode(subnode);
                }
            } else {
                // do nothing;
            }
        }
    }
}

! function () {
    console.log("加载汉化模块");

    let observer_config = {
        attributes: false,
        characterData: true,
        childList: true,
        subtree: true
    };
    let targetNode = document.body;
    //汉化静态页面内容
    TransSubTextNode(targetNode);
    transTaskMgr.doTask();
    //监听页面变化并汉化动态内容
    let observer = new MutationObserver(function (e) {
        //window.beforeTransTime = performance.now();
        observer.disconnect();
        for (let mutation of e) {
            if (mutation.target.nodeName === "SCRIPT" || mutation.target.nodeName === "TEXTAREA") continue;
            if (mutation.target.innerHTML && mutation.target.innerText && mutation.target.innerHTML === mutation.target.innerText) {
                mutation.target.innerText = cnItem(mutation.target.innerText);
            } else if (mutation.target.nodeName === "#text") {
                mutation.target.textContent = cnItem(mutation.target.textContent);
            } else if (mutation.addedNodes.length > 0) {
                for (let node of mutation.addedNodes) {
                    if (node.nodeName === "#text") {
                        node.textContent = cnItem(node.textContent);
                        //console.log(node);
                    } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "TEXTAREA" && node.innerHTML && node.innerText) {
                        if (node.innerHTML === node.innerText) {
                            node.innerText = cnItem(node.innerText);
                        } else {
                            TransSubTextNode(node);
                            transTaskMgr.doTask();
                        }
                    }
                }
            }
        }
        observer.observe(targetNode, observer_config);
        //window.afterTransTime = performance.now();
        //console.log("捕获到页面变化并执行汉化，耗时" + (afterTransTime - beforeTransTime) + "毫秒");
    });
    observer.observe(targetNode, observer_config);
}();
