var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return ('Welcome, ' +name+'. You are number ' +katzDeliLine.length+' in line.');
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else if (katzDeliLine.length >= 1) {
    console.log 'Currently serving ' +katzDeliLine.shift()+'.'
    katzDeliLine.shift();
    return katzDeliLine
  }
}
