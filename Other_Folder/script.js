document.getElementById('teamForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;

    if (name && designation) {
        const teamList = document.getElementById('teamList');
        const listItem = document.createElement('li');
        listItem.textContent = `${name} - ${designation}`;
        teamList.appendChild(listItem);

        document.getElementById('name').value = '';
        document.getElementById('designation').value = '';
    }
});
