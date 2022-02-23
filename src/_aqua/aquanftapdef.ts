/**
 *
 * This file is auto-generated. Do not edit manually: changes may be erased.
 * Generated by Aqua compiler: https://github.com/fluencelabs/aqua/.
 * If you find any bugs, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * Aqua version: 0.5.2-test.1-255
 *
 */
import { Fluence, FluencePeer } from '@fluencelabs/fluence';
import {
    CallParams,
    callFunction,
    registerService,
} from '@fluencelabs/fluence/dist/internal/compilerSupport/v2';


// Services

export interface IAquaNFTWalletAPIDef {
    get: (url: string, callParams: CallParams<'url'>) => string | Promise<string>;
    get_all_collections_opensea: (limit: string, offset: string, callParams: CallParams<'limit' | 'offset'>) => string | Promise<string>;
    get_collection_listing_by_address_opensea: (asset_contract_address: string, order_direction: string, limit: string, callParams: CallParams<'asset_contract_address' | 'order_direction' | 'limit'>) => string | Promise<string>;
}
export function registerIAquaNFTWalletAPI(serviceId: string, service: IAquaNFTWalletAPIDef): void;
export function registerIAquaNFTWalletAPI(peer: FluencePeer, serviceId: string, service: IAquaNFTWalletAPIDef): void;
       

export function registerIAquaNFTWalletAPI(...args: any) {
    registerService(
        args,
        {
    "functions" : [
        {
            "functionName" : "get",
            "argDefs" : [
                {
                    "name" : "url",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "get_all_collections_opensea",
            "argDefs" : [
                {
                    "name" : "limit",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "offset",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "get_collection_listing_by_address_opensea",
            "argDefs" : [
                {
                    "name" : "asset_contract_address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "order_direction",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "limit",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        }
    ]
}
    );
}
      
// Functions
 

export function get(
    url: string,
    config?: {ttl?: number}
): Promise<string>;

export function get(
    peer: FluencePeer,
    url: string,
    config?: {ttl?: number}
): Promise<string>;

export function get(...args: any) {

    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                         (call %init_peer_id% ("getDataSrv" "url") [] url)
                        )
                        (call -relay- ("op" "noop") [])
                       )
                       (xor
                        (seq
                         (call "12D3KooWSD5PToNiLQwKDXsu8JSysCwUt8BVUJEqCHcDe7P5h45e" ("275ba8e1-a7c1-412f-a9bb-7d288343c3ac" "get") [url] results)
                         (call -relay- ("op" "noop") [])
                        )
                        (seq
                         (call -relay- ("op" "noop") [])
                         (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                        )
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [results])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `
    return callFunction(
        args,
        {
    "functionName" : "get",
    "returnType" : {
        "tag" : "primitive"
    },
    "argDefs" : [
        {
            "name" : "url",
            "argType" : {
                "tag" : "primitive"
            }
        }
    ],
    "names" : {
        "relay" : "-relay-",
        "getDataSrv" : "getDataSrv",
        "callbackSrv" : "callbackSrv",
        "responseSrv" : "callbackSrv",
        "responseFnName" : "response",
        "errorHandlingSrv" : "errorHandlingSrv",
        "errorFnName" : "error"
    }
},
        script
    )
}

 

export function get_collection_listing_by_address_opensea(
    asset_contract_address: string,
    order_direction: string,
    limit: string,
    config?: {ttl?: number}
): Promise<string>;

export function get_collection_listing_by_address_opensea(
    peer: FluencePeer,
    asset_contract_address: string,
    order_direction: string,
    limit: string,
    config?: {ttl?: number}
): Promise<string>;

export function get_collection_listing_by_address_opensea(...args: any) {

    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                           (call %init_peer_id% ("getDataSrv" "asset_contract_address") [] asset_contract_address)
                          )
                          (call %init_peer_id% ("getDataSrv" "order_direction") [] order_direction)
                         )
                         (call %init_peer_id% ("getDataSrv" "limit") [] limit)
                        )
                        (call -relay- ("op" "noop") [])
                       )
                       (xor
                        (seq
                         (call "12D3KooWSD5PToNiLQwKDXsu8JSysCwUt8BVUJEqCHcDe7P5h45e" ("275ba8e1-a7c1-412f-a9bb-7d288343c3ac" "get_collection_listing_by_address_opensea") [asset_contract_address order_direction limit] collection_listing)
                         (call -relay- ("op" "noop") [])
                        )
                        (seq
                         (call -relay- ("op" "noop") [])
                         (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                        )
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [collection_listing])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `
    return callFunction(
        args,
        {
    "functionName" : "get_collection_listing_by_address_opensea",
    "returnType" : {
        "tag" : "primitive"
    },
    "argDefs" : [
        {
            "name" : "asset_contract_address",
            "argType" : {
                "tag" : "primitive"
            }
        },
        {
            "name" : "order_direction",
            "argType" : {
                "tag" : "primitive"
            }
        },
        {
            "name" : "limit",
            "argType" : {
                "tag" : "primitive"
            }
        }
    ],
    "names" : {
        "relay" : "-relay-",
        "getDataSrv" : "getDataSrv",
        "callbackSrv" : "callbackSrv",
        "responseSrv" : "callbackSrv",
        "responseFnName" : "response",
        "errorHandlingSrv" : "errorHandlingSrv",
        "errorFnName" : "error"
    }
},
        script
    )
}

 

export function get_all_collections_opensea(
    limit: string,
    offset: string,
    config?: {ttl?: number}
): Promise<string>;

export function get_all_collections_opensea(
    peer: FluencePeer,
    limit: string,
    offset: string,
    config?: {ttl?: number}
): Promise<string>;

export function get_all_collections_opensea(...args: any) {

    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                          (call %init_peer_id% ("getDataSrv" "limit") [] limit)
                         )
                         (call %init_peer_id% ("getDataSrv" "offset") [] offset)
                        )
                        (call -relay- ("op" "noop") [])
                       )
                       (xor
                        (seq
                         (call "12D3KooWSD5PToNiLQwKDXsu8JSysCwUt8BVUJEqCHcDe7P5h45e" ("275ba8e1-a7c1-412f-a9bb-7d288343c3ac" "get_all_collections_opensea") [limit offset] collections)
                         (call -relay- ("op" "noop") [])
                        )
                        (seq
                         (call -relay- ("op" "noop") [])
                         (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                        )
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [collections])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `
    return callFunction(
        args,
        {
    "functionName" : "get_all_collections_opensea",
    "returnType" : {
        "tag" : "primitive"
    },
    "argDefs" : [
        {
            "name" : "limit",
            "argType" : {
                "tag" : "primitive"
            }
        },
        {
            "name" : "offset",
            "argType" : {
                "tag" : "primitive"
            }
        }
    ],
    "names" : {
        "relay" : "-relay-",
        "getDataSrv" : "getDataSrv",
        "callbackSrv" : "callbackSrv",
        "responseSrv" : "callbackSrv",
        "responseFnName" : "response",
        "errorHandlingSrv" : "errorHandlingSrv",
        "errorFnName" : "error"
    }
},
        script
    )
}
