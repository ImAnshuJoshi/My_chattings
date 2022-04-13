const firebaseConfig = {
    apiKey: "AIzaSyAKhQMjT1MvssZGqcSHKZu4EtI79k9EFfQ",
    authDomain: "chatapp-final-8eae9.firebaseapp.com",
    databaseURL: "https://chatapp-final-8eae9-default-rtdb.firebaseio.com",
    projectId: "chatapp-final-8eae9",
    storageBucket: "chatapp-final-8eae9.appspot.com",
    messagingSenderId: "133062164796",
    appId: "1:133062164796:web:081ca8edee814e3fd41e39",
    measurementId: "G-K8MLPRRR9D"
  };
  firebase.initializeApp(firebaseConfig);
  const db=firebase.database();
  const username=prompt('Enter your username');
//   console.log(username);
  function sendMessage()
  {
    
    // e.preventDefault();
    // const sentmessage=document.getElementById('messageInput').value;
    const messageinput = document.getElementById("messageInput");
    const message2 = messageinput.value;
    // console.log("S");
    db.ref('User_messages').set({
        "message":message2,
        "username":username
    })
    .then(()=>{
        alert('Message sent to the database');
    })
}
  document.getElementById('messageBtn').addEventListener('click',()=>sendMessage);
