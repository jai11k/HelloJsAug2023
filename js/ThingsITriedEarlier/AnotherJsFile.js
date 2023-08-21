async function getUser() {
    var response = await fetch("https://liahdev-api.azurewebsites.net/api/LIAHStudentAPI/UserInformation?token=18408e99-baa4-40d3-a4f7-1a1cb299c0bf",
        {
            headers: {
                'Accept': 'application/json',
            }
        })
    let responseJson = await response.json()
    console.log(responseJson, "this is my Api response")
}
let something = getUser()
console.log(something, "we are in thiiiissss")