import * as md5 from 'md5'

export const magicFunction = (rawMaterial, options = { salt: 'THIS_IS_SALT', rounds: 10 }) => {
    const salt = options.salt
    // Will update rounds be set
    const rounds = options.rounds >= 1 ? Math.trunc(options.rounds) : 10
    let hashed = md5(rawMaterial + salt)
    for (let i = 0; i <= rounds; i++) {
      hashed = md5(hashed)
    }
    return hashed
}

export const validation = (rawString, defaultString) => {
    return rawString.replace(/[\s]+/gi, '').toLowerCase() || defaultString
}