document.getElementById('fetch-users').addEventListener('click',fetchUser)

function fetchUser() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://jsonplaceholder.typicode.com/users",true)

    xhr.onload = function() {
        if(this.status == 200) {
            const users = JSON.parse(this.responseText);

            const userList = document.getElementById("user-list")

            userList.innerHTML = ""

            users.forEach(user => {
                const li = document.createElement('li')
                li.textContent = `${user.name} ${user.email}`
                userList.appendChild(li)
            })
        }
    }

    xhr.onerror = function() {
        console.log("Response data...")
    }

    xhr.send()
}