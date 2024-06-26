let p = fetch("http://127.0.0.1:8000/api/v1/companies.json");

p.then((response) => {
    console.log(response.status);
    console.log(response.ok);
    return response.json();
}).then((response1) => {
    // Accessing the first object in the array
    let firstCompany = response1[2];
    
    // Accessing individual properties of the first company object
    let companyName = firstCompany.name;
    let companyLocation = firstCompany.location;
    let companyType = firstCompany.type;
    let companyDate = firstCompany.added_date
    // Outputting the values
    console.log("Company Name:", companyName);
    console.log("Company Location:", companyLocation);
    console.log("Company Type:", companyType);
    console.log("Company Date:", companyDate);
}).catch((error) => {
    console.error("Error fetching data:", error);
});
