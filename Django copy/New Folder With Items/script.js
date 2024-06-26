document.getElementById('uploadForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('about', document.getElementById('about').value);
    formData.append('start_bid', document.getElementById('start_bid').value);
    formData.append('length', document.getElementById('length').value);
    formData.append('age', document.getElementById('age').value);
    formData.append('weight', document.getElementById('weight').value);
    formData.append('image1', document.getElementById('image').files[0]);
    formData.append('user_id', 2); // Static user_id as per provided example

    try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/items/', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            alert('Item uploaded successfully!');
            document.getElementById('displayButton').style.display = 'block';
            const item = await response.json();
            localStorage.setItem('item', JSON.stringify(item));
        } else {
            alert('Error uploading item.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error uploading item.');
    }
});

document.getElementById('displayButton').addEventListener('click', function() {
    window.location.href = 'display.html';
});
