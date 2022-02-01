export const slug = str => {
    return str.toLowerCase()
             .replace(/[^\w ]+/g, '')
             .replace(/ +/g, '-');
}