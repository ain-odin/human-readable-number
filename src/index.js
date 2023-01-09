module.exports = function toReadable (number) {
// function toReadable (number) {
  let str = String(number);
  let result = '';
  switch (str.length) {
    case 1:
      result += getUnits(number);
      return result;
    case 2:
      if (number > 9 && number < 20) {
        result += getTeens(number);
      }
      else {
        let units = number % 10;
        let dozens = number - units;
        result += getDozens(dozens);
        if (units != 0) {
          result += ` ${getUnits(units)}`;
        }
      }
      return result;
    case 3:
      let units = number % 10;
      let dozens = number % 100 - units;
      let hundreds = number - dozens - units;
      result += `${getUnits(hundreds / 100)} hundred`;
      if (dozens != 0) {
        let teens = number % 100;
        if (teens > 9 && teens < 20) {
          result += ` ${getTeens(teens)}`;
          return result;
        }
        else {
          result += ` ${getDozens(dozens)}`;
        }
      }
      if (units != 0) {
        result += ` ${getUnits(units)}`;
      }
      return result;
  }
};

function getUnits (number) {
  switch (number) {
    case 0:
      return 'zero';
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    case 5:
      return 'five';
    case 6:
      return 'six';
    case 7:
      return 'seven';
    case 8:
      return 'eight';
    case 9:
      return 'nine';
  }
}

function getTeens(number) {
  switch (number) {
    case 10:
      return 'ten';
    case 11:
      return 'eleven';
    case 12:
      return 'twelve';
    case 13:
      return 'thirteen';
    case 14:
      return 'fourteen';
    case 15:
      return 'fifteen';
    case 16:
      return 'sixteen';
    case 17:
      return 'seventeen';
    case 18:
      return 'eighteen';
    case 19:
      return 'nineteen';
  }
}

function getDozens(number) {
  switch (number) {
    case 20:
      return 'twenty';
    case 30:
      return 'thirty';
    case 40:
      return 'forty';
    case 50:
      return 'fifty';
    case 60:
      return 'sixty';
    case 70:
      return 'seventy';
    case 80:
      return 'eighty';
    case 90:
      return 'ninety';
  }
}



