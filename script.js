function OpeningCeremony(score, nextCallback) {
    console.log("Let the games begin!");
    setTimeout(() => {
      Race100M(score, nextCallback);
    }, 1000);
  }
  
  function Race100M(score, nextCallback) {
    console.log("Race100M started!");
    setTimeout(() => {
      let times = {red: getRandomInt(10, 15), blue: getRandomInt(10, 15), green: getRandomInt(10, 15), yellow: getRandomInt(10, 15)};
      console.log("Race100M times: ", times);
      let sortedTimes = Object.entries(times).sort((a, b) => a[1] - b[1]);
      let firstColor = sortedTimes[0][0];
      let secondColor = sortedTimes[1][0];
      score[firstColor] += 50;
      score[secondColor] += 25;
      console.log("Race100M scores: ", score);
      nextCallback(score, LongJump);
    }, 3000);
  }
  
  function LongJump(score, nextCallback) {
    console.log("LongJump started!");
    setTimeout(() => {
      let color = getRandomColor();
      console.log(`LongJump winner: ${color}`);
      score[color] += 100;
      console.log("LongJump scores: ", score);
      nextCallback(score, HighJump);
    }, 2000);
  }
  
  function HighJump(score, nextCallback) {
    console.log("HighJump started!");
    let color = prompt("What colour secured the highest jump?");
    if (color === null || color === "") {
      console.log("Event was cancelled");
      nextCallback(score, AwardCeremony);
    } else if (Object.keys(score).includes(color)) {
      score[color] += 100;
      console.log(`HighJump winner: ${color}`);
      console.log("HighJump scores: ", score);
      nextCallback(score, AwardCeremony);
    } else {
      console.log("Invalid color entered!");
      nextCallback(score, AwardCeremony);
    }
  }
  
  function AwardCeremony(score) {
    console.log("Award Ceremony started!");
    let sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points`);
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomColor() {
    let colors = ["red", "yellow", "blue", "green"];
    return colors[getRandomInt(0, 3)];
  }
  
  // Starting the SportsDay
  let score = {red: 0, blue: 0, green: 0, yellow: 0};
  OpeningCeremony(score, Race100M);