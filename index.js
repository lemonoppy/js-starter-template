import axios from 'axios'

class Main {
  static async Run() {
    const App = new Main()
    const ISFLPlayers = await App.GetISFLPlayers()
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

    return response
  }
}

Main.Run()
