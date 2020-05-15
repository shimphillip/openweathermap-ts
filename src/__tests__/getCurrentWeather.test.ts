import OpenWeather from '../app'
import * as dotenv from 'dotenv'

dotenv.config()

describe(`testing`, () => {
  const openWeather = new OpenWeather({
    apiKey: process.env.API_KEY,
  })

  // test creating an instance without api key

  it.only(`tests getCurrentWeatherByCityName`, async () => {
    // openWeather.getAllLocations()
    expect(async () => await openWeather.getCurrentWeatherByCityName()).toThrow()
  })

  //   it(`getSettings with arguments should return corresponding value`, () => {
  //     expect(openWeather.getSettings('units')).toBe('imperial')
  //     expect(openWeather.getSettings('language')).toBe('en')
  //   })

  //   it(`getSettings with arguments return the settings object if the key is not found`, () => {
  //     expect(openWeather.getSettings('random')).toBe('random is not found!')
  //   })
})
