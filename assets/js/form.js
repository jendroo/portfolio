// if email = dci-student.org {
// isStudent = true
// }
function validation() {

const email = document.registration.email.value
const firstName = document.registration.first_name.value
const lastName = document.registration.last_name.value
const gender = document.registration.gender.value
const country = document.registration.country.value

if (email.endsWith('@dci-student.org') == false) {
    alert('email should end with @dci-student.org')
    return false
}

if (firstName.length < 5){
    alert('your name should be longer than 5 characters')
    return false
}

if (lastName.length < 1){
    alert('last name should be provided')
    return false
}

if (country == 'usa' && gender != 'female') {
    alert('We only register females in USA')
    return false
}

}


