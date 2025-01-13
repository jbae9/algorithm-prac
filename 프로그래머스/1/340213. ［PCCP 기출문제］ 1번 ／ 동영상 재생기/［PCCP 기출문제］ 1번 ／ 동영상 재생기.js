function solution(video_len, pos, op_start, op_end, commands) {
    video_len = new Date('2000-01-01 1:' + video_len) 
    pos = new Date('2000-01-01 1:' + pos)
    op_start = new Date('2000-01-01 1:' + op_start)
    op_end = new Date('2000-01-01 1:' + op_end)

    if (pos >= op_start && pos <= op_end) {
        pos = op_end
    }

    for (const c of commands) {
        if (c === 'next') {
            pos = new Date(Date.parse(pos)+10000) >= video_len ? video_len : new Date(Date.parse(pos)+10000)
        } else if (c === 'prev'){
            pos = new Date(Date.parse(pos)-10000) <= new Date('2000-01-01 1:00:00') ? new Date('2000-01-01 1:00:00') : new Date(Date.parse(pos)-10000)
        }

        if (pos >= op_start && pos <= op_end) {
            pos = op_end
        }
    }

    const min = pos.getMinutes() < 10 ? '0' + pos.getMinutes().toString() : pos.getMinutes().toString()
    const sec =  pos.getSeconds() < 10 ? '0' + pos.getSeconds().toString() : pos.getSeconds().toString()
    return min + ':' + sec
}