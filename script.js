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
	if (visited.has(coords())) {
		return visited.get(coords());
	} else {
		// if not: add new square to visited map
		newSquare = {
			name,
			getPrevSquare,
			setPrevSquare,
			createPossibleMoves,
		};
		visited.set(coords(), newSquare);
	}
	// return new square for use in recursive call
	return newSquare;
}

function findShortestPath(start, finish) {
	// clear visited map
	visited.clear();
	// pass start and end coords to createSquare
	const origin = createSquare(...start);
	const target = createSquare(...end);
	// initialize queue with starting square
	const queue = [origin];
	// loop while target square is not in queue
	while (!queue.includes(target)) {
		// shift square at front of queue to variable
		const current = queue.shift();
		// create list of possible moves from current square
		const enqueue = current.createPossibleMoves();
		// set current square as prev square for each possible move
		enqueue.forEach((square) => square.setPrevSquare(current));
		// add list of possible moves to queue
		queue.push(...enqueue);
	}
	// initialize path containing finishing square
	const path = [target];
	// loop while path does not include origin square
	while (!path.includes(origin)) {
		// get prev square of each square starting from target square: add to front of path
		const prevSquare = path[0].getPrevSquare();
		path.unshift(prevSquare);
	}
}
