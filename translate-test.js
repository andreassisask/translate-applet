const start = async function(){
  let bd = {
    q: ["Hello", "Good bye"],
    source: 'en',
    target: 'et'   
  }
  
  const res = await fetch("https://q0u8aqi3j6.execute-api.us-east-1.amazonaws.com/default/andreasTranslate", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(bd) // body data type must match "Content-Type" header
  });

  const data = await res.json();
  console.log(JSON.stringify(data));
};

start();
