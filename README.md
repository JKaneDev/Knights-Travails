# Knights-Travails

Calculating the shortest possible path for the knight in chess from one square to another

This code is a solution to the Knight's Travails problem, which is a problem where you are given a starting chess board position of a knight and a target position, and you have to find the shortest number of moves it would take for the knight to reach the target position.

## How it works

The code uses a breadth-first search algorithm to explore all possible squares the knight can move to from the starting position. It uses two main functions: createSquare and findShortestPath.

## createSquare

The createSquare function takes in the x and y coordinates of a chess board square as arguments and returns an object representing that square. It also keeps track of all previously visited squares in a Map called visited.

The square object has the following properties:

`coords:` a function that returns the coordinates of the square in the format "x, y"

`getPrevSquare:` a function that returns the previous square object that the knight was on before reaching the current square

`setPrevSquare:` a function that sets the previous square object that the knight was on before reaching the current square

`createPossibleMoves:` a function that returns an array of square objects representing all the squares the knight can move to from the current square

The `createSquare` function also checks if the square has been previously visited by checking the visited Map. If it has, it returns the square object that is already in the Map. If it hasn't, it creates a new square object and adds it to the visited Map.

The `findShortestPath` function takes in the starting and ending coordinates of the knight on the chess board as arguments. It first calls the `createSquare` function to create the origin and target square objects. It then initializes a queue with the origin square and loops while the target square is not in the queue.

On each iteration of the loop, the function shifts the square at the front of the queue to a variable called current. It then calls the `createPossibleMoves` function on the current square to get an array of all possible squares the knight can move to from the current square. This array is saved to a variable called enqueue.

The `setPrevSquare` function is then called on each square in the enqueue array, with the current square as the argument. This sets the previous square for each possible move square as the current square. The enqueue array is then pushed to the queue.

The loop continues until the target square is found in the queue. Once it is found, the function initializes a path array with the target square and loops while the origin square is not in the path array. On each iteration of this loop, the getPrevSquare function is called on the first square in the path array to get the previous square. This previous square is then unshifted to the front of the path array.

The final path array represents the shortest path from the starting square to the target square. The function then logs the number of moves in the path and the coordinates of each square in the path.

The `findShortestPath` is called with a starting and ending coordinates of the knight in the chessboard and it will return the shortest path with the amount of moves it took to reach the target square.
