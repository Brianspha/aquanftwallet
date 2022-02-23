"use strict";
exports.__esModule = true;
exports.get_all_collections_opensea = exports.get_collection_listing_by_address_opensea = exports.get = exports.registerIAquaNFTWalletAPI = void 0;
var v2_1 = require("@fluencelabs/fluence/dist/internal/compilerSupport/v2");
function registerIAquaNFTWalletAPI() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    (0, v2_1.registerService)(args, {
        "functions": [
            {
                "functionName": "get",
                "argDefs": [
                    {
                        "name": "url",
                        "argType": {
                            "tag": "primitive"
                        }
                    }
                ],
                "returnType": {
                    "tag": "primitive"
                }
            },
            {
                "functionName": "get_all_collections_opensea",
                "argDefs": [
                    {
                        "name": "limit",
                        "argType": {
                            "tag": "primitive"
                        }
                    },
                    {
                        "name": "offset",
                        "argType": {
                            "tag": "primitive"
                        }
                    }
                ],
                "returnType": {
                    "tag": "primitive"
                }
            },
            {
                "functionName": "get_collection_listing_by_address_opensea",
                "argDefs": [
                    {
                        "name": "asset_contract_address",
                        "argType": {
                            "tag": "primitive"
                        }
                    },
                    {
                        "name": "order_direction",
                        "argType": {
                            "tag": "primitive"
                        }
                    },
                    {
                        "name": "limit",
                        "argType": {
                            "tag": "primitive"
                        }
                    }
                ],
                "returnType": {
                    "tag": "primitive"
                }
            }
        ]
    });
}
exports.registerIAquaNFTWalletAPI = registerIAquaNFTWalletAPI;
function get() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var script = "\n                    (xor\n                     (seq\n                      (seq\n                       (seq\n                        (seq\n                         (call %init_peer_id% (\"getDataSrv\" \"-relay-\") [] -relay-)\n                         (call %init_peer_id% (\"getDataSrv\" \"url\") [] url)\n                        )\n                        (call -relay- (\"op\" \"noop\") [])\n                       )\n                       (xor\n                        (seq\n                         (call \"12D3KooWSD5PToNiLQwKDXsu8JSysCwUt8BVUJEqCHcDe7P5h45e\" (\"275ba8e1-a7c1-412f-a9bb-7d288343c3ac\" \"get\") [url] results)\n                         (call -relay- (\"op\" \"noop\") [])\n                        )\n                        (seq\n                         (call -relay- (\"op\" \"noop\") [])\n                         (call %init_peer_id% (\"errorHandlingSrv\" \"error\") [%last_error% 1])\n                        )\n                       )\n                      )\n                      (xor\n                       (call %init_peer_id% (\"callbackSrv\" \"response\") [results])\n                       (call %init_peer_id% (\"errorHandlingSrv\" \"error\") [%last_error% 2])\n                      )\n                     )\n                     (call %init_peer_id% (\"errorHandlingSrv\" \"error\") [%last_error% 3])\n                    )\n    ";
    return (0, v2_1.callFunction)(args, {
        "functionName": "get",
        "returnType": {
            "tag": "primitive"
        },
        "argDefs": [
            {
                "name": "url",
                "argType": {
                    "tag": "primitive"
                }
            }
        ],
        "names": {
            "relay": "-relay-",
            "getDataSrv": "getDataSrv",
            "callbackSrv": "callbackSrv",
            "responseSrv": "callbackSrv",
            "responseFnName": "response",
            "errorHandlingSrv": "errorHandlingSrv",
            "errorFnName": "error"
        }
    }, script);
}
exports.get = get;
function get_collection_listing_by_address_opensea() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var script = "\n                    (xor\n                     (seq\n                      (seq\n                       (seq\n                        (seq\n                         (seq\n                          (seq\n                           (call %init_peer_id% (\"getDataSrv\" \"-relay-\") [] -relay-)\n                           (call %init_peer_id% (\"getDataSrv\" \"asset_contract_address\") [] asset_contract_address)\n                          )\n                          (call %init_peer_id% (\"getDataSrv\" \"order_direction\") [] order_direction)\n                         )\n                         (call %init_peer_id% (\"getDataSrv\" \"limit\") [] limit)\n                        )\n                        (call -relay- (\"op\" \"noop\") [])\n                       )\n                       (xor\n                        (seq\n                         (call \"12D3KooWSD5PToNiLQwKDXsu8JSysCwUt8BVUJEqCHcDe7P5h45e\" (\"275ba8e1-a7c1-412f-a9bb-7d288343c3ac\" \"get_collection_listing_by_address_opensea\") [asset_contract_address order_direction limit] collection_listing)\n                         (call -relay- (\"op\" \"noop\") [])\n                        )\n                        (seq\n                         (call -relay- (\"op\" \"noop\") [])\n                         (call %init_peer_id% (\"errorHandlingSrv\" \"error\") [%last_error% 1])\n                        )\n                       )\n                      )\n                      (xor\n                       (call %init_peer_id% (\"callbackSrv\" \"response\") [collection_listing])\n                       (call %init_peer_id% (\"errorHandlingSrv\" \"error\") [%last_error% 2])\n                      )\n                     )\n                     (call %init_peer_id% (\"errorHandlingSrv\" \"error\") [%last_error% 3])\n                    )\n    ";
    return (0, v2_1.callFunction)(args, {
        "functionName": "get_collection_listing_by_address_opensea",
        "returnType": {
            "tag": "primitive"
        },
        "argDefs": [
            {
                "name": "asset_contract_address",
                "argType": {
                    "tag": "primitive"
                }
            },
            {
                "name": "order_direction",
                "argType": {
                    "tag": "primitive"
                }
            },
            {
                "name": "limit",
                "argType": {
                    "tag": "primitive"
                }
            }
        ],
        "names": {
            "relay": "-relay-",
            "getDataSrv": "getDataSrv",
            "callbackSrv": "callbackSrv",
            "responseSrv": "callbackSrv",
            "responseFnName": "response",
            "errorHandlingSrv": "errorHandlingSrv",
            "errorFnName": "error"
        }
    }, script);
}
exports.get_collection_listing_by_address_opensea = get_collection_listing_by_address_opensea;
function get_all_collections_opensea() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var script = "\n                    (xor\n                     (seq\n                      (seq\n                       (seq\n                        (seq\n                         (seq\n                          (call %init_peer_id% (\"getDataSrv\" \"-relay-\") [] -relay-)\n                          (call %init_peer_id% (\"getDataSrv\" \"limit\") [] limit)\n                         )\n                         (call %init_peer_id% (\"getDataSrv\" \"offset\") [] offset)\n                        )\n                        (call -relay- (\"op\" \"noop\") [])\n                       )\n                       (xor\n                        (seq\n                         (call \"12D3KooWSD5PToNiLQwKDXsu8JSysCwUt8BVUJEqCHcDe7P5h45e\" (\"275ba8e1-a7c1-412f-a9bb-7d288343c3ac\" \"get_all_collections_opensea\") [limit offset] collections)\n                         (call -relay- (\"op\" \"noop\") [])\n                        )\n                        (seq\n                         (call -relay- (\"op\" \"noop\") [])\n                         (call %init_peer_id% (\"errorHandlingSrv\" \"error\") [%last_error% 1])\n                        )\n                       )\n                      )\n                      (xor\n                       (call %init_peer_id% (\"callbackSrv\" \"response\") [collections])\n                       (call %init_peer_id% (\"errorHandlingSrv\" \"error\") [%last_error% 2])\n                      )\n                     )\n                     (call %init_peer_id% (\"errorHandlingSrv\" \"error\") [%last_error% 3])\n                    )\n    ";
    return (0, v2_1.callFunction)(args, {
        "functionName": "get_all_collections_opensea",
        "returnType": {
            "tag": "primitive"
        },
        "argDefs": [
            {
                "name": "limit",
                "argType": {
                    "tag": "primitive"
                }
            },
            {
                "name": "offset",
                "argType": {
                    "tag": "primitive"
                }
            }
        ],
        "names": {
            "relay": "-relay-",
            "getDataSrv": "getDataSrv",
            "callbackSrv": "callbackSrv",
            "responseSrv": "callbackSrv",
            "responseFnName": "response",
            "errorHandlingSrv": "errorHandlingSrv",
            "errorFnName": "error"
        }
    }, script);
}
exports.get_all_collections_opensea = get_all_collections_opensea;
