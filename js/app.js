let colors = ['#a935be', '#5135bd', '#efee14'];


function setup(){
    createCanvas(800,600);
}


function draw(){
    background(255)
    for (let i = 0; colors.length; i++){
        let SingleColor = colors[i];

        let x = i * 100;
        let y = 0;
        let height = 100;
        let width = 100;

        fill(SingleColor);
        rect(x,y, height, width);
    }           
}