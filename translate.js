export const handler = async function (event, context) {
  const googleApiKey = '*SqE';

  //console.log(event.body);

  const res = await fetch("https://translation.googleapis.com/language/translate/v2?key=" + googleApiKey, {
    method: 'POST',
    body: event.body
  });

  if (res.ok) {
    const data = await res.json();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  } else {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({})
    };
  }  
};

