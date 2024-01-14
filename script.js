
  const puzzles = [
    ["TOOL", "BOX", "LUNCH", "TIME", "CRUNCH", "BAR"],
    ["BIG", "DADDY", "YANKEE", "DOODLE", "ART", "CLASS"],
    ["UNITED", "STATES", "BORDER", "PATROL", "UNIT", "TEST"],
    ["FIRM", "GRIP", "TIGHT", "SPACE", "WALK", "TALL"],
    ["BINARY", "SEARCH", "TERM", "PAPER", "WEIGHT", "TRAIN"],
    ["THROW", "PILLOW", "FIGHT", "NIGHT", "VISION", "QUEST"],
    ["HAUL", "CARGO", "JET", "BLUE", "MOON", "PHASES"],
    ["CREDIT", "CHECK", "PLEASE", "HOLD", "TIGHT", "KNIT"],
    ["JUNGLE", "BOOK", "SHELF", "LIFE", "LINE", "BACKER"],
    ["POINT", "BREAK", "FREE", "SPIRIT", "GUIDE", "DOG"],
    ["SILENT", "FILM", "CAMERA", "FLASH", "FIRE", "WORKS"],
    ["APPLE", "TREE", "BRANCH", "OFFICE", "DEPOT", "STORE"],
    ["SPLIT", "ENDS", "MEET", "PEOPLE", "WATCH", "STRAP"],
    ["SUN", "FLOWER", "POT", "LUCK", "CHARM", "SCHOOL"],
    ["SERVE", "LOOKS", "GOOD", "TIMES", "SQUARE", "MILE"],
    ["PROFIT", "MARGIN", "CALL", "BACK", "TRACK", "MEET"],
    ["MAFIA", "FIXER", "UPPER", "CLASS", "ACT", "COOL"],
    ["KNEE", "DEEP", "DOWN", "SOUTH", "POLE", "VAULT"],
    ["EMAIL", "CHAIN", "SMOKE", "ALARM", "CLOCK", "RADIO"],
    ["REAL", "LIFE", "CEREAL", "BRAND", "IMAGE", "FRAME"],
    ["ALPACA", "HERD", "CATTLE", "RANCH", "STYLE", "TREND"],
    ["PARTY", "CITY", "HALL", "PASS", "RUSH", "HOUR"],
    ["ROUGH", "DRAFT", "KINGS", "GUARD", "DUTY", "CALLS"],
    ["KEY", "BOARD", "VOTE", "COUNT", "DOWN", "BALLOT"],
    ["TRADE", "STOCK", "INDEX", "CARD", "GAME", "POINT"],
    ["LIKE", "BUTTON", "NOSE", "DIVE", "BOMBER", "JACKET"],
    ["ISLAND", "JAVA", "SCRIPT", "PAD", "LOCK", "BOLT"],
    ["HORSE", "AROUND", "TOWN", "PLAZA", "HOTEL", "RESORT"],
    ["YOUNG", "ADULT", "SWIM", "LESSON", "PLAN", "AHEAD"],
    ["CHUBBY", "CHEEK", "BONE", "MARROW", "SOUP", "SPOON"],
    ["DANGER", "CLOSE", "KNIT", "SCARF", "DOWN", "BAD"],
    ["CENTER", "FIELD", "TRIP", "WIRE", "MONEY", "ORDER"],
    ["BED", "SPREAD", "SHEET", "ROCK", "MUSIC", "THEORY"],
    ["JUST", "BARELY", "LEGAL", "PERMIT", "ONLY", "FANS"],
    ["TRAVEL", "BLOG", "POST", "MODERN", "FAMILY", "FEUD"],
    ["HAND", "CREAM", "SODA", "POP", "QUIZ", "MASTER"]
  ];

  
  const MAX_SCORE = 10000
  const MAX_WORD_LENGTH = 6
  const MIN_WORD_LENGTH = 3
  const FLIP_ANIMATION_DURATION = 500
  const DANCE_ANIMATION_DURATION = 500
  const keyboard = document.querySelector("[data-keyboard]")
  const alertContainer = document.querySelector("[data-alert-container]")
  const guessGrid = document.querySelector("[data-guess-grid]")
  
  const game_words = getPuzzle(puzzles)
  startInteraction()
  set_all_tiles_back_to_default()
  fill_in_first_and_last(game_words)

  function getPuzzle(puzzles) {
    const offsetFromDate = new Date(2024, 0, 14)
    const msOffset = Date.now() - offsetFromDate
    const dayOffset = msOffset / 1000 / 60 / 60 / 24
    console.log(puzzles)
    const targetWords = puzzles[Math.floor(dayOffset)]

    console.log(targetWords)
    return targetWords

  }

   

  function set_all_tiles_back_to_default() {
    tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile=> {
      tile.className = 'tile';
    })
  }

  function fill_in_first_and_last(game_words) {
    
    var first_word = game_words[0];
    var first_row = document.querySelectorAll('[row="1"]');

    var second_word = game_words[1];
    var second_row = document.querySelectorAll('[row="2"]');
    var last_word = game_words[game_words.length - 1];
    var last_row = document.querySelectorAll('[row="' + game_words.length.toString() + '"]');
    
    // Call the function with tiles, duration, and delayBetweenTiles
    
    first_row.forEach(tile => {
      tile.className = "tile";
    })
    first_row.forEach(tile => {
        col = parseInt(tile.getAttribute("col"),10)
        tile.classList.remove("flip")
        
        if (col -1 < first_word.length){
            letter = first_word[col-1].toUpperCase()
        } else {
            letter = ''
        };
        flip_tile(tile, letter, "starter")
        setTimeout(function(){
          shine_tiles(tile)
      }, 350);
    })


    last_row.forEach(tile => {
      tile.className = "tile";
    })
    last_row.forEach(tile => {
        col = parseInt(tile.getAttribute("col"),10)
        tile.classList.remove("flip")
        
        if (col -1 < last_word.length){
            letter = last_word[col-1].toUpperCase()
        } else {
            letter = ''
        };
        flip_tile(tile, letter, "starter")
        setTimeout(function(){
          shine_tiles(tile)
      }, 350);
    })

    // // giving first letter of second word.
    flip_tile(second_row[0], second_word[0], "correct")
    setTimeout(function(){
      shine_tiles(second_row[0])
    }, 350);
    
    
    // shine_tiles(second_row[0])
    // second_row[0].setAttribute('data-state', 'correct')
    // second_row[0].dataset.letter = second_word[0]
    // second_row[0].textContent = second_word[0]


}

  function startInteraction() {
    document.addEventListener("click", handleMouseClick)
    document.addEventListener("keydown", handleKeyPress)
  }
  
  function stopInteraction() {
    document.removeEventListener("click", handleMouseClick)
    document.removeEventListener("keydown", handleKeyPress)
  }
  
  function handleMouseClick(e) {
    
    if (e.target.matches("[data-key]")) {
      console.log(e)
      pressKey(e.target.dataset.key)
      return
    }
  
    if (e.target.matches("[data-enter]")) {
      submitGuess()
      e.target.blur();
      return
    }
  
    if (e.target.matches("[data-delete]")) {
      deleteKey()
      e.target.blur();
      return 
    }

    if (e.target.matches("[data-help]")) {
     give_hint();
     e.target.blur();
    
     return
    }
  }
  
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      submitGuess()
      return
    }
  
    if (e.key === "Backspace" || e.key === "Delete") {
      deleteKey()
      return
    }
  
    if (e.key.match(/^[a-z]$/)) {
      pressKey(e.key)
      return
    }
  }
  
  function pressKey(key) {

    
    tiles_in_row = guessGrid.querySelector('.tile:not([data-state])')
    const nextTile = guessGrid.querySelector('.tile:not([data-state])')
    if (nextTile.getAttribute("col") === "1") return;
    // get all tiles in the row? and then cap it at 6
    row_lookup = nextTile.getAttribute("row")
    current_row = document.querySelectorAll(`[row="${row_lookup}"]`)
    filled_in = document.querySelectorAll(`[row="${row_lookup}"][data-state="correct"]`)
    count = filled_in.length 
    all_tiles = document.querySelectorAll(`[row="${row_lookup}"][data-state="correct"], [row="${row_lookup}"][data-state="active"]`);
    if (all_tiles.length >= MAX_WORD_LENGTH) return;
    nextTile.dataset.state = "active"
    nextTile.dataset.letter = key.toUpperCase()
    nextTile.textContent = key
  
  }
  
  
  function deleteKey() {

    next_tile = guessGrid.querySelector('.tile:not([data-state])')
    const activeTiles = getActiveTiles()
    const lastTile = activeTiles[activeTiles.length - 1]
    if (lastTile == null) return
    lastTile.textContent = ""
    delete lastTile.dataset.state
    delete lastTile.dataset.letter
  }
  
  function submitGuess() {
    count_guess()

    const activeTiles = [...getActiveTiles()]
    // check for the correct word is working.
    row = locateTiles(activeTiles) 
    if (row === "row1") {
        correct_word = game_words[0]
    } else if (row === "row2") {
        correct_word = game_words[1];
    } else if (row === "row3") {
        correct_word = game_words[2];
    } else if (row === "row4") {
        correct_word = game_words[3];
    } else if (row === "row5") {
        correct_word = game_words[4];
    } else {
        correct_word = game_words[5]
    }
    
    guess = getGuess(activeTiles)

    var targetRow = row.slice(-1)
    tiles_to_animate = document.querySelectorAll('.tile[row="' + targetRow + '"]')

    if (correct_word === guess){
        
        shine_tiles(tiles_to_animate)
        correct_answer()
        WL = checkWinLose()
        if (WL !== true) {
          give_next_letter()
        }
        // Correct answer logic
        // include animation
        // move to the next line a give the first letter of the next word.
    } else {
        if (guess === "XXXXXX") {
          correct_tiles = document.querySelectorAll('[data-state="correct"], [data-state="hint_given"]')
          last_correct = correct_tiles[correct_tiles.length - 1]
          const row_lookup = last_correct.getAttribute("row")
          tiles_to_animate = document.querySelectorAll('.tile[row="' + row_lookup + '"]')

        }
        shakeTiles(tiles_to_animate)
        wrong_answer()
        // give_next_letter()
        // wrong answer logic
        // include animation
        // clear out guess and give the next letter in the same word.
    }

    
    // stopInteraction()
    // activeTiles.forEach((...params) => flipTile(...params, guess))
  }
  
  
  function getActiveTiles() {
    return guessGrid.querySelectorAll('[data-state="active"]')
  }

//   Created by me.
  function locateTiles (tiles) {
    var tile_locations = []
    tiles.forEach(function (tile) {
        var locationValue = tile.getAttribute('row');
        tile_locations.push(locationValue)
    
    });
    return 'row' + tile_locations[0];
  }
  
  function getGuess (tiles) {
    var guessed_word = ''

    if (tiles[0]) {
      var targetRow = tiles[0].getAttribute('row')
      tiles = document.querySelectorAll('.tile[row="' + targetRow + '"]')

      tiles.forEach((tile) => {
          guessed_word += tile.textContent.trim()
    
      });
    } else {
      guessed_word = 'XXXXXX'
    }
    return guessed_word.toUpperCase()
  }

//   correct answer function working as expected.
  function correct_answer() {
    var ats = getActiveTiles() 
    var guessed_word = getGuess(ats)
    var targetRow = ats[0].getAttribute('row')
    var right_answer = game_words[parseInt(targetRow,10) - 1].toUpperCase()

    if (guessed_word === right_answer) {    
        updateDataStateForRow(targetRow)       
    }
    return
    }

    function updateDataStateForRow(targetRow) {
    // Iterate through each div with the class "tile" inside the guess grid
    const tiles = document.querySelectorAll('.tile[row="' + targetRow + '"]:not([data-state="correct"]):not([data-state="hint_given"])');
    tiles.forEach(tile => {
        if (tile.textContent.trim() !== '') {
            // Change the data state to 'correct' if there is text content
            tile.setAttribute('data-state', 'correct');
        } else {
            // Change the data state to 'disabled' if there is no text content
            tile.setAttribute('data-state', 'disabled');
        }
        });
    }

    function wrong_answer() {
        var ats = getActiveTiles() 
        var guessed_word = getGuess(ats)
        if (ats[0]){
          var targetRow = ats[0].getAttribute('row')
          var right_answer = game_words[parseInt(targetRow,10) - 1].toUpperCase()
      
          if (guessed_word !== right_answer) {    
              RemoveTextForRow(targetRow)       
        }}
        return
        }

    function RemoveTextForRow(targetRow) {
        // Iterate through each div with the class "tile" inside the guess grid
        const tiles = document.querySelectorAll('.tile[row="' + targetRow + '"]')
        tiles.forEach(tile => {
            if  (tile.getAttribute('data-state') !== 'correct' && tile.getAttribute('data-state') !== 'hint_given'){
            tile.textContent = ''
            tile.removeAttribute('data-state')
            }
            });
        }

    function give_next_letter() {
        var next = guessGrid.querySelector('.tile:not([data-state])')
        var targetRow = next.getAttribute('row')
        var right_answer = game_words[parseInt(targetRow,10) - 1].toUpperCase()
        
        var col = parseInt(next.getAttribute('col'),10)
        var next_letter = right_answer[col-1]

        // sets the first active tile to the correct next letter and changes data-state to correct.
        flip_tile(next, next_letter, 'correct')
        setTimeout(function(){
          shine_tiles(next)
      }, 350);
        

        var curr_row = document.querySelectorAll('.tile[row="' + targetRow + '"]')
        var guessed_word = getGuess(curr_row)
        var right_answer = game_words[parseInt(targetRow,10) - 1].toUpperCase()
        if (guessed_word === right_answer) {
            updateDataStateForRow(targetRow)
            give_next_letter()
        }
        
    }

    function give_hint() {
        count_hint()
        var last_correct = document.querySelectorAll('[data-state="correct"], [data-state="hint_given"]')
        cur_row = last_correct[last_correct.length-1].getAttribute("row")
        next_col = (parseInt(last_correct[last_correct.length-1].getAttribute("col"),10) + 1).toString()
        hint_tile = document.querySelector('.tile[row="' + cur_row + '"][col="' + next_col + '"]');

        word = game_words[cur_row-1]
        letter = word[parseInt(next_col,10)-1]
        shine_tiles(hint_tile)
        hint_tile.dataset.letter = letter
        hint_tile.textContent = letter
        hint_tile.setAttribute('data-state', 'hint_given')

        tiles_in_row = document.querySelectorAll('.tile[row="' + cur_row + '"]');
        var guessed_word = getGuess(tiles_in_row)
        var right_answer = game_words[parseInt(cur_row,10) - 1].toUpperCase()
        if (guessed_word === right_answer) {
            updateDataStateForRow(cur_row)
            WL = checkWinLose()
            if (WL !== true) {
              give_next_letter()
            }
        };
    }

    function checkWinLose() {
      const remainingTiles = guessGrid.querySelectorAll(":not([data-state])");
      const all_tiles =  guessGrid.querySelectorAll("[data-state]");
    
      if (remainingTiles.length === 0) {
        showAlert("You Win!", );
        score = calculate_score(MAX_SCORE, seconds, guessCount, hintCount)
        showAlert("Your Score: " + score);
        stopTimer()
        stopInteraction();
        console.log("allti")
        console.log(all_tiles)
        
        danceTiles(all_tiles.querySelectorAll('.tile[row="' + "5" + '"]'))
        return true;
      }
    
      return false;
    }

    function showAlert(message, duration = 1000) {
      const alert = document.createElement("div")
      alert.textContent = message
      alert.classList.add("alert")
      alertContainer.prepend(alert)
      if (duration == null) return
    
      setTimeout(() => {
        alert.classList.add("hide")
        alert.addEventListener("transitionend", () => {
          alert.remove()
        })
      }, duration)
    }

    function flipTile(tile, index, array, guess) {
      const letter = tile.dataset.letter
      const key = keyboard.querySelector(`[data-key="${letter}"i]`)
      setTimeout(() => {
        tile.classList.add("flip")
      }, (index * FLIP_ANIMATION_DURATION) / 2)
    
      tile.addEventListener(
        "transitionend",
        () => {
          tile.classList.remove("flip")
          if (targetWord[index] === letter) {
            tile.dataset.state = "correct"
            key.classList.add("correct")
          } else if (targetWord.includes(letter)) {
            tile.dataset.state = "wrong-location"
            key.classList.add("wrong-location")
          } else {
            tile.dataset.state = "wrong"
            key.classList.add("wrong")
          }
    
          if (index === array.length - 1) {
            tile.addEventListener(
              "transitionend",
              () => {
                startInteraction()
                checkWinLose(guess, array)
              },
              { once: true }
            )
          }
        },
        { once: true }
      )
    }

    function shakeTiles(tiles) {
      stopInteraction()
      tiles.forEach(tile => {
        tile.classList.add("shake")
        tile.addEventListener(
          "animationend",
          () => {
            tile.classList.remove("shake")
          },
          { once: true }
        )
      })
      startInteraction();
    }

    function animateText(element, duration = 2000) {
      const startTime = Date.now();
      const lettersToAnimate = element.dataset.text.split("");
      const steps = lettersToAnimate.length;
    
      const map = (n, x1, y1, x2, y2) => Math.min(Math.max(((n - x1) * (y2 - x2)) / (y1 - x1) + x2, x2), y2);
    
      const random = (set) => set[Math.floor(Math.random() * set.length)];
    
      let frame;
    
      function animationFrame() {
        frame = requestAnimationFrame(animationFrame);
    
        const step = Math.round(map(Date.now() - startTime, 0, duration, 0, steps));
    
        element.innerText = lettersToAnimate
          .map((s, i) => (step - 1 >= i ? lettersToAnimate[i] : random("0123456789")))
          .join("");
    
        if (step >= steps) {
          cancelAnimationFrame(frame);
        }
      }
    
      animationFrame();
    }
    
    function flipTile(tile, index, array, guess) {
      const letter = tile.dataset.letter
      const key = keyboard.querySelector(`[data-key="${letter}"i]`)
      setTimeout(() => {
        tile.classList.add("flip")
      }, (index * FLIP_ANIMATION_DURATION) / 2)
    
      tile.addEventListener(
        "transitionend",
        () => {
          tile.classList.remove("flip")
          if (targetWord[index] === letter) {
            tile.dataset.state = "correct"
            key.classList.add("correct")
          } else if (targetWord.includes(letter)) {
            tile.dataset.state = "wrong-location"
            key.classList.add("wrong-location")
          } else {
            tile.dataset.state = "wrong"
            key.classList.add("wrong")
          }
    
          if (index === array.length - 1) {
            tile.addEventListener(
              "transitionend",
              () => {
                startInteraction()
                checkWinLose(guess, array)
              },
              { once: true }
            )
          }
        },
        { once: true }
      )
    }

    let intervalId;
    let seconds = 0;

    function startTimer() {
      // Ensure the timer is not already running
      if (!intervalId) {
        intervalId = setInterval(updateTimer, 1000);
      }
    }
  
    // Function to stop the timer
    function stopTimer() {
      // Ensure the timer is running before attempting to stop it
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    }
  
    // Function to update the timer display
    function updateTimer() {
      seconds++;
      document.getElementById('timer').innerText = seconds;
    }
  
    // Start the timer automatically on page load
    window.onload = startTimer;

    let guessCount = 0;
    let hintCount = 0;

    function count_guess() {
      // Increment the guess count
      guessCount++;
  
      // Update the HTML to display the new guess count
      document.getElementById('guessCounter').innerText = guessCount;
    }

    function count_hint() {
      // Increment the guess count
      hintCount++;
  
      // Update the HTML to display the new guess count
      document.getElementById('hintCounter').innerText = hintCount;
    }

    function calculate_score(MAX_SCORE, seconds, guessCount, hintCount){
      const timeMultiplier = Math.pow(2, Math.pow(seconds, 0.9) / 250);
      const counter = guessCount + hintCount * 20;
      const guessMultiplier = (Math.pow(counter, 1.2)) * 35;    
      const score = Math.round(Math.max(MAX_SCORE / timeMultiplier - guessMultiplier, 0));
      return score;

    }

    function danceTiles(tiles) {
      tiles.forEach((tile, index) => {
        setTimeout(() => {
          tile.classList.add("dance")
          tile.addEventListener(
            "animationend",
            () => {
              tile.classList.remove("dance")
            },
            { once: true }
          )
        }, (index * DANCE_ANIMATION_DURATION) / 5)
      })
    }

    function shine_tiles(tiles) {

      if (!tiles.length) {
        tiles.classList.add("shine");
        tiles.addEventListener(
          "animationend",
          () => {
            tiles.classList.add("shine");
          },
          { once: true }
        )
      } else {
      tiles.forEach((tile) => {
          tile.classList.add("shine");
          tile.addEventListener(
            "animationend",
            () => {
              tile.classList.add("shine");
            },
            { once: true }
          )
      })}
      startInteraction();
    }
     
function flip_tile(tiles, next_letter, dataset){
  stopInteraction();
  console.log(tiles.length)
  if (!tiles.length) {
    
    tiles.classList.add("flip");
    tiles.addEventListener(
      "transitionend",
      () => {
        tiles.classList.remove("flip");
        tiles.dataset.letter = next_letter;
        tiles.textContent = next_letter;
        tiles.setAttribute('data-state', dataset)
      },
      { once: true }
    )
  } else {
  tiles.forEach((tile) => {
      tile.classList.add("flip");
      tile.addEventListener(
        "transitionend",
        () => {
          tiles.classList.remove("flip");
          tiles.dataset.letter = next_letter;
          tiles.textContent = next_letter;
          tiles.setAttribute('data-state', dataset);
        },
        { once: true }
      )
  })}
  startInteraction();
}
