const {getTitle} = require('./view');
const {valueInput} = require('./view');
const {printTable} = require('console-table-printer')


//func impura
async function app(state ,update ,view){
    while (true){
        const {model, currentView} = state;
        const {title, table} = currentView;
        console.clear();
        console.log(title);
        printTable(table);
        const {billAmount, tipPercentage} = await valueInput(model);
        console.log(billAmount);
        console.log(tipPercentage);
        const updatedModel = update(billAmount,tipPercentage,model);
        state = {
            ...state,
            model : updatedModel,
            currentView : view(updatedModel)
        }
    }
}

module.exports = {app}