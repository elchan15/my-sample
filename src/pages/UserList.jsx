
//const MyUserList = React.lazy(() => import('../component/UserList'));

const Recordmap = () => {
  //command to run the json server
  //npx json-server --watch --port 4000 __data/db.json

   fetch("http://localhost:4000/posts")
   .then(res=>{ return res.json() })
   .then((data) => {
      let output = "";
      data.map((single) => {
        output += `<li>${single.title}</li>`;
      });
      document.querySelector("#output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}



export default function UserList() {
  Recordmap()
  return (
    <div>
      <h1>UserList</h1>
      <ol id="output" />
    </div>
  );
}
