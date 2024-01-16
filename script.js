  // V 1.0.2
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
    ["CREDIT", "CHECK", "PLEASE", "HOLD", "TIGHT", "KNIT"],
    ["PARTY", "CITY", "HALL", "PASS", "RUSH", "HOUR"],
    ["KNEE", "DEEP", "DOWN", "SOUTH", "POLE", "VAULT"],
    ["BED", "SPREAD", "SHEET", "ROCK", "MUSIC", "THEORY"],
    ["EMAIL", "CHAIN", "SMOKE", "ALARM", "CLOCK", "RADIO"],
    ["JUNGLE", "BOOK", "SHELF", "LIFE", "LINE", "BACKER"],
    ["THROW", "PILLOW", "FIGHT", "NIGHT", "VISION", "QUEST"],
    ["FIRM", "GRIP", "TIGHT", "SPACE", "WALK", "TALL"],
    ["CHUBBY", "CHEEK", "BONE", "MARROW", "SOUP", "SPOON"],
    ["TRADE", "STOCK", "INDEX", "CARD", "GAME", "POINT"],
    ["POINT", "BREAK", "FREE", "SPIRIT", "GUIDE", "DOG"],
    ["UNITED", "STATES", "BORDER", "PATROL", "UNIT", "TEST"],
    ["PROFIT", "MARGIN", "CALL", "BACK", "TRACK", "MEET"],
    ["SPLIT", "ENDS", "MEET", "PEOPLE", "WATCH", "STRAP"],
    ["TOOL", "BOX", "LUNCH", "TIME", "CRUNCH", "BAR"],
    ["KEY", "BOARD", "VOTE", "COUNT", "DOWN", "BALLOT"],
    ["YOUNG", "ADULT", "SWIM", "LESSON", "PLAN", "AHEAD"],
    ["TRAVEL", "BLOG", "POST", "MODERN", "FAMILY", "FEUD"],
    ["REAL", "LIFE", "CEREAL", "BRAND", "IMAGE", "FRAME"],
    ["SERVE", "LOOKS", "GOOD", "TIMES", "SQUARE", "MILE"],
    ["HAND", "CREAM", "SODA", "POP", "QUIZ", "MASTER"],
    ["APPLE", "TREE", "BRANCH", "OFFICE", "DEPOT", "STORE"],
    ["CENTER", "FIELD", "TRIP", "WIRE", "MONEY", "ORDER"],
    ["BIG", "DADDY", "YANKEE", "DOODLE", "ART", "CLASS"],
    ["ROUGH", "DRAFT", "KINGS", "GUARD", "DUTY", "CALLS"],
    ["LIKE", "BUTTON", "NOSE", "DIVE", "BOMBER", "JACKET"],
    ["BINARY", "SEARCH", "TERM", "PAPER", "WEIGHT", "TRAIN"],
    ["HAUL", "CARGO", "JET", "BLUE", "MOON", "PHASES"],
    ["DANGER", "CLOSE", "KNIT", "SCARF", "DOWN", "BAD"],
    ["ISLAND", "JAVA", "SCRIPT", "PAD", "LOCK", "BOLT"],
    ["ALPACA", "HERD", "CATTLE", "RANCH", "STYLE", "TREND"],
    ["SILENT", "FILM", "CAMERA", "FLASH", "FIRE", "WORKS"],
    ["HORSE", "AROUND", "TOWN", "PLAZA", "HOTEL", "RESORT"],
    ["JUST", "BARELY", "LEGAL", "PERMIT", "ONLY", "FANS"],
    ["MAFIA", "FIXER", "UPPER", "CLASS", "ACT", "COOL"],
    ["REMOTE", "CONTROL", "PANEL", "WALL", "STREET", "WALKER"],
    ["PHONE", "NUMBER", "LINE", "DRIVE", "CRAZY", "PERSON"],
    ["COZY", "COUCH", "POTATO", "CHIPS", "AHOY", "SAILOR"],
    ["THIRD", "WORLD", "LEADER", "SHIP", "SHAPE", "SHIFT"],
    ["POKER", "FACE", "SWAP", "NOTES", "APP", "STORE"],
    ["TIDAL", "WAVE", "POOL", "CUE", "BALL", "FIELD"],
    ["TRAIN", "DOG", "POUND", "SAND", "STONE", "HEART"],
    ["PINK", "SPIDER", "WEB", "CRAWL", "SPACE", "HEATER"],
    ["CACTUS", "JACK", "KNIFE", "BLADE", "RUNNER", "HIGH"],
    ["WIELD", "SWORD", "FISH", "TAIL", "WAG", "CHIN"],
    ["LAVA", "LAMP", "SHADE", "OVER", "DONE", "WELL"],
    ["BENCH", "PRESS", "ISSUE", "MORE", "COMMON", "SENSE"],
    ["SIXTH", "SENSE", "ORGAN", "DONOR", "BLOOD", "THIRST"],
    ["THIRST", "QUENCH", "FIRE", "PLACE", "BLAME", "GAME"],
    ["DEATH", "STAR", "BURST", "FADE", "BACK", "AWAY"],
    ["CLOUDY", "SKY", "HIGH", "JUMP", "SCARE", "QUOTES"],
    ["JUNIOR", "VARSITY", "JACKET", "POCKET", "BOOK", "CLUB"],
    ["ROLL", "CAGE", "FREE", "WILL", "SMITH", "METAL"],
    ["LAPTOP", "CASE", "LAW", "SCHOOL", "NIGHT", "MARE"],
    ["HOLD", "OPEN", "DOOR", "HANDLE", "BAR", "STOOL"],
    ["SINGLE", "MALT", "SUGAR", "PEA", "COAT", "HANGER"],
    ["FACT", "FIND", "GOD", "AWFUL", "TRUTH", "SEEKER"],
    ["NEAR", "RHYME", "ROYAL", "NAVY", "SEAL", "SCRIPT"],
    ["GRAND", "SLAM", "DUNK", "COOKIE", "CRUMB", "CAKE"],
    ["DOUBLE", "STEAL", "HEART", "BURN", "DINNER", "FORK"],
    ["HOME", "LOAN", "SHARK", "TOOTH", "CAVITY", "SEARCH"],
    ["FLIP", "SIDE", "SWIPE", "RIGHT", "MIND", "GAMES"],
    ["CHUM", "BUCKET", "HAT", "TRICK", "SHOT", "CALLER"],
    ["ANGRY", "BIRDS", "EYE", "DROP", "ANCHOR", "TENANT"],
    ["SOFT", "SILK", "ROAD", "BLOCK", "CHAIN", "LINK"],
    ["GRAPE", "VINE", "JUICE", "WORLD", "WIDE", "ANGLE"]
  ];
  
  // var existing_storage = getStorage()
  const MAX_SCORE = 10000
  const MAX_WORD_LENGTH = 6
  const MIN_WORD_LENGTH = 3
  const FLIP_ANIMATION_DURATION = 500
  const DANCE_ANIMATION_DURATION = 600
  const offsetFromDate = new Date(2024, 0, 14)
  const msOffset = Date.now() - offsetFromDate
  var dayOffset = msOffset / 1000 / 60 / 60 / 24

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate(); 
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  var todays_date = mm + '/' + dd + '/' + yyyy;
 
  const alertContainer = document.querySelector("[data-alert-container]")
  const guessGrid = document.querySelector("[data-guess-grid]")
  const game_words = getPuzzle(puzzles, dayOffset)

  // init new game
  startInteraction()
  if (already_played_check(todays_date) === true) {
    // if already played today
    already_played_check(todays_date)


  } else {
    //  if havent played today
    set_all_tiles_back_to_default()
    setTimeout(function() {
      fill_in_first_and_last(game_words);
    }, 500);
    window.onload = startTimer;
    var keyboard = document.querySelector("[data-keyboard]")
  

  }
  
  function getPuzzle(puzzles, dayOffset) {
    const targetWords = puzzles[Math.floor(dayOffset)]
    return targetWords

  }

   

  function set_all_tiles_back_to_default() {
    tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile=> {
      tile.classList.remove('shine')
      tile.classList.remove('flip')
    })
  }

  function fill_in_first_and_last(game_words) {
    set_all_tiles_back_to_default()
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
    })


    // last_row.forEach(tile => {
    //   tile.className = "tile";
    // })
    // last_row.forEach(tile => {
    //     col = parseInt(tile.getAttribute("col"),10)
    //     tile.classList.remove("flip")
        
    //     if (col -1 < last_word.length){
    //         letter = last_word[col-1].toUpperCase()
    //     } else {
    //         letter = ''
    //     };
    //     flip_tile(tile, letter, "starter")
    // })

    // // giving first letter of second word.
    flip_tile(second_row[0], second_word[0], "correct")

    setTimeout(function() {
      shine_tiles(first_row);
      // shine_tiles(last_row);
      shine_tiles(second_row[0]);
    }, 500);
    


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
          stopInteraction()
          give_next_letter()
          startInteraction()
        } else {
          final_board = getFinalBoard()
          var last_score = calculate_score(MAX_SCORE, seconds, guessCount, hintCount)
          setStorage(final_board, last_score, guessCount)
          var existing_storage = getStorage()
          var avg = get_average (existing_storage)
          var high = get_high (existing_storage)
          var games_streak = findConsecutiveDates(existing_storage);

          open_stats_modal(last_score, avg, high, games_streak)
          
        }

    } else {
        if (guess === "XXXXXX") {
          correct_tiles = document.querySelectorAll('[data-state="correct"], [data-state="hint_given"]')
          last_correct = correct_tiles[correct_tiles.length - 1]
          const row_lookup = last_correct.getAttribute("row")
          tiles_to_animate = document.querySelectorAll('.tile[row="' + row_lookup + '"]')

        }
        shakeTiles(tiles_to_animate)
        wrong_answer()
    }

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
        var last_correct = document.querySelectorAll('[data-state="correct"], [data-state="hint_given"], [data-state="disabled"]')
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
            } else {
              final_board = getFinalBoard()
              var last_score = calculate_score(MAX_SCORE, seconds, guessCount, hintCount)
              setStorage(final_board, last_score, guessCount)
              var existing_storage = getStorage()
              var avg = get_average (existing_storage)
              var high = get_high (existing_storage)
              var games_streak = findConsecutiveDates(existing_storage);
              open_stats_modal(last_score, avg, high, games_streak)
            }
        };
    }

    function checkWinLose() {
      const remainingTiles = guessGrid.querySelectorAll(":not([data-state])");
      const all_tiles =  guessGrid.querySelectorAll("[data-state]");
    
      if (remainingTiles.length === 0) {
        score = calculate_score(MAX_SCORE, seconds, guessCount, hintCount)
        showAlert("You Win!" + "Your Score: " + score);
        stopTimer()
        stopInteraction();

        danceTiles(guessGrid.querySelectorAll('.tile[row="' + "6" + '"]'))
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
        }, (index * DANCE_ANIMATION_DURATION) / 6)
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
      { once: false }
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
        { once: false }
      )
  })}
  startInteraction();
}


// stat modal

function open_stats_modal(last_score, avg, high, streak) {
  const modal = document.getElementById('stat-modal')
  modal.classList.add("open")
  update_stats(last_score, avg, high, streak)
}

function close_stats_modal() {
  const modal = document.getElementById('stat-modal')
  modal.classList.remove("open")

}

function update_stats(last_score, avg, high, streak) {
  
  var last_score_div = document.querySelector("[data-last-score]")
  last_score_div.textContent = numberWithCommas(last_score)

  var avg_score_div = document.querySelector("[data-avg-score]")
  if (avg == null) {
    avg = last_score
  }

  avg_score_div.textContent = numberWithCommas(avg)

  var high_score_div = document.querySelector("[data-best-score]")
  if (high == null) {
    high = last_score
  }

  high_score_div.textContent = numberWithCommas(high)

  var streak_div = document.querySelector("[data-streak-count]")
  if (streak == null) {
    var streak = 1
  }

  streak_div.textContent = numberWithCommas(streak)

  
  
}

function getFinalBoard() {
  var final_board = [];
  i=0
  var states = guessGrid.querySelectorAll("[data-state]")
  states.forEach(tile=> {
    ds = tile.getAttribute("data-state")
    final_board[i] = ds
    i++
  })
    return final_board
  }

function getStorage() {
  if (localStorage.getItem("WordVineData") == null) {
    var wordvine_obj = null
  } else {
    var wordvine_obj = JSON.parse(localStorage.getItem("WordVineData"));
  }
  return wordvine_obj
}

function setStorage(final_board, score, guessCount) {

  // check for existing stored items
  if (localStorage.getItem("WordVineData") === null) {

    
      var wordvine_obj = {};
      wordvine_obj[todays_date] = {
        "score": score,
        "final_board": final_board,
        "guess_count": guessCount,
      }

  } else {
    var wordvine_obj = JSON.parse(localStorage.getItem("WordVineData"));
    if (!(wordvine_obj.hasOwnProperty(todays_date))) {
      wordvine_obj[todays_date] = {
        "score": score,
        "final_board": final_board,
        "guess_count": guessCount,
      }
    }
  }
  let wordvine_obj_serialized = JSON.stringify(wordvine_obj);
  localStorage.setItem("WordVineData", wordvine_obj_serialized)
}

function already_played_check(todays_date) {
  if (localStorage.getItem("WordVineData") !== null) {
    var wordvine_obj = JSON.parse(localStorage.getItem("WordVineData"))
    if (wordvine_obj.hasOwnProperty(todays_date)) {
      var last_score = wordvine_obj[todays_date].score
      var avg = get_average (wordvine_obj)
      var high = get_high (wordvine_obj)
      var games_streak = findConsecutiveDates(wordvine_obj);

      setTimeout(function() {
        update_board_if_played(wordvine_obj, todays_date);
      }, 500);

      setTimeout(function() {
        open_stats_modal(last_score, avg, high, games_streak);
      }, 1300);
      
      
      return true
    } return false

  }
}

function update_board_if_played(wordvine_obj, todays_date){

        // update board with previous result
        var ds_list = wordvine_obj[todays_date].final_board

        var first_row_board = ds_list.slice(0,6)
        var first_row = document.querySelectorAll('[row="1"]');
        for (let i = 0; i < first_row.length; i++) {
          if (i > game_words[0].length) {
            var letter = ""
          } else {
            var letter = game_words[0][i]
          }
          flip_tile(first_row[i], letter, first_row_board[i])
        }
  
        var second_row_board = ds_list.slice(6,12)
        var second_row = document.querySelectorAll('[row="2"]');
        for (let i = 0; i < second_row.length; i++) {
          if (i > game_words[1].length) {
            var letter = ""
          } else {
            var letter = game_words[1][i]
          }
          flip_tile(second_row[i], letter, second_row_board[i])
        }
  
        var third_row_board = ds_list.slice(12,18)
        var third_row = document.querySelectorAll('[row="3"]');
        for (let i = 0; i < third_row.length; i++) {
          if (i > game_words[2].length) {
            var letter = ""
          } else {
            var letter = game_words[2][i]
          }
          flip_tile(third_row[i], letter, third_row_board[i])
        }
  
        var fourth_row_board = ds_list.slice(18,24)
        var fourth_row = document.querySelectorAll('[row="4"]');
        for (let i = 0; i < fourth_row.length; i++) {
          if (i > game_words[3].length) {
            var letter = ""
          } else {
            var letter = game_words[3][i]
          }
          flip_tile(fourth_row[i], letter, fourth_row_board[i])
        }
  
        var fifth_row_board = ds_list.slice(24,30)
        var fifth_row = document.querySelectorAll('[row="5"]');
        for (let i = 0; i < fifth_row.length; i++) {
          if (i > game_words[4].length) {
            var letter = ""
          } else {
            var letter = game_words[4][i]
          }
          flip_tile(fifth_row[i], letter, fifth_row_board[i])
        }
  
        var sixth_row_board = ds_list.slice(30,36)
        var sixth_row = document.querySelectorAll('[row="6"]');
        for (let i = 0; i < sixth_row.length; i++) {
          if (i > game_words[5].length) {
            var letter = ""
          } else {
            var letter = game_words[5][i]
          }
          flip_tile(sixth_row[i], letter, sixth_row_board[i])
        }
}

function get_average (wordvine_obj){
  if (wordvine_obj === null) {
    return null
  } else {
    all_keys = Object.keys(wordvine_obj)
    let all_scores = []
    i=0

    for (let i = 0; i < all_keys.length; i++) {
      game_day = all_keys[i]
      historical_score = wordvine_obj[game_day].score
      all_scores[i] = historical_score
    }
    var total = 0;
    for(var i = 0; i < all_scores.length; i++) {
        total += all_scores[i];
    }
    var avg = total / all_scores.length;

    return Math.round(avg)
  }
}

function get_high (wordvine_obj){
  if (wordvine_obj === null) {
    return null
  } else {
    all_keys = Object.keys(wordvine_obj)
    let all_scores = []
    i=0

    for (let i = 0; i < all_keys.length; i++) {
      game_day = all_keys[i]
      historical_score = wordvine_obj[game_day].score
      all_scores[i] = historical_score
    }

    var high = Math.max(...all_scores)

    return high
  }
}




  function findConsecutiveDates(wordvine_obj) {
    var streak = 1
    if (wordvine_obj === null) {
      return streak
    } else {
      var all_dates = Object.keys(wordvine_obj)
    }
  
    // Convert date strings to Date objects
    const dates = all_dates.map(dateStr => new Date(dateStr)).sort((a, b) => b - a);  
    
    for (let i = 1; i < dates.length; i++) {
      // Calculate the difference in days between consecutive dates
      const dayDifference = (dates[i-1] - dates[i]) / (1000 * 60 * 60 * 24);
  
      // If the difference is 1, it's a consecutive date
      if (dayDifference === 1) {
        streak++;
      } else {
        break; // End the streak if consecutive dates are broken
      }
    }
    return Math.max(1, streak); // Return at least 1
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}  
    

    

