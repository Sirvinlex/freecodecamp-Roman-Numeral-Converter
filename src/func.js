
function myFun1_9(num, myArr=[]){
  if (num < 4){
    for (let i = 1; i <= num; i++){
        myArr.push('I')
    }
  } 
  else if (num === 4){
      myArr.push('IV')
    }
  else if (num === 5){
      myArr.push('V')
    }
  
  else if (num === 6){
    myArr.push('VI')
  }
  else if (num === 7){
    myArr.push('VII')
  }
  else if (num === 8){
    myArr.push('VIII')
  }
  else if (num === 9) {
    myArr.push('IX')
  } 
}

function myFun21_39 (myNum, myArr=[]){
  for (let i = 0; myNum > 9; i +=10){
      myArr.push("X")
      myNum = myNum - 10
    }
    myFun1_9(myNum, myArr)
}

function myFun41_49 (myNum, myArr=[]){
  myArr.push('XL')
    myNum -= 40;
    myFun1_9(myNum, myArr)
}
function myFun1_100 (num, myNum, myArr=[]){
  // let arr11_13 =[]
    if (num < 10){
    myFun1_9(num, myArr)
  }
  else if (num === 10) {
    myArr.push('X')
  }
  else if (num > 10 && num < 14) {
    for (let i = 11; i <= num; i++) {
      myArr.push("I")
    }
    myArr.unshift('X')
  }
  else if (num === 14) {
    myArr.push("XIV")
  }
  else if (num === 15) {
    myArr.push("XV")
  }
  else if (num > 15 && num < 19){
    for (let i = 16; i <= num; i++){
      myArr.push("I")
    }
    myArr.unshift('XV')
  }
  else if (num === 19){
    myArr.push('XIX')
  }
  else if (num === 20){
    myArr.push('XX')
  }
  else if (num > 20 && num < 40) {
    myFun21_39(myNum, myArr)
  }
  else if (num === 40){
    myArr.push('XL')
  }
  else if (num > 40 && num < 50){
    myFun41_49(myNum, myArr)
  }
  
  else if (num >= 50 && num < 60){
    myArr.push('L')
    myNum -= 50
    myFun1_9(myNum)
  }
  else if (num >= 60 && num < 70){
    myArr.push('LX')
    myNum -= 60
    myFun1_9(myNum, myArr)
  }
  else if (num >= 70 && num < 80){
    myArr.push('LXX')
    myNum -= 70
    myFun1_9(myNum, myArr)
  }
  else if (num >= 80 && num < 90){
    myArr.push('LXXX')
    myNum -= 80
    myFun1_9(myNum, myArr)
  }
  else if (num >= 90 && num < 100){
    myArr.push('XC')
    myNum -= 90
    myFun1_9(myNum, myArr)
  }
}

function myFun1_1000 (num, myNum, myArr=[]){
  if (num < 100){
    myFun1_100(num, myNum, myArr)
  }
  if (num >= 100 && num < 400){
    for (let i = 0; myNum >= 100; i+= 100){
      myArr.push('C')
      myNum -= 100
    }
    myFun1_100(num = myNum, myNum, myArr)
  }
  if (num >= 400 && num < 500){
    myArr.push('CD')
    myNum -= 400
    myFun1_100(num = myNum, myNum, myArr)
  }
  
  if (num >= 500 && num < 600){
    myArr.push('D')
    myNum -= 500
    myFun1_100(num = myNum, myNum, myArr)
  }
  if (num >= 600 && num < 700){
    myArr.push('DC')
    myNum -= 600
    myFun1_100(num = myNum, myNum, myArr)
  }
  if (num >= 700 && num < 800){
    myArr.push('DCC')
    myNum -= 700
    myFun1_100(num = myNum, myNum, myArr)
  }
  if (num >= 800 && num < 900){
    myArr.push('DCCC')
    myNum -= 800
    myFun1_100(num = myNum, myNum, myArr)
  }
  if (num >= 900 && num < 1000){
    myArr.push('CM')
    myNum -= 900
    myFun1_100(num = myNum, myNum, myArr)
  }
}

export function convertToRoman(num) {
  let myArr = [];
  
  let myNum = num;
  if (num < 1000){
    myFun1_1000(num, myNum,myArr)
  }

  if (num >= 1000){
    for (let i = 0; myNum >= 1000; i++){
      myArr.push('M')
      myNum -= 1000
    }
    myFun1_1000(num = myNum, myNum,myArr )
  }
  let myA = myArr.join('')
  return myA
}
convertToRoman(68);