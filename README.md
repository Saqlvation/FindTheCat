# FindTheCat
Find The Cat is a simple little game in your browser, when you enter it you will see a simple play button you need to click. When you click it you will need to find all of the cats in the images, there are 5 levels total (Web Based)

example picture:
![example](examples/example1.png)


### How does it work?
We have 3 main area we have to cover here:

- how does the cat hide?
    the levels are wrapped in a container box which is set to be relative and that keeps our background image, the cat on the other hand is absolute and it is layered on top of it. we move it manually
    the cat is (#cat) while the box that keeps the levels is (#gameArea)

- The level System 
    instead of doing everything in HTML i decided to take the JS approach we use a sort of "blueprint" that contains the title of the level, the custom text image and sound we will use and also the css elements of the cats

- The win condition and the way we advance levels
    the whole game progresses by listening for user inputs we check by using event listeners
![example](examples/example2.png)
The site starts and the start btn waits for a click once clicked it hides everything and displays the game screen

then if the cat gets clicked a sound
