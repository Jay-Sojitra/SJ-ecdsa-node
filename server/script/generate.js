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

  */
