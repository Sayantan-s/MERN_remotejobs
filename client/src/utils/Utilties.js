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

    static moment(createdAt) {
        const time = Math.ceil((Date.now() - new Date(createdAt)) / 1000 / 60 / 60 / 24);

        if (time > 31) {
            return `${12 - Math.ceil((365 - time) / 31)} month ago`;
        } else if (time < 1) {
            return `Added few hours ago`;
        } else return `${time} days ago`;
    }
}
