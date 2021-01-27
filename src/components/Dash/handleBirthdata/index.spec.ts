import handleBirthdata from './index'

describe('handleBirthdata', () => {
  const fakePersons = [
    {
      name: 'Test',
      email: 'teste@teste.com',
      birthdata: '1992-08-17',
      city: 'city',
      uf: 'uf',
    },
    {
      name: 'Test2',
      email: 'teste@teste.com',
      birthdata: '1991-01-17',
      city: 'city',
      uf: 'uf',
    },
  ]
  it('should return ages ', () => {
    const ages = handleBirthdata(fakePersons)
    expect(ages).toEqual([28, 30])
  })
})
