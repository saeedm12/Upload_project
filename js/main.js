var RandomQuotes;
var Quotes=[
    `“Be yourself; everyone else is already taken.”
― Oscar Wilde`,

`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`,

`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
― Dr. Seuss`,

`“You only live once, but if you do it right, once is enough.”
― Mae West`,

`“Be the change that you wish to see in the world.”
― Mahatma Gandhi`,

`“In three words I can sum up everything I've learned about life: it goes on.”
― Robert Frost`,

`“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
― J.K. Rowling, Harry Potter and the Goblet of Fire`,

`“If you tell the truth, you don't have to remember anything.”
― Mark Twain`,

`“To live is the rarest thing in the world. Most people exist, that is all.”
― Oscar Wilde`,

`“Without music, life would be a mistake.”
― Friedrich Nietzsche, Twilight of the Idols`,

`“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”
― Ralph Waldo Emerson`
]
function RandomQuote()
{
    RandomQuotes=Quotes[Math.random().toFixed(1)*10]
    document.getElementById("Quote").innerHTML=RandomQuotes;
}
