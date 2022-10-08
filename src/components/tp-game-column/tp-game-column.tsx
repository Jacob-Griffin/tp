import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'tp-game-column',
  styleUrl: 'tp-game-column.css',
  shadow: true,
})
export class TpGameColumn {

  submitButton;
  canvas;
  @Prop() gameData: {round,to,from,content,contentType};

  componentDidRender(){
    this.submitButton.addEventListener('click',this.submitCard);
  }

  submitCard = () =>{
    if(this.gameData.contentType == "text"){
      this.canvas.exportDrawing()
      .then((image)=>{
        image;
        document.dispatchEvent(new CustomEvent('submitted',{detail:{image}}));
      });
    }
    else if(this.gameData.contentType == "image"){
      const text = this.canvas.textArea.value;
      document.dispatchEvent(new CustomEvent('submitted',{detail:{text}}));
    }
  }

  render() {
    return (
      <section class="flex justify-center flex-row w-full lg:h-full">
        <section class="flex flex-col items-center w-full max-w-screen-md lg:max-w-none lg:w-50 lg:flex-wrap bg-gray-300 backdrop-blur-xl p-6 lg:p-4 lg:pr-2 box-border">
          <div class="lg:h-full lg:w-2/5 lg:p-2 w-full flex flex-col items-center gap-4 justify-center box-border mb-4">
            <p>Round {this.gameData.round}</p>
            <p><strong>From:</strong> {this.gameData.from}</p>
            
              {(this.gameData.contentType == "text")
                  ?
                  <article class="w-full max-w-screen-sm aspect-[5/3] bg-white border border-slate-500 rounded-lg p-2 text-center text-lg">
                    <p>{this.gameData.content}</p>
                  </article>
                  :
                  <img class="w-full max-w-screen-sm aspect-[5/3] border-slate-500 rounded-lg" src={this.gameData.content}></img>
              }
            <p><strong>Sending to:</strong> {this.gameData.to}</p>
          </div>
          <div class="lg:h-full lg:w-3/5 lg:p-2 w-full flex flex-col items-center justify-center box-border">
            <tp-canvas class="w-full" ref={(el)=>{this.canvas = el}}></tp-canvas>
            <tp-canvas-controls class="w-full"></tp-canvas-controls>
            <button class="rounded-md w-32 h-16 text-white text-xl font-semibold border-none shadow-md shadow-gray-400 bg-blue-500" ref={el=>{this.submitButton=el}}>Submit</button>
          </div>
        </section>
      </section>
    );
  }

}
