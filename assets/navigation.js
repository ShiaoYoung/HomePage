"use strict";

(() => {
  const themeToggle = document.querySelector("#theme-toggle");
  const themeStorageKey = "shiaoyoung.homepage.theme.v1";
  const applyTheme = (theme) => {
    const red = theme === "sdu-red";
    if (red) document.documentElement.dataset.theme = "sdu-red";
    else document.documentElement.removeAttribute("data-theme");
    themeToggle.textContent = red ? "森林绿" : "山大红";
    themeToggle.title = red ? "切换到森林绿主题" : "切换到山大红主题";
    themeToggle.setAttribute("aria-pressed", String(red));
    document.querySelector('meta[name="theme-color"]').content = red ? "#9c0c13" : "#1f604b";
  };
  applyTheme(document.documentElement.dataset.theme);
  themeToggle.addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "sdu-red" ? "forest" : "sdu-red";
    applyTheme(theme);
    try { localStorage.setItem(themeStorageKey, theme); } catch { /* Switching still works for this visit. */ }
  });
  // Each destination is defined once. Favorites refer to these stable IDs.
  const site = (id, name, url, keywords = "", details = {}) => ({
    id,
    name,
    url,
    keywords,
    ...details,
  });
  const categories = [
    {
      id: "campus",
      name: "校园服务",
      keywords: "学校 山大 山东大学 sdu",
      groups: [
        {
          name: "本科",
          links: [
            site(
              "academic",
              "教务系统",
              "http://bkzhjx.wh.sdu.edu.cn/sso.jsp",
              "选课 成绩 课表 智慧教学管理服务平台",
              { description: "本科教学管理服务", badges: ["本科"] },
            ),
            site(
              "undergraduate",
              "本科生院",
              "https://www.bkjx.sdu.edu.cn/",
              "教学 通知",
            ),
            site(
              "student-admin",
              "学生管理系统",
              "http://211.86.56.236/",
              "学籍 学生事务",
            ),
            site(
              "thesis",
              "毕业论文管理",
              "https://co2.cnki.net/Login.html?dp=sdu",
              "毕业设计 知网 cnki 论文",
              { description: "毕业论文（设计）管理系统" },
            ),
          ],
        },
        {
          name: "研究生",
          links: [
            site(
              "graduate-portal",
              "研究生管理系统",
              "https://sduyjs.sdu.edu.cn/gsapp/sys/yjsemaphome/portal/index.do",
              "研究信息系统 研究生服务平台 学籍 培养 学位",
              { badges: ["研究生", "统一认证"] },
            ),
            site(
              "graduate-admission",
              "研究生招生系统",
              "https://sduyjs.sdu.edu.cn/yjszs/plugins/zs/zsxsd/entrance#/entrance",
              "研招 报考 招生",
              { badges: ["研究生"] },
            ),
            site(
              "party-course",
              "线上党课",
              "http://rudangpx.sdu.edu.cn/",
              "入党 培训 学习",
            ),
          ],
        },
        {
          name: "办事与网络",
          links: [
            site(
              "information",
              "信息服务",
              "https://service.sdu.edu.cn/",
              "办事 门户",
            ),
            site(
              "cloud",
              "山大云盘",
              "https://icloud.qd.sdu.edu.cn:7777/#/home",
              "存储 文件 云盘",
            ),
            site("payment", "缴费系统", "http://pay.sdu.edu.cn/", "学费 支付"),
            site("network", "校园网", "http://202.194.15.87/", "上网 网络"),
            site(
              "network-config",
              "校园网配置",
              "https://css.sdu.edu.cn:8800/login",
              "网络 设置 上网",
            ),
            site(
              "bus",
              "交通班车",
              "http://www.sd114.sdu.edu.cn:8080/web/bus/index",
              "校车 通勤 交通",
            ),
            site(
              "finance",
              "财务信息门户",
              "https://urp.sdu.edu.cn/",
              "财务 报销",
              { badges: ["研究生"] },
            ),
            site(
              "credentials",
              "电子证照平台",
              "https://www.nc.sdu.edu.cn/info/1004/1341.htm",
              "证明 证件",
              { badges: ["研究生"] },
            ),
            site(
              "employment",
              "就业创业",
              "http://www.job.sdu.edu.cn",
              "工作 招聘 求职",
            ),
            site(
              "campus-ai",
              "山大 AI 助手",
              "https://aiassist.sdu.edu.cn/",
              "人工智能 对话",
            ),
            site(
              "model-hub",
              "模型广场",
              "https://xplt.sdu.edu.cn/llm",
              "人工智能 ai llm 大模型",
            ),
          ],
        },
        {
          name: "通知与官网",
          links: [
            site("sdu", "山大官网", "https://www.sdu.edu.cn", "学校 首页"),
            site(
              "software-school",
              "山大软院",
              "https://www.sc.sdu.edu.cn/",
              "软件学院 院系",
            ),
            site(
              "shikong",
              "时空视点",
              "https://shikong.sdu.edu.cn/",
              "新闻 资讯",
            ),
            site(
              "library",
              "图书馆",
              "https://library.sdu.edu.cn/",
              "书籍 馆藏 文献 论文",
            ),
            site(
              "diary",
              "山大日记",
              "https://www.sdrj.sdu.edu.cn/",
              "校园 记录",
            ),
            site(
              "student-online",
              "学生在线",
              "https://online.sdu.edu.cn/",
              "学生 资讯",
            ),
            site(
              "youth",
              "青春山大",
              "https://www.youth.sdu.edu.cn/",
              "团委 青年",
            ),
            site(
              "sports",
              "体育学院",
              "https://www.tyb.sdu.edu.cn/",
              "体育 运动 院系",
            ),
          ],
        },
      ],
    },
    {
      id: "academic-writing",
      name: "学术与写作",
      keywords: "科研 论文 研究 写作",
      groups: [
        {
          links: [
            site(
              "overleaf",
              "Overleaf",
              "https://cn.overleaf.com/",
              "latex 排版 协作 论文",
            ),
            site(
              "cnki",
              "中国知网",
              "https://mtxml.oversea.cnki.net/",
              "cnki 文献 期刊 检索 论文",
            ),
            site(
              "chsi",
              "学信网",
              "https://www.chsi.com.cn/",
              "学历 学籍 认证",
            ),
            site(
              "classroom",
              "雨课堂",
              "https://changjiang.yuketang.cn/v2/web/index",
              "课程 教学 学习",
            ),
          ],
        },
      ],
    },
    {
      id: "development",
      name: "开发工具",
      keywords: "编程 代码 技术 工具网站",
      groups: [
        {
          links: [
            site(
              "github",
              "GitHub",
              "https://github.com/",
              "git 开源 仓库 代码",
            ),
            site("gitee", "Gitee", "https://gitee.com/", "git 码云 仓库 代码"),
            site(
              "leetcode",
              "力扣",
              "https://leetcode.cn/",
              "leetcode 算法 刷题 面试",
            ),
            site("csdn", "CSDN", "https://www.csdn.net/", "博客 技术 教程"),
            site(
              "element-plus",
              "Element Plus",
              "https://element-plus.org/zh-CN/",
              "element-plus vue 组件 前端 ui",
            ),
            site(
              "iconfont",
              "阿里图标库",
              "https://www.iconfont.cn/",
              "iconfont 图标 素材 svg",
            ),
            site(
              "drawdb",
              "数据库设计",
              "https://www.drawdb.app",
              "drawdb 数据库 er sql 图表",
            ),
            site(
              "yuque",
              "语雀",
              "https://www.yuque.com/dashboard",
              "笔记 文档 知识库",
            ),
          ],
        },
      ],
    },
    {
      id: "ai",
      name: "超级智能",
      keywords: "人工智能 天才智能 大模型 对话 聊天 llm",
      groups: [
        {
          links: [
            site("chatgpt", "ChatGPT", "https://chatgpt.com/", "openai gpt"),
            site("grok", "Grok", "https://grok.com/", "xai"),
            site(
              "gemini",
              "Gemini",
              "https://gemini.google.com/",
              "google 谷歌",
            ),
            site(
              "deepseek",
              "DeepSeek",
              "https://chat.deepseek.com/",
              "深度求索",
            ),
            site(
              "doubao",
              "豆包",
              "https://www.doubao.com/chat/",
              "doubao 字节",
            ),
            site(
              "wenxin",
              "文心一言",
              "https://yiyan.baidu.com/",
              "百度 文小言 ernie",
            ),
          ],
        },
      ],
    },
    {
      id: "my-tools",
      name: "我的小作坊",
      keywords: "小工具 个人项目 自制",
      groups: [
        {
          links: [
            site(
              "textchecker",
              "TextChecker",
              "https://shiaoyoung.github.io/TextChecker/",
              "文本 对比 差异 diff 文件",
              { description: "对齐文本，比较文件差异" },
            ),
            site(
              "coderunner",
              "CodeRunner",
              "https://shiaoyoung.github.io/lite-code-runner/",
              "代码 运行 python c c++ java javascript matlab",
              { description: "在浏览器中运行代码" },
            ),
            site(
              "mbti",
              "MBTI Test",
              "https://shiaoyoung.github.io/MBTI-test/",
              "人格 性格 测试 16型",
              { description: "探索 16 型人格倾向" },
            ),
            site(
              "svg2png",
              "SVG2PNG",
              "https://shiaoyoung.github.io/SVG2PNG/",
              "图片 格式 转换 svg png",
              { description: "将 SVG 转为 PNG 图片" },
            ),
          ],
        },
      ],
    },
    {
      id: "life",
      name: "生活",
      keywords: "日常 生活",
      groups: [
        {
          links: [
            site("taobao", "淘宝", "https://www.taobao.com/", "购物 电商"),
            site("jd", "京东", "https://www.jd.com/", "购物 电商"),
            site(
              "weather",
              "MSN 天气",
              "https://www.msn.cn/zh-cn/weather",
              "天气 气温 预报",
            ),
            site(
              "xiaohongshu",
              "小红书",
              "https://www.xiaohongshu.com/",
              "生活 攻略 分享",
            ),
            site(
              "amap",
              "高德地图",
              "https://ditu.amap.com/",
              "地图 导航 出行 路线",
            ),
          ],
        },
      ],
    },
    {
      id: "leisure",
      name: "Touching Fish",
      keywords: "摸鱼 touch fish 放松",
      groups: [
        {
          links: [
            site(
              "bilibili",
              "哔哩哔哩",
              "https://www.bilibili.com/",
              "bilibili b站 视频",
            ),
            site("zhihu", "知乎", "https://www.zhihu.com/", "问答 社区"),
            site(
              "douyin",
              "抖音",
              "https://www.douyin.com/",
              "byte dance bytedance 短视频",
            ),
          ],
        },
      ],
    },
  ];

  const defaultFavoriteIds = [
    "graduate-portal",
    "information",
    "network",
    "deepseek",
    "chatgpt",
    "github",
  ];
  const allSites = categories.flatMap((category) =>
    category.groups.flatMap((group) => group.links),
  );
  const sitesById = new Map(allSites.map((link) => [link.id, link]));
  const favoritesStorageKey = "shiaoyoung.homepage.favorites.v1";
  const validFavoriteIds = (ids) =>
    [...new Set(ids.filter((id) => typeof id === "string" && sitesById.has(id)))];
  const loadFavoriteIds = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(favoritesStorageKey));
      if (Array.isArray(saved)) return validFavoriteIds(saved);
    } catch {
      // A blocked or malformed local setting must not prevent navigation.
    }
    return validFavoriteIds(defaultFavoriteIds);
  };
  let favoriteIds = loadFavoriteIds();
  let draftFavoriteIds = [];
  const searchInput = document.querySelector("#site-search");
  const clearButton = document.querySelector("#clear-search");
  const favorites = document.querySelector("#favorites");
  const directory = document.querySelector("#directory");
  const emptyState = document.querySelector("#empty-state");
  const searchStatus = document.querySelector("#search-status");
  const editFavorites = document.querySelector("#edit-favorites");
  const settingsDialog = document.querySelector("#favorites-settings");
  const selectedFavorites = document.querySelector("#selected-favorites");
  const favoriteOptions = document.querySelector("#favorite-options");
  const favoritesFilter = document.querySelector("#favorites-filter");
  const settingsError = document.querySelector("#favorites-settings-error");
  const nativeSettingsDialog = typeof settingsDialog.showModal === "function";
  const pageShell = document.querySelector(".page-shell");
  const settingsOverlay = document.createElement("div");
  settingsOverlay.className = "settings-overlay";
  settingsOverlay.hidden = true;
  settingsOverlay.setAttribute("aria-hidden", "true");
  document.body.append(settingsOverlay);
  const settingsAreOpen = () => settingsDialog.hasAttribute("open");
  const finishClosingSettings = () => {
    settingsOverlay.hidden = true;
    document.body.classList.remove("settings-open");
    pageShell.removeAttribute("aria-hidden");
    editFavorites.focus({ preventScroll: true });
  };
  const closeSettings = () => {
    if (nativeSettingsDialog) settingsDialog.close();
    else {
      settingsDialog.removeAttribute("open");
      finishClosingSettings();
    }
  };
  const showSettings = () => {
    document.body.classList.add("settings-open");
    if (nativeSettingsDialog) settingsDialog.showModal();
    else {
      settingsDialog.classList.add("settings-fallback");
      settingsDialog.setAttribute("role", "dialog");
      settingsDialog.setAttribute("aria-modal", "true");
      settingsDialog.setAttribute("open", "");
      settingsOverlay.hidden = false;
      pageShell.setAttribute("aria-hidden", "true");
    }
  };
  document.addEventListener("keydown", (event) => {
    if (nativeSettingsDialog || !settingsAreOpen()) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeSettings();
    } else if (event.key === "Tab") {
      const controls = [...settingsDialog.querySelectorAll("button:not(:disabled), input, [tabindex='0']")]
        .filter((control) => control.getClientRects().length > 0);
      const first = controls[0];
      const last = controls[controls.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || !controls.includes(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !controls.includes(active))) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  document.addEventListener("focusin", (event) => {
    if (!nativeSettingsDialog && settingsAreOpen() && !settingsDialog.contains(event.target)) {
      document.querySelector("#favorites-settings-title").focus();
    }
  });

  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const createLinkGrid = (links) => {
    const list = element("ul", "link-grid");
    for (const link of links) {
      const item = element("li");
      const anchor = element("a", "site-link");
      anchor.href = link.url;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.dataset.siteId = link.id;
      anchor.title = [link.name, link.description, ...(link.badges || [])]
        .filter(Boolean)
        .join(" · ");
      anchor.append(element("span", "site-name", link.name));
      anchor.append(element("span", "sr-only", "（新标签页打开）"));
      item.append(anchor);
      list.append(item);
    }
    return list;
  };

  const renderFavorites = () => {
    const favoriteGrid = createLinkGrid(
      favoriteIds.map((id) => sitesById.get(id)),
    );
    favoriteGrid.id = "favorite-links";
    document.querySelector("#favorite-links").replaceWith(favoriteGrid);
    document.querySelector("#favorites-empty").hidden = favoriteIds.length !== 0;
  };
  renderFavorites();
  document.querySelector("#year").textContent = new Date().getFullYear();

  const normalize = (text) =>
    text.normalize("NFKC").toLocaleLowerCase("zh-CN").trim();
  const searchTexts = new Map();
  for (const category of categories) {
    for (const group of category.groups) {
      for (const link of group.links) {
        searchTexts.set(
          link.id,
          normalize(
            [
              category.name,
              category.keywords,
              group.name || "",
              link.name,
              link.keywords,
              link.description || "",
              ...(link.badges || []),
            ].join(" "),
          ),
        );
      }
    }
  }

  const renderDraftFavorites = (focusTarget) => {
    const fragment = document.createDocumentFragment();
    draftFavoriteIds.forEach((id, index) => {
      const link = sitesById.get(id);
      const item = element("li", "selected-favorite");
      item.dataset.siteId = id;
      item.tabIndex = -1;
      item.append(element("span", "selected-favorite-name", `${index + 1}. ${link.name}`));
      const actions = element("div", "selected-favorite-actions");
      const addAction = (label, action, disabled, handler) => {
        const button = element("button", "settings-action", label);
        button.type = "button";
        button.dataset.action = action;
        button.disabled = disabled;
        button.setAttribute("aria-label", `${label} ${link.name}`);
        button.addEventListener("click", handler);
        actions.append(button);
      };
      const move = (offset, action) => {
        const destination = index + offset;
        [draftFavoriteIds[index], draftFavoriteIds[destination]] =
          [draftFavoriteIds[destination], draftFavoriteIds[index]];
        renderDraftFavorites({ id, action });
      };
      addAction("上移", "up", index === 0, () => move(-1, "up"));
      addAction("下移", "down", index === draftFavoriteIds.length - 1, () => move(1, "down"));
      addAction("移除", "remove", false, () => {
        draftFavoriteIds = draftFavoriteIds.filter((selectedId) => selectedId !== id);
        const nextId = draftFavoriteIds[Math.min(index, draftFavoriteIds.length - 1)];
        renderDraftFavorites({ id: nextId });
      });
      item.append(actions);
      fragment.append(item);
    });
    selectedFavorites.replaceChildren(fragment);
    document.querySelector("#selected-favorites-count").textContent = `（${draftFavoriteIds.length}）`;
    document.querySelector("#selected-favorites-empty").hidden = draftFavoriteIds.length !== 0;
    for (const checkbox of favoriteOptions.querySelectorAll("input[type=checkbox]")) {
      checkbox.checked = draftFavoriteIds.includes(checkbox.value);
    }
    if (focusTarget) {
      const row = [...selectedFavorites.children].find((item) => item.dataset.siteId === focusTarget.id);
      const button = focusTarget.action && row?.querySelector(`[data-action="${focusTarget.action}"]:not(:disabled)`);
      (button || row || document.querySelector("#selected-favorites-heading")).focus({ preventScroll: true });
    }
  };

  const renderFavoriteOptions = () => {
    const terms = normalize(favoritesFilter.value).split(/\s+/).filter(Boolean);
    const fragment = document.createDocumentFragment();
    let count = 0;
    for (const category of categories) {
      const links = category.groups.flatMap((group) => group.links).filter((link) =>
        terms.every((term) => searchTexts.get(link.id).includes(term)),
      );
      if (!links.length) continue;
      const group = element("fieldset", "favorite-option-group");
      group.append(element("legend", "", category.name));
      for (const link of links) {
        const label = element("label", "favorite-choice");
        const checkbox = element("input");
        checkbox.type = "checkbox";
        checkbox.value = link.id;
        checkbox.checked = draftFavoriteIds.includes(link.id);
        checkbox.addEventListener("change", () => {
          draftFavoriteIds = checkbox.checked
            ? [...draftFavoriteIds, link.id]
            : draftFavoriteIds.filter((id) => id !== link.id);
          renderDraftFavorites();
        });
        label.append(checkbox, element("span", "", link.name));
        group.append(label);
        count++;
      }
      fragment.append(group);
    }
    favoriteOptions.replaceChildren(fragment);
    document.querySelector("#favorite-options-empty").hidden = count !== 0;
  };

  editFavorites.addEventListener("click", () => {
    draftFavoriteIds = [...favoriteIds];
    favoritesFilter.value = "";
    settingsError.hidden = true;
    renderFavoriteOptions();
    renderDraftFavorites();
    showSettings();
    document.querySelector("#favorites-settings-title").focus({ preventScroll: true });
  });
  favoritesFilter.addEventListener("input", renderFavoriteOptions);
  for (const id of ["close-favorites-settings", "cancel-favorites-settings"]) {
    document.getElementById(id).addEventListener("click", closeSettings);
  }
  settingsDialog.addEventListener("close", finishClosingSettings);
  document.querySelector("#restore-favorites").addEventListener("click", () => {
    draftFavoriteIds = validFavoriteIds(defaultFavoriteIds);
    favoritesFilter.value = "";
    renderFavoriteOptions();
    renderDraftFavorites();
  });
  document.querySelector("#save-favorites").addEventListener("click", () => {
    try {
      localStorage.setItem(favoritesStorageKey, JSON.stringify(draftFavoriteIds));
    } catch {
      settingsError.textContent = "无法保存到浏览器，请允许本站使用本地存储后重试。";
      settingsError.hidden = false;
      return;
    }
    favoriteIds = [...draftFavoriteIds];
    renderFavorites();
    closeSettings();
  });

  const renderDirectory = () => {
    const query = normalize(searchInput.value);
    const terms = query.split(/\s+/).filter(Boolean);
    const searching = terms.length > 0;
    const fragment = document.createDocumentFragment();
    let resultCount = 0;

    for (const category of categories) {
      const groups = category.groups
        .map((group) => ({
          ...group,
          links: group.links.filter((link) =>
            terms.every((term) => searchTexts.get(link.id).includes(term)),
          ),
        }))
        .filter((group) => group.links.length > 0);
      const categoryCount = groups.reduce(
        (count, group) => count + group.links.length,
        0,
      );
      if (!categoryCount) continue;
      resultCount += categoryCount;

      const section = element("section", "section-card");
      section.id = category.id;
      section.setAttribute("aria-labelledby", `${category.id}-heading`);
      const heading = element("div", "section-heading");
      const title = element("h2", "", category.name);
      title.id = `${category.id}-heading`;
      heading.append(title);
      section.append(heading);
      for (const group of groups) {
        const block = element("div", "group");
        if (group.name) block.append(element("h3", "", group.name));
        block.append(createLinkGrid(group.links));
        section.append(block);
      }
      fragment.append(section);
    }

    directory.replaceChildren(fragment);
    favorites.hidden = searching;
    clearButton.hidden = searchInput.value.length === 0;
    emptyState.hidden = resultCount !== 0;
    searchStatus.textContent = searching
      ? `找到 ${resultCount} 个相关站点`
      : "";
    searchStatus.hidden = !searching;
  };

  const resetSearch = () => {
    searchInput.value = "";
    renderDirectory();
    searchInput.focus();
  };

  searchInput.addEventListener("input", renderDirectory);
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !event.isComposing) {
      event.preventDefault();
      resetSearch();
    }
  });
  clearButton.addEventListener("click", resetSearch);
  document
    .querySelector("#reset-search")
    .addEventListener("click", resetSearch);
  document
    .querySelector("#search-form")
    .addEventListener("submit", (event) => event.preventDefault());
  renderDirectory();
})();
