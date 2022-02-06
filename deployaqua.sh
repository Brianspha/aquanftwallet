cd aqua-services
yarn compile-aqua 
cd .. 
cd fluence-services
marine aqua artifacts/aqua_nft_wallet_api_service.wasm  
aqua dist deploy --addr /dns4/kras-00.fluence.dev/tcp/19990/wss/p2p/12D3KooWSD5PToNiLQwKDXsu8JSysCwUt8BVUJEqCHcDe7P5h45e --data-path artifacts/deploy.json --service aqua_nft_wallet_api_service