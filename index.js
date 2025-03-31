// 常量定义
const SELECTORS = {
    NAV: '.nav',
    ISLAND_BAR: '.island-bar',
    CONTENT: '.content',
    HEADER_LINK: '.header .link a',
};

const BREAKPOINT = 850;

// 语言配置
const LANGUAGES = {
    'zh-CN': '中文',
    'en': 'English'
};

// 翻译映射对象
const translations = {
    'zh-CN': {
        'nav-home': '首页',
        'nav-about': '关于',
        'nav-account': '账户',
        'nav-language': 'English',
        'site-title': '易知华',
        'header-title': '"中華上下五千年"',
        'header-subtitle': '- 易知华 带您了解中国的古今文化 -',
        'learn-more': '去了解',
        'welcome-title': '易知华',
        'welcome-subtitle': '- 欢迎浏览 -',
        'section-festival': '节日',
        'section-food': '美食',
        'section-attractions': '名胜',
    },
    'en': {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-account': 'Account',
        'nav-language': '简体中文',
        'site-title': 'EasyChina.',
        'header-title': '"5000 Years of Chinese Culture"',
        'header-subtitle': '- Discover Chinese Culture with EasyChina -',
        'learn-more': 'Learn More',
        'welcome-title': 'EasyChina',
        'welcome-subtitle': '- Welcome -',
        'section-festival': 'Festivals',
        'section-food': 'Food',
        'section-attractions': 'Attractions',
    }
};

// 标题映射（中英文）
const titleMapping = {
    '春节': 'Spring Festival',
    '寒食节': 'Cold Food Festival',
    '清明节': 'Qingming Festival',
    '端午节': 'Dragon Boat Festival',
    '七夕节': 'Qixi Festival',
    '除夕': 'Chinese New Year\'s Eve',
    '除夕节': 'Chinese New Year\'s Eve',
    '火锅': 'Hot Pot',
    '回锅肉': 'Twice-Cooked Pork',
    '螺蛳粉': 'Rice Noodles with Snail Broth',
    '佛跳墙': 'Buddha Jumps Over the Wall',
    '奶茶': 'Milk Tea',
    '肉夹馍': 'Rou Jia Mo (Chinese Hamburger)',
    '青城山': 'Mount Qingcheng',
    '乐山大佛': 'Leshan Giant Buddha',
    '长城': 'The Great Wall',
    '外滩': 'The Bund',
    '日月潭': 'Sun Moon Lake',
    '兵马俑': 'Terracotta Army'
};

// 详情数据配置
const detailsData = {
    'zh-CN': {
        festival: {
            '春节': {
                description: '春节是中国最重要的传统节日，始于殷商时期。春节期间有贴春联、放鞭炮、吃团圆饭等习俗。人们会互相拜年，长辈给晚辈发红包。除夕夜全家团圆吃年夜饭，守岁迎新年，象征着新的一年的美好开始。',
                image: 'images/festival1.png'
            },
            '寒食节': {
                description: '寒食节源于春秋时期，为纪念晋国忠臣介子推而设立。传说晋文公重耳流亡时，介子推曾割肉煮汤救主，但功成后不求富贵，隐居绵山。这一天禁止生火，只吃冷食，以示对介子推的缅怀。',
                image: 'images/festival2.png'
            },
            '清明节': {
                description: '清明节是中国传统二十四节气之一，也是重要的祭祀节日。人们在这一天扫墓祭祖，寄托哀思。同时也是踏青郊游的好时节，有放风筝、插柳等习俗。',
                image: 'images/festival3.png'
            },
            '端午节': {
                description: '端午节起源于纪念战国时期的楚国诗人屈原。这一天人们吃粽子、赛龙舟、挂艾草，还会给孩子们佩戴香囊。端午节体现了中华民族爱国情怀和传统文化的传承。',
                image: 'images/festival4.png'
            },
            '七夕节': {
                description: '七夕节源于牛郎织女的美丽传说，是中国情人节。传统习俗有乞巧、穿针、摆七巧、吃巧果等。女孩子们会在这天晚上在庭院里摆放瓜果，向织女星许愿。',
                image: 'images/festival5.png'
            },
            '除夕': {
                description: '除夕是农历年的最后一天。这一天家家户户要大扫除、贴春联、挂年画，晚上全家团圆吃年夜饭。人们会守岁到午夜，在新旧年交替之际放鞭炮、燃放烟花。',
                image: 'images/festival6.png'
            }
        },
        food: {
            '火锅': {
                description: '火锅是中国特色饮食方式之一，以其独特的烹饪方法和丰富的食材选择闻名。四川火锅以麻辣著称，而北方的涮羊肉、重庆火锅、潮汕牛肉火锅等都各具特色。火锅不仅是美食，更是家人朋友聚会的重要形式。',
                image: 'images/food1.png'
            },
            '回锅肉': {
                description: '回锅肉是四川传统名菜，以猪肉为主料，青椒、蒜苗为辅料，配以郫县豆瓣酱烹制。特点是外酥里嫩，咸鲜麻辣，肥而不腻。制作时要将煮熟的肉再次下锅翻炒，故名"回锅肉"。',
                image: 'images/food2.png'
            },
            '螺蛳粉': {
                description: '螺蛳粉是广西柳州特色小吃，以米粉为主料，配以螺蛳汤底，加入花生、豆腐、木耳等配料。其特点是汤味酸辣，口感独特。虽然气味特殊，但风味独特，深受食客喜爱。',
                image: 'images/food3.png'
            },
            '佛跳墙': {
                description: '佛跳墙是福建福州的传统名菜，据说香气四溢连佛闻到都会跳墙而来。原料包括鱼翅、海参、鲍鱼等珍贵海味和禽肉，经过长时间炖煮，味道鲜美浓郁。',
                image: 'images/food4.png'
            },
            '奶茶': {
                description: '中国奶茶从传统港式奶茶发展到现代新式奶茶，种类丰富多样。传统奶茶以锡兰红茶配以炼乳调制，现代奶茶则加入珍珠、布丁等配料，成为深受年轻人喜爱的饮品。',
                image: 'images/food5.png'
            },
            '肉夹馍': {
                description: '肉夹馍是陕西特色小吃，被誉为"中国汉堡"。以白吉馍为主体，内里填充肉臊子。正宗的肉夹馍使用五花肉，配以青椒、胡萝卜等蔬菜，口感外酥内软，肉香四溢。',
                image: 'images/food6.png'
            }
        },
        attractions: {
            '青城山': {
                description: '青城山位于四川省成都市都江堰市，是道教名山之一。山上道观众多，自然风光优美，四季常青。青城山分为前山和后山，前山人文古迹众多，后山自然风光秀丽，是著名的避暑胜地。',
                image: 'images/attraction1.png'
            },
            '乐山大佛': {
                description: '乐山大佛位于四川省乐山市，是世界最大的石刻佛像。始建于唐代，历时90年完成，高71米。大佛依山开凿，面对岷江、青衣江、大渡河三江汇流处，是世界文化遗产。',
                image: 'images/attraction2.png'
            },
            '长城': {
                description: '长城是中国古代伟大的防御工程，全长数万公里。现存主要为明长城，其中八达岭长城最为著名。长城不仅是军事防御设施，更是中华民族团结、智慧与力量的象征。',
                image: 'images/attraction3.png'
            },
            '外滩': {
                description: '上海外滩位于黄浦江西岸，是上海最著名的地标之一。这里汇集了众多具有不同建筑风格的历史建筑，被誉为"万国建筑博览群"。夜晚的外滩华灯璀璨，江对岸的浦东新区现代建筑群与其隔江相望。',
                image: 'images/attraction4.png'
            },
            '日月潭': {
                description: '日月潭位于台湾南投县鱼池乡，是台湾最大的淡水湖泊。潭面形如日月，东边如日，西边如月，因此得名。这里风景优美，水质清澈，是著名的观光胜地。',
                image: 'images/attraction5.png'
            },
            '兵马俑': {
                description: '兵马俑位于西安市临潼区，是秦始皇陵墓的陪葬坑，被誉为"世界第八大奇迹"。这支陶俑大军包括步兵、骑兵、车兵等，每个俑面部表情不同，展现了秦代精湛的制作工艺。',
                image: 'images/attraction6.png'
            }
        }
    },
    'en': {
        festival: {
            '春节': {
                description: 'Spring Festival is the most important traditional festival in China. People celebrate with activities like pasting Spring Festival couplets, setting off firecrackers, and having reunion dinners. Red envelopes are given to children for good luck.',
                image: 'images/festival1.png'
            },
            '寒食节': {
                description: 'The Cold Food Festival originates from the Spring and Autumn Period, established to commemorate the loyal minister Jie Zitui. Legend has it that when Jin Wengong was in exile, Jie Zitui cut flesh from his own thigh to make soup for his hungry lord. On this day, people avoid cooking with fire and only eat cold food.',
                image: 'images/festival2.png'
            },
            '清明节': {
                description: 'Qingming Festival is one of China\'s traditional 24 solar terms and an important memorial day. People visit ancestral graves and pay respects to the deceased. It\'s also a good time for spring outings, with customs like flying kites and planting willow branches.',
                image: 'images/festival3.png'
            },
            '端午节': {
                description: 'The Dragon Boat Festival originated from commemorating the ancient Chinese poet Qu Yuan from the Warring States Period. People eat rice dumplings, race dragon boats, and hang mugwort. Children wear sachets. The festival embodies Chinese patriotism and cultural heritage.',
                image: 'images/festival4.png'
            },
            '七夕节': {
                description: 'The Qixi Festival originates from the beautiful legend of the Cowherd and Weaver Girl, known as Chinese Valentine\'s Day. Traditional customs include praying for skills, threading needles, and displaying "seven treasures". Girls make wishes to the Weaver Girl star in courtyards on this night.',
                image: 'images/festival5.png'
            },
            '除夕': {
                description: 'Chinese New Year\'s Eve is the last day of the lunar year. On this day, every household cleans thoroughly, puts up Spring Festival couplets and New Year pictures. Families gather for reunion dinners. People stay up until midnight and set off firecrackers and fireworks at the turn of the year.',
                image: 'images/festival6.png'
            }
        },
        food: {
            '火锅': {
                description: 'Hot pot is one of China\'s distinctive dining styles, known for its unique cooking method and rich variety of ingredients. Sichuan hot pot is famous for its numbing spiciness, while northern lamb hot pot, Chongqing hot pot, and Chaoshan beef hot pot each have their own characteristics. Hot pot is not just food but an important form of social gathering.',
                image: 'images/food1.png'
            },
            '回锅肉': {
                description: 'Twice-cooked pork is a traditional Sichuan dish, using pork as the main ingredient with green peppers and garlic sprouts, seasoned with Pixian bean paste. It features a crispy exterior with tender interior, savory and spicy but not greasy. The meat is first boiled then stir-fried, hence the name "twice-cooked pork".',
                image: 'images/food2.png'
            },
            '螺蛳粉': {
                description: 'Rice noodles with snail broth is a specialty from Liuzhou, Guangxi, made with rice noodles in snail broth, topped with peanuts, tofu, black fungus and other ingredients. It features a sour and spicy taste with a distinctive flavor. Despite its strong smell, it has a unique taste that many people love.',
                image: 'images/food3.png'
            },
            '佛跳墙': {
                description: 'Buddha Jumps Over the Wall is a traditional Fuzhou dish, said to be so aromatic that even Buddha would jump over a wall to taste it. Ingredients include shark fin, sea cucumber, abalone and other precious seafood and poultry, slow-cooked for hours. The flavor is rich and savory.',
                image: 'images/food4.png'
            },
            '奶茶': {
                description: 'Chinese milk tea has evolved from traditional Hong Kong-style milk tea to modern bubble tea, with rich varieties. Traditional milk tea is made with Ceylon black tea and evaporated milk, while modern milk tea includes additions like tapioca pearls and pudding, becoming a popular beverage among young people.',
                image: 'images/food5.png'
            },
            '肉夹馍': {
                description: 'Rou Jia Mo, known as the "Chinese hamburger", is a specialty from Shaanxi. It uses a wheat flour bun filled with stewed meat. Authentic Rou Jia Mo uses pork belly with vegetables like green peppers and carrots. It has a crispy exterior, soft interior, and is full of savory meat flavor.',
                image: 'images/food6.png'
            }
        },
        attractions: {
            '青城山': {
                description: 'Mount Qingcheng is located in Dujiangyan City, Chengdu, Sichuan Province. It\'s one of the famous Taoist mountains with numerous Taoist temples and beautiful natural scenery, remaining green all year round. Mount Qingcheng is divided into front and back mountains - the front mountain features cultural relics while the back mountain offers natural beauty, making it a famous summer resort.',
                image: 'images/attraction1.png'
            },
            '乐山大佛': {
                description: 'The Leshan Giant Buddha is located in Leshan City, Sichuan Province. It\'s the largest stone-carved Buddha in the world. Construction began in the Tang Dynasty and took 90 years to complete, standing 71 meters tall. The Buddha was carved into the cliff facing the confluence of the Min River, Qingyi River, and Dadu River, and is a World Cultural Heritage site.',
                image: 'images/attraction2.png'
            },
            '长城': {
                description: 'The Great Wall is an ancient Chinese defensive project stretching thousands of kilometers. The majority of what remains today is from the Ming Dynasty, with the Badaling section being the most famous. The Great Wall is not only a military defense facility but also a symbol of the Chinese nation\'s unity, wisdom, and strength.',
                image: 'images/attraction3.png'
            },
            '外滩': {
                description: 'The Bund in Shanghai is located on the west bank of the Huangpu River and is one of Shanghai\'s most famous landmarks. It features numerous historical buildings with different architectural styles, known as a "World Exposition of Architecture". At night, the Bund is brilliantly lit, facing the modern Pudong New Area skyline across the river.',
                image: 'images/attraction4.png'
            },
            '日月潭': {
                description: 'Sun Moon Lake is located in Yuchi Township, Nantou County, Taiwan. It\'s Taiwan\'s largest freshwater lake. The lake is shaped like the sun and moon - the eastern part resembles the sun while the western part resembles the moon, hence its name. The area features beautiful scenery, clear waters, and is a famous tourist destination.',
                image: 'images/attraction5.png'
            },
            '兵马俑': {
                description: 'The Terracotta Army is located in Lintong District, Xi\'an City, serving as burial pits for Emperor Qin Shi Huang\'s mausoleum. It\'s known as the "Eighth Wonder of the World". This clay army includes infantry, cavalry, and charioteers, with each warrior having unique facial expressions, demonstrating the exquisite craftsmanship of the Qin Dynasty.',
                image: 'images/attraction6.png'
            }
        }
    }
};

// 首先添加简短描述的翻译映射对象
const itemDescriptions = {
    'zh-CN': {
        '春节': '春节是中国最重要的传统节日，始于殷商时期',
        '寒食节': '源于春秋时期，为纪念晋国忠臣介子推而设立',
        '清明节': '中国传统二十四节气之一，重要的祭祀节日',
        '端午节': '起源于纪念战国时期的楚国诗人屈原',
        '七夕节': '源于牛郎织女的美丽传说，是中国情人节',
        '除夕': '农历年的最后一天，全家团圆吃年夜饭',
        '除夕节': '农历年的最后一天，全家团圆吃年夜饭',
        '火锅': '中国特色饮食方式之一，以独特烹饪方法闻名',
        '回锅肉': '四川传统家常菜，蒜香浓郁，咸鲜麻辣',
        '螺蛳粉': '广西柳州特色小吃，汤味酸辣，风味独特',
        '佛跳墙': '福建福州的传统名菜，味道鲜美浓郁',
        '奶茶': '从传统港式发展到现代新式，种类丰富多样',
        '肉夹馍': '陕西特色小吃，被誉为"中国汉堡"',
        '青城山': '道教名山之一，自然风光优美，四季常青',
        '乐山大佛': '世界最大的石刻佛像，高71米',
        '长城': '中国古代伟大的防御工程，全长数万公里',
        '外滩': '上海最著名的地标之一，万国建筑博览群',
        '日月潭': '台湾最大的淡水湖泊，风景优美，水质清澈',
        '兵马俑': '秦始皇陵墓的陪葬坑，世界第八大奇迹'
    },
    'en': {
        '春节': 'The most important traditional festival in China, dating back to the Shang Dynasty',
        '寒食节': 'Originated from the Spring and Autumn Period, commemorating the loyal minister Jie Zitui',
        '清明节': 'One of China\'s 24 solar terms and an important memorial day',
        '端午节': 'Originated from commemorating the poet Qu Yuan from the Warring States Period',
        '七夕节': 'Based on the legend of the Cowherd and Weaver Girl, known as Chinese Valentine\'s Day',
        '除夕': 'The last day of lunar year, time for family reunion dinner',
        '除夕节': 'The last day of lunar year, time for family reunion dinner',
        '火锅': 'A distinctive Chinese dining style known for its unique cooking method',
        '回锅肉': 'Traditional Sichuan dish with crispy exterior and tender interior',
        '螺蛳粉': 'Specialty from Liuzhou, Guangxi, famous for its unique sour and spicy taste',
        '佛跳墙': 'Traditional Fuzhou delicacy with rich and savory flavor',
        '奶茶': 'Evolved from traditional Hong Kong-style to modern bubble tea',
        '肉夹馍': 'Shaanxi specialty known as the "Chinese hamburger"',
        '青城山': 'Famous Taoist mountain with beautiful scenery all year round',
        '乐山大佛': 'World\'s largest stone-carved Buddha statue, 71 meters tall',
        '长城': 'Ancient Chinese defensive project stretching thousands of kilometers',
        '外滩': 'Shanghai\'s famous landmark with various architectural styles',
        '日月潭': 'Taiwan\'s largest freshwater lake with beautiful scenery',
        '兵马俑': 'Emperor Qin\'s terracotta army, the "Eighth Wonder of the World"'
    }
};

// 工具函数
const debounce = (fn, delay = 100) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
};

// DOM元素选择器
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// 平滑滚动函数
const smoothScroll = (target) => {
    $(target).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
    });
};

// 导航链接处理
const initNavigation = () => {
    const navLinks = {
        '.nav-link1': 'section.festival',
        '.nav-link2': 'section.food',
        '.nav-link3': 'section.attractions'
    };

    // 初始化头部链接
    $(SELECTORS.HEADER_LINK).addEventListener('click', () => smoothScroll(SELECTORS.CONTENT));

    // 初始化导航链接
    Object.entries(navLinks).forEach(([selector, target]) => {
        $$(selector).forEach(link => {
            link.addEventListener('click', () => smoothScroll(target));
        });
    });
};

// 灵动岛功能
class DynamicIsland {
    constructor() {
        this.nav = $(SELECTORS.NAV);
        this.islandBar = $(SELECTORS.ISLAND_BAR);
        this.contentBox = $(SELECTORS.CONTENT);
        this.handleWindowResize = debounce(this._handleWindowResize.bind(this));
    }

    _handleWindowResize() {
        if (window.innerWidth <= BREAKPOINT) {
            this.updateIslandVisibility();
        } else {
            this.resetState();
        }
    }

    updateIslandVisibility() {
        const shouldShow = this.contentBox.getBoundingClientRect().top <= 0;
        this.nav.classList.toggle('hide', shouldShow);
        this.islandBar.classList.toggle('show', shouldShow);
    }

    resetState() {
        this.nav.classList.remove('hide');
        this.islandBar.classList.remove('show');
    }

    init() {
        window.addEventListener('scroll', this.handleWindowResize);
        window.addEventListener('resize', this.handleWindowResize);
        // 初始检查一次当前状态
        this.handleWindowResize();
    }
}

// 语言切换功能
class LanguageManager {
    constructor() {
        this.currentLang = 'zh-CN';
    }

    updateElements() {
        const lang = this.currentLang;
        
        // 更新 HTML 属性
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.classList.toggle('en', lang === 'en');
        
        // 更新所有翻译内容
        this.updateTranslatedElements(lang);
    }

    updateTranslatedElements(lang) {
        // 更新导航元素
        $('#login a').textContent = translations[lang]['nav-account'];
        $('#language a').textContent = translations[lang]['nav-language'];
        $$('abbr[title] a').forEach(el => {
            el.textContent = translations[lang]['site-title'];
        });

        // 更新头部内容
        const headerElements = {
            '.hb-headline': 'header-title',
            '.hb-subhead': 'header-subtitle',
            '.link a span:first-child': 'learn-more',
            '.c-headline': 'welcome-title',
            '.c-subhead': 'welcome-subtitle'
        };

        Object.entries(headerElements).forEach(([selector, key]) => {
            $(selector).textContent = translations[lang][key];
        });

        // 更新所有导航链接和部分标题
        ['festival', 'food', 'attractions'].forEach((section, index) => {
            // 更新灵动岛和sidebar导航链接
            $$(`.nav-link${index + 1}`).forEach(el => {
                el.textContent = translations[lang][`section-${section}`];
            });
            
            // 更新island-bar中的标题文字
            const islandBarLinks = $$('.island-bar ul li label');
            if (islandBarLinks.length > 0 && islandBarLinks[index]) {
                islandBarLinks[index].textContent = translations[lang][`section-${section}`];
            }
            
            // 更新sidebar中的标题文字
            const sidebarLinks = $$('.sidebar ul li label');
            if (sidebarLinks.length > 0 && sidebarLinks[index]) {
                sidebarLinks[index].textContent = translations[lang][`section-${section}`];
            }
            
            // 更新主内容区域的部分标题
            const sectionEl = $(`section.${section} h3`);
            if (sectionEl) {
                sectionEl.textContent = translations[lang][`section-${section}`];
            }
        });

        // 新增: 更新所有项目的标题和描述
        $$('.items-wrapper .item').forEach(item => {
            const titleEl = item.querySelector('h4');
            const describeEl = item.querySelector('.describe');
            
            if (titleEl && describeEl) {
                const originalTitle = titleEl.getAttribute('data-original-title') || titleEl.textContent;
                
                // 存储原始中文标题，以便在语言切换时使用
                if (!titleEl.getAttribute('data-original-title')) {
                    titleEl.setAttribute('data-original-title', originalTitle);
                }
                
                // 更新标题为对应语言
                if (lang === 'en') {
                    titleEl.textContent = titleMapping[originalTitle] || originalTitle;
                } else {
                    titleEl.textContent = originalTitle;
                }
                
                // 更新简短描述
                if (itemDescriptions[lang][originalTitle]) {
                    describeEl.textContent = itemDescriptions[lang][originalTitle];
                }
            }
        });
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'zh-CN' ? 'en' : 'zh-CN';
        this.updateElements();
    }
}

// 账户管理功能
class AccountManager {
    checkLoginStatus() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const currentUser = localStorage.getItem('currentUser');
        const loginElement = $('#login');
        const accountElement = $('#account');
        const usernameSpan = accountElement.querySelector('span');

        if (isLoggedIn && currentUser) {
            loginElement.style.display = 'none';
            accountElement.style.display = 'block';
            usernameSpan.textContent = currentUser;
        } else {
            loginElement.style.display = 'block';
            accountElement.style.display = 'none';
            usernameSpan.textContent = '';
        }
    }

    handleLogout() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        this.checkLoginStatus();
    }

    init() {
        this.checkLoginStatus();
        $('.logout').addEventListener('click', () => this.handleLogout());
    }
}

// 详情弹窗类
class DetailModal {
    constructor() {
        this.modal = $('#detailModal');
        this.title = this.modal.querySelector('.modal-title');
        this.image = this.modal.querySelector('.modal-image');
        this.description = this.modal.querySelector('.modal-description');
        this.closeBtn = this.modal.querySelector('.close-btn');
    }

    init() {
        // 关闭按钮事件
        this.closeBtn.onclick = () => this.hide();
        
        // 点击模态框外部关闭
        window.onclick = (event) => {
            if (event.target === this.modal) {
                this.hide();
            }
        };

        // ESC键关闭弹窗
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'block') {
                this.hide();
            }
        });

        // 初始化所有item的点击事件
        this.initItemsClick();
    }

    initItemsClick() {
        $$('.items-wrapper .item').forEach(item => {
            item.addEventListener('click', () => {
                const title = item.querySelector('h4').textContent;
                const section = item.closest('section').classList[0];
                this.showDetails(section, title);
            });
        });
    }

    showDetails(section, title) {
        const lang = document.documentElement.getAttribute('lang') || 'zh-CN';
        
        // 处理特殊情况：如果是"除夕节"但在数据中存储为"除夕"
        let lookupTitle = title;
        if (title === '除夕节' && !detailsData[lang][section]['除夕节']) {
            lookupTitle = '除夕';
        }
        
        const details = detailsData[lang][section][lookupTitle];
        
        if (details) {
            // 根据语言确定显示的标题
            const displayTitle = lang === 'en' ? (titleMapping[lookupTitle] || lookupTitle) : lookupTitle;
            
            this.title.textContent = displayTitle;
            this.image.src = details.image;
            this.description.textContent = details.description;
            this.show();
        }
    }

    show() {
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }

    hide() {
        this.modal.style.display = 'none';
        document.body.style.overflow = ''; // 恢复背景滚动
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    // 初始化各个功能模块
    initNavigation();
    
    const dynamicIsland = new DynamicIsland();
    dynamicIsland.init();
    
    const languageManager = new LanguageManager();
    languageManager.updateElements(); // 确保初始状态正确
    window.toggleLanguage = () => languageManager.toggleLanguage();
    
    const accountManager = new AccountManager();
    accountManager.init();
    
    const detailModal = new DetailModal();
    detailModal.init();
});
