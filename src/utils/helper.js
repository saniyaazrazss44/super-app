export const getDateInDDMMYY = () => {
    const date = new Date()
    let yyyy = date.getFullYear()
    let mm = date.getMonth() + 1
    let dd = date.getDate()

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    const formattedDate = dd + '-' + mm + '-' + yyyy;
    return formattedDate;
}

export const getTimeInAmPm = () => {
    const time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()

    let ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0' + minutes : minutes

    const formattedTime = hours + ':' + minutes + '' + ampm
    return formattedTime
}