import React,{ Component} from "react";
import "./App.css";

class App extends Component {

  state ={

    heros:[],
    
  };
  





       addHero(index) {
        if(this.state.heros.length == 10){
           alert('stop');
        }else{
          alert('add')
        };
        if (this.state.heros.includes(this.setState.heros)){
          alert({heros} + 'already exist')
        }else{       
      this.setState({heros :[...this.state.heros, ''] }
      )
        }
    }

       handleChange(e, index) {
      this.state.heros[index] = e.target.value

      this.setState({heros: this.state.heros})

    }

    handleRemove(index){
      this.state.heros.splice(index,1)

      console.log(this.state.heros, '6666')

        this.setState({heros: this.state.heros})
    }

  render(){
  return (
    <div className="flex justify-center flex-col bg-gray-800 ">
      <h1 className="text-center pt-3 text-2xl border-2 border-lime-100 h-16 flex justify-center bg-slate-600 ">list your top  Superhero </h1>
      <div className="p-8 flex justify-center flex-col text-center   ">

     <label className="font-bold">who are your top 10 Superheros</label>

     {
       this.state.heros.map((hero, index)=>{
         return(

           <div className="flex justify-between" key={index}>
             <form>
             <input
             placeholder="enter your hero"
             className=" bg-white rounded-lg py-2 px-4 border-2 border-rose-600 ring-2 ring-slate-600"
             onChange={(e) => this.handleChange(e, index)}
              value={hero}
              required
              />

              <button onClick={(e) => this.handleRemove(e)}>Remove</button>
              
              </form>
             </div>
         )
       })
     }
    <button
    className="ring-2 ring-slate-600"
    onClick={(e) =>
    this.addHero(e)
    }>
        add hero
      </button>
     </div>
     
     


    </div>
    
  );
}
}

export default App
