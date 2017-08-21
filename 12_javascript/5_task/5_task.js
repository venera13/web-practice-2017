function Calculator() {
    this.read = function ()
    {
        this.operand1 = +prompt("Введите число");
        this.operand2 = +prompt("Введите число");
    };
    this.sum = function ()
    {
        this.result = this.operand1 + this.operand2;
    };
    this.mul = function ()
    {
        this.result = this.operand1 * this.operand2;
    };
    this.div = function ()
    {
        this.result = this.operand1 / this.operand2;
    };
    this.sub = function ()
    {
        this.result = this.operand1 - this.operand2;
    };
    this.getResult = function()
    {
       return this.result;
    }
}
var calculator = new Calculator();
calculator.read();
calculator.sum();
alert(calculator.getResult());
