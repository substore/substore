{ pkgs ? import <nixpkgs> {} }:

pkgs.stenv.mkDerivation {
    name = "substore";
    buildInputs = [ pkgs.nodejs pkgs.typescript  pkgs.nodePackages.pnpm pkgs.docker ];
    shellHook = ''
        pnpm install
    '';
    buildPhase = ''
        docker-compose up -d
    '';
     installPhase = ''
        mkdir -p $out/bin
        ln -s $PWD/build $out/bin/substore
      '';
}
