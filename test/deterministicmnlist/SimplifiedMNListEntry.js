/* eslint-disable */
// TODO: Remove previous line and work through linting issues at next edit

var SimplifiedMNListEntry = require('../../lib/deterministicmnlist/SimplifiedMNListEntry');
var expect = require('chai').expect;
var Networks = require('../../lib/networks');

var smlEntryJSON = {
  proRegTxHash:
    '32e5ad5cf9a06eb13e0f65cb7ecde1a93ef24995d07355fac2ff05ebd5b9ddbf',
  confirmedHash:
    '0000001960431ec5a566e69f28ae0f6fa3199bd99ec527cccd02f7541d77300c',
  service: '95.183.51.146:39999',
  pubKeyOperator:
    '1326ddac1044e0219dba7dccf6b43d1deed3e897717ca06757243b02516cfa67e24026f7a317cf575b40c10e7f6bf7f0',
  votingAddress: 'yYhmQPak2w5L8KSwVw9R5wpqzPbAJ1fK7v',
  isValid: true,
};
var smlEntryHex =
  'bfddb9d5eb05ffc2fa5573d09549f23ea9e1cd7ecb650f3eb16ea0f95cade5320c30771d54f702cdcc27c59ed99b19a36f0fae289fe666a5c51e43601900000000000000000000000000ffff5fb733929c3f1326ddac1044e0219dba7dccf6b43d1deed3e897717ca06757243b02516cfa67e24026f7a317cf575b40c10e7f6bf7f087da2642cf967c493f126137d4f15e9de36b9768010000';
var smlEntryHash =
  '1dc2e51740104f6aa09c63d21310830b37b24aa1e61456a7d1b8bc39054128a7';

var smlEntryWithoutAddress = {
  proRegTxHash:
    '1659e06c825212c9b11325760a18f6ea06194ec4efd603f03d8704f23d818a6f',
  confirmedHash:
    '000000000ca93e850827b361743c25c8508e6e42efaaa331cc1b54326d9fd179',
  service: '[0:0:0:0:0:0:0:0]:0',
  pubKeyOperator:
    '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  votingAddress: 'yUTy9Fb2ULXdgyqYtMMbuUWpFLaDgUqT3f',
  isValid: false,
};
var smlEntryWithoutAddressHex =
  '6f8a813df204873df003d6efc44e1906eaf6180a762513b1c91252826ce0591679d19f6d32541bcc31a3aaef426e8e50c8253c7461b32708853ea90c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000595d9f40d00a7ea5cca2502a1c5bc47706688c42000000';
var smlEntryWithoutAddressHash =
  'f90f280d29d33792e9b44ad943740f1b24bbd173f6775d648f423e2e12a09707';

var smlEntryWithPayoutAddressJSON = {
  proRegTxHash: 'd10622d315a085042117662fe906b443475d9e7d0e624b6518a32000e9ed6460',
  confirmedHash: '5cf9e6c0d6ac464d0cb8d55ef4004957c9889b60d7a1790531aca3b4bc4ec1b3',
  service: '192.168.65.2:20001',
  pubKeyOperator: '858486cb2bcaf78b29d9dfefba8c3ca74a3229e8468db5f4a80c464d92eccffa1cbe721739995a425355429e5e5eb1cb',
  votingAddress: 'yXPzG7QXfcK8gHRA9rcwxCPhNsompJnZQy',
  isValid: true,
  payoutAddress: 'yVs22KfwXqZ36k3u3FhTc54dSaFQDJQcT5',
};

var smlEntryWithPayoutAddressHex =
'6064ede90020a318654b620e7d9e5d4743b406e92f6617210485a015d32206d1b3c14ebcb4a3ac310579a1d7609b88c9574900f45ed5b80c4d46acd6c0e6f95c00000000000000000000ffffc0a841024e21858486cb2bcaf78b29d9dfefba8c3ca74a3229e8468db5f4a80c464d92eccffa1cbe721739995a425355429e5e5eb1cb798544e135d81afca74c0fb59deffadeeca8d82d011976a91468b1b83304ca997e387015a430359d59658b5b7c88ac00';
var smlEntryWithPayoutAddressHash =
'72cafede95c07ade60c1c0809d41eca4504510b0ab15b7d379f6405fd2d07a87';

var smlEntryWithOperatorPayoutAddressJSON = {
  proRegTxHash: 'd10622d315a085042117662fe906b443475d9e7d0e624b6518a32000e9ed6460',
  confirmedHash: '5cf9e6c0d6ac464d0cb8d55ef4004957c9889b60d7a1790531aca3b4bc4ec1b3',
  service: '192.168.65.2:20001',
  pubKeyOperator: '858486cb2bcaf78b29d9dfefba8c3ca74a3229e8468db5f4a80c464d92eccffa1cbe721739995a425355429e5e5eb1cb',
  votingAddress: 'yXPzG7QXfcK8gHRA9rcwxCPhNsompJnZQy',
  isValid: true,
  payoutAddress: 'yVs22KfwXqZ36k3u3FhTc54dSaFQDJQcT5',
  operatorPayoutAddress: 'yU5YwavuvGX7GYTnxiKyBd9YcvS2ngSfvK',
};

var smlEntryWithOperatorPayoutAddressHex =
'6064ede90020a318654b620e7d9e5d4743b406e92f6617210485a015d32206d1b3c14ebcb4a3ac310579a1d7609b88c9574900f45ed5b80c4d46acd6c0e6f95c00000000000000000000ffffc0a841024e21858486cb2bcaf78b29d9dfefba8c3ca74a3229e8468db5f4a80c464d92eccffa1cbe721739995a425355429e5e5eb1cb798544e135d81afca74c0fb59deffadeeca8d82d011976a91468b1b83304ca997e387015a430359d59658b5b7c88ac1976a914552044d19ebbacf5f33851b920bfc8f82b3cb5fd88ac';
var smlEntryWithOperatorPayoutAddressHash =
'f364cb67d862bfed15109a4f3202bba56ee3c9d7b3be86a7ea156c96c06c704e';

describe('SimplifiedMNListEntry', function () {
  describe('constructor', function () {
    it('Should create an entry object from JSON object', function () {
      var entry = new SimplifiedMNListEntry(smlEntryJSON);
      expect(entry.toObject()).to.be.deep.equal(smlEntryJSON);
    });
    it('Should create an entry object from a buffer', function () {
      var entry = new SimplifiedMNListEntry(
        Buffer.from(smlEntryHex, 'hex'),
        Networks.testnet
      );
      expect(entry.toObject()).to.be.deep.equal(smlEntryJSON);
    });
    it('Should create an entry object from a hex string', function () {
      var entry = new SimplifiedMNListEntry(smlEntryHex, Networks.testnet);
      expect(entry.toObject()).to.be.deep.equal(smlEntryJSON);
    });
    it('Should copy an instance if SimplifiedMNListEntry is passed', function () {
      var entry1 = new SimplifiedMNListEntry(smlEntryJSON);
      var entry2 = new SimplifiedMNListEntry(entry1);
      entry1.votingAddress = 'something';
      expect(entry2.toObject()).to.be.deep.equal(smlEntryJSON);
      expect(entry1.votingAddress).to.be.equal('something');
      expect(entry2.votingAddress).to.be.equal(
        'yYhmQPak2w5L8KSwVw9R5wpqzPbAJ1fK7v'
      );
    });
  });
  describe('fromBuffer', function () {
    it('Should be able to parse data from a buffer when ip address is present', function () {
      var entry = SimplifiedMNListEntry.fromBuffer(
        Buffer.from(smlEntryHex, 'hex'),
        Networks.testnet
      );
      var entryJSON = entry.toObject();
      expect(entryJSON).to.be.deep.equal(smlEntryJSON);
    });
    it('Should be able to parse data from a buffer when ip address is not present', function () {
      var entry = SimplifiedMNListEntry.fromBuffer(
        Buffer.from(smlEntryHex, 'hex'),
        Networks.testnet
      );
      var entryJSON = entry.toObject();
      expect(entryJSON).to.be.deep.equal(smlEntryJSON);
    });

    it('Should sbe able to parse data from a buffer when payout address is present', () => {
      var entry = SimplifiedMNListEntry.fromBuffer(
        Buffer.from(smlEntryWithPayoutAddressHex, 'hex'),
        Networks.testnet
      );
      var entryJSON = entry.toObject();
      expect(entryJSON).to.be.deep.equal(smlEntryWithPayoutAddressJSON);
    });

    it('Should sbe able to parse data from a buffer when operator payout address is present', () => {
      var entry = SimplifiedMNListEntry.fromBuffer(
        Buffer.from(smlEntryWithOperatorPayoutAddressHex, 'hex'),
        Networks.testnet
      );
      var entryJSON = entry.toObject();
      expect(entryJSON).to.be.deep.equal(smlEntryWithOperatorPayoutAddressJSON);
    });
  });
  describe('toBuffer', function () {
    it('Should serialize data to same buffer', function () {
      var entry = new SimplifiedMNListEntry(smlEntryJSON);
      var entryBuffer = entry.toBuffer();
      var entryJSON = entry.toObject();
      expect(entryJSON).to.be.deep.equal(smlEntryJSON);
      expect(entryBuffer.toString('hex')).to.be.equal(smlEntryHex);
    });
    it('Should serialize data to same buffer if ip address is not present', function () {
      var entry = new SimplifiedMNListEntry(smlEntryWithoutAddress);
      var entryBuffer = entry.toBuffer();
      var entryJSON = entry.toObject();
      var entryString = entryBuffer.toString('hex');
      expect(entryJSON).to.be.deep.equal(smlEntryWithoutAddress);
      expect(entryString).to.be.equal(smlEntryWithoutAddressHex);
    });
    it('Buffer size should be the same until payoutAddress or operatorPayoutAddress are undefined', function () {
      var entryWithDifferentKeys = new SimplifiedMNListEntry(
        smlEntryJSON
      ).toBuffer();
      var entryWithSameKeys = new SimplifiedMNListEntry(
        smlEntryJSON
      ).toBuffer();
      var entryWithNoAddress = new SimplifiedMNListEntry(
        smlEntryWithoutAddress
      ).toBuffer();
      var entryWithPayoutAddress = new SimplifiedMNListEntry(
        smlEntryWithPayoutAddressJSON
      ).toBuffer();
      var entryWithOperatorPayoutAddress = new SimplifiedMNListEntry(
        smlEntryWithOperatorPayoutAddressJSON
      ).toBuffer();

      expect(entryWithSameKeys.length).to.be.equal(
        entryWithDifferentKeys.length
      );
      expect(entryWithNoAddress.length).to.be.equal(
        entryWithDifferentKeys.length
      );
      expect(entryWithSameKeys.length).to.be.lessThan(
        entryWithPayoutAddress.length
      );
      expect(entryWithSameKeys.length).to.be.lessThan(
        entryWithOperatorPayoutAddress.length
      );
    });

    it('Should serialize data to same buffer if payout address is present', () => {
      var entry = new SimplifiedMNListEntry(smlEntryWithPayoutAddressJSON);
      var entryBuffer = entry.toBuffer();
      var entryJSON = entry.toObject();
      var entryString = entryBuffer.toString('hex');
      expect(entryJSON).to.be.deep.equal(smlEntryWithPayoutAddressJSON);
      expect(entryString).to.be.equal(smlEntryWithPayoutAddressHex);
    });

    it('Should serialize data to same buffer if address is present', () => {
      var entry = new SimplifiedMNListEntry(smlEntryWithOperatorPayoutAddressJSON);
      var entryBuffer = entry.toBuffer();
      var entryJSON = entry.toObject();
      var entryString = entryBuffer.toString('hex');
      expect(entryJSON).to.be.deep.equal(smlEntryWithOperatorPayoutAddressJSON);
      expect(entryString).to.be.equal(smlEntryWithOperatorPayoutAddressHex);
    });
  });
  describe('fromObject', function () {
    it('Should create an instance from a JSONObject', function () {
      var entry = SimplifiedMNListEntry.fromObject(smlEntryJSON);

      expect(entry.toObject()).to.be.deep.equal(smlEntryJSON);
      expect(entry.toBuffer().toString('hex')).to.be.equal(smlEntryHex);
    });
  });
  describe('toObject', function () {
    it('Should serialize SMLEntry to JSON object', function () {
      var entry = new SimplifiedMNListEntry(smlEntryHex, Networks.testnet);

      expect(entry.toObject()).to.be.deep.equal(smlEntryJSON);
    });
  });
  describe('fromHexString', function () {
    it('Should be able to create an entry from a hex string', function () {
      var entry = SimplifiedMNListEntry.fromHexString(
        smlEntryHex,
        Networks.testnet
      );

      expect(entry.toObject()).to.be.deep.equal(smlEntryJSON);
    });
  });
  describe('calculateHash', function () {
    it('Should get correct hash for an entry with ip address', function () {
      var entry = new SimplifiedMNListEntry(smlEntryJSON);
      var serialized = entry.toBuffer().toString('hex');
      expect(serialized.length).to.be.equal(smlEntryHex.length);
      expect(entry.toBuffer().toString('hex')).to.be.equal(smlEntryHex);
      expect(entry.calculateHash().toString('hex')).to.be.equal(smlEntryHash);
    });
    it('Should get correct hash for an entry without ip address', function () {
      var entry = new SimplifiedMNListEntry(smlEntryWithoutAddress);
      var serialized = entry.toBuffer().toString('hex');
      expect(serialized.length).to.be.equal(smlEntryWithoutAddressHex.length);
      expect(entry.toBuffer().toString('hex')).to.be.equal(
        smlEntryWithoutAddressHex
      );
      expect(entry.calculateHash().toString('hex')).to.be.equal(
        smlEntryWithoutAddressHash
      );
    });
    it('Should get correct hash for an entry with payout address', () => {
      var entry = new SimplifiedMNListEntry(smlEntryWithPayoutAddressJSON);
      var serialized = entry.toBuffer().toString('hex');
      expect(serialized.length).to.be.equal(smlEntryWithPayoutAddressHex.length);
      expect(entry.toBuffer().toString('hex')).to.be.equal(
        smlEntryWithPayoutAddressHex
      );
      expect(entry.calculateHash().toString('hex')).to.be.equal(
        smlEntryWithPayoutAddressHash
      );
    });
    it('Should get correct hash for an entry with operator payout address', () => {
      var entry = new SimplifiedMNListEntry(smlEntryWithOperatorPayoutAddressJSON);
      var serialized = entry.toBuffer().toString('hex');
      expect(serialized.length).to.be.equal(smlEntryWithOperatorPayoutAddressHex.length);
      expect(entry.toBuffer().toString('hex')).to.be.equal(
        smlEntryWithOperatorPayoutAddressHex
      );
      expect(entry.calculateHash().toString('hex')).to.be.equal(
        smlEntryWithOperatorPayoutAddressHash
      );
    });
  });
  describe('getIp', function () {
    it('Should get the ip address', function () {
      var entry = new SimplifiedMNListEntry(smlEntryJSON);
      var ip = entry.getIp();
      expect(ip).to.be.equal('95.183.51.146');
    });
  });
});
