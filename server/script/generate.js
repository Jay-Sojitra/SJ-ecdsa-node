const secp = require("ethereum-cryptography/secp256k1")
const { toHex } = require("ethereum-cryptography/utils")

function generateKeys() {

  // public and private key object
  keys = {}

  for (let i = 0; i < 3; i++) {
    const privateKey = toHex(secp.utils.randomPrivateKey());
    const publicKey = toHex(secp.getPublicKey(privateKey))
    const address = publicKey.slice(-20)
    keys["key" + i] = [privateKey, publicKey, address]
  }
  return keys
}
console.log(generateKeys())
/* 
{
  key0: [
    '482383c51197bd7579385f75b6de30e4389b41d06369dba90779db8bf0f7b1f5',
    '04f717075fe0414fefacf2dcf14b457ff42029aac5ee75df69c582d18154d4230a2f5331cd28f705df05b53f600de13e64d3cab8e86f7a4405750ed36970a38604',
    '4405750ed36970a38604'
  ],
  key1: [
    '2f941dd0d29cb040ab1e4603977dc7d0de95fe73c9624e7627cb4b5fc53f5be0',
    '047834cb404b5459962986b74cf1fdfa7dcba99817d699070afae735b9cae3df5a298159b5b3ddd6b20cdb73b66de777d8cc172038af76b1775b0a46dab95c10f2',
    'b1775b0a46dab95c10f2'
  ],
  key2: [
    '1fe21dff3b7c9ce03826b7938ea78308d28545a8e27e2ef76a50c2c6ff43730a',
    '0443b876ef398f822645626965a6bb007f97ccb5d3b123156a91cbcb6b9824a97a9bcd8c05ca69dc3eaf348ad5a55d9ab16920cbbe4a3be50bb1a37d441fcbc3c9',
    'e50bb1a37d441fcbc3c9'
  ]
}


=========================================================================================================================================================================================================
key0: [
    '15cb2ec6d113f2780c558317228608cf9ddaf05072f26e83bae1d9fb41c61c6c',
    '0410387389a9b5335a489fb7b6223a9b775ee72809a7a87a12b642cd2ab1a8da19fdaf2593bea335872bc534fb3e0b4fd65d25da5d5f863aa677a63fe530e19124',
    '3aa677a63fe530e19124'
     0x6F44684bC0D57f1b661f193C40Ad3a521fd73f3E
     a4f487923576213024a13b3c6b056d71e02d811f5dcb0cce2ac4d08764c03100
  ],
  key1: [
    'f6d6854fe88943e80de33d587a6895c6277a80e3e10b32e20d61bee6761e1c40',
    '04e856a3e2543c2866dfca7c43d5ddc676d178f0153c652478750b35757b132cae4f0f5d2f422aaac35ff753cf939f8d541468a3d89bb3a3cd6cadf68626f1373a',
    'a3cd6cadf68626f1373a'
  ],
  key2: [
    'bf9c2030b8fefb50e1887216f39e50b2fc79e86b74c7cbef7b4e57b31e197831',
    '04c58537fb88483e7965e72fc62cb1bc1bed58cd32d42921e2f2d1ab75ebc37f1d7da42b7f0ed34eedccfd34f4879105610ead33d26da62ab494e00e38840b38bc',
    '2ab494e00e38840b38bc'
  ]
  */
