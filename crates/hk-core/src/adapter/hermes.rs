// Hermes Agent adapter
// Config: ~/.hermes/config.yaml
// Skills: ~/.hermes/skills/
// Memory: ~/.hermes/memory/ or ~/.hermes/sessions/

use super::{AgentAdapter, HookEntry, McpServerEntry};
use std::path::PathBuf;

pub struct HermesAdapter {
    home: PathBuf,
}

impl Default for HermesAdapter {
    fn default() -> Self {
        Self::new()
    }
}

impl HermesAdapter {
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

impl AgentAdapter for HermesAdapter {
    fn name(&self) -> &str {
        "hermes"
    }

    fn base_dir(&self) -> PathBuf {
        self.home.join(".hermes")
    }

    fn detect(&self) -> bool {
        self.base_dir().exists()
    }

    fn skill_dirs(&self) -> Vec<PathBuf> {
        vec![self.base_dir().join("skills")]
    }

    fn mcp_config_path(&self) -> PathBuf {
        self.base_dir().join("config.yaml")
    }

    fn hook_config_path(&self) -> PathBuf {
        self.base_dir().join("config.yaml")
    }

    fn plugin_dirs(&self) -> Vec<PathBuf> {
        vec![]
    }

    fn read_mcp_servers(&self) -> Vec<McpServerEntry> {
        // Hermes uses config.yaml which is TOML/YAML format
        // MCP servers may be configured in toolsets section
        vec![]
    }

    fn read_hooks(&self) -> Vec<HookEntry> {
        vec![]
    }

    fn global_rules_files(&self) -> Vec<PathBuf> {
        let base = self.base_dir();
        let mut files = vec![];
        // SOUL.md / personality files
        let soul = base.join("SOUL.md");
        if soul.exists() { files.push(soul); }
        files
    }

    fn global_memory_files(&self) -> Vec<PathBuf> {
        let base = self.base_dir();
        let mut files = vec![];
        // Memory files
        let mem = base.join("memory");
        if mem.exists() { files.push(mem); }
        files
    }

    fn global_settings_files(&self) -> Vec<PathBuf> {
        let base = self.base_dir();
        let mut files = vec![];
        let cfg = base.join("config.yaml");
        if cfg.exists() { files.push(cfg); }
        files
    }

    fn project_rules_patterns(&self) -> Vec<String> {
        vec!["SOUL.md".to_string()]
    }

    fn project_memory_patterns(&self) -> Vec<String> {
        vec!["memory.md".to_string()]
    }

    fn project_settings_patterns(&self) -> Vec<String> {
        vec![]
    }

    fn project_ignore_patterns(&self) -> Vec<String> {
        vec![]
    }
}
