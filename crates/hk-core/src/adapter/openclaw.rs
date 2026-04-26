// OpenClaw agent adapter
// Config: ~/.openclaw/workspace/openclaw.json
// Memory: ~/.openclaw/workspace/MEMORY.md, ~/.openclaw/workspace/memory/
// Skills: ~/.openclaw/workspace/skills/

use super::{AgentAdapter, HookEntry, McpServerEntry};
use std::path::PathBuf;

pub struct OpenClawAdapter {
    home: PathBuf,
}

impl Default for OpenClawAdapter {
    fn default() -> Self {
        Self::new()
    }
}

impl OpenClawAdapter {
    pub fn new() -> Self {
        Self {
            home: dirs::home_dir().unwrap_or_default(),
        }
    }

    #[cfg(test)]
    pub fn with_home(home: PathBuf) -> Self {
        Self { home }
    }
}

impl AgentAdapter for OpenClawAdapter {
    fn name(&self) -> &str {
        "openclaw"
    }

    fn base_dir(&self) -> PathBuf {
        self.home.join(".openclaw")
    }

    fn detect(&self) -> bool {
        self.base_dir().exists()
    }

    fn skill_dirs(&self) -> Vec<PathBuf> {
        let workspace = self.base_dir().join("workspace");
        vec![workspace.join("skills")]
    }

    fn mcp_config_path(&self) -> PathBuf {
        self.base_dir().join("workspace").join("openclaw.json")
    }

    fn hook_config_path(&self) -> PathBuf {
        self.base_dir().join("workspace").join("openclaw.json")
    }

    fn plugin_dirs(&self) -> Vec<PathBuf> {
        vec![]
    }

    fn read_mcp_servers(&self) -> Vec<McpServerEntry> {
        // OpenClaw uses openclaw.json (JSON format)
        // MCP servers configured in the config
        vec![]
    }

    fn read_hooks(&self) -> Vec<HookEntry> {
        vec![]
    }

    fn global_rules_files(&self) -> Vec<PathBuf> {
        let ws = self.base_dir().join("workspace");
        let mut files = vec![];
        // SOUL.md
        let soul = ws.join("SOUL.md");
        if soul.exists() { files.push(soul); }
        // IDENTITY.md
        let identity = ws.join("IDENTITY.md");
        if identity.exists() { files.push(identity); }
        files
    }

    fn global_memory_files(&self) -> Vec<PathBuf> {
        let ws = self.base_dir().join("workspace");
        let mut files = vec![];
        // MEMORY.md
        let mem = ws.join("MEMORY.md");
        if mem.exists() { files.push(mem); }
        // memory/ directory
        let mem_dir = ws.join("memory");
        if mem_dir.exists() { files.push(mem_dir); }
        files
    }

    fn global_settings_files(&self) -> Vec<PathBuf> {
        let ws = self.base_dir().join("workspace");
        let mut files = vec![];
        // openclaw.json
        let cfg = ws.join("openclaw.json");
        if cfg.exists() { files.push(cfg); }
        // AGENTS.md
        let agents = ws.join("AGENTS.md");
        if agents.exists() { files.push(agents); }
        // USER.md
        let user = ws.join("USER.md");
        if user.exists() { files.push(user); }
        // TOOLS.md
        let tools = ws.join("TOOLS.md");
        if tools.exists() { files.push(tools); }
        files
    }

    fn project_rules_patterns(&self) -> Vec<String> {
        vec!["CLAUDE.md".to_string(), "AGENTS.md".to_string(), "SOUL.md".to_string()]
    }

    fn project_memory_patterns(&self) -> Vec<String> {
        vec!["MEMORY.md".to_string()]
    }

    fn project_settings_patterns(&self) -> Vec<String> {
        vec![]
    }

    fn project_ignore_patterns(&self) -> Vec<String> {
        vec![".clawignore".to_string()]
    }
}
