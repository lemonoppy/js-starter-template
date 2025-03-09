import axios from 'axios'
import { logger } from './lib/logger.js'

class Main {
  static async Run() {
    const App = new Main()

    logger.info('Starting Starter-Template 🚀')

    // Use await/async when using a function that requires a Promise
    const ISFLPlayers = await App.GetISFLPlayers()

    // Outputting to console using logger
    logger.info(ISFLPlayers[0])
  }

  async GetISFLPlayers() {
    const response = await axios.request({
      method: 'GET',
      url: 'https://test-portal.sim-football.com/api/isfl/v1/player?&notStatus=pending&notStatus=denied',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
      },
    })

    return response.data
  }
}

Main.Run()
