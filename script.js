// start of the js
// instead of writing every single level into the html we store it into a structured area
    const levels = [
        {
            title: 'Level 1',
            text: 'Find the cat in this room its pretty easy :)',
            image: 'enviroment/room1.webp',
            sound: 'sounds/meow1.mp3',
            cat: {
                src: 'cats/cat1.png',
                style: {
                    top: '70%',
                    left: '15%',
                    width: '40px',
                }
        }
        },
        {
            title: 'Level 2',
            text: 'Find the cat here i bet u freaking cant...',
            image: 'enviroment/room2.webp',
            sound: 'sounds/meow2.wav',
            cat: {
                src: 'cats/cat2.png',
                style: {
                    top: '50%',
                    left: '60%',
                    width: '40px',  
                }
            }
        },
        {
            title: 'level 3',
            text: 'ok you passed level 2.. but u will NEVER pass this one. i think.. D:',
            image: 'enviroment/room3.webp',
            sound: 'sounds/meow3.mp3',
            cat: {
                src: 'cats/cat3.png',
                style: {
                    top: '30%',
                    left: '40%',
                    width: '40px',
                }
            }
        },
        {
            title: 'level 4',
            text: 'try this one.. wait is this..? minecraft?',
            image: 'enviroment/room4.webp',
            sound: 'sounds/meow4.mp3',
            cat: {
                src: 'cats/cat4.png',
                style: {
                    top: '80%',
                    left: '20%',
                    width: '60px',
                }
            }
        },
        {
            title: 'level 5',
            text: 'ok this is the last one his name is jeremy, if you can find the cat here you are a true cat luver',
            image: 'enviroment/room5.webp',
            sound: 'sounds/meow5.wav',
            cat: {
                src: 'cats/cat5.png',
                style: {
                    top: '60%',
                    left: '50%',
                    width: '40px',
                }
            }
        }
        
    
    ]
    let currentLevel = 0; // the current level (index in the levels array)
    const sound = new Audio();
    const winMusic = new Audio('sounds/meowWin.mp3'); // the audio we will play when the player clicks finish
    // we create a function called loadlevel with a index parameter to load the level
    function loadLevel(index) {
        const level = levels[index];

        const background = document.getElementById('background');
        const cat = document.getElementById('cat');
        const levelTitle = document.querySelector('#game h2');
        const levelText = document.querySelector('#game p');
        sound.src = level.sound; // we set the sound to the current level sound

        
        levelTitle.textContent = level.title; 
        levelText.textContent = level.text; // we set the level text to the current level text or a default message
        background.src = level.image;
        cat.src = level.cat.src;
        cat.style.display = 'block'; // we make sure the cat is visible
        cat.style.top = level.cat.style.top; // we set the cat postion to the levels cat position
        cat.style.left = level.cat.style.left; // same but left value
        cat.style.width = level.cat.style.width; // we set the cat width 
    }
        const startBtn = document.getElementById('startBtn');
        const startDiv = document.getElementById('start');
        const gameDiv = document.getElementById('game');
        const cat = document.getElementById('cat');
        const winScreen = document.getElementById('winScreen');

    startBtn.addEventListener('click', function() {
        startDiv.style.display = 'none'; // we hide the start screen
        gameDiv.style.display = 'block'; // we show the game screen
        loadLevel(currentLevel); // calls the loadlevel function to load the level 
    });

    cat.addEventListener('click', function() {
        cat.style.display = 'none'; // we hide the cat bye


        sound.currentTime = 0; // we reset the click sound
        sound.play(); // play the gorgerous click sound 

        sound.onended = function() { // when the sound finishes playing we check if we need to load the next level or show the win screen
            currentLevel++; // we increase the current level by 1
            

    if(currentLevel >= levels.length ) { // 
        gameDiv.style.display = 'none'; // we hide the game screen
        winScreen.style.display = 'block'; // we show the win screen
        winMusic.play(); // we play the win music
        return;
    }

    
    loadLevel(currentLevel); // we load the next level
};
    });

