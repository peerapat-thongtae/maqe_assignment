import dayjs from "dayjs"

export const getCurrentTimeZone = () => {
     return new window.Intl.DateTimeFormat().resolvedOptions().timeZone
}

export const formatFullDateText = (date: string) => {
     return dayjs(date).format('dddd, MMMM d, YYYY, HH:mm')
}