class Cell {
    constructor(num) {
        this.cell_number = num;
        this.pair = [];
        this.list = [];
        this.flag = false;
        this.row = 0;
        this.column = 0;
        this.block = 0;
    }
    

    insert_pair(a, b) {
        this.pair = [a, b];
    };

    insert_list(x) {
        this.list.push(x);
    };

    insert_number(y) {
        this.cell_number = y;
    };

    blok_cell() {
        this.flag = true;
    };
}

const row_1 = [1, 2, 3, 10, 11, 12, 19, 20, 21];
const row_2 = [4, 5, 6, 13, 14, 15, 22, 23, 24];
const row_3 = [7, 8, 9, 16, 17, 18, 25, 26, 27];
const row_4 = [28, 29, 30, 37, 38, 39, 46, 47, 48];
const row_5 = [31, 32, 33, 40, 41, 42, 49, 50, 51];
const row_6 = [34, 35, 36, 43, 44, 45, 52, 53, 54];
const row_7 = [55, 56, 57, 64, 65, 66, 73, 74, 75];
const row_8 = [58, 59, 60, 67, 68, 69, 76, 77, 78];
const row_9 = [61, 62, 63, 70, 71, 72, 79, 80, 81];


const cells = document.querySelectorAll('.cell');

cells.forEach((cell, i) => {
    // cell.innerText = i+1;
    // i++;
    
});

