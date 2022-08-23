// 1...............................................................
class Mohreh {
    constructor(color , x , y ,board){
        this._color = color;
        this.x = x;
        this.y = y;
        this._board = board;
        this._name ="";
    }

    get name(){
        return this._name;
    }
    set name(value){
        throw new Error ("you can't change the name");
    }

    move(x,y){
        this.x = x;
        this.y = y;
        this._board.takeCell(this, x,y);
        console.log(this._board.snapShot);
        return this._board.snapShot;
    }
    
    set x(value){
        if (value > "h" || value < "a"){
            throw new Error ("the value of x is invalid");
        }
        this._x = value;
    }

    set y(value){
        if(value > 8 || value < 1){
            throw new Error ("the value of y is invalid");
        }
        this._y = value;
    }

    get color(){
        return this._color;
    }

    get location(){
        return { x: this._x , y:this._y};
    }
}

class Board{
    constroctor (){
        this._board = [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
        ]
    }
    takeCell(obj , x ,y){
        let _x = x.charCodeAt(0)-97;
        let _y = y - 1;
        let oldObj = this._board[_y][_x];
        if(oldObj && oldObj.color !== obj.color){
            oldObj = null;
        }else if (oldObj && oldObj.color === obj.color){
            throw new Error ("this cell already is taken by you");
        }
        this._board[_y][_x] = obj;
    }

    get snapShot(){
        return this._board
    }

    getCell(x,y){
        let _x = x.charCOdeAt(0)-97;
        let _y = y -1;
        return this._board[_y][-x];
    }
}

class Pawn extends Mohreh{
    constructor(color, x, y, board){
        super(color, x, y, board);
        this._name = "Pawn";
    }
    move(x,y){
        if (x !== this._x || y !== this._y+1){
            throw new Error("you can't move here");
        }
        super.move(x,y);
    }
}

class King extends Mohreh{
    constructor(color, x, y, board){
        super(color, x, y, board);
        this._name = "King";
    }
    move(x , y){
        if(x !== this._x+1 || y !== this._y+1  || x !== this._x-1 || y !== this._y-1){
            throw new Error ("you can't move here");
        }
        super.move(x,y);
    }
}

class Rook extends Mohreh{
    constructor(color, x, y, board){
        super(color, x, y, board);
        this._name = "Rook";
    }
    move(x,y){
        if(x - this.x <= 8 || y - this.y <= 8){
            throw new Error ("you can't move here");
        }
        super.move(x,y);
    }
}

class Bishop extends Mohreh{
    constructor(color,x,y,board){
        super(color, x, y, board);
        this._name = "Bishop";
    }
    move(x,y){
        if(Math.abs(x - this._x) >= 8 && Math.abs(y - this._y) >=8){
            throw new Error("you can't move here");
        }
        super.move(x,y);
    }
}

class Knight extends Mohreh{
    constructor(color,x,y,board){
        super(color, x, y, board);
        this._name = "Knight";
    }
    move(x,y){
        if(Math.abc(x-this._x)!== 3 && Math.abc(y-this._y)!==1){
            throw new Error("you can't move here");
        }
        super.move(x,y);
    }
}

class Queen extends Mohreh{
    constructor(color,x,y,board){
        super(color,x,y,board);
        this._name = "Queen";
    }
    move(x,y){
        if((Math.abs(x-this._x) >= 8 && Math.abs(y - this._y) >= 8) || (x-this._x >=8)||(y-this._y >=8)){
            throw new Error("you can't move here");
        }
        super.move(x,y);
    }
}


const board = new Board();
const pawn = new Pawn( "white" , "a", 2, board);
pawn.move("a",3);




