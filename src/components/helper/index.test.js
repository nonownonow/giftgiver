import {max_number} from './index.js'

describe('get_max_id', ()=>{
  it('with empty arr', ()=>{
    expect(max_number([])).toBe(0)
  })
  it('with arr that is not empty', ()=>{
    expect(max_number([1,2,3])).toBe(3)
  })
})
