import dayjs from 'dayjs'

export function generateDatesFromYearBeginning(){
    const firstDayOfTheYar = dayjs().startOf('year')
    const today = new Date()

    const dates = []
    let comparateDate = firstDayOfTheYar

    while (comparateDate.isBefore(today)) {
        dates.push(comparateDate.toDate())
        comparateDate = comparateDate.add(1, 'day')
    }
    return dates
}