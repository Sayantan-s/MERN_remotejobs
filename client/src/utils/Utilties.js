export default class Utilities {
    static moneyConverter(money) {
        return money?.length > 9
            ? (+money / Math.pow(10, 9)).toFixed(2) + 'B'
            : money?.length > 4
            ? (+money / Math.pow(10, 6)).toFixed(2) + 'M'
            : +money;
    }

    static salaryMeter(salary) {
        return salary / Math.pow(10, 3);
    }
}
