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
    'Year': '年份',
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
    'Day': '天数',
    'Crispr': '基因编辑技术',
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
    'Titanium Axe': '钛金斧',
    'Thesis Papers': '学术论文',
    'Titanium Banded Crates': '钛金箱',
    'Titanium Drills': '钛金钻',
    'Titanium Hoes': '钛金锄',
    'Titanium Sledgehammer': '钛金锤',
    'Steel Axe': '钢斧',
    'Steel Beams': '钢梁',
    'Steel Containers': '钢集装箱',
    'Steel Hoes': '钢锄',
    'Steel Pickaxe': '钢镐',
    'Steel Rebar': '钢筋',
    'Steel Saws': '钢锯',
    'Steel Sledgehammer': '钢锤',
    'Steel Vault': '钢库',
    'Swiss Banking': '瑞士银行',
    'Iron Axe': '铁斧',
    'Iron Hoes': '铁锄',
    'Iron Pickaxe': '铁镐',
    'Iron Sledgehammer': '铁锤',
    'Jackhammer': '手提钻',
    'Kroll Process': '克罗尔工艺',
    'Large Volume Trading': '大宗交易',
    'Library': '图书馆',
    'Machine Gun': '机枪',
    'Machinery': '机械',
    'Mad Science': '疯狂科学',
    'Massive Volume Trading': '巨大的交易量',
    'Hospital': '医院',
    'Boot Camp': '新兵训练营',
    'Signing Bonus': '签署奖金',
    'Sawmills': '锯木厂',
    'Vocational Training': '职业培训',
    'Brickworks': '砖瓦厂',
    'Oxygen Converter': '氧气转换器',
    'Bessemer Process': '转炉炼钢法',
    'Blast Furnace': '高炉',
    'Crucible Steel': '坩埚钢',
    'Smelting': '冶炼',
    'Bayer Process': '拜耳法',
    'Rotary Kiln': '回转炉',
    'Coal Mining': '煤炭开采',
    'Windmill': '风车',
    'Grain Mill': '谷物磨粉机',
    'Aphrodisiac': '催欲剂',
    'Cottages': '茅屋',
    'Apartments': '公寓',
    'Radio': '广播',
    'Barns': '谷仓',
    'Warehouse': '仓库',
    'Reinforced Crates': '加强板条箱',
    'Cranes': '起重机',
    'Alloy Containers': '合金集装箱',
    'Corrupt Politicians': '腐败的政客',
    'Freight Trains': '货运列车',
    'Wharfs': '码头',
    'Savings Bonds': '储蓄债券',
    'Tesla Coil': '特斯拉线圈',
    'Internet': '互联网',
    'Industrialization': '工业化',
    'Mine Conveyor Belts': '矿山输送带',
    'Oil Derrick': '石油井架',
    'Flintlock Rifle': '燧发步枪',
    'Plate Armor': '板甲',
    'Black Powder': '黑火药',
    'ANFO': '铵油炸药',
    'Rebar': '螺纹钢',
    'Hunter Process': '转炉炼钢法',
    'Portland Cement': '硅酸盐水泥',
    'Oil Powerplant': '石油动力装置',
    'Series EE Bonds': '系列EE债券',
    'Wind Turbine': '风力涡轮机',
    'Security Cameras': '安全摄像头',
    'Safety Deposit Box': '保险箱',
    'Bioscience': '生物科学',
    'Uranium Extraction': '铀萃取',
    'Alloy Drills': '合金钻头',
    'Bunk Beds': '双层床',
    'Screw Conveyor': '螺旋输送机',
    'Assembly Line': '流水线',
    'Television': '电视',
    'Casino': '赌场',
    'Base': '基础',
    'Begin unlocking the mysteries of life.': '开始解开生命的奥秘。',
    'Apartment': '公寓',
    'Amphitheatre': '露天剧场',
    'Add a turbine to your windmills, allowing you to use them for power instead of milling.': '在你的风车上安装一个涡轮，这样你就可以用它们来发电而不是铣削。',
    'Banks will offer safety deposit boxes, increasing bank capacity by $25 per citizen.': '银行将提供安全保管箱，使每个公民的银行存款能力提高$25。',
    'Farm': '农场',
    'Cottage': '茅屋',
    'Metal Refinery': '金属精炼厂',
    'Intelligence': '智力',
    'Increase the maximum load of crates by adding strong titanium bands.': '通过添加强钛带来增加板条箱的最大载荷。',
    'New broadcast TV signals double the entertainment value of Wardenclyffe towers.': '新的广播电视信号使沃登克里弗塔的娱乐价值翻倍。',
    'Aluminium': '铝',
    'Coal Mine': '煤矿',
    'Coal Powerplant': '煤电厂',
    'Containers': '集装箱',
    'Bank': '银行',
    'Bonds': '债券',
    'Rating': '评分',
    'Miners': '矿工',
    'Lumber': '木材',
    'Lumber Yard': '伐木场',
    'Lumberjacks': '伐木工',
    'Powerplant': '发电厂',
    'Casinos not only offer entertainment for your populace but a new revenue source for you.': '赌场不仅为您的民众提供娱乐，还为您提供新的收入来源。',
    'Upgrades the commodities market to allow for buying and selling at higher volumes.': '对市场进行升级，使其能够以更高的交易量进行买卖。',
    'Upgrades the commodities market to allow for buying and selling at very high volumes.': '升级商品市场，允许以非常高的成交量进行买卖。',
    'Upgrades marketplace for massive orders': '为大量订单升级市场',
    'Iron smelting will result in small amounts of titanium production.': '炼铁会产生少量的钛生产。',
    'Steel smelting will result in small amounts of titanium production.': '钢冶炼将导致少量的钛生产。',
    'Wardenclyffe': '沃登克里弗塔',
    'Weather': '天气',
    'Wharf': '码头',
    'Workers': '工人',
    'Polymer': '聚合物',
    'Create a new high tech polymer material that can be used for a wide variety of applications.': '创造一种新的高科技聚合物材料，可用于各种应用。',
    'Upgrade your jackhammers with newer models. Improves mining activities.': '使用新型号升级您的手提钻。 改善采矿活动。',
    'Enhanced drills made with new alloys increase oil production by another estimated 25%.': '用新合金制成的增强型钻头使石油产量增加了约25%。',
    'Screw conveyors can greatly increase the output of cement factories, however they require power to operate.': '螺旋输送机虽然能大幅度提高水泥厂的产量，但其运行需要动力。',
    'Security cameras make monitoring large storage spaces easier, increasing storage potential.': '安全摄像头使监控大型存储空间变得更容易，增加了存储潜力。',
    'Increases Iron output of smelters by 20%.': '冶炼厂铁产量提高20%。',
    'Increases Steel output of smelters by 20%.': '冶炼厂钢产量提高20%。',
    'Increase the output of mining outposts by 6%': '将采矿前哨产量提高6％',
    'The assembly line revolutionizes manufacturing speeding up factory production by 50%.': '流水线彻底改变了制造业，使工厂生产速度提高了50％。',
    'This increases both consumption and production.': '这增加了消费和生产。',
    'Electric Jackhammers': '电动手提钻Upgrade your garrisons to house additional soldiers.',
    'Upgrade your garrisons to house additional soldiers.': '升级你的驻军以容纳更多的士兵。',
    'Discover Coal': '发现煤',
    'Increase the effectiveness of each trade post by 1.': '将每个贸易职位的效率提高1。',
    'Invent Banking': '发明银行',
    'Invent the concept of currency': '发明货币的概念',
    'Learn about how coal can be used as a resource.': '了解如何使用煤炭作为一种资源。',
    'Learn how to extract iron ore from mines.': '学习如何从矿山中提取铁矿石。',
    'Learn how to mine iron': '学习如何开采铁',
    'Increase iron output': '增加铁产量',
    'Smelter': '冶炼厂',
    'Trade Post': '贸易站',
    'Bioscience Lab': '生物科学实验室',
    'GM Food': '转基因食品',
    'No bonfires please': '请不要生火',
    'Extract oil from deep underground': '从地下深处开采石油',
    'Generates electricity from oil': '用石油发电',
    'If powered consumes 1kW but increases coal yield by': '如果功率消耗1kW，那么增加煤炭产量',
    'Library of Unus': '联合图书馆',
    'Enables aluminium mining by quarry workers and boosts aluminium production by': '通过采石工人实现铝矿开采，并提高铝产量',
    'Employs cement plant workers': '雇用水泥厂工人',
    'Employs coal miners': '雇用煤矿工人',
    'I care that they don\'t have any of their own.': '我关心的是他们自己没有。',
    'Generates electricity from coal': '用煤发电',
    'I don\'t care that they stole my idea...': '我不在乎他们偷了我的主意…',
    'Increases trade route capacity': '增加贸易路线上限',
    'Requires Coal': '需要煤',
    'Unus': '联合',
    'Refines aluminium': '精炼铝',
    'Requires Oil': '需要石油',
    'Roxxon': '信号开关',
    'Soldiers': '士兵',
    'Unus University': '联合大学',
    'Special storage for fuels': '燃料专用储藏库',
    'Wharfs offer a place for ships to dock': '码头为船只提供了一个停靠的地方',
    'Employs miners': '雇佣矿工',
    'Advanced science facility': '先进的科学设备',
    'Admission is free, but tomatoes are $9.99 each.': '门票是免费的，但是西红柿每个$9.99。',
    'A stage for the performing arts': '表演艺术的舞台',
    'If powered consumes 1kW but increases ore yield by': '如果电力消耗1kW，增加矿石产量',
    'If powered consumes 1kW but increases rock yield by': '如果电力消耗1kW，增加石头产量',
    'Create a sledgehammer with a bronze head': '创造一个铜头大锤',
    'Create a sledgehammer with an iron head': '创造一个铁头大锤',
    'Create a sledgehammer with a steel head': '创造一个钢头大锤',
    'Create a sledgehammer with a titanium head': '创造一个钛头大锤',
    'Use stronger steel as rebar, further reducing building cement costs.': '采用较强的钢材作为钢筋，进一步降低建筑水泥成本。',
    'Adding rebar to concrete will make it much stronger and reduce building cement costs.': '在混凝土中添加钢筋将使其更加坚固，并降低建筑水泥的成本。',
    'Portland cement is easier to make boosting productivity of cement workers by 20%.': '硅酸盐水泥更容易使水泥工人的生产率提高20%。',
    'Learn how to make cement from stone.': '学习如何用石头做水泥。',
    'Science fiction has popularized the idea of a Dyson Sphere, try to figure out how to make one.': '科幻小说普及了戴森球的概念，试图弄清楚如何制作一个戴森球。',
    'Create an axe made from bronze': '用青铜做一把斧头',
    'Upgrade axe technology to metal axes made from bronze. Improves lumber harvesting.': '升级斧头技术到青铜制成的金属斧头。提高木材收获。',
    'Create a pickaxe made from bronze': '创建一个由青铜制成的镐',
    'Create farming tools made from bronze': '创建由青铜制成的农具',
    'Create tools made from bronze that aid farming. Improves farm efficiency.': '创建青铜制成的工具，帮助农业。 提高农场效率。',
    'Create sledgehammers made from bronze. Improves rock quarrying.': '用铜制造大锤。 改善采石。',
    'Learn how to remove Aluminium from previously unusable waste material produced by your rock quarries.': '了解如何从您的采石场生产的以前无法使用的废料中去除铝。',
    'Libraries will have a minor effect on professor effectiveness.': '图书馆对教授效率的影响不大。',
    'Conceive of the scientific method. This will set your race down a path of science and discovery.': '设想科学的方法。这将使你们的种族走上科学和发现的道路。',
    'Create a sturdy axe made from iron': '用铁做一把结实的斧头',
    'Upgrade axe technology to metal axes made from iron. Improves lumber harvesting.': '将斧头技术升级为铁制金属斧头。提高木材收获。',
    'Upgrade to more durable sledgehammers made from iron. Improves rock quarrying.': '升级到更耐用的铁制大锤。提高了岩石采石。',
    'Create a pickaxe made from iron': '用铁做一把铁镐',
    'Upgrades pickaxe technology to metal pickaxes made from iron. Improves mining activities.': '将鹤嘴锄技术升级为铁制金属鹤嘴锄。提高了采矿活动。',
    'Create farming tools made from iron': '用铁制作农具',
    'Create tools made from iron that aid farming. Improves farm efficiency.': '用铁制造工具来辅助农业。提高农业效率。',
    'To Empty': '',
    'To Full': '已满',
    'Crates': '板条箱',
    'Genetically Modified Food': '转基因食品',
    'Genetically modify your crops to yield more usable food.': '对作物进行基因改造，以获得更多可用的食物。',
    'Add a windmill sail to your grain mills, boosts the effectiveness of mills.': '在您的粮食加工厂添加风车帆，提高工厂的效率。',
    'Advanced smelting processes improve copper refinement by 20%.': '先进的冶炼工艺可将铜精炼提高20％。',
    'Construct a sundial': '建造一个日晷',
    'Create plans for a grain mill, grain mills boost farm effectiveness.': '为粮食加工厂制定计划，粮食加工厂提高农场效率。',
    'Create plans for a storage medium for food.': '为食品存储介质制定计划。',
    'Create tools out of animal bones': '用动物骨骼创建工具',
    'Design a newer housing unit': '设计一个新的住房单位',
    'Design a small storage shed.': '设计一个小型仓库。',
    'Design a space for shows to help uplift your spirits.': '为节目设计一个空间，以帮助提升你的精神。',
    'Design a structure to house resources': '设计一个容纳资源的结构',
    'Design high occupancy housing complexes.': '设计高入住率的住宅区。',
    'Design smelting facilities to refine ore': '设计冶炼设施以精炼矿石',
    'Design the foundry, a place for craftsman to produce manufactured materials.': '设计铸造厂，工匠生产制造材料的地方。',
    'Increase farm efficiency by 66% with irrigation.': '灌溉使农业效率提高66%。',
    'Discover the benefits of irrigation': '发现灌溉的好处',
    'Discover electricity, no kites required.': '发现电力，不需要风筝。',
    'Devise a structure to house grain': '设计一个结构来容纳谷物',
    'Create a system for organizing and storing knowledge in large storage buildings designed specifically for books.': '创建一个系统，用于在专为图书设计的大型存储建筑中组织和存储知识。',
    '1 Max Coal Miner': '1 煤矿工人上限',
    '1 Max Entertainer': '1 艺人上限',
    '1 Max Miner': '1 矿工上限',
    '1 Max Professor': '1 教授上限',
    '1% Max Morale': '1% 士气上限',
    '1% Trade Route Profitability': '1% 贸易路线盈利能力',
    '1000 Max Oil.': '1000 石油上限.',
    '5% Crafted Materials': '5% 精制材料',
    '0.48 oil per second. +500 Max Oil.': '每秒 0.48 石油。 +500 石油上限。',
    'Armor reinforced with iron plates, heavy but offers better protection for your soldiers.': '用铁板加固的盔甲，很重，但能更好地保护你的士兵。',
    'Create a pickaxe made from steel': '用钢做一把镐',
    'Create Plate Armor': '创建板甲',
    'Design a medical facility for your wounded': '为伤员设计医疗设施',
    'Each scientist will publish their work in a scientific journal. Libraries max knowledge increased by 12% per scientist.': '每位科学家将在科学杂志上发表他们的工作。每个科学家的图书馆知识上限增长12%。',
    'Establish a military to keep your people safe from external threats, or to conquer your enemies with.': '建立一支军队，保护你的人民免受外部威胁，或征服你的敌人。',
    'Flintlock Rifles': '燧发步枪',
    'Found the military': '发现军事',
    'Increase trade volume with trains': '通过火车增加贸易量',
    'Learn how to extract trace amounts of uranium from coal deposits.': '了解如何从煤矿中提取痕量铀。',
    'Learn how to turn stone into cement': '学习如何将石头变成水泥',
    'Professors will require their students to write thesis papers': '',
    'Breeder Reactor': '增殖反应堆',
    'Ancalagon': '安卡拉贡',
    'Advanced Robotics': '先进机器人',
    'Buy the World': '买全世界',
    'Conquest': '征服',
    'Dracnid': '中央线虫',
    'Mythril': '秘银',
    'Level -': '等级 -',
    'Mutate': '变异',
    'Mutual Destruction': '相互毁灭',
    'Tourist Center': '旅游中心',
    'Temple': '寺庙',
    'GPS Satellite': 'GPS卫星',
    'GPS Constellation': 'GPS星座',
    'Slayer': '杀手',
    'Sun': '太阳',
    'Onyx': '缟玛瑙',
    'Onyx Control Tower': '缟玛瑙控制塔',
    'Mythril Beams': '秘银横梁',
    'Mythril Containers': '秘银集装箱',
    'Mythril Drills': '秘银钻',
    'Mythril Plated Crates': '秘银板箱',
    'Mythril Vault': '秘银保险库',
    'Ancalagon Fuel Depot': '安卡拉贡燃料库',
    'Wyrm Mission': '妖蛆任务',
    'Wyrm': '妖蛆',
    'Ancalagon 燃料库': '安卡拉贡燃料库',
    'Draco': '天龙星座',
    'Reject Unity': '拒绝统一',
    'Cultural Supremacy': '文化至上',
    'Unification': '统一',
    'Atmospheric Mining': '大气开采',
    'Navigation Beacon': '导航灯塔',
    'Mass Driver': '质量驱动程序',
    'Fracking': '水力压裂',
    'Uranium Ash': '铀灰',
    'Uranium Storage': '铀存储',
    'Nuclear Fission': '核裂变',
    'Rocketry': '火箭',
    'Hedge Funds': '对冲基金',
    'Stock Exchange': '证券交易所',
    'Fire Proof Safe': '防火防弹柜',
    'Monuments': '纪念碑',
    'Tourism': '旅游',
    'Space Observatory': '空间天文台',
    'Crispr Cas9': '弹簧卡壳9',
    'Crispr is a breakthrough in genetic engineering that will allow you to permanently modify your own genome.': 'Crispr是基因工程的一个突破，它将允许你永久地修改自己的基因组。',
    'Fluidized Bed Reactor': '流化床反应器',
    'Rail Guns': '轨道炮',
    'Space Marines': '太空陆战队',
    'Kevlar': '凯夫拉纤维',
    'Cambridge Process': '桥接过程',
    'Pynn Particals': '皮姆粒子',
    'Matter Compression': '物质压缩',
    'Higgs Boson': '希格斯玻色子',
    'Theology': '神学',
    'Fanaticism': '信仰',
    'Indoctrination': '教化',
    'Missionary': '传教士',
    'Zealotry': '狂热',
    'Astrophysics': '天体物理学',
    'Dyson Swarm': '戴森群',
    'Dyson Sphere': '戴森球体',
    'Space Manufacturing': '太空制造业',
    'Colonization': '殖民',
    'Star Charts': '星图',
    'Space Probes': '太空探测器',
    'Rovers': '流浪者',
    'Helium Mine': '氦矿',
    'Onyx Mining': '玛瑙开采',
    'Orbit Depot': '轨道补给站',
    'Dracnid Genetic Traits': '中央线虫遗传特征',
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
    'kW': 'kW',
//    'RNA': '核糖核酸',
    'Demagorddon': 'Demagorddon',
    '': '',
    '': '',
    '': '',
    '': '',

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
	[/^(\d+) Trade Routes$/, '$1 贸易路线'],
    [/^\+(\d+)% Crafted Materials$/, '\+$1％ 精制材料'],
    [/^(\d+)% Knowledge Production$/, '$1％ 知识产量'],
    [/^(\d+) Max Containers$/, '$1 集装箱上限'],
    [/^(\d+) Max Crates$/, '$1 箱子上限'],
    [/^([\d\.]+) Max Knowledge$/, '$1 知识上限'],
    [/^Craftsman produce an extra (\d+)% for each Foundry.$/, '工匠为每个铸造厂额外生产$1％。'],
    [/^Smelters can either increase Iron yield by (\d+)% per smelter or produce Steel by consuming Iron and Coal. Smelters require fuel to operate.$/, '冶炼厂可以将每个冶炼厂的铁产量提高$1％，也可以通过消耗铁和煤来生产钢铁。 冶炼厂需要燃料来运行。'],

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
