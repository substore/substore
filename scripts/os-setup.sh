echo 'This script will set up your OS for Substore'

echo '**Installing rust..**'
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

echo '**Installing nightly toolchain..**'
rustup toolchain install nightly

echo '**Switch to nightly toolchain..**'
rustup default nightly

echo '**Update..**'
rustup update

echo '**Installing pnpm..**'
curl -fsSL https://get.pnpm.io/install.sh | sh -

