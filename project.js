function moneyReturner(cash, price) {
    let moneyReturn = cash - price;
    let restMoney = 0;

    if (moneyReturn < 100 && moneyReturn > 90) {
        restMoney = moneyReturn - 90;
        if (restMoney > 5) {
            if (restMoney > 9) {
                return `1*50 euro, 2*20 euros, 1*5 euro, 2*2 euros, ${coinsSorter(((restMoney-9).toPrecision(2)))}.`
            } else if (restMoney == 9) {
                return `1*50 euro, 2*20 euros, 1*5 euro, 2*2 euros.`
            } else if (restMoney > 8) {
                return `1*50 euro, 2*20 euros, 1*5 euro, 1*2 euro, 1*1 euro, ${coinsSorter(((restMoney-8).toPrecision(2)))}.`
            } else if (restMoney == 8) {
                return `1*50 euro, 2*20 euros, 1*5 euro, 1*2 euro, 1*1 euro coin.`
            } else if (restMoney > 7) {
                return `1*50 euro, 2*20 euros, 1*5 euro, 1*2 euro, ${coinsSorter(((restMoney-7).toPrecision(2)))}.`
            } else if (restMoney == 7) {
                return `1*50 euro, 2*20 euros, 1*5 euro, 1*2 euro.`
            } else if (restMoney > 6) {
                return `1*50 euro, 2*20 euros, 1*5 euro, 1*1 euro, ${coinsSorter(((restMoney-6).toPrecision(2)))}.`
            } else if (restMoney == 6) {
                return `1*50 euro, 2*20 euros, 1*5 euro, 1*1 euro`
            } else {
                return `1*50 euro, 2*20 euros, 1*5 euro, ${coinsSorter(((restMoney-5).toPrecision(2)))}.`
            }
        } else if (restMoney == 5) {
            return `1*50 euro, 2*20 euros and 1*5 euro.`
        } else if (restMoney > 4) {
            return `1*50 euro, 2*20 euros, 2*2 euro, ${coinsSorter(((restMoney-4).toPrecision(2)))}.`
        } else if (restMoney == 4) {
            return `1*50 euro, 2*20 euros, 2*2 euros`
        } else if (restMoney > 3) {
            return `1*50 euro, 2*20 euros, 1*2 euro, 1*1 euro ${coinsSorter(((restMoney-3).toPrecision(2)))}.`
        } else if (restMoney == 3) {
            return `1*50 euro, 2*20 euros, 1*2 euro, 1*1 euro.`
        } else if (restMoney > 2) {
            return `1*50 euro, 2*20 euros, 1*2 euro, ${coinsSorter(((restMoney-2).toPrecision(2)))}.`
        } else if (restMoney == 2) {
            return `1*50 euro, 2*20 euros,  1*2 euro.`
        } else if (restMoney > 1) {
            return `1*50 euro, 2*20 euros, 1*1 euro, ${coinsSorter(((restMoney-1).toPrecision(2)))}.`
        } else if (restMoney == 1) {
            return `1*50 euro, 2*20 euros, 1*1 euro.`
        } else {
            return `1*50 euro, 2*20 euros, ${coinsSorter(((restMoney).toPrecision(2)))}.`
        }
    }

    if (moneyReturn < 90 && moneyReturn > 80) {
        restMoney = moneyReturn - 80;
        if (restMoney > 5) {
            if (restMoney > 9) {
                return `1*50 euro, 1*20 euro, 1*10 euro, 1*5 euro, 2*2 euros, ${coinsSorter(((restMoney-9).toPrecision(2)))}.`
            } else if (restMoney == 9) {
                return `1*50 euro, 1*20 euro, 1*10 euro, 1*5 euro, 2*2 euros.`
            } else if (restMoney > 8) {
                return `1*50 euro, 1*20 euro, 1*10 euro, 1*5 euro, 1*2 euro, 1*1 euro, ${coinsSorter(((restMoney-8).toPrecision(2)))}.`
            } else if (restMoney == 8) {
                return `1*50 euro, 1*20 euro, 1*10 euro, 1*5 euro, 1*2 euro, 1*1 euro coin.`
            } else if (restMoney > 7) {
                return `1*50 euro, 1*20 euro, 1*10 euro, 1*5 euro, 1*2 euro, ${coinsSorter(((restMoney-7).toPrecision(2)))}.`
            } else if (restMoney == 7) {
                return `1*50 euro, 1*20 euro, 1*10 euro, 1*5 euro, 1*2 euro.`
            } else if (restMoney > 6) {
                return `1*50 euro, 1*20 euro, 1*10 euro, 1*5 euro, 1*1 euro, ${coinsSorter(((restMoney-6).toPrecision(2)))}.`
            } else if (restMoney == 6) {
                return `1*50 euro, 1*20 euro, 1*10 euro, 1*5 euro, 1*1 euro`
            } else {
                return `1*50 euro, 1*20 euro, 1*10 euro, 1*5 euro, ${coinsSorter(((restMoney-5).toPrecision(2)))}.`
            }
        } else if (restMoney == 5) {
            return `1*50 euro, 1*20 euro, 1*10 euro and 1*5 euro.`
        } else if (restMoney > 4) {
            return `1*50 euro, 1*20 euro, 1*10 euro, 2*2 euro, ${coinsSorter(((restMoney-4).toPrecision(2)))}.`
        } else if (restMoney == 4) {
            return `1*50 euro, 1*20 euro, 1*10 euro, 2*2 euros`
        } else if (restMoney > 3) {
            return `1*50 euro, 1*20 euro, 1*10 euro, 1*2 euro, 1*1 euro ${coinsSorter(((restMoney-3).toPrecision(2)))}.`
        } else if (restMoney == 3) {
            return `1*50 euro, 1*20 euro, 1*10 euro, 1*2 euro, 1*1 euro.`
        } else if (restMoney > 2) {
            return `1*50 euro, 1*20 euro, 1*10 euro, 1*2 euro, ${coinsSorter(((restMoney-2).toPrecision(2)))}.`
        } else if (restMoney == 2) {
            return `1*50 euro, 1*20 euro, 1*10 euro,  1*2 euro.`
        } else if (restMoney > 1) {
            return `1*50 euro, 1*20 euro, 1*10 euro, 1*1 euro, ${coinsSorter(((restMoney-1).toPrecision(2)))}.`
        } else if (restMoney == 1) {
            return `1*50 euro, 1*20 euro, 1*10 euro, 1*1 euro.`
        } else {
            return `1*50 euro, 1*20 euro, 1*10 euro, ${coinsSorter(((restMoney).toPrecision(2)))}.`
        }
    }
    ///////////////////////////////// 1st ccccccccccccccc 

    if (moneyReturn < 80 && moneyReturn > 70) {
        restMoney = moneyReturn - 70;
        if (restMoney > 5) {
            if (restMoney > 9) {
                return `1*50 euro, 1*20 euro, 1*5 euro, 2*2 euros, ${coinsSorter(((restMoney-9).toPrecision(2)))}.`
            } else if (restMoney == 9) {
                return `1*50 euro, 1*20 euro, 1*5 euro, 2*2 euros.`
            } else if (restMoney > 8) {
                return `1*50 euro, 1*20 euro, 1*5 euro, 1*2 euro, 1*1 euro, ${coinsSorter(((restMoney-8).toPrecision(2)))}.`
            } else if (restMoney == 8) {
                return `1*50 euro, 1*20 euro, 1*5 euro, 1*2 euro, 1*1 euro coin.`
            } else if (restMoney > 7) {
                return `1*50 euro, 1*20 euro, 1*5 euro, 1*2 euro, ${coinsSorter(((restMoney-7).toPrecision(2)))}.`
            } else if (restMoney == 7) {
                return `1*50 euro, 1*20 euro, 1*5 euro, 1*2 euro.`
            } else if (restMoney > 6) {
                return `1*50 euro, 1*20 euro, 1*5 euro, 1*1 euro, ${coinsSorter(((restMoney-6).toPrecision(2)))}.`
            } else if (restMoney == 6) {
                return `1*50 euro, 1*20 euro, 1*5 euro, 1*1 euro`
            } else {
                return `1*50 euro, 1*20 euro, 1*5 euro, ${coinsSorter(((restMoney-5).toPrecision(2)))}.`
            }
        } else if (restMoney == 5) {
            return `1*50 euro, 1*20 euro and 1*5 euro.`
        } else if (restMoney > 4) {
            return `1*50 euro, 1*20 euro, 2*2 euro, ${coinsSorter(((restMoney-4).toPrecision(2)))}.`
        } else if (restMoney == 4) {
            return `1*50 euro, 1*20 euro, 2*2 euros`
        } else if (restMoney > 3) {
            return `1*50 euro, 1*20 euro, 1*2 euro, 1*1 euro ${coinsSorter(((restMoney-3).toPrecision(2)))}.`
        } else if (restMoney == 3) {
            return `1*50 euro, 1*20 euro, 1*2 euro, 1*1 euro.`
        } else if (restMoney > 2) {
            return `1*50 euro, 1*20 euro, 1*2 euro, ${coinsSorter(((restMoney-2).toPrecision(2)))}.`
        } else if (restMoney == 2) {
            return `1*50 euro, 1*20 euro,  1*2 euro.`
        } else if (restMoney > 1) {
            return `1*50 euro, 1*20 euro, 1*1 euro, ${coinsSorter(((restMoney-1).toPrecision(2)))}.`
        } else if (restMoney == 1) {
            return `1*50 euro, 1*20 euro, 1*1 euro.`
        } else {
            return `1*50 euro, 1*20 euro, ${coinsSorter(((restMoney).toPrecision(2)))}.`
        }
    }
    // 1*20 euro,/////////////////////////// 1st dddddddddddddddddddddddd

    if (moneyReturn < 70 && moneyReturn > 60) {
        restMoney = moneyReturn - 60;
        if (restMoney > 5) {
            if (restMoney > 9) {
                return `1*50 euro, 1*10 euro, 1*5 euro, 2*2 euros, ${coinsSorter(((restMoney-9).toPrecision(2)))}.`
            } else if (restMoney == 9) {
                return `1*50 euro, 1*10 euro, 1*5 euro, 2*2 euros.`
            } else if (restMoney > 8) {
                return `1*50 euro, 1*10 euro, 1*5 euro, 1*2 euro, 1*1 euro, ${coinsSorter(((restMoney-8).toPrecision(2)))}.`
            } else if (restMoney == 8) {
                return `1*50 euro, 1*10 euro, 1*5 euro, 1*2 euro, 1*1 euro coin.`
            } else if (restMoney > 7) {
                return `1*50 euro, 1*10 euro, 1*5 euro, 1*2 euro, ${coinsSorter(((restMoney-7).toPrecision(2)))}.`
            } else if (restMoney == 7) {
                return `1*50 euro, 1*10 euro, 1*5 euro, 1*2 euro.`
            } else if (restMoney > 6) {
                return `1*50 euro, 1*10 euro, 1*5 euro, 1*1 euro, ${coinsSorter(((restMoney-6).toPrecision(2)))}.`
            } else if (restMoney == 6) {
                return `1*50 euro, 1*10 euro, 1*5 euro, 1*1 euro`
            } else {
                return `1*50 euro, 1*10 euro, 1*5 euro, ${coinsSorter(((restMoney-5).toPrecision(2)))}.`
            }
        } else if (restMoney == 5) {
            return `1*50 euro,  1*10 euro, and 1*5 euro.`
        } else if (restMoney > 4) {
            return `1*50 euro, 1*10 euro, 2*2 euro, ${coinsSorter(((restMoney-4).toPrecision(2)))}.`
        } else if (restMoney == 4) {
            return `1*50 euro, 1*10 euro, 2*2 euros`
        } else if (restMoney > 3) {
            return `1*50 euro, 1*10 euro, 1*2 euro, 1*1 euro ${coinsSorter(((restMoney-3).toPrecision(2)))}.`
        } else if (restMoney == 3) {
            return `1*50 euro, 1*10 euro, 1*2 euro, 1*1 euro.`
        } else if (restMoney > 2) {
            return `1*50 euro, 1*10 euro, 1*2 euro, ${coinsSorter(((restMoney-2).toPrecision(2)))}.`
        } else if (restMoney == 2) {
            return `1*50 euro, 1*10 euro,  1*2 euro.`
        } else if (restMoney > 1) {
            return `1*50 euro, 1*10 euro, 1*1 euro, ${coinsSorter(((restMoney-1).toPrecision(2)))}.`
        } else if (restMoney == 1) {
            return `1*50 euro, 1*10 euro, 1*1 euro.`
        } else {
            return `1*50 euro, 1*10 euro, ${coinsSorter(((restMoney).toPrecision(2)))}.`
        }
    }
    /////////////////////////////// 1st eeeeeeeeeee

    if (moneyReturn < 60 && moneyReturn > 50) {
        restMoney = moneyReturn - 50;
        if (restMoney > 5) {
            if (restMoney > 9) {
                return `1*50 euro, 1*5 euro, 2*2 euros, ${coinsSorter(((restMoney-9).toPrecision(2)))}.`
            } else if (restMoney == 9) {
                return `1*50 euro, 1*5 euro, 2*2 euros.`
            } else if (restMoney > 8) {
                return `1*50 euro, 1*5 euro, 1*2 euro, 1*1 euro, ${coinsSorter(((restMoney-8).toPrecision(2)))}.`
            } else if (restMoney == 8) {
                return `1*50 euro, 1*5 euro, 1*2 euro, 1*1 euro coin.`
            } else if (restMoney > 7) {
                return `1*50 euro, 1*5 euro, 1*2 euro, ${coinsSorter(((restMoney-7).toPrecision(2)))}.`
            } else if (restMoney == 7) {
                return `1*50 euro, 1*5 euro, 1*2 euro.`
            } else if (restMoney > 6) {
                return `1*50 euro, 1*5 euro, 1*1 euro, ${coinsSorter(((restMoney-6).toPrecision(2)))}.`
            } else if (restMoney == 6) {
                return `1*50 euro, 1*5 euro, 1*1 euro`
            } else {
                return `1*50 euro, 1*5 euro, ${coinsSorter(((restMoney-5).toPrecision(2)))}.`
            }
        } else if (restMoney == 5) {
            return `1*50 euro and 1*5 euro.`
        } else if (restMoney > 4) {
            return `1*50 euro, 2*2 euro, ${coinsSorter(((restMoney-4).toPrecision(2)))}.`
        } else if (restMoney == 4) {
            return `1*50 euro, 2*2 euros`
        } else if (restMoney > 3) {
            return `1*50 euro, 1*2 euro, 1*1 euro ${coinsSorter(((restMoney-3).toPrecision(2)))}.`
        } else if (restMoney == 3) {
            return `1*50 euro, 1*2 euro, 1*1 euro.`
        } else if (restMoney > 2) {
            return `1*50 euro, 1*2 euro, ${coinsSorter(((restMoney-2).toPrecision(2)))}.`
        } else if (restMoney == 2) {
            return `1*50 euro,  1*2 euro.`
        } else if (restMoney > 1) {
            return `1*50 euro, 1*1 euro, ${coinsSorter(((restMoney-1).toPrecision(2)))}.`
        } else if (restMoney == 1) {
            return `1*50 euro, 1*1 euro.`
        } else {
            return `1*50 euro, ${coinsSorter(((restMoney).toPrecision(2)))}.`
        }
    }
    ////////////////////////////  1st

    if (moneyReturn < 50 && moneyReturn > 40) {
        restMoney = moneyReturn - 40;
        if (restMoney > 5) {
            if (restMoney > 9) {
                return `2*20 euro, 1*5 euro, 2*2 euros, ${coinsSorter(((restMoney-9).toPrecision(2)))}.`
            } else if (restMoney == 9) {
                return `2*20 euro, 1*5 euro, 2*2 euros.`
            } else if (restMoney > 8) {
                return `2*20 euro, 1*5 euro, 1*2 euro, 1*1 euro, ${coinsSorter(((restMoney-8).toPrecision(2)))}.`
            } else if (restMoney == 8) {
                return `2*20 euro, 1*5 euro, 1*2 euro, 1*1 euro coin.`
            } else if (restMoney > 7) {
                return `2*20 euro, 1*5 euro, 1*2 euro, ${coinsSorter(((restMoney-7).toPrecision(2)))}.`
            } else if (restMoney == 7) {
                return `2*20 euro, 1*5 euro, 1*2 euro.`
            } else if (restMoney > 6) {
                return `2*20 euro, 1*5 euro, 1*1 euro, ${coinsSorter(((restMoney-6).toPrecision(2)))}.`
            } else if (restMoney == 6) {
                return `2*20 euro, 1*5 euro, 1*1 euro`
            } else {
                return `2*20 euro, 1*5 euro, ${coinsSorter(((restMoney-5).toPrecision(2)))}.`
            }
        } else if (restMoney == 5) {
            return `2*20 euro and 1*5 euro.`
        } else if (restMoney > 4) {
            return `2*20 euro, 2*2 euro, ${coinsSorter(((restMoney-4).toPrecision(2)))}.`
        } else if (restMoney == 4) {
            return `2*20 euro, 2*2 euros`
        } else if (restMoney > 3) {
            return `2*20 euro, 1*2 euro, 1*1 euro ${coinsSorter(((restMoney-3).toPrecision(2)))}.`
        } else if (restMoney == 3) {
            return `2*20 euro, 1*2 euro, 1*1 euro.`
        } else if (restMoney > 2) {
            return `2*20 euro, 1*2 euro, ${coinsSorter(((restMoney-2).toPrecision(2)))}.`
        } else if (restMoney == 2) {
            return `2*20 euro,  1*2 euro.`
        } else if (restMoney > 1) {
            return `2*20 euro, 1*1 euro, ${coinsSorter(((restMoney-1).toPrecision(2)))}.`
        } else if (restMoney == 1) {
            return `2*20 euro, 1*1 euro.`
        } else {
            return `2*20 euro, ${coinsSorter(((restMoney).toPrecision(2)))}.`
        }
    }
    ///////    2nd 

    if (moneyReturn < 40 && moneyReturn > 30) {
        restMoney = moneyReturn - 30;
        if (restMoney > 5) {
            if (restMoney > 9) {
                return `1*20 euro, 1*10 euro, 1*5 euro, 2*2 euros, ${coinsSorter(((restMoney-9).toPrecision(2)))}.`
            } else if (restMoney == 9) {
                return `1*20 euro, 1*10 euro, 1*5 euro, 2*2 euros.`
            } else if (restMoney > 8) {
                return `1*20 euro, 1*10 euro, 1*5 euro, 1*2 euro, 1*1 euro, ${coinsSorter(((restMoney-8).toPrecision(2)))}.`
            } else if (restMoney == 8) {
                return `1*20 euro, 1*10 euro, 1*5 euro, 1*2 euro, 1*1 euro coin.`
            } else if (restMoney > 7) {
                return `1*20 euro, 1*10 euro, 1*5 euro, 1*2 euro, ${coinsSorter(((restMoney-7).toPrecision(2)))}.`
            } else if (restMoney == 7) {
                return `1*20 euro, 1*10 euro, 1*5 euro, 1*2 euro.`
            } else if (restMoney > 6) {
                return `1*20 euro, 1*10 euro, 1*5 euro, 1*1 euro, ${coinsSorter(((restMoney-6).toPrecision(2)))}.`
            } else if (restMoney == 6) {
                return `1*20 euro, 1*10 euro, 1*5 euro, 1*1 euro`
            } else {
                return `1*20 euro, 1*10 euro, 1*5 euro, ${coinsSorter(((restMoney-5).toPrecision(2)))}.`
            }
        } else if (restMoney == 5) {
            return `1*20 euro, 1*10 euro and 1*5 euro.`
        } else if (restMoney > 4) {
            return `1*20 euro, 1*10 euro, 2*2 euro, ${coinsSorter(((restMoney-4).toPrecision(2)))}.`
        } else if (restMoney == 4) {
            return `1*20 euro, 1*10 euro, 2*2 euros`
        } else if (restMoney > 3) {
            return `1*20 euro, 1*10 euro, 1*2 euro, 1*1 euro ${coinsSorter(((restMoney-3).toPrecision(2)))}.`
        } else if (restMoney == 3) {
            return `1*20 euro, 1*10 euro, 1*2 euro, 1*1 euro.`
        } else if (restMoney > 2) {
            return `1*20 euro, 1*10 euro, 1*2 euro, ${coinsSorter(((restMoney-2).toPrecision(2)))}.`
        } else if (restMoney == 2) {
            return `1*20 euro, 1*10 euro,  1*2 euro.`
        } else if (restMoney > 1) {
            return `1*20 euro, 1*10 euro, 1*1 euro, ${coinsSorter(((restMoney-1).toPrecision(2)))}.`
        } else if (restMoney == 1) {
            return `1*20 euro, 1*10 euro, 1*1 euro.`
        } else {
            return `1*20 euro, 1*10 euro, ${coinsSorter(((restMoney).toPrecision(2)))}.`
        }
    }
    ///////////////////////  3rd

    if (moneyReturn < 30 && moneyReturn > 20) {
        restMoney = moneyReturn - 20;
        if (restMoney > 5) {
            if (restMoney > 9) {
                return `1*20 euro, 1*5 euro, 2*2 euros, ${coinsSorter(((restMoney-9).toPrecision(2)))}.`
            } else if (restMoney == 9) {
                return `1*20 euro, 1*5 euro, 2*2 euros.`
            } else if (restMoney > 8) {
                return `1*20 euro, 1*5 euro, 1*2 euro, 1*1 euro, ${coinsSorter(((restMoney-8).toPrecision(2)))}.`
            } else if (restMoney == 8) {
                return `1*20 euro, 1*5 euro, 1*2 euro, 1*1 euro coin.`
            } else if (restMoney > 7) {
                return `1*20 euro, 1*5 euro, 1*2 euro, ${coinsSorter(((restMoney-7).toPrecision(2)))}.`
            } else if (restMoney == 7) {
                return `1*20 euro, 1*5 euro, 1*2 euro.`
            } else if (restMoney > 6) {
                return `1*20 euro, 1*5 euro, 1*1 euro, ${coinsSorter(((restMoney-6).toPrecision(2)))}.`
            } else if (restMoney == 6) {
                return `1*20 euro, 1*5 euro, 1*1 euro`
            } else {
                return `1*20 euro, 1*5 euro, ${coinsSorter(((restMoney-5).toPrecision(2)))}.`
            }
        } else if (restMoney == 5) {
            return `1*20 euro and 1*5 euro.`
        } else if (restMoney > 4) {
            return `1*20 euro, 2*2 euro, ${coinsSorter(((restMoney-4).toPrecision(2)))}.`
        } else if (restMoney == 4) {
            return `1*20 euro, 2*2 euros`
        } else if (restMoney > 3) {
            return `1*20 euro, 1*2 euro, 1*1 euro ${coinsSorter(((restMoney-3).toPrecision(2)))}.`
        } else if (restMoney == 3) {
            return `1*20 euro, 1*2 euro, 1*1 euro.`
        } else if (restMoney > 2) {
            return `1*20 euro, 1*2 euro, ${coinsSorter(((restMoney-2).toPrecision(2)))}.`
        } else if (restMoney == 2) {
            return `1*20 euro,  1*2 euro.`
        } else if (restMoney > 1) {
            return `1*20 euro, 1*1 euro, ${coinsSorter(((restMoney-1).toPrecision(2)))}.`
        } else if (restMoney == 1) {
            return `1*20 euro, 1*1 euro.`
        } else {
            return `1*20 euro, ${coinsSorter(((restMoney).toPrecision(2)))}.`
        }
    }

    ///////////////////// 4th

    if (moneyReturn < 20 && moneyReturn > 10) {
        restMoney = moneyReturn - 10;
        if (restMoney > 5) {
            if (restMoney > 9) {
                return `1*10 euro, 1*5 euro, 2*2 euros, ${coinsSorter(((restMoney-9).toPrecision(2)))}.`
            } else if (restMoney == 9) {
                return `1*10 euro, 1*5 euro, 2*2 euros.`
            } else if (restMoney > 8) {
                return `1*10 euro, 1*5 euro, 1*2 euro, 1*1 euro, ${coinsSorter(((restMoney-8).toPrecision(2)))}.`
            } else if (restMoney == 8) {
                return `1*10 euro, 1*5 euro, 1*2 euro, 1*1 euro coin.`
            } else if (restMoney > 7) {
                return `1*10 euro, 1*5 euro, 1*2 euro, ${coinsSorter(((restMoney-7).toPrecision(2)))}.`
            } else if (restMoney == 7) {
                return `1*10 euro, 1*5 euro, 1*2 euro.`
            } else if (restMoney > 6) {
                return `1*10 euro, 1*5 euro, 1*1 euro, ${coinsSorter(((restMoney-6).toPrecision(2)))}.`
            } else if (restMoney == 6) {
                return `1*10 euro, 1*5 euro, 1*1 euro`
            } else {
                return `1*10 euro, 1*5 euro, ${coinsSorter(((restMoney-5).toPrecision(2)))}.`
            }
        } else if (restMoney == 5) {
            return `1*10 euro and 1*5 euro.`
        } else if (restMoney > 4) {
            return `1*10 euro, 2*2 euro, ${coinsSorter(((restMoney-4).toPrecision(2)))}.`
        } else if (restMoney == 4) {
            return `1*10 euro, 2*2 euros`
        } else if (restMoney > 3) {
            return `1*10 euro, 1*2 euro, 1*1 euro ${coinsSorter(((restMoney-3).toPrecision(2)))}.`
        } else if (restMoney == 3) {
            return `1*10 euro, 1*2 euro, 1*1 euro.`
        } else if (restMoney > 2) {
            return `1*10 euro, 1*2 euro, ${coinsSorter(((restMoney-2).toPrecision(2)))}.`
        } else if (restMoney == 2) {
            return `1*10 euro,  1*2 euro.`
        } else if (restMoney > 1) {
            return `1*10 euro, 1*1 euro, ${coinsSorter(((restMoney-1).toPrecision(2)))}.`
        } else if (restMoney == 1) {
            return `1*10 euro, 1*1 euro.`
        } else {
            return `1*10 euro, ${coinsSorter(((restMoney).toPrecision(2)))}.`
        }
    }

    ///////////////////////// 5th 

    if (moneyReturn < 10 && moneyReturn > 0) {
        restMoney = moneyReturn - 0;
        if (restMoney > 5) {
            if (restMoney > 9) {
                return `1*5 euro, 2*2 euros, ${coinsSorter(((restMoney-9).toPrecision(2)))}.`
            } else if (restMoney == 9) {
                return `1*5 euro, 2*2 euros.`
            } else if (restMoney > 8) {
                return `1*5 euro, 1*2 euro, 1*1 euro, ${coinsSorter(((restMoney-8).toPrecision(2)))}.`
            } else if (restMoney == 8) {
                return `1*5 euro, 1*2 euro, 1*1 euro coin.`
            } else if (restMoney > 7) {
                return `1*5 euro, 1*2 euro, ${coinsSorter(((restMoney-7).toPrecision(2)))}.`
            } else if (restMoney == 7) {
                return `1*5 euro, 1*2 euro.`
            } else if (restMoney > 6) {
                return `1*5 euro, 1*1 euro, ${coinsSorter(((restMoney-6).toPrecision(2)))}.`
            } else if (restMoney == 6) {
                return `1*5 euro, 1*1 euro`
            } else {
                return `1*5 euro, ${coinsSorter(((restMoney-5).toPrecision(2)))}.`
            }
        } else if (restMoney == 5) {
            return `1*5 euro.`
        } else if (restMoney > 4) {
            return `2*2 euro, ${coinsSorter(((restMoney-4).toPrecision(2)))}.`
        } else if (restMoney == 4) {
            return `2*2 euros`
        } else if (restMoney > 3) {
            return `1*2 euro, 1*1 euro ${coinsSorter(((restMoney-3).toPrecision(2)))}.`
        } else if (restMoney == 3) {
            return `1*2 euro, 1*1 euro.`
        } else if (restMoney > 2) {
            return `1*2 euro, ${coinsSorter(((restMoney-2).toPrecision(2)))}.`
        } else if (restMoney == 2) {
            return `1*2 euro.`
        } else if (restMoney > 1) {
            return `1*1 euro, ${coinsSorter(((restMoney-1).toPrecision(2)))}.`
        } else if (restMoney == 1) {
            return `1*1 euro.`
        } else {
            return `${coinsSorter(((restMoney).toPrecision(2)))}.`
        }
    }

}
/////////////////////////////////////////////////////////////////////////////////

///////////////// Recursive function 

function coinsSorter(coins) {
    if (coins == 0.09) {
        return `1*5 cent and 2*2 cents`
    } else if (coins == .08) {
        return `1*5 cent, 1*2 cent and 1*1 cent`
    } else if (coins == .07) {
        return `1*5 cent, 1*2 cents`
    } else if (coins == .06) {
        return `1*5 cent, 1*1 cent`
    } else if (coins == .05) {
        return `1*5 cent`
    } else if (coins == .04) {
        return `2*2 cents`
    } else if (coins == .03) {
        return `1*2 cent and 1*1  cent`
    } else if (coins == .02) {
        return `1*2 cent`
    } else if (coins == .01) {
        return `1*1 cent`
    }

    /////////////////// 1st 

    if (coins == 0.19) {
        return `1*10 cent, 1*5 cent and 2*2 cents`
    } else if (coins == .18) {
        return `1*10 cent, 1*5 cent, 1*2 cent and 1*1 cent`
    } else if (coins == .17) {
        return `1*10 cent, 1*5 cent, 1*2 cent`
    } else if (coins == .16) {
        return `1*10 cent, 1*5 cent, 1*1 cent`
    } else if (coins == .15) {
        return `1*10 cent, 1*5 cent`
    } else if (coins == .14) {
        return `1*10 cent, 2*2 cents`
    } else if (coins == .13) {
        return `1*10 cent, 1*2 cent and 1*1  cent`
    } else if (coins == .12) {
        return `1*10 cent, 1*2 cent`
    } else if (coins == .11) {
        return `1*10 cent, 1*1 cent`
    } else if (coins == .10) {
        return `1*10 cent or 2*5 cents`
    }

    ///////////////////////// 2nd

    if (coins == 0.29) {
        return `1*20 cent, 1*5 cent and 2*2 cents`
    } else if (coins == .28) {
        return `1*20 cent, 1*5 cent, 1*2 cent and 1*1 cent`
    } else if (coins == .27) {
        return `1*20 cent, 1*5 cent, 1*2 cent`
    } else if (coins == .26) {
        return `1*20 cent, 1*5 cent, 1*1 cent`
    } else if (coins == .25) {
        return `1*20 cent, 1*5 cent`
    } else if (coins == .24) {
        return `1*20 cent, 2*2 cents`
    } else if (coins == .23) {
        return `1*20 cent, 1*2 cent and 1*1  cent`
    } else if (coins == .22) {
        return `1*20 cent, 1*2 cent`
    } else if (coins == .21) {
        return `1*20 cent, 1*1 cent`
    } else if (coins == .20) {
        return `1*20 cent or 2*10 cents`
    }

    /////////////////////////////// 3rd

    if (coins == 0.39) {
        return `1*20 cent, 1*10 cent, 1*5 cent and 2*2 cents`
    } else if (coins == .38) {
        return `1*20 cent, 1*10 cent, 1*5 cent, 1*2 cent and 1*1 cent`
    } else if (coins == .37) {
        return `1*20 cent, 1*10 cent, 1*5 cent, 1*2 cent`
    } else if (coins == .36) {
        return `1*20 cent, 1*10 cent, 1*5 cent, 1*1 cent`
    } else if (coins == .35) {
        return `1*20 cent, 1*10 cent, 1*5 cent`
    } else if (coins == .34) {
        return `1*20 cent, 1*10 cent, 2*2 cents`
    } else if (coins == .33) {
        return `1*20 cent, 1*10 cent, 1*2 cent and 1*1  cent`
    } else if (coins == .32) {
        return `1*20 cent, 1*10 cent, 1*2 cent`
    } else if (coins == .31) {
        return `1*20 cent, 1*10 cent, 1*1 cent`
    } else if (coins == .30) {
        return `1*20 cent and 1*10 cents`
    }

    /////////////////////////////// 4th

    if (coins == 0.49) {
        return `2*20 cents, 1*5 cent and 2*2 cents`
    } else if (coins == .48) {
        return `2*20 cents, 1*5 cent, 1*2 cent and 1*1 cent`
    } else if (coins == .47) {
        return `2*20 cents, 1*5 cent, 1*2 cent`
    } else if (coins == .46) {
        return `2*20 cents, 1*5 cent, 1*1 cent`
    } else if (coins == .45) {
        return `2*20 cents, 1*5 cent`
    } else if (coins == .44) {
        return `2*20 cents, 2*2 cents`
    } else if (coins == .43) {
        return `2*20 cents, 1*2 cent and 1*1  cent`
    } else if (coins == .42) {
        return `2*20 cents, 1*2 cent`
    } else if (coins == .41) {
        return `2*20 cents, 1*1 cent`
    } else if (coins == .40) {
        return `2*20 cents`
    }

    ////////////////////////// 5th

    if (coins == 0.59) {
        return `1*50 cent, 1*5 cent and 2*2 cents`
    } else if (coins == .58) {
        return `1*50 cent, 1*5 cent, 1*2 cent and 1*1 cent`
    } else if (coins == .57) {
        return `1*50 cent, 1*5 cent, 1*2 cent`
    } else if (coins == .56) {
        return `1*50 cent, 1*5 cent, 1*1 cent`
    } else if (coins == .55) {
        return `1*50 cent, 1*5 cent`
    } else if (coins == .54) {
        return `1*50 cent, 2*2 cents`
    } else if (coins == .53) {
        return `1*50 cent, 1*2 cent and 1*1  cent`
    } else if (coins == .52) {
        return `1*50 cent, 1*2 cent`
    } else if (coins == .51) {
        return `1*50 cent, 1*1 cent`
    } else if (coins == .50) {
        return `1*50 cent`
    }

    /////////////////////////////// 6th

    if (coins == 0.69) {
        return `1*50 cent, 1*10 cent, 1*5 cent and 2*2 cents`
    } else if (coins == .68) {
        return `1*50 cent, 1*10 cent, 1*5 cent, 1*2 cent and 1*1 cent`
    } else if (coins == .67) {
        return `1*50 cent, 1*10 cent, 1*5 cent, 1*2 cent`
    } else if (coins == .66) {
        return `1*50 cent, 1*10 cent, 1*5 cent, 1*1 cent`
    } else if (coins == .65) {
        return `1*50 cent, 1*10 cent, 1*5 cent`
    } else if (coins == .64) {
        return `1*50 cent, 1*10 cent, 2*2 cents`
    } else if (coins == .63) {
        return `1*50 cent, 1*10 cent, 1*2 cent and 1*1  cent`
    } else if (coins == .62) {
        return `1*50 cent, 1*10 cent, 1*2 cent`
    } else if (coins == .61) {
        return `1*50 cent, 1*10 cent, 1*1 cent`
    } else if (coins == .60) {
        return `1*50 cent and 1*10 cent`
    }

    /////////////////////////////// 7th

    if (coins == 0.79) {
        return `1*50 cent, 1*20 cent, 1*5 cent and 2*2 cents`
    } else if (coins == .78) {
        return `1*50 cent, 1*20 cent, 1*5 cent, 1*2 cent and 1*1 cent`
    } else if (coins == .77) {
        return `1*50 cent, 1*20 cent, 1*5 cent, 1*2 cent`
    } else if (coins == .76) {
        return `1*50 cent, 1*20 cent, 1*5 cent, 1*1 cent`
    } else if (coins == .75) {
        return `1*50 cent, 1*20 cent, 1*5 cent`
    } else if (coins == .74) {
        return `1*50 cent, 1*20 cent, 2*2 cents`
    } else if (coins == .73) {
        return `1*50 cent, 1*20 cent, 1*2 cent and 1*1  cent`
    } else if (coins == .72) {
        return `1*50 cent, 1*20 cent, 1*2 cent`
    } else if (coins == .71) {
        return `1*50 cent, 1*20 cent, 1*1 cent`
    } else if (coins == .70) {
        return `1*50 cent and 1*20 cent`
    }

    /////////////////////////////// 8th

    if (coins == 0.89) {
        return `1*50 cent, 1*20 cent, 1*10 cent, 1*5 cent and 2*2 cents`
    } else if (coins == .88) {
        return `1*50 cent, 1*20 cent, 1*10 cent, 1*5 cent, 1*2 cent and 1*1 cent`
    } else if (coins == .87) {
        return `1*50 cent, 1*20 cent, 1*10 cent, 1*5 cent, 1*2 cent`
    } else if (coins == .86) {
        return `1*50 cent, 1*20 cent, 1*10 cent, 1*5 cent, 1*1 cent`
    } else if (coins == .85) {
        return `1*50 cent, 1*20 cent, 1*10 cent, 1*5 cent`
    } else if (coins == .84) {
        return `1*50 cent, 1*20 cent, 1*10 cent, 2*2 cents`
    } else if (coins == .83) {
        return `1*50 cent, 1*20 cent, 1*10 cent, 1*2 cent and 1*1  cent`
    } else if (coins == .82) {
        return `1*50 cent, 1*20 cent, 1*10 cent, 1*2 cent`
    } else if (coins == .81) {
        return `1*50 cent, 1*20 cent, 1*10 cent, 1*1 cent`
    } else if (coins == .80) {
        return `1*50 cent and 1*20 cent and 1*10 cent`
    }

    /////////////////////////////// 9th

    if (coins == 0.99) {
        return `1*50 cent, 2*20 cent, 1*5 cent and 2*2 cents`
    } else if (coins == .98) {
        return `1*50 cent, 2*20 cent, 1*5 cent, 1*2 cent and 1*1 cent`
    } else if (coins == .97) {
        return `1*50 cent, 2*20 cent, 1*5 cent, 1*2 cent`
    } else if (coins == .96) {
        return `1*50 cent, 2*20 cent, 1*5 cent, 1*1 cent`
    } else if (coins == .95) {
        return `1*50 cent, 2*20 cent, 1*5 cent`
    } else if (coins == .94) {
        return `1*50 cent, 2*20 cent, 2*2 cents`
    } else if (coins == .93) {
        return `1*50 cent, 2*20 cent, 1*2 cent and 1*1  cent`
    } else if (coins == .92) {
        return `1*50 cent, 2*20 cent, 1*2 cent`
    } else if (coins == .91) {
        return `1*50 cent, 2*20 cent, 1*1 cent`
    } else if (coins == .90) {
        return `1*50 cent and 2*20 cent`
    }

}

console.log(moneyReturner(100, 11.38));
