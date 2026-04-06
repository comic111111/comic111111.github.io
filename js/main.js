// ========== 语言包 ==========
const locales = {
    zh: {
        school_name: "希望峰学园",
        nav: {
            home: "学园首页",
            query: "入学查询",
            about: "学园概要",
            oc: "超高校级のOC"
        },
        home: {
            subtitle: "「只有拥有才能的人，才被允许入学的特别学园」",
            stats: {
                graduates: "毕业生",
                employment: "就职率",
                departments: "学科"
            },
            news: {
                title: "最新情报",
                1: "入学典礼通知",
                2: "新学期开始",
                3: "毕业典礼举行"
            }
        },
        query: {
            title: "入学许可证查询",
            desc: "请输入合格者的准考证号，确认入学许可证",
            form: {
                name_label: "考生姓名",
                id_label: "准考证号",
                id_hint: "※ 请输入准考证上记载的编号",
                submit: "查询"
            },
            result: {
                title: "入学许可证",
                congratulations: "恭喜！您已被录取！",
                admission: "入学许可",
                message: "您已获得希望峰学园的入学资格。我们期待您的入学！"
            },
            list: {
                title: "合格者名单"
            }
        },
        about: {
            title: "学园概要",
            history: {
                title: "沿革"
            },
            mission: {
                title: "教育理念"
            },
            access: {
                title: "交通"
            }
        },
        oc: {
            title: "超高校级的OC",
            subtitle: "—— 备受期待的新人，于此现身 ——"
        }
    },
    ja: {
        school_name: "希望ヶ峰学園",
        nav: {
            home: "学園トップ",
            query: "入学照会",
            about: "学園概要",
            oc: "超高校級のOC"
        },
        home: {
            subtitle: "「才能ある者だけが入学を許される、特別な学園」",
            stats: {
                graduates: "卒業生",
                employment: "就職率",
                departments: "学科"
            },
            news: {
                title: "新着情報",
                1: "入学式のお知らせ",
                2: "新学期授業開始",
                3: "修了式を挙行"
            }
        },
        query: {
            title: "入学許可証照会",
            desc: "合格者の受験番号を入力し、入学許可証を確認してください",
            form: {
                name_label: "受験者名",
                id_label: "受験番号",
                id_hint: "※ 受験票に記載の番号をご入力ください",
                submit: "照会する"
            },
            result: {
                title: "入学許可証",
                congratulations: "合格おめでとうございます！",
                admission: "入学許可",
                message: "あなたは希望ヶ峰学園への入学資格を獲得しました。ご入学をお待ちしております。"
            },
            list: {
                title: "合格者一覧"
            }
        },
        about: {
            title: "学園概要",
            history: {
                title: "沿革"
            },
            mission: {
                title: "教育理念"
            },
            access: {
                title: "アクセス"
            }
        },
        oc: {
            title: "超高校級のOC",
            subtitle: "—— 期待の新人、ここに現る ——"
        }
    }
};

// 学生数据（包含你的朋友和弹丸论破角色）
const students = [
    { id: "HPA-001", name: "苗木 誠", nameJa: "苗木 誠", talent: "超高校級の「希望」", admitted: true },
    { id: "HPA-002", name: "霧切 響子", nameJa: "霧切 響子", talent: "超高校級の「探偵」", admitted: true },
    { id: "HPA-003", name: "十神 白夜", nameJa: "十神 白夜", talent: "超高校級の「御曹司」", admitted: true },
    { id: "HPA-004", name: "舞園 さやか", nameJa: "舞園 さやか", talent: "超高校級の「アイドル」", admitted: true },
    { id: "HPA-005", name: "桑田 怜恩", nameJa: "桑田 怜恩", talent: "超高校級の「野球選手」", admitted: true },
    { id: "HPA-006", name: "大和田 紋土", nameJa: "大和田 紋土", talent: "超高校級の「暴走族」", admitted: true },
    // ⚠️ 这里是你的朋友OC —— 请修改成你朋友的OC信息！
    { id: "HPA-099", name: "あなたのOC名", nameJa: "あなたのOC名", talent: "超高校級の「あなたの才能」", admitted: true, isFriend: true }
];

// 当前语言
let currentLang = 'zh';
let currentPage = 'home';

// ========== 辅助函数 ==========
function getLocalizedText(path) {
    const parts = path.split('.');
    let value = locales[currentLang];
    for (let part of parts) {
        if (value && value[part] !== undefined) {
            value = value[part];
        } else {
            return path;
        }
    }
    return value;
}

function updateAllText() {
    // 更新学校名称
    const schoolNameElements = document.querySelectorAll('.school-name');
    schoolNameElements.forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = getLocalizedText('school_name');
        } else {
            el.textContent = getLocalizedText('school_name');
        }
    });

    // 更新导航菜单
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) {
            const text = getLocalizedText(key);
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else {
                el.textContent = text;
            }
        }
    });

    // 更新首页统计数字
    const graduatesStat = document.querySelector('.stat-item:first-child .stat-label');
    const employmentStat = document.querySelector('.stat-item:nth-child(2) .stat-label');
    const departmentsStat = document.querySelector('.stat-item:nth-child(3) .stat-label');
    if (graduatesStat) graduatesStat.textContent = getLocalizedText('home.stats.graduates');
    if (employmentStat) employmentStat.textContent = getLocalizedText('home.stats.employment');
    if (departmentsStat) departmentsStat.textContent = getLocalizedText('home.stats.departments');

    // 更新新闻标题
    const newsTitle = document.querySelector('.news-section h3');
    if (newsTitle) newsTitle.textContent = getLocalizedText('home.news.title');

    // 更新新闻列表
    const newsItems = document.querySelectorAll('.news-list li span:last-child');
    if (newsItems.length >= 3) {
        newsItems[0].textContent = getLocalizedText('home.news.1');
        newsItems[1].textContent = getLocalizedText('home.news.2');
        newsItems[2].textContent = getLocalizedText('home.news.3');
    }

    // 更新查询页面
    const queryTitle = document.querySelector('.query-section h2');
    const queryDesc = document.querySelector('.query-section .section-desc');
    const nameLabel = document.querySelector('label[for="student-name"]');
    const idLabel = document.querySelector('label[for="student-id"]');
    const idHint = document.querySelector('.input-hint');
    const searchBtn = document.getElementById('search-btn');
    
    if (queryTitle) queryTitle.textContent = getLocalizedText('query.title');
    if (queryDesc) queryDesc.textContent = getLocalizedText('query.desc');
    if (nameLabel) nameLabel.textContent = getLocalizedText('query.form.name_label');
    if (idLabel) idLabel.textContent = getLocalizedText('query.form.id_label');
    if (idHint) idHint.textContent = getLocalizedText('query.form.id_hint');
    if (searchBtn) searchBtn.textContent = getLocalizedText('query.form.submit');

    // 更新OC页面
    const ocTitle = document.querySelector('.oc-section h2');
    const ocSubtitle = document.querySelector('.oc-section .section-subtitle');
    if (ocTitle) ocTitle.textContent = getLocalizedText('oc.title');
    if (ocSubtitle) ocSubtitle.textContent = getLocalizedText('oc.subtitle');

    // 更新关于页面
    const aboutTitle = document.querySelector('.about-section h2');
    if (aboutTitle) aboutTitle.textContent = getLocalizedText('about.title');
}

function switchLanguage(lang) {
    if (!locales[lang]) return;
    currentLang = lang;
    localStorage.setItem('preferred_language', lang);
    updateAllText();
    
    // 更新语言按钮激活状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // 如果当前在查询页面且有结果显示，重新显示结果
    const resultCard = document.getElementById('result-card');
    if (resultCard && resultCard.style.display !== 'none') {
        const lastId = localStorage.getItem('last_queried_id');
        if (lastId) {
            const student = students.find(s => s.id === lastId);
            if (student) {
                displayResult(student);
            }
        }
    }
}

function switchPage(pageId) {
    currentPage = pageId;
    
    // 隐藏所有页面
    const pages = ['home', 'query', 'about', 'oc'];
    pages.forEach(page => {
        const pageElement = document.getElementById(`${page}-page`);
        if (pageElement) {
            pageElement.style.display = 'none';
        }
    });
    
    // 显示选中页面
    const activePage = document.getElementById(`${pageId}-page`);
    if (activePage) {
        activePage.style.display = 'block';
    }
    
    // 更新URL hash
    window.location.hash = pageId;
    
    // 保存当前页面到localStorage
    localStorage.setItem('current_page', pageId);
}

function displayResult(student) {
    const resultCard = document.getElementById('result-card');
    const resultContent = document.getElementById('result-content');
    
    if (!resultCard || !resultContent) return;
    
    const lang = currentLang;
    const isFriend = student.isFriend === true;
    
    // 根据语言选择姓名
    const studentName = lang === 'ja' && student.nameJa ? student.nameJa : student.name;
    
    let talentText = student.talent;
    if (lang === 'zh' && student.talent.startsWith('超高校級')) {
        talentText = student.talent.replace('超高校級', '超高校级');
    }
    
    const talentLabel = lang === 'zh' ? '称号' : (lang === 'ja' ? '才能' : 'Talent');
    
    let html = `
        <div class="result-header">
            <h3>${getLocalizedText('query.result.title')}</h3>
            <div class="result-badge ${isFriend ? 'special' : ''}">${getLocalizedText('query.result.admission')}</div>
        </div>
        <div class="result-body">
            <div class="congrats">${getLocalizedText('query.result.congratulations')}</div>
            <div class="student-info">
                <div class="info-row">
                    <span class="info-label">${getLocalizedText('query.form.name_label')}</span>
                    <span class="info-value">${studentName}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">${getLocalizedText('query.form.id_label')}</span>
                    <span class="info-value">${student.id}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">${talentLabel}</span>
                    <span class="info-value talent">${talentText}</span>
                </div>
            </div>
            <div class="admission-message">
                ${getLocalizedText('query.result.message')}
            </div>
            ${isFriend ? '<div class="special-message">✨ 特别欢迎！期待您在希望峰学园的精彩表现！ ✨</div>' : ''}
        </div>
    `;
    
    resultContent.innerHTML = html;
    resultCard.style.display = 'block';
    
    // 添加动画效果
    resultCard.classList.add('fade-in');
    setTimeout(() => {
        resultCard.classList.remove('fade-in');
    }, 500);
}

function handleSearch() {
    const nameInput = document.getElementById('student-name');
    const idInput = document.getElementById('student-id');
    
    if (!nameInput || !idInput) return;
    
    const name = nameInput.value.trim();
    const id = idInput.value.trim().toUpperCase();
    
    // 表单验证
    if (!name || !id) {
        alert(currentLang === 'zh' ? '请填写完整信息' : (currentLang === 'ja' ? '全ての項目を入力してください' : 'Please fill in all fields'));
        return;
    }
    
    // 查找学生
    let student = students.find(s => s.id === id);
    
    // 如果有名字匹配但ID不匹配的特殊处理（可选）
    if (student && student.name !== name && student.nameJa !== name) {
        student = null;
    }
    
    const resultCard = document.getElementById('result-card');
    const resultContent = document.getElementById('result-content');
    
    if (student && student.admitted) {
        displayResult(student);
        localStorage.setItem('last_queried_id', student.id);
        
        // 播放简单音效（需要用户交互，浏览器可能限制）
        // 可选：添加震动效果
        if (resultCard) {
            resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    } else {
        // 未录取
        if (resultContent) {
            resultContent.innerHTML = `
                <div class="result-header">
                    <h3>${currentLang === 'zh' ? '查询结果' : (currentLang === 'ja' ? '照会結果' : 'Search Result')}</h3>
                </div>
                <div class="result-body">
                    <div class="not-admitted">
                        ${currentLang === 'zh' ? '很遗憾，您未被录取。' : (currentLang === 'ja' ? '残念ながら、合格していません。' : 'Unfortunately, you were not admitted.')}
                        <br><br>
                        ${currentLang === 'zh' ? '希望峰学园期待您的再次挑战！' : (currentLang === 'ja' ? '希望ヶ峰学園はあなたの再挑戦をお待ちしています！' : 'Hope\'s Peak Academy looks forward to your future application!')}
                    </div>
                </div>
            `;
        }
        if (resultCard) resultCard.style.display = 'block';
    }
}

function loadSavedSettings() {
    // 加载保存的语言
    const savedLang = localStorage.getItem('preferred_language');
    if (savedLang && locales[savedLang]) {
        currentLang = savedLang;
    }
    
    // 加载保存的页面
    const savedPage = localStorage.getItem('current_page');
    const hash = window.location.hash.slice(1);
    const pageToLoad = hash || savedPage || 'home';
    
    // 更新语言按钮样式
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        }
    });
    
    // 更新导航激活状态
    document.querySelectorAll('.menu-item').forEach(item => {
        if (item.dataset.page === pageToLoad) {
            item.classList.add('active');
        }
    });
    
    // 切换页面
    switchPage(pageToLoad);
    
    // 应用语言
    updateAllText();
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    // 隐藏加载动画
    setTimeout(() => {
        const loading = document.getElementById('loading');
        const main = document.getElementById('main-content');
        if (loading && main) {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.style.display = 'none';
                main.style.display = 'block';
            }, 500);
        }
    }, 800); // 缩短加载时间到800ms

    // 绑定语言切换
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = btn.dataset.lang;
            if (lang) {
                switchLanguage(lang);
            }
        });
    });

    // 绑定导航菜单
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = item.dataset.page;
            if (pageId) {
                switchPage(pageId);
                // 更新激活状态
                document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });

    // 绑定查询按钮
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }

    // 绑定回车查询
    const idInput = document.getElementById('student-id');
    if (idInput) {
        idInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
            }
        });
    }
    
    const nameInput = document.getElementById('student-name');
    if (nameInput) {
        nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
            }
        });
    }
    
    // 加载保存的设置
    loadSavedSettings();
});