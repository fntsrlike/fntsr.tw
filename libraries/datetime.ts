import { DateTime } from 'luxon'

const dateFormat = 'yyyy-LL-dd'
const dateTimeFormat = `${dateFormat} HH:mm`

const isoToDate  = (str: string) => {
  return DateTime.fromISO(str).toLocal().toFormat(dateFormat)
}

const isoToDateTime  = (str: string) => {
  return DateTime.fromISO(str).toLocal().toFormat(dateTimeFormat)
}


export {
  isoToDate,
  isoToDateTime,
}
