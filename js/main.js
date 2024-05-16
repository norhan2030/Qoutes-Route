let qoutes=[{
  qoute:"“Be yourself; everyone else is already taken.”",
  aouther:"― Oscar Wilde"
},
{
  qoute:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  aouther:"― Marilyn Monroe"
},
{
  qoute:"“So many books, so little time.”",
  aouther:"― Frank Zappa"
},
{
  qoute:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  aouther:"― Albert Einstein"
},
{
  qoute:"“A room without books is like a body without a soul.”",
  aouther:"― Marcus Tullius Cicero"
},
{
  qoute:" “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
  aouther:"― Bernard M. Baruch"
},
{
  qoute:"“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
  aouther:"― William W. Purkey"
},
{
  qoute:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  aouther:"― Dr. Seuss"
},
{
  qoute:"“You only live once, but if you do it right, once is enough.”",
  aouther:"― Mae West"
},
{
  qoute:"“Be the change that you wish to see in the world.”",
  aouther:"― Mahatma Gandhi"
},
{
  qoute:"“In three words I can sum up everything I've learned about life: it goes on.”",
  aouther:"― Robert Frost"
},
{
  qoute:"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
  aouther:"― J.K. Rowling, Harry Potter and the Goblet of Fire"
},
{
  qoute:"“Don’t walk in front of me… I may not follo Don’t walk behind me… I may not lead Walk beside me… just be my friend”",
  aouther:"― Albert Camus"
},
{
  qoute:"“If you tell the truth, you don't have to remember anything.”",
  aouther:"― Mark Twain"
},
{
  qoute:"“Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .”",
  aouther:"― C.S. Lewis, The Four Loves"
},
{
  qoute:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
  aouther:"― Maya Angelou"
},
{
  qoute:"“A friend is someone who knows all about you and still loves you.”",
  aouther:"― Elbert Hubbard"
},
{
  qoute:"“To live is the rarest thing in the world. Most people exist, that is all.”",
  aouther:"― Oscar Wilde"
},
{
  qoute:"“I am so clever that sometimes I don't understand a single word of what I am saying.”",
  aouther:"― Oscar Wilde, The Happy Prince and Other Stories"
},
{
  qoute:"““To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
  aouther:"― Ralph Waldo Emerson"
},
]



let demo=document.querySelector("#demo");
let cotainer=""
let last;
function showQoutes(){
  
  number = Math.trunc(Math.random()*20) ;
  if(last==number){
    number=number+1
  }
  console.log(number)
  cotainer =`
  <p class="mb-5 fs-3">${qoutes[number].qoute}</p>
  <span class="mb-5 fs-6">${qoutes[number].aouther}</span>
  `
  last=number;
  
  demo.innerHTML=cotainer
  
}