// purpose of this file = 
// 1. export an array of rookie data
// 2. I manually researched this data and compiled from online sources
// 3. I built excel first, then hand-typed into this file to match that sheet
// 4. this data is used to seed the MongoDB database 

// see comments lines 344

const rookieProspects = [
    {
      name: "Cam Ward",
      position: "QB",
      image: "prospectCamWard.jpg",
      college: "Miami (FL)",
      rank: 1.0
      
    },
    {
      name: "Shedeur Sanders",
      position: "QB",
      
      college: "Colorado",
      rank: 2.0
    },
    {
      name: "Jalen Milroe",
      position: "QB",
      college: "Alabama",
      rank: 3.0
    },
    {
      name: "Will Howard",
      position: "QB",
      college: "Ohio State",
      rank: 4.0
    },
    {
      name: "Riley Leonard",
      position: "QB",
      college: "Notre Dame",
      rank: 5.0
    },
    {
      name: "Quinn Ewers",
      position: "QB",
      college: "Texas",
      rank: 6.0
    },
    {
      name: "Kyle McCord",
      position: "QB",
      college: "Syracuse",
      rank: 7.0
    },
    {
      name: "Dillon Gabriel",
      position: "QB",
      college: "Oregon",
      rank: 8.0
    },
    {
      name: "Jaxson Dart",
      position: "QB",
      college: "Mississippi",
      rank: 9.0
    },
  
    {
      name: "Ashton Jeanty",
      position: "RB",
      college: "Boise State",
      rank: 1.0
    },
    {
      name: "Omarion Hampton",
      position: "RB",
      college: "North Carolina",
      rank: 2.0
    },
    {
      name: "Cameron Skattebo",
      position: "RB",
      college: "Arizona State",
      rank: 3.0
    },
    {
      name: "Quinshon Judkins",
      position: "RB",
      college: "Ohio State",
      rank: 4.0
    },
    {
      name: "Dylan Sampson",
      position: "RB",
      college: "Tennessee",
      rank: 5.0
    },
    {
      name: "Kaleb Johnson",
      position: "RB",
      college: "Iowa",
      rank: 6.0
    },
    {
      name: "TreVeyon Henderson",
      position: "RB",
      college: "Ohio State",
      rank: 7.0
    },
    {
      name: "RJ Harvey",
      position: "RB",
      college: "UCF",
      rank: 8.0
    },
    {
      name: "DJ Giddens",
      position: "RB",
      college: "Kansas State",
      rank: 9.0
    },
    {
      name: "Devin Neal",
      position: "RB",
      college: "Kansas",
      rank: 10.0
    },
    {
      name: "Damien Martinez",
      position: "RB",
      college: "Miami FL",
      rank: 11.0
    },
    {
      name: "Jaydon Blue",
      position: "RB",
      college: "Texas",
      rank: 12.0
    },
    {
      name: "Bhayshul Tuten",
      position: "RB",
      college: "Virginia Tech",
      rank: 13.0
    },
    {
      name: "Brashard Smith",
      position: "RB",
      college: "SMU",
      rank: 14.0
    },
    {
      name: "Jacory Croskey-Meritt",
      position: "RB",
      college: "Arizona",
      rank: 15.0
    },
  
    {
      name: "Tetairoa McMillan",
      position: "WR",
      college: "Arizona",
      rank: 1.0
    },
    {
      name: "Luther Burden III",
      position: "WR",
      college: "Missouri",
      rank: 2.0
    },
    {
      name: "Emeka Egbuka",
      position: "WR",
      college: "Ohio State",
      rank: 3.0
    },
    {
      name: "Matthew Golden",
      position: "WR",
      college: "Texas",
      rank: 4.0
    },
    {
      name: "Elic Ayomanor",
      position: "WR",
      college: "Stanford",
      rank: 5.0
    },
    {
      name: "Jack Bech",
      position: "WR",
      college: "TCU",
      rank: 6.0
    },
    {
      name: "Jayden Higgins",
      position: "WR",
      college: "Iowa State",
      rank: 7.0
    },
    {
      name: "Xavier Restrepo",
      position: "WR",
      college: "Miami (FL)",
      rank: 8.0
    },
    {
      name: "Tre Harris",
      position: "WR",
      college: "Mississippi",
      rank: 9.0
    },
    {
      name: "Jalen Royals",
      position: "WR",
      college: "Utah State",
      rank: 10.0
    },
    {
      name: "Savion Williams ",
      position: "WR",
      college: "TCU",
      rank: 11.0
    },
    {
      name: "Tez Johnson",
      position: "WR",
      college: "Oregon",
      rank: 12.0
    },
    {
      name: "Isaih Bond",
      position: "WR",
      college: "Texas",
      rank: 13.0
    },
    {
      name: "Pat Bryant",
      position: "WR",
      college: "Illinois",
      rank: 14.0
    },
    {
      name: "Kobe Hudson",
      position: "WR",
      college: "UCF",
      rank: 15.0
    },
    {
      name: "Kyle Williams",
      position: "WR",
      college: "Washington ST",
      rank: 16.0
    },
    {
      name: "Isaac Teslaa",
      position: "WR",
      college: "Arkansas",
      rank: 17.0
    },
    {
      name: "Nick Nash",
      position: "WR",
      college: "San Jose St",
      rank: 18.0
    },
    {
      name: "Jaylin Lane",
      position: "WR",
      college: "Virginia Tech",
      rank: 19.0
    },
    {
      name: "Tai Felton",
      position: "WR",
      college: "Maryland",
      rank: 20.0
    },
 
    {
      name: "Tyler Warren",
      position: "TE",
      college: "Penn State",
      rank: 1.0
    },
    {
      name: "Colston Loveland",
      position: "TE",
      college: "Michigan",
      rank: 2.0
    },
    {
      name: "Elijah Arroyo",
      position: "TE",
      college: "Miami (FL)",
      rank: 3.0
    },
    {
      name: "Terrance Ferguson",
      position: "TE",
      college: "Oregon",
      rank: 4.0
    },
    {
      name: "Mason Taylor",
      position: "TE",
      college: "LSU",
      rank: 5.0
    },
    {
      name: "Gunnar Helm",
      position: "TE",
      college: "Texas",
      rank: 6.0
    },
    {
      name: "Mitchell Evans",
      position: "TE",
      college: "Notre Dame",
      rank: 7.0
    },
    {
      name: "Harold Fannin Jr.",
      position: "TE",
      college: "Bowling Green",
      rank: 8.0
    },
    {
      name: "Benjamin Yurosek",
      position: "TE",
      college: "Georgia",
      rank: 9.0
    },
    {
      name: "Caden Prieskorn",
      position: "TE",
      college: "Mississippi",
      rank: 10.0
    }
  ];
  

// BELOW = exports the rookieProspects array so it can be imported and used in other files
module.exports = rookieProspects;

//ABOVE = rookieProspects is referenced in my seed/seed.js (lines 18 & 27)







  