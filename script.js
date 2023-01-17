const visited = new Map();

function createSquare(x, y) {
	const xPos = x;
	const yPos = y;
	let prev;

	// array list of knight moves
	const knightMoves = [
		[1, 2],
		[2, 1],
		[-1, 2],
		[2, -1],
		[-2, 1],
		[1, -2],
		[-1, -2],
		[-2, -1],
	];

	// set prev square
	const setPrevSquare = () => prev;
	// get prev square
	const getPrevSquare = (newPrev) => {
		prev = prev || newPrev;
	};

	// variable: args square coords
	const coords = () => `${x}, ${y}`;

	// function: return array of valid squares knight can move to from current square
	const createPossibleMoves = () => {
		return knightMoves
			.map((offset) => generateOptions(offset[0], offset[1]))
			.filter((square) => square != undefined);
	};

	// function: returns new square object if within board bounds
	// adds knight move offset coords to current square coords
	// recursively calls create square on new coords
	const generateOptions = (xOffset, yOffset) => {
		const [newX, newY] = [xPos + xOffset, yPos + yOffset];
		// check if possible moves are in board bounds
		if (0 <= newX && newX < 8 && 0 <= newY && newY <= 8) {
			return createSquare(newX, newY);
		}
	};

	// if square already visited: return coords for this function call
	// if not: add new square to visited map
	// return new square for use in recursive call
}

function findShortestPath(start, finish) {
	// clear visited map
	// pass start and end coords to createSquare
	// initialize queue with starting square
	// loop while target square is not in queue
	// on each iteration:
	// shift square at front of queue to variable
	// create list of possible moves from current square
	// set current square as prev square for each possible move
	// add list of possible moves to queue
	// initialize path containing finishing square
	// loop while path does not include origin square
	// for each iteration:
	// get prev square of each square starting from target square: add to front of path
}
