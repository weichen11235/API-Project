class Http{
  getOne(){
    return new Promise((resolve, reject)=>{
      fetch("http://api.icndb.com/jokes/random")
      .then(res => res.json())
      .then(data => resolve(data.value))
      .catch(err => reject(err))
    })
  }
  getMultiple(num){
    return new Promise((resolve, reject)=>{
      fetch(`http://api.icndb.com/jokes/random/${num}`)
      .then(res => res.json())
      .then(data => resolve(data.value))
      .catch(err => reject(err))
    })
  }
}