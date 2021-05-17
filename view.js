const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');

function getTitle(){
    return chalk.blue(figlet.textSync('Tip Calculator App',{horizontalLayout: 'full',font: 'Nancyj-Underlined'}));
}

function getTable(model){
    const {billAmount} = model;
    const {tipPercentage} = model;
    const {tip} = model;
    const {total} = model;
    return [
        {'Bill Amount': billAmount},
        {'Tip (%)': tipPercentage},
        {'Tip': tip},
        {'Total': total}
    ];
}

function valueInput(model){
    const {billAmount} = model;
    const {tipPercentage} = model;
    const message = 'Bill Amount?';
    const message2 = 'Tip (%)';
    return inquirer.prompt([
        {
            name : 'billAmount',
            type : 'input',
            message : message,
            default : billAmount,
            validate : function(value){
                if (value > 1){
                    return true;
                }
                else{
                    return 'Enter a valid number'
                }
        }
    },
    {
        name : 'tipPercentage',
        type : 'input',
        message : message2,
        default : tipPercentage,
        validate : function(value){
            if (value >= 0 ){
                return true;
            }
            else{
                return 'Enter a valid number';
            }
        }
    }
    ])

}

function view (model){
    return{
        title : getTitle(),
        table : getTable(model)
    }
}


module.exports = {getTitle,valueInput,view}