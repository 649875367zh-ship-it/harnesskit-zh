// 中文本地化翻译文件
// i18n for HarnessKit Chinese
// 原则：专业术语保留英文，仅在界面文案处加中文注解

export const zh_CN = {
  // 通用
  "app_title": "HarnessKit",
  "app_subtitle": "每个 Agent 的家",
  "app_description": "一个免费开源的应用，用于管理你所有的 AI 编程 Agent —— 桌面端、CLI 或 Web 端。",

  // 侧边栏
  "sidebar_dashboard": "概览",
  "sidebar_extensions": "扩展 Extensions",
  "sidebar_agents": "Agents",
  "sidebar_audit": "安全审计 Audit",
  "sidebar_marketplace": "市场 Marketplace",
  "sidebar_install": "安装 Install",
  "sidebar_settings": "设置 Settings",
  "sidebar_projects": "项目路径",

  // 概览仪表盘
  "dashboard_title": "概览",
  "dashboard_total_extensions": "扩展总数",
  "dashboard_critical_issues": "Critical Issues",
  "dashboard_updates_available": "可用更新",

  // 扩展
  "extensions_title": "扩展管理",
  "extensions_search": "搜索扩展...",
  "extensions_filter_all": "全部 All",
  "extensions_filter_skill": "Skills 技能",
  "extensions_filter_mcp": "MCP Servers",
  "extensions_filter_plugin": "Plugins 插件",
  "extensions_filter_hook": "Hooks 钩子",
  "extensions_filter_cli": "Agent CLIs",
  "extensions_enabled": "已启用 Enabled",
  "extensions_disabled": "已禁用 Disabled",
  "extensions_enable": "启用 Enable",
  "extensions_disable": "禁用 Disable",
  "extensions_delete": "删除",
  "extensions_no_results": "没有找到匹配的扩展",

  // Agent 管理
  "agents_title": "Agent 管理",
  "agents_description": "下方显示自动检测到的路径。点击编辑按钮可选择自定义路径。",
  "agents_not_detected": "未检测到 Not Detected",
  "agents_enabled": "已启用",
  "agents_edit": "编辑",
  "agents_detected": "已检测到 Detected",
  "agents_binary_path": "Binary 路径",

  // 项目路径
  "project_paths_title": "项目路径",
  "project_paths_description": "添加项目目录以扫描其本地扩展（.claude/skills、.mcp.json、Hooks 等）。",
  "project_paths_placeholder": "粘贴项目路径...",
  "project_paths_add": "+ 添加",
  "project_paths_edit": "编辑",
  "project_paths_remove": "移除",

  // 安全审计 Audit
  "audit_title": "安全审计",
  "audit_safe": "Safe 安全",
  "audit_low_risk": "Low Risk 低风险",
  "audit_needs_review": "Needs Review 需审核",
  "audit_critical": "Critical 严重",
  "audit_high": "High 高",
  "audit_medium": "Medium 中",
  "audit_low": "Low 低",
  "audit_run_scan": "运行扫描 Run Audit",
  "audit_trust_score": "Trust Score 信任评分",
  "audit_scanning": "扫描中...",
  "audit_last_scan": "上次扫描",
  "audit_no_findings": "未发现安全问题",
  "audit_findings": "发现 {count} 个问题",

  // 安装
  "install_title": "安装扩展",
  "install_from_git": "从 Git 安装",
  "install_from_marketplace": "从 Marketplace 安装",
  "install_from_local": "从本地安装",
  "install_git_url": "输入 Git 仓库地址...",
  "install": "安装",

  // 状态
  "status_enabled": "已启用",
  "status_disabled": "已禁用",
  "status_not_detected": "未检测到",
  "status_detected": "已检测到",

  // 配置文件
  "config_rules": "Rules 规则",
  "config_memory": "Memory 记忆",
  "config_settings": "Settings 设置",
  "config_ignore": "Ignore 忽略",
  "config_configs": "Configs 配置",

  // 配置文件面板操作
  "config_select_file": "选择文件",
  "config_select_folder": "选择文件夹",
  "config_browse_file": "浏览文件...",
  "config_browse_folder": "浏览文件夹...",
  "config_cancel": "取消",
  "config_save": "保存",
  "config_reveal_finder": "在 Finder 中显示",
  "config_open_editor": "在编辑器中打开",
  "config_preview_unavailable": "预览不可用",
  "config_loading": "加载中...",
  "config_paste_path": "粘贴文件或文件夹路径...",
  "config_custom": "自定义 Custom",
  "config_auto_detected": "自动检测",
  "config_file_size": "文件大小",
  "config_scope": "作用域",
  "config_global": "全局 Global",
  "config_project": "项目 Project",
  "config_content_preview": "内容预览",
  "config_path": "路径",

  // 扩展类型描述
  "kind_skill_desc": "可复用的 Agent 指令集",
  "kind_mcp_desc": "Model Context Protocol Server — 扩展 Agent 能力",
  "kind_plugin_desc": "扩展包，提供额外功能",
  "kind_hook_desc": "Agent 事件触发的 Shell 命令",
  "kind_cli_desc": "Agent-first CLI 工具",

  // Trust Score 信任评分
  "trust_safe": "Safe 安全",
  "trust_safe_desc": "Score 80+: 未发现安全问题",
  "trust_low_risk": "Low Risk 低风险",
  "trust_low_risk_desc": "Score 60-79: 轻微问题，一般安全",
  "trust_needs_review": "Needs Review 需审核",
  "trust_needs_review_desc": "Score < 60: 建议审核",

  // 扩展详情
  "detail_mcp_part_of": "此 MCP Server 属于 ",
  "detail_skill_part_of": "此 Skill 属于 ",
  "detail_enabled": "已启用",
  "detail_disabled": "已禁用",
  "detail_no_source": "无来源",
  "detail_copy_config_title": "将此扩展的配置复制到其他 Agent",
  "detail_failed_to_delete": "删除失败",
  "detail_file_structure": "文件结构",
  "detail_permissions": "权限",
  "detail_audit_findings": "审计发现",
  "detail_deploy": "部署到其他 Agent",
  "detail_agents_using": "正在使用此扩展的 Agent",

  // 安装对话框
  "install_select_dir": "选择包含 SKILL.md 的目录",
  "install_git_hint": "输入包含 Skill 的 Git 仓库 URL",
  "install_local_hint_with_browse": "输入本地目录路径，或浏览选择",
  "install_local_hint": "输入本地目录路径",
  "install_local_placeholder": "粘贴本地目录路径...",
  "install_method_git": "Git URL",
  "install_method_local": "本地目录",

  // Toast 消息
  "toast_failed_open": "打开文件失败",
  "toast_failed_reveal": "在 Finder 中显示失败",
  "toast_failed_copy_path": "复制路径失败",
  "toast_already_detected": "此路径已被自动检测",
  "toast_already_added": "此路径已添加",
  "toast_path_added": "自定义路径已添加",
  "toast_add_path_failed": "添加自定义路径失败",
  "toast_path_updated": "自定义路径已更新",
  "toast_update_path_failed": "更新自定义路径失败",
  "toast_path_removed": "自定义路径已移除",
  "toast_remove_path_failed": "移除自定义路径失败",
  "toast_failed_save_order": "保存 Agent 排序失败",
  "toast_failed_scan": "扫描和同步失败",
  "toast_failed_set_theme": "设置 Theme 失败",
  "toast_failed_set_icon": "设置应用图标失败",
  "toast_marketplace_search_failed": "搜索 Marketplace 失败",
  "toast_marketplace_trending_failed": "加载热门数据失败",
  "toast_extension_update_failed": "更新扩展失败",
  "toast_finalize_delete_failed": "完成删除失败",
  "toast_remove_cli_failed": "移除 CLI 二进制失败",
  "toast_fetch_extensions_failed": "加载扩展失败",
  "toast_fetch_agents_failed": "加载 Agent 失败",
  "toast_fetch_configs_failed": "加载 Agent 配置失败",
  "toast_load_projects_failed": "加载项目失败",
  "toast_load_audit_failed": "加载审计结果失败",

  // 错误边界
  "error_unexpected": "发生了意外错误",
  "error_retry": "重试",

  // 提示/通知
  "hint_dismiss": "关闭提示",
  "toast_dismiss": "关闭通知",

  // Marketplace
  "marketplace_trending": "热门 Trending",
  "marketplace_search": "搜索...",
  "marketplace_no_results": "未找到匹配结果",
  "marketplace_install": "安装",
  "marketplace_preview": "预览",
  "marketplace_details": "详情",
  "marketplace_trending_item_not_found": "找不到此项目的详情，请尝试直接搜索",
  "marketplace_skills": "Skills",
  "marketplace_mcp_servers": "MCP Servers",
  "marketplace_clis": "Agent CLIs",

  // 更新
  "update_available": "可用更新",
  "update_current": "当前版本",
  "update_latest": "最新版本",
  "update_changelog": "Changelog",
  "update_skip": "跳过",
  "update_install": "安装更新",
  "update_checking": "检查更新中...",
  "update_up_to_date": "已是最新版本",
  "update_new_contributors": "New Contributors",
  "update_full_changelog": "Full Changelog",

  // 设置
  "settings_title": "设置",
  "settings_language": "语言 Language",
  "settings_theme": "主题 Theme",
  "settings_check_updates": "检查更新",
  "settings_about": "关于",
  "settings_version": "版本",
  "settings_appearance": "外观",
  "settings_light": "浅色 Light",
  "settings_dark": "深色 Dark",
  "settings_system": "跟随系统 System",

  // Onboarding
  "onboarding_welcome": "欢迎使用 HarnessKit",
  "onboarding_get_started": "开始使用",
  "onboarding_finish": "完成",
  "onboarding_next": "下一步",
  "onboarding_skip": "跳过",

  // 通用操作
  "loading": "加载中...",
  "cancel": "取消",
  "save": "保存",
  "delete": "删除",
  "confirm_delete": "确认删除",
  "delete_confirm_msg": "确定要删除吗？此操作无法撤销",
  "select_file": "选择文件",
  "select_folder": "选择文件夹",
  "copy_path": "复制路径",
  "refresh": "刷新",
  "no_data": "暂无数据",
  "back": "返回",
  "next": "下一步",
  "finish": "完成",
  "close": "关闭",
  "search": "搜索",
  "filter": "筛选",
  "sort": "排序",
  "name": "名称",
  "source": "来源 Source",
  "install_count": "安装次数",
  "description": "描述",
  "path": "路径",
  "size": "大小",
  "last_modified": "最后修改",
  "recent_activity": "最近活动",
  "recently_installed": "最近安装",
  "tip_of_the_day": "每日提示 Tip",
  "quick_actions": "快捷操作",
  "view_agents": "查看 Agents",
  "run_audit": "运行审计",
  "check_updates": "检查更新",
} as const;

export type TranslationKey = keyof typeof zh_CN;

// 翻译函数
export function t(key: TranslationKey): string {
  return zh_CN[key] ?? key;
}
