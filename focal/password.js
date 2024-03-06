// const obfuscate = (password) => {
//   let obfuscated = ''
//   for (let i = 0; i < password.length; i++) {
//     switch (password[i]) {
//       case 'a':
//         obfuscated += '4'
//         break
//       case 'e':
//         obfuscated += '3'
//         break
//       case 'o':
//         obfuscated += '0'
//         break
//       case 'l':
//         obfuscated += '1'
//         break
//       default:
//         obfuscated += password[i]
//     }
//   }
//   return obfuscated
// }

const obfuscate = (password) => {
  const replacers = {
    a: '4',
    e: '3',
    o: '0',
    l: '1',
  }

  let obfuscated = ''
  for (let i = 0; i < password.length; i++) {
    obfuscated += replacers[password[i]] || password[i]
  }
  return obfuscated
}

const password = process.argv[2]

if (!password) {
  console.log('Please provide a password')
  process.exit()
}

console.log(obfuscate(password))
