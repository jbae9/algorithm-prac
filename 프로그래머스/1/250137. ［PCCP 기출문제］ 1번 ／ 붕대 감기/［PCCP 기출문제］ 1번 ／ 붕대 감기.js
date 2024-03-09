function solution(bandage, health, attacks) {
    const totalHp = health
    let prevAtkTime = 1
    const [hpBonusTime, hpPerSec, hpBonus] = bandage
    
    for (const a of attacks) {
        const [atkTime, atkDmg] = a
        let consec = 1
        
        for (let i=prevAtkTime; i<atkTime; i++) {
            if (consec === hpBonusTime) {
                health = health + hpPerSec + hpBonus >= totalHp ? totalHp : health + hpPerSec + hpBonus
                consec = 1
            } else {
                health = health + hpPerSec >= totalHp ? totalHp : health + hpPerSec
                consec++
            }
        }

        health = health - atkDmg
        prevAtkTime = atkTime + 1

        if (health <= 0) return -1
    }
    
    return health
}