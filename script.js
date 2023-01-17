/* Breadth-First-Search (BFS) most appropriate as all shortest paths are visited
before longest paths */
function knightMoves(start, end) {
	// check if start and end squares are equal
	// check if square is valid
	// queue to hold all paths
	// set to keep track of already visited squares
	// while queue is not empty:
	// get first path from queue
	// get last square of path
	// check if final square has been reached: if so: return from loop: return number of moves and path
	// initialize array of all possible knight moves
	// loop through knight moves array list
	// for each iteration: calculate next square by adding x,y values from knight moves array
	// check if next square is valid && not previously visited
	// if both are truthy: add new square to path: add new path to queue: mark neq square as visited
	// if no path possible: return 0 moves & empty path
}
