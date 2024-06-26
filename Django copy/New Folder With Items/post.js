// Data to be posted
document.getElementById("postButton").addEventListener("click", function () {
    let postData = {
        company_id: 4,
        name: "New Company",
        location: "New Location",
        about: "Trying to Post",
        type: "IT",
        Active: true,
    };

    // Options for the fetch request
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    };

    // URL for the POST request
    let url = "http://127.0.0.1:8000/api/v1/companies/";

    // Fetching data
    let p = fetch(url, options);

    p.then((response) => {
        console.log(response.status);
        console.log(response.ok);
        return response.json();
    }).then((data) => {
        console.log("Data posted successfully:", data);
    }).catch((error) => {
        console.error("Error posting data:", error);
    });
});