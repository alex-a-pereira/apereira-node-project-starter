const { myUtil } = require('@utils/utils')

describe('myUtil', () => {
  it('should return 1', () => {
    const result = myUtil()
    expect(result).toEqual(1)
  })
})
