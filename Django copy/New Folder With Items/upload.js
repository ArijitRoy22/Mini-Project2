function uploadImage() {
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select an image file.');
        return;
    }

    const formData = new FormData();
    formData.append('image', file);

    fetch('http://127.0.0.1:8000/api/v1/images/', {
        method: 'POST',
        body: formData
    })
    
    .then(response => {
            if (!response.ok) {
                throw new Error('Failed to upload image.');
            }
            alert('Image uploaded successfully!');
            fileInput.value = ''; // Clear file input
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to upload image.');
        });
}



// let data1 = fetch('http://127.0.0.1:8000/api/v1/images.json')
let product = []
// fetch('http://127.0.0.1:8000/api/v1/images.json')
//     .then(response => {
//         // console.log(response.status)
//         return response.json()
//     }).then(data => {
//         // console.log(data)
//         data.forEach(element => {
//             // console.log(data)
//             imgURL = ("api/Companyapi/images/" + element.image.split('/').pop())
//             // console.log(imgURL)
//             product.push({
//                 url: element.url,
//                 image: imgURL,
//             });
//             // console.log(element)
//             // displayImage(imgURL)
//         });
//         // console.log(img)
//     }).catch(error => {
//         console.log("Error", error)
//     });

// console.log(product)
// product.forEach(item => {
//     console.log(item);
//     // Display the item wherever you need
// });

// document.getElementById("imageContainer").innerHTML = product.map((item) => {
//     var {url, image} = item
//     console.log(url)
//     console.log(image)
//     return(
//         `<div class=img>
//         <img src = "${image} alt="${url}">
//         </div>
//         `
//     )
// }).join('')

// function displayImage(relativeImagePath) {
//     const imageContainer = document.getElementById('imageContainer');
//     const img = document.createElement('img');
//     img.src = imgURL; // Assign only the relative path
//     // console.log(img.src);
//     img.alt = 'Uploaded Image';
//     imageContainer.appendChild(img);
// }


fetch('http://127.0.0.1:8000/api/v1/images.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let product = data.map(element => {
            const imgURL = "api/Companyapi/images/" + element.image.split('/').pop();
            return {
                url: element.url,
                image: imgURL,
            };
        });

        const imageContainer = document.getElementById("root");
        if (imageContainer) {
            imageContainer.innerHTML = product.map(item => {
                const {url, image} = item;
                console.log(url);
                console.log(image);
                return `
                    <div class="imgTry">
                        <img class ='img' src="${image}" alt="${url}">
                    </div>
                `;
            }).join('');
        } else {
            console.error("Element with id 'imageContainer' not found.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
