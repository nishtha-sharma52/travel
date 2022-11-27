const chai = window.chai
const expect = chai.expect

describe('packageCost', () => {
  it('Package cost for spectacular taj 10000+1000', () => {
    const result = packageCost(10000,1000);
    expect(result).to.be.equal(11000);
   
  });
});