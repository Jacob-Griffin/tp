import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  game;

  @State() roundData:{round,to,from,content,contentType} = {
    round:2,
    from:"haha",
    to:"hehe",
    content:"Here's a prompt",
    contentType:"text",
  };

  componentDidRender(){
    document.addEventListener('submitted',this.changeRounds);
  }

  changeRounds = (event) => {
    this.sendRoundData();
    this.setWaitScreen();
    this.getRoundData().then((newData:{round,to,from,content,contentType}) =>{
      this.roundData = newData;
    });
  }

  async sendRoundData(){
    return new Promise(callback=>{
      callback(true);
    })
  }

  async getRoundData(){
    return new Promise((callback)=>{
      let dummy = {
        round:3,
        from:"haha",
        to:"hehe",
        content:"/assets/icon/download.png",
        contentType:"img",
      };
      callback(dummy);
    })
  }

  setWaitScreen(){
    return;
  }

  render() {
    return (
      <div class="app-home">
        <tp-game-column class="h-full" gameData={this.roundData} ref={(el)=>{this.game = el}}></tp-game-column>
      </div>
    );
  }
}
