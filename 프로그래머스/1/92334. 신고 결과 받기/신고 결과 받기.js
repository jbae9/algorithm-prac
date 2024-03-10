function solution(idList, report, k) {
    // Create object of reports
    let list = {}

    for (const id of idList) {
        list[id] = {reports: 0, reportedBy: []}
    }

    for (const r of report) {
        const [reportBy, reportTo] = r.split(' ')
        if(!list[reportTo].reportedBy.includes(reportBy)) {
            list[reportTo].reportedBy.push(reportBy)
            list[reportTo].reports = list[reportTo].reports+1
        }
    }

    // Determine if user meets blocked status
    let emails = new Array(idList.length).fill(0)

    for (let i=0; i<idList.length; i++) {
        const user = idList[i]

        if (list[user].reports >= k) {
            for (const reportBy of list[user].reportedBy) {
                emails[idList.indexOf(reportBy)] = emails[idList.indexOf(reportBy)]+1
            }
        }
    }

    return emails
}