const hashInfo = {
    contractAddress: '0x81732cceC32d7f99c1babd4bDC56bc8fe59670e3',
    abi: [{
        'inputs': [],
        'name': 'HashLeft',
        'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'inputs': [],
        'name': 'gamersCount',
        'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'inputs': [{ 'internalType': 'string', 'name': 'nickname', 'type': 'string' }],
        'name': 'getAddress',
        'outputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }],
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'inputs': [{ 'internalType': 'address', 'name': 'user', 'type': 'address' }],
        'name': 'getAddressIndex',
        'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'inputs': [],
        'name': 'getHashForLogin',
        'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'inputs': [{ 'internalType': 'address', 'name': 'user', 'type': 'address' }],
        'name': 'getIsAddressEarlyAdopter',
        'outputs': [{ 'internalType': 'bool', 'name': '', 'type': 'bool' }],
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'inputs': [{ 'internalType': 'address', 'name': 'user', 'type': 'address' }],
        'name': 'getNickname',
        'outputs': [{ 'internalType': 'string', 'name': '', 'type': 'string' }],
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'inputs': [{ 'internalType': 'string', 'name': 'nickname', 'type': 'string' }],
        'name': 'loginToTheHashUp',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    }, {
        'inputs': [{ 'internalType': 'string', 'name': 'nickname', 'type': 'string' }, {
            'internalType': 'address',
            'name': 'reflinkAddress',
            'type': 'address'
        }], 'name': 'loginToTheHashUpWithReflink', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
    }, {
        'inputs': [{ 'internalType': 'string', 'name': 'nickname', 'type': 'string' }],
        'name': 'reserveNickname',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    }]
}


export default hashInfo
