// const a = 10
// const b = 5
//
// const c = a % b
//
// console.log(c)

// let a = 10



// console.log(a++ + ++a + a-- - --a)
//
// 22, 24

const a = 1, b = 2, c= 1

// f(x) = a * x^2 + bx + c
// denta = b^2 - 4av
// denta' = b'^2 - ac
// x1, x2 = - b +- can(denta) / (2a)

/*
*
  a, b, c
    │
    │
    ▼      2
  delta = b  - 4ac
    │
    │
    ▼       yes
  delta < 0───────►no solutions
    │
    │no
    ▼        yes
  delta = 0 ──────► x = -b/(2a)
    │
    │no
    ▼   -b + delta**(1/2)
  x1 =  ─────────────────
              2a
        -b - delta**(1/2)
  x1 =  ─────────────────
              2a

* */

const delta = b ** 2 - 4 * a * c

if (delta < 0) {
  console.log('no solution')
} else if (delta === 0) {
  const x = -b/(2*a)

  console.log(x)
} else {
  const x1 = (-b + delta**(1/2))/(2*a)
  const x2 = (-b - delta**(1/2))/(2*a)
  console.log(x1, x2)
}

