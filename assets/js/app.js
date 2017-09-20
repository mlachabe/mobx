import mobx, {observable, action, computed} from 'mobx'

mobx.useStrict(true)

class Tchat {
    @observable messages = []
    @observable notification = 0

    @action addMessage (message) {
      this.messages.push(message)
      this.notification++
    }
    @computed get fistMessage () {
      return this.messages.length > 0 ? this.messages[0] : null
    }
}

let tchat = new Tchat()

tchat.messages.observe(() => console.log(tchat.fistMessage))

tchat.addMessage('Mon nouveau message')
tchat.addMessage('Mon nouveau message2')
tchat.notification = 2
console.log(tchat.notification)
console.log(tchat.fistMessage)
