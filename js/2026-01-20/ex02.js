const users = [
  { id: 1, account: "admin", password: "123456", role: "admin", isActive: true },
  { id: 2, account: "user01", password: "abc123", role: "user", isActive: true },
  { id: 3, account: "user02", password: "111111", role: "user", isActive: false },
  { id: 4, account: "teacher", password: "teach2025", role: "teacher", isActive: true }
]


/*
* account / pass
*
* if it's correct and active -> log "login ok"
* if account is correct and active is false ->  this user have been deleted
* if incorrect -> "account | pass is correct"
* */

const account = 'user02' // find ok
const pass = 1234567

const filteredByAccount = users.find(user => user.account === account)

if (!filteredByAccount.isActive) {
  console.log('this user have been deleted')
}