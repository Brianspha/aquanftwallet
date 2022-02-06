/*
 * Copyright 2020 Fluence Labs Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 #![allow(improper_ctypes)]

 use marine_rs_sdk::marine;
 use marine_rs_sdk::module_manifest;

 use marine_rs_sdk::WasmLoggerBuilder;
 use marine_rs_sdk::MountedBinaryResult;

 module_manifest!();

 pub fn main() {
     WasmLoggerBuilder::new().build().unwrap();
 }

 #[marine]
 pub fn get(url: String) -> String {
    log::info!("get the resource using url: {}", url);
    let result = curl(vec![url]);
    String::from_utf8(result.stdout).unwrap()
 }

 #[marine]
 pub fn get_collection_listing_by_address_opensea(asset_contract_address: String, limit: String, order: String) -> String {
    log::info!("Get all collections from opensea using contract_address:{} limit:{} order:{} \n\n", asset_contract_address, limit,order);
    let url = format!("https://testnets-api.opensea.io/api/v1/assets?&asset_contract_address={}&order_direction={}&offset=0&limit={}", asset_contract_address, order, limit);
    let collection_listing = curl(vec![url]);

    String::from_utf8(collection_listing.stdout).unwrap()
 }

 #[marine]
 pub fn get_all_collections_opensea(limit: String, offset: String) -> String {
   log::info!("Get all collections from opensea limit:{} offset:{} \n\n",limit,offset);
   let url = format!("https://api.opensea.io/api/v1/collections&offset={}&limit={}", offset, limit);
    let result = curl(vec![url]);

    String::from_utf8(result.stdout).unwrap()
 }


 #[marine]
 #[link(wasm_import_module = "host")]
 extern "C" {
     fn curl(cmd: Vec<String>) -> MountedBinaryResult;
 }
