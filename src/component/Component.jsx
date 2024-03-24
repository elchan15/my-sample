const MyButton = (props) => {
    return (
      <button onClick={props.func} className={props.className}>
        {props.children}
      </button>
    );
  };
  
  const MyDiv = (props) => {
    return <div className={props.className}>{props.children}</div>;
  };

  
const Recordmap = () => { // for tracing the fetrch error
  var responseClone; // 1
  
  //command
  //npx json-server --watch --port 4000 __data/db.json

  
   fetch("http://localhost:4000/posts")
  .then((res)=> { 
    responseClone = res.clone(); // 2
    return res.json()
  })
  .then(function (data){ 
    let datax = []
    datax = data.map(
      (xy)=>{
        return (`<li key=${xy.id}>${xy.title}</li>`)
      }
    )
    console.log(datax)
      return datax
  }
  , function (rejectionReason) { // 3
    console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
    responseClone.text() // 5
    .then(function (bodyText) {
        console.log('Received the following instead of valid JSON:', bodyText); // 6
    });
}
  ).catch(
    (err)=>console.log("Error here @ RecordMap ::"+err)
  )

}

  
  export default { MyButton, MyDiv };
  