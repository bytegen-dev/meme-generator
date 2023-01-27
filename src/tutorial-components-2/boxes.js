function Box(id, on){
    this.id = id
    this.on = on
}

const boxes = [
    new Box(1, true),
    new Box(2, false),
    new Box(3, true),
    new Box(4, true),
    new Box(5, false),
    new Box(6, false),
]

export default boxes