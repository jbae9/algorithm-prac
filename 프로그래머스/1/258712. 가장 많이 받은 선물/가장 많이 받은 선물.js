function solution(friends, gifts) {
    // Create object of who gave what gift    
    let list = {}

    for (const f of friends) {
        list[f] = 
        {
            given: {total:0},
            received: {total: 0, from: {}},
            giftIdx: function () {return this.given.total - this.received.total}
        }
    }

    for (const g of gifts) {
        const [sender, receiver] = g.split(' ')

        list[sender].given.total = list[sender].given.total+1
        // list[sender].given.to[receiver] = list[sender].given.to[receiver] === undefined ? 1 : list[sender].given.to[receiver]+1

        list[receiver].received.total = list[receiver].received.total+1
        list[receiver].received.from[sender] = list[receiver].received.from[sender] === undefined ? 1 : list[receiver].received.from[sender]+1
    }


    let mostGifts = 0

    for (let i=0; i<friends.length; i++) {
        const friend = friends[i]
        let newGifts = 0

        for (let j=0; j<friends.length; j++) {
            const compare = friends[j]

            const giftsReceived = list[friend].received.from[compare] === undefined ? 0 : list[friend].received.from[compare]
            const giftsSent = list[compare].received.from[friend] === undefined ? 0 : list[compare].received.from[friend]

            if (i!=j) {
                if (giftsSent > giftsReceived) {
                    newGifts++
                } else if (giftsSent === giftsReceived && list[friend].giftIdx() > list[compare].giftIdx()) {
                    newGifts++
                }
            }
        }

        if (newGifts > mostGifts) mostGifts = newGifts
    }

    return mostGifts
}