
    let members = [];

    function addMember() {
        const name = document.querySelector('#name').value;
        const designation = document.querySelector('#designation').value;

        if (name && designation) {
            // Add member to the array
            members.push({ name: name, designation: designation });

            // Clear input fields
            document.querySelector('#name').value = '';
            document.querySelector('#designation').value = '';

            // Update the team list display
            displayMembers();
        }
    }

    function displayMembers() {
        const teamList = document.getElementById('teamList');
        teamList.innerHTML = '<h2>Team Members:</h2>'; // Reset list

        members.forEach((member, index) => {
            teamList.innerHTML += `<div class="member"><strong>${index + 1}. ${member.name}</strong> - ${member.designation}</div>`;
        });
    }
