#!/bin/sh

# This script builds all subprojects and puts all created Wasm modules in one dir
(
  cd aqua_nft_wallet_api_service || exit;
  cargo update --aggressive;
  marine build --release;
)

rm -f artifacts/* || true
mkdir -p artifacts

cp aqua_nft_wallet_api_service/target/wasm32-wasi/release/aqua_nft_wallet_api_service.wasm artifacts/
