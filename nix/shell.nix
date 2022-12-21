let
  pkgs = import <nixpkgs> {};
  nodejs = pkgs.nodejs-16_x;
in
  pkgs.stdenv.mkDerivation {
    name = "development-environment";
    buildInputs = [
      nodejs
      nodejs.typescript
      pkgs.docker
      pkgs.docker-compose
    ];
  }
