/* eslint-disable quotes */
/* eslint-disable no-undef */

const { expect } = require('chai');

describe('SimpleStorage', function () {
  it("Should return the new greeting once it's changed", async function () {
    const SimpleStorage = await ethers.getContractFactory('SimpleStorage');
    const simpleStorage = await SimpleStorage.deploy('Hello, world!');

    await simpleStorage.deployed();
    expect(await simpleStorage.greet()).to.equal('Hello, world!');
  });
});
