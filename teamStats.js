/* This project practices JavaScript Objects and Methods.
    It has a 'team' object. setters and getters are used to allow 
    safe modifcation and retrieval of data. Other methods are included
    to make the exercise more fun.

    Enjoy!
                                                        -By ydelvis

    #AmaliTechTraining   #Codecademy 
*/

let team = {
    _players: [{
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Elvis',
      lastName: 'Yeboah',
      age: 17
    },
    {
       firstName: 'Esther',
      lastName: 'Yeboah',
      age: 14
    }],
    _games:[{
      opponent: 'Broncos',
      opponentPoints: 27
    }, {
      opponent: 'Barcelona',
      opponentPoint: 48
    },{
      opponent: 'Real Madrid',
      opponentPoint: 62
    }],
  
    get players(){
      return this._players;
    },
  
    get games(){
      return this._games;
    },
  
    addPlayer(firstName,lastName,age){
      let player = {firstName,lastName,age};
      this._players.push(player);
    },
  
    addGame(opponent,opponentPoints){
      let game = {opponent, opponentPoints};
      this._games.push(game);
    }
  };
  
  team.addPlayer('Joy','Owusu',7)
  team.addPlayer('Steph', 'Curry',28)
  team.addPlayer('Lisa','Leslie',44)
  
  team.addGame('Arsenal',27);
  team.addGame('Chelsea',30);
  team.addGame('Liverpool',51);
  
  
  console.log(team._games)

  //End of code