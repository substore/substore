{
  description = "nix flake for substore";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }: flake-utils.lib.eachDefaultSystem (system: let
    pkgs = nixpkgs.legacyPackages.${system};
   in {
    devShell = pkgs.mkShell {
       nativeBuiltInputs = [
           pkgs.pnpm
           pkgs.nodePackages.typescript-language-server
       ];
    };
   });
}
