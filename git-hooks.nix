{ inputs, ... }:
{
  imports = [
    inputs.git-hooks.flakeModule
  ];
  perSystem =
    { config, ... }:
    {
      pre-commit = {
        check.enable = true;
        settings = {
          hooks = {
            actionlint.enable = true;
            check-json.enable = true;
            check-toml.enable = true;
            editorconfig-checker = {
              enable = true;
              excludes = [
                ".idea"
                "flake.lock"
                "noto-sans-mono-cjk-jp-include.txt"
                "worker-configuration.d.ts"
                "yarn.lock"
              ];
            };
            eslint = {
              enable = true;
              entry = "node_modules/.bin/eslint";
              package = null;
            };
            markdownlint = {
              enable = true;
              settings.configuration = {
                MD013 = false;
                MD026 = false;
              };
            };
            treefmt = {
              enable = true;
              package = config.treefmt.build.wrapper;
            };
            yamlfmt.enable = true;
            yamllint.enable = true;
          };
          src = ./.;
        };
      };
    };
}
