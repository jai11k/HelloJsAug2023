function getUserFromQA() 
{
    fetch("https://liahdev-api.azurewebsites.net/api/LIAHStudentAPI/UserInformation?token=18408e99-baa4-40d3-a4f7-1a1cb299c0bf",
    {
      headers:{
        'Accept': 'application/json',
      }
    })
    .then((response) => console.log(response.json))
    .catch((err) => console.log(err));
  }

  function getUserFromLOCAL() 
{
    fetch("https://localhost:7286/api/LIAHStudentAPI/UserInformation?token=18408e99-baa4-40d3-a4f7-1a1cb299c0bf",
    {
      headers:{
        'Accept': 'application/json',
      }
    })
    .then((response) => console.log(response.json))
    .catch((err) => console.log(err));
  }
console.log("runniiingggg........#^$^$#&>&$>#&")
  getUserFromQA();

  

 