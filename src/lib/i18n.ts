// 中文本地化翻译文件
// i18n for HarnessKit Chinese

export const zh_CN = {
  // 通用
  "app_title": "HarnessKit",
  "app_subtitle": "每个 Agent 的家",
  "app_description": "一个免费的开源应用，用于管理你所有的 AI 编程 Agent —— 桌面端、CLI 或 Web 端。",

  // 侧边栏
  "sidebar_dashboard": "仪表盘",
  "sidebar_extensions": "扩展",
  "sidebar_agents": "Agent",
  "sidebar_audit": "安全审计",
  "sidebar_marketplace": "市场",
  "sidebar_install": "安装",
  "sidebar_settings": "设置",
  "sidebar_projects": "项目路径",

  // 仪表盘
  "dashboard_title": "仪表盘",
  "dashboard_total_extensions": "扩展总数",
  "dashboard_critical_issues": "严重问题",
  "dashboard_updates_available": "可用更新",

  // 扩展
  "extensions_title": "扩展管理",
  "extensions_search": "搜索扩展...",
  "extensions_filter_all": "全部",
  "extensions_filter_skill": "技能",
  "extensions_filter_mcp": "MCP",
  "extensions_filter_plugin": "插件",
  "extensions_filter_hook": "钩子",
  "extensions_filter_cli": "CLI",
  "extensions_enabled": "已启用",
  "extensions_disabled": "已禁用",
  "extensions_enable": "启用",
  "extensions_disable": "禁用",
  "extensions_delete": "删除",
  "extensions_no_results": "没有找到匹配的扩展",

  // Agent 路径
  "agents_title": "Agent 路径",
  "agents_description": "下方显示自动检测到的路径。点击编辑按钮可选择自定义路径。",
  "agents_not_detected": "未检测到",
  "agents_enabled": "已启用",
  "agents_edit": "编辑",

  // 项目路径
  "project_paths_title": "项目路径",
  "project_paths_description": "添加项目目录以扫描其本地扩展（.claude/skills、.mcp.json、钩子等）。",
  "project_paths_placeholder": "粘贴项目路径",
  "project_paths_add": "+ 添加",

  // 安全审计
  "audit_title": "安全审计",
  "audit_safe": "安全",
  "audit_low_risk": "低风险",
  "audit_needs_review": "需审核",
  "audit_critical": "严重",
  "audit_high": "高",
  "audit_medium": "中",
  "audit_low": "低",
  "audit_run_scan": "运行扫描",
  "audit_trust_score": "信任评分",

  // 安装
  "install_title": "安装扩展",
  "install_from_git": "从 Git 安装",
  "install_from_marketplace": "从市场安装",
  "install_from_local": "从本地安装",
  "install_git_url": "输入 Git 仓库地址...",
  "install": "安装",

  // 状态
  "status_enabled": "已启用",
  "status_disabled": "已禁用",
  "status_not_detected": "未检测到",
  "status_detected": "已检测到",

  // 配置分类
  "config_rules": "规则",
  "config_memory": "记忆",
  "config_settings": "设置",
  "config_ignore": "忽略",

  // 权限
  "perm_filesystem": "文件系统",
  "perm_network": "网络",
  "perm_shell": "Shell",
  "perm_database": "数据库",
  "perm_env": "环境变量",

  // 时间
  "time_just_now": "刚刚",
  "time_minutes_ago": "分钟前",
  "time_hours_ago": "小时前",
  "time_days_ago": "天前",
  "time_months_ago": "个月前",
} as const;

export type TranslationKey = keyof typeof zh_CN;

// 翻译函数
export function t(key: TranslationKey): string {
  return zh_CN[key] ?? key;
}
