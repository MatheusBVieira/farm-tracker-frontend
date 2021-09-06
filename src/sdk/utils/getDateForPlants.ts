import { differenceInHours, differenceInMinutes } from 'date-fns'

export default function getDateForPlants(endAt: Date) {
    var diferenceHour = differenceInHours(endAt, new Date())
    return (diferenceHour === 0) ? `${differenceInMinutes(endAt, new Date())}m` : `${diferenceHour}h`
}