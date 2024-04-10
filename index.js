document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = document.getElementById('gender').value;
    var foods = [];
    var chechbox = document.querySelectorAll('input[type="checkbox"]:checked');
    chechbox.forEach(function(checkbox) {
        foods.push(checkbox.value);
    });
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;

    var newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${foods.join(', ')}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    document.getElementById('tbody').appendChild(newRow);

    document.getElementById('myForm').reset();
});
