function moneyReturner(cash, price) {
    let moneyReturn = cash - price;
    let restMoney = 0;

    if (moneyReturn < 100 && moneyReturn > 90) {
        restMoney = moneyReturn - 90;
        if (restMoney > 5) {
            if (restMoney >= 9) {
                return `1*50 euro, 2*20 euro, 1*5 euro, 2*2 euros coins and ${(restMoney-9).toPrecision(2)} cents`
            } else if (restMoney >= 8) {
                return `1*50 euro, 2*20 euro, 1*5 euro, 1*2 euros coins, 1*1 euro coin and ${(restMoney-8).toPrecision(2)} cents`
            } else if (restMoney >= 7) {
                return `1*50 euro, 2*20 euro, 1*5 euro, 1*2 euros coins and ${(restMoney-7).toPrecision(2)} cents`
            } else if (restMoney >= 6) {
                return `1*50 euro, 2*20 euro, 1*5 euro, 1*1 euros coins and ${(restMoney-6).toPrecision(2)} cents`
            } else {
                return `1*50 euro 2*20 euro, 1*5 euro  ${(restMoney-5).toPrecision(2)} cents`
            }
        } else if (restMoney == 5) {
            return `1*50 euro, 2*20 euro, and 1*5 euro`
        } else if (restMoney >= 4) {
            return `1*50 euro, 2*20 euro, 2*2 euro and ${(restMoney-4).toPrecision(2)} cents`
        } else if (restMoney >= 3) {
            return `1*50 euro, 2*20 euro, 1*2 euro, 1*1 euro and ${(restMoney-3).toPrecision(2)} cents`
        } else if (restMoney == 2) {
            return `1*50 euro, 2*20 euro, 1*2 euro`
        } else if (restMoney > 2) {
            return `1*50 euro, 2*20 euro, 1*2 euro coins and ${(restMoney-2).toPrecision(2)} cents`
        } else if (restMoney >= 1) {
            return `1*50 euro, 2*20 euro, 1*1 euro coins and ${(restMoney-1).toPrecision(2)} cents`
        }
    }

    if (moneyReturn < 90 && moneyReturn > 80) {
        restMoney = moneyReturn - 80;
        if (restMoney > 5) {
            if (restMoney >= 9) {
                return `1*50 euro, 1*20 euro, 1*10 euro, 1*5 euro, 2*2 euros coins and ${(restMoney-9).toPrecision(2)} cents`
            } else if (restMoney >= 8) {
                return `1*50 euro, 1*20 euro, 1*10 euro, 1*5 euro, 1*2 euros coins, 1*1 euro coin and ${(restMoney-8).toPrecision(2)} cents`
            } else if (restMoney >= 7) {
                return `1*50 euro, 1*20 euro, 1*10 euro, 1*5 euro, 1*2 euros coins and ${(restMoney-7).toPrecision(2)} cents`
            } else if (restMoney >= 6) {
                return `1*50 euro, 1*20 euro, 1*10 euro, 1*5 euro, 1*1 euros coins and ${(restMoney-6).toPrecision(2)} cents`
            } else {
                return `1*50 euro 1*20 euro, 1*10 euro, 1*5 euro  ${(restMoney-5).toPrecision(2)} cents`
            }
        } else if (restMoney == 5) {
            return `1*50 euro, 1*20 euro, 1*10 euro, and 1*5 euro`
        } else if (restMoney >= 4) {
            return `1*50 euro, 1*20 euro, 1*10 euro, 2*2 euro and ${(restMoney-4).toPrecision(2)} cents`
        } else if (restMoney >= 3) {
            return `1*50 euro, 1*20 euro, 1*10 euro, 1*2 euro, 1*1 euro and ${(restMoney-3).toPrecision(2)} cents`
        } else if (restMoney == 2) {
            return `1*50 euro, 1*20 euro, 1*10 euro, 1*2 euro`
        } else if (restMoney > 2) {
            return `1*50 euro, 1*20 euro, 1*10 euro, 1*2 euro coins and ${(restMoney-2).toPrecision(2)} cents`
        } else if (restMoney >= 1) {
            return `1*50 euro, 1*20 euro, 1*10 euro, 1*1 euro coins and ${(restMoney-1).toPrecision(2)} cents`
        }
    }

    ///////////////////////////////// 1st ccccccccccccccc

    if (moneyReturn < 80 && moneyReturn > 70) {
        restMoney = moneyReturn - 70;
        if (restMoney > 5) {
            if (restMoney >= 9) {
                return `1*50 euro, 1*20 euro, 1*5 euro, 2*2 euros coins and ${(restMoney-9).toPrecision(2)} cents`
            } else if (restMoney >= 8) {
                return `1*50 euro, 1*20 euro, 1*5 euro, 1*2 euros coins, 1*1 euro coin and ${(restMoney-8).toPrecision(2)} cents`
            } else if (restMoney >= 7) {
                return `1*50 euro, 1*20 euro, 1*5 euro, 1*2 euros coins and ${(restMoney-7).toPrecision(2)} cents`
            } else if (restMoney >= 6) {
                return `1*50 euro, 1*20 euro, 1*5 euro, 1*1 euros coins and ${(restMoney-6).toPrecision(2)} cents`
            } else {
                return `1*50 euro 1*20 euro, 1*5 euro  ${(restMoney-5).toPrecision(2)} cents`
            }
        } else if (restMoney == 5) {
            return `1*50 euro, 1*20 euro, and 1*5 euro`
        } else if (restMoney >= 4) {
            return `1*50 euro, 1*20 euro, 2*2 euro and ${(restMoney-4).toPrecision(2)} cents`
        } else if (restMoney >= 3) {
            return `1*50 euro, 1*20 euro, 1*2 euro, 1*1 euro and ${(restMoney-3).toPrecision(2)} cents`
        } else if (restMoney == 2) {
            return `1*50 euro, 1*20 euro, 1*2 euro`
        } else if (restMoney > 2) {
            return `1*50 euro, 1*20 euro, 1*2 euro coins and ${(restMoney-2).toPrecision(2)} cents`
        } else if (restMoney >= 1) {
            return `1*50 euro, 1*20 euro, 1*1 euro coins and ${(restMoney-1).toPrecision(2)} cents`
        }
    }
    ///////////////////////////// 1st dddddddddddddddddddddddd

    if (moneyReturn < 70 && moneyReturn > 60) {
        restMoney = moneyReturn - 60;
        if (restMoney > 5) {
            if (restMoney >= 9) {
                return `1*50 euro, 1*10 euro, 1*5 euro, 2*2 euros coins and ${(restMoney-9).toPrecision(2)} cents`
            } else if (restMoney >= 8) {
                return `1*50 euro, 1*10 euro, 1*5 euro, 1*2 euros coins, 1*1 euro coin and ${(restMoney-8).toPrecision(2)} cents`
            } else if (restMoney >= 7) {
                return `1*50 euro, 1*10 euro, 1*5 euro, 1*2 euros coins and ${(restMoney-7).toPrecision(2)} cents`
            } else if (restMoney >= 6) {
                return `1*50 euro, 1*10 euro, 1*5 euro, 1*1 euros coins and ${(restMoney-6).toPrecision(2)} cents`
            } else {
                return `1*50 euro 1*10 euro, 1*5 euro  ${(restMoney-5).toPrecision(2)} cents`
            }
        } else if (restMoney == 5) {
            return `1*50 euro, 1*10 euro, and 1*5 euro`
        } else if (restMoney >= 4) {
            return `1*50 euro, 1*10 euro, 2*2 euro and ${(restMoney-4).toPrecision(2)} cents`
        } else if (restMoney >= 3) {
            return `1*50 euro, 1*10 euro, 1*2 euro, 1*1 euro and ${(restMoney-3).toPrecision(2)} cents`
        } else if (restMoney == 2) {
            return `1*50 euro, 1*10 euro, 1*2 euro`
        } else if (restMoney > 2) {
            return `1*50 euro, 1*10 euro, 1*2 euro coins and ${(restMoney-2).toPrecision(2)} cents`
        } else if (restMoney >= 1) {
            return `1*50 euro, 1*10 euro, 1*1 euro coins and ${(restMoney-1).toPrecision(2)} cents`
        }
    }
    /////////////////////////////// 1st eeeeeeeeeee

    if (moneyReturn < 60 && moneyReturn > 50) {
        restMoney = moneyReturn - 50;
        if (restMoney > 5) {
            if (restMoney >= 9) {
                return `1*50 euro, 1*5 euro, 2*2 euros coins and ${(restMoney-9).toPrecision(2)} cents`
            } else if (restMoney >= 8) {
                return `1*50 euro, 1*5 euro, 1*2 euros coins, 1*1 euro coin and ${(restMoney-8).toPrecision(2)} cents`
            } else if (restMoney >= 7) {
                return `1*50 euro, 1*5 euro, 1*2 euros coins and ${(restMoney-7).toPrecision(2)} cents`
            } else if (restMoney >= 6) {
                return `1*50 euro, 1*5 euro, 1*1 euros coins and ${(restMoney-6).toPrecision(2)} cents`
            } else {
                return `1*50 euro 1*5 euro  ${(restMoney-5).toPrecision(2)} cents`
            }
        } else if (restMoney == 5) {
            return `1*50 euro, and 1*5 euro`
        } else if (restMoney >= 4) {
            return `1*50 euro, 2*2 euro and ${(restMoney-4).toPrecision(2)} cents`
        } else if (restMoney >= 3) {
            return `1*50 euro, 1*2 euro, 1*1 euro and ${(restMoney-3).toPrecision(2)} cents`
        } else if (restMoney == 2) {
            return `1*50 euro, 1*2 euro`
        } else if (restMoney > 2) {
            return `1*50 euro, 1*2 euro coins and ${(restMoney-2).toPrecision(2)} cents`
        } else if (restMoney >= 1) {
            return `1*50 euro, 1*1 euro coins and ${(restMoney-1).toPrecision(2)} cents`
        }
    }

    ////////////////////////////  1st

    if (moneyReturn < 50 && moneyReturn > 40) {
        restMoney = moneyReturn - 40;
        if (restMoney > 5) {
            if (restMoney >= 9) {
                return `2*20 euros, 1*5 euro, 2*2 euros coins and ${(restMoney-9).toPrecision(2)} cents`
            } else if (restMoney >= 8) {
                return `2*20 euros, 1*5 euro, 1*2 euros coins, 1*1 euro coin and ${(restMoney-8).toPrecision(2)} cents`
            } else if (restMoney >= 7) {
                return `2*20 euros, 1*5 euro, 1*2 euros coins and ${(restMoney-7).toPrecision(2)} cents`
            } else if (restMoney >= 6) {
                return `2*20 euros, 1*5 euro, 1*1 euros coins and ${(restMoney-6).toPrecision(2)} cents`
            } else {
                return `2*20 euros, 1*5 euro  ${(restMoney-5).toPrecision(2)} cents`
            }
        } else if (restMoney == 5) {
            return `2*20 euros,1*5 euro`
        } else if (restMoney >= 4) {
            return `2*20 euro, 2*2 euro and ${(restMoney-4).toPrecision(2)}`
        } else if (restMoney >= 3) {
            return `2*20 euro, 1*2 euro, 1*1 euro and ${(restMoney-3).toPrecision(2)} cents`
        } else if (restMoney == 2) {
            return `2*20 euros,1*2 euro`
        } else if (restMoney > 2) {
            return `2*20 euros, 1*2 euro coins and ${(restMoney-2).toPrecision(2)} cents`
        } else if (restMoney >= 1) {
            return `2*20 euros,1*1 euro coins and ${(restMoney-1).toPrecision(2)} cents`
        }
    }
    ///////    2nd 

    if (moneyReturn < 40 && moneyReturn > 30) {
        restMoney = moneyReturn - 30;
        if (restMoney > 5) {
            if (restMoney >= 9) {
                return `1*20 euros, 1*10 euro, 1*5 euro, 2*2 euros coins and ${(restMoney-9).toPrecision(2)} cents`
            } else if (restMoney >= 8) {
                return `1*20 euros, 1*10 euro, 1*5 euro, 1*2 euros coins, 1*1 euro coin and ${(restMoney-8).toPrecision(2)} cents`
            } else if (restMoney >= 7) {
                return `1*20 euros, 1*10 euro, 1*5 euro, 1*2 euros coins and ${(restMoney-7).toPrecision(2)} cents`
            } else if (restMoney >= 6) {
                return `1*20 euros, 1*10 euro, 1*5 euro, 1*1 euros coins and ${(restMoney-6).toPrecision(2)} cents`
            } else {
                return `1*20 euros, 1*10 euro, 1*5 euro  ${(restMoney-5).toPrecision(2)} cents`
            }
        } else if (restMoney == 5) {
            return `1*20 euros,1*10 euros 1*5 euro`

        } else if (restMoney >= 4) {
            return `1*20 euro, 1*10 euro, 2*2 euro and ${(restMoney-4).toPrecision(2)} cents`
        } else if (restMoney >= 3) {
            return `1*20 euro, 1*10 euro, 1*2 euro, 1*1 euro and ${(restMoney-3).toPrecision(2)} cents`
        } else if (restMoney == 2) {
            return `1*20 euros, 1*10 euros, 1*2 euro`

        } else if (restMoney > 2) {
            return `1*20 euros, 1*10 euros,  1*2 euro coins and ${(restMoney-2).toPrecision(2)} cents`


        } else if (restMoney >= 1) {
            return `1*20 euros, 1*10 euros, 1*1 euro coins and ${(restMoney-1).toPrecision(2)} cents`

        }
    }
    ///////////////////////  3rd

    if (moneyReturn < 30 && moneyReturn > 20) {
        restMoney = moneyReturn - 20;
        if (restMoney > 5) {
            if (restMoney >= 9) {
                return `1*20 euros, 1*5 euro, 2*2 euros coins and ${(restMoney-9).toPrecision(2)} cents`
            } else if (restMoney >= 8) {
                return `1*20 euros, 1*5 euro, 1*2 euros coins, 1*1 euro coin and ${(restMoney-8).toPrecision(2)} cents`
            } else if (restMoney >= 7) {
                return `1*20 euros, 1*5 euro, 1*2 euros coins and ${(restMoney-7).toPrecision(2)} cents`
            } else if (restMoney >= 6) {
                return `1*20 euros, 1*5 euro, 1*1 euros coins and ${(restMoney-6).toPrecision(2)} cents`
            } else {
                return `1*20 euros, 1*5 euro  ${(restMoney-5).toPrecision(2)} cents`
            }
        } else if (restMoney == 5) {
            return `1*20 euros or 1*10 euros 1*5 euro`

        } else if (restMoney >= 4) {
            return `1*20 euro, 2*2 euro and ${(restMoney-4).toPrecision(2)} cents`
        } else if (restMoney >= 3) {
            return `1*20 euro, 1*2 euro, 1*1 euro and ${(restMoney-3).toPrecision(2)} cents`
        } else if (restMoney == 2) {
            return `1*20 euros or 2*10 euros, 1*2 euro`
        } else if (restMoney > 2) {
            return `1*20 euros or 2*10 euros,  1*2 euro coins and ${(restMoney-2).toPrecision(2)} cents`
        } else if (restMoney >= 1) {
            return `1*20 euros or 2*10 euros, 1*1 euro coins and ${(restMoney-1).toPrecision(2)} cents`

        }
    }

    ///////////////////// 4th

    if (moneyReturn < 20 && moneyReturn > 10) {
        restMoney = moneyReturn - 10;
        if (restMoney > 5) {
            if (restMoney >= 9) {
                return `1*10 euros, 1*5 euro, 2*2 euros coins and ${(restMoney-9).toPrecision(2)} cents`
            } else if (restMoney >= 8) {
                return `1*10 euros, 1*5 euro, 1*2 euros coins, 1*1 euro coin and ${(restMoney-8).toPrecision(2)} cents`
            } else if (restMoney >= 7) {
                return `1*10 euros, 1*5 euro, 1*2 euros coins and ${(restMoney-7).toPrecision(2)} cents`
            } else if (restMoney >= 6) {
                return `1*10 euros, 1*5 euro, 1*1 euros coins and ${(restMoney-6).toPrecision(2)} cents`
            } else {
                return `1*10 euros, 1*5 euro  ${(restMoney-5).toPrecision(2)} cents`
            }
        } else if (restMoney == 5) {
            return `1*10 euros 1*5 euro`

        } else if (restMoney >= 4) {
            return `1*10 euro, 2*2 euro and ${(restMoney-4).toPrecision(2)} cents`
        } else if (restMoney >= 3) {
            return `1*10 euro, 1*2 euro, 1*1 euro and ${(restMoney-3).toPrecision(2)} cents`
        } else if (restMoney == 2) {
            return `1*10 euros, 1*2 euro`

        } else if (restMoney > 2) {
            return `1*10 euros,  1*2 euro coins and ${(restMoney-2).toPrecision(2)} euros`


        } else if (restMoney >= 1) {
            return `1*10 euros, 1*1 euro coins and ${(restMoney-1).toPrecision(2)} euros`

        }
    }

    ///////////////////////// 5th 


    if (moneyReturn < 10 && moneyReturn > 0) {
        restMoney = moneyReturn - 0;
        if (restMoney > 5) {
            if (restMoney >= 9) {
                return `1*5 euro, 2*2 euros coins and ${(restMoney-9).toPrecision(2)} cents`
            } else if (restMoney >= 8) {
                return `1*5 euro, 1*2 euros coins, 1*1 euro coin and ${(restMoney-8).toPrecision(2)} cents`
            } else if (restMoney >= 7) {
                return `1*5 euro, 1*2 euros coins and ${(restMoney-7).toPrecision(2)} cents`
            } else if (restMoney >= 6) {
                return `1*5 euro, 1*1 euros coins and ${(restMoney-6).toPrecision(2)} cents`
            } else {
                return `1*5 euro and ${restMoney-5} cents`
            }
        } else if (restMoney == 5) {
            return `1*5 euro`

        } else if (restMoney >= 4) {
            return `2*2 euro and ${(restMoney-4).toPrecision(2)} cents`
        } else if (restMoney >= 3) {
            return `1*2 euro, 1*1 euro and ${(restMoney-3).toPrecision(2)} cents`
        } else if (restMoney == 2) {
            return ` 1*2 euro`

        } else if (restMoney > 2) {
            return `1*2 euro coins and ${(restMoney-2).toPrecision(2)} cents`


        } else if (restMoney >= 1) {
            return `1*1 euro coins and ${(restMoney-1).toPrecision(2)} cents`

        }
    }

}
console.log(moneyReturner(100, 3.27));