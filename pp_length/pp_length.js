let widget = await createWidget();
let min = 1;
let max = 32;

// Check where the cript is running
if(config.runsInWidget){
    // Runs inside a widget so add it to the homescreen widget
    Script.setWidget(widget);
}else{
    // Show the medium widget inside the app
    widget.presentMedium();
}
Script.complete();

async function createWidget(){
    // Create new empty ListWidget instance
    let listWidget = new ListWidget();

    // Background
    listWidget.backgroundColor = new Color("#000000");

    // Add heading
    let heading = listWidget.addText("Your's pp size");
    heading.leftAlignText();
    heading.font = Font.lightSystemFont(25);
    heading.textColor = new Color("#ffffff");

    // Generate Length of pp
    let getPPLength = getPPLength(min, max);

    // Generate actual pp
    let thePP = generatePP(length);
    printPP(thePP);

    // Rate the length of pp
    let rating = ratePP(getPPLength, min, max);
    printPPcomponents(rating);

    return listWidget;
}

function getPPLength(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function generatePP(length){
    let pp = "8";
    for(let i = 0; i < length; i++){
        pp += "=";
    }
    pp += "D";
    return pp;
}

function ratePP(length, min, max){
    let third = (max - min) / 3;

    if(length <= min + third){
        return "Bruh so small";
    }else if(length <= min + third*2){
        return "That's ok";
    }else if(length <= max){
        return "Shut the fuck up... that's so huge!";
    }
}

function printPP(stack, text){
    let write = stack.addText(text);
    write.centerAlignText();
    write.Font = Font.semiboldSystemFont(25);
    write.textColor = new Color("#ffffff");
}

function printPPcomponents(stack, text){
    let write = stack.addText(text);
    write.centerLeftText();
    write.Font = Font.semiboldSystemFont(25);
    write.textColor = new Color("#ffffff");
}